---
layout: default
title: Migrating from TinyMCE 5 to TinyMCE 6.
title_nav: Migrating from TinyMCE 5
description: Guidance for migrating from TinyMCE 5 to TinyMCE 6.
keywords: migration considerations premigration pre-migration
---

<!-- A very preliminary outline and structure for the TinyMCE 5 to TinyMCE 6 migration guide. Lot’s of potentially unfounded assumptions in this but it’s something to critique at least.

Perhaps the most important critique, even before we start is the following: ‘editor-core, and apis and options do overlap somewhat’. So it’s possible a different structure is better.

All thoughts and suggestions on this front entirely welcome. -->

Most configuration changes in TinyMCE 6 only affect complex use cases, such as customized user interface components. The process for setting up a basic TinyMCE 6 instance is the same as TinyMCE 5.

This chapter describes the migration process and workarounds for customers using TinyMCE 5. It describes the settings that require updating prior to migration; and workaround procedures for deprecated, deleted, and updated features.

> **Note**: For support related to migration, please contact [Tiny support](https://support.tiny.cloud/hc/en-us/requests/new). Open Source users: Please report issues on the [TinyMCE GitHub Repository](https://github.com/tinymce/tinymce/).

## Contents

* [Editor-Core](#editor-core)
* [APIs](#apis)
* [Options](#options)
* [Plugins](#plugins)


## Editor-Core

To migrate the core TinyMCE editor to TinyMCE 6, review the following sections:

* [Cloud Delivery](#clouddelivery).
* [editor-core section 2](#editor-core-section-2).
* [editor-core section 3](#editor-core-section-3).
* [editor-core section 4](#editor-core-section-4).
* [editor-core section n](#editor-core-section-n).

### Cloud Delivery

To use TinyMCE 6 from the {{site.cloudname}}, include this script in your HTML page. Replace ‘no-api-key’ with [your API key]({{site.accountsignup}}).

```html
<script src="{{ site.cdnurl }}" referrerpolicy="origin"></script>
```

For information on using the latest development and testing builds, see: [Cloud deployment guide - Specify editor & plugin versions]({{site.baseurl}}/cloud-deployment-guide/editor-plugin-version/).

### editor-core section 2

editor-core section 2 placeholder text.

### editor-core section 3

editor-core section 3 placeholder text.

### editor-core section 4

editor-core section 4 placeholder text.

### editor-core section n

editor-core section n placeholder text.



## APIs

* [APIs section 1](#apis-section-1).
* [APIs section 2](#apis-section-2).
* [APIs section 3](#apis-section-3).
* [APIs section 4](#apis-section-4).
* [APIs section n](#apis-section-n).

### APIs section 1

APIs section 1 placeholder text.

### APIs section 2

APIs section 2 placeholder text.

### APIs section 3

APIs section 3 placeholder text.

### APIs section 4

APIs section 4 placeholder text.

### APIs section n

APIs section n placeholder text.



## Options

* [Options section 1](#options-section-1).
* [Options section 2](#options-section-2).
* [Options section 3](#options-section-3).
* [Options section 4](#options-section-4).
* [Options section n](#options-section-n).

### Options section 1

Options section 1 placeholder text.

### Options section 2

Options section 2 placeholder text.

### Options section 3

Options section 3 placeholder text.

### Options section 4

Options section 4 placeholder text.

### Options section n

Options section n placeholder text.



## Plugins

* [Plugins section 1](#plugins-section-1).
* [Plugins section 2](#plugins-section-2).
* [Plugins section 3](#plugins-section-3).
* [Plugins section 4](#plugins-section-4).
* [Plugins section n](#plugins-section-n).

### Plugins section 1

Plugins section 1 placeholder text.

### Plugins section 2

Plugins section 2 placeholder text.

### Plugins section 3

Plugins section 3 placeholder text.

### Plugins section 4

Plugins section 4 placeholder text.

### Plugins section n

Plugins section n placeholder text.
