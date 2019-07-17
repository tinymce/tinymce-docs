#!/bin/bash

mkdir -p ./_site/css
mkdir -p ./_site/scripts
mkdir -p ./_site/fonts

curl -o ./_site/css/common.min.css https://www.tiny.cloud/css/common.min.css -L
curl -o ./_site/css/docs.min.css https://www.tiny.cloud/css/docs.min.css -L
curl -o ./_site/scripts/docs.min.js https://www.tiny.cloud/scripts/docs.min.js -L
curl -o ./_site/scripts/common.min.js https://www.tiny.cloud/scripts/common.min.js -L
curl -o ./_site/fonts/aileron-ultra-light.woff https://www.tiny.cloud/fonts/aileron-ultra-light.woff -L
curl -o ./_site/fonts/aileron-ultra-light.ttf https://www.tiny.cloud/fonts/aileron-ultra-light.ttf -L
