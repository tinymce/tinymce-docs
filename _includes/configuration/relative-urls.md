## relative_urls

If this option is set to true, all URLs returned from the MCFileManager will be relative from the specified [document_base_url](#document_base_url). If it's set to false all URLs will be converted to absolute URLs.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

##### Example: relative_urls

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  relative_urls: false
});
```
