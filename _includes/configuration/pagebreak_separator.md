### `pagebreak_separator`

**Type:** `String`

**Default Value:** `"<!-- pagebreak -->"`

#### Example: Using `pagebreak_separator`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'pagebreak',
  menubar: 'insert',
  toolbar: 'pagebreak',
  pagebreak_separator: '<!-- my page break -->'
});
```

