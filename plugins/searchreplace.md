---
layout: default
title: Search and Replace Plugin
title_nav: Search and Replace
description: Find and replace content in TinyMCE.
keywords: searchreplace
---

// adds menu control (under Edit menu)

// adds toolbar control

This plugin adds search/replace dialogs to TinyMCE. It also adds a toolbar control and the menu item `Find and replace` under the `Edit` menu dropdown.

**Type:** `String`

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "searchreplace",
  menubar: "edit",
  toolbar: "searchreplace"
});
```
