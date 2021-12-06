## `resize`

This option gives you the ability to disable the resize handle or set it to resize both horizontal and vertically. The option can be true, false or the string `'both'`. `False` disables the resize, `true` enables vertical resizing only, `'both'` makes it possible to resize in both directions horizontal and vertical.

When resizing is enabled, the editor can be resized by either:

* Clicking and dragging the resize handle in the bottom right-hand corner of the editor.
* Focusing the resize handle, and using the arrow keys. The **Up Arrow** and **Left Arrow** keys will make the editor smaller, and the **Down Arrow** and **Right Arrow** keys will make the editor larger.

### Disabling the resize

Type
: `Boolean`

Default Value
: `true`

Possible Values
: `true`, `false`, `'both'`

{{site.differs_for_mobile}}

#### Example: Disabling editor resizing

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  resize: false
});
```

### Enabling both vertical and horizontal resize

Type
: `Boolean`

Default Value
: `true`

Possible Values
: `true`, `false`, `'both'`

#### Example: Enabling vertical and horizontal editor resizing

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  resize: 'both'
});
```
