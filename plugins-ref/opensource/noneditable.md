---
layout: default
title: Noneditable plugin
title_nav: Noneditable
description: Prevent users from changing content within elements. Ideal for templates.
keywords: noneditable contenteditable editable mceNonEditable noneditable_editable_class noneditable_noneditable_class noneditable_regexp
---

> The `noneditable` plugin has been rewritten from scratch to use stability improvements to the {{site.productname}} core. It is now more reliable and has fewer browser-specific quirks.

This plugin enables you to prevent users from being able to edit content within elements assigned the `mceNonEditable` class.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'noneditable'
});
```

When you have existing classes that cannot be removed, you may combine MCE classes with the existing class in the following manner:

### Non-editable div example

```html
<div class="myclass mceNonEditable">Contents</div>
```

### Editable div example

```html
<div class="myclass mceEditable">Contents</div>
```

## Options

These settings affect the execution of the `noneditable` plugin. These settings help determine which areas of the editor's editable area will remain editable and which will be converted to non-editable status.

{% include configuration/noneditable_editable_class.md %}

{% include configuration/noneditable_noneditable_class.md %}

{% include configuration/noneditable_regexp.md %}

## Making Content Non-editable

### Procedure

1. Add `noneditable` to `plugins`. For example:

    ```js
    tinymce.init({
      selector: 'textarea',  // change this value according to your HTML
      plugins: 'code noneditable'
    });
    ```

2. Configure the `noneditable_noneditable_class` option, or the others as necessary in your `tinymce.init`. For example:

    ```js
    tinymce.init({
      selector: 'textarea',  // change this value according to your HTML
      plugins: 'noneditable',
      noneditable_noneditable_class: 'mceNonEditable'
    });
    ```

    > **Note**: Replace `mceNonEditable` with the class name you want for your non-editable elements.

3. Select the desired editor content.
4. From the menu bar, select `View` > `Source code`.
5. Add the non-editable class to the desired editor content. For example:

```html
<div class="myclass mceNonEditable">Contents</div>
```
