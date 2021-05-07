---
layout: default
title: font_size_style_values
---

This option allows specification of a comma separated list of style values that is to be used when the user selects font sizes. This option is only used when the [convert_fonts_to_spans](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@convert_fonts_to_spans/) option is enabled. This list of style values should be 7 items. This option is not used by default, but can be useful if you want to have custom CSS values for each font size for browser compatibility. Defaults to: xx-small,x-small,small,medium,large,x-large,xx-large.

## Example of usage of the font_size_style_values option:

```js
tinyMCE.init({
  ...
  font_size_style_values : "xx-small,x-small,small,medium,large,x-large,xx-large"
});
```
