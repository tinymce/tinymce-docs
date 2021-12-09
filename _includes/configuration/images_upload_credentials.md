## `images_upload_credentials`

The **images_upload_credentials** option specifies whether calls to the configured [`images_upload_url`](#images_upload_url) should pass along credentials (such as cookies, authorization headers, or TLS client certificates) for cross-domain uploads. When set to `true`, credentials will be sent to the upload handler, similar to the [`withCredentials` property of `XMLHttpRequest`s](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials).

Type
: `Boolean`

Default Value
: `false`

Possible Values
: `true`, `false`

### Example: Using `images_upload_credentials`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  images_upload_url: 'postAcceptor.php',
  images_upload_credentials: true
});
```
