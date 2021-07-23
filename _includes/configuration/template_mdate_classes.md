### `template_mdate_classes`

When HTML elements in a template are assigned this class, the content of the element will be replaced with the 'modified' date (`modifieddate`), formatted according to the `template_mdate_format` option. This option accepts a list of classes (separated by spaces).

A modified date is one that is updated with each edit.

**Type:** `String`

**Default Value:** `mdate`

#### Example: Using `template_mdate_classes`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'template',
  menubar: 'insert',
  toolbar: 'template',
  template_mdate_classes: 'mdate modifieddate'
});
```

