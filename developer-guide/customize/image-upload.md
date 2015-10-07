---
layout: default
title: Image Upload
---

These settings affect the image upload facility of the editor. The location, path and credentials of the image uploader can be set here.

## images_upload_url

This option lets you specify a URL to where you want images to be uploaded when you call editor.uploadImages.

Example of usage of the images_upload_url option:

```js
tinymce.init({
        ...
        images_upload_url: "postAcceptor.php"
});
```

The [postAcceptor.php](http://www.tinymce.com/wiki.php/PHP_Upload_Handler) file should return an URL for the image that got uploaded there is a [reference implementation](http://www.tinymce.com/wiki.php/PHP_Upload_Handler) that you can look at.

## images_upload_base_path

This option lets you specify a basepath to prepend to urls returned from the configured images_upload_url page.

Example of usage of the images_upload_base_path option:

```js
tinymce.init({
        ...
        images_upload_base_path: "/some/basepath"
});
```

## images_upload_credentials

This option lets you specify if calls to the configured images_upload_url should pass along credentials like cookies etc cross domain. This is disabled by default.

Example of usage of the images_upload_credentials option:

```js
tinymce.init({
        ...
        images_upload_credentials: true
});
```

## images_upload_handler

This option allows you to specify a function that will be used to replace TinyMCE's default javascript upload handler function with custom logic.

The upload handler function takes three arguments: blobInfo, a success callback and a failure callback. When this option is not set, TinyMCE utilizes an XMLHttpRequest to upload images one at a time to the server, and calls the success callback with the location of the remote image.

Please note that when using this option, no other image uploader options are necessary. Additionally, if you would like TinyMCE to replace the `<image>` tag's src attribute with the remote location, please use the success callback defined in the image_upload_handler function with the returned JSON object's location property.

An example of this setup is below:

```js
tinymce.init({
    ...
    images_upload_handler: function (blobInfo, success, failure) {
        var xhr, formData;

        xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.open('POST', "postAcceptor.php");

        xhr.onload = function() {
            var json;

            if (xhr.status != 200) {
                failure("HTTP Error: " + xhr.status);
                return;
            }

            json = JSON.parse(xhr.responseText);

            if (!json || typeof json.location != "string") {
                failure("Invalid JSON: " + xhr.responseText);
                return;
            }

            success(json.location);
        };

        formData = new FormData();
        formData.append('file', blobInfo.blob(), fileName(blobInfo));

        xhr.send(formData);
    },
    ...
});
```
