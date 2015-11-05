## relative_urls

If this option is set to true, all URLs returned from the MCFileManager will be relative from the specified [document_base_url](#document_base_url). If it's set to false all URLs will be converted to absolute URLs. This option is set to true by default.

Example of usage of the relative_urls option:

```js
tinymce.init({
        ...
        relative_urls: false
});
```
