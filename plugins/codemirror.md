---
layout: default
title: Codemirror
title_nav: Codemirror
description: Edit your content's HTML source using Codemirror.
keywords: code codemirror
controls: toolbar button, menu item
---

This plugin adds a toolbar button that allows a user to edit the HTML code using a more advanced [code editor]({{ site.baseurl }}/enterprise/codemirror/) than the default textarea.

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "codemirror",
  toolbar: "code"
});
```

### Options

### `code_dialog_height`

This configuration option sets the *internal, editable area* height of the `code` dialog box.

Note that the external dimensions of the actual modal will be slightly larger than the value set.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "codemirror",
  toolbar: "code",
  menubar: "tools",
  code_dialog_height: 200
});
```

### `code_dialog_width`

This configuration option sets the *internal, editable area* width of the `code` dialog box.

Note that the external dimensions of the actual modal will be slightly larger than the value set.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "codemirror",
  toolbar: "code",
  code_dialog_width: 300
});
```
