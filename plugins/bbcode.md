---
layout: default
title: BBCode Plugin
---

This plugin adds basic BBCode input/output to TinyMCE.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "bbcode"
});
```

### Options

### `bbcode_dialect`

This option allows you to specify the BBCode dialect. We only support [PunBB](http://punbb.informer.com/) at the moment but hope to add more dialects in the future. When using the PunBB dialect `codeStyle` and `quoteStyle` will be converted into `[code]` and `[quote]` items.

**Type:** `String`

**Default Value:** `"punbb"`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "bbcode",
    bbcode_dialect: "punbb"
});
```

