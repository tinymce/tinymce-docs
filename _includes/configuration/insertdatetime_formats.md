### `insertdatetime_formats`

Allows you to specify a list of date/time formats to be used in the date menu or date select box. A complete list of formats is available under [date formats](#referencedatetimeformats) below.

#### Example: Using `insertdatetime_formats`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'insertdatetime',
  menubar: 'insert',
  toolbar: 'insertdatetime',
  insertdatetime_formats: ['%H:%M:%S', '%Y-%m-%d', '%I:%M:%S %p', '%D']
});
```

