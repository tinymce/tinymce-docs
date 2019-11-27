## fontsize_formats

This option allows you to override the font sizes displayed in the `fontsizeselect` dropdown toolbar button and the `fontsizes` menu item. Each item in the string should be space or comma-separated and include units.

**Type:** `String`

**Default Value:** `'11px 12px 14px 16px 18px 24px 36px 48px'`

##### Example: fontsize_formats

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: 'fontsizeselect',
  fontsize_formats: '11px 12px 14px 16px 18px 24px 36px 48px'
});
```
