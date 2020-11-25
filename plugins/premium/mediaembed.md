---
layout: default
title: Enhanced Media Embed plugin
title_nav: Enhanced Media Embed
description: Add rich media previews inside TinyMCE.
keywords: video youtube vimeo mp3 mp4 mov movie clip film spotify
---

{{site.premiumplugin}}

The **Enhanced Media Embed** plugin is a [premium {{site.productname}} plugin]({{site.pricingpage}}) that will take a URL, send it to a backend service that returns an embeddable snippet of code, and add that code to the editor. That typically takes the form of rich media such as audio, video and social media cards.

## Installation

For the moment the **Enhanced Media Embed** plugin has to be used in conjunction with the [media]({{site.baseurl}}/plugins/opensource/media/) plugin, so:

1. Make sure you have the `media` plugin added to the `plugins` list.
2. Add the `mediaembed` plugin to the `plugins` list.

### Example Cloud Configuration

The service URL is already configured with [{{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/editor-and-features/).
Simply specify the `media` and `mediaembed` plugins, and optionally a `mediaembed_max_width`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'media mediaembed',
  mediaembed_max_width: 450
});
```

### Example Self-hosted Configuration

In a Self-hosted installation, please ensure you configure the URL to the service with the `mediaembed_service_url` parameter.

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'media mediaembed',
  mediaembed_service_url: 'SERVICE_URL',
  mediaembed_max_width: 450
});
```

### CSS

To make the embeddable snippets display correctly on your site, be sure to add the required summary card CSS.

```css
{% include css-codeblock/mediaembed-plugin-css.md %}
```

## Usage

The plugin can be used in two ways, either by simply entering a URL on an empty line and pressing the enter key - or by entering the URL into the media plugin's dialog window. Either way the URL will be handled by the service backend and the returned code will be embedded into the editor.

## Configuration Options

### `mediaembed_inline_styles`

This optional setting will inline all styles, instead of using CSS classes, when rendering the embedded snippet. This is useful when the additional CSS classes can't be added to your site. Defaults to `false`.

**Type:** `Boolean`

### `mediaembed_service_url`

This setting specifies the URL to the service that will handle your requests and return the embeddable snippets used by the **Media Embed** plugin. Please follow these [instructions]({{site.baseurl}}/enterprise/server/#step6setupeditorclientinstancestousetheserver-sidefunctionality) to configure the **WAR** file that you will get as a part of your [{{site.enterpriseversion}} subscription]({{site.pricingpage}}).
This option is not required for [{{site.cloudname}}]({{site.baseurl}}/cloud-deployment-guide/editor-and-features/).

**Type:** `String`

### `mediaembed_max_width`

This optional setting specifies a maximum width in pixels of the embedded content. Defaults to `650`.

**Type:** `Number`

## Downloading Enhanced Media Embed plugin

A [{{site.enterpriseversion}} subscription]({{site.pricingpage}}) includes the ability to download and install the **Media Embed** plugin and a **WAR** file to access the service backend. Please follow these [instructions]({{site.baseurl}}/enterprise/server/#step6setupeditorclientinstancestousetheserver-sidefunctionality) to configure the **WAR** file.
