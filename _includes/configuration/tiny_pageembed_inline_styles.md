### `tiny_pageembed_inline_styles`

The `tiny_pageembed_inline_styles` option will inline all styles, while also keeping CSS classes, when rendering the embed content. This is useful when the additional CSS classes can't be added to your site. Defaults to `false`.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

#### Example: `tiny_pageembed_inline_styles`

To inline page embed styles:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'pageembed',
  tiny_pageembed_inline_styles: true
});
```
