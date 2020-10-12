## `invalid_styles`

The `invalid_styles` option enables you to restrict the styles that are valid for specific elements. This option takes two input formats:

* **String format** - This is a list of global styles to disallow.
* **Object format** - This is a more complex format where you can specify invalid styles for individual elements.

### Simple global classes

**Type:** `String`, `Object`

#### Example: Using `invalid_styles` string

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  invalid_styles: 'color font-size'
});
```

### Element specific classes

**Type:** `String`, `Object`

#### Example: Using `invalid_styles` object

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  invalid_styles: {
    '*': 'color font-size', // Global invalid styles
    'a': 'background' // Link specific invalid styles
  }
});
```
