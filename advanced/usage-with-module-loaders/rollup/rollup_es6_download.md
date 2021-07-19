---
layout: default
title: Bundling a .zip version of TinyMCE with ES6 and Rollup.js
title_nav: ES6 and a .zip archive
description_short: Bundling a .zip archive version of TinyMCE in a project using ES6 and Rollup.js
description: Bundling a .zip archive version of TinyMCE in a project using ES6 and Rollup.js
keywords: rollupjs es6 es2015 zip modules tinymce
---

[CommonJS syntax](http://www.commonjs.org/specs/modules/1.0/)
[ES6+ syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)


[Rollup.js](https://www.rollupjs.org/)

## Requirements

This guide requires the following:

- Nodejs and npm
- Basic knowledge of how to use [Rollup.js](https://www.rollupjs.org/)

## Procedure

{% assign is_zip_install = true %}
{% include install/download-tinymce.md %}

{% include module-loading/webpack-dev-dependencies.md %}

`src/editor.js`
```js
{% include module-loading/bundling-rollup-es6-zip_editor.js %}
```

`rollup.config.js`
```js
{% include module-loading/bundling-rollup-es6-zip_rollup.config.js %}
```

`src/index.js`
```js
{% include module-loading/bundling-rollup-es6-index.js %}
```

`demo.html`
```html
{% include module-loading/bundling-rollup-es6-demo.html %}
```

```sh
rollup --config
```

{% assign is_zip_install = nil %}