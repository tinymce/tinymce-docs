## suffix

This option lets you specify the suffix of TinyMCE. By default this value will be set to the same as the suffix of the script holding TinyMCE. When loading things like the themes and plugins this suffix will be inserted into all requests. For example, loading TinyMCE with a `tinymce.min.js` file will make TinyMCE load `.min` versions of everything it lazy-loads, like `theme.min.js` and `plugin.min.js` The suffix option is useful for overriding this behaviour.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  suffix: '.min'
});
```
