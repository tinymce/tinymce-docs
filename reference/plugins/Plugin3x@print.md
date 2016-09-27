---
layout: default
title: print
---

This plugin adds a print button to TinyMCE. Installation Instructions

1.  Copy the print directory to the plugins directory of TinyMCE (/jscripts/tiny_mce/plugins).
2.  Add plugin to TinyMCE plugin option list example: plugins : "print".
3.  Add the button name to button list, example: theme_advanced_buttons3_add : "print".

## Initialization Example

```js
tinyMCE.init({
  theme : "advanced",
  mode : "textareas",
  plugins : "print",
  theme_advanced_buttons3_add : "print"
});
```
