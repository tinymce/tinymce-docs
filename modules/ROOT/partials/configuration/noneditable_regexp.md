## `noneditable_regexp`

This option is used to specify a regular expression or array of regular expressions that {{site.productname}} will use to determine which areas of content are non-editable. The regular expressions needs to be global so that all instances within the document are matched. The text content of the matches will be wrapped in spans, hiding the structure and styling while editing.

> **Note**: If elements are matched by the regular expression, the elements will be replaced with spans. Use [`noneditable_class`](#noneditable_class) for elements.

Type
: `String`

#### Example: Using `noneditable_regexp`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  noneditable_regexp: /\d{3}-\d{3}-\d{3}/g // matches 123-456-789
});
```

