### `image_file_types`

This option configures which image file formats will be recognized and placed in an `img` element by the [smart_paste](#smart_paste) functionality when content is pasted into the editor.

**Type:** `String`

**Default Value:** `'jpeg,jpg,jpe,jfi,jfif,png,gif,bmp,webp'`

**Possible Values:** A list of valid web image file extensions. For a list of possible values see: [MDN Web Docs - Image file type and format guide](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types).

#### Example: Using `image_file_types`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: '{{plugincode}}',
  smart_paste: true,  // note: default value for smart_paste is true
  image_file_types: 'jpg,svg,webp'
});
```
