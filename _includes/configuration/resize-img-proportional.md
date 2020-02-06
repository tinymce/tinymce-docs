## resize_img_proportional

When a user resizes an image in the editor, this option controls whether image is resized proportionally or freely. If set to:

- `true` --- When users resize an image, the image will be resized proportionally (both dimensions of the image are resized by the same percentage of length).
- `false` --- When users resize an image, the image can be resized freely.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

##### Example: resize_img_proportional

To disable proportional image resizing:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  resize_img_proportional: false
});
```
