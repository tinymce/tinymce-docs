## `element_format`

This option controls whether elements are output in the HTML or XHTML mode. `xhtml` is the default state for this option. This means that for example `<br />` will be `<br>` if you set this option to `html`.

**Type:** `String`

**Default Value:** `xhtml`

**Possible Values:** `xhtml`, `html`

### Example: Using `element_format`

```js
// Output elements in HTML style
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  element_format : 'html'
});
```
