### `image_file_types`

This option allows you to specify which image file formats will be recognised and modified by [smart_paste](#smart_paste) when pasted.

**Type:** `String`

**Default Value:** `'jpeg,jpg,jpe,jfi,jfif,png,gif,bmp,webp'`

**Possible Values:** A list of valid web image file formats. For a list of possible values see: [Image file type and format guide](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types).

#### Example: Using `image_file_types`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: '{{plugincode}}',
  smart_paste: true,
  image_file_types: 'jpg,svg,webp'
});
```
