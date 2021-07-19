---
layout: default
title: Bundling a npm version of TinyMCE with ES6 and Webpack
title_nav: ES6 and npm
description_short: Bundling a npm version of TinyMCE in a project using ES6 and Webpack
description: Bundling a npm version of TinyMCE in a project using ES6 and Webpack
keywords: webpack es6 es2015 npm modules tinymce
---

[CommonJS syntax](http://www.commonjs.org/specs/modules/1.0/)
[ES6+ syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)


[Webpack](https://webpack.js.org/)

## Requirements

This guide requires the following:

- Nodejs and npm
- Basic knowledge of how to use [Webpack](https://webpack.js.org/)
- (Optional: For premium features) The latest premium `.zip` bundle of TinyMCE for including premium plugins

## Procedure

{% assign is_zip_install = false %}
{% include module-loading/webpack-dev-dependencies.md %}

1. Create a new source file for importing the required components from {{site.productname}} and configuring the editor.

    **src/editor.js**

        {% include module-loading/bundling-webpack-es6-npm_editor.js %}

`webpack.config.js`
```js
{% include module-loading/bundling-webpack-es6-npm_webpack.config.js %}
```

`src/index.js`
```js
{% include module-loading/bundling-webpack-es6_index.js %}
```

```sh
webpack --config webpack.config.js
```

{% assign is_zip_install = nil %}