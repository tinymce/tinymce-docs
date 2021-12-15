## `min_width`

This option allows you to set the minimum width that a user can stretch the entire {{site.productname}} interface (by grabbing the dragable area in the bottom right of the editor interface) when using the modern theme.

> **Note**: This behavior is different from the [`autoresize`]({{site.baseurl}}/plugins/opensource/autoresize/) plugin, which controls the resizing of the editable area only, not the entire editor.

Type
: `Number`

### Example: Using `min_width`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  min_width: 400
});
```

> **Note**: By default the [`resize`](#resize) handle does not allow horizontal dragging and giving this key a value will not result in an observable behavior.
