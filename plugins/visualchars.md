---
layout: default
title: Visual Characters plugin
title_nav: Visual Characters
description: See invisible characters like non-breaking spaces.
keywords: visualchars
controls: toolbar button, menu item
---

This plugin adds the ability for users to see invisible characters like `&nbsp;` displayed in the editable area. It also adds a toolbar control and a menu item `Show invisible characters` under the `View` menu.

> It's worth noting that at present the toolbar button icon is the same for both [Visual Blocks](../visualblocks/) and Visual Characters plugins.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "visualchars",
  menubar: "view",
  toolbar: "visualchars"
});
```
