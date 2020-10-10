---
layout: default
title: Export plugin
title_nav: Export
description: Export content from TinyMCE, into varying formats.
keywords: plugin export pdf
---

{% assign pluginname = "Export" %}
{% assign plugincode = "export" %}

{{site.techpreview}}

{{site.requires_5_5v}}

{{site.premiumplugin}}

The {{pluginname}} plugin provides the ability to export content from within the editor to a users local machine in varying formats. For the export formats available and for more information on what they support, see the [Exporters](#exporters) section below.

## Interactive example

{% include live-demo.html id="export" %}

## Basic setup

To add the {{pluginname}} plugin to the editor, add `{{plugincode}}` to the `plugins` option in the editor configuration.

For example:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: '{{plugincode}}',
  toolbar: 'export',
  export_image_proxy: 'proxy.php' // Required for rendering remote images
});
```

## Exporters

The {{pluginname}} plugin provides the following exporters:

- [Client-side PDF (`clientpdf`)](#client-side-pdf)

### Client-side PDF (`clientpdf`)

The client-side PDF exporter converts the editor content to a PDF without the need for server-side components. This exporter will resize the content to the relevant PDF page size, add in page breaks, take a snapshot of the HTML and embed the snapshot image within the exported PDF.

This exporter has a few limitations or known issues that should be noted:

- The text content in the PDF can't be selected or copied.
- Content may be cut in half across different pages.
- Remote images require the use of an image proxy to be rendered due to browser limitations. For more information on proxying remove images, see the [export_image_proxy](#export_image_proxy) option.
- Right-to-left languages that use cursive scripts (eg Arabic) may not render correctly due to an issue with how the image of the HTML content is rendered.
- The [Checklist plugin]({{ site.baseurl }}/plugins/checklist/) icons aren't able to be rendered on Internet Explorer 11 due to browser limitations.

Additionally, the following plugins are not currently supported:
  - [Anchor]({{ site.baseurl }}/plugins/anchor/)
  - [BBCode]({{ site.baseurl }}/plugins/bbcode/)
  - [Comments]({{ site.baseurl }}/plugins/comments/)
  - [Enhanced Media Embed]({{ site.baseurl }}/plugins/mediaembed/)
  - [Fullpage]({{ site.baseurl }}/plugins/fullpage/)
  - [Legacy Output]({{ site.baseurl }}/plugins/legacyoutput/)
  - [Media]({{ site.baseurl }}/plugins/media/)
  - [Page Embed]({{ site.baseurl }}/plugins/pageembed/)
  - [Table of Contents]({{ site.baseurl }}/plugins/toc/)

## Configuration Options

The following configuration options affect the behavior of the {{pluginname}} plugin.

{% include configuration/image-cors-hosts.md %}

### `export_ignore_elements`

This option takes an array of HTML element names and allows specific HTML elements to be excluded when exporting content from the editor. This can be used to exclude HTML elements that may cause issues with exported content, such as video or audio elements.

**Type:** `Array`

**Default Value:** `[]`

##### Example: `export_ignore_elements`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: '{{plugin}}',
  export_ignore_elements: [ 'iframe', 'video', 'audio' ]
});
```

{% include configuration/image-proxy.md %}

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The {{pluginname}} plugin provides the following JavaScript commands.

{% include commands/{{plugincode}}-cmds.md %}

## Events

The {{pluginname}} plugin provides the following events.

{% include events/{{plugincode}}-events.md %}

## APIs

The {{pluginname}} plugin provides the following APIs.

{% include plugin-apis/{{plugincode}}-apis.md %}
