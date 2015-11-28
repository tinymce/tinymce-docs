## min_width

This option allows you to set the minimum width that a user can stretch the entire TinyMCE interface (by grabbing the dragable area in the bottom right of the editor interface) when using the modern theme.

> Note that this behavior is different than the [`autoresize`](/plugins/autoresize) plugin, which controls the resizing of the editable area only, not the entire editor.

**Type:** `Number`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  min_width: 400
});
```

> Pro tip: by default the [`resize`](#resize) handle does not allow horizontal dragging and giving this key a value will not result in an observable behavior.
