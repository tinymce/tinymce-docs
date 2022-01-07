---
layout: default
title: Lists plugin
title_nav: Lists
description: Normalizes list behavior between browsers.
keywords: list lists browser normalize
---

{% assign pluginname = "Lists" %}
{% assign plugincode = "lists" %}

The `lists` plugin allows you to add numbered and bulleted lists to {{site.productname}}. To enable advanced lists (e.g. alpha numbered lists, square bullets) you should also enable the [Advanced List]({{site.baseurl}}/plugins-ref/opensource/advlist/) (`advlist`) plugin.

The plugin also normalizes list behavior between browsers. Enable it if you have problems with consistency making lists.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'lists',
  toolbar: 'numlist bullist'
});
```

## Options

These settings affect the execution of the `lists` plugin.

{% include configuration/lists_indent_on_tab.md %}

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

## Commands

The Lists plugin provides the following {{site.productname}} commands.

{% include commands/lists-cmds.md %}
