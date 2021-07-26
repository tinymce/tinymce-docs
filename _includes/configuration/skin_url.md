## `skin_url`

If you are using {{site.productname}} skins, this option enables you to specify the location of the skin directory. This is useful if you are loading {{site.productname}} from one URL, for example a CDN, while loading a skin on, say, a local server.

**Type:** `String`

### Example: Using `skin_url`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  skin_url: '/css/my{{site.prodnamecode}}skin'
});
```
