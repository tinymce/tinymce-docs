---
layout: default
title: Horizontal Rule plugin
title_nav: Horizontal Rule
description: Insert a horizontal line.
keywords: hr insert
controls: toolbar button, menu item
---

The Horizontal Rule (`hr`) plugin allows a user to insert a horizontal rule on the page at the cursor insertion point. It also adds a toolbar button and a menu item `Horizontal line` under the `Insert` menu.

**Type:** `String`

##### Example: Adding the Horizontal Rule plugin

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "hr"
});
```
