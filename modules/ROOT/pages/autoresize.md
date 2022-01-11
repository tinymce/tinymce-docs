# Autoresize plugin
:title_nav: Autoresize
:description_short:
:description: Automatically resize TinyMCE to fit content.
:keywords: height width max_height min_height autoresize_on_init autoresize_overflow_padding autoresize_overflow_padding

{% assign pluginname = "Autoresize" %}

This plugin automatically resizes the editor to the content inside it. It is typically used to prevent the editor from expanding infinitely as a user types into the editable area. For example, by giving the `max_height` option a value the editor will stop resizing when the set value is reached.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'autoresize'
});
```

## Options

These settings affect the execution of the Autoresize plugin, including changes to the minimum width, height, bottom margin, and default initialization state.

{% include configuration/autoresize_bottom_margin.md %}

{% include configuration/autoresize_on_init.md %}

{% include configuration/autoresize_overflow_padding.md %}

#{% include configuration/max_height.md %}

#{% include configuration/min_height.md %}

## Commands

The Autoresize plugin provides the following {{site.productname}} command.

{% include commands/autoresize-cmds.md %}
