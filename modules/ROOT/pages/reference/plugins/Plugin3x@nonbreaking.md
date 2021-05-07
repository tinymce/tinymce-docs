---
layout: default
title: nonbreaking
---

This plugin adds a button for inserting nonbreaking space entities &nbsp; at the current caret location.

## Plugin options

| Name | Summary |
| --- | --- |
| [nonbreaking_force_tab] | This enables you to force TinyMCE to insert three &nbsp; entities when the user presses the tab key. |
| NOTE | if this option is enabled, then avoid usage of tinymce configuration option tab_focus. |

## Installation Instructions

1.  Add plugin to TinyMCE plugin option list example: plugins : "nonbreaking".
2.  Add the nonbreaking button name to button list, example: theme_advanced_buttons3_add : "nonbreaking".

## Initialization Example

```js
tinyMCE.init({
  theme : "advanced",
  mode : "textareas",
  plugins : "nonbreaking",
  theme_advanced_buttons3_add : "nonbreaking",
  nonbreaking_force_tab : true
});
```
