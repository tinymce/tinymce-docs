# Generating LLM Files

This directory contains scripts to automatically generate `llms.txt` and `llms-full.txt` files for LLM consumption.

## Overview

The LLM files provide structured documentation references that help AI assistants:
- Find the correct documentation pages
- Understand the documentation structure
- Reduce hallucinations by providing accurate URLs
- Discover all available integration options

## Files

- `generate-llm-files.js` - Node.js script that generates the LLM files
- `generate-llm-files.sh` - Shell wrapper script for easier execution

## Usage

### Option 1: After Local Build

1. Build the documentation site:
   ```bash
   yarn antora ./antora-playbook.yml
   ```

2. Generate LLM files from local sitemap:
   ```bash
   yarn generate-llm-files
   # or
   ./-scripts/generate-llm-files.sh
   ```

### Option 2: From Remote Sitemap

Generate directly from the published sitemap (useful for syncing with production):

```bash
yarn generate-llm-files-from-url
# or
node ./-scripts/generate-llm-files.js https://www.tiny.cloud/docs/antora-sitemap.xml
```

### Option 3: Custom Sitemap Source

```bash
node ./-scripts/generate-llm-files.js /path/to/sitemap.xml
# or
node ./-scripts/generate-llm-files.js https://example.com/sitemap.xml
```

## Workflow

### Manual Regeneration (Current Approach)

**After major/minor/patch releases:**
1. Run the script to regenerate files from production sitemap:
   ```bash
   yarn generate-llm-files-from-url
   ```
   This ensures the LLM files match what's actually published on the live site.
   
   Alternatively, if you need to generate from a local build:
   ```bash
   yarn generate-llm-files
   ```
2. Review the generated files in a PR
3. Commit and merge

**Why not automated in CI/CD?**
- The script makes 400+ HTTP requests to fetch H1 titles (~4-5 minutes)
- Resource-intensive and slow for every build
- Manual review ensures quality before committing
- Validates no 404s are listed and titles match actual page content

### File Locations

The files are generated in `modules/ROOT/attachments/`:
- `llms.txt` - Simplified, curated documentation index (~105 lines)
- `llms-full.txt` - Complete documentation index with all pages (~700 lines)

**Post-build:** Files are moved to the root directory (handled in separate PR) and accessible at:
- `https://www.tiny.cloud/docs/tinymce/latest/llms.txt`
- `https://www.tiny.cloud/docs/tinymce/latest/llms-full.txt`

## How It Works

1. **Reads sitemap.xml** - Extracts all documentation URLs from the sitemap (only `/latest/` URLs)
2. **Fetches H1 titles** - Makes HTTP requests to each page to get the actual H1 title (validates no 404s)
3. **Generates titles** - Uses fetched H1 titles, falls back to URL-based titles if fetch fails
4. **Categorizes pages** - Groups by topic (integrations, plugins, API, etc.) based on URL patterns
5. **Deduplicates** - Removes duplicate URLs and makes titles unique within categories
6. **Generates structured markdown** - Creates both simplified (`llms.txt`) and complete (`llms-full.txt`) indexes

## Customization

The script uses hardcoded categorization logic. To customize:

1. Edit `generate-llm-files.js`
2. Modify the `categorizeUrl()` function to adjust categorization
3. Update `generateLLMsTxt()` and `generateLLMsFullTxt()` to change output format

## Notes

- The script requires Node.js and `sanitize-html` package (installed via `yarn install`)
- Generated files are written to `modules/ROOT/attachments/`
- Uses only the sitemap (no dependency on `nav.adoc`)
- Fetches actual H1 titles from pages (validates no 404s)
- Rate-limited fetching: 10 concurrent requests with 100ms delay between batches
- Request timeout: 10 seconds per page
- Security: Validates URLs to prevent SSRF attacks (only allows tiny.cloud domains)
- Handles HTML entity decoding (`&#8217;` → `'`)
- Filters out error pages and duplicate URLs
- Makes titles unique within categories (e.g., "ES6 and npm (Webpack)", "ES6 and npm (Rollup)")
- Falls back to URL-based title generation if H1 fetch fails

## Troubleshooting

**Error: "Source not found"**
- Make sure the sitemap path is correct
- For remote URLs, check your internet connection
- For local files, ensure Antora has generated the site first

**Missing page titles**
- If H1 fetch fails, the script uses URL-based title generation as fallback
- Check that pages return valid HTML with H1 tags
- 404 pages are automatically filtered out

**Incorrect categorization**
- Review the `categorizeUrl()` function (note: function name is singular, not plural)
- Add custom patterns for new page types
