---
layout: default
title: Introduction to PowerPaste
title_nav: Introduction
description: The PowerPaste plugin automatically cleans up content from Microsoft Word, Microsoft Excel, Google Docs, and HTML sources.
keywords: enterprise powerpaste power microsoft word excel google docs
---

{% assign pluginname = "PowerPaste" %}
{% assign plugincode = "powerpaste" %}

{{site.premiumplugin}}

The {{site.productname}} **PowerPaste** plugin automatically cleans up content from Microsoft Word, Microsoft Excel, Google Docs, and HTML sources to ensure clean, compliant content that matches the look and feel of the site.

> **Note:** Due to limitations in Microsoft Excel online (part of Office Live) PowerPaste does not support pasting from Microsoft Excel online.  If you paste content using Microsoft Excel in Office Live you will get a plain text representation of the content.

## Try our PowerPaste plugin demo

{% include live-demo.html id="paste-from-word" %}

{% assign pluginminimumplan = 'tiertwo' %}
{% include misc/purchase-premium-plugins.md %}

## Usage

The **PowerPaste** plugin activates automatically when users paste content into the editor. For basic usage, users are not required to take any action. Simply copy and paste content normally using keyboard shortcuts, the browser's "Paste" menu item (including from the context menu), or the {{site.productname}} "Paste" toolbar button.

To paste clipboard content as plain text, users can click the "Paste As Text" toolbar button or menu item, then paste the content normally. The {{site.productname}} **PowerPaste** plugin will convert the HTML on the clipboard into plain text.

If you configure **PowerPaste** to allow local images (see the [`powerpaste_allow_local_images`]({{site.baseurl}}/plugins-ref/premium/powerpaste/powerpaste_options/#powerpaste_allow_local_images) setting below), then images copied from Microsoft Word and other sources will appear in {{site.productname}} as Base64 encoded images. You can have {{site.productname}} automatically upload Base64 encoded images for reverting back to a standard image as described in the [image upload documentation]({{site.baseurl}}/advanced/handle-async-image-uploads/).

> **Note:** PowerPaste (when configured to allow local images) will import images from pasted Microsoft Word and Microsoft Excel content. When doing this, **PowerPaste** extracts Base64 encoded images from the clipboard.  Images larger than approximately 8.5MB may fail to import based on technical limitations of web browsers.

## Cloud Installation

To enable the {{site.productname}} **PowerPaste** plugin with [{{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/editor-and-features/):

1. If you are currently using the `paste` plugin provided with {{site.productname}}, disable it by removing it from the `plugins` list.
2. Add `powerpaste` to the `plugins` list.

Example {{site.productname}} configuration:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'powerpaste'
});
```

## Self-hosted Installation

To enable the {{site.productname}} **PowerPaste** plugin:

1. If you are currently using the `paste` plugin provided with {{site.productname}}, disable it by removing it from the `plugins` list.
2. Add `powerpaste` to the `plugins` list in  your {{site.productname}} configuration.

See the example {{site.productname}} configuration above.
