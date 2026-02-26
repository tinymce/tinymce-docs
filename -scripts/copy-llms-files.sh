#!/bin/bash

# Copy llms.txt files to site root after Antora build
# This makes them accessible at /docs/llms.txt and /docs/llms-full.txt for AI/LLM discoverability

set -e

BUILD_DIR="${1:-build/site}"

echo "Copying llms.txt files to $BUILD_DIR/..."

find "$BUILD_DIR" -mindepth 2 \( -name "llms.txt" -o -name "llms-full.txt" \) \
    -exec cp {} "$BUILD_DIR/" \; \
    -print

if [ ! -f "$BUILD_DIR/llms.txt" ] || [ ! -f "$BUILD_DIR/llms-full.txt" ]; then
  echo "Error: one or both llms.txt files were not copied to $BUILD_DIR"
  exit 1
fi

echo "Done."
