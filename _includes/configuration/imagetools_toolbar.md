### `imagetools_toolbar`

The exact selection of buttons that will appear on the contextual toolbar can be controlled via `imagetools_toolbar` option.

**Possible Values:**

* `rotateleft`
* `rotateright`
* `flipv`
* `fliph`
* `editimage`
* `imageoptions`

**Type:** `String`

**Default Value:** `'rotateleft rotateright | flipv fliph | editimage imageoptions'`

#### Example: Using `imagetools_toolbar`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: 'image',
  plugins: 'image imagetools',
  imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions'
});
```

