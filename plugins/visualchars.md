---
layout: default
title: Visual Characters plugin
title_nav: Visual Characters
description: See invisible characters like non-breaking spaces.
keywords: visualchars
controls: toolbar button, menu item
---

This plugin adds the ability to see invisible characters like `&nbsp;` displayed in the editable area. It also adds a toolbar control and a menu item `Show invisible characters` under the `View` menu.

**Type:** `String`

##### Example: Adding the Visual Characters plugin

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "visualchars",
  menubar: "view",
  toolbar: "visualchars"
});
```

### Options

This setting affects the execution of the `visualchars` plugin. Characters can be configured to be visible by default using this option.

### `visualchars_default_state`

This option enables specifying the default state of the Visual Blocks plugin.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

```js
tinymce.init({
  selector: "textarea",  // change this value according to the HTML
  plugins: "visualchars",
  menubar: "view",
  toolbar: "visualchars",
  visualchars_default_state: true
});
```
