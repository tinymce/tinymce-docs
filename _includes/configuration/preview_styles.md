## `preview_styles`

This option lets you configure the preview of styles in format/style listboxes. Enter a string with the styles that you wish to preview separated by a blankspace, or disable the preview of of all styles by setting it to `false`.

If unset the editor will preview the styles listed in the default value listed below.

**Type:** `Boolean || String`

**Default Value:** `font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow`

**Possible Values:** `String`, `false`

### Example: Using `preview_styles`

No preview of styles:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  mode: 'textareas',
  preview_styles: false
});
```

Preview of only font-size and color:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  mode: 'textareas',
  preview_styles: 'font-size color'
});
```
