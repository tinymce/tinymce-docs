#!/bin/bash

set -e

BASE_URL="$(_scripts/get-baseurl.sh)"
STAGING_ORIGIN="https://www.staging.tiny.cloud"

echo -e "\n > setting base url to: $BASE_URL"
echo "baseurl: \"$BASE_URL\"" > _config-environment.yml

#
# Due to how the workflow for docs builds runs in Wercker, we have 
# to check specifically for the develop branch to override the 
# origin -- we need to do this for the template imports on the
# head, footer and newsletter parts of the docs.
#
if [ -z "${WERCKER_GIT_BRANCH}" ]; then
  echo -e " > local build - using default origin in config.yml"
else
  if [ $WERCKER_GIT_BRANCH = "develop" ]; then
    echo -e " > staging build - setting origin to: $STAGING_ORIGIN"
    echo "origin: \"$STAGING_ORIGIN\"" >> _config-environment.yml
  else
    echo -e " > production/feature branch build - using default origin in config.yml"
  fi
fi

echo -e " > building documentation\n"
bundle exec jekyll build --config _config.yml,_config-environment.yml

echo ""
