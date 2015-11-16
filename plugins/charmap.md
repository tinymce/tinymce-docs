---
layout: default
title: Character Map Plugin
title_nav: Character Map
description: Insert special characters into TinyMCE.
keywords: charmap symbols
controls: toolbar button, menu item
---

This plugin adds a `charmap` toolbar button that enables users to insert special characters into their text. It also adds the menu item `Special character` under the `Insert` menu.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "charmap",
  toolbar: "charmap",
  menubar: "insert"
});
```
