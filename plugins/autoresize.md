---
layout: default
title: Autoresize plugin
title_nav: Autoresize
description_short:
description: Automatically resize TinyMCE to fit content.
keywords: height width autoresize_max_height autoresize_min_height autoresize_on_init autoresize_overflow_padding autoresize_overflow_padding
---

This plugin automatically resizes the editor to the content inside it. It is typically used to prevent the editor from expanding infinitely as a user types into the editable area. For example, by giving the `autoresize_max_height` option a value the editor will stop resizing when the set value is reached.

**Type:** `String`

##### Autoresize plugin example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "autoresize"
});
```

## Options

These settings affect the execution of the Autoresize plugin, including changes to the minimum width, height, bottom margin, and default initialization state.

### `autoresize_bottom_margin`

This option allows you to specify the size of the `padding` at the bottom of the editor's `body` set on initialization.

**Type:** `Number`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "autoresize",
  autoresize_bottom_margin: 50
});
```

### `max_height`

This option enables you to specify the **maximum** `height` that the editor will automatically resize to when a user enters text into the editor. In other words, the editor will stop automatically resizing when the set value is reached.

**Type:** `Number`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  max_height: 500
});
```

### `min_height`

This option enables you to specify the **minimum** `height` of the editor when it's initialized.

**Type:** `Number`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  min_height: 350
});
```

### `autoresize_on_init`

This option allows you to set whether the editor will attempt to resize itself upon initialization. By default this option is set to `true`.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "autoresize",
  autoresize_on_init: false
});
```

### `autoresize_overflow_padding`

This option allows you to specify the size of the `padding` at the sides of the editor's `body` set on initialization.

**Type:** `Number`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "autoresize",
  autoresize_overflow_padding: 50
});
```
