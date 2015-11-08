## images_upload_base_path

This option lets you specify a `basepath` to prepend to urls returned from the configured [`images_upload_url`](images-uploads-url.md) page.

Example of usage of the images_upload_base_path option:

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  images_upload_base_path: "/some/basepath"
});
```
