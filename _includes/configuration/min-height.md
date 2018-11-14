## min_height

Without the `autoresize` plugin, this option allows you to set the minimum height that a user can stretch the entire TinyMCE interface (by grabbing the dragable area in the bottom right of the editor interface).

With the `autoresize` plugin, this option sets the minimum height the editor can automatically shrink to.

**Type:** `Number`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  min_height: 100
});
```

> Pro tip: if you set the option [`resize`](#resize) to `false` the resize handle will be disabled and a user will not be able to resize the editor (by manual dragging). Note that `resize` defaults to `false` when the `autoresize` plugin is enabled.

