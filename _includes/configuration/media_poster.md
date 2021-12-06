### `media_poster`

To remove the `Poster` input field in the media dialog, set this option to `false`.

Type
: `Boolean`

Default Value
: `true`

Possible Values
: `true`, `false`

#### Example: Using `media_poster`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'media',
  menubar: 'insert',
  toolbar: 'media',
  media_poster: false
});
```
