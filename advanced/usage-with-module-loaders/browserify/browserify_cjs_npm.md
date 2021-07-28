---
layout: default
title: Bundling an npm version of TinyMCE with CommonJS and Browserify
title_nav: CommonJS and npm
description_short: Bundling an npm version of TinyMCE in a project using CommonJS and Browserify
description: Bundling an npm version of TinyMCE in a project using CommonJS and Browserify
keywords: browserify commonjs cjs npm modules tinymce
---

{% assign installtype = "an npm" %}
{% assign bundler = "[Browserify](https://browserify.org/)" %}
{% assign syntax = "[CommonJS syntax](http://www.commonjs.org/specs/modules/1.0/)" %}
{% include module-loading/bundling-procedure-intro.md %}

## Requirements

This guide requires the following:

- Node.js and npm
- Basic knowledge of how to use [Browserify](https://browserify.org/)
- (Optional: For premium features) The latest premium `.zip` bundle of TinyMCE for including premium plugins

## Procedure

{% assign is_zip_install = false %}

{% include module-loading/browserify-dev-dependencies.md %}

{% include module-loading/bundling-browserify-cjs-npm_editor.md %}

{% include module-loading/bundling-browserify-cjs-main.md %}

1. Run Browserify to test the bundle, such as:

    ```sh
    browserify -t brfs -g browserify-css src/main.js -o dist/main.bundle.js
    ```

    If Browserify runs successfully, check that the editor loads in the application.
    If Browserify fails, review any errors and review the configuration changes in this procedure; you may need to adjust for conflicts or other issues when bundling {{site.productname}} into an existing project.

{% assign is_zip_install = nil %}

{% include module-loading/bundling-next-steps.md %}