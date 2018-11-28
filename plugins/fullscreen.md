---
layout: default
title: Full Screen plugin
title_nav: Full Screen
description: Zoom TinyMCE up to the whole screen.
keywords: fullscreen view
controls: toolbar button, menu item
---

This plugin adds full screen editing capabilities to TinyMCE. When the toolbar button is pressed the editable area will fill the browser's viewport. The plugin adds a toolbar button and a menu item `Fullscreen` under the `View` menu.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "fullscreen",
  menubar: "view",
  toolbar: "fullscreen"
});
```
