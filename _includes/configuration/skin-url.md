## skin_url

This option enables you to specify location of the current skin. Enables you to load TinyMCE from one URL, for example a CDN, then load a local skin on the current server.

Example of usage

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  skin_url: '/css/mytinymceskin'
});
```
