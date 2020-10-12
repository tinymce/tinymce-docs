## `setup`

This option allows you to specify a callback that will be executed before the {{site.productname}} editor instance is rendered.

To specify a setup callback, please provide the `setup` option with a JavaScript function. This function should have one argument, which is a reference to the editor that is being set up.

A common use case for this setting is to add editor events to {{site.productname}}. For instance, if you would like to add a click event to {{site.productname}}, you would add it through the setup configuration setting.

**Type:** `JavaScript Function`

### Example: Using `setup`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  setup: function (editor) {
    editor.on('click', function () {
      console.log('Editor was clicked');
    });
  }
});
```
