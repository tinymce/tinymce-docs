---
layout: default
title: Preview plugin
title_nav: Preview
description: Shows a popup of the current content in read-only format.
keywords: view preview 
controls: toolbar button, menu item
---

This plugin adds a preview button to the toolbar. Pressing the button opens a dialog box showing the current content in a preview mode. It also adds a menu item `Preview` under the `File` and `View` menu dropdowns.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "preview",
  menubar: "view",
  toolbar: "preview"
});
```

