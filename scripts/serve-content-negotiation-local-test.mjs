#!/usr/bin/env node

/**
 * LOCAL TESTING ONLY — Content negotiation dev server
 *
 * Simulates production content negotiation for local development. Serves
 * build/site/ and returns .md when Accept: text/markdown; otherwise .html.
 * Production uses CDN/Envoy; this script is for local testing only.
 *
 * Usage:  node scripts/serve-content-negotiation-local-test.mjs [port] [buildDir]
 *         Defaults: port = 4000, buildDir = build/site
 */

import { createReadStream } from 'node:fs';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, resolve, sep } from 'node:path';
import { createServer } from 'node:http';

const PORT = Number(process.argv[2]) || 4000;
const BUILD_DIR = process.argv[3] || 'build/site';
const ROOT = resolve(BUILD_DIR);

// ---------------------------------------------------------------------------
// Load manifest (token counts per URL path)
// ---------------------------------------------------------------------------

let manifest = {};
try {
  manifest = JSON.parse(
    await readFile(join(BUILD_DIR, '_markdown-manifest.json'), 'utf-8')
  );
} catch {
  console.warn('Warning: _markdown-manifest.json not found — x-markdown-tokens header will be omitted.');
}

// ---------------------------------------------------------------------------
// MIME helpers
// ---------------------------------------------------------------------------

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.md':   'text/markdown; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.txt':  'text/plain; charset=utf-8',
};

function contentType(filePath) {
  return MIME[extname(filePath)] || 'application/octet-stream';
}

function wantsMarkdown(req) {
  const accept = req.headers['accept'] || '';
  return accept.includes('text/markdown');
}

// ---------------------------------------------------------------------------
// Request handler
// ---------------------------------------------------------------------------

async function handler(req, res) {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);

  // Directory requests → index file
  if (urlPath.endsWith('/')) urlPath += 'index.html';
  if (!extname(urlPath)) urlPath += '/index.html';

  // Normalize and constrain path to ROOT to prevent traversal
  const relativePath = urlPath.replace(/^\/+/, '');
  const htmlFile = resolve(ROOT, relativePath);
  if (!(htmlFile === ROOT || htmlFile.startsWith(ROOT + sep))) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  // Content negotiation: swap .html → .md when agent requests markdown
  if (wantsMarkdown(req) && urlPath.endsWith('.html')) {
    const mdFile = htmlFile.replace(/\.html$/, '.md');
    try {
      await stat(mdFile);
      const dirPath = urlPath.replace(/index\.html$/, '');
      const tokens = manifest[dirPath];

      res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
      res.setHeader('Vary', 'Accept');
      res.setHeader('Content-Signal', 'ai-train=yes, search=yes, ai-input=yes');
      if (tokens != null) {
        res.setHeader('x-markdown-tokens', String(tokens));
      }
      res.writeHead(200);
      createReadStream(mdFile).pipe(res);
      return;
    } catch {
      // .md sibling doesn't exist — fall through to HTML
    }
  }

  // Serve the static file
  try {
    await stat(htmlFile);
    res.setHeader('Content-Type', contentType(htmlFile));
    res.writeHead(200);
    createReadStream(htmlFile).pipe(res);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
}

// ---------------------------------------------------------------------------
// Start
// ---------------------------------------------------------------------------

const server = createServer(handler);
server.listen(PORT, () => {
  console.log(`[LOCAL TEST] Content negotiation server: ${BUILD_DIR} on http://localhost:${PORT}`);
  console.log('  HTML:     curl http://localhost:' + PORT + '/tinymce/latest/');
  console.log('  Markdown: curl http://localhost:' + PORT + '/tinymce/latest/ -H "Accept: text/markdown"');
});
