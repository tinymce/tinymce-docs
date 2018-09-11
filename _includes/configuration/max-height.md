## max_height

This option allows you to set the maximum height that a user can stretch the entire TinyMCE interface (by grabbing the dragable area in the bottom right of the editor interface) when using the modern theme.

> Note that this behavior is different than the [`autoresize`]({{ site.baseurl }}/plugins/autoresize) plugin, which controls the resizing of the editable area only, not the entire editor.

**Type:** `Number`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  max_height: 500
});
```

> Pro tip: if you set the option [`resize`](#resize) to `false` the resize handle will be disabled and a user will not be able to resize the editor (by manual dragging).
