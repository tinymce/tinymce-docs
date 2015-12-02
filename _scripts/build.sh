#!/bin/bash

set -e

BASEURL="$(_scripts/get-baseurl.sh)"

echo -e "\n > setting baseurl to: $BASEURL"
echo "baseurl: \"$BASEURL\"" > _config-prod.yml

echo -e " > builidng documentation\n"
bundle exec jekyll build --config _config.yml,_config-prod.yml

echo ""
