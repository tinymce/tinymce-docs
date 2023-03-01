### `images_file_types`

{{site.requires_5_6v}}

This option configures which image file formats are accepted by the editor. Changing this option will adjust the following editor behaviour:
  - Which image file formats are allowed to be uploaded in the [Image]({{site.baseurl}}/plugins/opensource/image/) dialog.
  - Which image file formats are recognized and placed in an `img` element by the [Paste]({{site.baseurl}}/plugins/opensource/paste/) and [PowerPaste]({{site.baseurl}}/plugins/premium/powerpaste/) `smart_paste` functionality.

**Type:** `String`

**Default Value:** `'jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp'`

**Possible Values:** A list of valid web image file extensions. For a list of possible values see: [MDN Web Docs - Image file type and format guide](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types).

#### Example: Using `images_file_types`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'image',
  images_file_types: 'jpg,svg,webp'
});
```
