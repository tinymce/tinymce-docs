---
layout: default
title: TinyMCE 5.3
title_nav: TinyMCE 5.3
description: Release notes for TinyMCE 5.3
keywords: releasenotes bugfixes
---

These release notes provide an overview of the changes for {{site.productname}} 5.3, including:

- [TinyMCE 5.3 new features and enhancements](#tinymce52newfeaturesandenhancements)
- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [Minor changes for TinyMCE 5.3](#minorchangesfortinymce52)
- [General bug fixes](#generalbugfixes)
- [Deprecated features](#deprecatedfeatures)
- [Known issues](#knownissues)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

> This is the {{site.cloudname}} and {{site.enterpriseversion}} release notes. For information on the latest community version of {{site.productname}}, see: [{{site.productname}} Changelog]({{site.baseurl}}/changelog/).

## TinyMCE 5.3 new features and enhancements

The following new features and enhancements were added for the {{site.productname}} 5.3 release.

### 


## Accompanying Premium Plugin changes

The following premium plugins updates were released alongside {{site.productname}} 5.3.

### Enhanced Media Embed

The {{site.productname}} 5.3 release includes the following accompanying changes affecting **Self-hosted Essential, Professional, Premium, and Enterprise customers only**:

- The Java server-side component (`ephox-hyperlinking.war`) has been updated to version 2.3.0. This version requires Java 8 or higher. For information on the deprecation of Java 7 support, see: [Deprecated features](#deprecatedfeatures).
- From {{site.productname}} 5.3, premium self-hosted bundles include the files required to deploy the server-side components as Docker containers. For information on Docker deployments of the server-side components, see: [Containerized service deployments]({{site.baseurl}}/enterprise/server/dockerservices/).

For information on:

- The Enhanced Media Embed plugin, see: [Enhanced Media Embed plugin]({{site.baseurl}}/plugins/mediaembed/).
- Deploying the server-side component, see: [Server-side component installation]({{site.baseurl}}/enterprise/server/).
- Docker deployments of the server-side components, see: [Containerized service deployments]({{site.baseurl}}/enterprise/server/dockerservices/).

### Image Tools Proxy

The {{site.productname}} 5.3 release includes the following accompanying changes affecting **Self-hosted Essential, Professional, Premium, and Enterprise customers only**:

- The Java server-side component (`ephox-image-proxy.war`) has been updated to version 2.3.0. This version requires Java 8 or higher. For information on the deprecation of Java 7 support, see: [Deprecated features](#deprecatedfeatures).
- From {{site.productname}} 5.3, premium self-hosted bundles include the files required to deploy the server-side components as Docker containers. For information on Docker deployments of the server-side components, see: [Containerized service deployments]({{site.baseurl}}/enterprise/server/dockerservices/).

For information on:

- The Image Tools plugin, see: [Image Tools plugin]({{site.baseurl}}/plugins/imagetools/).
- Deploying the server-side component, see: [Server-side component installation]({{site.baseurl}}/enterprise/server/).
- Docker deployments of the server-side components, see: [Containerized service deployments]({{site.baseurl}}/enterprise/server/dockerservices/).

### Link Checker

The {{site.productname}} 5.3 release includes the following accompanying changes affecting **Self-hosted Professional, Premium, and Enterprise customers only**:

- The Java server-side component (`ephox-hyperlinking.war`) has been updated to version 2.3.0. This version requires Java 8 or higher. For information on the deprecation of Java 7 support, see: [Deprecated features](#deprecatedfeatures).
- From {{site.productname}} 5.3, premium self-hosted bundles include the files required to deploy the server-side components as Docker containers. For information on Docker deployments of the server-side components, see: [Containerized service deployments]({{site.baseurl}}/enterprise/server/dockerservices/).

For information on:

- The Link Checker plugin, see: [Link Checker plugin]({{site.baseurl}}/plugins/linkchecker/).
- Deploying the server-side component, see: [Server-side component installation]({{site.baseurl}}/enterprise/server/).
- Docker deployments of the server-side components, see: [Containerized service deployments]({{site.baseurl}}/enterprise/server/dockerservices/).

### PowerPaste 5.3.0

The {{site.productname}} 5.3 release includes an accompanying release of the **PowerPaste** premium plugin.

**PowerPaste** 5.3.0 

For information on the PowerPaste plugin, see: [PowerPaste plugin]({{site.baseurl}}/plugins/powerpaste/).

### Spellchecker Pro 2.0.2

The {{site.productname}} 5.3 release includes an accompanying release of the **Spellchecker Pro** premium plugin.

**Spellchecker Pro** 2.0.2 

The {{site.productname}} 5.3 release includes the following accompanying changes affecting **Self-hosted Professional, Premium, and Enterprise customers only**:

- The Java server-side component (`ephox-spelling.war`) has been updated to version 2.3.0. This version requires Java 8 or higher. For information on the deprecation of Java 7 support, see: [Deprecated features](#deprecatedfeatures).
- From {{site.productname}} 5.3, premium self-hosted bundles include the files required to deploy the server-side components as Docker containers. For information on Docker deployments of the server-side components, see: [Containerized service deployments]({{site.baseurl}}/enterprise/server/dockerservices/).

For information on:

- The Spell Checker Pro plugin, see: [Spell Checker Pro plugin]({{site.baseurl}}/plugins/tinymcespellchecker/).
- Deploying the server-side component, see: [Server-side component installation]({{site.baseurl}}/enterprise/server/).
- Docker deployments of the server-side components, see: [Containerized service deployments]({{site.baseurl}}/enterprise/server/dockerservices/).

## Minor changes for TinyMCE 5.3

{{site.productname}} 5.3 introduces the following minor changes:

- 

## General bug fixes

{{site.productname}} 5.3 provides fixes for the following bugs:

- 

## Deprecated features

**Self-hosted Essential, Professional, Premium, and Enterprise customers only**: Java 7 support has been deprecated with this release. The {{site.productname}} Java server-side components now require a minimum of Java 8. From the {{site.productname}} 5.3 release, the `.war` files provided in the self-hosted bundles will not be compatible with Java 7. This change resolves security issues present in the older versions of these services. The following plugins are affected by this change:

- SpellChecker Pro (`ephox-spelling.war` has been updated to version 2.3.0)
- Image Tools (`ephox-image-proxy.war` has been updated to version 2.3.0)
- Enhanced Media Embed (`ephox-hyperlinking.war` has been updated to version 2.3.0)
- Link Checker (`ephox-hyperlinking.war` has been updated to version 2.3.0)

For information on deploying the server-side components, see: [Server-side component installation]({{site.baseurl}}/enterprise/server/).

## Known issues

This section describes issues that users of {{site.productname}} 5.3 may encounter, as well as possible workarounds for these issues.

**Outline**

* [](#)


### 

#### Issue


#### Workaround

No known workaround at the time of release.


{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
