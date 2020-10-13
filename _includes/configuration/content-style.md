## `content_style`

This option allows you to set custom CSS styles as a string that is injected into the editor's iframe.

These styles are useful for previewing content as it appears outside the editor. Since these styles are not saved with the content, it is important that they match the styles in the location that the content appears.

**Type:** `String`

### Example: Applying one CSS style using `content_style`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  content_style: 'div { margin: 10px; border: 5px solid red; padding: 3px; }'
});
```

To add two or more styles with this option, provide the styles as a single string.

### Example: Applying two or more CSS styles using `content_style`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  content_style: 'div { margin: 10px; border: 5px solid red; padding: 3px; } ' +
    '.blue { color: blue; } .red { color: red; }'
});
```
