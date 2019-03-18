#!/bin/bash

set -e

if [[ -z $1 ]] ; then
  echo 'You need to specify the root tinymce directory to generate the source for'
  echo './_scripts/api-reference-local ../tinymce'
  exit 1
fi

API_TMPDIR="/tmp/tinymce-$API_VERSION"

echo -e "\n > importing data files for tinymce api reference: local from $1\n"

rm -rf "$API_TMPDIR"
mkdir "$API_TMPDIR"
moxiedoc "$1/src/core/main/ts" -t tinymcenext -o "$API_TMPDIR/tinymce-api-reference.zip"
unzip -o "$API_TMPDIR/tinymce-api-reference.zip"
rm _data/nav_api.json

echo ""