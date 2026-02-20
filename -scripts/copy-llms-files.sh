#!/bin/bash

# Copy llms.txt files to site root after Antora build
# This makes them accessible at /docs/llms.txt and /docs/llms-full.txt for AI/LLM discoverability

set -e

BUILD_DIR="${1:-build/site}"

if [ ! -d "$BUILD_DIR" ]; then
  echo "Error: Build directory not found: $BUILD_DIR"
  exit 1
fi

# Find the latest version directory (usually 'latest' or version number)
LATEST_DIR=$(find "$BUILD_DIR" -type d -path "*/tinymce/*/_attachments" -name "_attachments" | head -1 | xargs dirname)

if [ -z "$LATEST_DIR" ]; then
  echo "Error: Could not find _attachments directory in $BUILD_DIR"
  exit 1
fi

ATTACHMENTS_DIR="$LATEST_DIR/_attachments"

if [ ! -f "$ATTACHMENTS_DIR/llms.txt" ] || [ ! -f "$ATTACHMENTS_DIR/llms-full.txt" ]; then
  echo "Error: llms.txt files not found in $ATTACHMENTS_DIR"
  exit 1
fi

# Copy files to root
cp "$ATTACHMENTS_DIR/llms.txt" "$BUILD_DIR/llms.txt"
cp "$ATTACHMENTS_DIR/llms-full.txt" "$BUILD_DIR/llms-full.txt"

echo "✓ Copied llms.txt files to $BUILD_DIR/"
echo "  - $BUILD_DIR/llms.txt"
echo "  - $BUILD_DIR/llms-full.txt"
