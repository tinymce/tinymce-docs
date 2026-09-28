# Generated agent files

The documentation build generates every file an AI agent reads: the markdown twin of each page, the token manifest, `llms.txt`, `llms-full.txt`, `AGENTS.md`, `sitemap.md`, and `changes.json`.

**The build is the only source of truth for these files.** Do not edit or commit a copy by hand: the next deploy replaces it, and until then it silently disagrees with what is served. The `llms.txt` and `llms-full.txt` still committed under `modules/ROOT/attachments/` on `tinymce/8` are superseded: the build overwrites them in its output, and they are due to be deleted.

## What the build produces

| File | Published at | Written by |
|---|---|---|
| `<page>/index.md` for every page on every version | `/docs/tinymce/<version>/<page>/index.md` | `scripts/generate-markdown.mjs` |
| `_markdown-manifest.json` | `/docs/_markdown-manifest.json` | `scripts/generate-markdown.mjs` |
| `llms.txt`, `llms-full.txt` (TinyMCE 8 only) | `/docs/` and `/docs/tinymce/latest/_attachments/` | `-scripts/generate-llm-files.js` |
| `AGENTS.md`, `sitemap.md`, `changes.json` | `/docs/` | `-scripts/generate-llm-files.js` |
| Page dates: `lastmod` in the sitemap, and the `page-last-updated`, `page-first-published` and `page-date-source` page attributes | `/docs/antora-sitemap.xml`, page templates | `lib/antora-extension-page-dates.js` |

Only one `llms.txt` / `llms-full.txt` pair is published, and it covers TinyMCE 8. Earlier versions are served through their markdown twins. The LLM generator fails the build if an `llms` file appears anywhere else in the build output.

## Pipeline

The deploy workflow runs these steps in this order, and each step reads what the one before it wrote. Pull request previews run only the first step, to keep preview builds fast, so a preview has no generated agent files.

1. `yarn antora ./antora-playbook.yml` builds the site. The page dates extension reads each page's git history and writes the page date map to `.cache/page-dates.json`.
2. `yarn build:markdown build/site` converts every page to markdown with its frontmatter, and writes the manifest.
3. `yarn generate-llm-files build/site` reads the sitemap, the markdown, and the manifest, and writes the LLM files and the root agent files.

The generators make no network requests. The page dates extension makes one: a blobless clone of each content repository into `.cache/page-dates/`, updated with a fetch on later builds.

### Page dates

- A page's `last_updated` is the newest commit date of its source file or of any file it includes, directly or transitively.
- `first_published` is the oldest commit date of the page's source file alone.
- Generated API reference pages are committed to the content branches when the reference is regenerated, so their date is the date of that regeneration.
- A page with no commit history, such as an uncommitted file in a local worktree build, is dated by the build clock and marked `page-date-source: build`.

All dates are in UTC.

## Checks that fail the build

| Check | Step |
|---|---|
| A page has no entry in the page date map | markdown |
| Generated markdown contains a raw `<a href>` outside code | markdown |
| A sitemap page has no generated markdown | LLM files |
| `llms-full.txt` is under 2 MB, or lacks the `basic-setup` body sentinel | LLM files |
| An `llms` file exists outside the site root and `latest/_attachments/` | LLM files |

## Regenerating locally

To inspect the files, run the same three steps:

```bash
yarn antora ./antora-playbook.yml
yarn build:markdown build/site
yarn generate-llm-files build/site
```

The output is in `build/site/`. The first build clones the content history into `.cache/`, and later builds reuse it.
