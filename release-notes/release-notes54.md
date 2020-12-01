---
layout: default
title: TinyMCE 5.4
title_nav: TinyMCE 5.4
description: Release notes for TinyMCE 5.4
keywords: releasenotes bugfixes
---

## Overview

{{site.productname}} 5.4 was released for {{site.enterpriseversion}} and {{site.cloudname}} on Thursday, July 23<sup>rd</sup>, 2020. It includes {{site.productname}} 5.4.1 and additional changes to premium plugins. These release notes provide an overview of the changes for {{site.productname}} 5.4, including:

- [TinyMCE 5.4 new features and enhancements](#tinymce54newfeaturesandenhancements)
- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [Accompanying Premium self-hosted server-side component changes](#accompanyingpremiumself-hostedserver-sidecomponentchanges)
- [Minor changes for TinyMCE 5.4](#minorchangesfortinymce54)
- [General bug fixes](#generalbugfixes)
- [Security fixes](#securityfixes)
- [Deprecated features](#deprecatedfeatures)
- [Known issues](#knownissues)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

{{site.releasenotes_for_stable}}

## TinyMCE 5.4 new features and enhancements

The following new features and enhancements were added for the {{site.productname}} 5.4 release.

### Updates and additions to the Table plugin

The {{site.productname}} 5.4 release includes the following improvements for the table (`table`) plugin:

- Adds: commands, APIs, and icons for; cut, copy, and paste columns.
- Adds toolbar button icons for the cut, copy, and paste rows.
- Adds a new [`mceTableApplyCellStyle`]({{site.baseurl}}/plugins/opensource/table/#commands) command for applying selected styles to table cells.
- Adds a new [`table_header_type`]({{site.baseurl}}/plugins/opensource/table/#table_header_type) option for setting the HTML structure used for table header rows.
- Adds table row, column, and cell type commands and queries.
- Adds a new [`table_sizing_mode`]({{site.baseurl}}/plugins/opensource/table/#table_sizing_mode) option and a new [`mceTableSizingMode`]({{site.baseurl}}/plugins/opensource/table/#commands) command for setting the method for measuring table cell width: `fixed`, `relative`, or `responsive`.
- Extends the [`mceInsertTable`]({{site.baseurl}}/plugins/opensource/table/#commands) command for adding tables without the dialog.

For information on the table plugin, see: [Table plugin]({{site.baseurl}}/plugins/opensource/table/).

For a list of:

- Menu items, including table-related menu items and menu sections, see: [Menu Items Available for {{site.productname}}]({{site.baseurl}}/advanced/available-menu-items/).
- Available icons, including table-related icons, see: [Available icons]({{site.baseurl}}/advanced/editor-icon-identifiers/).
- Table plugin APIs, see: [Table plugin - APIs]({{site.baseurl}}/plugins/opensource/table/#api).
- Table plugin commands, see: [Table plugin - Commands]({{site.baseurl}}/plugins/opensource/table/#commands).

### Icon identifiers are now case-insensitive

To simplify creating custom components and plugins, the icon look-up is now case-insensitive. This will assist with adding icons to custom toolbar buttons, menu sections, and menu items.

For list of icons provided with {{site.productname}}, see: [Available icons]({{site.baseurl}}/advanced/editor-icon-identifiers/).

For information on:

- Creating custom UI components, see: [User interface components]({{site.baseurl}}/ui-components/).
- Creating and adding a custom icon pack, see: [Create an icon pack for TinyMCE]({{site.baseurl}}/advanced/creating-an-icon-pack/).

### New option for blocking unsupported files from being drag and dropped into the editor

The `block_unsupported_drop` option blocks unsupported images and files from being dropped into the editor. This option is enabled by default. If this option is disabled (`false`), users can drop an unsupported file into the editor, which will cause the browser to navigate away from the page containing the editor.

For information on the `block_unsupported_drop` option, see: [Image & file options - `block_unsupported_drop`]({{site.baseurl}}/configure/file-image-upload/#block_unsupported_drop).

## Accompanying Premium Plugin changes

The following premium plugin updates were released alongside {{site.productname}} 5.4.

### Advanced Code Editor 2.1.0

The {{site.productname}} 5.4 release includes an accompanying release of the **Advanced Code Editor** premium plugin.

**Advanced Code Editor** 2.1.0 provides the following improvements:

- Added search/replace support.
- Fixed the editor `referrer_policy` option not working when loading additional resources.

For information on the Advanced Code Editor plugin, see: [Advanced Code Editor plugin]({{site.baseurl}}/plugins/premium/advcode/).

### PowerPaste 5.3.1

The {{site.productname}} 5.4 release includes an accompanying release of the **PowerPaste** premium plugin.

**PowerPaste** 5.3.1 provides the following improvements:

- Fixed PowerPaste not able to load the `wordimport.js` resource when bundled.
- Fixed the editor `referrer_policy` option not working when loading additional resources.

For information on the PowerPaste plugin, see: [PowerPaste plugin]({{site.baseurl}}/plugins/premium/powerpaste/).

## Accompanying Premium self-hosted server-side component changes

The {{site.productname}} 5.4 release includes accompanying changes affecting the {{site.productname}} **self-hosted** services for the following plugins:

- The Enhanced Media Embed plugin (`mediaembed`)
- The Image Tools plugin (`imagetools`)
- The Link Checker plugin (`linkchecker`)
- The Spell Checker Pro plugin (`tinymcespellchecker`)

The Java server-side components (`ephox-spelling.war`, `ephox-hyperlinking.war`, and `ephox-image-proxy.war`) have been updated to **version 2.5.0**.

This version requires Java 8 or higher. For information on the removal of Java 7 support, see: [Removal of Java 7 support for TinyMCE 5.3 and later]({{site.baseurl}}/release-notes/release-notes53/#removalofjava7support).

For information on:

- The Spell Checker Pro plugin, see: [Spell Checker Pro plugin]({{site.baseurl}}/plugins/premium/tinymcespellchecker/).
- The Link Checker plugin, see: [Link Checker plugin]({{site.baseurl}}/plugins/premium/linkchecker/).
- The Image Tools plugin, see: [Image Tools plugin]({{site.baseurl}}/plugins/opensource/imagetools/).
- The Enhanced Media Embed plugin, see: [Enhanced Media Embed plugin]({{site.baseurl}}/plugins/premium/mediaembed/).
- Deploying the server-side components, see: [Server-side component installation]({{site.baseurl}}/enterprise/server/).

### Security update for self-hosted server-side components

Version 2.5.0 provides security updates for the Java-based server-side components. To deploy the updated version of the server-side components:

1. Update your Java Application Server to the new minimum required version:

    - Eclipse Jetty 9.4 or later
    - Apache Tomcat:
        - 9 or later
        - 8.5.12+
        - 8.0.42+
        - 7.0.76+

2. Replace the existing server-side `.war` files with the version 2.5.0 `.war` files bundled with {{site.productname}} 5.4 or later.

For information on:

- Deploying the server-side components, see: [Server-side component installation]({{site.baseurl}}/enterprise/server/).
- Deploying the server-side components using Docker, see: [Containerized service deployments]({{site.baseurl}}/enterprise/server/dockerservices/).

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
* Fixed the Search and Replace plugin incorrectly including zero-width caret characters in search results.
* Fixed dragging and dropping unsupported files navigating the browser away from the editor.
* Fixed undo levels not created on browser handled drop or paste events.
* Fixed Oxide checklist styles not showing when printing.
* Fixed bug with `scope` attribute not being added to the cells of header rows.

## Security fixes

{{site.productname}} 5.4 provides fixes for the following security issues:

* Fixed content in an iframe element parsing as DOM elements instead of text content.

## Deprecated features

The following features have been deprecated with the release of {{site.productname}} 5.4:

- [The free TinyMCE Spell Checker plugin](#thefreetinymcespellcheckerplugin).
- [The `table_responsive_width` option in the Table plugin](#thetable_responsive_widthoption).

### The free TinyMCE Spell Checker plugin

The **free** {{site.productname}} Spell Checker plugin (`spellchecker`) has been deprecated and will be removed in a future major release of {{site.productname}}. This includes both the editor plugin and the PHP backend program.

This change **_does not_** affect:

- [The Spellchecker Pro premium plugin]({{site.baseurl}}/plugins/premium/tinymcespellchecker/).
- [Browser-based spell checking in {{site.productname}}]({{site.baseurl}}/general-configuration-guide/spell-checking/#browser-basedspellchecking).

To develop and maintain a new spellchecking plugin based on the free {{site.productname}} Spell Checker plugin:

- Fork the PHP backend program from the [_tinymce/tinymce_spellchecker_php_ GitHub repository](https://github.com/tinymce/tinymce_spellchecker_php).
- Extract the Spell Checker user interface from the [Spellchecker plugin directory in the _tinymce/tinymce_ GitHub repository](https://github.com/tinymce/tinymce/tree/develop/modules/tinymce/src/plugins/spellchecker).

### The `table_responsive_width` option

The `table_responsive_width` option has been deprecated with the release of {{site.productname}} 5.4. This option has been replaced by [`table_sizing_mode`]({{site.baseurl}}/plugins/opensource/table/#table_sizing_mode).

## Known issues

This section describes issues that users of {{site.productname}} 5.4 may encounter, as well as possible workarounds for these issues.

**Outline**

* [Top and bottom editor anchors appear in links autocomplete list when disabled](#topandbottomeditoranchorsappearinlinksautocompletelistwhendisabled)

### Top and bottom editor anchors appear in links autocomplete list when disabled

#### Issue

This issue affects the following options:

- `anchor_top`
- `anchor_bottom`

When these options are set to `false`, the relevant anchors should not appear as autocomplete options in the link dialog. These anchors will appear in the autocomplete list when these options are set to `false` in {{site.productname}} 5.4.0 and {{site.productname}} 5.4.1.

For information on:

- The `anchor_top` option, see: [URL handling options - `anchor_top`]({{site.baseurl}}/configure/url-handling/#anchor_top).
- The `anchor_bottom` option, see: [URL handling options - `anchor_bottom`]({{site.baseurl}}/configure/url-handling/#anchor_bottom).

#### Workaround

To disable all autocomplete/typeahead URLs in the link dialog, set the `typeahead_urls` option to `false`.

For example:

```js
tinymce.init({
  selector: 'textarea',
  typeahead_urls: false
});
```

For information on the `typeahead_urls` option, see: [Advanced editing behaviors - `typeahead_urls`]({{site.baseurl}}/configure/advanced-editing-behavior/#typeahead_urls).

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
