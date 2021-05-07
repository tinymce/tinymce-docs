---
layout: default
title: visualchars
---

This plugin adds the possibility to see invisible characters like &nbsp;. Installation Instructions

1.  Add plugin to TinyMCE plugin option list example: plugins : "visualchars".
2.  Add the visualchars button name to button list, example: theme_advanced_buttons3_add : "visualchars".

## Initialization Example

```js
tinyMCE.init({
  theme : "advanced",
  mode : "textareas",
  plugins : "visualchars",
  theme_advanced_buttons3_add : "visualchars"
});
```
