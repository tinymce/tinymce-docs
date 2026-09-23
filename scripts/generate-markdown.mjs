#!/usr/bin/env node

/**
 * Post-build script: converts every Antora HTML page into a Markdown sibling
 * so AI agents can fetch clean, low-token content via content negotiation.
 *
 * Usage:  node scripts/generate-markdown.mjs [buildDir]
 *         Default buildDir = build/site
 *
 * Each page's last_updated date comes from the page date map written by the
 * page dates Antora extension (lib/antora-extension-page-dates.js). Set
 * PAGE_DATES_FILE to read the map from somewhere other than the default.
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
const PAGE_DATES_FILE = process.env.PAGE_DATES_FILE || '.cache/page-dates.json';

// Version of the _markdown-manifest.json shape. Increment on any breaking change.
const MANIFEST_SCHEMA = 1;
const SITE_URL = 'https://www.tiny.cloud/docs';

// Not a documentation page: the site's 404 page is served for any missing path.
const EXCLUDED_PAGES = new Set([ '404.html' ]);

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

// The converter writes [text](href) only when a link holds a single, trimmed
// text node; any other link (inline code, emphasis, surrounding whitespace)
// is written out as a raw <a href> element. Flatten each link's content to
// one text node, keeping inline code and emphasis as markdown.
const codeSpan = (text) =>
  text.includes('`') ? '`` ' + text + ' ``' : '`' + text + '`';

const inlineMarkdown = (node) => {
  if (node.nodeType === node.TEXT_NODE) return node.textContent;
  if (node.nodeType !== node.ELEMENT_NODE) return '';

  const inner = () => [ ...node.childNodes ].map(inlineMarkdown).join('');
  switch (node.tagName.toLowerCase()) {
    case 'code': return codeSpan(node.textContent);
    case 'strong': case 'b': return inner().trim() ? `**${inner().trim()}**` : '';
    case 'em': case 'i': return inner().trim() ? `*${inner().trim()}*` : '';
    case 'img': return `![${node.getAttribute('alt') ?? ''}](${node.getAttribute('src') ?? ''})`;
    case 'br': return ' ';
    default: return inner();
  }
};

const flattenLinkContent = (article, doc) => {
  // Inline anchors ([[id]]) carry no href and mean nothing in markdown.
  article.querySelectorAll('a:not([href])').forEach((anchor) => {
    anchor.replaceWith(...anchor.childNodes);
  });

  article.querySelectorAll('a[href]').forEach((link) => {
    if (link.closest('pre')) return;

    const text = inlineMarkdown(link).replace(/\s+/g, ' ').trim();
    if (text) {
      link.replaceChildren(doc.createTextNode(text));
    } else {
      link.remove();
    }
  });
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
  flattenLinkContent,
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

// Occurrences of "<a href" that the page shows as literal text, outside code.
const countLiteralLinkText = (article, dom) => {
  const walker = dom.window.document.createTreeWalker(article, dom.window.NodeFilter.SHOW_TEXT);
  let count = 0;
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    if (!node.parentElement?.closest('pre, code')) {
      count += (node.textContent.match(/<a href/g) ?? []).length;
    }
  }
  return count;
};

const toMarkdown = (articleEl, dom) => {
  const article = preprocess(articleEl, dom.window.document);
  const raw = convertHtmlToMarkdown(article.innerHTML, D2M_OPTIONS(dom));
  return { markdown: fixBlankAnchors(raw), literalLinkText: countLiteralLinkText(article, dom) };
};

// ---------------------------------------------------------------------------
// Frontmatter
// ---------------------------------------------------------------------------

const escapeYaml = (s) =>
  s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\s*\n\s*/g, ' ');

const buildFrontmatter = (page) =>
  [
    '---',
    `title: "${escapeYaml(page.title)}"`,
    `description: "${escapeYaml(page.description)}"`,
    `canonical_url: "${escapeYaml(page.canonical_url)}"`,
    `md_url: "${escapeYaml(page.md_url)}"`,
    `version: "${escapeYaml(page.version)}"`,
    `last_updated: "${escapeYaml(page.last_updated)}"`,
    `tokens: ${page.tokens}`,
    '---',
    '',
  ].join('\n');

// ---------------------------------------------------------------------------
// Title extraction
// ---------------------------------------------------------------------------

const extractTitle = (doc) =>
  doc.querySelector('article.doc h1')?.textContent?.trim()
  ?? doc.querySelector('title')?.textContent?.trim()?.replace(/ \|.*$/, '')
  ?? 'Untitled';

