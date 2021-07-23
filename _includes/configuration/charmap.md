### `charmap`

With this option it is possible to fully override the default character map. This can be an array or a function that returns an array in the above mentioned format.

**Type:** `Array`, `Function`

#### Example: Using `charmap`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'charmap',
  toolbar: 'charmap',
  menubar: 'insert',
  charmap: [
    [0x2615, 'morning coffee']
  ]
});
```
