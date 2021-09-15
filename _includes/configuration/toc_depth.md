### `toc_depth`

By default headers in the content will be inspected only three levels deep, so - `H1` through `H3`. But it is possible to change this behavior by setting `toc_depth` to any number in 1-9 range, therefore matching all the headers beginning with `H1` and all the way down to `H9`.

**Type:** `Number`

**Default Value:** `3`

#### Example: Using `toc_depth`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'toc',
  toolbar: 'toc',
  toc_depth: 3
});
```

