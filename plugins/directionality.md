---
layout: default
title: Directionality plugin
title_nav: Directionality
description: Toolbar buttons for setting the left-to-right or right-to-left direction of content.
keywords: rtl, ltr, internationalization, internationalisation, localization, localisation, international
controls: toolbar button
---

This plugin adds directionality controls to the toolbar, enabling TinyMCE to better handle languages written from right to left. It also adds a toolbar button for each of its values, `ltr` for left-to-right text and `rtl` for right-to-left text.

**Type:** `String`

**Possible Values:** `ltr`, `rtl`

##### Directionality plugin example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "directionality",
  toolbar: "ltr rtl"
});
```
