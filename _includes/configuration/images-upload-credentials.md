## images_upload_credentials


The **images_upload_credentials** option lets you specify if calls to the configured [`images_upload_url`](#images_upload_url) should pass along credentials like cookies etc. cross domain.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  images_upload_credentials: true
});
```
