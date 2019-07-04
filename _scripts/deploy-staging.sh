#!/bin/bash

mkdir -p ./_site/css
mkdir -p ./_site/scripts
mkdir -p ./_site/fonts

printf "User-agent: * \nDisallow: /\n" > ./_essentials/robots.txt

curl -o ./_site/css/common.min.css https://staging.tiny.cloud/css/common.min.css -L
curl -o ./_site/css/docs.min.css https://staging.tiny.cloud/css/docs.min.css -L
curl -o ./_site/scripts/docs.min.js https://staging.tiny.cloud/scripts/docs.min.js -L
curl -o ./_site/scripts/common.min.js https://staging.tiny.cloud/scripts/common.min.js -L
curl -o ./_site/fonts/aileron-ultra-light.woff https://staging.tiny.cloud/fonts/aileron-ultra-light.woff -L
curl -o ./_site/fonts/aileron-ultra-light.ttf https://staging.tiny.cloud/fonts/aileron-ultra-light.ttf -L

