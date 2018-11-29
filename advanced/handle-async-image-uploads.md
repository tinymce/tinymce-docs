---
layout: default
title: Handle asynchronous image uploads
title_nav: Asynchronous image uploading
description_short: How to manage asynchronous image uploads.
description: How to manage asynchronous image uploads with jQuery, CORS.
keywords: asynchronous async paste_data_images image cors
---

TinyMCE uploads edited images with the image uploader. This complements TinyMCE's image editing functionality. Local images added through other means can also be uploaded using this functionality. For example, _drag and drop_ using the [paste_data_images]({{ site.baseurl }}/plugins/paste/#paste_data_images) configuration property or using the **PowerPaste** plugin.


TinyMCE automatically updates the `<image>` src attribute with the new path to the remote image.

Local images are uploaded to TinyMCE using the `editor.uploadImages()` function.  This functionality makes it possible for users to save their content *before* all images have completed uploading. No server path to the remote image is available if this occurs and the images will be stored as `Base64`.

> Pro Tip: Execute the `editor.uploadImages()` function _before_ submitting the editor contents to the server to avoid storing the image as Base64. Use a success callback to execute code once all the images are uploaded. This success callback can save the editor's content to the server thorugh a `POST`.

Review the examples below:

#### Using uploadImages with jQuery

```js
tinymce.activeEditor.uploadImages(function(success) {
  $.post('ajax/post.php', tinymce.activeEditor.getContent()).done(function() {
	console.log("Uploaded images and posted content as an ajax request.");
  });
});
```

#### Using uploadImages and then posting a form

```js
tinymce.activeEditor.uploadImages(function(success) {
  document.forms[0].submit();
});
```

#### Image Uploader requirements

A server-side upload handler script uploads local images to a remote server. The script must:
* accepts the images on the server
* stores images appropriately
* returns a JSON object containing the image's upload location

[here](../php-upload-handler/) is an example PHP upload handler script implementation.

Images are sent to the Image Uploader via HTTP POST with each post containing a single image. The image handler at the URL referenced in the `images_upload_url` must "store" the image in the application. Some examples include:

 * Store the item in a folder on the web server
 * Store the item on a CDN server
 * Store the item in a database
 * Store the item in an asset management system

Use a standardized name in the post (e.g. `blobid0`, `blobid1`, `imagetools0`, `imagetools1`) when the image is uploaded. 

> Note: Ensure that your upload handler script enerates a unique name for each uploaded file before storing the image. A common method is to append the current time in milliseconds to the end of the file name. This creates file names such as `blobid0-1458428901092.png` or `blobid0-1460405299-0114.png`.  

> Warning: The files will be overwritten if the file names are *not* unique.

This server-side upload handler script must return a JSON object containing a "location" property. This property represents the remote location and/or filename of the newly uploaded image.

```
{ location : '/uploaded/image/path/image.png' }
```

#### Image Uploader options

The operation of this feature is affected by the following configuration options.

> Note: The `images_upload_url` or `images_upload_handler` options must be set for image uploads to function correctly.

| Image Upload Handling Option     | Description          |
|----------------------------------|----------------------|
| [images_upload_url]({{ site.baseurl }}/configure/file-image-upload/#images_upload_url)                 | Specifies a URL where images are uploaded when `editor.uploadImages` is called. |
| [images_upload_base_path]({{ site.baseurl }}/configure/file-image-upload/#images_upload_base_path)     | Specifies a basepath to prepend to urls returned from the `configured images_upload_url` page. |
| [images_upload_credentials]({{ site.baseurl }}/configure/file-image-upload/#images_upload_credentials) | Specifies if calls to the configured `images_upload_url` passes along credentials cross domain, like cookies. This is disabled by default. |
| [images_upload_handler]({{ site.baseurl }}/configure/file-image-upload/#images_upload_handler)         | This option replaces TinyMCE's default javascript upload handler function with custom logic. The upload handler function takes three arguments: blobInfo, success callback, and failure callback. When this option is not set, TinyMCE utilizes an `XMLHttpRequest` to upload images one at a time to the server, and calls the success callback with the location of the remote image. |

The following example is a typical setup:

```js
tinymce.init({
	selector: 'textarea',  // change this value according to your HTML
	images_upload_url: 'postAcceptor.php',
	images_upload_base_path: '/some/basepath',
	images_upload_credentials: true
});
```

#### Rolling your image handler

Use the `images_upload_handler` configuration property to change TinyMCE's default image upload logic.

> Note: No other image uploader options are necessary while using this option

Use the success callback defined in the image_upload_handler function with the returned JSON object's location property to replace the `<image>` tag's src attribute with the remote location.

The following example is a typical setup:

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

	formData = new FormData();
	formData.append('file', blobInfo.blob(), fileName(blobInfo));

	xhr.send(formData);
  }
});
```

#### CORS considerations

Configure [Cross-origin resource sharing (CORS)](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) to upload image data to a separate domain and to comply with JavaScript "same origin" restrictions.

CORS maintains stringent rules about what constitutes a cross-origin request. The browser can require CORS headers when uploading to the same server the editor is hosted on. For example:

* A different port on the same domain name
* Using the host IP address instead of the domain name
* Swapping between HTTP and HTTPS for the page and the upload script

The upload script URL origin must exactly match the origin of the URL in the address bar, or the browser will require CORS headers to access it. Use a relative URL to specify the script address instead of an absolute one to guarantee this.

All supported browsers print messages to the JavaScript console if there is a CORS error.

The [PHP Upload Handler Script](../php-upload-handler/) provided here configures CORS in the `$accepted_origins` variable. Configure CORS at the [web application layer](http://www.w3.org/wiki/CORS_Enabled#At_the_Web_Application_level...) or the [HTTP server layer](http://www.w3.org/wiki/CORS_Enabled#At_the_HTTP_Server_level...).


#### Further reading on CORS

* [W3C Wiki - CORS Enabled](http://www.w3.org/wiki/CORS_Enabled)
* [MDN - HTTP access control (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)
* [W3C - Cross-Origin Resource Sharing Specification](http://www.w3.org/TR/cors/)
