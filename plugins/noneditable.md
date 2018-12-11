---
layout: default
title: Noneditable plugin
title_nav: Noneditable
description: Prevent users from changing content within elements. Ideal for templates.
keywords: noneditable contenteditable editable mceNonEditable noneditable_editable_class noneditable_noneditable_class noneditable_regexp
---

> The `noneditable` plugin has been rewritten from scratch to use stability improvements to the TinyMCE core. It is now more reliable and has fewer browser-specific quirks.

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

This option allows you to specify a regular expression or array of regular expressions that TinyMCE will use to determine which areas of content are noneditable when using the `noneditable` plugin. Remember the regexps needs to be global so that all of the matches within the document gets converted.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "noneditable",
  noneditable_regexp: /<custom-token>/g
});
```

## Making Content Noneditable:

### Procedure

* Add to `plugins`.

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "noneditable"
});
```

* Configure `noneditable_noneditable_class` or the others as necessary in your `tiny.init` with the class name you want to use for noneditable regions.

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "noneditable",
  noneditable_editable_class: "mceEditable"
});
```
> Note: Replace `mceEditable` with the class name you want for your noneditable regions.

* Select the desired content.
* In your editor, select `Source code` from the `Tools` menu.
* Apply the noneditable class to the desired editor content.

```html
<div class="myclass mceEditable">Contents</div>
```



