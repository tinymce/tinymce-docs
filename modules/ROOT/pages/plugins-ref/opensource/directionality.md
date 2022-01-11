---
layout: default
title: Directionality plugin
title_nav: Directionality
description: Toolbar buttons for setting the left-to-right or right-to-left direction of content.
keywords: rtl, ltr, internationalization, internationalisation, localization, localisation, international
controls: toolbar button
---

{% assign pluginname = "Directionality" %}
{% assign plugincode = "directionality" %}

This plugin adds directionality controls to the toolbar, enabling {{site.productname}} to better handle languages written from right to left. It also adds a toolbar button for each of its values, `ltr` for left-to-right text and `rtl` for right-to-left text.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'directionality',
  toolbar: 'ltr rtl'
});
```

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

## Commands

The Directionality plugin provides the following {{site.productname}} commands.

{% include commands/directionality-cmds.md %}
