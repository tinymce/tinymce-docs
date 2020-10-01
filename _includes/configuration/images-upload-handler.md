## images_upload_handler

The **images_upload_handler** option allows you to specify a function that is used to replace {{site.productname}}'s default JavaScript upload handler function with custom logic.

The upload handler function takes four arguments:

* `blobInfo`
* A `success` callback
* A `failure` callback that takes an error message and an optional object containing:
    * `remove` - Removes the image from the document, defaults to `false`
* A `progress` callback that takes a value between 1 and 100

When this option is not set, {{site.productname}} utilizes an `XMLHttpRequest` to upload images one at a time to the server and calls the success callback with the location of the remote image.

>Note: To replace the `<img>` tag's `src` attribute with the remote location, please use the success callback defined in the `images_upload_handler` function with the returned JSON object's location property.

**Type:** `JavaScript Function`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  images_upload_handler: function (blobInfo, success, failure, progress) {
    var xhr, formData;

    xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open('POST', 'postAcceptor.php');

    xhr.upload.onprogress = function (e) {
      progress(e.loaded / e.total * 100);
    };

    xhr.onload = function() {
      var json;

      if (xhr.status === 403) {
        failure('HTTP Error: ' + xhr.status, { remove: true });
        return;
      }

      if (xhr.status < 200 || xhr.status >= 300) {
        failure('HTTP Error: ' + xhr.status);
        return;
      }

      json = JSON.parse(xhr.responseText);

      if (!json || typeof json.location != 'string') {
        failure('Invalid JSON: ' + xhr.responseText);
        return;
      }

      success(json.location);
    };

    xhr.onerror = function () {
      failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
    };

    formData = new FormData();
    formData.append('file', blobInfo.blob(), blobInfo.filename());

    xhr.send(formData);
  }
});
```
