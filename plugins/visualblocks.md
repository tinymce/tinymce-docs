---
layout: default
title: Visual Blocks plugin
title_nav: Visual Blocks
description: Allows a user to see block level elements such as paragraphs.
keywords: visualblocks wysiwyg hidden view visualblocks_default_state
controls: toolbar button, menu item
---

This plugin allows a user to see block level elements in the editable area. It is similar to WYSIWYG hidden character functionality, but at block level. It also adds a toolbar button and a menu item `Show blocks` under the `View` menu dropdown.

It's worth noting that at present the toolbar button icon is the same for both `visualblocks` and `visualchars`.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "visualblocks",
  menubar: "view",
  toolbar: "visualblocks"
});
```

### Options

This setting affects the execution of the `visualblocks` plugin. You may specify whether blocks are visible by default here.

### `visualblocks_default_state`

This option enables you to specify the default state of the Visual Blocks plugin.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "visualblocks",
  menubar: "view",
  toolbar: "visualblocks"
  visualblocks_default_state: true
});
```
