---
layout: default
title: Removed &amp; deprecated features
title_nav: Removed &amp; deprecated features
description: This section is a summary of all the deleted features in TinyMCE 5.0 Beta.
keywords: deleted removed features enhancements technology preview
---

In TinyMCE 5.0, some configurations have been removed because they are no longer necessary or an improved solution has been introduced. Please see the [Migration Guide]({{site.baseurl}}/migrating-from-4x/) for more information.

### Editor-Core Removed Settings

| **Setting** | **Description** |
| ----------- | --------------- |
| `fixed_toolbar_container` | **fixed_toolbar_container**: Owing to the enhancements to the new inline toolbar behaviour, `fixed_toolbar_container` is not required in TinyMCE 5.0. |

### Removed Themes

* [Inlite]({{site.baseurl}}/migration-from-4x/#inlite)
* [Modern]({{site.baseurl}}/migration-from-4x/#modern)

### Removed Events

| **Removed Event** | **Description**|
| ----------------- | -------------- |
| BeforeRenderUi | Fired before the UI was rendered. |

### Removed Toolbar Button Types

[Listbox](https://www.tiny.cloud/docs/demo/custom-toolbar-listbox/) is no longer a supported toolbar button type in TinyMCE 5.0. Though listbox has been removed, any functionality provided by custom listbox toolbar buttons can be retained by switching to a different kind of toolbar button using the new methods. The recommended toolbar button type to switch to is the **Split** button.

### Removed Features

The following plugins from TinyMCE 4.x do not require height or width options to be specified in TinyMCE 5.0:

* [Code]({{site.baseurl}}/plugins/code/)
* [Codesample]({{site.baseurl}}plugins/codesample/)
* [Preview]({{site.baseurl}}plugins/preview/)
* [Template]({{site.baseurl}}plugins/template/)

Please see the [Migration Guide]({{site.baseurl}}/migrating-from-4x/) for more information.

### Other Removed Component Configuration Settings

Some UI configurations in TinyMCE 5.0 have changed due to an updated UI engine. Please see this [section]({{site.baseurl}}/migrating-from-4x/#otherremovedcomponentconfigurationsettings) of the Migration Guide for more information.