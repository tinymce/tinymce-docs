## `iframe_aria_text`

{{ site.requires_5_9v }}

This option allows setting the editor iframe title attribute. It is intended for use with {{site.productname}}'s [classic mode]({{site.baseurl}}/general-configuration-guide/use-tinymce-classic/) only, as the editable area is sandboxed within an iframe.

**Type:** `String`

**Default Value:** `'Rich Text Area. Press ALT-0 for help.'`

### Example: Using `iframe_aria_text`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  iframe_aria_text: 'Text Editor'
});
```
