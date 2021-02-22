---
layout: default
title: TinyMCE 5.7
title_nav: TinyMCE 5.7
description: Release notes for TinyMCE 5.7
keywords: releasenotes bugfixes
---

## Overview

{{site.productname}} 5.7 was released for {{site.enterpriseversion}} and {{site.cloudname}} on Wednesday, February 24 <sup>th</sup>, 2021. It includes {{site.productname}} 5.7 and additional changes to premium plugins. These release notes provide an overview of the changes for {{site.productname}} 5.7, including:

- [New features](#newfeatures)
- [Enhancements](#enhancements)
- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [Accompanying Premium Skins and Icon Packs changes](#accompanyingpremiumskinsandiconpackschanges)
- [Accompanying Premium self-hosted server-side component changes](#accompanyingpremiumself-hostedserver-sidecomponentchanges)
- [General bug fixes](#generalbugfixes)
- [Deprecated features](#deprecatedfeatures)
- [Known issues](#knownissues)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

{{site.releasenotes_for_stable}}

## New features

The following new features were added for the {{site.productname}} 5.7 release.

### Added support for `table_column_resizing` when inserting and deleting table columns

When inserting or deleting table columns, the resizing behavior will now respect the `table_column_resizing` option:

- `table_column_resizing: 'preservetable'` - The columns will resize to fit the width of the table.
- `table_column_resizing: 'resizetable'` - The table will resize to fit the width of the columns.

For information on the `table_column_resizing` option, see: [Table plugin - `table_column_resizing`]({{ site.baseurl }}/plugins/opensource/table/#table_column_resizing).

### Added new `font_css` option

The `font_css` option loads the specified font CSS files into both the editable area and the webpage {{site.productname}} is rendered in. This is useful for ensuring that {{site.productname}} UI uses the correct fonts for font family examples and for content that uses those fonts, or for ensuring {{site.productname}} content and content outside the editor that should use the same fonts renders correctly.

For information on the `font_css` option, see: [Content Appearance - `font_css`]({{ site.baseurl }}/configure/content-appearance/#font-css).

## Enhancements

The following enhancements were made for the {{site.productname}} 5.7 release.

### Changes to notifications and popups when the editor is blocked

Notifications opened with the Notifications API will now remain visible when the editor's progress state is set to `true` using the {{ site.productname }} `setProgressState()` API. Additionally, popups within the editor (such as context menus and inline dialogs) will now be closed while the editor's progress state is set to `true`.

For information on:

- The {{ site.productname }} `setProgress()` API, see [Editor API - `setProgressState`]({{ site.baseurl }}/api/tinymce/tinymce.editor/#setprogressstate).
- The Notifications API, see [Create custom notifications]({{ site.baseurl }}/advanced/creating-custom-notifications).

### Table widths are now retained when copying and pasting tables

Tables copied to the clipboard when using the `table` plugin will now correctly retain the width of each column. Additionally, the table width will be correctly adjusted to account for the copied column widths.

### Improved behavior when using `lists` plugin on mixed content

The `lists` plugin has been updated to improve toggling lists on content containing:

- Multiple blocks of text.
- Combinations of existing lists and blocks of text.

### Media live embeds now support video and audio elements

The `media_live_embeds` option now supports rendering live embeds of `audio` and `video` elements while editing content. The elements can now also be resized without having to open a dialog to manually change the size.

For information on the `media_live_embeds` option, see: [Media plugin - `media_live_embeds`]({{site.baseurl}}/plugins/opensource/media/#media_live_embeds).

### Enhanced `TableModified` event data

The `TableModified` event now contains additional data which specifies whether the table structure, style, or both were modified.

For information on the `TableModified` event, see: [Table plugin - Events]({{ site.baseurl }}/plugins/opensource/table/#events).

### Added IPv6 URI parsing support

The {{site.productname}} `URI` API now supports parsing IPv6 URLs. This enhancement was a community contribution by dev7355608.

For information on the `URI` API, see: [URI]({{site.baseurl}}/api/tinymce.util/tinymce.util.uri/).

### Additional enhancements

{{site.productname}} 5.7 introduces the following minor enhancements:

- Added a new `ImageUploader` API to simplify uploading image data to the configured `images_upload_url` or `images_upload_handler`.
- Added an Oxide variable to define the container background color in fullscreen mode.
- Added Oxide variables for setting the toolbar background colors for inline and sticky toolbars.
- Added a new `AfterProgressState` event that is fired after `editor.setProgressState` calls complete.
- Changed the `advlist` plugin to log a console error message when the `list` plugin isn't enabled.
- Changed the z-index of the `setProgressState(true)` throbber so it does not hide notifications.
- Changed the type signature for `editor.selection.getRng()` incorrectly returning `null`.
- Changed some `SaxParser` regular expressions to improve performance.

## Accompanying Premium Plugin changes

The following premium plugin updates were released alongside {{site.productname}} 5.7.

### Advanced Tables 1.0.2

The {{site.productname}} 5.7 release includes an accompanying release of the **Advanced Tables** premium plugin.

**Advanced Tables** 1.0.2 fixes an issue where the `TableModified` event was not fired when sorting a table.

For information on the `TableModified` event, see: [Table plugin - Events]({{ site.baseurl }}/plugins/opensource/table/#events).

### Mentions 2.2.1

The {{site.productname}} 5.7 release includes an accompanying release of the **Mentions** premium plugin.

**Mentions** 2.2.1 provides the following bug fixes:

- Fixed hover cards not being visible in fullscreen mode.
- Fixed hover card not positioned correctly if the editor has scrolled.

For information on the Mentions plugin, see: [Mentions plugin]({{ site.baseurl }}/plugins/premium/mentions/).

### PowerPaste 5.4.1

The {{site.productname}} 5.7 release includes an accompanying release of the **PowerPaste** premium plugin.

**PowerPaste** 5.4.1 fixes an issue where file extensions with uppercase characters were treated as invalid.

For information on the PowerPaste plugin, see: [PowerPaste plugin]({{ site.baseurl }}/plugins/premium/powerpaste/).

### Spell Checker Pro 2.3.0

The {{site.productname}} 5.7 release includes an accompanying release of the **Spell Checker Pro** premium plugin.

#### Spell Checker Pro - New features

**Spell Checker Pro** 2.3.0 provides the following new features:

##### New Spell Checker Pro API

**Spell Checker Pro** 2.3.0 includes a new API with the following methods:

- `addIgnoredWords`
- `getLanguage`
- `setLanguage`

For information on the Spell Checker Pro API, see: [Spell Checker Pro - APIs]({{ site.baseurl }}/plugins/premium/tinymcespellchecker/#apis).

##### New Spell Checker Pro Commands

**Spell Checker Pro** 2.3.0 includes the following new commands:

- `mceSpellcheckEnable`
- `mceSpellcheckDisable`
- `mceSpellcheckDialog`
- `mceSpellcheckDialogClose`

For information on the Spell Checker Pro Commands, see: [Spell Checker Pro - Commands]({{ site.baseurl }}/plugins/premium/tinymcespellchecker/#commands).

##### New Spell Checker Pro Event

**Spell Checker Pro** introduces a new `SpellcheckerLanguageChanged` event which is fired when the active language is changed.

For information on the Spell Checker Pro Events, see: [Spell Checker Pro - `Events`]({{ site.baseurl }}/plugins/premium/tinymcespellchecker/#events).

#### Spell Checker Pro - Enhancements

**Spell Checker Pro** 2.3.0 provides the following enhancements:

##### The `spellchecker_ignore_list` option now accepts arrays of words for specific languages

**Spell Checker Pro** 2.3.0 introduces enhancements to the `spellchecker_ignore_list` (formerly `spellchecker_whitelist`, see: [The `spellchecker_whitelist` option has been renamed](#thespellchecker_whitelistoptionhasbeenrenamed)).

It is now possible to specify arrays of words for specific languages to be ignored by the Spell Checker Pro plugin using the `spellchecker_ignore_list` option, see: [Spell Checker Pro - `spellchecker_ignore_list`]({{ site.baseurl }}/plugins/premium/tinymcespellchecker/#spellchecker_ignore_list).

#### Spell Checker Pro - Bug fixes

**Spell Checker Pro** 2.3.0 provides the following bug fixes:

- Fixed a bug where it was possible to open multiple instances of the spellchecker dialog.
- Fixed a regression that caused errors to be thrown if the editor was destroyed while spellchecking.
- Fixed an issue where the spellchecker would incorrectly check content inside of special elements such as `style`.

For information on the Spell Checker Pro plugin, see: [Spell Checker Pro]({{ site.baseurl }}/plugins/premium/tinymcespellchecker/).

## Accompanying Premium Skins and Icon Packs changes

The {{site.productname}} 5.7 release includes an accompanying release of the **Premium Skins and Icon Packs**.

### Premium Skins and Icon Packs - New features

A new `bootstrap` icon pack is now available that provides [Bootstrap icons](https://icons.getbootstrap.com/) for {{site.productname}}.

For information on using premium skins and icon packs, see: [Premium Skins and Icon Packs]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/).

### Premium Skins and Icon Packs - Bug fixes

The **Premium Skins and Icon Packs** release includes the following bug fixes:

- Fixes an issue where the Snow skin had a transparent inline and sticky toolbar, as well as a transparent toolbar in fullscreen mode.
- Fixes an issue where the Snow skin special characters and emoticons dialog icons disappeared on hover.

For information on using premium skins and icon packs, see: [Premium Skins and Icon Packs]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/).

## Accompanying Premium self-hosted server-side component changes

The {{site.productname}} 5.7 release includes accompanying changes affecting the {{site.productname}} **self-hosted** services for the following plugins:

- The Enhanced Media Embed plugin (`mediaembed`)
- The Image Tools plugin (`imagetools`)
- The Link Checker plugin (`linkchecker`)
- The Spell Checker Pro plugin (`tinymcespellchecker`)

The Java server-side components (`ephox-spelling.war`, `ephox-hyperlinking.war`, and `ephox-image-proxy.war`) have been updated to **version 2.102**.

This version upgraded and replaced internal dependencies to provide upstream bug fixes and smaller `.war` archives.

For information on:

- The Spell Checker Pro plugin, see: [Spell Checker Pro plugin]({{site.baseurl}}/plugins/premium/tinymcespellchecker/).
- The Link Checker plugin, see: [Link Checker plugin]({{site.baseurl}}/plugins/premium/linkchecker/).
- The Image Tools plugin, see: [Image Tools plugin]({{site.baseurl}}/plugins/opensource/imagetools/).
- The Enhanced Media Embed plugin, see: [Enhanced Media Embed plugin]({{site.baseurl}}/plugins/premium/mediaembed/).
- Deploying the server-side components, see: [Server-side component installation]({{site.baseurl}}/enterprise/server/).

## General bug fixes

{{site.productname}} 5.7 provides fixes for the following bugs:

- Fixed `codesample` highlighting performance issues for some languages.
- Fixed an issue where cell widths were lost when merging table cells.
- Fixed `col` elements incorrectly transformed to `th` elements when converting columns to header columns.
- Fixed a number of table operations not working when selecting 2 table cells on Mozilla Firefox.
- Fixed a memory leak by backporting an upstream Sizzle fix.
- Fixed table `width` style was removed when copying.
- Fixed focus lost while typing in the `charmap` or `emoticons` dialogs when the editor is rendered in a shadow root.
- Fixed corruption of base64 URLs used in style attributes when parsing HTML.
- Fixed the order of CSS precedence of `content_style` and `content_css` in the `preview` and `template` plugins. `content_style` now has precedence.
- Fixed an issue where the image dialog tried to calculate image dimensions for an empty image URL.
- Fixed an issue where `scope` attributes on table cells would not change as expected when merging or unmerging cells.
- Fixed the plugin documentation links in the `help` plugin.
- Fixed events bound using `DOMUtils` not returning the correct result for `isDefaultPrevented` in some cases.
- Fixed the "Dropped file type is not supported" notification incorrectly showing when using an inline editor.
- Fixed an issue with external styles bleeding into TinyMCE.
- Fixed an issue where parsing malformed comments could cause an infinite loop.
- Fixed incorrect return types on `editor.selection.moveToBookmark`.
- Fixed the type signature for `editor.selection.setCursorLocation()` incorrectly allowing a node with no `offset`.
- Fixed incorrect behavior when editor is destroyed while loading stylesheets.
- Fixed figure elements incorrectly splitting from a valid parent element when editing the image within.
- Fixed inserting multiple rows or columns in a table cloning from the incorrect source row or column.
- Fixed an issue where new lines were not scrolled into view when pressing Shift+Enter or Shift+Return.
- Fixed an issue where list elements would not be removed when outdenting using the Enter or Return key.
- Fixed an issue where file extensions with uppercase characters were treated as invalid.
- Fixed dialog block messages were not passed through TinyMCE's translation system.

## Deprecated features

The following features have been deprecated with the release of {{site.productname}} 5.7:

- [The `spellchecker_whitelist` option has been renamed](#thespellchecker_whitelistoptionhasbeenrenamed).

### The `spellchecker_whitelist` option has been renamed

With the release of {{site.productname}} 5.7, the `spellchecker_whitelist` option has been renamed to `spellchecker_ignore_list`.

For information on the `spellchecker_ignore_list` option, see: [Spell Checker Pro - `spellchecker_ignore_list`]({{ site.baseurl }}/plugins/premium/tinymcespellchecker/#spellchecker_ignore_list).

## Known issues

This section describes issues that users of {{site.productname}} 5.7 may encounter and possible workarounds for these issues.

**Outline**

- [](#)

###

**Issue**: This issue affects ....

**Workaround**: There was no known workaround at the time of the release.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
