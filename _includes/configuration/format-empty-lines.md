## `format_empty_lines`

{{ site.requires_5_6v }}

This option allows `inline` formats to be applied to empty lines for multi-line selections.

**Type:** `Boolean`

**Default Value:** `false`

### Example: Using `format_empty_lines`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  format_empty_lines: true
});
```
