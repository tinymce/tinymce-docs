## `fontsize_formats`

This option allows you to override the font sizes displayed in the `fontsizeselect` dropdown toolbar button and the `fontsizes` menu item. Each item in the string should be space or comma-separated and include units.

**Type:** `String`

**Default Value:** `'8pt 10pt 12pt 14pt 18pt 24pt 36pt'`

### Example: Using `fontsize_formats`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: 'fontsizeselect',
  fontsize_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt'
});
```
