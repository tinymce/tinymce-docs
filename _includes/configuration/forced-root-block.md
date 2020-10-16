## `forced_root_block`

This option enables you to make sure that any non block elements or text nodes are wrapped in block elements. For example `<strong>something</strong>` will result in output like: `<p><strong>something</strong></p>`. This option is enabled by default as of version 3.0.

If you set this option to `false` it will never produce `p` tags on enter, or, automatically it will instead produce `br` elements and `Shift+Enter` will produce a `p`.

> **Warning**: Not using `p` elements as the root block will impair the functionality of the editor.

**Type:** `String`

### Example: Using `forced_root_block`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  forced_root_block : 'p'
});
```
