## hidden_input

This option gives you the ability to disable the auto generation of hidden input fields for inline editing elements. By default all inline editors get a hidden input element that content gets saved to when you do `editor.save()` or `tinymce.triggerSave()`.

This can be disabled if you don't need these controls.

Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  inline: true,
  hidden_input: false
});
```
