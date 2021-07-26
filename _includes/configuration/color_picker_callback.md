## `color_picker_callback`

This option enables you to provide your own color picker.

**Type:** `JavaScript Function`

### Example: Using `color_picker_callback`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  color_picker_callback: function(callback, value) {
    callback('#FF00FF');
  }
});
```
