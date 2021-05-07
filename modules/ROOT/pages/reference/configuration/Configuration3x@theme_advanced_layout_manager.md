---
layout: default
title: theme_advanced_layout_manager
---

This option enables you to switch button and panel layout functionality.

There are three different layout manager options:

*   SimpleLayout is the default layout manager,
*   RowLayout is a more advanced layout manager, and
*   CustomLayout executes a custom layout manager function.

Each of these layout managers have different options and can be configured in different ways. This option is only available if the "advanced" [theme](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme/) is used.

## Example of usage of the theme_advanced_layout_manager option:

```js
tinyMCE.init({
  ...
  theme_advanced_layout_manager : "RowLayout"
});
```
