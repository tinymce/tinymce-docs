## `automatic_uploads`

Enable or disable automatic upload of images represented by data URLs or blob URIs. Such images get generated, for example, as a result of image manipulation through [Image Tools]({{site.baseurl}}/plugins/opensource/imagetools) plugin, or after image is drag-n-dropped onto the editor from the desktop.

> **Note**: This option will do nothing if `images_upload_url` is not specified.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

### Example: Using `automatic_uploads`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  images_upload_url: 'postAcceptor.php',
  automatic_uploads: false
});
```
