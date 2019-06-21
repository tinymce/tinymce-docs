#!/bin/bash

mkdir -p ./css
mkdir -p ./scripts
mkdir -p ./fonts

printf "User-agent: * \nDisallow: /\n" > ./robots.txt

curl -o ./css/common.min.css https://staging.tiny.cloud/css/common.min.css -L
curl -o ./css/docs.min.css https://staging.tiny.cloud/css/docs.min.css -L
curl -o ./scripts/docs.min.js https://staging.tiny.cloud/scripts/docs.min.js -L
curl -o ./scripts/common.min.js https://staging.tiny.cloud/scripts/common.min.js -L
curl -o ./fonts/aileron-ultra-light.woff https://staging.tiny.cloud/fonts/aileron-ultra-light.woff -L
curl -o ./fonts/aileron-ultra-light.ttf https://staging.tiny.cloud/fonts/aileron-ultra-light.ttf -L
