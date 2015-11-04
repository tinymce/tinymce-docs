## hidden_input

This option gives you the ability to disable the auto generation of hidden input fields for inline editing elements. By default all inline editors get an hidden input element that contents gets saved to when you do editor.save() or tinymce.triggerSave(). This can be disabled if you don't need these controls.

Example

```js
tinymce.init({
	...
    selector: ".editable",
    inline: true,
    hidden_input: false,
    ...
});
```
