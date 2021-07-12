---
layout: default
title: TinyMCE 5.9
title_nav: TinyMCE 5.9
description: Release notes for TinyMCE 5.9
keywords: releasenotes bugfixes
---

## Overview

{{site.productname}} 5.9 was released for {{site.enterpriseversion}} and {{site.cloudname}} on <<`WEEKDAY`, `MMM` `D`<sup>`st|nd|th`</sup>, `YYYY`>>. It includes {{site.productname}} 5.9 and additional changes to premium plugins. These release notes provide an overview of the changes for {{site.productname}} 5.9, including:

- [New features](#newfeatures)
- [Enhancements](#enhancements)
- [Functionality changes](#functionalitychanges)
- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [Accompanying Premium Skins and Icon Packs changes](#accompanyingpremiumskinsandiconpackschanges)
- [Accompanying Premium self-hosted server-side component changes](##accompanyingpremiumself-hostedserver-sidecomponentchanges)
- [General bug fixes](#generalbugfixes)
- [Security fixes](#securityfixes)
- [Deprecated features](#deprecatedfeatures)
- [Known issues](#knownissues)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

{{site.releasenotes_for_stable}}

## New features

The following new features were added for the {{site.productname}} 5.9 release.

### New `toolbar_sticky_offset` option for customizing sticky toolbars

The new `toolbar_sticky_offset` option allows the main toolbar to "dock" at a specified offset from the top or bottom of the view, depending on the toolbar location (set using the [`toolbar_location` option]({{site.baseurl}}/configure/editor-appearance/#toolbar_location)).

For information on the `toolbar_sticky_offset` option, see: [User interface options - toolbar_sticky_offset]({{site.baseurl}}/configure/editor-appearance/#toolbar_sticky_offset).

### New `language` toolbar button and menu item in core

{{site.productname}} 5.9 now supports multilingual content, using the `lang` attribute. There is a new `language` toolbar button, and a new `language` menu item, both configured using the `content_langs` option. There is also a new `Lang` editor command for changing the language of the selection.

For information on:

- The `language` toolbar button, see: [Available Toolbar Buttons - The core toolbar buttons]({{site.baseurl}}/advanced/available-toolbar-buttons/#thecoretoolbarbuttons).
- The `language` menu item, see: [Available Menu Items - The core menu items]({{site.baseurl}}/advanced/available-menu-items/#the-core-menu-items).
- The `content_langs` option, see: [Content appearance options - `content_langs`]({{site.baseurl}}/configure/localization/#content_langs).
- The `Lang` editor command, see: [Commands available for {{site.productname}} - Core Editor commands]({{site.baseurl}}/advanced/editor-command-identifiers/#coreeditorcommands).

### Additional new features

{{site.productname}} 5.9 introduces the following minor new features:

- changelog

## Enhancements

The following enhancements were made for the {{site.productname}} 5.9 release.

### Enhancement name

### Additional enhancements

{{site.productname}} 5.9 introduces the following minor enhancements:

- changelog

## Functionality changes

The following functionality changes were made for the {{site.productname}} 5.9 release:

- changelog

## Accompanying Premium Plugin changes

The following premium plugin updates were released alongside {{site.productname}} 5.9.

### Premium Plugin Name X.Y.Z

The {{site.productname}} 5.9 release includes an accompanying release of the **<<Premium Plugin Name>>** premium plugin.

**<<Premium Plugin Name>>** X.Y.Z adds the following new features:

- <Description>

**<<Premium Plugin Name>>** X.Y.Z introduces the following enhancements:

- <Description>

**<<Premium Plugin Name>>** X.Y.Z provides the following bug fixes:

- <Description>

For information on the <<Premium Plugin Name>> plugin, see: [<<Premium Plugin Name>> plugin]({{site.baseurl}}/plugins/<<Premium Plugin Name>>/).

### PowerPaste 5.6.0

The {{site.productname}} 5.9 release includes an accompanying release of the **PowerPaste** premium plugin.

**PowerPaste** 5.6.0 introduces the following enhancements:

- The `powerpaste_word_import`, `powerpaste_googledocs_import`, and `powerpaste_html_import` options now also accept asynchronous functions. This allows the paste mode to be dynamically set each time a user pastes relevant content. It is designed to be used, for example, to replicate the `prompt` dialog with a custom dialog.

For information on the PowerPaste plugin, see: [PowerPaste plugin]({{site.baseurl}}/plugins/premium/powerpaste/).

## Accompanying Premium Skins and Icon Packs changes

The {{site.productname}} 5.9 release includes an accompanying release of the **Premium Skins and Icon Packs**.

### Premium Skins and Icon Packs - New features

{% comment %}
Add description here.
{% endcomment %}

For information on using premium skins and icon packs, see: [Premium Skins and Icon Packs]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/).

### Premium Skins and Icon Packs - Bug fixes

The **Premium Skins and Icon Packs** release includes the following bug fixes:

{% comment %}
Add description here.
{% endcomment %}

For information on using premium skins and icon packs, see: [Premium Skins and Icon Packs]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/).

## Accompanying Premium self-hosted server-side component changes

The {{site.productname}} 5.9 release includes accompanying changes affecting the {{site.productname}} **self-hosted** services for the following plugins:

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

### Updating the self-hosted server-side components

Version X.Y.Z provides updates for the Java-based server-side components. To deploy the updated version of the server-side components:

1. Update your Java Application Server to the minimum required version:

    - Eclipse Jetty 9.4 or later
    - Apache Tomcat:
        - 9 or later
        - 8.5.12+
        - 8.0.42+
        - 7.0.76+

2. Replace the existing server-side `.war` files with the version 2.5.0 `.war` files bundled with {{site.productname}} 5.9 or later.

For information on:

- Deploying the server-side components, see: [Server-side component installation]({{site.baseurl}}/enterprise/server/).
- Deploying the server-side components using Docker, see: [Containerized service deployments]({{site.baseurl}}/enterprise/server/dockerservices/).

## General bug fixes

{{site.productname}} 5.9 provides fixes for the following bugs:

- changelog

## Security fixes

{{site.productname}} 5.9 provides fixes for the following security issues:

- changelog

## Deprecated features

The following features have been deprecated with the release of {{site.productname}} 5.9:

- [The `spellchecker_select_languages` option](#thespellchecker_select_languagesoption).

### The `spellchecker_select_languages` option

With the release of {{site.productname}} 5.9, the `spellchecker_select_languages` option has been deprecated and has been replaced by the `content_langs` option.

For information on the `content_langs` option, see: [Spell Checker Pro - `content_langs`]({{ site.baseurl }}/plugins/premium/tinymcespellchecker/#content_langs).

## Known issues

This section describes issues that users of {{site.productname}} 5.9 may encounter and possible workarounds for these issues.

**Outline**

- [](#)

###

**Issue**: This issue affects ....

**Workaround**: There was no known workaround at the time of the release.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
