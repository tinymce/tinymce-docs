### `formatpainter_blacklisted_formats`

This option makes it possible to block the unwanted formats in the format painter.

Type
: `String`

Default
: `'link,address,removeformat,formatpainter_removeformat'`

#### Example: Using `formatpainter_blacklisted_formats`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'formatpainter',
  formatpainter_blacklisted_formats: 'link,address,removeformat,formatpainter_removeformat'
});
```
