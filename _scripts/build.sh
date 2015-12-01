#!/bin/bash

set -e

BRANCH="$WERCKER_GIT_BRANCH"
API_VERSION="$(cat .api-version)"
TARBALL_URL="https://codeload.github.com/tinymce/tinymce/tar.gz/$API_VERSION"
TMP_DIR="/tmp/tinymce-$API_VERSION"
BASEURL="$(_scripts/get-baseurl.sh)"

echo ""
echo " > exporting data files for tinymce: $API_VERSION"

mkdir "$TMP_DIR"
curl -s $TARBALL_URL | tar xzf - -C "$TMP_DIR" --strip-components 1
moxiedoc "$TMP_DIR/js/tinymce/classes" -t tinymcenext -o "$TMP_DIR/tinymce-api-reference.zip"
unzip -q -o "$TMP_DIR/tinymce-api-reference.zip"

echo " > installing gems"
bundle install --deployment --quiet --jobs=10

echo " > setting baseurl to: $BASEURL"
echo "baseurl: \"$BASEURL\"" > _config-prod.yml

echo -e " > builidng documentation\n"
bundle exec jekyll build --config _config.yml,_config-prod.yml

echo ""
