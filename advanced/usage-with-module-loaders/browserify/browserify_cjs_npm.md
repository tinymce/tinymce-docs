---
layout: default
title: Bundling a npm version of TinyMCE with CommonJS and Browserify
title_nav: CommonJS and npm
description_short: Bundling a npm version of TinyMCE in a project using CommonJS and Browserify
description: Bundling a npm version of TinyMCE in a project using CommonJS and Browserify
keywords: browserify commonjs cjs npm modules tinymce
---

[CommonJS syntax](http://www.commonjs.org/specs/modules/1.0/)
[ES6+ syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)


[Browserify](https://browserify.org/)

## Requirements

This guide requires the following:

- Nodejs and npm
- Basic knowledge of how to use [Browserify](https://browserify.org/)
- (Optional: For premium features) The latest premium `.zip` bundle of TinyMCE for including premium plugins

## Procedure

{% assign is_zip_install = false %}

{% include module-loading/browserify-dev-dependencies.md %}

{% include module-loading/bundling-browserify-cjs-npm_editor.md %}

{% include module-loading/bundling-browserify-cjs-main.md %}

```sh
browserify -t brfs -g browserify-css src/main.js -o dist/main.bundle.js
```

{% assign is_zip_install = nil %}