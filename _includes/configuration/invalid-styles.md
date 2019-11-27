## invalid_styles

The **invalid_styles** option enables you to restrict the styles that are valid for specific elements. This option takes two formats:

* **String format** - This is a simple list of global styles to disallow.
* **Object format** - This is a more complex format where you can specify invalid styles for individual elements.

### Simple global classes

**Type:** `String`, `Object`

##### Example: invalid_styles - simple global classes

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  invalid_styles: 'color font-size'
});
```

### Element specific classes

**Type:** `String`, `Object`

##### Example: invalid_styles - element specific classes

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  invalid_styles: {
    '*': 'color font-size', // Global invalid styles
    'a': 'background' // Link specific invalid styles
  }
});
```
