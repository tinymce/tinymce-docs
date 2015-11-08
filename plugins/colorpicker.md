---
layout: default
title: Color Picker Plugin (`colorpicker`)
---


The `colorpicker` plugin adds a full-blown color picker to the editor by setting the [`color_picker_callback`](./configuration-reference/callbacks/#color_picker_callback).

**Type:** `String`

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "colorpicker"
});
```

### `color_picker_callback`

This option enables you to provide your own color picker.

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "colorpicker",
  color_picker_callback: function(callback, value) {
    callback('#FF00FF');
  }
});
```
