---
layout: default
title: TinyMCE 5.2.1
title_nav: TinyMCE 5.2.1
description: Release notes for TinyMCE 5.2.1
keywords: releasenotes bugfixes
---

These release notes provide an overview of the changes for {{site.productname}} 5.2.1, including:

- [General bug fixes](#generalbugfixes)
- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

> This is the {{site.cloudname}} and {{site.enterpriseversion}} release notes. For information on the latest community version of {{site.productname}}, see: [{{site.productname}} Changelog]({{site.baseurl}}/changelog/).

## General bug fixes

{{site.productname}} 5.2.1 provides fixes for the following bugs:

* Fixed the "is decorative" checkbox in the image dialog clearing after certain editor events.
* Fixed possible uncaught exception when a `style` attribute is removed using a content filter on `setContent`.
* Fixed the table selection not functioning correctly in Microsoft Edge 44 or higher.
* Fixed the table resize handles not functioning correctly in Microsoft Edge 44 or higher.
* Fixed the floating toolbar drawer disconnecting from the toolbar when adding content in inline mode.
* Fixed `readonly` mode not returning the appropriate boolean value.
* Fixed the `forced_root_block_attrs` setting not applying attributes to new blocks consistently.
* Fixed the editor incorrectly stealing focus during initialization in Microsoft Internet Explorer.
* Fixed dialogs stealing focus when opening an alert or confirm dialog using an `onAction` callback.
* Fixed inline dialogs incorrectly closing when clicking on an opened alert or confirm dialog.
* Fixed the context toolbar overlapping the menu bar and toolbar.
* Fixed notification and inline dialog positioning issues when using `toolbar_location: 'bottom'`.
* Fixed the `colorinput` popup appearing offscreen on mobile devices.
* Fixed special characters not being found when searching by "whole words only".
* Fixed an issue where dragging images could cause them to be duplicated.
* Fixed context toolbars activating without the editor having focus.
* Fixed an issue where removing the background color of text did not always work.
* Fixed an issue where new rows and columns in a table did not retain the style of the previous row or column.

## Accompanying Premium Plugin changes

The following premium plugins updates were released alongside {{site.productname}} 5.2.1.

### Case Change 1.0.1

The {{site.productname}} 5.2.1 release includes an accompanying release of the **Case Change** premium plugin.

### Comments 2.1.3

The {{site.productname}} 5.2.1 release includes an accompanying release of the **Comments** premium plugin.

### PowerPaste 5.2.2

The {{site.productname}} 5.2.1 release includes an accompanying release of the **PowerPaste** premium plugin.

**PowerPaste** 5.2.2 provides a fix for PowerPaste not respecting the [`cache_suffix` setting]({{site.baseurl}}/configure/integration-and-setup/#cache_suffix).

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
