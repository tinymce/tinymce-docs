### `image_advtab`

This option adds an "Advanced" tab to the image dialog allowing you to add custom styles, spacing and borders to images.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

#### Example: Using `image_advtab`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'image',
  menubar: 'insert',
  toolbar: 'image',
  image_advtab: true
});
```
