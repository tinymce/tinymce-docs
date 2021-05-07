---
layout: default
title: advhr
---

This is a more advanced hr dialog contributed by Michael Keck. This hr plugin supports noshade, width and size. Installation Instructions

1.  Copy the advhr directory to the plugins directory of TinyMCE (/jscripts/tiny_mce/plugins).
2.  Add plugin to TinyMCE plugin option list example: plugins : "advhr".
3.  Add this "hr[class|width|size|noshade]" to extended_valid_elements option.

## Initialization Example

```js
tinyMCE.init({
  theme : "advanced",
  mode : "textareas",
  plugins : "advhr",
  theme_advanced_buttons1_add : "advhr",
  extended_valid_elements : "hr[class|width|size|noshade]"
});

```
