---
layout: default
title: Migrating from TinyMCE 5 to TinyMCE 6.
title_nav: Migrating from TinyMCE 5
description: Guidance for migrating from TinyMCE 5 to TinyMCE 6.
keywords: migration considerations premigration pre-migration
---

Most configuration changes in TinyMCE 6 only affect complex use cases, such as customized user interface components. The process for setting up a basic TinyMCE 6 instance is the same as TinyMCE 5.

This chapter describes the migration process and workarounds for customers using TinyMCE 5. It describes the settings that require updating prior to migration; and workaround procedures for deprecated, deleted, and updated features.

> **Note**: For support related to migration, please contact [Tiny support](https://support.tiny.cloud/hc/en-us/requests/new). Open Source users: Please report issues on the [TinyMCE GitHub Repository](https://github.com/tinymce/tinymce/).

## Contents

* [Editor-Core](#editor-core)
* [Plugin Changes](#pluginchanges)

## Editor-Core

To migrate the core TinyMCE editor to TinyMCE 6, review the following sections:

* [Cloud Delivery](#clouddelivery).
* [Option/setting changes](#optionsettingchanges).
* [Plugin Changes](#pluginchanges)

### Cloud Delivery

To use TinyMCE 6 from the {{site.cloudname}}, include this script in your HTML page. Replace 'no-api-key' with [your API key]({{site.accountsignup}}).

```html
<script src="{{ site.cdnurl }}" referrerpolicy="origin"></script>
```

For information on using the latest development and testing builds, see: [Cloud deployment guide - Specify editor & plugin versions]({{site.baseurl}}/cloud-deployment-guide/editor-plugin-version/).

### Option/Setting changes

#### Renamed Options

* The `default_link_target` option has been renamed to `link_default_target` for both `link` and `autolink` plugins.
* The `rel_list` option has been renamed to `link_rel_list` for the `link` plugin.
* The `target_list` option has been renamed to `link_target_list` for the `link` plugin.

### Plugin Changes

#### Horizontal rule plugin moved to TinyMCE Core

The Horizontal rule (`hr`) plugin has been moved to Core in {{site.productname}} 6.0.

The `hr` toolbar button and menu item will now work by default, without needing to specify `hr` as a plugin.

Integrators can remove `hr` from the `plugins` section of their {{site.productname}} configuration.

#### Print plugin moved to TinyMCE Core

The Print plugin has been moved to Core in {{site.productname}} 6.0.

The toolbar button, menu item, shortcut, and command for printing content are now available by default, without needing to specify `print` as a plugin.

Integrators can remove `print` from the `plugins` section of their {{site.productname}} configuration.