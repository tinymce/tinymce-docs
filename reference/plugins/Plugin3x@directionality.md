---
layout: default
title: directionality
---

This plugin adds directionality icons to TinyMCE that enables TinyMCE to better handle languages that is written from right to left. Installation Instructions

1.  Add plugin to TinyMCE plugin option list example: plugins : "directionality".
2.  Add the ltr, rtl button names to button list, example: theme_advanced_buttons3_add : "ltr,rtl".

## Initialization Example

```js
tinyMCE.init({
  theme : "advanced",
  mode : "textareas",
  plugins : "directionality",
  theme_advanced_buttons3_add : "ltr,rtl"
});

```
