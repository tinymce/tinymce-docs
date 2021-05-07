## images_upload_url

This option lets you specify a URL where you want images to be uploaded when you call `editor.uploadImages`.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  images_upload_url: 'postAcceptor.php'
});
```

The `postAcceptor.php` file should return an URL for the image that got uploaded there is a [reference implementation]({{ site.baseurl }}/advanced/php-upload-handler/) that you can look at.
