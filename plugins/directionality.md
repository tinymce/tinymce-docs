---
layout: default
title: Directionality Plugin
title_nav: Directionality
description: Toolbar buttons for setting the left-to-right or right-to-left direction of content.
keywords: rtl, ltr, internationalization, internationalisation, localization, localisation, international
---

// adds toolbar control

This plugin adds directionality controls to the toolbar, enabling TinyMCE to better handle languages written from right to left.

**Type:** `String`

**Possible Values:** `ltr`, `rtl`

## Directionality plugin example:

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "directionality",
  toolbar: "ltr rtl"
});
```
