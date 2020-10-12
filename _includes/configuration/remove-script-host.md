## `remove_script_host`

This option is used if the [`relative_urls`](#relative_urls) option is set to `false` and only applies to links with the same domain as the [`document_base_url`](#document_base_url).

If this option is set to `true`, the protocol and host of the `document_base_url` is _excluded_ for relative links.

If this option is set to `false`, the protocol and host of the `document_base_url` is _added_ for relative links.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

### Examples: Using `remove_script_host`

When `remove_script_host` is set to `true`, such as:

```js
tinymce.init({
  selector: 'textarea',
  document_base_url: 'http://www.example.com/path1/',
  relative_urls: false,
  remove_script_host: true
});
```

Adding a relative URL such as `test.html`, the editor will convert the URL to: `/path1/test.html`.

When `remove_script_host` is set to `false`, such as:

```js
tinymce.init({
  selector: 'textarea',
  document_base_url: 'http://www.example.com/path1/',
  relative_urls: false,
  remove_script_host: false
});
```

Adding a relative URL such as `test.html`, the editor will convert the URL to: `http://www.example.com/path1/test.html`.
