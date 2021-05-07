---
layout: default
title: advimage
---

This is a more advanced image dialog mostly based on code contributed by Michael Keck. This one supports mouseover/out image swapping.

Installation Instructions

1.  Copy the advimage directory to the plugins directory of TinyMCE (/jscripts/tiny_mce/plugins).
2.  Add plugin to TinyMCE plugin option list example: plugins : "advimage".
3.  Add this "img[!src|border:0|alt|title|width|height|style]a[name|href|target|title|onclick]" to extended_valid_elements option.

## Advimage plugin options

| Name | Summary |
| --- | --- |
| [theme_advanced_styles](https://www.tiny.cloud/docs-3x/api/configuration/Configuration3x@theme_advanced_styles) | This option should contain a semicolon separated list of class titles and class names separated by =. The titles are the ones that get presented to the user in the styles drop down list and and the class names is the classes that gets inserted. |
| advimage_update_dimensions_onchange | This option enables you to control if the image dimensions should be updated with new data if the image src field is changed. This option is enabled by default. |

## Initialization Example

```js
tinyMCE.init({
  theme : "advanced",
  mode : "textareas",
  plugins : "advimage"
});
```
