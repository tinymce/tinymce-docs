## `relative_urls`

For URLs with the same domain as the page containing the {{site.productname}} editor. If set to:

- `true` --- All URLs created in {{site.productname}} will be converted to a link relative to the [`document_base_url`](#document_base_url).
- `false` --- All URLs will be converted to absolute URLs.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

### Example: Using `relative_urls`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  relative_urls: false
});
```
