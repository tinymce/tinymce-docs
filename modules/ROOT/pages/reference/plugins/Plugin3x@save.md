---
layout: default
title: save
---

This plugin adds a save button to TinyMCE this save button will submit the form that the editor is within.

## Installation Instructions

1.  Add plugin to TinyMCE plugin option list example: plugins : "save".
2.  Add the save and cancel button names to button list, example: theme_advanced_buttons3_add : "save,cancel".

## Plugin options

| Name | Summary |
| --- | --- |
| [save_enablewhendirty] | If you set this option to true, the edit button will be disabled/dimmed until modifications are made. This is disabled by default. |
| [save_onsavecallback] | This option enables you to add a custom function to be called when the save button/command is invoked. This is not used by default. |
| [save_oncancelcallback] | This option enabled you to add a custom function to be called when the cancel button/command is invoked. This is not used by default. |

## Initialization Example

```js
tinyMCE.init({
  theme : "advanced",
  mode : "textareas",
  plugins : "save",
  theme_advanced_buttons3_add : "save",
  save_enablewhendirty : true,
  save_onsavecallback : "mysave"
});
```
