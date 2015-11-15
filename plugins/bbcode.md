---
layout: default
title: BBCode Plugin
title_nav: BBCode
description_short: Add basic BBCode input/output to TinyMCE.
description: Add basic BBCode input/output support to TinyMCE.
keywords: punbb informer
---

This plugin makes it possible for TinyMCE to edit BBCode syntax in a WYSIWYG form by converting tags like `[b]` into `<strong>` and then `<strong>` back to `[b]` when the user submits the content.

> You will need to remove a lot of TinyMCE's functionality in order to use this plugin successfully, since the BBCode format doesn't support the whole HTML specification. The BBCode plugin also requires you to set some specific TinyMCE options in order to function.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "bbcode"
});
```

### Options

### `bbcode_dialect`

This option allows you to specify the BBCode dialect. We only support [PunBB](http://punbb.informer.com/) at the moment but hope to add more dialects in the future. When using the PunBB dialect `codeStyle` and `quoteStyle` will be converted into `[code]` and `[quote]` items.

**Type:** `String`

**Default Value:** `"punbb"`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "bbcode",
  bbcode_dialect: "punbb"
});
```
