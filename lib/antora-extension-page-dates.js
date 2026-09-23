'use strict'

/**
 * Antora extension: records when each page's content last changed.
 *
 * For every publishable page, the date is read from the git history of the
 * content source Antora built the page from. The source is identified by the
 * page's own origin (repository URL, ref and commit hash), never by the URL
 * segment of the published page: `latest` maps to `tinymce/8` today and will
 * not always.
 *
 * A page's content includes the files it pulls in with `include::`, so a
 * page's `last_updated` is the newest commit date of the page source or any
 * file it includes, directly or transitively. `first_published` is the oldest
 * commit date of the page source file alone.
 *
 * Generated API reference pages (`modules/ROOT/pages/apis/`) are committed to
 * the content branches when the API reference is regenerated for a release,
 * so they follow the same rule: their date is the date the reference was last
 * regenerated.
 *
 * A page with no commit history (for example, an uncommitted file in a local
 * worktree build) falls back to the build clock and is marked `source: build`.
 *
 * The dates are:
 *   - set on each page as the `page-last-updated`, `page-first-published` and
 *     `page-date-source` attributes, for the UI templates;
 *   - applied to the `lastmod` of every sitemap entry;
 *   - written to a JSON map, for the post-build markdown and LLM generators.
 *
 * Configuration (all optional):
 *   cache_dir: directory for the history clones  (default: <playbook dir>/.cache/page-dates)
 *   output:    path of the JSON map               (default: <playbook dir>/.cache/page-dates.json)
 */

const { execFile } = require('node:child_process')
const { createHash } = require('node:crypto')
const fs = require('node:fs')
const path = require('node:path')
const { promisify } = require('node:util')

const run = promisify(execFile)

