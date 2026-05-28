#!/usr/bin/env node

/**
 * Post-build script: converts every Antora HTML page into a Markdown sibling
 * so AI agents can fetch clean, low-token content via content negotiation.
 *
 * Usage:  node scripts/generate-markdown.mjs [buildDir]
 *         Default buildDir = build/site
 */

import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, relative, dirname } from 'node:path';
import { JSDOM } from 'jsdom';
import { convertHtmlToMarkdown } from 'dom-to-semantic-markdown';
import { encode } from 'gpt-tokenizer';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const BUILD_DIR = process.argv[2] || 'build/site';

const ADMONITION_TYPES = [ 'note', 'warning', 'tip', 'important', 'caution' ];

const HEADING_ANCHOR_SELECTOR = [
  'h2', 'h3', 'h4', 'h5', 'h6'
].map((h) => `${h} > a.anchor`).join(', ');

// ---------------------------------------------------------------------------
// DOM helpers — small, pure-ish transforms operating on a single element
// ---------------------------------------------------------------------------

const removeAll = (root, selector) =>
  root.querySelectorAll(selector).forEach((el) => el.remove());

const capitalize = (s) =>
  s.charAt(0).toUpperCase() + s.slice(1);

const resolveAdmonitionType = (el) =>
  ADMONITION_TYPES.find((t) => el.classList.contains(t)) ?? 'note';

const isCardLayoutRow = (tr) => {
  const td = tr.querySelector('td');
  return td !== null && td.querySelector('.lead, a.xref') !== null;
};

const isCardLayoutTable = (table) =>
  !table.querySelector('thead') &&
  [ ...table.querySelectorAll('tbody tr') ].every(isCardLayoutRow);

// ---------------------------------------------------------------------------
// DOM transforms — each receives (article, document) and mutates in-place
// ---------------------------------------------------------------------------

const stripNonContent = (article) => {
  removeAll(article, 'style, script, .signup-promo');
};

const rewriteAdmonitions = (article, doc) => {
  article.querySelectorAll('.admonitionblock').forEach((adm) => {
    const content = adm.querySelector('td.content');
    if (!content) return;

    const bq = doc.createElement('blockquote');
    const label = doc.createElement('strong');
    label.textContent = capitalize(resolveAdmonitionType(adm)) + ': ';
    bq.appendChild(label);

    while (content.firstChild) {
      bq.appendChild(content.firstChild);
    }

    adm.replaceWith(bq);
  });
};

const extractDemoCode = (demo, doc) => {
  const jsPane = demo.querySelector('[id*="_pane_js_"]');
  const code = jsPane?.querySelector('code');
  if (!code) return null;

  const fragment = doc.createDocumentFragment();
  const heading = doc.createElement('p');
  heading.innerHTML = '<strong>Example</strong>';
  fragment.appendChild(heading);

  const pre = doc.createElement('pre');
  const codeEl = doc.createElement('code');
  codeEl.className = 'language-js';
  codeEl.textContent = code.textContent;
  pre.appendChild(codeEl);
  fragment.appendChild(pre);

  return fragment;
};

const rewriteLiveDemos = (article, doc) => {
  article.querySelectorAll('.live-demo').forEach((demo) => {
    const replacement = extractDemoCode(demo, doc);
    replacement ? demo.replaceWith(replacement) : demo.remove();
  });
};

const stripHeadingAnchors = (article) => {
  removeAll(article, HEADING_ANCHOR_SELECTOR);
};

const buildListItem = (td, doc) => {
  const link = td.querySelector('.lead a');
  if (!link) return null;

  const desc = td.querySelector('.lead ~ .paragraph');
  const li = doc.createElement('li');
  const strong = doc.createElement('strong');
  strong.appendChild(link.cloneNode(true));
  li.appendChild(strong);

  if (desc) {
    li.appendChild(doc.createTextNode(' \u2014 ' + desc.textContent.trim()));
  }

  return li;
};

