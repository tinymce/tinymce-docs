---
layout: default
title: Autoresize Plugin
description: Automatically resize TinyMCE to fit content.
keywords: height, width
---

**Type:** `String`

## Autoresize plugin example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "autoresize",
  ...
});
```

## Options

These settings affect the execution of the Autoresize plugin, including changes to the minimum width, height, bottom margin and default initialization state.

### `autoresize_bottom_margin`

This option allows you to specify the size of the `padding` at the bottom of the editor's `body` set on initialization.

**Type:** `Integer`

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "autoresize",
  autoresize_bottom_margin: "50"
});
```

### `autoresize_max_height`

This option enables you to specify the **maximum** `height` that the editor will automatically resize to when a user enters text into the editor. In other words, the editor will stop automatically resizing when the set value is reached.

**Type:** `Integer`

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  autoresize_max_height: "500"
});
```

### `autoresize_min_height`

This option enables you to specify the **minimum** `height` of the editor when it's initialized.

**Type:** `Integer`

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  autoresize_min_height: "350"
});
```

### `autoresize_on_init`

This option allows you to set whether the editor will attempt to resize itself upon initialization. By default this option is set to `true`.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "autoresize",
  autoresize_on_init: false
});
```

### `autoresize_overflow_padding`

This option allows you to specify the size of the `padding` at the sides of the editor's `body` set on initialization.

**Type:** `Integer`

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "autoresize",
  autoresize_overflow_padding: "50"
});
```
