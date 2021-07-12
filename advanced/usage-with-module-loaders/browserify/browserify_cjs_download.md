---
layout: default
title: Bundling a .zip version of TinyMCE with CommonJS and Browserify
title_nav: CommonJS and a .zip archive
description_short: Bundling a .zip archive version of TinyMCE in a project using CommonJS and Browserify
description: Bundling a .zip archive version of TinyMCE in a project using CommonJS and Browserify
keywords: browserify commonjs cjs zip modules tinymce
---

[Browserify](https://browserify.org/)

```sh
curl -fsSL https://download.tiny.cloud/tinymce/community/tinymce_latest_dev.zip
```

```sh
npm install promise-polyfill browserify browserify-css brfs --save-dev
```

```html
{% include module-loading/browserify-cjs-demo.html %}
```

```js
{% include module-loading/browserify-cjs-main.js %}
```

```js
{% include module-loading/browserify-cjs-zip_editor.js %}
```

```sh
browserify -t brfs -g browserify-css src/main.js -o dist/main.bundle.js
```
