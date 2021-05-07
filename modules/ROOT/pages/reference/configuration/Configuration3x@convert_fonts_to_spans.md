---
layout: default
title: convert_fonts_to_spans
---

If you set this option to true, TinyMCE will convert all font elements to span elements and generate span elements instead of font elements. This option should be used in order to get more W3C compatible code, since font elements are deprecated. How sizes get converted can be controlled by the [font_size_classes](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@font_size_classes/) and [font_size_style_values](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@font_size_style_values/) options.

This option is enabled by default as of 3.0a1.

## Example of usage of the convert_fonts_to_spans option:

```js
tinyMCE.init({
  ...
  convert_fonts_to_spans : false
});
```
