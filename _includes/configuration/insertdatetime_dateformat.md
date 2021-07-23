### `insertdatetime_dateformat`

This option allows you to override the default formatting rule for date formats inserted by the `mceInsertDate` command. This defaults to `%Y-%m-%d` and where the different `%` variables get replaced with various [date format options](#referencedatetimeformats).

#### Example: Using `insertdatetime_dateformat`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'insertdatetime',
  menubar: 'insert',
  toolbar: 'insertdatetime',
  insertdatetime_dateformat: '%Y-%m-%d'
});
```
