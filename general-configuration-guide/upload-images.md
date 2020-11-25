---
layout: default
title: Handling image uploads
title_nav: Image uploads
description_short: How to manage asynchronous image uploads.
description: How to manage asynchronous image uploads.
keywords: uploader uploadImages image handler asynchronous async paste_data_images image cors
---

{{site.productname}} uploads edited images with the image uploader. This complements {{site.productname}}'s image editing functionality.

Local images that are added through other means are also uploaded using this function, such as images added by drag and drop when using the [`paste_data_images`]({{site.baseurl}}/plugins/opensource/paste/#paste_data_images) configuration property, or using the {{site.companyname}} [**PowerPaste** plugin]({{site.baseurl}}/plugins/premium/powerpaste/).

{{site.productname}} automatically updates the `<img>` src attribute with the new path to the remote image.

Local images are uploaded to {{site.productname}} using the `editor.uploadImages()` function.  This functionality makes it possible for users to save their content *before* all images have completed uploading. If this occurs and no server path to the remote image is available, the images are saved as `Base64`.

> **Note**: Execute the `editor.uploadImages()` function _before_ submitting the editor contents to the server to avoid storing the images as Base64. Use a success callback to execute code once all the images are uploaded. This success callback can save the editor's content to the server through a `POST`.

Review the examples below:

## Using uploadImages and then posting a form

```js
tinymce.activeEditor.uploadImages(function(success) {
  document.forms[0].submit();
});
```

## Using uploadImages with jQuery

```js
tinymce.activeEditor.uploadImages(function(success) {
  $.post('ajax/post.php', tinymce.activeEditor.getContent()).done(function() {
    console.log("Uploaded images and posted content as an ajax request.");
  });
});
```

{{site.svgsNotSupported}}

## Image Uploader requirements

A server-side upload handler script uploads local images to a remote server. The script must:

* Accept the images on the server
* Store images appropriately
* Return a JSON object containing the image's upload location

An example PHP upload handler implementation is available [here]({{ site.baseurl }}/advanced/php-upload-handler/).

Images are sent to the Image Uploader via HTTP POST with each post containing a single image. The image handler at the URL referenced in the `images_upload_url` must "store" the image in the application. Some examples include:

 * Store the item in a folder on the web server
 * Store the item on a CDN server
 * Store the item in a database
 * Store the item in an asset management system

Use a standardized name in the post (e.g. `blobid0`, `blobid1`, `imagetools0`, `imagetools1`) when the image is uploaded.

> **Note**: Ensure that your upload handler script generates a unique name for each uploaded file before storing the image. A common method is to append the current time in milliseconds to the end of the file name. This creates file names such as `blobid0-1458428901092.png` or `blobid0-1460405299-0114.png`.

> **Warning**: The files will be overwritten if the file names are **not** unique.

This server-side upload handler script must return a JSON object containing a "location" property. This property represents the remote location and filename of the newly uploaded image.

```js
{ location : '/uploaded/image/path/image.png' }
```

## Image upload options

Set the `images_upload_url` _or_ `images_upload_handler` option for image uploads to function. The other options shown here are optional.

Required:

* [`images_upload_url`](#images_upload_url)

_Or_

* [`images_upload_handler`](#images_upload_handler)

Optional:

* [`images_upload_base_path`](#images_upload_base_path)
* [`images_upload_credentials`](#images_upload_credentials)
* [`images_reuse_filename`](#images_reuse_filename)

{% include configuration/images-uploads-url.md %}

{% include configuration/images-upload-handler.md %}

{% include configuration/images-upload-base-path.md %}

{% include configuration/images-upload-credentials.md %}

{% include configuration/images-upload-reuse-filename.md %}

{% include configuration/images-dataimg-filter.md %}

## CORS considerations

Configure [Cross-origin resource sharing (CORS)](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) to upload image data to a separate domain and to comply with JavaScript "same origin" restrictions.

CORS maintains stringent rules about what constitutes a cross-origin request. The browser can require CORS headers when uploading to the same server the editor is hosted on. For example:

* A different port on the same domain name
* Using the host IP address instead of the domain name
* Swapping between HTTP and HTTPS for the page and the upload script

The upload script URL origin must exactly match the origin of the URL in the address bar, or the browser will require CORS headers to access it. Use a relative URL to specify the script address instead of an absolute one to guarantee this.

All supported browsers print messages to the JavaScript console if there is a CORS error.

The [PHP Upload Handler Script]({{ site.baseurl }}/advanced/php-upload-handler/) provided here configures CORS in the `$accepted_origins` variable. Configure CORS at the [web application layer](http://www.w3.org/wiki/CORS_Enabled#At_the_Web_Application_level...) or the [HTTP server layer](http://www.w3.org/wiki/CORS_Enabled#At_the_HTTP_Server_level...).

### Further reading on CORS

* [W3C Wiki - CORS Enabled](http://www.w3.org/wiki/CORS_Enabled)
* [MDN - HTTP access control (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)
* [W3C - Cross-Origin Resource Sharing Specification](https://www.w3.org/wiki/CORS)
