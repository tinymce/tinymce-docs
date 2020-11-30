---
layout: default
title: TinyMCE 5.6
title_nav: TinyMCE 5.6
description: Release notes for TinyMCE 5.6
keywords: releasenotes bugfixes
---

## Overview

{{site.productname}} 5.6 was released for {{site.enterpriseversion}} and {{site.cloudname}} on Tuesday, December 8<sup>th</sup>, 2020. It includes {{site.productname}} 5.6.1 and additional changes to premium plugins. These release notes provide an overview of the changes for {{site.productname}} 5.6, including:

- [TinyMCE 5.6 new features and enhancements](#tinymce56newfeaturesandenhancements)
- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [Accompanying Premium self-hosted server-side component changes](#accompanyingpremiumself-hostedserver-sidecomponentchanges)
- [Minor changes for TinyMCE 5.6](#minorchangesfortinymce56)
- [General bug fixes](#generalbugfixes)
- [Security fixes](#securityfixes)
- [Deprecated features](#deprecatedfeatures)
- [Known issues](#knownissues)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

{{site.releasenotes_for_stable}}

## TinyMCE 5.6 new features and enhancements

The following new features and enhancements were added for the {{site.productname}} 5.6 release.

### New `images_file_types` option for customizing recognized image file extensions

The new `images_file_types` option allows different image file extensions to be recognized by:

- Smart Paste's image URL to embedded image functionality.
- Allowed file extensions for the Image plugin.

For information on:

- The `images_file_types` and `smart_paste` options for the PowerPaste plugin, see: [PowerPaste plugin]({{site.baseurl}}/plugins/premium/powerpaste/).
- The `images_file_types` and `smart_paste` options for the Paste plugin, see: [Paste plugin]({{site.baseurl}}/plugins/opensource/paste/).
- The `images_file_types` option for the Image plugin, see: [Image plugin]({{site.baseurl}}/plugins/opensource/image/).

### New image emoji database for the Emoticons plugin

A new `emojiimages` database has been added to the Emoticons plugin. This database uses images provided by the Twitter Emoji (twemoji) project to render emojis in the content.

{% assign feature = "`emojiimages` database" %}
{% assign third_party_product = "Twitter Emoji (Twemoji) graphics" %}
{% assign license_agreement_name = "CC-BY 4.0" %}
{% include misc/under-license.md %}

A new `emoticons_database` option has been added to specify which built-in emoji database to use in the editor. Additionally, a new `emoticons_images_url` option has been added to configure the base URL for images used in the `emojiimages` database.

For information on:

- The `emojiimages` database and `emoticons_database` option, see: [Emoticons plugin - `emoticons_database`]({{ site.baseurl }}/plugins/opensource/emoticons/#emoticons_database).
- The `emoticons_images_url` option, see: [Emoticons plugin - `emoticons_images_url`]({{ site.baseurl }}/plugins/opensource/emoticons/#emoticons_images_url).

### New `format_empty_lines` option for content formatting

A new `format_empty_lines` option allows empty lines to be formatted for multi-line selections when applying an "inline" format such as bold (`<strong>`).

For information on the `format_empty_lines` option, see: [Content Formatting - `format_empty_lines`]({{ site.baseurl }}/configure/content-formatting/#format_empty_lines).

### New editor events

{{site.productname}} 5.6 introduces several new events that integrators can use for custom functionality:

- A new `TableModified` event which is fired when a style or structural change is made to a table.
- Two new core events which are fired before and after displaying notifications.

For information on:

- The `TableModified` event, see: [Table plugin - `events`]({{ site.baseurl }}/plugins/opensource/table/#events).
- Core editor events, see: [Editor core events]({{ site.baseurl }}/advanced/events/#editorcoreevents).

### New optional `name` field for the `style_formats` option

A new optional `name` field that sets a specific name to the format when it's being registered using the `style_formats` option.

For information on the `name` field, see: [User interface - `style_formats`]({{ site.baseurl }}/configure/editor-appearance/#style_formats).

### New card menu item for the autocompleter

A new card menu item has been added to the autocompleter, allowing for greater customization of the autocompleter results displayed to the user.

For information on customizing autocompleter results with `CardMenuItem`, see: [UI components - Autocompleter - `CardMenuItem`]({{ site.baseurl }}/ui-components/autocompleter/#cardmenuitem).

### Clicking a link in `readonly` mode now opens the URL

Clicking links when the editor is in `readonly` mode will open the URL in a new tab or window (depending on browser preferences).

## Accompanying Premium Plugin changes

The following premium plugin updates were released alongside {{site.productname}} 5.6.

### Accessibility Checker 2.3.1

The {{site.productname}} 5.6 release includes an accompanying release of the **Accessibility Checker** premium plugin.

**Accessibility Checker** 2.3.1 fixes an issue where internal {{site.productname}} elements were not ignored.

For information on the Accessibility Checker plugin, see: [Accessibility Checker plugin]({{site.baseurl}}/plugins/premium/a11ychecker/).

### Advanced Code Editor 2.3.0

The {{site.productname}} 5.6 release includes an accompanying release of the **Advanced Code Editor** premium plugin.

**Advanced Code Editor** 2.3.0 provides the following improvements:

- Added the ability to maintain the cursor position when opening the code dialog.
- Fixed the code view not using monospace fonts.
- Fixed an issue where non-breaking spaces were inserted instead of regular spaces on Safari.

For information on the Advanced Code Editor plugin, see: [Advanced Code Editor plugin]({{site.baseurl}}/plugins/premium/advcode/).

### Comments 2.3.0

The {{site.productname}} 5.6 release includes an accompanying release of the **Comments** premium plugin.

**Comments** 2.3.0 introduces `onError` and `onSuccess` callbacks for the `tinycomments_create` "done" function.

**Comments** 2.3.0 also provides the following bug fixes:

- Fixed nested and overlapping comments breaking the content.
- Fixed long comments getting cut off.
- Fixed a scrollbar appearing in the textarea when writing a comment.

For information on the Comments plugin, see: [Comments plugin]({{site.baseurl}}/plugins/premium/comments/).

### Mentions 2.2.0

The {{site.productname}} 5.6 release includes an accompanying release of the **Mentions** premium plugin.

**Mentions** 2.2.0 provides the following improvements:

- Added a new `mentions_item_type` option for specifying which mentions user interface item to use when displaying the list of users.
- Added a new `mentions_min_chars` option for specifying the number of characters required after the “@” symbol before the list of users will be displayed in the editor.
- Added a new `profile` hover card for usage with the `mentions_select` option.
- Fixed mentions not converted to `contenteditable=false` elements when set using `editor.setContent()`

For information on the Mentions plugin, see: [Mentions plugin]({{site.baseurl}}/plugins/premium/mentions/).

### PowerPaste 5.4.0

The {{site.productname}} 5.6 release includes an accompanying release of the **PowerPaste** premium plugin.

**PowerPaste** 5.4.0 provides the following improvements:

- Added a new `images_file_types` option to determine which image file types will automatically be converted into `img` tags by the `smart_paste` feature.
- Fixed the `Cut` menu item not working in the latest version of Firefox.
- Fixed two Cross-Site Scripting (XSS) vulnerability issues. For more information, see: [Security fixes](#security-fixes).

For information on the PowerPaste plugin, see: [PowerPaste plugin]({{site.baseurl}}/plugins/premium/powerpaste/).

## Minor changes for TinyMCE 5.6

{{site.productname}} 5.6 introduces the following minor changes:

- Added support for `block` and `unblock` methods on inline dialogs.
- Added new user interface `enable`, `disable`, and `isDisabled` methods.
- Added new `closest` formatter API to get the closest matching selection format from a set of formats.

## General bug fixes

{{site.productname}} 5.6 provides fixes for the following bugs:

- Fixed the `change` event not firing after a successful image upload.
- Fixed the type signature for the `entity_encoding` setting not accepting delimited lists.
- Fixed layout issues when empty `tr` elements were incorrectly removed from tables.
- Fixed image file extensions lost when uploading an image with an alternative extension, such as `.jfif`.
- Fixed a security issue where URLs in attributes weren't correctly sanitized.
- Fixed `DOMUtils.getParents` incorrectly including the shadow root in the array of elements returned.
- Fixed an issue where the root document could be scrolled while an editor dialog was open inside a shadow root.
- Fixed `getContent` with text format returning a new line when the editor is empty.
- Fixed table column and row resizers not respecting the `data-mce-resize` attribute.
- Fixed inserting a table via the `mceInsertTable` command incorrectly creating 2 undo levels.
- Fixed nested tables with `colgroup` elements incorrectly always resizing the inner table.
- Fixed the `visualchars` plugin causing the editor to steal focus when initialized.
- Fixed `fullpage` plugin altering text content in `editor.getContent()`.
- Fixed `fullscreen` plugin not working correctly with multiple editors and shadow DOM.
- Fixed font size keywords such as `medium` not displaying correctly in font size menus.
- Fixed an issue where some attributes in table cells were not copied over to new rows or columns.
- Fixed incorrectly removing formatting on adjacent spaces when removing formatting on a ranged selection.
- Fixed the `Cut` menu item not working in the latest version of Mozilla Firefox.
- Fixed some incorrect types in the new TypeScript declaration file.
- Fixed a regression where a fake offscreen selection element was incorrectly created for the editor root node.
- Fixed an issue where menus would incorrectly collapse in small containers.
- Fixed an issue where only one table column at a time could be converted to a header.
- Fixed some minor memory leaks that prevented garbage collection for editor instances.
- Fixed resizing a `responsive` table not working when using the column resize handles.
- Fixed incorrectly calculating table `col` widths when resizing responsive tables.
- Fixed an issue where spaces were not preserved in pre-blocks when getting text content.
- Fixed a regression that caused the selection to be difficult to see in tables with backgrounds.
- Fixed content pasted multiple times in the editor when using Microsoft Internet Explorer 11. Patch contributed by mattford.
- Fixed the `mceTableRowType` and `mceTableCellType` commands were not firing the `newCell` event.
- Fixed the HTML5 `s` element was not recognized when editing or clearing text formatting.

## Security fixes

PowerPaste 5.4.0 provides fixes for the following security issues:

- Fixed a Cross-Site Scripting (XSS) vulnerability where internal HTML content wasn't sanitized in some cases.
- Fixed a Cross-Site Scripting (XSS) vulnerability where specific HTML comments weren't sanitized in some cases.

## Known issues

This section describes issues that users of {{site.productname}} 5.6 may encounter and possible workarounds for these issues.

**Outline**

- [](#)

###

**Issue**: This issue affects ....

**Workaround**: There was no known workaround at the time of the release.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
