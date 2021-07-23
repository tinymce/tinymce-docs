### `link_context_toolbar`

By default it is not possible to open links directly from the editor. Setting `link_context_toolbar` to `true` will enable a context toolbar that will appear when the user's cursor is within a link. This context toolbar contains fields to modify, remove and open the selected link. External links will be opened in a separate tab, while relative links scroll to a target within the editor (if the target is found).

> **Note**: This context toolbar is the same as the context toolbar mentioned in the [`link_quicklink`](#link_quicklink) documentation below.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

#### Example: Using `link_context_toolbar`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'link',
  menubar: 'insert',
  toolbar: 'link',
  link_context_toolbar: true
});
```

