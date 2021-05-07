---
layout: default
title: preview
---

This plugin adds a preview button to TinyMCE, pressing the button opens a popup showing the current content. Installation Instructions

1.  Copy the preview directory to the plugins directory of TinyMCE (/jscripts/tiny_mce/plugins).
2.  Add plugin to TinyMCE plugin option list example: plugins : "preview".
3.  Add the button name to button list, example: theme_advanced_buttons3_add : "preview".

## Initialization Example

```js
tinyMCE.init({
  theme : "advanced",
  mode : "textareas",
  plugins : "preview",
  theme_advanced_buttons3_add : "preview",
  plugin_preview_width : "500",
  plugin_preview_height : "600"
});
```

## Plugin options

| Name | Summary |
| --- | --- |
| [plugin_preview_width] | Preview window width. Defaults to 550. |
| [plugin_preview_height] | Preview window height. Defaults to 600. |
| [plugin_preview_pageurl] | Custom preview page URL relative from theme use "../../plugins/preview/example.html" for a example. |
