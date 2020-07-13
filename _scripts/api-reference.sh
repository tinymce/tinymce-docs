#!/bin/bash

set -e

API_VERSION="$(cat .api-version)"
TARBALL_URL="http://download.tiny.cloud/tinymce/community/tinymce_${API_VERSION}_dev.zip"
API_TMPDIR="/tmp/tinymce-$API_VERSION"
API_TMPZIP="$API_TMPDIR/tinymce-$API_VERSION.zip"

echo -e "\n > importing data files for tinymce api reference: $API_VERSION\n"

#rm -f _data/nav_api.json
#rm -rf "$API_TMPDIR"
mkdir "$API_TMPDIR"
curl -sL "$TARBALL_URL" -o "$API_TMPZIP"
unzip "$API_TMPZIP" -d "$API_TMPDIR"
rm "$API_TMPZIP"
moxiedoc "$API_TMPDIR/tinymce/src/core/main/ts" "$API_TMPDIR/tinymce/src/ui/main/ts" -t tinymcenext -o "$API_TMPDIR/tinymce-api-reference.zip"
unzip -o "$API_TMPDIR/tinymce-api-reference.zip"

echo ""
