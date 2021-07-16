## `iframe_aria_text`

{{ site.requires_5_9v }}

This option allows you to set the editor iframe title attribute.

**Type:** `String`

**Default Value:** `'Rich Text Area. Press ALT-0 for help.'`

### Example: Using `iframe_aria_text`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  iframe_aria_text: 'Text Editor'
});
```
