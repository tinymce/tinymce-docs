## theme_url

This option enables you to specify location of the current theme. Enables you to load TinyMCE from one URL, for example a CDN, then load a local theme on the current server.

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  theme_url: '/mytheme/mytheme.js'
});
```
