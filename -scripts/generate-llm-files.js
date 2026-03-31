#!/usr/bin/env node

/**
 * Script to generate llms.txt and llms-full.txt files from sitemap.xml
 * 
 * Usage:
 *   node -scripts/generate-llm-files.js [sitemap-path-or-url]
 * 
 * Defaults to build/site/sitemap.xml (local) or can use remote URL
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const sanitizeHtml = require('sanitize-html');

const BASE_URL = 'https://www.tiny.cloud/docs/tinymce/latest';
const DOCS_ROOT_URL = 'https://www.tiny.cloud/docs';
const OUTPUT_DIR = path.join(__dirname, '../modules/ROOT/attachments');

// Fetch sitemap from URL or file
async function getSitemap(source) {
  if (source.startsWith('http://') || source.startsWith('https://')) {
    return new Promise((resolve, reject) => {
      const client = source.startsWith('https') ? https : http;
      client.get(source, (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => resolve(data));
      }).on('error', reject);
    });
  } else {
    // Validate file path to prevent path traversal
    const resolvedPath = path.resolve(source);
    const projectRoot = path.resolve(__dirname, '..');
    
    // Ensure the resolved path is within the project directory
    if (!resolvedPath.startsWith(projectRoot)) {
      throw new Error(`Invalid sitemap path: ${source}. Path must be within the project directory.`);
    }
    
    if (!fs.existsSync(resolvedPath)) {
      throw new Error(`Sitemap not found: ${source}\nPlease run 'yarn antora ./antora-playbook.yml' first to generate the site, or provide a URL.`);
    }
    
    // Only allow .xml files
    if (!resolvedPath.endsWith('.xml')) {
      throw new Error(`Invalid file type: ${source}. Only .xml files are allowed.`);
    }
    
    return fs.readFileSync(resolvedPath, 'utf8');
  }
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

// Fetch H1 title from a page URL
async function fetchH1Title(url) {
  return new Promise((resolve) => {
    // Validate URL to prevent SSRF - only allow tiny.cloud domains
    if (!url.startsWith('https://www.tiny.cloud/') && !url.startsWith('http://www.tiny.cloud/')) {
      resolve(null);
      return;
    }
    
    const client = url.startsWith('https') ? https : http;
    
    // codeql[js/file-access-to-http]: URL is validated to only allow tiny.cloud domains, preventing SSRF attacks
    const req = client.get(url, (res) => {
      // Check for error status codes (404, 500, etc.)
      if (res.statusCode >= 400) {
        resolve(null);
        return;
      }
      
      let data = '';
      
      res.on('data', (chunk) => { data += chunk; });
      
      res.on('end', () => {
        try {
          // Extract H1 tag using regex - look for <h1> or <h1 class="...">
          const h1Match = data.match(/<h1[^>]*>(.*?)<\/h1>/i);
          
          if (h1Match && h1Match[1]) {
            // Clean up the title using a well-tested HTML sanitization library
            let title = h1Match[1];

            // First, use sanitize-html to strip all HTML tags and attributes while preserving text.
            // This avoids fragile hand-written tag parsing and multi-character sanitization pitfalls.
            title = sanitizeHtml(title, {
              allowedTags: [],
              allowedAttributes: {},
              textFilter: (text) => text
            });

            // Then, defensively remove any remaining angle brackets and script/protocol keywords
            // to ensure no HTML-like or script-related fragments remain.
            title = title
              .replace(/[<>]/g, '')
              .replace(/(?:javascript|data|vbscript)\s*:?/gi, '')
              .replace(/\bscript\b/gi, '')
              .trim();

            // At this point, title is plain text with no angle brackets or script/protocol keywords
            // Additionally, defensively strip any residual script/protocol keywords that could
            // be used for injection even after angle brackets and colons have been removed
            title = title.replace(/\b(?:script|javascript|vbscript|data)\b/gi, '');
            
            // Decode HTML entities safely - decode all entities to plain text
            // Order matters: decode '&' last to avoid double-unescaping
            // Decode all specific entities first, then &amp; at the end
            title = title
              .replace(/&nbsp;/g, ' ')
              .replace(/&quot;/g, '"')
              .replace(/&#39;/g, "'")
              .replace(/&#8217;/g, "'") // Right single quotation mark (apostrophe)
              .replace(/&#8216;/g, "'") // Left single quotation mark
              .replace(/&#8220;/g, '"') // Left double quotation mark
              .replace(/&#8221;/g, '"') // Right double quotation mark
              .replace(/&#8211;/g, '–') // En dash
              .replace(/&#8212;/g, '—') // Em dash
              .replace(/&#160;/g, ' ') // Non-breaking space
              // Decode numeric entities (&#123; format) - safe as we've already removed HTML tags
              .replace(/&#(\d+);/g, (match, dec) => {
                const code = parseInt(dec, 10);
                // Only decode safe character codes (printable ASCII and valid Unicode)
                if ((code >= 32 && code <= 126) || (code >= 160 && code <= 1114111)) {
                  return String.fromCharCode(code);
                }
                return match; // Keep entity if unsafe
              })
              // Decode hex entities (&#x1F; format)
              .replace(/&#x([0-9a-fA-F]+);/gi, (match, hex) => {
                const code = parseInt(hex, 16);
                // Only decode safe character codes
                if ((code >= 32 && code <= 126) || (code >= 160 && code <= 1114111)) {
                  return String.fromCharCode(code);
                }
                return match; // Keep entity if unsafe
              })
              // Decode remaining named entities (after numeric/hex to avoid conflicts)
              .replace(/&lt;/g, '<') // Safe: HTML tags already removed
              .replace(/&gt;/g, '>') // Safe: HTML tags already removed
              .replace(/&amp;/g, '&') // Decode '&' last to prevent double-unescaping
              .trim();
            
            // Remove extra whitespace
            title = title.replace(/\s+/g, ' ');
            
            // Filter out error page titles
            const errorPatterns = [
              /couldn't find the page/i,
              /page not found/i,
              /404/i,
              /error/i,
              /not found/i
            ];
            
            if (errorPatterns.some(pattern => pattern.test(title))) {
              resolve(null);
              return;
            }
            
            if (title) {
              resolve(title);
            } else {
              resolve(null);
            }
          } else {
            // Fallback to generated title if no H1 found
            resolve(null);
          }
        } catch (error) {
          // If parsing fails, fallback to generated title
          resolve(null);
        }
      });
    });
    
    req.on('error', (error) => {
      // If fetch fails, fallback to generated title
      resolve(null);
    });
    
    req.setTimeout(10000, () => {
      req.destroy();
      resolve(null);
    });
  });
}

// Batch fetch H1 titles with rate limiting
async function fetchH1TitlesBatch(urls, batchSize = 10, delay = 100) {
  const results = new Map();
  
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const promises = batch.map(async (url) => {
      const title = await fetchH1Title(url);
      return { url, title };
    });
    
    const batchResults = await Promise.all(promises);
    batchResults.forEach(({ url, title }) => {
      results.set(url, title);
    });
    
    // Rate limiting - wait between batches
    if (i + batchSize < urls.length) {
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  return results;
}

// Generate a descriptive title from URL path
// NOTE: This script does A LOT of string matching against URL paths. If you encounter
// weirdness (e.g. wrong titles, wrong categories), search for the relevant path strings
// in this file to locate and fix the matching logic.
function generateTitleFromPath(urlPath) {
  if (!urlPath) return 'Home';

  const pathTitleMap = {
    '': 'Home',
    'index': 'Home',
    'getting-started': 'Getting Started',
    'introduction-to-tinymce': 'Introduction to TinyMCE',
    'installation': 'Installation',
    'cloud-quick-start': 'Cloud Quick Start',
    'npm-projects': 'NPM Projects Quick Start',
    'zip-install': 'ZIP Installation Quick Start',
    'installation-cloud': 'Cloud',
    'installation-self-hosted': 'Self-hosted',
    'installation-zip': 'ZIP',
    'basic-setup': 'Basic Setup',
    'work-with-plugins': 'Using plugins to extend TinyMCE',
    'filter-content': 'Content Filtering',
    'content-filtering': 'Content filtering',
    'localize-your-language': 'Localization',
    'spell-checking': 'Spell Checking',
    'editor-content-css': 'CSS for rendering content',
    'url-handling': 'URL Handling',
    'plugins': 'Plugins',
    'table': 'Table',
    'table-options': 'Table options',
    'image': 'Image',
    'link': 'Link',
    'lists': 'Lists',
    'code': 'Code',
    'codesample': 'Code Sample',
    'advtable': 'Enhanced Tables',
    'advcode': 'Enhanced Code Editor',
    'editimage': 'Image Editing',
    'linkchecker': 'Link Checker',
    'a11ychecker': 'Accessibility Checker',
    'upgrading': 'Upgrading TinyMCE',
    'migration-guides': 'Migration Guides Overview',
    'migration-from-7x': 'Migration from 7.x',
    'migration-from-6x': 'Migration from 6.x',
    'migration-from-6x-to-8x': 'Migration from 6.x to 8.x',
    'migration-from-5x': 'Migration from 5.x',
    'migration-from-5x-to-8x': 'Migration from 5.x to 8.x',
    'migration-from-4x': 'Migration from 4.x',
    'migration-from-4x-to-8x': 'Migration from 4.x to 8.x',
    'migration-from-froala': 'Migrating from Froala',
    'examples': 'Examples',
    'how-to-guides': 'How To Guides',
    'release-notes': 'Release Notes',
    'changelog': 'Changelog',
    'accessibility': 'Accessibility',
    'security': 'Security guide',
    'support': 'Support',
    'react': 'React',
    'react-cloud': 'React Cloud',
    'react-pm-host': 'React Package Manager',
    'react-pm-bundle': 'React Package Manager (with bundling)',
    'react-zip-host': 'React ZIP',
    'react-zip-bundle': 'React ZIP (with bundling)',
    'react-ref': 'Technical reference (React)',
    'vue': 'Vue.js',
    'vue-cloud': 'Vue Cloud',
    'vue-pm': 'Vue Package Manager',
    'vue-pm-bundle': 'Vue Package Manager (with bundling)',
    'vue-zip': 'Vue ZIP',
    'vue-ref': 'Technical reference (Vue)',
    'angular': 'Angular',
    'angular-cloud': 'Angular Cloud',
    'angular-pm': 'Angular Package Manager',
    'angular-pm-bundle': 'Angular Package Manager (with bundling)',
    'angular-zip': 'Angular ZIP',
    'angular-zip-bundle': 'Angular ZIP (with bundling)',
    'angular-ref': 'Technical reference (Angular)',
    'blazor': 'Blazor',
    'blazor-cloud': 'Blazor Cloud',
    'blazor-pm': 'Blazor Package Manager',
    'blazor-zip': 'Blazor ZIP',
    'blazor-ref': 'Technical reference (Blazor)',
    'svelte': 'Svelte',
    'svelte-cloud': 'Svelte Cloud',
    'svelte-pm': 'Svelte Package Manager',
    'svelte-pm-bundle': 'Svelte Package Manager (with bundling)',
    'svelte-zip': 'Svelte ZIP',
    'svelte-ref': 'Technical reference (Svelte)',
    'webcomponent': 'Web Component',
    'webcomponent-cloud': 'Web Component Cloud',
    'webcomponent-pm': 'Web Component Package Manager',
    'webcomponent-zip': 'Web Component ZIP',
    'webcomponent-ref': 'Technical reference (Web Component)',
    'jquery': 'jQuery',
    'jquery-cloud': 'jQuery Cloud',
    'jquery-pm': 'jQuery Package Manager',
    'django': 'Django',
    'django-cloud': 'Django Cloud',
    'django-zip': 'Django ZIP',
    'laravel': 'Laravel',
    'laravel-tiny-cloud': 'Laravel Cloud',
    'laravel-composer-install': 'Laravel Composer',
    'laravel-zip-install': 'Laravel ZIP',
    'rails': 'Ruby on Rails',
    'rails-cloud': 'Rails Cloud',
    'rails-third-party': 'Rails Package Manager',
    'rails-zip': 'Rails ZIP',
    'expressjs-pm': 'Node.js + Express',
    'bootstrap': 'Bootstrap',
    'bootstrap-cloud': 'Bootstrap Cloud',
    'bootstrap-zip': 'Bootstrap ZIP',
    'php-projects': 'PHP Projects',
    'dotnet-projects': '.NET Projects',
    'wordpress': 'WordPress',
    'shadow-dom': 'Shadow DOM',
    'swing': 'Java Swing'
  };

  if (pathTitleMap[urlPath]) {
    return pathTitleMap[urlPath];
  }

  // Handle release notes
  if (urlPath.match(/^\d+\.\d+\.\d+-release-notes$/)) {
    const version = urlPath.replace('-release-notes', '');
    return `TinyMCE ${version}`;
  }

  // Handle bundling entries (order matters: more specific keys first)
  const bundlingTitles = {
    'webpack-cjs-npm': 'CommonJS and NPM (Webpack)',
    'webpack-es6-npm': 'ES6 and NPM (Webpack)',
    'webpack-cjs-download': 'CommonJS and a .zip archive (Webpack)',
    'webpack-es6-download': 'ES6 and a .zip archive (Webpack)',
    'rollup-es6-npm': 'ES6 and npm (Rollup)',
    'rollup-es6-download': 'ES6 and a .zip archive (Rollup)',
    'vite-es6-npm': 'ES6 and NPM (Vite)',
    'browserify-cjs-npm': 'CommonJS and npm (Browserify)',
    'browserify-cjs-download': 'CommonJS and a .zip archive (Browserify)'
  };
  const bundlingMatch = Object.keys(bundlingTitles).find((k) => urlPath.includes(k));
  if (bundlingMatch) {
    return bundlingTitles[bundlingMatch];
  }
  
  // Handle API references
  if (urlPath.startsWith('apis/')) {
    const apiPath = urlPath.replace('apis/', '');
    return apiPath.split('/').pop().replace(/\.adoc$/, '');
  }
  
  // Convert kebab-case to Title Case
  const words = urlPath
    .replace(/-/g, ' ')
    .split(' ')
    .map(word => {
      // Handle acronyms
      if (word.toLowerCase() === 'npm' || word.toLowerCase() === 'cjs' || word.toLowerCase() === 'es6') {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
  
  return words.join(' ');
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
async function generateLLMsFullTxt(urls) {
  console.log(`Fetching H1 titles from ${urls.length} pages...`);
  console.log('This may take a few minutes...');
  
  // Fetch H1 titles from all pages
  const h1Titles = await fetchH1TitlesBatch(urls, 10, 100);
  
  let fetchedCount = 0;
  let fallbackCount = 0;
  
  // Process all URLs
  const entries = urls.map(url => {
    const urlPath = getUrlPath(url);
    const fetchedTitle = h1Titles.get(url);
    const generatedTitle = generateTitleFromPath(urlPath);
    
    // Use fetched H1 if available, otherwise fallback to generated
    const title = fetchedTitle || generatedTitle;
    
    if (fetchedTitle) {
      fetchedCount++;
    } else {
      fallbackCount++;
    }
    
    const catInfo = categorizeUrl(urlPath);
    
    return {
      url,
      urlPath,
      title,
      category: catInfo.category,
      subcategory: catInfo.subcategory
    };
  });
  
  console.log(`✓ Fetched ${fetchedCount} H1 titles, ${fallbackCount} used fallback titles`);
  
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

## Complete Documentation

For a complete list of all ${urls.length} documentation pages, see [llms-full.txt](${DOCS_ROOT_URL}/llms-full.txt).

`;
}

// Main execution
async function main() {
  const sitemapSource = process.argv[2] || path.join(__dirname, '../build/site/sitemap.xml');
  
  console.log('Generating LLM files...');
  console.log(`Using sitemap: ${sitemapSource}`);
  
  try {
    const sitemapContent = await getSitemap(sitemapSource);
    const urls = parseSitemap(sitemapContent);
    console.log(`Found ${urls.length} unique URLs in sitemap`);
    
    const llmsTxt = generateLLMsTxt(urls);
    fs.writeFileSync(path.join(OUTPUT_DIR, 'llms.txt'), llmsTxt);
    console.log('✓ Generated llms.txt');
    
    const llmsFullTxt = await generateLLMsFullTxt(urls);
    fs.writeFileSync(path.join(OUTPUT_DIR, 'llms-full.txt'), llmsFullTxt);
    console.log('✓ Generated llms-full.txt');
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { generateLLMsTxt, generateLLMsFullTxt, parseSitemap, getSitemap, fetchH1Title, fetchH1TitlesBatch };
