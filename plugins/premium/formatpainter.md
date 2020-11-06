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

{% include live-demo.html id="format-painter" %}

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

### `formats`

The format painter plugin will register many formats upon initialization. To override these formats, use the [`formats`]({{ site.baseurl }}/configure/content-formatting/#exampleofusageoftheformatsoption) option.

The example below showcases the formats registered automatically by the plugin upon initialization. The `formatpainter_removeformat` is used to clear any existing formats before applying the new ones. It is similar to the [`removeformat`]({{ site.baseurl }}/configure/content-formatting/#removingaformat) format.

**Type:** `Object`

#### Example: Using `formats`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'formatpainter',
  formats: {
    formatpainter_checklist: { selector: 'ul', classes: 'tox-checklist' },
    formatpainter_liststyletype: { selector: 'ul,ol', styles: { listStyleType: '%value' } },
    formatpainter_borderstyle: { selector: 'td,th', styles: { borderTopStyle: '%valueTop', borderRightStyle: '%valueRight', borderBottomStyle: '%valueBottom', borderLeftStyle: '%valueLeft', }, remove_similar: true },
    formatpainter_bordercolor: { selector: 'td,th', styles: { borderTopColor: '%valueTop', borderRightColor: '%valueRight', borderBottomColor: '%valueBottom', borderLeftColor: '%valueLeft' }, remove_similar: true },
    formatpainter_backgroundcolor: { selector: 'td,th', styles: { backgroundColor: '%value' }, remove_similar: true },
    formatpainter_removeformat: [
      {
        selector: 'b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins',
        remove: 'all', split: true, expand: false, block_expand: true, deep: true
      },
      { selector: 'span', attributes: ['style', 'class'], remove: 'empty', split: true, expand: false, deep: true },
      { selector: '*:not(tr,td,th,table)', attributes: ['style', 'class'], split: false, expand: false, deep: true }
    ]
  }
});
```

### `formatpainter_blacklisted_formats`

This option makes it possible to block the unwanted formats in the format painter.

**Type:** `String`

**Default:** `'link,address,removeformat,formatpainter_removeformat'`

#### Example: Using `formatpainter_blacklisted_formats`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'formatpainter',
  formatpainter_blacklisted_formats: 'link,address,removeformat,formatpainter_removeformat'
});
```

Check out the [Format Painter demo]({{site.baseurl}}/demo/formatpainter/) to try out this new feature.

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

## Commands

The Format Painter plugin provides the following JavaScript commands.

{% include commands/formatpainter-cmds.md %}
