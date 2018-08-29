---
layout: default
title: Handle Async Image Uploads
title_nav: Handle Async Image Uploads
description_short: How to manage asynchronous image uploads.
description: How to manage asynchronous image uploads with jQuery, CORS.
keywords: asynchronous async paste_data_images image cors
---

Please note, this image upload feature is available for TinyMCE version 4.2 and above. Alternatively, the Tiny PowerPaste plugin is capable of this functionality in versions of TinyMCE 4.0 and above.

The image uploader is designed to complement the new image editing functionality of TinyMCE 4.2. Images that are edited within TinyMCE can be uploaded using this function. Local images that are added through other means - for example drag and drop when using the [paste_data_images]({{ site.baseurl }}/plugins/paste/#paste_data_images) configuration property or using Tiny's PowerPaste Plugin - can also be uploaded using this functionality.

Once uploaded, TinyMCE will automatically update the `<image>` src attribute with the new path to the remote image.

Local images can be uploaded to TinyMCE through the use of the new `editor.uploadImages()` function.  This functionality is handled asynchronously, meaning that it is possible for users to save their content before all images have completed uploading.  If this occurs, no server path to the remote image will be available, and the images will be stored as Base64.

To avoid this situation, it is recommended that the `editor.uploadImages()` function be executed before submitting the editor contents to the server. Once all images have been uploaded, a success callback can be utilized to execute code.  This success callback can be used to save the editor's content to the server through a `POST`, again helping to prevent the above situation.

Examples of this function are below:

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

To upload local images to the remote server, you will need a server-side upload handler script that accepts the images on the server, stores them appropriately, and returns a JSON object containing the location that they were uploaded to.

An example PHP upload handler implementation is available [here](../php-upload-handler/).

Images will be sent to the Image Uploader via HTTP POST with each post containing a single image. The image handler at the URL referenced in the `images_upload_url` has to do whatever needs to be done to "store" the image in your application. Some examples would include:

 * Store the item in a folder on your web server
 * Store the item on a CDN server
 * Store the item in a database
 * Store the item in an asset management system

When the image is uploaded it will have a standardized name in the post (e.g. `blobid0`, `blobid1`, `imagetools0`, `imagetools1`).

*You will need to ensure that your upload handler script takes each uploaded file and generates a unique name before storing the image*.

For example, you could append the current time (in milliseconds) to the end of the file name which would lead to file names like `blobid0-1458428901092.png` or `blobid0-1460405299-0114.png`.  Take care to make sure that the file name is unique as you don't want to overwrite a previously uploaded image accidentally!

This server-side upload handler must return a JSON object that contains a "location" property. This property should represent the remote location or filename of the newly uploaded image.

```
{ location : '/uploaded/image/path/image.png' }
```

#### Image Uploader options

Multiple configuration options will affect the operation of this feature.  These options are listed below.

**Please note, for image uploads to function correctly, either the `images_upload_url` or `images_upload_handler` options must be set.**

| Image Upload Handling Option     | Description          |
|----------------------------------|----------------------|
| [images_upload_url]({{ site.baseurl }}/configure/file-image-upload/#images_upload_url)                 | This option lets you specify a URL to where you want images to be uploaded when you call editor.uploadImages. |
| [images_upload_base_path]({{ site.baseurl }}/configure/file-image-upload/#images_upload_base_path)     | This option lets you specify a basepath to prepend to urls returned from the configured images_upload_url page. |
| [images_upload_credentials]({{ site.baseurl }}/configure/file-image-upload/#images_upload_credentials) | This option lets you specify if calls to the configured images_upload_url should pass along credentials like cookies etc cross domain. This is disabled by default. |
| [images_upload_handler]({{ site.baseurl }}/configure/file-image-upload/#images_upload_handler)         | This option lets you replace TinyMCE's default javascript upload handler function with custom logic. The upload handler function takes three arguments, blobInfo, a success callback and a failure callback. When this option is not set, TinyMCE utilizes an XMLHttpRequest to upload images one at a time to the server, and calls the success callback with the location of the remote image. |

An example of a typical setup is below:

```js
tinymce.init({
	selector: 'textarea',  // change this value according to your HTML
	images_upload_url: 'postAcceptor.php',
	images_upload_base_path: '/some/basepath',
	images_upload_credentials: true
});
```

#### Rolling your image handler

If the default behavior of TinyMCE's image upload logic is not right for you, you may set your behavior by using the images_upload_handler configuration property.

Please note that while using this option, no other image uploader options are necessary.  Additionally, if you would like TinyMCE to replace the <image> tag's src attribute with the remote location, please use the success callback defined in the image_upload_handler function with the returned JSON object's location property.

An example of this setup is below:

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

You may choose for your web application to upload image data to a separate domain. If so, you will need to configure [Cross-origin resource sharing (CORS)](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) for your application to comply with JavaScript "same origin" restrictions.

CORS has stringent rules about what constitutes a cross-origin request. The browser can require CORS headers when uploading to the same server the editor is hosted on, for example:

* A different port on the same domain name
* Using the host IP address instead of the domain name
* Swapping between HTTP and HTTPS for the page and the upload script

The upload script URL origin must exactly match the origin of the URL in the address bar, or the browser will require CORS headers to access it. A good way to guarantee this is to use a relative URL to specify the script address, instead of an absolute one.

All supported browsers will print a message to the JavaScript console if there is a CORS error.

The [PHP Upload Handler Script](../php-upload-handler/) provided here configures CORS in the `$accepted_origins` variable. You may choose to configure CORS at the [web application layer](http://www.w3.org/wiki/CORS_Enabled#At_the_Web_Application_level...) or the [HTTP server layer](http://www.w3.org/wiki/CORS_Enabled#At_the_HTTP_Server_level...).

#### Further reading on CORS

* [W3C Wiki - CORS Enabled](http://www.w3.org/wiki/CORS_Enabled)
* [MDN - HTTP access control (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)
* [W3C - Cross-Origin Resource Sharing Specification](http://www.w3.org/TR/cors/)
