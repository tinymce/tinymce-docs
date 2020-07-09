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
- Adds a new `table_sizing_mode` option and a new `mceTableSizingMode` command for setting the method for measuring table cell width: `fixed`, `relative`, or `responsive`.
- Adds a new `mceTableApplyCellStyle` command for applying selected styles to table cells.
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

### Advanced Code Editor 2.1.0

The {{site.productname}} 5.4 release includes an accompanying release of the **Advanced Code Editor** premium plugin.

**Advanced Code Editor** 2.1.0 provides the following improvements:

- Added search/replace support.
- Fixed the editor `referrer_policy` option not working when loading additional resources.

For information on the Advanced Code Editor plugin, see: [Advanced Code Editor plugin]({{site.baseurl}}/plugins/advcode/).

### PowerPaste 5.3.1

The {{site.productname}} 5.4 release includes an accompanying release of the **PowerPaste** premium plugin.

**PowerPaste** 5.3.1 provides the following improvements:

- Fixed PowerPaste not able to load the `wordimport.js` resource when bundled.
- Fixed the editor `referrer_policy` option not working when loading additional resources.

For information on the PowerPaste plugin, see: [PowerPaste plugin]({{site.baseurl}}/plugins/powerpaste/).

## Minor changes for TinyMCE 5.4

{{site.productname}} 5.4 introduces the following minor changes:

* Added keyboard navigation support to menus and toolbars when the editor is in a ShadowRoot.
* Added the ability for menus to be clicked when the editor is in an open shadow root.
* Added the `Editor.ui.styleSheetLoader` API for loading stylesheets within the Document or ShadowRoot containing the editor UI.
* Added the `StyleSheetLoader` module to the public API.
* Added Oxide variables for styling the `select` element and headings in dialog content.
* Added font related Oxide variables for secondary buttons, allowing for custom styling.
* Changed `advlist` toolbar buttons to only show a dropdown list if there is more than one option.
* Changed stylesheet loading, so that UI skin stylesheets can load in a ShadowRoot if required.
* Changed the DOM location of menus so that they display correctly when the editor is in a ShadowRoot.
* Changed the table plugin to correctly detect all valid header row structures.

## General bug fixes

{{site.productname}} 5.4 provides fixes for the following bugs:

* Fixed tables with no defined width being converted to a `fixed` width table when modifying the table.
* Fixed the `autosave` `isEmpty` API incorrectly detecting non-empty content as empty.
* Fixed table `Paste row after` and `Paste row before` menu items not disabled when nothing was available to paste.
* Fixed a selection performance issue with large tables on Microsoft Internet Explorer and Edge.
* Fixed filters for screening commands from the undo stack to be case-insensitive.
* Fixed `fullscreen` plugin now removes all classes when the editor is closed.
* Fixed handling of mixed-case icon identifiers (names) for UI elements.
* Fixed leading and trailing spaces lost when using `editor.selection.getContent({ format: 'text' })`.
* Fixed an issue where changing the URL with the quicklink toolbar caused unexpected undo behavior.
* Fixed an issue where removing formatting within a table cell would cause Internet Explorer 11 to scroll to the end of the table.
* Fixed an issue where the `allow_html_data_urls` setting was not correctly applied.
* Fixed the `autolink` feature so that it no longer treats a string with multiple "@" characters as an email address.
* Fixed an issue where removing the editor would leave unexpected attributes on the target element.
* Fixed the `link` plugin now suggest `mailto:` when the text contains an '@' and no slashes (`/`).
* Fixed the `valid_children` check of custom elements now allows a wider range of characters in names.

## Deprecated features

The `table_responsive_width` option has been deprecated with the release of {{site.productname}} 5.4. This option has been replaced by [`table_sizing_mode`]({{site.baseurl}}/plugins/table/#table_sizing_mode).

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
