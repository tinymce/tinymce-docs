#!/bin/bash

# exit on firs error
set -e

# vars
DESTINATION="docs"

# build
jekyll build --destination $DESTINATION
