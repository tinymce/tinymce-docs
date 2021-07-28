## `theme_url`

If you are using {{site.productname}} themes, this option enables you to specify the location of the theme file. This is useful if you are loading {{site.productname}} from one URL, for example a CDN, while loading a theme on, say, a local server.

**Type:** `String`

### Example: Using `theme_url`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  theme_url: '/mytheme/mytheme.js'
});
```
