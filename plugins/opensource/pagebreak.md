---
layout: default
title: Page Break plugin
title_nav: Page Break
description: Add a page break.
keywords: pagebreak insert pagebreak_separator pagebreak_split_block
controls: toolbar button, menu item
---

{% assign pluginname = "Page Break" %}
{% assign plugincode = "pagebreak" %}

This plugin adds page break support and enables a user to insert page breaks in the editable area. This is useful where a CMS uses a special separator to break content into pages.

It also adds a toolbar button and a menu item `Page break` under the `Insert` menu dropdown.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  plugins: 'pagebreak',
  menubar: 'insert',
  toolbar: 'pagebreak'
});
```

## Options

These settings affect the execution of the `pagebreak` plugin. They enable you to specify how the page break should be generated in the HTML source code and determine whether the page break element(s) should be wrapped in `<p>`tags`</p>`.

### `pagebreak_separator`

**Type:** `String`

#### Example: Using `pagebreak_separator`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'pagebreak',
  menubar: 'insert',
  toolbar: 'pagebreak',
  pagebreak_separator: '<!-- my page break -->'
});
```

### `pagebreak_split_block`

When enabled this option makes it easier to split block elements with a page break.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

#### Example: Using `pagebreak_split_block`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'pagebreak',
  menubar: 'insert',
  toolbar: 'pagebreak',
  pagebreak_split_block: true
});
```

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Page Break plugin provides the following JavaScript command.

{% include commands/pagebreak-cmds.md %}
