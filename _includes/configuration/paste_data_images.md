### `paste_data_images`

This option specifies whether `data:url` images (inline images) should be removed or not from the pasted contents.

Setting `paste_data_images` to `"true"` will allow the pasted images, while setting it to `"false"` will disallow pasted images.

For example, Firefox enables you to paste images directly into any `contentEditable` field. This is normally not something people want, so this option is `"false"` by default. For example, a 600kb embedded image would block page loads and prevents it from being cached on multiple pages.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

#### Example: Using `paste_data_images`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  menubar: 'edit',
  toolbar: 'paste',
  paste_data_images: true
});
```

