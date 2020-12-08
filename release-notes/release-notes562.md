---
layout: default
title: TinyMCE 5.6.2
title_nav: TinyMCE 5.6.2
description: Release notes for TinyMCE 5.6.2
keywords: releasenotes bugfixes
---

## Overview

{{site.productname}} 5.6.2 was released for {{site.enterpriseversion}} and {{site.cloudname}} on Wednesday, December 9<sup>th</sup>, 2020. It includes {{site.productname}} 5.6.2 and additional changes to premium plugins. These release notes provide an overview of the changes for {{site.productname}} 5.6.2, including:

- [Accompanying Premium changes](#accompanyingpremiumchanges)
- [General bug fixes](#generalbugfixes)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

{{site.releasenotes_for_stable}}

## Accompanying Premium changes

The following premium updates were released alongside {{site.productname}} 5.6.2.

### Enterprise language packs 5.5.1

The {{site.productname}} 5.6.2 release includes an accompanying release of the **Enterprise language packs**.

Version 5.5.1 of the **Enterprise language packs** includes the following bug fix:

- Fixes Swedish translations (`sv_SE`).

For information on the Enterprise language packs, see: [Localization options - `language`]({{site.baseurl}}/configure/localization/#language).

## General bug fixes

{{site.productname}} 5.6.2 provides fixes for the following bugs:

- Fixed a UI rendering regression when the document body is using `display: flex`.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
