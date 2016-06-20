---
layout: default
title: Code Plugin
title_nav: Code
description: Edit your content's HTML source.
keywords: wysiwyg source html edit code_dialog_height code_dialog_width
controls: toolbar button, menu item
---

This plugin adds a toolbar button that allows a user to edit the HTML code hidden by the WYSIWYG view. It also adds the menu item `Source code` under the `Tools` menu.

**Type:** `String`

**Default Value:**

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "code",
  toolbar: "code",
  menubar: "tools"
});
```

### Options

### `code_dialog_height`

This configuration option sets the *internal, editable area* height of the `code` dialog box.

Note that the external dimensions of the actual modal will be slightly larger than the value set.

**Type:** `Number`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "code",
  toolbar: "code",
  menubar: "tools",
  code_dialog_height: 200
});
```

### `code_dialog_width`

This configuration option sets the *internal, editable area* width of the `code` dialog box.

Note that the external dimensions of the actual modal will be slightly larger than the value set.

**Type:** `Number`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "code",
  toolbar: "code",
  menubar: "tools",
  code_dialog_width: 300
});
```
