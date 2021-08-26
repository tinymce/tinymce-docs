#!/usr/bin/env bash
rm -rf _site
bundle exec jekyll serve --incremental --config _config.yml,_config-local.yml,_config-local-override.yml --host=0.0.0.0
