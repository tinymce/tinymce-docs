---
layout: default
title: TinyMCE 5.8
title_nav: TinyMCE 5.8
description: Release notes for TinyMCE 5.8
keywords: releasenotes bugfixes
---

## Overview

{{site.productname}} 5.8 was released for {{site.enterpriseversion}} and {{site.cloudname}} on <<`WEEKDAY`, `MMM` `D`<sup>`st|nd|th`</sup>, `YYYY`>>. It includes {{site.productname}} 5.8 and additional changes to premium plugins. These release notes provide an overview of the changes for {{site.productname}} 5.8, including:

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

The following new features were added for the {{site.productname}} 5.8 release.

### Feature name

### Additional new features

{{site.productname}} 5.8 introduces the following minor new features:

- changelog

## Enhancements

The following enhancements were made for the {{site.productname}} 5.8 release.

### Enhancement name

### Additional enhancements

{{site.productname}} 5.8 introduces the following minor enhancements:

- changelog

## Accompanying Premium Plugin changes

The following premium plugin updates were released alongside {{site.productname}} 5.8.

### Premium Plugin Name X.Y.Z

The {{site.productname}} 5.8 release includes an accompanying release of the **<<Premium Plugin Name>>** premium plugin.

**<<Premium Plugin Name>>** X.Y.Z provides the following improvements:

- <Description>

For information on the <<Premium Plugin Name>> plugin, see: [<<Premium Plugin Name>> plugin]({{site.baseurl}}/plugins/<<Premium Plugin Name>>/).

### Comments 2.4.0

The {{site.productname}} 5.8 release includes an accompanying release of the **Comments** premium plugin.

This release adds new resolve conversation functionality, making it is possible for the user to perform an action which has another semantic meaning than that of deleting a conversation. It is up to the integrator to perform some additional action after a user has resolved a conversation.

**Comments** 2.4.0 provides the following new features:

- Added a new `tinycomments_resolve` option for adding and configuring resolve conversation functionality for Comments in callback mode. For details, see: [Configuring comments callbacks - `tinycomments_resolve`]({{site.baseurl}}/advanced/configuring-comments-callbacks/#tinycomments_resolve).
- Added a new `tinycomments_can_resolve` option for adding and configuring resolve conversation functionality for Comments in embedded mode. For details, see: [Comments plugin - `tinycomments_can_resolve`]({{site.baseurl}}/plugins/premium/comments/#tinycomments_can_resolve).

### Export 1.0.0

The {{site.productname}} 5.8 release includes an accompanying release of the **Export** premium plugin.

**Export** 1.0.0 provides the following improvements:

- Improved error handling when a PDF conversion failure occurs due to browser limitations.
- Changed how image proxy errors are handled to gracefully fail and render a transparent image when an image proxy error occurs.

**Export** 1.0.0 provides the following bug fixes:

- Fixed an issue where internal document links did not navigate within the client-side PDF exporter output.

### Tiny Drive 1.4.0

The {{site.productname}} 5.8 release includes an accompanying release of **Tiny Drive**.

**Tiny Drive** 1.4.0 provides the following new features:

- Added a new [`tinydrive_skin`]({{ site.baseurl }}/tinydrive/configuration/#tinydrive_skin) option for applying a skin to the {{site.productname}} {{site.cloudfilemanager}} plugin.
- Added a new [`skin`]({{ site.baseurl }}/tinydrive/tinydrive-api/standalone/#skin) option for applying a skin to standalone instances of {{site.cloudfilemanager}}.
- Added a new `oxide-dark` skin for standalone and plugin mode.
- Added a new PDF viewer to add previews for PDF files.

**Tiny Drive** 1.4.0 provides the following bug fixes:

- Fixed a bug where images with `exif` orientation would be incorrectly oriented.
- Fixed a bug where specifying 'audio' for the `filetype` setting would not list the files in the grid view.
- Fixed a bug where tabbing though the user interface could throw an error.

For information on Tiny Drive, see: [Tiny Drive]({{ site.baseurl }}/tinydrive/).

## Accompanying Premium Skins and Icon Packs changes

The {{site.productname}} 5.8 release includes an accompanying release of the **Premium Skins and Icon Packs**.

### Premium Skins and Icon Packs - New features

A new Fluent skin and accompanying content css, which follows the Microsoft design language, is now available for {{site.productname}}.

For information on using premium skins and icon packs, see: [Premium Skins and Icon Packs]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/).

## General bug fixes

{{site.productname}} 5.8 provides fixes for the following bugs:

- changelog

## Security fixes

{{site.productname}} 5.8 provides fixes for the following security issues:

- changelog

## Deprecated features

The following features have been deprecated with the release of {{site.productname}} 5.8:

- [](#).

### The...

## Known issues

This section describes issues that users of {{site.productname}} 5.8 may encounter and possible workarounds for these issues.

**Outline**

- [](#)

###

**Issue**: This issue affects ....

**Workaround**: There was no known workaround at the time of the release.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
