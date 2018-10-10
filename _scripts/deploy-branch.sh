#!/bin/bash

mkdir -p ./_essentials/css
mkdir -p ./_essentials/scripts
mkdir -p ./_essentials/fonts

printf "User-agent: * \nDisallow: /\n" > ./_essentials/robots.txt

curl -o ./_essentials/css/common.min.css https://staging.tiny.cloud/css/common.min.css -L
curl -o ./_essentials/css/docs.min.css https://staging.tiny.cloud/css/docs.min.css -L
curl -o ./_essentials/scripts/docs.min.js https://staging.tiny.cloud/scripts/docs.min.js -L
curl -o ./_essentials/scripts/common.min.js https://staging.tiny.cloud/scripts/common.min.js -L
curl -o ./_essentials/fonts/aileron-ultra-light.woff https://staging.tiny.cloud/fonts/aileron-ultra-light.woff -L
curl -o ./_essentials/fonts/aileron-ultra-light.ttf https://staging.tiny.cloud/fonts/aileron-ultra-light.ttf -L
