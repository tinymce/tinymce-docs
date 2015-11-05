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
