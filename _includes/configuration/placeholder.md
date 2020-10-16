## `placeholder`

{{ site.requires_5_2v }}

This option adds placeholder content that will be shown when the editor is empty.

> **Note:** If the editor is initialized on a `textarea` element, the placeholder attribute can be used instead.

**Type:** `String`

### Example: Using `placeholder`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  placeholder: 'Type here...'
});
```
