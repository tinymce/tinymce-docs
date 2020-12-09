### `smart_paste`

The `smart_paste` function will:

- Detect text that resembles a URL and change the text to a hyperlink.
- Detect text that resembles the URL for an image and will try to replace the text with the image.

To disable the `smart_paste` functionality, set `smart_paste` to `false`. To configure which image file types are recognised, see [Image & file options - images_file_types]({{site.baseurl}}/configure/file-image-upload/#images_file_types).

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

#### Example: Using `smart_paste`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: '{{plugincode}}',
  menubar: 'edit',
  toolbar: 'paste',
  smart_paste: false
});
```
