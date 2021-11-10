---
layout: default
title: TinyMCE 5.10.1
title_nav: TinyMCE 5.10.1
description: Release notes for TinyMCE 5.10.1
keywords: releasenotes bugfixes
---

## Overview

{{site.productname}} 5.10.1 was released for {{site.enterpriseversion}} and {{site.cloudname}} on Wednesday, November 10<sup>th</sup>, 2021. It includes {{site.productname}} 5.10.1 and additional changes to premium plugins. These release notes provide an overview of the changes for {{site.productname}} 5.10.1, including:

- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [Accompanying Premium self-hosted server-side component changes](#accompanyingpremiumself-hostedserver-sidecomponentchanges)
- [General bug fixes](#generalbugfixes)
- [Security fixes](#securityfixes)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

{{site.releasenotes_for_stable}}

## Accompanying Premium Plugin changes

The following premium plugin updates were released alongside {{site.productname}} 5.10.1.

### Advanced Code 2.3.2

The {{site.productname}} 5.10.1 release includes an accompanying release of the **Advanced Code** premium plugin.

**Advanced Code** 2.3.2 fixes an exception getting thrown for hints when the editor was rendered in a shadow root.

For information on the Advanced Code plugin, see: [Advanced Code plugin]({{site.baseurl}}/plugins/premium/advcode/).

### PowerPaste 5.6.1

The {{site.productname}} 5.10.1 release includes an accompanying release of the **PowerPaste** premium plugin.

**PowerPaste** 5.6.1 fixes a bug where pasting text content with multiple items on the clipboard did not work.

For information on the PowerPaste plugin, see: [PowerPaste plugin]({{site.baseurl}}/plugins/premium/powerpaste/).

## Accompanying Premium self-hosted server-side component changes

The {{site.productname}} 5.10.1 release includes accompanying changes affecting the {{site.productname}} **self-hosted** services for the following plugins:

- The Enhanced Media Embed plugin (`mediaembed`)
- The Export plugin (`export`)
- The Image Tools plugin (`imagetools`)
- The Link Checker plugin (`linkchecker`)
- The Spell Checker Pro plugin (`tinymcespellchecker`)

The Java server-side components have been updated to the following versions:

- `ephox-spelling.war`: 2.118.1
- `ephox-hyperlinking.war`: 2.105.6
- `ephox-image-proxy.war`: 2.105.5

This version requires Java 8 or higher. For information on the removal of Java 7 support, see: [Removal of Java 7 support for TinyMCE 5.3 and later]({{site.baseurl}}/release-notes/release-notes53/#removalofjava7support).

For information on:

- The Spell Checker Pro plugin, see: [Spell Checker Pro plugin]({{site.baseurl}}/plugins/premium/tinymcespellchecker/).
- The Link Checker plugin, see: [Link Checker plugin]({{site.baseurl}}/plugins/premium/linkchecker/).
- The Image Tools plugin, see: [Image Tools plugin]({{site.baseurl}}/plugins/opensource/imagetools/).
- The Enhanced Media Embed plugin, see: [Enhanced Media Embed plugin]({{site.baseurl}}/plugins/premium/mediaembed/).
- Deploying the server-side components, see: [Server-side component installation]({{site.baseurl}}/enterprise/server/).

### Security related dependency update for all 3 server-side services

All 3 server-side components have been updated to include dependency updates addressing security issues. This includes _High_ severity vulnerability fixes.

### Fixed Link Checker highlighting for unresolvable hosts

Invalid links for unresolvable (non-existent) hosts are correctly identified and highlighted in the editor.

### Updating the self-hosted server-side components

The new versions of the server-side services provide updates for the Java-based server-side components. To deploy the updated version of the server-side components:

1. Update your Java Application Server to the minimum required version:

    - Eclipse Jetty 9.4 or later
    - Apache Tomcat:
        - 9 or later
        - 8.5.12+
        - 8.0.42+
        - 7.0.76+

2. Replace the existing server-side `.war` files with the `.war` files bundled with {{site.productname}} 5.10.1 or later.

For information on:

- Deploying the server-side components, see: [Server-side component installation]({{site.baseurl}}/enterprise/server/).
- Deploying the server-side components using Docker, see: [Containerized service deployments]({{site.baseurl}}/enterprise/server/dockerservices/).

## General bug fixes

{{site.productname}} 5.10.1 provides fixes for the following bugs:

- The iframe aria help text was not read by some screen readers.
- Clicking the `forecolor` or `backcolor` toolbar buttons would do nothing until selecting a color.
- Crop functionality did not work in the `imagetools` plugin when the editor was rendered in a shadow root.
- Fixed an exception thrown on Safari when closing the `searchreplace` plugin dialog.
- The `autolink` plugin did not convert URLs to links when starting with a bracket.
- The `autolink` plugin incorrectly created nested links in some cases.
- Tables could have an incorrect height set on rows when rendered outside of the editor.
- In certain circumstances, the table of contents plugin would incorrectly add an extra empty list item.
- The insert table grid menu displayed an incorrect size when re-opening the grid.
- The word count plugin was treating the zero width space character (`&#8203;`) as a word.

## Security fixes

{{site.productname}} 5.10.1 provides fixes for the following security issues:

All 3 server-side components have been updated to include dependency updates addressing security issues. This includes _High_ severity vulnerability fixes.

For information on the server-side components updates, see: [Accompanying Premium self-hosted server-side component changes](#accompanyingpremiumself-hostedserver-sidecomponentchanges).

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
