## base_url

This option lets you specify the base URL for TinyMCE. This is useful if you want to load TinyMCE from one location and things like the theme and plugins from another.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  base_url: '/my/tinymce/dir'
});
```
