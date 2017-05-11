---
layout: default
title: Lists Plugin
title_nav: Lists
description: Normalizes list behavior between browsers.
keywords: list lists browser normalize
---

This list plugin normalizes list behavior between browsers. Enable it if you have problems with consistency making lists.

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "lists",
  toolbar: "numlist bullist"
});
```

## Options

These settings affect the execution of the `lists` plugin.

### `lists_indent_on_tab`

This boolean option allows to disable the indent on tab key functionality. It's default value is set to true.
