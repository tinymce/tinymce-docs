---
layout: default
title: Code plugin
---


// adds menu control (under Tools menu)

// adds toolbar control

This plugin adds a toolbar button that allows a user to edit the HTML code hidden by the WYSIWYG view. It also adds the menu item `Source code` under the `Tools` menu.

**Type:** `String`

**Default Value:**

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "code",
    toolbar: "code",
    menubar: "tools"
});
```

### Options

### `code_dialog_height`

This configuration option sets the *internal, editable area* height of the `code` dialog box.

Note that the external dimensions of the actual modal will be slightly larger than the value set.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "code",
    toolbar: "code",
    menubar: "tools",
    code_dialog_height: "200"
});
```

### `code_dialog_width`

This configuration option sets the *internal, editable area* width of the `code` dialog box.

Note that the external dimensions of the actual modal will be slightly larger than the value set.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "code",
    toolbar: "code",
    menubar: "tools",
    code_dialog_width: "300"
});
```
