---
layout: default
title: TinyMCE 5.10.3
title_nav: TinyMCE 5.10.3
description: Release notes for TinyMCE 5.10.3
keywords: releasenotes bugfixes
---

## Overview

{{site.productname}} 5.10.3 was released for {{site.enterpriseversion}} and {{site.cloudname}} Tuesday, February 15<sup>th</sup>, 2022. It includes {{site.productname}} 5.10.3 and additional changes to premium plugins. These release notes provide an overview of the changes for {{site.productname}} 5.10.3, including:

- [Accompanying Premium self-hosted server-side component changes](#accompanyingpremiumself-hostedserver-sidecomponentchanges)
- [General bug fixes](#generalbugfixes)
- [Security fixes](#securityfixes)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

{{site.releasenotes_for_stable}}

## Accompanying Premium self-hosted server-side component changes

The {{site.productname}} 5.10.3 release includes changes affecting the {{site.productname}} **self-hosted** services for the following plugins:

- The Enhanced Media Embed plugin (`mediaembed`)
- The Image Tools plugin (`imagetools`)
- The Link Checker plugin (`linkchecker`)
- The Spell Checker Pro plugin (`tinymcespellchecker`)

The Java server-side components have been updated to the following versions:

- `ephox-spelling.war`: 2.118.4
- `ephox-hyperlinking.war`: 2.105.9
- `ephox-image-proxy.war`: 2.106.1

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

2. Replace the existing server-side `.war` files with the `.war` files bundled with {{site.productname}} 5103 or later.

For information on:

- Deploying the server-side components, see: [Server-side component installation]({{site.baseurl}}/enterprise/server/).
- Deploying the server-side components using Docker, see: [Containerized service deployments]({{site.baseurl}}/enterprise/server/dockerservices/).

## General bug fixes

{{site.productname}} 5.10.3 provides fixes for the following bugs:

- Alignment would sometimes be removed on parent elements when changing alignment on certain inline nodes, such as images.
- The `fullscreen` plugin would incorrectly reset the scroll position when exiting fullscreen mode.

## Security fixes

{{site.productname}} 5.10.3 provides fixes for the following security issues:

All 3 server-side components have been updated to include dependency updates addressing security issues. This includes Low severity vulnerability fixes.

For information on the server-side components updates, see: [Accompanying Premium self-hosted server-side component changes](#accompanyingpremiumself-hostedserver-sidecomponentchanges).

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
