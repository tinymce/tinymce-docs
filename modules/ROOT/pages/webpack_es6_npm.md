# Bundling an npm version of TinyMCE with ES6 and Webpack
:title_nav: ES6 and npm
:description_short: Bundling an npm version of TinyMCE in a project using ES6 and Webpack
:description: Bundling an npm version of TinyMCE in a project using ES6 and Webpack
:keywords: webpack es6 es2015 npm modules tinymce

{% assign installtype = "an npm" %}
{% assign bundler = "[Webpack](https://webpack.js.org/)" %}
{% assign syntax = "[ES6+ syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)" %}
{% include module-loading/bundling-procedure-intro.md %}

## Requirements

This guide requires the following:

- Node.js and npm
- Basic knowledge of how to use [Webpack](https://webpack.js.org/)
- (Optional: For premium features) The latest premium `.zip` bundle of TinyMCE for including premium plugins

## Procedure

{% assign is_zip_install = false %}
{% include module-loading/webpack-dev-dependencies.md %}

{% include module-loading/bundling-webpack-es6-npm_editor.md %}

{% include module-loading/bundling-webpack-es6-npm_webpack.config.md %}

{% include module-loading/bundling-webpack-es6_index.md %}

1. Run Webpack to test the bundle, such as:

    ```sh
    webpack --config webpack.config.js
    ```

    If Webpack runs successfully, check that the editor loads in the application.
    If Webpack fails, review any errors and review the configuration changes in this procedure; you may need to adjust for conflicts or other issues when bundling {{site.productname}} into an existing project.

{% assign is_zip_install = nil %}

{% include module-loading/bundling-next-steps.md %}
