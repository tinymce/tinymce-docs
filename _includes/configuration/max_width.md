## `max_width`

This option allows you to set the maximum width that a user can stretch the entire {{site.productname}} interface (by grabbing the dragable area in the bottom right of the editor interface) when using the modern theme.

> **Note**: This behavior is different than the [`autoresize`]({{site.baseurl}}/plugins/opensource/autoresize/) plugin, which controls the resizing of the editable area only, not the entire editor.

**Type:** `Number`

### Example: Using `max_width`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  max_width: 500
});
```

> **Note**: by default the [`resize`](#resize) handle does not allow horizontal dragging and giving this key a value will not result in an observable behavior.
