#!/bin/bash

# Script to generate LLM files after Antora build
# This should be run after the site is built and sitemap.xml is generated

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

echo "Generating LLM files..."

# Use local sitemap (required)
SITEMAP_PATH="$PROJECT_ROOT/build/site/sitemap.xml"

if [ ! -f "$SITEMAP_PATH" ]; then
  echo "Error: Local sitemap not found at $SITEMAP_PATH"
  echo "Please run 'yarn antora ./antora-playbook.yml' first to generate the site."
  exit 1
fi

echo "Using local sitemap: $SITEMAP_PATH"
node "$SCRIPT_DIR/generate-llm-files.js" "$SITEMAP_PATH"

echo "✓ LLM files generated successfully"
