---
layout: default
title: Preview Plugin
title_nav: Preview
description: Shows a popup of the curent content in read-only format.
keywords: view, preview
---

// adds menu control (under View menu)

// adds toolbar control

This plugin adds a preview button to TinyMCE. Pressing the button opens a popup showing the current content.

**Type:** `String`

**Default Value:**

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "preview",
  menubar: "view",
  toolbar: "preview"
});
```

### Options

These settings affect the execution of the `preview` plugin. The height and width of the preview dialog box may be set here.

### `plugin_preview_height`

This option allows you to set the height of the preview window that appears when using the `preview` plugin.

**Type:** `Integer`

**Default Value:** `500`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "preview",
  menubar: "view",
  toolbar: "preview",
  plugin_preview_height: 500
});
```

### `plugin_preview_width`

This option allows you to set the width of the preview window that appears when using the `preview` plugin.

**Type:** `Integer`

**Default Value:** `650`

##### Example

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "preview",
    menubar: "view",
    toolbar: "preview",
    plugin_preview_width: 650
});
```
