---
layout: default
title: Bundling a .zip version of TinyMCE with ES6 and Webpack
title_nav: ES6 and a .zip archive
description_short: Bundling a .zip archive version of TinyMCE in a project using ES6 and Webpack
description: Bundling a .zip archive version of TinyMCE in a project using ES6 and Webpack
keywords: webpack es6 es2015 zip modules tinymce
---

[CommonJS syntax](http://www.commonjs.org/specs/modules/1.0/)
[ES6+ syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)


[Webpack](https://webpack.js.org/)

## Requirements

This guide requires the following:

- Nodejs and npm
- Basic knowledge of how to use [Webpack](https://webpack.js.org/)

## Procedure

{% assign is_zip_install = true %}

{% include install/download-tinymce.md %}
{% include module-loading/webpack-dev-dependencies.md %}

{% include module-loading/bundling-webpack-es6-zip_editor.md %}

{% include module-loading/bundling-webpack-es6-zip_webpack.config.md %}

{% include module-loading/bundling-webpack-es6_index.md %}

```sh
webpack --config webpack.config.js
```

{% assign is_zip_install = nil %}