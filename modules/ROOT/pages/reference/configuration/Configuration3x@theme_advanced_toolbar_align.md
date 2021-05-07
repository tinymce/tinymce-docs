---
layout: default
title: theme_advanced_toolbar_align
---

This option enables you to specify the alignment of the toolbar, this value can be "left" (the default), "right" or "center". This option can only be used when [theme](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme/) is set to "advanced" and when the [theme_advanced_layout_manager](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_layout_manager/) option is set to the default value of "SimpleLayout".

## Example of usage of the theme_advanced_toolbar_align option:

```js
tinyMCE.init({
  ...
  theme_advanced_toolbar_align : "left"
});
```
