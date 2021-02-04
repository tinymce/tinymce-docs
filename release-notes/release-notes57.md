---
layout: default
title: TinyMCE 5.7
title_nav: TinyMCE 5.7
description: Release notes for TinyMCE 5.7
keywords: releasenotes bugfixes
---

## Overview

{{site.productname}} 5.7 was released for {{site.enterpriseversion}} and {{site.cloudname}} on <<`WEEKDAY`, `MMM` `D`<sup>`st|nd|th`</sup>, `YYYY`>>. It includes {{site.productname}} 5.7 and additional changes to premium plugins. These release notes provide an overview of the changes for {{site.productname}} 5.7, including:

- [New features](#newfeatures)
- [Enhancements](#enhancements)
- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [Accompanying Premium Skins and Icon Packs changes](#accompanyingpremiumskinsandiconpackschanges)
- [General bug fixes](#generalbugfixes)
- [Security fixes](#securityfixes)
- [Deprecated features](#deprecatedfeatures)
- [Known issues](#knownissues)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

{{site.releasenotes_for_stable}}

## New features

The following new features were added for the {{site.productname}} 5.7 release.

### Feature name

### Additional new features

{{site.productname}} 5.7 introduces the following minor new features:

- changelog

## Enhancements

The following enhancements were made for the {{site.productname}} 5.7 release.


### Table widths are now retained when copying and pasting tables

Tables copied to the clipboard when using the `table` plugin will now correctly retain the width of each column. Additionally, the table width will be correctly adjusted to account for the copied column widths.

### Added support for `table_column_resizing` when inserting and deleting table columns

When inserting or deleting table columns, the resizing behavior will now respect the `table_column_resizing` option:

- `table_column_resizing: 'preservetable'` - The columns will resize to fit the width of the table.
- `table_column_resizing: 'resizetable'` - The table will resize to fit the width of the columns.

For more information on the `table_column_resizing` option, see: [Table plugin - `table_column_resizing`]({{ site.baseurl }}/plugins/opensource/table/#table_column_resizing).

### Improved behavior when using `lists` plugin on mixed content

The `lists` plugin has been updated to improve toggling lists on content containing:

- Multiple blocks of text.
- Combinations of existing lists and blocks of text.

### Media live embeds now support video and audio elements

The `media_live_embeds` option now supports rendering live embeds of `audio` and `video` elements while editing content. The elements can now also be resized without having to open a dialog to manually change the size.

For information on the `media_live_embeds` option, see: [Media plugin - `media_live_embeds`]({{site.baseurl}}/plugins/opensource/media/#media_live_embeds).

### Additional enhancements

{{site.productname}} 5.7 introduces the following minor enhancements:

- changelog

## Accompanying Premium Plugin changes

The following premium plugin updates were released alongside {{site.productname}} 5.7.

### Spell Checker Pro 2.3.0

The {{site.productname}} 5.7 release includes an accompanying release of the **Spell Checker Pro** premium plugin.

**Spell Checker Pro** 2.3.0 provides the following enhancements:

#### The `spellchecker_ignore_list` option now accepts arrays of words for specific languages

**Spell Checker Pro** 2.3.0 introduces enhancements to the `spellchecker_ignore_list` (formerly `spellchecker_whitelist`, see: [The `spellchecker_whitelist` option has been renamed](#thespellchecker_whitelistoptionhasbeenrenamed)).

- It is now possible to specify arrays of words for specific languages to be ignored by Spell Checker Pro plugin using the `spellchecker_ignore_list` option.
- A new `addIgnoredWords` API allows words to be ignored at runtime by the Spell Checker Pro plugin.

For information on:

- The `spellchecker_ignore_list` option, see: [Spell Checker Pro - `spellchecker_ignore_list`]({{ site.baseurl }}/plugins/premium/tinymcespellchecker/#spellchecker_ignore_list).
- The `addIgnoredWords` API, see: [Spell Checker Pro - `API`]({{ site.baseurl }}/plugins/premium/tinymcespellchecker/#api).

## Accompanying Premium Skins and Icon Packs changes

The {{site.productname}} 5.7 release includes an accompanying release of the **Premium Skins and Icon Packs**. Included is a new `bootstrap` icon pack that provides [Bootstrap icons](https://icons.getbootstrap.com/) for {{site.productname}}.

For information on using premium skins and icon packs, see: [Premium Skins and Icon Packs]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/).

## Accompanying Premium self-hosted server-side component changes

The {{site.productname}} 5.7 release includes accompanying changes affecting the {{site.productname}} **self-hosted** services for the following plugins:

- The Enhanced Media Embed plugin (`mediaembed`)
- The Image Tools plugin (`imagetools`)
- The Link Checker plugin (`linkchecker`)
- The Spell Checker Pro plugin (`tinymcespellchecker`)

The Java server-side components (`ephox-spelling.war`, `ephox-hyperlinking.war`, and `ephox-image-proxy.war`) have been updated to **version X.Y.Z**.

This version requires Java 8 or higher. For information on the removal of Java 7 support, see: [Removal of Java 7 support for TinyMCE 5.3 and later]({{site.baseurl}}/release-notes/release-notes53/#removalofjava7support).

For information on:

- The Spell Checker Pro plugin, see: [Spell Checker Pro plugin]({{site.baseurl}}/plugins/premium/tinymcespellchecker/).
- The Link Checker plugin, see: [Link Checker plugin]({{site.baseurl}}/plugins/premium/linkchecker/).
- The Image Tools plugin, see: [Image Tools plugin]({{site.baseurl}}/plugins/opensource/imagetools/).
- The Enhanced Media Embed plugin, see: [Enhanced Media Embed plugin]({{site.baseurl}}/plugins/premium/mediaembed/).
- Deploying the server-side components, see: [Server-side component installation]({{site.baseurl}}/enterprise/server/).

### Security update for self-hosted server-side components

Version X.Y.Z provides security updates for the Java-based server-side components. To deploy the updated version of the server-side components:

1.

For information on:

- Deploying the server-side components, see: [Server-side component installation]({{site.baseurl}}/enterprise/server/).
- Deploying the server-side components using Docker, see: [Containerized service deployments]({{site.baseurl}}/enterprise/server/dockerservices/).

## General bug fixes

{{site.productname}} 5.7 provides fixes for the following bugs:

- changelog

## Security fixes

{{site.productname}} 5.7 provides fixes for the following security issues:

- changelog

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
