---
layout: default
title: TinyMCE vnumtxt
title_nav: TinyMCE vnumtxt
description: Release notes for TinyMCE vnumtxt
keywords: releasenotes bugfixes
---

{% comment %}
Replace vnumtxt with the version number such as: X.Y.Z
Replace vnumcode with the version number without points, such as XYZ
The following "list" should be added to `data/nav.yml`
- url: "release-notesvnumcode"
  pages:
  - url: "#Overview"
  - url: "#New features"
  - url: "#Enhancements"
  - url: "#Functionality changes"
  - url: "#Accompanying Premium Plugin changes"
  - url: "#Accompanying Premium Skins and Icon Packs changes"
  - url: "#Accompanying Premium self-hosted server-side component changes"
  - url: "#General bug fixes"
  - url: "#Security fixes"
  - url: "#Deprecated features"
  - url: "#Known issues"
  - url: "#Upgrading to the latest version of TinyMCE 5"
{% endcomment %}

## Overview

{{site.productname}} vnumtxt was released for {{site.enterpriseversion}} and {{site.cloudname}} on <<`WEEKDAY`, `MMM` `D`<sup>`st|nd|th`</sup>, `YYYY`>>. It includes {{site.productname}} vnumtxt and additional changes to premium plugins. These release notes provide an overview of the changes for {{site.productname}} vnumtxt, including:

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

The following new features were added for the {{site.productname}} vnumtxt release.

### Feature name

### Additional new features

{{site.productname}} vnumtxt introduces the following minor new features:

- changelog

## Enhancements

The following enhancements were made for the {{site.productname}} vnumtxt release.

### Enhancement name

### Additional enhancements

{{site.productname}} vnumtxt introduces the following minor enhancements:

- changelog

## Functionality changes

The following functionality changes were made for the {{site.productname}} vnumtxt release:

- changelog

## Accompanying Premium Plugin changes

The following premium plugin updates were released alongside {{site.productname}} vnumtxt.

### Premium Plugin Name X.Y.Z

The {{site.productname}} vnumtxt release includes an accompanying release of the **<<Premium Plugin Name>>** premium plugin.

**<<Premium Plugin Name>>** X.Y.Z adds the following new features:

- <Description>

**<<Premium Plugin Name>>** X.Y.Z introduces the following enhancements:

- <Description>

**<<Premium Plugin Name>>** X.Y.Z provides the following bug fixes:

- <Description>

For information on the <<Premium Plugin Name>> plugin, see: [<<Premium Plugin Name>> plugin]({{site.baseurl}}/plugins/<<Premium Plugin Name>>/).

## Accompanying Premium Skins and Icon Packs changes

The {{site.productname}} vnumtxt release includes an accompanying release of the **Premium Skins and Icon Packs**.

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

The {{site.productname}} vnumtxt release includes changes affecting the {{site.productname}} **self-hosted** services for the following plugins:

- The Enhanced Media Embed plugin (`mediaembed`)
- The Export plugin (`export`)
- The Image Tools plugin (`imagetools`)
- The Link Checker plugin (`linkchecker`)
- The Spell Checker Pro plugin (`tinymcespellchecker`)

The Java server-side components have been updated to the following versions:

- `ephox-spelling.war`: X.Y.Z
- `ephox-hyperlinking.war`: X.Y.Z
- `ephox-image-proxy.war`: X.Y.Z

This version requires Java 8 or higher. For information on the removal of Java 7 support, see: [Removal of Java 7 support for TinyMCE 5.3 and later]({{site.baseurl}}/release-notes/release-notes53/#removalofjava7support).

For information on:

- The Spell Checker Pro plugin, see: [Spell Checker Pro plugin]({{site.baseurl}}/plugins/premium/tinymcespellchecker/).
- The Link Checker plugin, see: [Link Checker plugin]({{site.baseurl}}/plugins/premium/linkchecker/).
- The Image Tools plugin, see: [Image Tools plugin]({{site.baseurl}}/plugins/opensource/imagetools/).
- The Enhanced Media Embed plugin, see: [Enhanced Media Embed plugin]({{site.baseurl}}/plugins/premium/mediaembed/).
- Deploying the server-side components, see: [Server-side component installation]({{site.baseurl}}/enterprise/server/).

### Updating the self-hosted server-side components

The new versions of the server-side services provide updates for the Java-based server-side components. To deploy the updated version of the server-side components:

1. Update your Java Application Server to the minimum required version:

    - Eclipse Jetty 9.4 or later
    - Apache Tomcat:
        - 9 or later
        - 8.5.12+
        - 8.0.42+
        - 7.0.76+

2. Replace the existing server-side `.war` files with the `.war` files bundled with {{site.productname}} vnumtxt or later.

For information on:

- Deploying the server-side components, see: [Server-side component installation]({{site.baseurl}}/enterprise/server/).
- Deploying the server-side components using Docker, see: [Containerized service deployments]({{site.baseurl}}/enterprise/server/dockerservices/).

## General bug fixes

{{site.productname}} vnumtxt provides fixes for the following bugs:

- changelog

## Security fixes

{{site.productname}} vnumtxt provides fixes for the following security issues:

- changelog

## Deprecated features

The following features have been deprecated with the release of {{site.productname}} vnumtxt:

- [](#).

### The...

## Known issues

This section describes issues that users of {{site.productname}} vnumtxt may encounter and possible workarounds for these issues.

- [](#)

###

Issue
: This issue affects ....

Workaround
: There was no known workaround at the time of the release.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
