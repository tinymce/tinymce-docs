---
layout: default
title: Import CSS plugin
title_nav: Import CSS
description: Automatically populate CSS class names into the Format dropdown.
keywords: importcss content_css importcss_append importcss_file_filter importcss_selector_filter importcss_groups importcss_merge_classes importcss_selector_converter importcss_exclusive
---

The `importcss` plugin adds the ability to automatically import CSS classes from the CSS file specified in the [`content_css`]({{ site.baseurl }}/configure/content-appearance/#content_css) configuration setting.

By default selectors like `".my-class"`, `".my-class1.my-class2"` and `"p.my-class"` get imported as format rules.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "importcss",
  menubar: "format"
});
```

### Options

These settings affect the execution of the `importcss` plugin, specifically the way that these operations are handled.

### `importcss_append`

If set to `true` this option will append the imported styles to the end of the `Format` menu and will replace the default formats.

**Type:** `Boolean`

**Default Value:** `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "importcss",
  menubar: "format",
  importcss_append: true
});
```

### `importcss_file_filter`

This option enables you to add the CSS files that should be used for populating the styles drop down. This will go through any `@import` rules and only target the specified file. This option can be either a `string`, `regexp` or a `function`. This also allows you to import styles form existing files on the currently editable page in inline mode.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "importcss",
  menubar: "format",
  importcss_file_filter: "my-styles.css"
});
```

### `importcss_selector_filter`

This option enables you to only import classes from selectors matching the filter. The filter can be a `string`, `regexp` or a `function`. See the examples below.

**Type:** `String`

**Example of usage with string filter:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "importcss",
  menubar: "format",
  importcss_selector_filter: ".my-prefix-"
});
```

**Example of usage with RegExp filter**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "importcss",
  menubar: "format",
  importcss_selector_filter: /\.prefix|\.otherprefix/
});
```

**Example of usage with function filter**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "importcss"
  menubar: "format",
  importcss_selector_filter: function(selector) {
    return selector.indexOf('myprefix') !== -1;
  }
});
```

### `importcss_groups`

This option enables group matching selectors into submenus in the `Formats` menu dropdown. You can use a `string`, `regexp` or a `function` to filter selectors. You can also omit the filter to get all non-matching ones into a specific group. You can also specify a group specific `selector_converter` so that formats for a specific group are produced by that converter.

**Example of usage with string filter**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "importcss"
  menubar: "format",
  importcss_groups: [
    {title: 'Table styles', filter: /^(td|tr)\./}, // td.class and tr.class
    {title: 'Block styles', filter: /^(div|p)\./}, // div.class and p.class
    {title: 'Other styles'} // The rest
  ]
});
```

### `importcss_merge_classes`

This option is used in cases where the class attribute should be replaced or merged. For example, if you have multiple classes you can apply all of them to the same element. If this option is set to `false` it will always replace the contents of the class attribute.

**Type:** `Boolean`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "importcss"
  menubar: "format",
  importcss_merge_classes: false
});
```

### `importcss_selector_converter`

This option allows you to override the default selector to format converter function. This allows you to parse the CSS selectors manually and produce format objects out of them. If the converter returns a `false` value the selector is ignored from import.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "importcss"
  menubar: "format",
  importcss_selector_converter: function(selector) {
    // Custom logic
  }
});
```

### `importcss_exclusive`

If set to `false` then selectors will not be globally exclusive meaning they can exist in two separate groups. This can be useful for scenarios where you want to have a ".class" imported as a paragraph selector and as a span format selector.

**Type:** `Boolean`

**Default Value:** `true`

```
// Sample compressed stylesheet:

/* Normalize */
article, aside, footer, header, main, nav, section {display: block;}

/* jQueryUI */
.ui-helper-hidden { display: none; }

/* Custom Styles */
.myCustomStyleStart {display:none;}
       // INCLUDE ALL MY CLASSES HERE IN THE Formats menu!
.myCustomStyleEnd {display:none;}

/* Any other possible styles afterward ... */
```

```js
var keepSelector = false;
tinymce.init({
  importcss_selector_converter: function(selector) {
    if (selector == '.myCustomStyleStart') {
      keepSelector = true;
      return false;
    } else if (selector == '.myCustomStyleEnd') {
      keepSelector = false;
    }
    if (!keepSelector ) {
      return false;
    }
    return this.convertSelectorToFormat(selector);
  }
});
```
