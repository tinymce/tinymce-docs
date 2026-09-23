#!/usr/bin/env node

/**
 * Generates llms.txt and llms-full.txt from a built site.
 *
 * Usage:
 *   node -scripts/generate-llm-files.js [buildDir]
 *
 * buildDir defaults to build/site. Run it after the markdown step
 * (yarn build:markdown), because page titles are read from each page's
 * generated index.md rather than fetched from the published site.
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.tiny.cloud/docs/tinymce/latest';
const DOCS_ROOT_URL = 'https://www.tiny.cloud/docs';
const DEFAULT_BUILD_DIR = path.join(__dirname, '../build/site');

// The generated files describe a single documentation version — parseSitemap() keeps
// only the URLs under BASE_URL — so they must be published to that version's
// attachments directory and no other. The path is derived from BASE_URL rather than
// found by searching the build: a build contains an _attachments directory per
// version, and searching wrote one version's content into every one of them.
//
// Antora publishes modules/ROOT/attachments/* to <component>/<version>/_attachments/,
// which is a served location. The existing copy-llms-files.sh step then copies from
// there to the site root, the second served location, so writing here feeds both
// published URLs through the mechanism already in place.
function versionAttachmentDir(buildDir) {
  const versionPath = BASE_URL.startsWith(DOCS_ROOT_URL + '/')
    ? BASE_URL.slice(DOCS_ROOT_URL.length + 1)
    : null;

  if (!versionPath) return null;

  const dir = path.join(buildDir, versionPath, '_attachments');
  return fs.existsSync(dir) ? dir : null;
}

// Write to the version's attachments directory when it exists, otherwise to the build
// root. The fallback keeps /docs/llms.txt correct — and keeps copy-llms-files.sh's
// existence check passing — if the version segment ever changes.
function writeGenerated(outputDir, filename, contents) {
  const attachmentDir = versionAttachmentDir(outputDir);

  if (!attachmentDir) {
    console.warn(`! No attachments directory for ${BASE_URL}; writing ${filename} to the build root instead.`);
    const target = path.join(outputDir, filename);
    fs.writeFileSync(target, contents);
    return [target];
  }

  const target = path.join(attachmentDir, filename);
  fs.writeFileSync(target, contents);
  return [target];
}

// Convert a trailing-slash doc URL to its Markdown endpoint.
// e.g. https://www.tiny.cloud/docs/tinymce/latest/basic-setup/
//   -> https://www.tiny.cloud/docs/tinymce/latest/basic-setup/index.md
// Rewrite doc page URLs from trailing-slash to index.md Markdown endpoints.
// Only affects URLs under /docs/tinymce/; CDN and file URLs are unchanged.
function toMarkdownEndpoints(content) {
  return content.replace(
    /https:\/\/www\.tiny\.cloud\/docs\/tinymce\/[^\s)"]+/g,
    (match) => match.endsWith('/') ? match + 'index.md' : match
  );
}

function readSitemap(buildDir) {
  const sitemapPath = path.join(buildDir, 'sitemap.xml');

  if (!fs.existsSync(sitemapPath)) {
    throw new Error(`Sitemap not found: ${sitemapPath}\nBuild the site first: yarn antora ./antora-playbook.yml`);
  }

  return fs.readFileSync(sitemapPath, 'utf8');
}

// Parse sitemap.xml to extract all URLs
function parseSitemap(xmlContent) {
  const urlSet = new Set();
  const urlRegex = /<loc>(.*?)<\/loc>/g;
  let match;
  
  while ((match = urlRegex.exec(xmlContent)) !== null) {
    let url = match[1].trim();
    // Normalize URLs (ensure trailing slash consistency)
    if (url.includes('/latest/')) {
      // Remove trailing slash for consistency
      url = url.replace(/\/$/, '') + '/';
      urlSet.add(url);
    }
  }
  
  // Convert to sorted array
  return Array.from(urlSet).sort();
}

// Extract URL path from full URL
function getUrlPath(url) {
  const match = url.match(/\/latest\/(.+?)\/?$/);
  return match ? match[1].replace(/\/$/, '') : '';
}

// The markdown sibling of a page URL, in the build directory.
function markdownPathFor(buildDir, url) {
  return path.join(buildDir, url.slice(DOCS_ROOT_URL.length), 'index.md');
}

// Parse the frontmatter written by scripts/generate-markdown.mjs: one
// `key: "string"` or `key: number` pair per line, strings escaped by escapeYaml.
function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return null;

  const fields = {};
  for (const line of match[1].split('\n')) {
    const pair = line.match(/^([a-z_]+): (?:"((?:[^"\\]|\\.)*)"|(\d+))$/);
    if (pair) {
      fields[pair[1]] = pair[3] !== undefined ? Number(pair[3]) : pair[2].replace(/\\(.)/g, '$1');
    }
  }
  return { fields, body: markdown.slice(match[0].length) };
}

// Read every page's generated markdown. Every sitemap page must have one: the
// markdown step skips a page with no article element, and a page missing here
// would silently drop out of both LLM files.
function readPages(buildDir, urls) {
  const missing = [];
  const pages = new Map();

  for (const url of urls) {
    const mdPath = markdownPathFor(buildDir, url);
    const parsed = fs.existsSync(mdPath) ? parseFrontmatter(fs.readFileSync(mdPath, 'utf8')) : null;
    if (!parsed || !parsed.fields.title) {
      missing.push(url);
    } else {
      pages.set(url, parsed);
    }
  }

  if (missing.length) {
    throw new Error(`${missing.length} sitemap page(s) have no generated markdown (run yarn build:markdown first):\n  ${missing.join('\n  ')}`);
  }

  return pages;
}

// Categorize URL based on path
function categorizeUrl(urlPath) {
  // Getting Started & Installation
  if (urlPath.startsWith('getting-started') || 
      urlPath === 'introduction-to-tinymce' ||
      urlPath.startsWith('installation') || 
      urlPath === 'cloud-quick-start' ||
      urlPath === 'npm-projects' ||
      urlPath === 'zip-install' ||
      urlPath === 'invalid-api-key' ||
      urlPath === 'usage-based-billing') {
    return { category: 'Getting Started & Installation', subcategory: null };
  }
  
  // Framework Integrations - Frontend
  if (urlPath.match(/^(react|vue|angular|blazor|svelte|webcomponent|jquery)/) && 
      !urlPath.includes('-ref')) {
    return { category: 'Framework Integrations', subcategory: 'Frontend Frameworks' };
  }
  
  // Framework Integrations - Backend
  if (urlPath.match(/^(django|laravel|rails|express)/)) {
    return { category: 'Framework Integrations', subcategory: 'Backend Frameworks' };
  }
  
  // Framework Integrations - Other
  if (urlPath.startsWith('bootstrap') || urlPath.startsWith('php') || 
      urlPath.startsWith('dotnet') || urlPath.startsWith('wordpress') || 
      urlPath.startsWith('shadow-dom') || urlPath === 'swing') {
    return { category: 'Framework Integrations', subcategory: 'Other Integrations' };
  }
  
  // Framework Integrations - Technical References
  if (urlPath.includes('-ref')) {
    return { category: 'Framework Integrations', subcategory: 'Technical References' };
  }
  
  // Configuration & Setup
  const configPrefixes = [
    'basic-setup', 'work-with-plugins', 'filter-content', 'content-filtering',
    'localize', 'content-localization', 'spell-checking', 'editor-', 'content-',
    'dialog-', 'menus-configuration', 'toolbar-configuration', 'statusbar', 'ui-mode',
    'initial-configuration', 'editor-important', 'editor-size', 'editor-save',
    'editor-model', 'editor-command', 'editor-context-menu', 'editor-icon-identifiers',
    'available-menu-items', 'available-toolbar-buttons', 'editor-icons', 'editor-skin',
    'editor-theme', 'editor-content-css', 'url-handling', 'tinymce-and-csp',
    'tinymce-and-cors', 'cloud-deployment-guide', 'editor-and-features', 'features-only',
    'editor-plugin-version', 'plugin-editor-version', 'cloud-troubleshooting',
    'multiple-editors', 'understanding-editor-loads'
  ];
  if (configPrefixes.some((p) => urlPath.startsWith(p)) || urlPath === 'events') {
    return { category: 'Configuration & Setup', subcategory: null };
  }

  // Plugins & Features - Core Plugins
  const corePluginPaths = new Set([
    'plugins', 'table', 'table-options', 'image', 'link', 'lists', 'code', 'codesample',
    'autolink', 'anchor', 'autosave', 'charmap', 'checklist', 'directionality',
    'emoticons', 'fullscreen', 'help', 'insertdatetime', 'nonbreaking', 'pagebreak',
    'preview', 'save', 'searchreplace', 'visualblocks', 'visualchars', 'wordcount',
    'advlist', 'contextmenu', 'contexttoolbar', 'quickbars', 'advanced-templates',
    'fullpagehtml', 'importcss', 'importword', 'media', 'pageembed', 'paste',
    'textcolor', 'colorpicker', 'textpattern', 'hr', 'print', 'spellchecker',
    'tabfocus', 'autoresize', 'markdown', 'math', 'mentions', 'permanentpen',
    'contextform', 'context',
    'advtable', 'advcode', 'editimage', 'linkchecker', 'a11ychecker', 'casechange',
    'footnotes', 'formatpainter', 'tableofcontents', 'advanced-typography', 'typography',
    'mergetags', 'accordion', 'introduction-to-mediaembed', 'file-image-upload'
  ]);
  if (corePluginPaths.has(urlPath) || urlPath.startsWith('upload-')) {
    return { category: 'Plugins & Features', subcategory: 'Core Plugins' };
  }
  
  // Plugins & Features - Editor Modes
  if (urlPath.startsWith('use-tinymce-') || urlPath === 'inline-editor-options') {
    return { category: 'Plugins & Features', subcategory: 'Editor Modes' };
  }
  
  // Plugins & Features - Spell Checking
  if (urlPath === 'introduction-to-tiny-spellchecker' ||
      urlPath.startsWith('autocorrect') || urlPath.startsWith('spelling') ||
      urlPath.startsWith('custom-dictionaries') || urlPath.startsWith('individual-spelling') ||
      urlPath.startsWith('configure-spelling') || urlPath.startsWith('self-hosting-hunspell')) {
    return { category: 'Plugins & Features', subcategory: 'Spell Checking' };
  }
  
  // Premium Features - AI Features
  if (urlPath === 'ai' || urlPath.startsWith('ai-') ||
      urlPath === 'tinymceai' || urlPath.startsWith('tinymceai-')) {
    return { category: 'Premium Features', subcategory: 'AI Features' };
  }
  
  // Premium Features - Comments & Collaboration
  if (urlPath.startsWith('comments-') || urlPath === 'introduction-to-tiny-comments' ||
      urlPath === 'annotations' || urlPath === 'suggestededits' || urlPath === 'revisionhistory') {
    return { category: 'Premium Features', subcategory: 'Comments & Collaboration' };
  }
  
  // Premium Features - Export & Import
  if (urlPath === 'exportpdf' || urlPath === 'exportword' || urlPath === 'importword' ||
      urlPath.startsWith('html-to-') || urlPath.startsWith('docx-to-') ||
      urlPath.startsWith('export-to-') || urlPath.startsWith('import-from-')) {
    return { category: 'Premium Features', subcategory: 'Export & Import' };
  }
  
  // Premium Features - PowerPaste
  if (urlPath === 'introduction-to-powerpaste' || urlPath.startsWith('powerpaste')) {
    return { category: 'Premium Features', subcategory: 'PowerPaste' };
  }
  
  // Premium Features - TinyDrive
  if (urlPath.startsWith('tinydrive-') || urlPath === 'tinydrive-introduction' ||
      urlPath === 'introduction-to-tinydrive-apis') {
    return { category: 'Premium Features', subcategory: 'TinyDrive' };
  }
  
  // Premium Features - Media Optimizer
  if (urlPath.startsWith('uploadcare')) {
    return { category: 'Premium Features', subcategory: 'Media Optimizer' };
  }
  
  // Premium Features - Services & Infrastructure
  if (urlPath.startsWith('individual-') || urlPath.startsWith('configure-') ||
      urlPath.startsWith('mediaembed-server') || urlPath === 'license-key' ||
      urlPath === 'generate-rsa-key-pairs' || urlPath === 'troubleshoot-server') {
    return { category: 'Premium Features', subcategory: 'Services & Infrastructure' };
  }
  
  // Customization & Development - Creating Custom Components
  if (urlPath.startsWith('creating-') || urlPath.startsWith('custom-') ||
      urlPath === 'dialog' || urlPath === 'ui-components' || urlPath === 'customize-ui') {
    return { category: 'Customization & Development', subcategory: 'Creating Custom Components' };
  }
  
  // Customization & Development - Bundling & Build Tools
  if (urlPath.startsWith('bundle-') || urlPath.startsWith('bundling-') ||
      urlPath.startsWith('webpack-') || urlPath.startsWith('rollup-') ||
      urlPath.startsWith('browserify-') || urlPath.startsWith('vite-') ||
      urlPath === 'bundle-intro-setup' || urlPath === 'plugin-editor-version-compatibility' ||
      urlPath === 'introduction-to-bundling-tinymce') {
    return { category: 'Customization & Development', subcategory: 'Bundling & Build Tools' };
  }
  
  // Customization & Development - Dialog & UI Components
  if (urlPath.startsWith('dialog-') && !urlPath.startsWith('dialog-configuration')) {
    return { category: 'Customization & Development', subcategory: 'Dialog & UI Components' };
  }
  
  // Customization & Development - Enhanced Skins & Icons
  if (urlPath.startsWith('enhanced-skins') || urlPath.startsWith('using-the-icon-pack') ||
      urlPath.startsWith('custom-icon-pack')) {
    return { category: 'Customization & Development', subcategory: 'Enhanced Skins & Icons' };
  }
  
  // API Reference (order matters: first match wins)
  const apiSubcategoryPatterns = [
    ['tinymce.editor', 'Core APIs'],
    ['tinymce.plugin', 'Core APIs'],
    ['tinymce.theme', 'Core APIs'],
    ['tinymce.root', 'Core APIs'],
    ['tinymce.addonmanager', 'Core APIs'],
    ['tinymce.editormanager', 'Core APIs'],
    ['tinymce.editormode', 'Core APIs'],
    ['tinymce.editoroptions', 'Core APIs'],
    ['tinymce.editorupload', 'Core APIs'],
    ['windowmanager', 'UI APIs'],
    ['notificationmanager', 'UI APIs'],
    ['shortcuts', 'UI APIs'],
    ['editor.ui', 'UI APIs'],
    ['dom.', 'DOM APIs'],
    ['html.', 'HTML APIs'],
    ['geom.', 'Geometry APIs'],
    ['util.', 'Utility APIs'],
    ['env', 'Utility APIs'],
    ['event', 'Utility APIs'],
    ['undomanager', 'Utility APIs'],
    ['formatter', 'Utility APIs'],
    ['annotator', 'Utility APIs'],
    ['userlookup', 'Utility APIs'],
    ['fakeclipboard', 'Utility APIs']
  ];
  if (urlPath.startsWith('apis/')) {
    const match = apiSubcategoryPatterns.find(([pattern]) => urlPath.includes(pattern));
    return {
      category: 'API Reference',
      subcategory: match ? match[1] : 'Core APIs'
    };
  }
  
  // Migration Guides
  if (urlPath.includes('migration') || urlPath === 'upgrading') {
    return { category: 'Migration Guides', subcategory: null };
  }
  
  // Examples & Demos
  if (urlPath.startsWith('examples') || urlPath.startsWith('how-to-guides') ||
      urlPath.startsWith('basic-example') || urlPath.includes('-demo')) {
    return { category: 'Examples & Demos', subcategory: null };
  }
  
  // Release Information
  if (urlPath.includes('release-notes') || urlPath.includes('changelog') ||
      urlPath.match(/\d+\.\d+\.\d+-release-notes/)) {
    return { category: 'Release Information', subcategory: null };
  }
  
  // Accessibility & Security
  if (urlPath.startsWith('accessibility') || urlPath.startsWith('tinymce-and-screenreaders') ||
      urlPath.startsWith('security') || urlPath.startsWith('tinymce-for-mobile') ||
      urlPath.startsWith('shortcuts') || urlPath.startsWith('keyboard-shortcuts')) {
    return { category: 'Accessibility & Security', subcategory: null };
  }
  
  // Support & Resources
  if (urlPath === 'support' || urlPath === 'index' || urlPath.startsWith('promotions') ||
      urlPath.startsWith('tiny-docs-ai')) {
    return { category: 'Support & Resources', subcategory: null };
  }
  
  // Legacy & Other
  if (urlPath === 'moxiemanager' || urlPath === 'php-upload-handler' ||
      urlPath.startsWith('ie-template-creation')) {
    return { category: 'Legacy & Other', subcategory: null };
  }
  
  // Everything else
  return { category: 'Other', subcategory: null };
}

// Make titles unique within a category
function makeTitlesUnique(entries) {
  const titleCounts = new Map();
  const titleToEntries = new Map();
  
  // Count occurrences of each title
  entries.forEach(entry => {
    const count = titleCounts.get(entry.title) || 0;
    titleCounts.set(entry.title, count + 1);
    
    if (!titleToEntries.has(entry.title)) {
      titleToEntries.set(entry.title, []);
    }
    titleToEntries.get(entry.title).push(entry);
  });
  
  // For duplicate titles, make them unique
  const quickStartTitles = {
    'cloud-quick-start': 'Quick start: Cloud',
    'npm-projects': 'Quick start: NPM/Yarn',
    'zip-install': 'Quick start: ZIP'
  };
  titleToEntries.forEach((entriesWithTitle, title) => {
    if (titleCounts.get(title) > 1) {
      entriesWithTitle.forEach((entry, index) => {
        const path = entry.urlPath;
        if (path === 'swing' && index > 0) {
          entry.title = null; // Mark for removal - swing should only appear once
        } else if (quickStartTitles[path]) {
          entry.title = quickStartTitles[path];
        } else {
          const pathParts = path.split('-');
          if (pathParts.length > 1) {
            entry.title = `${title} (${pathParts[pathParts.length - 1]})`;
          }
        }
      });
    }
  });
  
  return entries;
}

// Generate llms-full.txt
function generateLLMsFullTxt(urls, pages) {
  const entries = urls.map(url => {
    const urlPath = getUrlPath(url);
    const catInfo = categorizeUrl(urlPath);
    
    return {
      url,
      urlPath,
      title: pages.get(url).fields.title,
      category: catInfo.category,
      subcategory: catInfo.subcategory
    };
  });
  
  // Remove duplicate URLs (keep first occurrence) - should already be unique from parseSitemap, but double-check
  const seenUrls = new Set();
  const uniqueEntries = entries.filter(entry => {
    // Normalize URL for comparison
    const normalizedUrl = entry.url.replace(/\/$/, '') + '/';
    if (seenUrls.has(normalizedUrl)) {
      return false;
    }
    seenUrls.add(normalizedUrl);
    return true;
  });
  
  // Group by category and subcategory, ensuring each URL appears only once
  const categorized = new Map();
  const urlToCategory = new Map(); // Track which category each URL is in
  
  uniqueEntries.forEach(entry => {
    // If URL already categorized, skip (prefer first category encountered)
    if (urlToCategory.has(entry.url)) {
      return;
    }
    
    const key = entry.subcategory ? `${entry.category}::${entry.subcategory}` : entry.category;
    
    if (!categorized.has(key)) {
      categorized.set(key, []);
    }
    categorized.get(key).push(entry);
    urlToCategory.set(entry.url, key);
  });
  
  // Make titles unique within each category
  categorized.forEach((entries, key) => {
    const uniqueTitles = makeTitlesUnique(entries);
    // Remove entries marked for removal (null title)
    const filtered = uniqueTitles.filter(e => e.title !== null);
    categorized.set(key, filtered);
    
    // Sort by title
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  });
  
  // Build content
  let content = `# TinyMCE Documentation - Complete Reference

## Overview
TinyMCE is a rich text editor that provides a WYSIWYG editing experience. The latest stable version is TinyMCE 8, released in July 2025.

## Current Version Information
- **Latest Stable Version**: TinyMCE 8
- **Version in CDN URLs**: Use \`tinymce@8\` or \`tinymce/8\`
- **Package Installation**: Always install \`tinymce@8\` for new projects
- **Legacy Versions**: TinyMCE 7, 6, and 5 are maintained for existing projects but new projects should use TinyMCE 8

## Getting Started

### Quick Start Guides
- **Getting Started Overview**: ${BASE_URL}/getting-started/
- **Introduction to TinyMCE**: ${BASE_URL}/introduction-to-tinymce/
- **Installation Options**: ${BASE_URL}/installation/

### Cloud Deployment (Recommended)
- **Cloud Quick Start**: ${BASE_URL}/cloud-quick-start/
- **Cloud Deployment Guide**: ${BASE_URL}/cloud-deployment-guide/
- **Editor and Features**: ${BASE_URL}/editor-and-features/
- **Specify Editor Version**: ${BASE_URL}/editor-plugin-version/
- **Cloud Troubleshooting**: ${BASE_URL}/cloud-troubleshooting/

### Self-Hosted Deployment
- **NPM Projects Quick Start**: ${BASE_URL}/npm-projects/
- **ZIP Installation Quick Start**: ${BASE_URL}/zip-install/
- **Self-Hosted Installation**: ${BASE_URL}/installation-self-hosted/

## Integration Guides

### Frontend Frameworks
`;

  // Frontend integrations - use Cloud pages as main entry points (revert from landing pages)
  const frontendIntegrations = [
    { name: 'React', paths: ['react-cloud', 'react-pm-host', 'react-zip-host'] },
    { name: 'Vue.js', paths: ['vue-cloud', 'vue-pm', 'vue-zip'] },
    { name: 'Angular', paths: ['angular-cloud', 'angular-pm', 'angular-zip'] },
    { name: 'Blazor', paths: ['blazor-cloud', 'blazor-pm', 'blazor-zip'] },
    { name: 'Svelte', paths: ['svelte-cloud', 'svelte-pm', 'svelte-zip'] },
    { name: 'Web Component', paths: ['webcomponent-cloud', 'webcomponent-pm', 'webcomponent-zip'] },
    { name: 'jQuery', paths: ['jquery-cloud', 'jquery-pm'] }
  ];

  frontendIntegrations.forEach(integration => {
    const cloudPath = integration.paths.find(p => p.includes('cloud'));
    const mainUrl = `${BASE_URL}/${cloudPath}/`;
    content += `- **${integration.name}**: ${mainUrl}\n`;
    
    integration.paths.filter(p => p !== cloudPath).forEach(path => {
      const url = `${BASE_URL}/${path}/`;
      const label = path.includes('pm') ? 'Package Manager' : 'ZIP';
      content += `  - ${label}: ${url}\n`;
    });
  });

  content += `\n### Backend Frameworks\n`;

  const backendIntegrations = [
    { name: 'Django', paths: ['django-cloud', 'django-zip'] },
    { name: 'Laravel', paths: ['laravel-tiny-cloud', 'laravel-composer-install', 'laravel-zip-install'] },
    { name: 'Ruby on Rails', paths: ['rails-cloud', 'rails-third-party', 'rails-zip'] },
    { name: 'Node.js + Express', paths: ['expressjs-pm'] }
  ];

  backendIntegrations.forEach(integration => {
    const cloudPath = integration.paths.find(p => p.includes('cloud'));
    if (cloudPath) {
      const mainUrl = `${BASE_URL}/${cloudPath}/`;
      content += `- **${integration.name}**: ${mainUrl}\n`;
      
      integration.paths.filter(p => p !== cloudPath).forEach(path => {
        const url = `${BASE_URL}/${path}/`;
        let label = path.includes('composer') ? 'Composer' : path.includes('zip') ? 'ZIP' : 'Package Manager';
        content += `  - ${label}: ${url}\n`;
      });
    } else {
      // For integrations without cloud (like Express), use first path as main
      const mainPath = integration.paths[0];
      const mainUrl = `${BASE_URL}/${mainPath}/`;
      content += `- **${integration.name}**: ${mainUrl}\n`;
      
      if (integration.paths.length > 1) {
        integration.paths.slice(1).forEach(path => {
          const url = `${BASE_URL}/${path}/`;
          content += `  - Package Manager: ${url}\n`;
        });
      }
    }
  });

  content += `\n### Other Integrations
- **Bootstrap**:
  - Cloud: ${BASE_URL}/bootstrap-cloud/
  - ZIP: ${BASE_URL}/bootstrap-zip/
- **PHP Projects**: ${BASE_URL}/php-projects/
- **.NET Projects**: ${BASE_URL}/dotnet-projects/
- **WordPress**: ${BASE_URL}/wordpress/
- **Shadow DOM**: ${BASE_URL}/shadow-dom/
- **Java Swing**: ${BASE_URL}/swing/
`;

  content += `
## Configuration

### Basic Setup
- **Basic Setup**: ${BASE_URL}/basic-setup/
- **Selector Configuration**: Required for all TinyMCE instances
- **Plugin Configuration**: ${BASE_URL}/work-with-plugins/
- **Toolbar Configuration**: Part of basic setup
- **Menu and Menu Bar**: Part of basic setup

### Common Configuration Options
- **Content Filtering**: ${BASE_URL}/filter-content/
- **Localization**: ${BASE_URL}/localize-your-language/
- **Spell Checking**: ${BASE_URL}/spell-checking/
- **Content CSS**: ${BASE_URL}/editor-content-css/
- **URL Handling**: ${BASE_URL}/url-handling/

## CDN and Package URLs

### Cloud CDN (Recommended)
\`\`\`
https://cdn.tiny.cloud/1/[api-key]/tinymce/8/tinymce.min.js
\`\`\`
Replace \`[api-key]\` with your Tiny Cloud API key.

### jsDelivr CDN
\`\`\`
https://cdn.jsdelivr.net/npm/tinymce@8/tinymce.min.js
\`\`\`

### Package Manager Installation
- **npm**: \`npm install tinymce@8\`
- **yarn**: \`yarn add tinymce@8\`
- **pnpm**: \`pnpm add tinymce@8\`
- **Composer** (PHP): \`composer require tinymce/tinymce\`
- **NuGet** (.NET): \`Install-Package TinyMCE\`

## Integration Packages

### React
- **Package**: \`@tinymce/tinymce-react\`
- **Installation**: \`npm install @tinymce/tinymce-react tinymce@8\`

### Vue
- **Package**: \`@tinymce/tinymce-vue\`
- **Installation**: \`npm install @tinymce/tinymce-vue tinymce@8\`

### Angular
- **Package**: \`@tinymce/tinymce-angular\`
- **Installation**: \`npm install @tinymce/tinymce-angular tinymce@8\`

## Code Examples

### Basic HTML Example (Cloud)
\`\`\`html
<script src="https://cdn.tiny.cloud/1/[api-key]/tinymce/8/tinymce.min.js" 
        referrerpolicy="origin"></script>
<script>
tinymce.init({
  selector: 'textarea',
  plugins: 'advlist autolink lists link image charmap preview anchor',
  toolbar: 'undo redo | blocks | bold italic | alignleft aligncenter alignright | bullist numlist | link image'
});
</script>
\`\`\`

### Basic HTML Example (Self-Hosted)
\`\`\`html
<script src="https://cdn.jsdelivr.net/npm/tinymce@8/tinymce.min.js"></script>
<script>
tinymce.init({
  selector: 'textarea',
  plugins: 'advlist autolink lists link image charmap preview anchor',
  toolbar: 'undo redo | blocks | bold italic | alignleft aligncenter alignright | bullist numlist | link image'
});
</script>
\`\`\`

### React Example
\`\`\`jsx
import { Editor } from '@tinymce/tinymce-react';

function App() {
  return (
    <Editor
      apiKey="your-api-key"
      init={{
        height: 500,
        plugins: 'advlist autolink lists link image charmap preview anchor',
        toolbar: 'undo redo | blocks | bold italic | alignleft aligncenter alignright | bullist numlist | link image'
      }}
    />
  );
}
\`\`\`

### Vue Example
\`\`\`vue
<template>
  <editor
    api-key="your-api-key"
    :init="{
      height: 500,
      plugins: 'advlist autolink lists link image charmap preview anchor',
      toolbar: 'undo redo | blocks | bold italic | alignleft aligncenter alignright | bullist numlist | link image'
    }"
  />
</template>

<script>
import Editor from '@tinymce/tinymce-vue';

export default {
  components: {
    Editor
  }
};
</script>
\`\`\`

## Important Notes for AI Assistants

1. **Always use TinyMCE 8** for new projects and code examples
2. **CDN URLs must include version 8**: Use \`tinymce@8\` or \`tinymce/8\` in URLs
3. **Package installations**: Always specify \`tinymce@8\` when installing
4. **Integration packages**: Use the latest versions compatible with TinyMCE 8
5. **Code examples default to TinyMCE 8** unless explicitly noted otherwise
6. **Legacy versions (5, 6, 7)**: Only reference when specifically asked about migration or legacy support
7. **Cloud vs Self-Hosted**: Cloud deployment is recommended for most use cases

## API Reference
- **Editor API**: ${BASE_URL}/apis/tinymce.editor/
- **Plugin API**: ${BASE_URL}/apis/tinymce.plugin/

## Migration Guides
- **Upgrading TinyMCE**: ${BASE_URL}/upgrading/
- **Migration from 7.x**: ${BASE_URL}/migration-from-7x/

## Support and Resources
- **Documentation Home**: ${BASE_URL}/
- **Release Notes**: ${BASE_URL}/release-notes/
- **Examples**: ${BASE_URL}/examples/
- **How-to Guides**: ${BASE_URL}/how-to-guides/


`;

  // Complete Documentation Index
  content += `## Complete Documentation Index\n\n`;
  content += `This section provides a complete list of all ${uniqueEntries.length} documentation pages available in TinyMCE 8, organized by category. This comprehensive index ensures LLMs have access to every documentation page, reducing the risk of hallucinations or missing important details.\n\n`;

  // Output categories in specific order
  const categoryStructure = [
    { category: 'Getting Started & Installation', subcategory: null },
    { category: 'Framework Integrations', subcategory: 'Frontend Frameworks' },
    { category: 'Framework Integrations', subcategory: 'Backend Frameworks' },
    { category: 'Framework Integrations', subcategory: 'Other Integrations' },
    { category: 'Framework Integrations', subcategory: 'Technical References' },
    { category: 'Configuration & Setup', subcategory: null },
    { category: 'Plugins & Features', subcategory: 'Core Plugins' },
    { category: 'Plugins & Features', subcategory: 'Editor Modes' },
    { category: 'Plugins & Features', subcategory: 'Spell Checking' },
    { category: 'Premium Features', subcategory: 'AI Features' },
    { category: 'Premium Features', subcategory: 'Comments & Collaboration' },
    { category: 'Premium Features', subcategory: 'Export & Import' },
    { category: 'Premium Features', subcategory: 'PowerPaste' },
    { category: 'Premium Features', subcategory: 'TinyDrive' },
    { category: 'Premium Features', subcategory: 'Media Optimizer' },
    { category: 'Premium Features', subcategory: 'Services & Infrastructure' },
    { category: 'Customization & Development', subcategory: 'Creating Custom Components' },
    { category: 'Customization & Development', subcategory: 'Bundling & Build Tools' },
    { category: 'Customization & Development', subcategory: 'Dialog & UI Components' },
    { category: 'Customization & Development', subcategory: 'Enhanced Skins & Icons' },
    { category: 'API Reference', subcategory: 'Core APIs' },
    { category: 'API Reference', subcategory: 'UI APIs' },
    { category: 'API Reference', subcategory: 'Utility APIs' },
    { category: 'API Reference', subcategory: 'DOM APIs' },
    { category: 'API Reference', subcategory: 'HTML APIs' },
    { category: 'API Reference', subcategory: 'Geometry APIs' },
    { category: 'Migration Guides', subcategory: null },
    { category: 'Examples & Demos', subcategory: null },
    { category: 'Release Information', subcategory: null },
    { category: 'Accessibility & Security', subcategory: null },
    { category: 'Support & Resources', subcategory: null },
    { category: 'Legacy & Other', subcategory: null },
    { category: 'Other', subcategory: null }
  ];

  let currentMainCategory = null;
  categoryStructure.forEach(({ category, subcategory }) => {
    const key = subcategory ? `${category}::${subcategory}` : category;
    
    if (categorized.has(key)) {
      const entries = categorized.get(key);
      
      // Output main category header if it changed
      if (currentMainCategory !== category) {
        if (currentMainCategory !== null) {
          content += '\n';
        }
        content += `### ${category}\n\n`;
        currentMainCategory = category;
      }
      
      // Output subcategory header if present
      if (subcategory) {
        content += `#### ${subcategory}\n`;
      }
      
      // List entries
      entries.forEach(entry => {
        content += `- **${entry.title}**: ${entry.url}\n`;
      });
      
      content += '\n';
    }
  });

  return content;
}

// Generate llms.txt (curated, simplified version)
function generateLLMsTxt(urls) {
  return `# TinyMCE Documentation

> Rich text editor for web applications. The latest stable version is TinyMCE 8.

TinyMCE is a powerful, flexible WYSIWYG rich text editor that can be integrated into any web application.

**IMPORTANT**: Always use TinyMCE 8 for new projects. Use \`tinymce@8\` or \`tinymce/8\` in CDN URLs and package installations.

## Getting Started

- [Getting Started](${BASE_URL}/getting-started/): Overview and introduction to TinyMCE
- [Introduction to TinyMCE](${BASE_URL}/introduction-to-tinymce/): What is TinyMCE and how to add it to your project
- [Installation](${BASE_URL}/installation/): Installation options and methods

### Quick Start Guides

- [Cloud Quick Start](${BASE_URL}/cloud-quick-start/): Get started with Tiny Cloud CDN (recommended)
- [NPM Quick Start](${BASE_URL}/npm-projects/): Install via npm, yarn, or pnpm
- [ZIP Quick Start](${BASE_URL}/zip-install/): Download and install from ZIP archive

## Integration Guides

See the complete documentation index in llms-full.txt for all available integration pages.

## Basic Setup Examples

### Cloud Deployment (Recommended)

\`\`\`html
<script src="https://cdn.tiny.cloud/1/[api-key]/tinymce/8/tinymce.min.js" 
        referrerpolicy="origin"></script>
<script>
tinymce.init({
  selector: 'textarea',
  plugins: 'advlist autolink lists link image charmap preview anchor',
  toolbar: 'undo redo | blocks | bold italic | alignleft aligncenter alignright | bullist numlist | link image'
});
</script>
\`\`\`

### Self-Hosted (NPM)

\`\`\`bash
npm install tinymce@8
\`\`\`

\`\`\`html
<script src="https://cdn.jsdelivr.net/npm/tinymce@8/tinymce.min.js"></script>
<script>
tinymce.init({
  selector: 'textarea',
  plugins: 'advlist autolink lists link image charmap preview anchor',
  toolbar: 'undo redo | blocks | bold italic | alignleft aligncenter alignright | bullist numlist | link image'
});
</script>
\`\`\`

### React Example

\`\`\`jsx
import { Editor } from '@tinymce/tinymce-react';

function App() {
  return (
    <Editor
      apiKey="your-api-key"
      init={{
        height: 500,
        plugins: 'advlist autolink lists link image charmap preview anchor',
        toolbar: 'undo redo | blocks | bold italic | alignleft aligncenter alignright | bullist numlist | link image'
      }}
    />
  );
}
\`\`\`

## Key Configuration

- [Basic Setup](${BASE_URL}/basic-setup/): Essential configuration options
- [Content Filtering](${BASE_URL}/filter-content/): Control HTML output
- [Localization](${BASE_URL}/localize-your-language/): Multi-language support
- [Spell Checking](${BASE_URL}/spell-checking/): Enable spell checking
- [Cloud Deployment Guide](${BASE_URL}/cloud-deployment-guide/): Configure Tiny Cloud

## Plugins & Features

- [Plugins Overview](${BASE_URL}/plugins/): Available plugins and features
- [Table Plugin](${BASE_URL}/table/): Table editing capabilities
- [Image Plugin](${BASE_URL}/image/): Image handling and editing
- [Link Plugin](${BASE_URL}/link/): Link management

## TinyMCE AI (Premium)

TinyMCE AI (\`tinymceai\` plugin) is the current AI writing assistant for TinyMCE. It provides chat, review, and quick actions powered by multiple LLM providers. The earlier AI Assistant (\`ai\` plugin) is legacy; new integrations should use TinyMCE AI.

- [TinyMCE AI Introduction](${BASE_URL}/tinymceai-introduction/): Overview of TinyMCE AI features and capabilities
- [Chat](${BASE_URL}/tinymceai-chat/): Conversational AI with history and persistent context
- [Review](${BASE_URL}/tinymceai-review/): Content analysis and proofreading
- [Actions](${BASE_URL}/tinymceai-actions/): Fast, stateless AI operations for specific tasks
- [AI Models](${BASE_URL}/tinymceai-models/): Supported AI models and configuration
- [Plugin Configuration](${BASE_URL}/tinymceai/): \`tinymceai\` plugin options and setup
- [Integration Options](${BASE_URL}/tinymceai-integration-options/): Cloud and self-hosted integration paths
- [API Overview](${BASE_URL}/tinymceai-api-overview/): TinyMCE AI API for use inside and outside the editor
- [API Quick Start](${BASE_URL}/tinymceai-api-quick-start/): Get started with the TinyMCE AI API
- [Streaming](${BASE_URL}/tinymceai-streaming/): Streaming responses from the AI API
- [JWT Authentication](${BASE_URL}/tinymceai-jwt-authentication-intro/): Authentication setup for TinyMCE AI
- [Limits](${BASE_URL}/tinymceai-limits/): Rate limits and usage constraints
- [AI Assistant (legacy)](${BASE_URL}/ai/): Earlier \`ai\` plugin — use TinyMCE AI for new projects

## API Reference

- [Editor API](${BASE_URL}/apis/tinymce.editor/): Core editor API
- [Plugin API](${BASE_URL}/apis/tinymce.plugin/): Plugin development API

## Migration & Upgrading

- [Upgrading TinyMCE](${BASE_URL}/upgrading/): Upgrade guide
- [Migration from 7.x](${BASE_URL}/migration-from-7x/): Migrate from TinyMCE 7

## AI-Assisted Development with MCP

For up-to-date TinyMCE documentation directly in AI coding tools, set up the Context7 MCP server. TinyMCE docs are indexed at [context7.com/tinymce/tinymce-docs](https://context7.com/tinymce/tinymce-docs).

### Cursor

Add to \`.cursor/mcp.json\`:

\`\`\`json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"]
    }
  }
}
\`\`\`

### Claude Code

\`\`\`bash
claude mcp add context7 -- npx -y @upstash/context7-mcp
\`\`\`

Add "use context7" to any prompt for live TinyMCE documentation lookups.

## Complete Documentation

For a complete list of all ${urls.length} documentation pages, see [llms-full.txt](${DOCS_ROOT_URL}/llms-full.txt).

`;
}

// Main execution
function main() {
  const buildDir = path.resolve(process.argv[2] || DEFAULT_BUILD_DIR);

  console.log('Generating LLM files...');
  console.log(`Using build: ${buildDir}`);

  if (!fs.existsSync(buildDir) || !fs.statSync(buildDir).isDirectory()) {
    throw new Error(`Build directory does not exist: ${buildDir}`);
  }

  const urls = parseSitemap(readSitemap(buildDir));
  console.log(`Found ${urls.length} unique URLs in sitemap`);

  const pages = readPages(buildDir, urls);

  const llmsTxt = toMarkdownEndpoints(generateLLMsTxt(urls));
  writeGenerated(buildDir, 'llms.txt', llmsTxt).forEach((p) => console.log(`✓ Wrote ${p}`));

  const llmsFullTxt = toMarkdownEndpoints(generateLLMsFullTxt(urls, pages));
  writeGenerated(buildDir, 'llms-full.txt', llmsFullTxt).forEach((p) => console.log(`✓ Wrote ${p}`));
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

module.exports = { generateLLMsTxt, generateLLMsFullTxt, parseSitemap, parseFrontmatter };
