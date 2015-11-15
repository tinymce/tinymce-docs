---
layout: default
title: Noneditable Plugin
title_nav: Noneditable
description: Prevent users from changing content within elements. Ideal for templates.
keywords: noneditable contenteditable editable mceNonEditable noneditable_editable_class noneditable_noneditable_class noneditable_regexp
---

> **Updated in 4.3!** The `noneditable` plugin has been rewritten from scratch to use the `contentEditable=false` features of 4.3. This rewrite means that it is more reliable and has less browser-specific quirks.

This plugin enables you to prevent users from being able to change (i.e. edit) content within elements assigned the `mceNonEditable` class.

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

**Editable div example:**

```html
<div class="myclass mceEditable">Contents</div>
```

Nested editable elements are not currently supported. For example, you would not be able to edit the cell contents in the following table:

```html
<table class="mceNonEditable">
  <tr>
    <td class="mceEditable">
        Contents
    </td>
  </tr>
</table>
```

### Options

These settings affect the execution of the `noneditable` plugin. These settings help determine which areas of the editor's editable area will remain editable and which will be converted to non-editable status.

### `noneditable_editable_class`

This option allows you to specify the class name that TinyMCE will use to determine which areas of content are editable when using the `noneditable` plugin. This would be the the same as `contenteditable=true`, forcing an element to be editable.

Note that classes with the `mceItem` prefix are invisible within TinyMCE.

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

This option allows you to specify the class name that TinyMCE will use to determine which areas of content are editable when using the `noneditable` plugin. This would be the same as `contenteditable=false`.

Note that classes with the `mceItem` prefix is invisible within TinyMCE.

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

This option allows you to specify a regular expression or array of regular expressions that TinyMCE will use to determine which areas of content are noneditable when using the `noneditable` plugin.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "noneditable",
  noneditable_regexp: "<a href=\"(.*?)\"></a>"
});
```
