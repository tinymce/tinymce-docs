---
layout: default
title: Bundling a npm version of TinyMCE with ES6 and Rollup.js
title_nav: ES6 and npm
description_short: Bundling a npm version of TinyMCE in a project using ES6 and Rollup.js
description: Bundling a npm version of TinyMCE in a project using ES6 and Rollup.js
keywords: rollupjs es6 es2015 npm modules tinymce
---

[CommonJS syntax](http://www.commonjs.org/specs/modules/1.0/)
[ES6+ syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)


[Rollup.js](https://www.rollupjs.org/)

## Requirements

This guide requires the following:

- Nodejs and npm
- Basic knowledge of how to use [Rollup.js](https://www.rollupjs.org/)
- (Optional: For premium features) The latest premium `.zip` bundle of TinyMCE for including premium plugins

## Procedure

{% assign is_zip_install = false %}
{% include module-loading/rollupjs-dev-dependencies.md %}

`src/editor.js`
```js
{% include module-loading/bundling-rollup-es6-npm_editor.js %}
```

`rollup.config.js`
```js
{% include module-loading/bundling-rollup-es6-npm_rollup.config.js %}
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