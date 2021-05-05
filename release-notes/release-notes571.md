---
layout: default
title: TinyMCE 5.7.1
title_nav: TinyMCE 5.7.1
description: Release notes for TinyMCE 5.7.1
keywords: releasenotes bugfixes
---

## Overview

{{site.productname}} 5.7.1 was released for {{site.enterpriseversion}} and {{site.cloudname}} on Wednesday, March 24<sup>th</sup>, 2021. It includes {{site.productname}} 5.7.1 and additional changes to premium plugins. These release notes provide an overview of the changes for {{site.productname}} 5.7.1, including:

- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [General bug fixes](#generalbugfixes)
- [Security fixes](#securityfixes)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

{{site.releasenotes_for_stable}}

## Accompanying Premium Plugin changes

The following premium plugin updates were released alongside {{site.productname}} 5.7.1.

### PowerPaste 5.4.2

The {{site.productname}} 5.7.1 release includes an accompanying release of the **PowerPaste** premium plugin.

**PowerPaste** 5.4.2 provides the following bug fixes:

* Fixed a security issue where dragging and dropping content wasn't correctly sanitized in some cases.

For information on the PowerPaste plugin, see: [PowerPaste plugin]({{site.baseurl}}/plugins/premium/powerpaste/).

## General bug fixes

{{site.productname}} 5.7.1 provides fixes for the following bugs:

* Fixed the `help` dialog incorrectly linking to the changelog of TinyMCE 4 instead of TinyMCE 5.
* Fixed a bug where error messages were displayed incorrectly in the image dialog.
* Fixed a bug where context menu items with names that contained uppercase characters were not displayed.
* Fixed context menu items lacking support for the `disabled` and `shortcut` properties.
* Fixed a regression where the width and height were incorrectly set when embedding content using the `media` dialog.

## Security fixes

{{site.productname}} 5.7.1 provides fixes for the following security issues.

Fixed an issue where URLs were not correctly filtered in some cases.

**PowerPaste** 5.4.2 fixes a security issue where dragging and dropping content wasn't correctly sanitized in some cases. Tiny Technologies would like to thank Maurice Dauer for discovering this vulnerability.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
