---
layout: default
title: layer
---

Adds a layer support to TinyMCE by making it possible to create/remove and z-index block elements.

These are the possible button control that this plugin contains: insertlayer,moveforward,movebackward,absolute

Installation Instructions

1.  Add plugin to TinyMCE plugin option list example: plugins : "layer".
2.  Add the insertlayer,moveforward,movebackward,absolute button names to button list, example: theme_advanced_buttons3_add : "insertlayer,moveforward,movebackward,absolute".

## Initialization Example

```js
tinyMCE.init({
  theme : "advanced",
  mode : "textareas",
  plugins : "layer",
  theme_advanced_buttons3_add : "insertlayer,moveforward,movebackward,absolute"
});
```