const rewriteCardTables = (article, doc) => {
  article.querySelectorAll('table.tableblock').forEach((table) => {
    if (!isCardLayoutTable(table)) return;

    const items = [ ...table.querySelectorAll('tbody td') ]
      .map((td) => buildListItem(td, doc))
      .filter(Boolean);

    if (items.length === 0) return;

    const ul = doc.createElement('ul');
    items.forEach((li) => ul.appendChild(li));
    table.replaceWith(ul);
  });
};

// ---------------------------------------------------------------------------
// Preprocessing pipeline
// ---------------------------------------------------------------------------

const TRANSFORMS = [
  stripNonContent,
  rewriteAdmonitions,
  rewriteLiveDemos,
  stripHeadingAnchors,
  rewriteCardTables,
];

const preprocess = (articleEl, doc) => {
  const article = articleEl.cloneNode(true);
  TRANSFORMS.forEach((fn) => fn(article, doc));
  return article;
};

// ---------------------------------------------------------------------------
// Conversion
// ---------------------------------------------------------------------------

const D2M_OPTIONS = (dom) => ({
  overrideDOMParser: new dom.window.DOMParser(),
  extractMainContent: false,
  enableTableColumnTracking: false,
  refifyUrls: false,
  websiteDomain: 'https://www.tiny.cloud',
});

const fixBlankAnchors = (md) =>
  md.replace(/about:blank#/g, '#');

const toMarkdown = (articleEl, dom) => {
  const article = preprocess(articleEl, dom.window.document);
  const raw = convertHtmlToMarkdown(article.innerHTML, D2M_OPTIONS(dom));
  return fixBlankAnchors(raw);
};

// ---------------------------------------------------------------------------
// Frontmatter
// ---------------------------------------------------------------------------

const escapeYaml = (s) =>
  s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');

const buildFrontmatter = (title, tokens) =>
  `---\ntitle: "${escapeYaml(title)}"\ntokens: ${tokens}\n---\n`;

// ---------------------------------------------------------------------------
// Title extraction
// ---------------------------------------------------------------------------

const extractTitle = (doc) =>
  doc.querySelector('article.doc h1')?.textContent?.trim()
  ?? doc.querySelector('title')?.textContent?.trim()?.replace(/ \|.*$/, '')
  ?? 'Untitled';

// ---------------------------------------------------------------------------
// File walking
// ---------------------------------------------------------------------------

const collectHtmlFiles = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const full = join(dir, entry.name);
      return entry.isDirectory()
        ? collectHtmlFiles(full)
        : entry.name.endsWith('.html') ? [ full ] : [];
    })
  );
  return nested.flat();
};

// ---------------------------------------------------------------------------
// Single-page conversion
// ---------------------------------------------------------------------------

const convertPage = async (htmlPath) => {
  const html = await readFile(htmlPath, 'utf-8');
  const dom = new JSDOM(html);
  const articleEl = dom.window.document.querySelector('article.doc');

  if (!articleEl) return null;

  const title = extractTitle(dom.window.document);
  const markdown = toMarkdown(articleEl, dom);
  const tokens = encode(markdown, { allowedSpecial: 'all' }).length;
  const content = buildFrontmatter(title, tokens) + markdown + '\n';
  const mdPath = htmlPath.replace(/\.html$/, '.md');

  await mkdir(dirname(mdPath), { recursive: true });
  await writeFile(mdPath, content, 'utf-8');

  return { path: '/' + relative(BUILD_DIR, dirname(htmlPath)) + '/', tokens };
};

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const main = async () => {
  console.log(`Generating markdown siblings in ${BUILD_DIR} …`);

  const htmlFiles = await collectHtmlFiles(BUILD_DIR);
  const pages = [];

  for (const htmlPath of htmlFiles) {
    const result = await convertPage(htmlPath);
    if (result) pages.push(result);
  }

  const manifest = Object.fromEntries(pages.map(({ path, tokens }) => [ path, tokens ]));
  const manifestPath = join(BUILD_DIR, '_markdown-manifest.json');
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf-8');

  const skipped = htmlFiles.length - pages.length;
  console.log(`Done. ${pages.length} pages converted, ${skipped} skipped (no article.doc). Manifest → ${manifestPath}`);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
