### `importcss_selector_converter`

This option allows you to override the default selector to format converter function. This allows you to parse the CSS selectors manually and produce format objects out of them. If the converter returns a `false` value the selector is ignored from import.

Type
: `String`

#### Example: Using `importcss_selector_converter`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'importcss',
  content_css: '/my-styles.css',
  menubar: 'format',
  importcss_selector_converter: function(selector) {
    // Custom logic
  }
});
```