const extractDescription = (doc) =>
  doc.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() ?? '';

// Antora points an older version's canonical URL at the newest version of the
// page, so the markdown URL is derived from the page's own path instead.
const extractCanonicalUrl = (doc, pagePath) =>
  doc.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? SITE_URL + pagePath;

// /tinymce/<version>/<page>/
const versionOf = (pagePath) => pagePath.split('/')[2] ?? '';

// ---------------------------------------------------------------------------
// Page dates
// ---------------------------------------------------------------------------

const loadPageDates = async () => {
  try {
    return JSON.parse(await readFile(PAGE_DATES_FILE, 'utf-8')).pages;
  } catch (err) {
    throw new Error(`Cannot read the page date map at ${PAGE_DATES_FILE} (${err.message}). ` +
      'It is written by the page dates Antora extension; build the site with the playbook first.');
  }
};

// ---------------------------------------------------------------------------
// Checks
// ---------------------------------------------------------------------------

// Count raw <a href> elements outside fenced code blocks and inline code spans.
// Code examples may legitimately contain HTML links, and a page may show one as
// literal text; converted links must not.
const countRawLinks = (markdown, literalLinkText) => {
  let inFence = false;
  let count = 0;
  for (const line of markdown.split('\n')) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
    } else if (!inFence) {
      count += (line.replace(/`[^`]*`/g, '').match(/<a href/g) ?? []).length;
    }
  }
  return Math.max(0, count - literalLinkText);
};

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
        : entry.name.endsWith('.html') && !(dir === BUILD_DIR && EXCLUDED_PAGES.has(entry.name)) ? [ full ] : [];
    })
  );
  return nested.flat();
};

// ---------------------------------------------------------------------------
// Single-page conversion
// ---------------------------------------------------------------------------

const convertPage = async (htmlPath, pageDates) => {
  const html = await readFile(htmlPath, 'utf-8');
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  const articleEl = doc.querySelector('article.doc');

  if (!articleEl) return null;

  const path = '/' + relative(BUILD_DIR, dirname(htmlPath)) + '/';
  const { markdown, literalLinkText } = toMarkdown(articleEl, dom);
  const page = {
    path,
    title: extractTitle(doc),
    description: extractDescription(doc),
    canonical_url: extractCanonicalUrl(doc, path),
    md_url: SITE_URL + path + 'index.md',
    version: versionOf(path),
    last_updated: pageDates[path]?.last_updated,
    tokens: encode(markdown, { allowedSpecial: 'all' }).length,
    rawLinks: countRawLinks(markdown, literalLinkText),
  };

  if (page.last_updated) {
    const mdPath = htmlPath.replace(/\.html$/, '.md');
    await mkdir(dirname(mdPath), { recursive: true });
    await writeFile(mdPath, buildFrontmatter(page) + markdown + '\n', 'utf-8');
  }

  return page;
};

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const main = async () => {
  console.log(`Generating markdown siblings in ${BUILD_DIR} …`);

  const pageDates = await loadPageDates();
  const htmlFiles = await collectHtmlFiles(BUILD_DIR);
  const pages = [];

  for (const htmlPath of htmlFiles) {
    const result = await convertPage(htmlPath, pageDates);
    if (result) pages.push(result);
  }

  const undated = pages.filter((page) => !page.last_updated).map((page) => page.path);
  if (undated.length) {
    throw new Error(`${undated.length} page(s) have no entry in the page date map:\n  ${undated.join('\n  ')}`);
  }

  const withRawLinks = pages.filter((page) => page.rawLinks > 0);
  if (withRawLinks.length) {
    throw new Error(`${withRawLinks.length} page(s) contain raw <a href> elements outside code:\n  ` +
      withRawLinks.map((page) => `${page.path} (${page.rawLinks})`).join('\n  '));
  }

  const manifest = {
    schema: MANIFEST_SCHEMA,
    generated: new Date().toISOString().replace(/\.\d{3}Z$/, 'Z'),
    pages: Object.fromEntries(
      pages
        .sort((a, b) => a.path.localeCompare(b.path))
        .map(({ path, title, description, md_url, version, last_updated, tokens }) =>
          [ path, { title, description, md_url, version, last_updated, tokens } ])
    ),
  };
  const manifestPath = join(BUILD_DIR, '_markdown-manifest.json');
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf-8');

  const skipped = htmlFiles.length - pages.length;
  console.log(`Done. ${pages.length} pages converted, ${skipped} skipped (no article.doc). Manifest → ${manifestPath}`);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
