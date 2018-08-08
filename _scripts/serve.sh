#!/bin/bash
rm -rf _site
bundle exec jekyll serve --incremental --config _config.yml,_config-local.yml --host=0.0.0.0