const SCHEMA = 1
const RECORD_SEPARATOR = '\x1e'
const INCLUDE_RX = /^include::([^[\n]+)\[/gm

const toIsoSeconds = (date) => new Date(date).toISOString().replace(/\.\d{3}Z$/, 'Z')
const newest = (a, b) => (!a || (b && b > a) ? b : a)

const git = async (args, opts = {}) => {
  const { stdout } = await run('git', args, { maxBuffer: 256 * 1024 * 1024, ...opts })
  return stdout
}

const isRemoteUrl = (url) => /^(https?|ssh|git):\/\//.test(url || '') || /^[^/]+@[^:]+:/.test(url || '')

// Return a git dir that contains the full history of `origin.refhash`, or null.
// Antora fetches remote content at depth 1, so its own cache cannot be used;
// a blobless clone carries every commit and tree without the file contents.
// Several origins (one per branch) share a repository, so the clone and any
// fetch run once per URL.
const createHistoryResolver = (cacheDir, logger) => {
  const clones = new Map()
  const fetches = new Map()

  const cloneOnce = (url) => {
    if (!clones.has(url)) {
      clones.set(url, (async () => {
        const key = createHash('sha1').update(url).digest('hex').slice(0, 16)
        const gitdir = path.join(cacheDir, `${key}.git`)
        if (!fs.existsSync(gitdir)) {
          logger.info(`Cloning history of ${url}`)
          fs.mkdirSync(cacheDir, { recursive: true })
          await git(['clone', '--quiet', '--bare', '--filter=blob:none', '--no-tags', url, gitdir])
        }
        return ['--git-dir', gitdir]
      })())
    }
    return clones.get(url)
  }

  const fetchOnce = (url, gitArgs) => {
    if (!fetches.has(url)) {
      logger.info(`Fetching history of ${url}`)
      fetches.set(url, git([...gitArgs, 'fetch', '--quiet', '--filter=blob:none', '--no-tags', 'origin', '+refs/heads/*:refs/heads/*']))
    }
    return fetches.get(url)
  }

  return async (origin) => {
    if (origin.worktree) return { gitArgs: ['-C', origin.worktree], ref: 'HEAD', worktree: origin.worktree }

    if (origin.gitdir && fs.existsSync(origin.gitdir)) {
      const shallow = (await git(['--git-dir', origin.gitdir, 'rev-parse', '--is-shallow-repository']).catch(() => 'true')).trim()
      if (shallow === 'false') return { gitArgs: ['--git-dir', origin.gitdir], ref: origin.refhash }
    }

    if (!isRemoteUrl(origin.url)) return null

    const gitArgs = await cloneOnce(origin.url)
    const hasCommit = () => git([...gitArgs, 'cat-file', '-e', `${origin.refhash}^{commit}`]).then(() => true, () => false)
    if (!(await hasCommit())) {
      await fetchOnce(origin.url, gitArgs)
      if (!(await hasCommit())) throw new Error(`Commit ${origin.refhash} not found in ${origin.url}`)
    }
    return { gitArgs, ref: origin.refhash }
  }
}

// One pass over the history of a ref: path -> { newest, oldest } commit date.
const readFileDates = async ({ gitArgs, ref, worktree }, startPath) => {
  const out = await git([...gitArgs, 'log', '--no-renames', '--full-history', `--format=${RECORD_SEPARATOR}%cI`, '--name-only', ref, '--', startPath || '.'])
  const dates = new Map()
  for (const record of out.split(RECORD_SEPARATOR)) {
    const [date, ...files] = record.split('\n')
    if (!date) continue
    const iso = toIsoSeconds(date)
    for (const file of files) {
      if (!file) continue
      const entry = dates.get(file)
      if (!entry) dates.set(file, { newest: iso, oldest: iso })
      else {
        if (iso > entry.newest) entry.newest = iso
        if (iso < entry.oldest) entry.oldest = iso
      }
    }
  }
  if (worktree) {
    // Uncommitted changes have no commit date; they are dated by the build clock.
    const status = await git([...gitArgs, 'status', '--porcelain', '--', startPath || '.'])
    for (const line of status.split('\n')) {
      const file = line.slice(3).replace(/^.* -> /, '')
      if (file) dates.set(file, { uncommitted: true })
    }
  }
  return dates
}

const originKey = (origin) => `${origin.url || origin.worktree || origin.gitdir}#${origin.refhash || origin.refname}`
const repoPath = (file) => path.posix.join(file.src.origin.startPath || '', file.src.path)

// Resolve the include:: targets of a file to catalog files. Targets that use
// attribute references which cannot be resolved are skipped.
const resolveIncludes = (file, contentCatalog, attributes) => {
  const text = file.contents.toString()
  const found = []
  for (const [, rawTarget] of text.matchAll(INCLUDE_RX)) {
    const target = rawTarget.trim().replace(/\{([\w-]+)\}/g, (ref, name) => (name in attributes ? attributes[name] : ref))
    if (/[{}]/.test(target) || /^https?:/.test(target)) continue
    let resolved
    if (target.includes('$')) {
      resolved = contentCatalog.resolveResource(target, file.src, 'partial', ['partial', 'example', 'page', 'attachment'])
    } else {
      const relative = path.posix.normalize(path.posix.join(path.posix.dirname(file.src.path), target))
      resolved = contentCatalog.getFiles().find((f) =>
        f.src.path === relative && f.src.component === file.src.component && f.src.version === file.src.version)
    }
    if (resolved && resolved !== file) found.push(resolved)
  }
  return found
}

module.exports.register = function ({ config = {} }) {
  const logger = this.getLogger('page-dates-extension')
  let pageDates

  this.once('contentClassified', async ({ playbook, contentCatalog }) => {
    const playbookDir = playbook.dir || process.cwd()
    const cacheDir = path.resolve(playbookDir, config.cacheDir || '.cache/page-dates')
    const buildClock = toIsoSeconds(Date.now())
    const pages = contentCatalog.getPages((page) => page.pub)

    // Read each content source's history once.
    const resolveHistoryRepo = createHistoryResolver(cacheDir, logger)
    const histories = new Map()
    for (const page of pages) {
      const origin = page.src.origin
      if (!origin || histories.has(originKey(origin))) continue
      histories.set(originKey(origin), (async () => {
        const repo = await resolveHistoryRepo(origin)
        return repo ? readFileDates(repo, origin.startPath) : new Map()
      })())
    }
    const datesFor = async (file) => {
      const origin = file.src.origin
      if (!origin) return undefined
      return (await histories.get(originKey(origin)))?.get(repoPath(file))
    }

    // Newest date across a file and everything it includes, transitively.
    const contentDates = new Map()
    const newestContentDate = async (file, attributes, seen = new Set()) => {
      if (contentDates.has(file)) return contentDates.get(file)
      if (seen.has(file)) return undefined
      seen.add(file)
      const own = await datesFor(file)
      let date = own?.uncommitted ? buildClock : own?.newest
      for (const included of resolveIncludes(file, contentCatalog, attributes)) {
        date = newest(date, await newestContentDate(included, attributes, seen))
      }
      contentDates.set(file, date)
      return date
    }

    pageDates = new Map()
    for (const page of pages) {
      const attributes = page.src.origin?.descriptor?.asciidoc?.attributes || {}
      const own = await datesFor(page)
      const lastUpdated = await newestContentDate(page, attributes)
      const committed = !!own && !own.uncommitted && !!lastUpdated
      pageDates.set(page, {
        last_updated: committed ? lastUpdated : buildClock,
        first_published: committed ? own.oldest : buildClock,
        source: committed ? 'git' : 'build',
        ref: page.src.origin?.refname || null,
        path: page.src.origin ? repoPath(page) : page.src.path,
      })
    }

    const fallbacks = [...pageDates.values()].filter((d) => d.source === 'build').length
    logger.info(`Dated ${pageDates.size} pages from git history (${fallbacks} dated by the build clock)`)
  })

  this.once('documentsConverted', ({ contentCatalog }) => {
    for (const [page, dates] of pageDates) {
      const attributes = page.asciidoc?.attributes
      if (!attributes) continue
      attributes['page-last-updated'] = dates.last_updated
      attributes['page-first-published'] = dates.first_published
      attributes['page-date-source'] = dates.source
    }
  })

  this.once('beforePublish', ({ playbook, siteCatalog }) => {
    const byUrl = new Map([...pageDates].map(([page, dates]) => [page.pub.url, dates]))
    const siteUrl = (playbook.site.url || '').replace(/\/$/, '')

    // Antora stamps every sitemap entry with the build time; replace it with the page's date.
    for (const file of siteCatalog.getFiles()) {
      if (!/^sitemap(-[^/]+)?\.xml$/.test(file.out?.path || '')) continue
      const xml = file.contents.toString().replace(
        /<loc>([^<]+)<\/loc>(\s*)<lastmod>[^<]*<\/lastmod>/g,
        (match, loc, space) => {
          const dates = byUrl.get(loc.startsWith(siteUrl) ? loc.slice(siteUrl.length) : loc)
          return dates ? `<loc>${loc}</loc>${space}<lastmod>${dates.last_updated}</lastmod>` : match
        }
      )
      file.contents = Buffer.from(xml)
    }

    const output = path.resolve(playbook.dir || process.cwd(), config.output || '.cache/page-dates.json')
    const map = {
      schema: SCHEMA,
      generated: toIsoSeconds(Date.now()),
      pages: Object.fromEntries([...byUrl].sort(([a], [b]) => a.localeCompare(b))),
    }
    fs.mkdirSync(path.dirname(output), { recursive: true })
    fs.writeFileSync(output, JSON.stringify(map, null, 2) + '\n')
    logger.info(`Wrote page date map to ${path.relative(process.cwd(), output)}`)
  })
}
