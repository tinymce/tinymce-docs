#!/usr/bin/env node

/**
 * Post-build script: converts every Antora HTML page into a Markdown sibling
 * so AI agents can fetch clean, low-token content via content negotiation.
 *
 * Uses dom-to-semantic-markdown (d2m) for conversion. See docs/turndown-vs-d2m-comparison-report.md
 * for the evaluation that led to this choice.
 *
 * Usage:  node scripts/generate-markdown.mjs [buildDir]
 *         Default buildDir = build/site
 */

import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, relative, dirname } from 'node:path';
import { JSDOM } from 'jsdom';
import { convertHtmlToMarkdown } from 'dom-to-semantic-markdown';
import { encode } from 'gpt-tokenizer';

const BUILD_DIR = process.argv[2] || 'build/site';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function* walkHtml(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkHtml(full);
    } else if (entry.name.endsWith('.html')) {
      yield full;
    }
  }
}

function extractTitle(doc) {
  const h1 = doc.querySelector('article.doc h1');
  if (h1) return h1.textContent.trim();
  const title = doc.querySelector('title');
  if (title) return title.textContent.trim().replace(/ \|.*$/, '');
  return 'Untitled';
}

function buildFrontmatter(title, tokens) {
  return [
    '---',
    `title: "${title.replace(/"/g, '\\"')}"`,
    `tokens: ${tokens}`,
    '---',
    '',
  ].join('\n');
}

/**
 * Convert article.doc HTML to Markdown using dom-to-semantic-markdown.
 */
function convertToMarkdown(articleHtml, dom) {
  return convertHtmlToMarkdown(articleHtml, {
    overrideDOMParser: new dom.window.DOMParser(),
    extractMainContent: false, // we already extracted article.doc
    enableTableColumnTracking: false,
    refifyUrls: false,
    websiteDomain: 'https://www.tiny.cloud',
  });
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const manifest = {};
  let converted = 0;
  let skipped = 0;

  console.log(`Generating markdown siblings in ${BUILD_DIR} …`);

  for await (const htmlPath of walkHtml(BUILD_DIR)) {
    const html = await readFile(htmlPath, 'utf-8');
    const dom = new JSDOM(html);
    const article = dom.window.document.querySelector('article.doc');

    if (!article) {
      skipped++;
      continue;
    }

    const title = extractTitle(dom.window.document);
    const markdown = convertToMarkdown(article.innerHTML, dom);
    const tokens = encode(markdown).length;
    const frontmatter = buildFrontmatter(title, tokens);
    const fullMd = frontmatter + markdown + '\n';

    const mdPath = htmlPath.replace(/\.html$/, '.md');
    await mkdir(dirname(mdPath), { recursive: true });
    await writeFile(mdPath, fullMd, 'utf-8');

    const urlPath = '/' + relative(BUILD_DIR, dirname(htmlPath)) + '/';
    manifest[urlPath] = tokens;
    converted++;
  }

  const manifestPath = join(BUILD_DIR, '_markdown-manifest.json');
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf-8');

  console.log(
    `Done. ${converted} pages converted, ${skipped} skipped (no article.doc). Manifest → ${manifestPath}`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
