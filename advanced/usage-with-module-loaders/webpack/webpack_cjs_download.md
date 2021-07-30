---
layout: default
title: Bundling a .zip version of TinyMCE with CommonJS and Webpack
title_nav: CommonJS and a .zip archive
description_short: Bundling a .zip archive version of TinyMCE in a project using CommonJS and Webpack
description: Bundling a .zip archive version of TinyMCE in a project using CommonJS and Webpack
keywords: webpack commonjs cjs zip modules tinymce
---

{% assign installtype = "a `.zip`" %}
{% assign bundler = "[Webpack](https://webpack.js.org/)" %}
{% assign syntax = "[CommonJS syntax](http://www.commonjs.org/specs/modules/1.0/)" %}
{% include module-loading/bundling-procedure-intro.md %}

## Requirements

This guide requires the following:

- Node.js and npm
- Basic knowledge of how to use [Webpack](https://webpack.js.org/)

## Procedure

{% assign is_zip_install = true %}

{% include install/download-tinymce.md %}

{% include module-loading/webpack-dev-dependencies.md %}

{% include module-loading/bundling-webpack-cjs-zip_editor.md %}

{% include module-loading/bundling-webpack-cjs-zip_webpack.config.md %}

{% include module-loading/bundling-webpack-cjs_index.md %}

1. Run Webpack to test the bundle, such as:

    ```sh
    webpack --config webpack.config.js
    ```

    If Webpack runs successfully, check that the editor loads in the application.
    If Webpack fails, review any errors and review the configuration changes in this procedure; you may need to adjust for conflicts or other issues when bundling {{site.productname}} into an existing project.

{% assign is_zip_install = nil %}

{% include module-loading/bundling-next-steps.md %}
