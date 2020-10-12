## `allow_html_in_named_anchor`

This option allows you to specify whether the editor should parse and keep `html` within named `anchor` tags.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

### Example: Using `allow_html_in_named_anchor`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  allow_html_in_named_anchor: true
});
```
