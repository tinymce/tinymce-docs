---
layout: default
title: Media plugin
title_nav: Media
description: Add HTML5 video and audio elements.
keywords: video youtube vimeo mp3 mp4 mov movie clip film media_live_embeds audio_template_callback media_alt_source media_poster media_dimensions media_filter_html media_scripts video_template_callback
controls: toolbar button, menu item
---

{% assign pluginname = "Media" %}
{% assign plugincode = "media" %}

The `media` plugin adds the ability for users to be able to add HTML5 video and audio elements to the editable area. It also adds the item `Insert/edit video` under the `Insert` menu as well as a toolbar button.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'media',
  menubar: 'insert',
  toolbar: 'media'
});
```

## Options

These settings affect the execution of the `media` plugin. Namely the ability to disable parts of the media dialog box when inserting/editing media items. In addition, the user may disable the cross-site scripting sanitation filter for video/object elements here.

{% include configuration/audio_template_callback.md %}

{% include configuration/media_alt_source.md %}

{% include configuration/media_dimensions.md %}

{% include configuration/media_filter_html.md %}

{% include configuration/media_live_embeds.md %}

{% include configuration/media_poster.md %}

{% include configuration/media_scripts.md %}

{% include configuration/media_url_resolver.md %}

{% include configuration/video_template_callback.md %}

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Media plugin provides the following {{site.productname}} command.

{% include commands/media-cmds.md %}
