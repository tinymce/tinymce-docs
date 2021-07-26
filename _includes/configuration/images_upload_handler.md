## `images_upload_handler`

The **images_upload_handler** option allows you to specify a function that is used to replace {{site.productname}}'s default JavaScript upload handler function with custom logic.

The upload handler function takes four arguments:

* `blobInfo`
* A `success` callback
* A `failure` callback that takes an error message and an optional object containing:
    * `remove` - Removes the image from the document, defaults to `false`
* A `progress` callback that takes a value between 1 and 100

When this option is not set, {{site.productname}} utilizes an `XMLHttpRequest` to upload images one at a time to the server and calls the success callback with the location of the remote image.

> **Note**: To replace the `<img>` tag's `src` attribute with the remote location, please use the success callback defined in the `images_upload_handler` function with the returned JSON object's location property.

**Type:** `JavaScript Function`

### Example: Using `images_upload_handler`

```js
{% include misc/images-upload-handler-function.md %}

tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  images_upload_handler: example_image_upload_handler
});
```
