## `directionality`

This option allows you to set the base direction of directionally neutral text (i.e., text that doesn't have inherent directionality as defined in Unicode) within the editor. This is similar to the use of the `'dir'` attribute when using content editable elements by themselves.

**Type:** `String`

**Default Value:** `'ltr'`

**Possible Values:** `'ltr'`, `'rtl'`

### Example: Using `directionality`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  directionality : 'ltr'
});
```
