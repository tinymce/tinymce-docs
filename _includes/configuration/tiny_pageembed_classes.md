### `tiny_pageembed_classes`

The `tiny_pageembed_classes` takes an array of objects with `text` and `value` properties that will populate the size selection fields in the plugin dialog. Use the following script to create custom classes using the `tiny_pageembed_classes` option:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'pageembed',
  menubar: 'view',
  toolbar: 'pageembed',
  tiny_pageembed_classes: [
    { text: 'Big embed', value: 'my-big-class' },
    { text: 'Small embed', value: 'my-small-class' }
  ]
});
```

### Disable select

When the `tiny_pageembed_classes` value is set to an empty array, the size selection fields are not available and only exact sizes can be set. Use the following script to disable `select` using the `tiny_pageembed_classes` option:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'pageembed',
  menubar: 'view',
  toolbar: 'pageembed',
  tiny_pageembed_classes: [ ]
});
```
