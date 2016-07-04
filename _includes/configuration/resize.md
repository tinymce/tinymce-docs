## resize

This option gives you the ability to disable the resize handle or set it to resize both horizontal and vertically. The option can be true, false or the string `'both'`. `False` disables the resize, `true` enables vertical resizing only, `'both'` makes it possible to resize in both directions horizontal and vertical.

### Disabling the resize

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`, `'both'`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  resize: false
});
```

### Enabling both vertical and horizontal resize

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`, `'both'`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  resize: 'both'
});
```
