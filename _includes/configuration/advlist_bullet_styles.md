### `advlist_bullet_styles`

This option allows you to include specific unordered list item markers in the default `bullist` toolbar control.

**Type:** `String`

**Default Value:** `'default,circle,disc,square'`

**Possible Values:**

  * `default`: your browser's default style
  * `circle`: a hollow circle
  * `disc`: a filled circle
  * `square`: a filled square

#### Example: Using `advlist_bullet_styles`

```js
tinymce.init({
    selector: 'textarea',  // change this value according to your html
    plugins: 'advlist',
    advlist_bullet_styles: 'square'  // only include square bullets in list
});
```