---
layout: default
title: Full Screen Plugin
description: Zoom TinyMCE up to the whole screen.
keywords: fullscreen
---

// adds menu control (under View menu)

// adds toolbar control

This plugin adds full screen editing capabilities to TinyMCE. When the toolbar control is pressed the editable area will fill the browser's viewport.

**Type:** `String`

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "fullscreen",
  menubar: "view",
  toolbar: "fullscreen"
});
```
