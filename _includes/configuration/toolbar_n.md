## `toolbar(n)`

This option allows you to specify the buttons and the order that they will appear on instances of multiple toolbars.

**Type:** `String`

### Example: Using `toolbar(n)`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  toolbar1: 'undo redo | styleselect | bold italic | link image',
  toolbar2: 'alignleft aligncenter alignright'
});
```

Please see the [toolbar](#toolbar) configuration option for details.
