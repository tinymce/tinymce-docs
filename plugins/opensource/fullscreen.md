---
layout: default
title: Full Screen plugin
title_nav: Full Screen
description: Zoom TinyMCE up to the whole screen.
keywords: fullscreen view
controls: toolbar button, menu item
---

{% assign pluginname = "Full Screen" %}
{% assign plugincode = "fullscreen" %}

This plugin adds full screen editing capabilities to {{site.productname}}. When the toolbar button is pressed the editable area will fill the browser's viewport. The plugin adds a toolbar button and a menu item `Fullscreen` under the `View` menu.

Full screen mode can be toggled using the following keyboard shortcuts:

* macOS: Command+Shift+F
* Most other operating systems (such as Windows or Linux): Ctrl+Shift+F

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'fullscreen',
  menubar: 'view',
  toolbar: 'fullscreen'
});
```
> **NOTE**: As of {{site.productname}} 5.10.6, toggling fullscreen mode with the `fullscreen` plugin also fires the `ResizeEditor` event.

## Configuration options

The following configuration options affect the behavior of the {{pluginname}} plugin.

{% include configuration/fullscreen_native.md %}

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Full Screen plugin provides the following JavaScript command.

{% include commands/fullscreen-cmds.md %}
