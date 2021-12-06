### `toc_header`

Table of contents has a header and by default it will be marked up with `H2` tag. With the `toc_header` option you can change it to some other tag.

Type
: `String`

Default Value
: `H2`

#### Example: Using `toc_header`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'toc',
  toolbar: 'toc',
  toc_header: 'div' // case doesn't matter
});
```
