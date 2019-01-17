## max_height

The **max_height** option has two kinds of behaviors depending on the state of the [`autoresize`]({{site.baseurl}}/plugins/autoresize/) plugin:

* `autoresize` OFF (Default) : Without the `autoresize` plugin, this option allows you to set the maximum height that a user can stretch the entire TinyMCE interface (by grabbing the dragable area in the bottom right of the editor interface).

* `autoresize` ON : With the `autoresize` plugin, this option sets the maximum height the editor can automatically expand to.

**Type:** `Number`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  max_height: 500
});
```

> Pro tip: If you set the option [`resize`](#resize) to `false` the resize handle will be disabled and a user will not be able to resize the editor (by manual dragging). Note that `resize` defaults to `false` when the `autoresize` plugin is enabled.

