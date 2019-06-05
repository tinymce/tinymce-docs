## icons_url

If you are using icon packs, this option enables you to specify the location of your icon pack. This is useful if you are loading TinyMCE from one URL, for example a CDN, while loading an icon pack on a local server.

**Type:**  `String`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  icons_url: '/icons/material/icons.js', // load icon pack
  icons: 'material'      // use icon pack
});
```
