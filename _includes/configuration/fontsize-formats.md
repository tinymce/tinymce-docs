## fontsize_formats

This option allows you to override the font sizes displayed in the font size select box using a space or comma separated list of font sizes.

**Type:** `String`

**Default Value:** `'11px 12px 14px 16px 18px 24px 36px 48px'`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: 'fontsizeselect',
  fontsize_formats: '11px 12px 14px 16px 18px 24px 36px 48px'
});
```
