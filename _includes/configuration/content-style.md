## content_style

This option allows you to set custom CSS styles as a string that will be injected into the editor's iframe.

These styles are useful for previewing content as it will appear outside the editor. Since these styles are not saved with the content, it is important that they match the styles in the location that the content will appear.

**Type:** `Object`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  content_style: "div {margin: 10px; border: 5px solid red; padding: 3px}"
});
```
