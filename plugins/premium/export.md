---
layout: default
title: Export plugin
title_nav: Export
description: Export content from TinyMCE, into various formats.
keywords: plugin export pdf
---

{% assign pluginname = "Export" %}
{% assign plugincode = "export" %}

{{site.requires_5_5v}}<br/>
{{site.premiumplugin}}

The {{pluginname}} plugin adds the ability to export content from the editor to a user's local machine in various formats. For a list of available exporters and information on what they support, see the [Exporters section](#exporters).

## Interactive example

To export the editor content, either:

- From the _File_ menu, click _Export_ and select _PDF_.
- Click the Export toolbar button (![Export icon: A page with an arrow from the center of the page to the right of the page]({{site.baseurl}}/images/icons/export.svg)) and select _PDF_.

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

The client-side PDF exporter converts the editor content to a PDF without the need for server-side components. This exporter will resize the content to fit on A4 pages, add page breaks, take a snapshot of the HTML, and embed the snapshot image within the exported PDF.

This exporter has a few limitations or known issues that should be noted:

- The text content in the PDF cannot be selected or copied.
- A single line of content sliced horizontally and distributed across separate pages.
- Due to browser limitations, there is a limit on the number of pages that can be rendered. The number of pages varies between browsers.
- Remote images require an image proxy to render due to browser limitations. For information on proxying remote images, see the [export_image_proxy](#export_image_proxy) option.
- Right-to-left languages that use cursive scripts (such as Arabic) may not render correctly due to an issue with how the image of the HTML content is rendered.
- The [Checklist plugin]({{site.baseurl}}/plugins/premium/checklist/) icons will not render for Internet Explorer 11 users due to browser limitations.

The following plugins are not supported:

- [BBCode]({{site.baseurl}}/plugins/opensource/bbcode/)
- [Comments]({{site.baseurl}}/plugins/premium/comments/)
- [Enhanced Media Embed]({{site.baseurl}}/plugins/premium/mediaembed/)
- [Fullpage]({{site.baseurl}}/plugins/opensource/fullpage/)
- [Legacy Output]({{site.baseurl}}/plugins/opensource/legacyoutput/)
- [Media]({{site.baseurl}}/plugins/opensource/media/)
- [Page Embed]({{site.baseurl}}/plugins/premium/pageembed/)
- [Table of Contents]({{site.baseurl}}/plugins/opensource/toc/)

## Configuration Options

The following configuration options affect the behavior of the {{pluginname}} plugin.

{% include configuration/image-cors-hosts.md %}

### `export_ignore_elements`

This option takes an array of HTML element names and allows specific HTML elements to be excluded from the exported content. This can be used to exclude HTML elements that may cause issues with exported content, such as video or audio elements.

**Type:** `Array`

**Default Value:** `[]`

##### Example: `export_ignore_elements`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: '{{plugincode}}',
  toolbar: 'export',
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
