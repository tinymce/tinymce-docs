## `images_upload_base_path`

This option lets you specify a `basepath` to prepend to URLs returned from the configured [`images_upload_url`](#images_upload_url) page.

**Type:** `String`

### Example: Using `images_upload_base_path`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  images_upload_url: 'postAcceptor.php',
  images_upload_base_path: '/some/basepath'
});
```
