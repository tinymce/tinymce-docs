## invalid_elements

The **invalid_elements** option instructs the editor to remove specific elements when TinyMCE executes a cleanup. This option should contain a comma-separated list of element names to exclude from the content.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  invalid_elements : 'strong,em'
});
```

> Caution: This option doesn't accept attributes in the list, only elements.

Also see [valid_elements](#valid_elements) and [extended_valid_elements](#extended_valid_elements) for more configuration options.
