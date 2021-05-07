---
layout: default
title: theme_advanced_toolbar_location
---

This option enables you to specify where the toolbar should be located. This option can be set to "top" (the default) or "bottom" or "external". This option can only be used when [theme](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme/) is set to advanced and when the [theme_advanced_layout_manager](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_layout_manager/) option is set to the default value of "SimpleLayout".

Choosing the "external" location adds the toolbar to a DIV element and sets the class of this DIV to "mceExternalToolbar". This enables you to freely specify the location of the toolbar.

## Example of usage of the theme_advanced_toolbar_location option:

```js
tinyMCE.init({
  ...
  theme_advanced_toolbar_location : "bottom"
});
```
