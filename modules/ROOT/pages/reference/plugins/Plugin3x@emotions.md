---
layout: default
title: emotions
---

The emotions plugin is able to insert smiley images into the TinyMCE editable area. Installation Instructions:

1.  Copy the emotions directory to the plugins directory of TinyMCE (/jscripts/tiny_mce/plugins).
2.  Add plugin to TinyMCE plugin option list example: plugins : "emotions".
3.  Add the emotions button name to button list, example: theme_advanced_buttons3_add : "emotions".

## Initialization Example

```js
tinyMCE.init({
  theme : "advanced",
  mode : "textareas",
  plugins : "emotions",
  theme_advanced_buttons3_add : "emotions"
});

```

## Copyright notice

These emotions were taken from Mozilla Thunderbird. I hope they don't get angry if I use them here; after all this is an open source project as well, and I really love their product.
