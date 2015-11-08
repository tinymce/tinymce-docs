---
layout: default
title: Print Plugin
---

// adds menu control (under File menu)

// adds toolbar control

This plugin adds a print button to TinyMCE's toolbar. It also adds a `Print` item to the File menu dropdown.

**Type:** `String`

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "print",
  menubar: "file",
  toolbar: "print"
});
```
