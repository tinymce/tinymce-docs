## toolbar_persist

Use this option to disable the automatic show and hide behaviour of the inline toolbar. Enabling this setting would, by default, always show the inline toolbar and not hide it whenever focus is lost.

**Type:** `Boolean`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  inline: true,
  toolbar_persist: true
});
```
