---
layout: default
title: fullscreen
---

This plugin adds fullscreen editing mode to TinyMCE.

## Installation Instructions

1.  Add plugin to TinyMCE plugin option list example: plugins : "fullscreen".
2.  Add the fullscreen button name to button list, example: theme_advanced_buttons3_add : "fullscreen".

## Plugin options

| Name | Summary |
| --- | --- |
| fullscreen_settings | This option gives you the ability to have different settings applied when the editor is in fullscreen mode for example more tools. This option will only work together with fullscreen_new_window. |
| fullscreen_new_window | This option enables you to switch on the old style new window mode this is disabled by default. |

## Initialization Example

```js
tinyMCE.init({
  theme : "advanced",
  mode : "textareas",
  plugins : "fullscreen",
  theme_advanced_buttons3_add : "fullscreen",
  fullscreen_new_window : true,
  fullscreen_settings : {
    theme_advanced_path_location : "top"
  }
});

```
