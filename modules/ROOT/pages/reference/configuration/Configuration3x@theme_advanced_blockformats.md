---
layout: default
title: theme_advanced_blockformats
---

This option should contain a comma separated list of formats that will be available in the format drop down list. The default value of this option is "p,address,pre,h1,h2,h3,h4,h5,h6". This option is only available if the advanced theme is used.

This list is used to populate available formats in the [formatselect dropdown](https://www.tiny.cloud/docs-3x/reference/buttons/).

## Example of usage of the theme_advanced_blockformats option:

```js
tinyMCE.init({
  ...
  theme_advanced_blockformats : "p,div,h1,h2,h3,h4,h5,h6,blockquote,dt,dd,code,samp"
});
```
