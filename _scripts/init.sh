#!/usr/bin/env bash

set -e

echo ""

echo " > installing gems into ./vendor/bundle"
bundle install --path vendor/bundle --verbose

if [[ -e "_config-local.yml" ]]; then
  echo " > _config-local.yml present, skipping creation"
else
  echo " > creating _config-local.yml"
  cp _config-local.sample.yml _config-local.yml
fi

if [[ -e "_config-local-override.yml" ]]; then
  echo " > _config-local-override present, skipping creation"
else
  echo " > creating _config-local-override.yml"
  cp _config-local-override.sample.yml _config-local-override.yml
fi

echo " > creating dummy API ref data file"
echo [] > _data/nav_api.json

echo -e " > done\n"
