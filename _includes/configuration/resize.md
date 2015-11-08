## resize

This option gives you the ability to disable the resize handle or set it to resize both horizontal and vertically. The option can be true, false or the string "both". False disables the resize, true enables vertical resizing only, "both" makes it possible to resize in both directions horizontal and vertical.

Example of disabling the resize

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  resize: false
});
```

Example of enabling both vertical and horizontal resize

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  resize: "both"
});
```
