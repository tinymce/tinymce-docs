## invalid_styles

This option enables you to restrict the styles that are valid for specific elements. This option takes two formats: one string format that is a simple list of global styles to disallow, and a more complex object format where you can specify invalid styles for individual elements.

### Simple global classes

**Type:** `String`, `Object`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  invalid_styles: 'color font-size'
});
```

### Element specific classes

**Type:** `String`, `Object`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  invalid_styles: {
    '*': 'color font-size', // Global invalid styles
    'a': 'background' // Link specific invalid styles
  }
});
```
