---
layout: default
title: Print plugin
title_nav: Print
description: Print the content in TinyMCE.
keywords: file
controls: toolbar button, menu item
---

{% assign pluginname = "Print" %}
{% assign plugincode = "print" %}

This plugin adds a print button to the toolbar. It also adds a `Print` item to the `File` menu dropdown.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'print',
  menubar: 'file',
  toolbar: 'print'
});
```

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Print plugin provides the following JavaScript command.

{% include commands/print-cmds.md %}
