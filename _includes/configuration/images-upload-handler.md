## images_upload_handler

The **images_upload_handler** option allows you to specify a function that is used to replace TinyMCE's default JavaScript upload handler function with custom logic.

The upload handler function takes three arguments: `blobInfo`, a `success` callback, and a `failure` callback. When this option is not set, TinyMCE utilizes an `XMLHttpRequest` to upload images one at a time to the server and calls the success callback with the location of the remote image.

>Note: Please note that when using this option, no other image uploader options are necessary. Additionally, if you would like TinyMCE to replace the `<image>` tag's `src` attribute with the remote location, please use the success callback defined in the `images_upload_handler` function with the returned JSON object's location property.

**Type:** `JavaScript Function`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  images_upload_handler: function (blobInfo, success, failure) {
    var xhr, formData;

    xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open('POST', 'postAcceptor.php');

    xhr.onload = function() {
      var json;

      if (xhr.status != 200) {
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

    formData = new FormData();
    formData.append('file', blobInfo.blob(), blobInfo.filename());

    xhr.send(formData);
  }
});
```



