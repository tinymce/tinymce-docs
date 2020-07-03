---
layout: default
title: TinyMCE 5.4
title_nav: TinyMCE 5.4
description: Release notes for TinyMCE 5.4
keywords: releasenotes bugfixes
---

These release notes provide an overview of the changes for {{site.productname}} 5.4, including:

- [TinyMCE 5.4 new features and enhancements](#tinymce54newfeaturesandenhancements)
- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [Accompanying premium self-hosted server-side component changes](#accompanyingpremiumself-hostedserver-sidecomponentchanges)
- [Minor changes for TinyMCE 5.4](#minorchangesfortinymce54)
- [General bug fixes](#generalbugfixes)
- [Deprecated features](#deprecatedfeatures)
- [Known issues](#knownissues)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

> This is the {{site.cloudname}} and {{site.enterpriseversion}} release notes. For information on the latest community version of {{site.productname}}, see: [{{site.productname}} Changelog]({{site.baseurl}}/changelog/).

## TinyMCE 5.4 new features and enhancements

The following new features and enhancements were added for the {{site.productname}} 5.4 release.

### Updates and additions to the Table plugin

The {{site.productname}} 5.4 release includes the following improvements for the table (`table`) plugin:

- Adds: commands, APIs, and icons for; cut, copy, and paste columns.
- Adds toolbar button icons for the cut, copy, and paste rows.
- Adds a new `mceTableApplyCellStyle`command for applying selected styles to table cells.
- Adds a new `table_header_type` option for setting the structure used for table header rows.
- Adds table row, column, and cell type commands and queries.
- Extends the `mceInsertTable` command for adding tables without the dialog.

For information on the table plugin, see: [Table plugin]({{site.baseurl}}/plugins/table/).

For a list of:

- Menu items, including table-related menu items and menu sections, see: [Editor control identifiers - Menu controls]({{site.baseurl}}/advanced/editor-control-identifiers/#menucontrols).
- Available icons, including table-related icons, see: [Editor icon identifiers]({{site.baseurl}}/advanced/editor-icon-identifiers/).
- Table plugin APIs, see: [Table plugin - APIs]({{site.baseurl}}/plugins/table/#api).
- Table plugin commands, see: [Table plugin - Commands]({{site.baseurl}}/plugins/table/#commands).

### Icon identifiers are now case-insensitive

To simplify creating custom components and plugins, the icon look-up is now case-insensitive. This will assist with adding icons to custom toolbar buttons, menu sections, and menu items.

For list of icons provided with {{site.productname}}, see: [Editor icon identifiers]({{site.baseurl}}/advanced/editor-icon-identifiers/).

For information on:

- Creating custom UI components, see: [User interface components]({{site.baseurl}}/ui-components/).
- Creating and adding a custom icon pack, see: [Create an icon pack for TinyMCE]({{site.baseurl}}/advanced/creating-an-icon-pack/).

## Accompanying Premium Plugin changes

The following premium plugin updates were released alongside {{site.productname}} 5.4.

### Accessibility Checker 2.x.x

The {{site.productname}} 5.4 release includes an accompanying release of the **Accessibility Checker** premium plugin.

**Accessibility Checker** 2.x.x

For information on the Accessibility Checker plugin, see: [Accessibility Checker plugin]({{site.baseurl}}/plugins/a11ychecker/).

## Accompanying premium self-hosted server-side component changes

The {{site.productname}} 5.4 release includes accompanying changes affecting the {{site.productname}} **self-hosted** services for the following plugins:

-


###


## Minor changes for TinyMCE 5.4

{{site.productname}} 5.4 introduces the following minor changes:


## General bug fixes

{{site.productname}} 5.4 provides fixes for the following bugs:


## Deprecated features



## Known issues

This section describes issues that users of {{site.productname}} 5.4 may encounter, as well as possible workarounds for these issues.

**Outline**

* []()

###

#### Issue

#### Workaround

No known workaround at the time of release.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
