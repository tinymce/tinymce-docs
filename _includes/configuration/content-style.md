## `content_style`

This option allows custom CSS styles to be set as a string. The styles are injected into the `head` of the page containing the editable area. In {{site.productname}}'s classic mode, it is injected into the `head` of {{site.productname}}'s iframe. In inline mode, it is injected into the `head` of the page {{site.productname}} is rendered in.

**Type:** `String`

> **Note:** `content_style` styles are not saved within {{site.productname}}'s content. If they are needed for display purposes, ensure the styles are also included in the page the content will be displayed on.

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
