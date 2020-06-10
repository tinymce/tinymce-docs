## images_dataimg_filter

> **Important**: This option was deprecated with the release of {{site.productname}} 5.3. `images_dataimg_filter` may be removed in a future release of {{site.productname}}.

The **images_dataimg_filter** option is used to filter `<img>` elements before they are passed to [`image_upload_handler`]({{site.baseurl}}/configure/file-image-upload/#images_upload_handler) or [`images_upload_url`]({{site.baseurl}}/configure/file-image-upload/#images_upload_url). If the callback function provided returns `false` for an image, the image will not be uploaded.

**Type:** `JavaScript Function`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  images_dataimg_filter: function(img) {
    return !img.hasAttribute('internal-blob');  // blocks the upload of <img> elements with the attribute "internal-blob".
  }
});
```

> **Note**: The `images_dataimg_filter` option can also be used to specify a filter predicate function for disabling the logic that converts base64 images into blobs while within the editor. {{site.companyname}} discourages using `images_dataimg_filter` for this purpose.