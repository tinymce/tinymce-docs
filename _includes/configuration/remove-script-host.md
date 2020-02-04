## remove_script_host

This option is used if the [`relative_urls`](#relative_urls) option is set to `false` and only applies to links with the same domain as the [`document_base_url`](#document_base_url).

If this option is set to `false`, the `document_base_url` retained for relative links.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  remove_script_host: false
});
```

> If disabled, relative URLs will be returned in this format: `'http://www.example.com/somedir/somefile.htm'` instead of the default format: `'/somedir/somefile.htm'`.
