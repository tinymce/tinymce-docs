---
layout: default
title: Noneditable plugin
title_nav: Noneditable
description: Prevent users from changing content within elements. Ideal for templates.
keywords: noneditable contenteditable editable mceNonEditable noneditable_editable_class noneditable_noneditable_class noneditable_regexp
---

> The `noneditable` plugin has been rewritten from scratch to use stability improvements to the {{site.productname}} core. It is now more reliable and has fewer browser-specific quirks.

This plugin enables you to prevent users from being able to edit content within elements assigned the `mceNonEditable` class.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "noneditable"
});
```

When you have existing classes that cannot be removed, you may combine MCE classes with the existing class in the following manner:

##### Non-editable div example

```html
<div class="myclass mceNonEditable">Contents</div>
```

##### Editable div example

```html
<div class="myclass mceEditable">Contents</div>
```

## Options

These settings affect the execution of the `noneditable` plugin. These settings help determine which areas of the editor's editable area will remain editable and which will be converted to non-editable status.

### `noneditable_editable_class`

This option allows you to specify the class name that {{site.productname}} will use to determine which areas of content are editable when using the `noneditable` plugin. This would be the the same as `contenteditable=true`, forcing an element to be editable.

Note that classes with the `mceItem` prefix are invisible within {{site.productname}}.

**Type:** `String`

**Default Value:** `"mceEditable"`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "noneditable",
  noneditable_editable_class: "mceEditable"
});
```

### `noneditable_noneditable_class`

This option allows you to specify the class name that {{site.productname}} will use to determine which areas of content are editable when using the `noneditable` plugin. This would be the same as `contenteditable=false`.

Note that classes with the `mceItem` prefix is invisible within {{site.productname}}.

**Type:** `String`

**Default Value:** `"mceNonEditable"`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "noneditable",
  noneditable_noneditable_class: "mceNonEditable"
});
```

### `noneditable_regexp`

This option is used to specify a regular expression or array of regular expressions that {{site.productname}} will use to determine which areas of content are non-editable when using the `noneditable` plugin. The regular expressions needs to be global so that all instances within the document are matched. The text content of the matches will be wrapped in spans, hiding the structure and styling while editing.

> **Note**: If elements are matched by the regular expression, the elements will be replaced with spans. Use [`noneditable_noneditable_class`](#noneditable_noneditable_class) for elements.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "noneditable",
  noneditable_regexp: /\d{3}-\d{3}-\d{3}/g // matches 123-456-789
});
```

## Making Content Non-editable

### Procedure

1. Add `noneditable` to `plugins`. For example:

    ```js
    tinymce.init({
      selector: "textarea",  // change this value according to your HTML
      plugins: "code noneditable"
    });
    ```
2. Configure the `noneditable_noneditable_class` option, or the others as necessary in your `tinymce.init`. For example:

    ```js
    tinymce.init({
      selector: "textarea",  // change this value according to your HTML
      plugins: "noneditable",
      noneditable_noneditable_class: "mceNonEditable"
    });
    ```
    > **Note**: Replace `mceNonEditable` with the class name you want for your non-editable elements.
3. Select the desired editor content.
4. From the menu bar, select `View` > `Source code`.
5. Add the non-editable class to the desired editor content. For example:

```html
<div class="myclass mceNonEditable">Contents</div>
```