---
layout: default
title: Advanced Code
title_nav: Advanced Code
description: Advanced Code editor for TinyMCE.
keywords: code advcode codemirror
controls: toolbar button, menu item
---

This plugin adds a toolbar button that allows a user to edit the HTML code using a more advanced [code editor]({{ site.baseurl }}/enterprise/advcode/) than the default textarea.

If you are using Advanced Code `advcode` plugin, make sure you do not use Code `code` plugin.

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "advcode",
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
  plugins: "advcode",
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
  plugins: "advcode",
  toolbar: "code",
  code_dialog_width: 300
});
```

> The Advanced Code feature is included with a [TinyMCE Enterprise](https://www.tinymce.com/pricing/) subscription. Please [click here](https://www.tinymce.com/pricing/) to learn more about our flexible subscriptions plans.
