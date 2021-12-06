### `template_cdate_classes`

When HTML elements in a template are assigned this class, the content of the element will be replaced with the 'creation' date (`creationdate`), formatted according to the `template_cdate_format` option. This option accepts a list of classes (separated by spaces).

A creation date is one that is set if no previous date existed within the element. Once set, the original date is stored inside the element in a HTML comment and is designed not to change even with a template change.

Type
: `String`

Default Value
: `cdate`

#### Example: Using `template_cdate_classes`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'template',
  menubar: 'insert',
  toolbar: 'template',
  template_cdate_classes: 'cdate creationdate'
});
```

