---
layout: default
title: theme
---

This option enables you to specify what theme to use when rendering the TinyMCE WYSIWYG editor instances. This name matches the directories located in `tinymce/jscripts/tiny_mce/themes`. The default value of this option is "advanced". TinyMCE has two built-in themes described below.

| Name | Summary |
| --- | --- |
| advanced | This theme enables users to add/remove buttons and panels and is a lot more flexible than the simple theme. For more information about this theme's specific options check the [advanced theme](https://www.tiny.cloud/docs-3x/api/configuration/Configuration3x@Advanced_theme) configuration section. |
| simple | This is the most simple theme for TinyMCE. It contains only the basic functions. |

## Example of usage of the theme option:

```js
tinyMCE.init({
  ...
  theme : "advanced",
  theme_advanced_buttons3_add_before : "tablecontrols,separator"
});
```
