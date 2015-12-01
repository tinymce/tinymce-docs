#!/bin/bash

set -e

if [[ "master" == $WERCKER_GIT_BRANCH ]]; then
  echo "/docs"
else
  echo "/docs/pr/$WERCKER_GIT_BRANCH"
fi
