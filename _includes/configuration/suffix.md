## `suffix`

This option lets you specify the suffix of {{site.productname}}. By default this value will be set to the same as the suffix of the script holding {{site.productname}}. When loading things like the theme and plugins this suffix will be inserted into all requests. For example, loading {{site.productname}} with a `tinymce.min.js` file will make {{site.productname}} load `.min` versions of everything it lazy-loads, like `theme.min.js` and `plugin.min.js` The suffix option is useful for overriding this behaviour.

**Type:** `String`

### Example: Using `suffix`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  suffix: '.min'
});
```
