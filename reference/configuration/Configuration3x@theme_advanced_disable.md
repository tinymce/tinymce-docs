---
layout: default
title: theme_advanced_disable
---

This option should contain a comma separated list of controls to disable from any toolbar row/panel in TinyMCE.

A complete reference of all built in buttons and controls can be found in the [button/control reference](/wiki.php/TinyMCE3x:Buttons/controls) reference page.

## Example of usage of the theme_advanced_disable option:

```html
tinyMCE.init({
	...
	theme_advanced_disable : "bold,italic"
});
```