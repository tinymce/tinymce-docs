---
layout: default
title: Preview plugin
title_nav: Preview
description: Shows a popup of the current content in read-only format.
keywords: view preview
controls: toolbar button, menu item
---

{% include DEPRECATED/preview.md %}

{% assign pluginname = "Preview" %}
{% assign plugincode = "preview" %}

This plugin adds a preview button to the toolbar. Pressing the button opens a dialog box showing the current content in a preview mode. It also adds a menu item `Preview` under the `File` and `View` menu dropdowns.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'preview',
  menubar: 'view',
  toolbar: 'preview'
});
```

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Preview plugin provides the following JavaScript command.

{% include commands/preview-cmds.md %}
