## color_picker

The `colorpicker` component adds an HSV color picker dialog to the editor. When activated **in conjunction with** [textcolor](../textcolor/) it adds a "custom color" button to the text color toolbar drop down. When a user clicks "custom color" a modal will open presenting a color wheel so that the user can choose their own colors (rather than the ones defined by `textcolor`) to be applied to text and/or the selected text's background.

Since {{site.productname}} 5, the `colorpicker` and `textcolor` plugins are now builtin components, which means there is no need to declare it in the list of plugins.

The plugin hooks into the editor [`color_picker_callback`](#color_picker_callback) api, which is a hook in point reserved for any color picker implementation in {{site.productname}}.

**Type:** `String`

##### Example

In this example, we have activated the toolbar `forecolor` and `backcolor` palettes.

```js
tinymce.init({
  selector: 'textarea',
  toolbar: 'forecolor backcolor'
});
```

### `color_picker_callback`

This option enables you to provide your own color picker. When your custom color picker returns a color value, our callback code inserts this color into the editor.

##### Example

```js
tinymce.init({
  selector: 'textarea',
  toolbar: 'forecolor backcolor'
  color_picker_callback: function(callback, value) {
    callback('#FF00FF');
  }
});
```
