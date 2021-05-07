---
layout: default
title: font_size_classes
---

This option allows specification of a comma separated list of class names that is to be used when the user selects font sizes. This option is only used when the [convert_fonts_to_spans](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@convert_fonts_to_spans/) option is enabled. This list of classes should be 7 items. This option is not used by default, but can be useful if you want to have custom classes for each font size for browser compatibility.

## Example of usage of the font_size_classes option:

```js
tinyMCE.init({
  ...
  font_size_classes : "fontSize1,fontSize2,fontSize3,fontSize4,fontSize5,fontSize6,fontSize7"
});
```
