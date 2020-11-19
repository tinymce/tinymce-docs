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

### New `image_file_types` option for customizing the recognized `smart_paste` image file extensions

The new `image_file_types` option allows different image file extensions to be recognized by the `smart_paste` image URL to embedded image functionality.

For information on the `image_file_types` and `smart_paste` options for the PowerPaste plugin, see: [PowerPaste plugin]({{site.baseurl}}/plugins/powerpaste/).

For information on the `image_file_types` and `smart_paste` options for the Paste plugin, see: [Paste plugin]({{site.baseurl}}/plugins/paste/).

### New `format_empty_lines` option for content formatting

A new `format_empty_lines` option allows empty lines to be formatted for multi-line selections when applying an "inline" format such as bold (`<strong>`).

For information on the `format_empty_lines` option, see: [Content Formatting - `format_empty_lines`]({{ site.baseurl }}/configure/content-formatting/#format_empty_lines).

### New optional `name` field for the `style_formats` option

A new optional `name` field that sets a specific name to the format when it's being registered using the `style_formats` option.

For information on the `name` field, see: [User interface - `style_formats`]({{ site.baseurl }}/configure/editor-appearance/#style_formats).

### New editor events

- The new `TableModified` event is fired when style or structural changes are made to a table.
- Two new core events that are fired before and after displaying notifications.

For more information on the `TableModified` event, see: [Table plugin - `events`]({{ site.baseurl }}/plugins/table/#events).

For more information on core editor events, see: [Editor core events]({{ site.baseurl }}/advanced/events/#editorcoreevents).

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

- changelog

## General bug fixes

{{site.productname}} 5.6 provides fixes for the following bugs:

- changelog

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
