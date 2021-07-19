---
layout: default
title: Bundling a npm version of TinyMCE with CommonJS and Webpack
title_nav: CommonJS and npm
description_short: Bundling a npm version of TinyMCE in a project using CommonJS and Webpack
description: Bundling a npm version of TinyMCE in a project using CommonJS and Webpack
keywords: webpack commonjs cjs npm modules tinymce
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

`src/editor.js`
```js
{% include module-loading/bundling-webpack-cjs-npm_editor.js %}
```

`webpack.config.js`
```js
{% include module-loading/bundling-webpack-cjs-npm_webpack.config.js %}
```

`src/index.js`
```js
{% include module-loading/bundling-webpack-cjs_index.js %}
```

```sh
webpack --config webpack.config.js
```

{% assign is_zip_install = nil %}