---
layout: default
title: Legacy Output plugin
title_nav: Legacy Output
description: Changes HTML output to old HTML syntax such as font, b and i
keywords: legacyoutput filter content cms email flash
---

The `legacyoutput` plugin changes {{site.productname}}'s output, producing legacy elements such as `font`, `b`, `i`, `u`, `strike`, and use `align` attributes.

> **Important**: Editor content created while this plugin is active will be formatted using HTML3. Using this plugin will greatly reduce the functionality of the editor.

This plugin can be useful if you want to use {{site.productname}} in a legacy HTML mail client.

However, this is **not** intended for use in producing normal web content such as in a CMS. These elements should no longer be used for such purposes since they are deprecated in later XHTML and HTML5 specifications.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'legacyoutput'
});
```
