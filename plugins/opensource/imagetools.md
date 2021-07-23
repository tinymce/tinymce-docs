---
layout: default
title: Image Tools plugin
title_nav: Image Tools
description: Image editing features for TinyMCE.
keywords: imagetools rotate rotateleft rotateright flip flipv fliph editimage imageoptions
---

{% assign pluginname = "Image Tools" %}
{% assign plugincode = "imagetools" %}

Image Tools (`imagetools`) plugin adds a contextual editing toolbar to the images in the editor. If toolbar is not appearing on image click, it might be that you need to enable `imagetools_cors_hosts` or `imagetools_proxy` (see below).

## Interactive example

{% include live-demo.html id="image-tools" %}

{{site.svgsNotSupported}}

## Cloud Installation

The Image Tools plugin is provided with all subscriptions to [{{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/editor-and-features/), including an automatically configured image proxy.
Simply add `image` to the `toolbar` list and `image imagetools` to the `plugins` list.

### Basic setup using Tiny Cloud

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: 'image',
  plugins: 'image imagetools'
});
```

## Self-hosted Installation

To enable the {{site.productname}} Image Tools plugin:

1. Add 'image' to the 'toolbar' list and 'image imagetools' to the 'plugins' list
2. Enable `imagetools_cors_hosts` and `imagetools_proxy` options as needed

### Basic self-hosted setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: 'image',
  plugins: 'image imagetools',
  imagetools_cors_hosts: ['mydomain.com', 'otherdomain.com'],
  imagetools_proxy: 'proxy.php'
});
```

## Options

{% include configuration/image-cors-hosts.md %}

{% include configuration/imagetools_credentials_hosts.md %}

{% include configuration/imagetools_fetch_image.md %}

{% include configuration/image-proxy.md %}

{% include configuration/imagetools_toolbar.md %}

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

## Commands

The Image Tools plugin provides the following JavaScript commands.

{% include commands/imagetools-cmds.md %}
