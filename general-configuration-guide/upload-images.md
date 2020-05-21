---
layout: default
title: Uploading images and files
title_nav: Upload images &amp; files
keywords: uploader uploadImages image handler
---

The image uploader is designed to complement the image editing functionality of {{site.productname}}. Images that are edited within {{site.productname}} can be uploaded using this function. Local images that are added through other means are also uploaded using this function, such as images added by drag and drop when using the [paste_data_images]({{ site.baseurl }}/plugins/paste/#paste_data_images) configuration property, or using the {{site.companyname}} [PowerPaste plugin]({{ site.baseurl }}/plugins/powerpaste/).

> **Note**: Execute the `editor.uploadImages()` function _before_ submitting the editor contents to the server to avoid storing the images as Base64. Use a success callback to execute code once all the images are uploaded. This success callback can save the editor's content to the server through a `POST`.

Local images can be uploaded to {{site.productname}} through the use of the `editor.uploadImages()` function. This functionality is handled asynchronously, meaning that it is possible for users to save their content before all images have completed uploading.  If this occurs and no server path to the remote image is available, the images are saved as Base 64.

It is recommended that the `editor.uploadImages()` function be executed before submitting the editor contents to the server, to avoid saving content as Base 64. Once all the images are uploaded, a success callback can be utilized to execute the code.  This success callback can be used to save the editor's content to the server through a `POST`.

#### Using uploadImages and then posting a form

```js
tinymce.activeEditor.uploadImages(function(success) {
   document.forms[0].submit();
});
```

#### Using uploadImages with jQuery

```js
tinymce.activeEditor.uploadImages(function(success) {
  $.post('ajax/post.php', tinymce.activeEditor.getContent()).done(function() {
	console.log("Uploaded images and posted content as an ajax request.");
  });
});
```

## Image uploader requirements

A server-side upload handler script that accepts images on the server saves them appropriately and returns a JSON object containing the location of the saved images is necessary to upload local images to a remote server.

An example PHP upload handler implementation is available [here]({{ site.baseurl }}/advanced/php-upload-handler/).

Images are sent to the Image Uploader via HTTP POST with each post containing a single image. The image handler at the URL referenced in the `images_upload_url` takes care of the process required to "save" the image in your application. Some examples would include:

 * Save the item in a folder on your web server
 * Save the item on a CDN server
 * Save the item in a database
 * Save the item in an asset management system

When the image is uploaded it has a standardized name in the post (e.g. `blobid0`, `blobid1`, `imagetools0`, `imagetools1`).

> **Note**: Ensure that your upload handler script generates a unique name for each uploaded file before storing the image. A common method is to append the current time in milliseconds to the end of the file name. This creates file names such as `blobid0-1458428901092.png` or `blobid0-1460405299-0114.png`.

> **Warning**: The files will be overwritten if the file names are **not** unique.

This server-side upload handler must return a JSON object that contains a `location` property. This property should represent the remote location or filename of the newly uploaded image.

```
{ location : '/uploaded/image/path/image.png' }
```

## Image uploader options

There are multiple configuration options that affect the operation of this feature.  These options are listed below.

> Note: For image uploads to function correctly, either the `images_upload_url` or `images_upload_handler` options must be set.

| Image Upload Handling Option     | Description          |
|----------------------------------|----------------------|
| [images_upload_url]({{ site.baseurl }}/configure/file-image-upload/#images_upload_url) | This option lets you specify a URL to where you want images to be uploaded when you call `editor.uploadImages`. |
| [images_upload_base_path]({{ site.baseurl }}/configure/file-image-upload/#images_upload_base_path) | This option lets you specify a basepath to prepend to urls returned from the configured `images_upload_url` page. |
| [images_upload_credentials]({{ site.baseurl }}/configure/file-image-upload/#images_upload_credentials) | This option lets you specify if calls to the configured `images_upload_url` should pass along credentials like cookies etc cross domain. This is disabled by default. |
| [images_upload_handler]({{ site.baseurl }}/configure/file-image-upload/#images_upload_handler) | This option replaces the [`editor.uploadImages` API method]({{site.baseurl}}/api/tinymce/tinymce.editor/#uploadimages) with custom logic, such as a PHP script. The upload handler function takes three arguments: blobInfo, success callback, and failure callback. When this option is not set, TinyMCE utilizes an `XMLHttpRequest` to upload images one at a time to the server, and calls the success callback with the location of the remote image. |

##### Example of typical setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  images_upload_url: 'postAcceptor.php',
  images_upload_base_path: '/some/basepath',
  images_upload_credentials: true
});
```

## Rolling your image handler

Change the default behavior of {{site.productname}}'s image upload logic by changing the `images_upload_handler` configuration property.

> **Note**: Please note that while using this option, other image uploader options are not necessary. Additionally, to replace the <image> tag's src attribute with the remote location, please use the success callback defined in the `image_upload_handler` function with the returned JSON object's location property.

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

## CORS considerations

Configure [Cross-origin resource sharing (CORS)](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) to allow the web application to upload image data to a separate domain. This ensures compliance with JavaScript *same-origin* restrictions.

CORS has stringent rules about what constitutes a cross-origin request. The browser can require CORS headers when uploading to the same server the editor is hosted on, for example:

* A different port on the same domain name
* Using the host IP address instead of the domain name
* Swapping between HTTP and HTTPS for the page and the upload script

The upload script URL origin must exactly match the origin of the URL in the address bar, or CORS headers should be provided to the browser to access it. A good way to guarantee this is to use a relative URL to specify the script address, instead of an absolute one.

All supported browsers print a message to the JavaScript console if there is a CORS error.

The [PHP upload handler script]({{ site.baseurl }}/advanced/php-upload-handler/) provided here configures CORS in the `$accepted_origins` variable. Configure CORS at the [web application layer](http://www.w3.org/wiki/CORS_Enabled#At_the_Web_Application_level...) or the [HTTP server layer](http://www.w3.org/wiki/CORS_Enabled#At_the_HTTP_Server_level...).

### Further reading on CORS

* [W3C Wiki - CORS Enabled](http://www.w3.org/wiki/CORS_Enabled)
* [MDN - HTTP access control (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)
* [W3C - Cross-Origin Resource Sharing Specification](http://www.w3.org/TR/cors/)

{% assign_page next_page = "/general-configuration-guide/spell-checking/index.html" %}
{% include next-step.html next=next_page %}
