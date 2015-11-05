---
layout: default
title: full-page
---

## Full Page Plugin (`fullpage`)

// adds menu control (under File menu)

// adds toolbar control

This plugin allows a user to edit certain document properties (such as `title`, `keywords`, `description`) via a dialog box after pressing a control added to the toolbar. If the `code` plugin is enabled `fullpage` exposes `<head>`, `<body>` and various `meta` tags in source code view. It also adds a `Document properties` menu under the File menu and button to the toolbar.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "fullpage",
    menubar: "file",
    toolbar: "fullpage"
});
```

### Options

These settings affect the execution of the `fullpage` plugin. Many of the settings allow you to specify default values for the full page editing process.

### `fullpage_default_doctype`

This option enables you to specify the default `doctype` for the output HTML.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "fullpage",
    fullpage_default_doctype: "<!DOCTYPE html>"
});
```

### `fullpage_default_encoding`

This option enables you to specify the default encoding for the output HTML.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "fullpage",
    fullpage_default_encoding: "UTF-8"
});
```

### `fullpage_default_fontsize`

This option enables you to specify the default font **size** for the `body` element.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "fullpage",
    fullpage_default_fontsize: "14px"
});
```

### `fullpage_default_font_family`

This option enables you to specify the default font **family** for the `body` element.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "fullpage",
    fullpage_default_font_family: "'Times New Roman', Georgia, Serif;"
});
```

### `fullpage_default_langcode`

This option enables you to specify the default language codes for the output HTML.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "fullpage",
    fullpage_default_langcode: "en-US"
});
```

### `fullpage_default_title`

This option enables you to specify the default `title` for the output HTML.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "fullpage",
    fullpage_default_title: "TinyMCE - Configuration:fullpage_default_title"
});
```

### `fullpage_default_text_color`

This option enables you to specify the default text color for the `body` element.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "fullpage",
    fullpage_default_text_color: "blue"
});
```

### `fullpage_default_xml_pi`

This option enables you to specify if a XML declaration should be added or not true/false option.

**Type:** `Boolean`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "fullpage",
    fullpage_default_xml_pi: true
});
```

### `fullpage_hide_in_source_view`

This option allows you to specify whether TinyMCE should hide the non `body` content from source view.

**Type:** `Boolean`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "fullpage",
    fullpage_hide_in_source_view: true
});
```

