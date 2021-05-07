---
layout: default
title: searchreplace
---

This plugin adds search/replace dialogs to TinyMCE.

## Installation Instructions

1.  Add plugin to TinyMCE plugin option list example: plugins : "searchreplace"
2.  Add the search and replace button names to button list, example: theme_advanced_buttons3_add : "search,replace"

## Initialization Example

```js
tinyMCE.init({
  theme : "advanced",
  mode : "textareas",
  plugins : "searchreplace",
  theme_advanced_buttons3_add : "search,replace"
});
```
