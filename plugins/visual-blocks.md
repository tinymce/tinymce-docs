---
layout: default
title: Visual Blocks Plugin (`visualblocks`)
---

// adds menu control (under View menu)

// adds toolbar control

This plugin allows a user to see block level elements in the editable area. It is similar to WYSIWYG hidden character functionality but, of course, at block level. It also adds a toolbar control and a menu item `Show blocks` under the `View` menu.

It's worth noting that at present the toolbar button icon is the same for both `visualblocks` and `visualchars`.

**Type:** `String`

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "visualblocks",
  menubar: "view",
  toolbar: "visualblocks"
});
```

### Options

This setting affects the execution of the `visualblocks` plugin. You may specify whether blocks are visible by default here.

### `visualblocks_default_state`

This option enables you to specify the default state of the visualblocks plugin.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "visualblocks",
  menubar: "view",
  toolbar: "visualblocks"
  visualblocks_default_state: true
});
```
