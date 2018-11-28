---
layout: default
title: Search and Replace plugin
title_nav: Search and Replace
description: Find and replace content in TinyMCE.
keywords: searchreplace edit
controls: toolbar button, menu item
---

This plugin adds search/replace dialogs to TinyMCE. It also adds a toolbar button and the menu item `Find and replace` under the `Edit` menu dropdown.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "searchreplace",
  menubar: "edit",
  toolbar: "searchreplace"
});
```
