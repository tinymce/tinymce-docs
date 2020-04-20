---
layout: default
title: TinyMCE 5.2.2
title_nav: TinyMCE 5.2.2
description: Release notes for TinyMCE 5.2.2
keywords: releasenotes bugfixes
---

## Overview

These release notes provide an overview of the changes for {{site.productname}} 5.2.2, including:

- [General bug fixes](#generalbugfixes)
- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

> This is the {{site.cloudname}} and {{site.enterpriseversion}} release notes. For information on the latest community version of {{site.productname}}, see: [{{site.productname}} Changelog]({{site.baseurl}}/changelog/).

## General bug fixes

{{site.productname}} 5.2.2 provides fixes for the following bugs:

* Fixed an issue where anchors could not be inserted on empty lines.
* Fixed text decorations (underline, strikethrough) not consistently inheriting the text color.
* Fixed `format` menu alignment buttons inconsistently applying to images.
* Fixed the floating toolbar drawer height collapsing when the editor is rendered in modal dialogs.

## Accompanying Premium Plugin changes

The following premium plugins updates were released alongside {{site.productname}} 5.2.2.

### PowerPaste 5.2.2

The {{site.productname}} 5.2.3 release includes an accompanying release of the **PowerPaste** premium plugin.

**PowerPaste** 5.2.3 provides a security fix to prevent arbitrary JavaScript from being executed on paste when using specifically crafted content. Replication case provided by Michał Bentkowski.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
