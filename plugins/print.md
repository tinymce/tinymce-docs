---
layout: default
title: Print plugin
title_nav: Print
description: Print the content in TinyMCE.
keywords: file
controls: toolbar button, menu item
---

This plugin adds a print button to the toolbar. It also adds a `Print` item to the `File` menu dropdown.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "print",
  menubar: "file",
  toolbar: "print"
});
```
