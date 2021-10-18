---
layout: default
title: Format Painter
title_nav: Format Painter
description: Quickly apply formats to multiple pieces of text.
keywords: formats formatting edit formatpainter_removeformat formatpainter_tableformats formatpainter_blacklisted_formats format painter configuration
controls: toolbar button
---

{% assign pluginname = "Format Painter" %}
{% assign plugincode = "formatpainter" %}

{{site.premiumplugin}}

The Format Painter plugin allows a user to copy and paste formatting from one location to another, such as font style and size. The format painter is capable of working with a wide variety of formats such as inline and block formats and styles such as table styles.

## Interactive example

The format painter retains the formatting after application making it possible to apply the same formatting multiple times by using the `Ctrl+Alt+V` keyboard shortcut.

{% include live-demo.html id="format-painter" %}

{% assign pluginminimumplan = 'tiertwo' %}
{% assign plugindocspage = 'formatpainter' %}
{% include misc/purchase-premium-plugins.md %}

## Basic setup

To add the {{pluginname}} plugin to the editor, add `{{plugincode}}` to the `plugins` option in the editor configuration.

For example:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'formatpainter',
  toolbar: 'formatpainter'
});
```

## Using Format Painter

The format painter is accessed using either keyboard shortcuts or a toolbar button.

The format painter operates in two modes, one for retrieval and one for application of formatting. The usage of the keyboard is slightly different from the usage of the toolbar buttons.

**Usage with toolbar button**

1. Position the cursor at the source content to retrieve the formatting.
2. Enable the **Format Painter** button to copy the formatting. The **Format Painter** toolbar button background color changes to _grey_ ![the Format Painter toolbar button icon]({{site.baseurl}}/images/icons/format-painter.svg).
3. Select the goal content to apply the formatting.

**Result**: The formatting from the source content is applied to the goal content.

**Usage with keyboard**

1. Position the cursor at the source content to retrieve formatting.
2. Press the `Ctrl+Alt+C` keys to read the formatting.
3. Select the goal content to apply the formatting.
4. Press the `Ctrl+Alt+V` keys to apply the formatting.

> The format painter retains the formatting after application making it possible to apply the same formatting multiple times by using the `Ctrl+Alt+V` keyboard shortcut.

## Options

The format painter acts upon all [`formats`]({{ site.baseurl }}/configure/content-formatting/#formats) registered in the editor. In addition to any standard formatting, it will treat **lists** as a block format whenever the [`lists plugin`]({{site.baseurl}}/plugins/opensource/lists/) is made available.

{% include configuration/formatpainter_formats.md %}

{% include configuration/formatpainter_blacklisted_formats.md %}

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

## Commands

The Format Painter plugin provides the following JavaScript commands.

{% include commands/formatpainter-cmds.md %}
