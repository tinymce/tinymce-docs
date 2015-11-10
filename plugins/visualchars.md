---
layout: default
title: Visual Characters Plugin
title_nav: Visual Characters
description: See invisible characters like `&nbsp;`
keywords: visualchars
---

// adds menu control (under View menu)

// adds toolbar control

This plugin adds the ability for users to see invisible characters like `&nbsp;` displayed in the editable area. It also adds a toolbar control and a menu item `Show invisible characters` under the `View` menu.

It's worth noting that at present the toolbar button icon is the same for both `visualblocks` and `visualchars`.

**Type:** `String`

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "visualchars",
  menubar: "view",
  toolbar: "visualchars"
});
```
