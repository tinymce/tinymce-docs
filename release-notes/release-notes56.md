---
layout: default
title: TinyMCE 5.6
title_nav: TinyMCE 5.6
description: Release notes for TinyMCE 5.6
keywords: releasenotes bugfixes
---

These release notes provide an overview of the changes for {{site.productname}} 5.6, including:

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

For information on the `images_file_types` and `smart_paste` options for the PowerPaste plugin, see: [PowerPaste plugin]({{site.baseurl}}/plugins/powerpaste/).

For information on the `images_file_types` and `smart_paste` options for the Paste plugin, see: [Paste plugin]({{site.baseurl}}/plugins/paste/).

For information on the `images_file_types` option for the Image plugin, see: [Image plugin]({{site.baseurl}}/plugins/image/).

### New `format_empty_lines` option for content formatting

A new `format_empty_lines` option allows empty lines to be formatted for multi-line selections when applying an "inline" format such as bold (`<strong>`).

For information on the `format_empty_lines` option, see: [Content Formatting - `format_empty_lines`]({{ site.baseurl }}/configure/content-formatting/#format_empty_lines).

### New optional `name` field for the `style_formats` option

A new optional `name` field that sets a specific name to the format when it's being registered using the `style_formats` option.

For information on the `name` field, see: [User interface - `style_formats`]({{ site.baseurl }}/configure/editor-appearance/#style_formats).

### New `TableModified` event

The new `TableModified` event is fired when style or structural changes are made to a table.

For information on the `TableModified` event, see: [Table plugin - `events`]({{ site.baseurl }}/plugins/table/#events).

### Clicking a link in `readonly` mode now opens the URL

Clicking links when the editor is in `readonly` mode will open the URL in a new tab or window (depending on browser preferences).

### New card menu item for the autocompleter

A new card menu item has been added to the autocompleter, allowing for greater customization of the autocompleter results displayed to the user.

For information on customizing autocompleter results with `CardMenuItem`, see: [UI components - Autocompleter - `CardMenuItem`]({{ site.baseurl }}/ui-components/autocompleter/#cardmenuitem).

### New image emoji database for the Emoticons plugin

A new `emojiimages` database has been added to the Emoticons plugin. This database uses images provided by the Twitter Emoji (twemoji) project to render emojis in the content.

{% assign feature = "`emojiimages` database" %}
{% assign third_party_product = "Twitter Emoji (Twemoji) graphics" %}
{% assign license_agreement_name = "CC-BY 4.0" %}
{% include misc/under-license.md %}

A new `emoticons_database` option has been added to specify which built-in emoji database to use in the editor. Additionally, a new `emoticons_images_url` option has been added to configure the base URL for images used in the `emojiimages` database.

For information on the `emojiimages` database and `emoticons_database` option, see: [Emoticons plugin - `emoticons_database`]({{ site.baseurl }}/plugins/emoticons/#emoticons_database).

For information on the `emoticons_images_url` option, see: [Emoticons plugin - `emoticons_images_url`]({{ site.baseurl }}/plugins/emoticons/#emoticons_images_url).

## Accompanying Premium Plugin changes

The following premium plugin updates were released alongside {{site.productname}} 5.6.

### Premium Plugin Name X.Y.Z

The {{site.productname}} 5.6 release includes an accompanying release of the **<<Premium Plugin Name>>** premium plugin.

**<<Premium Plugin Name>>** X.Y.Z provides the following improvements:

- <Description>

For information on the <<Premium Plugin Name>> plugin, see: [<<Premium Plugin Name>> plugin]({{site.baseurl}}/plugins/<<Premium Plugin Name>>/).

### Advanced Code Editor 2.3.0

The {{site.productname}} 5.6 release includes an accompanying release of the **Advanced Code Editor** premium plugin.

**Advanced Code Editor** 2.3.0 provides the following improvements:

- Added the ability to maintain the cursor position when opening the code dialog.
- Fixed the code view not using monospace fonts.
- Fixed an issue where non-breaking spaces were inserted instead of regular spaces on Safari.

For information on the Advanced Code Editor plugin, see: [Advanced Code Editor plugin]({{site.baseurl}}/plugins/advcode/).

### Comments 2.3.0

The {{site.productname}} 5.6 release includes an accompanying release of the **Comments** premium plugin.

**Comments** 2.3.0 introduces `onError` and `onSuccess` callbacks for the `tinycomments_create` "done" function.

**Comments** 2.3.0 also provides the following bug fixes:

- Fixed nested and overlapping comments breaking the content.
- Fixed long comments getting cut off.
- Fixed a scrollbar appearing in the textarea when writing a comment.

For information on the Comments plugin, see: [Comments plugin]({{site.baseurl}}/plugins/comments/).

## Accompanying Premium self-hosted server-side component changes

The {{site.productname}} 5.6 release includes accompanying changes affecting the {{site.productname}} **self-hosted** services for the following plugins:

- The Enhanced Media Embed plugin (`mediaembed`)
- The Image Tools plugin (`imagetools`)
- The Link Checker plugin (`linkchecker`)
- The Spell Checker Pro plugin (`tinymcespellchecker`)

The Java server-side components (`ephox-spelling.war`, `ephox-hyperlinking.war`, and `ephox-image-proxy.war`) have been updated to **version X.Y.Z**.

This version requires Java 8 or higher. For information on the removal of Java 7 support, see: [Removal of Java 7 support for TinyMCE 5.3 and later]({{site.baseurl}}/release-notes/release-notes53/#removalofjava7support).

For information on:

- The Spell Checker Pro plugin, see: [Spell Checker Pro plugin]({{site.baseurl}}/plugins/tinymcespellchecker/).
- The Link Checker plugin, see: [Link Checker plugin]({{site.baseurl}}/plugins/linkchecker/).
- The Image Tools plugin, see: [Image Tools plugin]({{site.baseurl}}/plugins/imagetools/).
- The Enhanced Media Embed plugin, see: [Enhanced Media Embed plugin]({{site.baseurl}}/plugins/mediaembed/).
- Deploying the server-side components, see: [Server-side component installation]({{site.baseurl}}/enterprise/server/).

### Security update for self-hosted server-side components

Version X.Y.Z provides security updates for the Java-based server-side components. To deploy the updated version of the server-side components:

1.

For information on:

- Deploying the server-side components, see: [Server-side component installation]({{site.baseurl}}/enterprise/server/).
- Deploying the server-side components using Docker, see: [Containerized service deployments]({{site.baseurl}}/enterprise/server/dockerservices/).

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

## Security fixes

{{site.productname}} 5.6 provides fixes for the following security issues:

- changelog

## Deprecated features

The following features have been deprecated with the release of {{site.productname}} 5.6:

- [](#).

### The...

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
