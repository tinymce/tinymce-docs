---
layout: default
title: BBCode plugin
title_nav: BBCode
description_short: Add basic BBCode input/output to TinyMCE.
description: Add basic BBCode input/output support to TinyMCE.
keywords: punbb informer
---

This plugin makes it possible to edit BBCode in a WYSIWYG style by converting tags like `[b]` into `<strong>` and then back, when user submits the content.

> You will need to sacrifice quite a lot of TinyMCE's functionality to use this plugin properly, since BBCode format doesn't support the whole HTML specification. 

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

This option allows you to specify the BBCode dialect. We only support [PunBB](http://punbb.informer.com/) at the moment but hope to add more dialects in the future. Suported tags are listed in the table below:

| BBCode                 | Description    | HTML equivalent                     |
|------------------------|----------------|-------------------------------------|
| `[b]...[/b]`             | Bold text      | `<strong>...</strong>`                |
| `[i]...[/i]`             | Italicize text | `</em>...</em>`                     |
| `[u]...[/u]`             | Underline text | `<u>...</u>`                          |
| `[url=...]...[/url]`     | Link           | `<a href="...">...</a>`               |
| `[img]...[/img]`         | Image          | `<img src="..." />`                   |
| `[color=...]...[/color]` | Color text     | `<font color="...">...</font>`        |
| `[code]...[/code]`       | Code           | `<span class="codeStyle">...</span>`  |
| `[quote]...[/quote]`     | Quote          | `<span class="quoteStyle">...</span>` |
| `\n`                     | Newline        | `<br />`                              |


When using PunBB dialect, `codeStyle` and `quoteStyle` will be converted to `[code]` and `[quote]` correspondingly.

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

## Live example

{% include codepen.html id="bbcode" %}
