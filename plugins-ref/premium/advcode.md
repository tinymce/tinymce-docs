---
layout: default
title: Advanced Code Editor plugin
title_nav: Advanced Code Editor
description: How to setup TinyMCE's Advanced Code Editor plugin.
keywords: code advcode codemirror
controls: toolbar button, menu item
---

{% assign pluginname = "Advanced Code Editor" %}
{% assign plugincode = "advcode" %}
{% include /misc/admon_premium_plugin.md %}

The [Advanced Code Editor]({{site.baseurl}}/plugins-ref/premium/advcode/) plugin (`advcode`) brings a more advanced code editor to {{site.productname}}. This code editor makes it easier to modify the HTML, and it's a very useful add-on for power users. It comes with many features often found in IDEs, all enabled by default:

* Syntax color highlighting
* Bracket matching
* Code folding
* Multiple selections/carets
* Search and Replace

## The difference between the Code and Advanced Code Editor plugins

{% include live-demo.html id="advcode" %}

{% assign pluginminimumplan = 'tiertwo' %}
{% include misc/purchase-premium-plugins.md %}

## Example: Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'advcode',
  toolbar: 'code'
});
```

{% include misc/advcode-shortcuts.md %}

{% assign altplugincode = "code" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign altplugincode = "code" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Advanced Code plugin provides the following {{site.productname}} command.

{% include commands/code-cmds.md %}
