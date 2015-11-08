## invalid_elements

This option should contain a comma separated list of element names to exclude from the content.

Elements in this list will be removed when TinyMCE executes a cleanup.

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  invalid_elements : "strong,em"
});
```

Caution: This option doesn't accept attributes in the list, only elements

Also see [valid_elements](#valid_elements) and [extended_valid_elements](#extended_valid_elements) for more configuration options.
