## `block_formats`

This option defines the formats to be displayed in the `formatselect` dropdown toolbar button and the `blockformats` menu item. Each item in the string should be separated by semi-colons and specified using the form `title=block`.

**Type:** `String`

**Default Value:** `'Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Heading 4=h4; Heading 5=h5; Heading 6=h6; Preformatted=pre'`

### Example: Using `block_formats`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  block_formats: 'Paragraph=p; Header 1=h1; Header 2=h2; Header 3=h3'
});
```
