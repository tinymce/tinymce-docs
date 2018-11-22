## `contextmenu_never_use_native`

The `contextmenu_never_use_native` option allows you to disable the browser's native context menu from appearing within the editor.

> Caution: Using this option may result into unexpected behavior when right-clicking in text areas. We advise you to consider all your options carefully before using this feature.

Type: `Boolean`

Default Value: `false`

#### Example

```js
tinymce.init({
  selector: "textarea",
  contextmenu_never_use_native: true
});
```