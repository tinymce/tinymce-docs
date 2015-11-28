#!/bin/bash

set -e

echo ""

echo " > installing gems into ./vendor/bundle"
bundle install --path vendor/bundle

if [[ -e "_config-local.yml" ]]; then
  echo " > _config-local.yml present, skipping creation"
else
  echo " > creating _config-local.yml"
  cp _config-local.sample.yml _config-local.yml
fi

echo " > downloading html includes 1/4"
curl -s https://www.tinymce.com/_docs/menu.html > _includes/menu.html

echo " > downloading html includes 2/4"
curl -s https://www.tinymce.com/_docs/menu_demo.html > _includes/menu_demo.html

echo " > downloading html includes 3/4"
curl -s https://www.tinymce.com/_docs/footer.html > _includes/footer.html

echo " > downloading html includes 4/4"
curl -s https://www.tinymce.com/_docs/favicons.html > _includes/favicons.html

echo " > creating dummy API ref data file"
echo [] > _data/nav_api.json

echo " > done"
echo ""
