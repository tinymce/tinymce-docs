---
layout: default
title: Paste plugin
title_nav: Paste
description: Standard version of features for copying-and-pasting content from Microsoft Word.
keywords: microsoft word excel cut copy paste_data_images paste_as_text paste_enable_default_filters paste_filter_drop paste_preprocess paste_postprocess paste_word_valid_elements paste_webkit_styles paste_retain_style_properties paste_merge_formats paste_convert_word_fake_lists paste_remove_styles_if_webkit
controls: toolbar button, menu item
---

{% assign pluginname = "Paste" %}
{% assign plugincode = "paste" %}

> Looking for more advanced Microsoft Word importing and pasting? Try the [PowerPaste]({{site.baseurl}}/plugins/premium/powerpaste/) plugin.

> **Note:** The functionality of this plugin has been included in core of TinyMCE since version 6.0.0 and it is no longer required to include `paste` as part of the plugins. 

This plugin will filter/cleanup content pasted from Microsoft Word. The power of the plugin is in its options, so please take the time to learn more about them below.

The plugin also adds a menu item `Paste as text` under the `Edit` menu dropdown and a toolbar button.

> **Note:** The toolbar button won't work in browsers that don't support direct access to the clipboard. In such cases the user will be presented with a modal/dialog box advising them of this along with a reminder of standard keyboard shortcuts.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  menubar: 'edit',
  toolbar: 'paste pastetext'
});
```

## Options

These settings affect the way content is eliminated or preserved when being pasted. In addition, callbacks are available prior to and after content filtration.

{% include configuration/paste_block_drop.md %}

{% include configuration/paste_data_images.md %}

{% include configuration/paste_as_text.md %}

{% include configuration/paste_enable_default_filters.md %}

{% include configuration/paste_filter_drop.md %}

{% include configuration/paste_preprocess.md %}

{% include configuration/paste_postprocess.md %}

{% include configuration/paste_word_valid_elements.md %}

{% include configuration/paste_webkit_styles.md %}

{% include configuration/paste_retain_style_properties.md %}

{% include configuration/paste_merge_formats.md %}

{% include configuration/paste_tab_spaces.md %}

{% include configuration/paste_convert_word_fake_lists.md %}

{% include configuration/paste_remove_styles_if_webkit.md %}

{% include configuration/smart_paste.md %}

{% include configuration/image_file_types.md %}

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Paste plugin provides the following JavaScript command.

{% include commands/paste-cmds.md %}
