#!/bin/bash

set -e

BRANCH="$WERCKER_GIT_BRANCH"
API_VERSION="$(cat .api-version)"
TARBALL_URL="https://codeload.github.com/tinymce/tinymce/tar.gz/$API_VERSION"
API_TMPDIR="/$TMPDIR/tinymce-$API_VERSION"
BASEURL="$(_scripts/get-baseurl.sh)"

echo ""
echo " > exporting data files for tinymce: $API_VERSION"

mkdir "$API_TMPDIR"
curl -s "$TARBALL_URL" | tar xzf - -C "$API_TMPDIR" --strip-components 1
moxiedoc "$API_TMPDIR/js/tinymce/classes" -t tinymcenext -o "$API_TMPDIR/tinymce-api-reference.zip"
unzip -q -o "$API_TMPDIR/tinymce-api-reference.zip"

echo " > installing gems"
bundle install --deployment --quiet --jobs=10

echo " > setting baseurl to: $BASEURL"
echo "baseurl: \"$BASEURL\"" > _config-prod.yml

echo -e " > builidng documentation\n"
bundle exec jekyll build --config _config.yml,_config-prod.yml

echo ""
