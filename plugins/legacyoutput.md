---
layout: default
title: Legacy Output plugin
title_nav: Legacy Output
description: Changes HTML output to old HTML syntax such as font, b and i
keywords: legacyoutput filter content cms email flash
---

The `legacyoutput` plugin changes {{site.productname}}'s output, producing legacy elements such as `font`, `b`, `i`, `u`, `strike`, and use `align` attributes.

This plugin can be useful if you want to use {{site.productname}} in an HTML mail client or to render contents to Flash.

However, this is **not** intended for use in producing normal web content such as in a CMS. These elements should no longer be used for such purposes since they are deprecated in later XHTML and HTML5 specifications.

**Type:** `String`

##### Example: Enabling the Legacy Output plugin

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "legacyoutput"
});
```
