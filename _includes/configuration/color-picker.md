## color_picker

The `colorpicker` component adds an HSV color picker dialog to the editor. When activated **in conjunction with** [textcolor](../textcolor/) it adds a "custom color" button to the text color toolbar dropdown. When a user clicks "custom color" a modal will open presenting a color wheel so that the user can choose their own colors (rather than the ones defined by `textcolor`) to be applied to text and/or the selected text's background.

Since TinyMCE 5.0, the colorpicker and textcolor plugins are now builtin component, which means there is no need to declare it in the list of plugins.

The plugin hooks into the editor [`color_picker_callback`](#color_picker_callback) api, which is a hookin point reserved for any color picker implementation in TinyMCE.

**Type:** `String`

##### Example

In this example we have activate the toolbar `forecolor` and `backcolor` palettes.

```js
tinymce.init({
  selector: "textarea",
  toolbar: "forecolor backcolor"
});
```

### `color_picker_callback`

This option enables you to provide your own color picker.  Your custom color picker just needs to return a color value, and our callback code will insert this color into the editor.

##### Example

```js
tinymce.init({
  selector: "textarea",
  toolbar: "forecolor backcolor"
  color_picker_callback: function(callback, value) {
    callback('#FF00FF');
  }
});
```
