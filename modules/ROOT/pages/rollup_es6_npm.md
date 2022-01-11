# Bundling an npm version of TinyMCE with ES6 and Rollup.js
:title_nav: ES6 and npm
:description_short: Bundling an npm version of TinyMCE in a project using ES6 and Rollup.js
:description: Bundling an npm version of TinyMCE in a project using ES6 and Rollup.js
:keywords: rollupjs es6 es2015 npm modules tinymce

{% assign installtype = "an npm" %}
{% assign bundler = "[Rollup.js](https://www.rollupjs.org/)" %}
{% assign syntax = "[ES6+ syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)" %}
{% include module-loading/bundling-procedure-intro.md %}

## Requirements

This guide requires the following:

- Node.js and npm
- Basic knowledge of how to use [Rollup.js](https://www.rollupjs.org/)
- (Optional: For premium features) The latest premium `.zip` bundle of TinyMCE for including premium plugins

## Procedure

{% assign is_zip_install = false %}
{% include module-loading/rollupjs-dev-dependencies.md %}

{% include module-loading/bundling-rollup-es6-npm_editor.md %}

{% include module-loading/bundling-rollup-es6-npm_rollup.config.md %}

{% include module-loading/bundling-rollup-es6-index.md %}

1. Run Rollup.js to test the bundle, such as:

    ```sh
    rollup --config
    ```

    If Rollup.js runs successfully, check that the editor loads in the application.
    If Rollup.js fails, review any errors and review the configuration changes in this procedure; you may need to adjust for conflicts or other issues when bundling {{site.productname}} into an existing project.

{% assign is_zip_install = nil %}

{% include module-loading/bundling-next-steps.md %}