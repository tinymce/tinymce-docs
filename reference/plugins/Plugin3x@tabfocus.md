---
layout: default
title: tabfocus
---

This plugin adds the possibility to tab in/out of TinyMCE.

## Plugin options

| Name | Summary |
| --- | --- |
| [tabfocus_elements](/wiki.php/TinyMCE3x:tabfocus_elements) | This option enables you to specify an element ID to focus, when the user pressed the tab key inside the editor. |

## Initialization Example

```html
tinyMCE.init({
	theme : "advanced",
	mode : "textareas",
	plugins : "tabfocus"
});
```