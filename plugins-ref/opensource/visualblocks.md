---
layout: default
title: Visual Blocks plugin
title_nav: Visual Blocks
description: Allows a user to see block level elements such as paragraphs.
keywords: visualblocks wysiwyg hidden view visualblocks_default_state
controls: toolbar button, menu item
---

{% assign pluginname = "Visual Blocks" %}
{% assign plugincode = "visualblocks" %}

This plugin allows a user to see block level elements in the editable area. It is similar to WYSIWYG hidden character functionality, but at block level. It also adds a toolbar button and a menu item `Show blocks` under the `View` menu dropdown.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'visualblocks',
  menubar: 'view',
  toolbar: 'visualblocks'
});
```

## Options

This setting affects the execution of the `visualblocks` plugin. You may specify whether blocks are visible by default here.

{% include configuration/visualblocks_default_state.md %}

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Visual Blocks plugin provides the following {{site.productname}} command.

{% include commands/visualblocks-cmds.md %}
