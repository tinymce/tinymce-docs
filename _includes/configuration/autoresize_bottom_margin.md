### `autoresize_bottom_margin`

This option allows you to specify the size of the `padding` at the bottom of the editor's `body` set on initialization.

**Type:** `Number`

#### Example: Using `autoresize_bottom_margin`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'autoresize',
  autoresize_bottom_margin: 50
});
```
