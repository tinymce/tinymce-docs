---
layout: default
title: skin
---

(Requires: 3.0)

This option enables you to specify what skin you want to use with your theme. A skin is basically a CSS file that gets loaded from the skins directory inside the theme. The advanced theme that TinyMCE comes with has two skins these are called `"default"` and `"o2k7"`.

## Example of usage of the skin option:

```js
tinyMCE.init({
  theme : "advanced",
  skin : "o2k7"
});
```

Also see [Creating_a_Skin](https://www.tiny.cloud/docs-3x/customization/TinyMCE3x@Creating_a_skin/)
