## `block_unsupported_drop`

{{site.requires_5_4v}}

When the `block_unsupported_drop` option is set to `true`, the editor blocks unsupported images and files from being dropped into the editor. If the `block_unsupported_drop` option is set to `false`, dropping an unsupported file into the editor will cause the browser to navigate away from the page containing the editor.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

### Example: Using `block_unsupported_drop`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  block_unsupported_drop: false
});
```
