---
layout: default
title: theme_advanced_styles
---

This option should contain a semicolon separated list of class titles and class names separated by =. The titles will be presented to the user in the styles dropdown list and the class names will be inserted. If this option is not defined, TinyMCE imports the classes from the [content_css](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@content_css/).

## Example of usage of the theme_advanced_styles option:

```js
tinyMCE.init({
  ...
  theme_advanced_styles : "Header 1=header1;Header 2=header2;Header 3=header3;Table Row=tableRow1"
});
```
