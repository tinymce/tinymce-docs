## `contextmenu_never_use_native`

The `contextmenu_never_use_native` option allows you to prevent the browser context menu from appearing within the editor.

> **Caution**: Using this option may result in unexpected behavior when right-clicking in text areas. We advise you to consider all your options carefully before using this feature.

**Type**: `Boolean`

**Default Value**: `false`

### Example: Using `contextmenu_never_use_native`

```js
tinymce.init({
  selector: 'textarea',
  contextmenu_never_use_native: true
});
```