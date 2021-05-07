---
layout: default
title: force_hex_style_colors
---

This option enables you to control TinyMCE to force the color format to use hexadecimal instead of rgb strings. It converts for example "color: rgb(255, 255, 0)" to "#FFFF00". This option is set to true by default since otherwise MSIE and Firefox would differ in this behavior.

## Example of usage of the force_hex_style_colors option:

```js
tinyMCE.init({
  ...
  force_hex_style_colors : false
});
```
