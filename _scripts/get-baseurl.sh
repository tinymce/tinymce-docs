#!/bin/bash

set -e

if [[ "master" == $WERCKER_GIT_BRANCH ]]; then
  echo "/docs-3x"
else
  echo "/docs/pr/$WERCKER_GIT_BRANCH"
fi
