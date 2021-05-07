---
layout: default
title: skin_variant
---

(Requires: 3.0.2)

This option enables you to specify a variant for the skin, for example "silver" or "black".

"default" skin doesn't offer any variant, whereas "o2k7" default offers "silver" or "black" variants to the default one.

When creating a skin, additional variants may also be created, by adding ui_<variant_name>.css files alongside the default ui.css.

## Example of usage of the skin option:

```js
tinyMCE.init({
  ...
  theme : "advanced",
  skin : "o2k7",
  skin_variant : "silver"
});
```

Also see: [Creating_Skin](https://www.tiny.cloud/docs-3x/customization/TinyMCE3x@Creating_a_skin/), [skin](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@skin/)
