#!/bin/bash

set -e

API_TMPDIR="/tmp/tinymce-$API_VERSION"

echo -e "\n > importing data files for tinymce api reference: local\n"

rm -rf "$API_TMPDIR"
mkdir "$API_TMPDIR"
moxiedoc "../tinymce-stash/js/tinymce/classes" -t tinymcenext -o "$API_TMPDIR/tinymce-api-reference.zip"
unzip -o "$API_TMPDIR/tinymce-api-reference.zip"
rm _data/nav_api.json

echo ""
