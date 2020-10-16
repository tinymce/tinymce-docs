---
layout: default
title: Tiny Drive plugin
title_nav: Tiny Drive
description: Cloud-based file and image management for TinyMCE.
keywords: tinydrive storage media tiny drive
---

{% assign pluginname = "Tiny Drive" %}
{% assign plugincode = "tinydrive" %}

> **Note**: This plugin is only available for [{{site.cloudname}} users]({{site.pricingpage}}).

The [{{site.cloudfilemanager}}]({{site.baseurl}}/tinydrive/introduction/) plugin adds the functionality to upload and manage files and images to the cloud. This plugin is only available in [{{site.cloudname}}]({{site.accountsignup}}) and requires you to register for an API key.

To enable this functionality, add `tinydrive` to the list of plugins in the `tinymce.init` call. You also need to authenticate the user using a [JSON Web Token]({{site.baseurl}}/tinydrive/jwt-authentication) (JWT).

Once you enable {{site.cloudfilemanager}} it integrates as the default file picker for the Image, Link, and Media dialogs and as the default upload handler for local images being pasted or inserted into the document.

## Interactive example

{% include live-demo.html id="drive" %}

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  plugins: 'tinydrive',
  tinydrive_token_provider: 'URL_TO_YOUR_TOKEN_PROVIDER'
});
```

## Configuration

You can read more about the various configuration options for {{site.cloudfilemanager}} in the dedicated [configuration page]({{site.baseurl}}/tinydrive/configuration/).

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}