---
layout: default
title: TinyMCE 5.10
title_nav: TinyMCE 5.10
description: Release notes for TinyMCE 5.10
keywords: releasenotes bugfixes
---

## Overview

{{site.productname}} 5.10 was released for {{site.enterpriseversion}} and {{site.cloudname}} on <<`WEEKDAY`, `MMM` `D`<sup>`st|nd|th`</sup>, `YYYY`>>. It includes {{site.productname}} 5.10 and additional changes to premium plugins. These release notes provide an overview of the changes for {{site.productname}} 5.10, including:

- [New features](#newfeatures)
- [Enhancements](#enhancements)
- [Functionality changes](#functionalitychanges)
- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [Accompanying Premium Skins and Icon Packs changes](#accompanyingpremiumskinsandiconpackschanges)
- [Accompanying Premium self-hosted server-side component changes](#accompanyingpremiumself-hostedserver-sidecomponentchanges)
- [General bug fixes](#generalbugfixes)
- [Security fixes](#securityfixes)
- [Deprecated features](#deprecatedfeatures)
- [Known issues](#knownissues)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

{{site.releasenotes_for_stable}}

## New features

The following new features were added for the {{site.productname}} 5.10 release.

### Feature name

### Additional new features

{{site.productname}} 5.10 introduces the following minor new features:

- changelog

## Enhancements

The following enhancements were made for the {{site.productname}} 5.10 release.

### Enhancement name

### Additional enhancements

{{site.productname}} 5.10 introduces the following minor enhancements:

- changelog

## Functionality changes

The following functionality changes were made for the {{site.productname}} 5.10 release:

- changelog

## Accompanying Premium Plugin changes

The following premium plugin updates were released alongside {{site.productname}} 5.10.

### Premium Plugin Name X.Y.Z

The {{site.productname}} 5.10 release includes an accompanying release of the **<<Premium Plugin Name>>** premium plugin.

**<<Premium Plugin Name>>** X.Y.Z adds the following new features:

- <Description>

**<<Premium Plugin Name>>** X.Y.Z introduces the following enhancements:

- <Description>

**<<Premium Plugin Name>>** X.Y.Z provides the following bug fixes:

- <Description>

For information on the <<Premium Plugin Name>> plugin, see: [<<Premium Plugin Name>> plugin]({{site.baseurl}}/plugins/<<Premium Plugin Name>>/).

### Advanced Tables 1.2.0

The {{site.productname}} 5.10 release includes an accompanying release of the **Advanced Tables** premium plugin.

**Advanced Tables** 1.2.0 introduces the following enhancements:

- Added `getRowType` property to the series generator `info` argument. For details, see [`GeneratorInfo`]({{site.baseurl}}/plugins/premium/advtable/#generatorinfo).

**Advanced Tables** 1.2.0 provides the following bug fixes:

- The selection could be placed in an invalid location when a row numbering column was updated.

For information on the Advanced Tables plugin, see: [Advanced Tables plugin]({{site.baseurl}}/plugins/premium/advtable/).

## Accompanying Premium Skins and Icon Packs changes

The {{site.productname}} 5.10 release includes an accompanying release of the **Premium Skins and Icon Packs**.

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

The {{site.productname}} 5.10 release includes accompanying changes affecting the {{site.productname}} **self-hosted** services for the following plugins:

- The Enhanced Media Embed plugin (`mediaembed`)
- The Export plugin (`export`)
- The Image Tools plugin (`imagetools`)
- The Link Checker plugin (`linkchecker`)
- The Spell Checker Pro plugin (`tinymcespellchecker`)

The Java server-side components have been updated to the following versions:

* `ephox-spelling.war`: 2.118.0
* `ephox-hyperlinking.war`: 2.105.5
* `ephox-image-proxy.war`: 2.105.4

These versions require Java 8 or higher. For information on the removal of Java 7 support, see: [Removal of Java 7 support for TinyMCE 5.3 and later]({{site.baseurl}}/release-notes/release-notes53/#removalofjava7support).

### New Server-side component features

The Spelling service now includes a new configuration option, allowing the server to reject spelling requests that contain too many incorrect words. For details, see: [Configure server-side components: `num-incorrect-words-in-suggestions-request-limit
`]({{site.baseurl}}/enterprise/server/configure/#num-incorrect-words-in-suggestions-request-limit
optional).

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

2. Replace the existing server-side `.war` files with the `.war` files bundled with {{site.productname}} 5.10 or later.

For information on:

- Deploying the server-side components, see: [Server-side component installation]({{site.baseurl}}/enterprise/server/).
- Deploying the server-side components using Docker, see: [Containerized service deployments]({{site.baseurl}}/enterprise/server/dockerservices/).

## General bug fixes

{{site.productname}} 5.10 provides fixes for the following bugs:

- changelog

## Security fixes

{{site.productname}} 5.10 provides fixes for the following security issues:

- changelog

## Deprecated features

The following features have been deprecated with the release of {{site.productname}} 5.10:

- [](#).

### The...

## Known issues

This section describes issues that users of {{site.productname}} 5.10 may encounter and possible workarounds for these issues.

- [](#)

###

Issue
: This issue affects ....

Workaround
: There was no known workaround at the time of the release.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
