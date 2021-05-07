---
layout: default
title: directionality
---

This option specifies the default writing direction. Some languages (Like Hebrew, Arabic, Urdu...) write from right to left instead of left to right. The default value of this option is "ltr" but if you want to use from right to left mode specify "rtl" instead.

## Example of usage of the directionality option:

```js
tinyMCE.init({
  ...
  directionality : "rtl"
});
```
