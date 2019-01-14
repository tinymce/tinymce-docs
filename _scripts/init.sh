#!/bin/bash

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

echo -e " > done\n"
