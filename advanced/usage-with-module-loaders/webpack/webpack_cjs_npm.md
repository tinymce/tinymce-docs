---
layout: default
title: Bundling an npm version of TinyMCE with CommonJS and Webpack
title_nav: CommonJS and npm
description_short: Bundling an npm version of TinyMCE in a project using CommonJS and Webpack
description: Bundling an npm version of TinyMCE in a project using CommonJS and Webpack
keywords: webpack commonjs cjs npm modules tinymce
---

{% assign installtype = "an npm" %}
{% assign bundler = "[Webpack](https://webpack.js.org/)" %}
{% assign syntax = "[CommonJS syntax](http://www.commonjs.org/specs/modules/1.0/)" %}
{% include module-loading/bundling-procedure-intro.md %}

## Requirements

This guide requires the following:

- Nodejs and npm
- Basic knowledge of how to use [Webpack](https://webpack.js.org/)
- (Optional: For premium features) The latest premium `.zip` bundle of TinyMCE for including premium plugins

## Procedure

{% assign is_zip_install = false %}

{% include module-loading/webpack-dev-dependencies.md %}

{% include module-loading/bundling-webpack-cjs-npm_editor.md %}

{% include module-loading/bundling-webpack-cjs-npm_webpack.config.md %}

{% include module-loading/bundling-webpack-cjs_index.md %}

1. Run Webpack to test the bundle, such as:

    ```sh
    webpack --config webpack.config.js
    ```

    If Webpack runs successfully, check that the editor loads in the application.
    If Webpack fails, review any errors and review the configuration changes in this procedure; you may need to adjust for conflicts or other issues when bundling {{site.productname}} into an existing project.

{% assign is_zip_install = nil %}

{% include module-loading/bundling-next-steps.md %}
