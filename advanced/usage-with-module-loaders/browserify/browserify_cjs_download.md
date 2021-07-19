---
layout: default
title: Bundling a .zip version of TinyMCE with CommonJS and Browserify
title_nav: CommonJS and a .zip archive
description_short: Bundling a .zip archive version of TinyMCE in a project using CommonJS and Browserify
description: Bundling a .zip archive version of TinyMCE in a project using CommonJS and Browserify
keywords: browserify commonjs cjs zip modules tinymce
---


[CommonJS syntax](http://www.commonjs.org/specs/modules/1.0/)
[ES6+ syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

[Browserify](https://browserify.org/)

## Requirements

This guide requires the following:

- Nodejs and npm
- Basic knowledge of how to use [Browserify](https://browserify.org/)

## Procedure

{% assign is_zip_install = true %}
{% include install/download-tinymce.md %}
{% include module-loading/browserify-dev-dependencies.md %}

`src/editor.js`
```js
{% include module-loading/bundling-browserify-cjs-zip_editor.js %}
```

`src/main.js`
```js
{% include module-loading/bundling-browserify-cjs-main.js %}
```

`demo.html`
```html
{% include module-loading/bundling-browserify-cjs-demo.html %}
```

```sh
browserify -t brfs -g browserify-css src/main.js -o dist/main.bundle.js
```

{% assign is_zip_install = nil %}
