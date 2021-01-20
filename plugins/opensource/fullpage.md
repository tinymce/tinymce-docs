---
layout: default
title: Full Page plugin
title_nav: Full Page
description: Edit all metadata and document properties such as title, keywords and description.
keywords: fullpage fullpage_default_doctype fullpage_default_encoding fullpage_default_font_size fullpage_default_font_family fullpage_default_title fullpage_default_text_color fullpage_default_xml_pi fullpage_hide_in_source_view
controls: toolbar button, menu item
---

{% assign pluginname = "Full Page" %}
{% assign plugincode = "fullpage" %}

This plugin allows user to edit certain metadata and document properties such as `title`, `keywords`, and `description`. This is done via a dialog box which appears after pressing a control added to the toolbar. If the `code` plugin is enabled `fullpage` exposes `<head>`, `<body>` and various `meta` tags in source code view.

The plugin also adds a `Metadata and Document properties` menu under the `File` menu and button to the toolbar.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'fullpage',
  menubar: 'file',
  toolbar: 'fullpage'
});
```

## Options

These settings affect the execution of the `fullpage` plugin. Many of the settings allow you to specify default values for the full page editing process.

### `fullpage_default_doctype`

This option enables you to specify the default `doctype` for the output HTML.

**Type:** `String`

#### Example: Using `fullpage_default_doctype`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'fullpage',
  fullpage_default_doctype: '<!DOCTYPE html>'
});
```

### `fullpage_default_encoding`

This option enables you to specify the default encoding for the output HTML.

**Type:** `String`

#### Example: Using `fullpage_default_encoding`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'fullpage',
  fullpage_default_encoding: 'UTF-8'
});
```

### `fullpage_default_font_size`

This option enables you to specify the default font **size** for the `body` element.

**Type:** `String`

#### Example: Using `fullpage_default_font_size`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'fullpage',
  fullpage_default_font_size: '14px'
});
```

### `fullpage_default_font_family`

This option enables you to specify the default font **family** for the `body` element.

**Type:** `String`

#### Example: Using `fullpage_default_font_family`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'fullpage',
  fullpage_default_font_family: "'Times New Roman', Georgia, Serif;"
});
```

### `fullpage_default_title`

This option enables you to specify the default `title` for the output HTML.

**Type:** `String`

#### Example: Using `fullpage_default_title`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'fullpage',
  fullpage_default_title: 'My default page title'
});
```

### `fullpage_default_text_color`

This option enables you to specify the default text color for the `body` element.

**Type:** `String`

#### Example: Using `fullpage_default_text_color`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'fullpage',
  fullpage_default_text_color: 'blue'
});
```

### `fullpage_default_xml_pi`

This option enables you to specify if a XML declaration should be added or not true/false option.

**Type:** `Boolean`

**Possible Values:** `true`, `false`

#### Example: Using `fullpage_default_xml_pi`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'fullpage',
  fullpage_default_xml_pi: true
});
```

### `fullpage_hide_in_source_view`

This option allows you to specify whether {{site.productname}} should hide the non `body` content from source view.

**Type:** `Boolean`

**Possible Values:** `true`, `false`

#### Example: Using `fullpage_hide_in_source_view`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'fullpage',
  fullpage_hide_in_source_view: true
});
```

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Full Page plugin provides the following JavaScript command.

{% include commands/fullpage-cmds.md %}
