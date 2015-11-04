## images_upload_credentials

This option lets you specify if calls to the configured images_upload_url should pass along credentials like cookies etc cross domain. This is disabled by default.

Example of usage of the images_upload_credentials option:

```js
tinymce.init({
        ...
        images_upload_credentials: true
});
```
