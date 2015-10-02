#!/bin/bash

# exit on firs error
set -e

# vars
DESTINATION="docs"

# build
rm -rf $DESTINATION
cat v*/nav.yml > _data/nav.yml

if [[ $1 == "--serve" ]]; then
  jekyll serve --destination $DESTINATION
else
  jekyll build --destination $DESTINATION
fi
