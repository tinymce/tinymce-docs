## `forced_root_block_attrs`

This option enables you specify attributes for the [forced_root_block](#forced_root_block).

**Type:** `Object`

### Example: Using `forced_root_block_attrs`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  forced_root_block_attrs: {
    'class': 'myclass',
    'data-something': 'my data'
  }
});
```
