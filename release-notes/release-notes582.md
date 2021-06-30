---
layout: default
title: TinyMCE 5.8.2
title_nav: TinyMCE 5.8.2
description: Release notes for TinyMCE 5.8.2
keywords: releasenotes bugfixes
---

## Overview

{{site.productname}} 5.8.2 was released for {{site.enterpriseversion}} and {{site.cloudname}} on Wednesday, June 30<sup>th</sup>, 2021. It includes {{site.productname}} 5.8.2 and additional changes to premium plugins. These release notes provide an overview of the changes for {{site.productname}} 5.8.2, including:

- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [General bug fixes](#generalbugfixes)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

{{site.releasenotes_for_stable}}

## Accompanying Premium Plugin changes

The following premium plugin updates were released alongside {{site.productname}} 5.8.2.

### Export 1.0.2

The {{site.productname}} 5.8.2 release includes an accompanying release of the **Export** premium plugin.

**Export** 1.0.2 provides the following bug fixes:

- The client-side PDF exporter would fail to export when a circular reference was present during JSON serialization.

For information on the Export plugin, see: [Export plugin]({{site.baseurl}}/plugins/premium/export/).

### PowerPaste 5.5.1

The {{site.productname}} 5.8.2 release includes an accompanying release of the **PowerPaste** premium plugin.

**PowerPaste** 5.5.1 provides the following bug fixes:

- Fixed a performance issue when pasting Google Docs content.
- Fixed indented text pasted from Google Docs unable to be outdented.
- Pasted images that failed to be converted to a blob would cause an uncaught exception and lock up the editor.

For information on the PowerPaste plugin, see: [PowerPaste plugin]({{site.baseurl}}/plugins/premium/powerpaste/).

### Spell Checker Pro 2.3.2

The {{site.productname}} 5.8.2 release includes an accompanying release of the **Spell Checker Pro** premium plugin.

**Spell Checker Pro** 2.3.2 provides the following bug fixes:

- Entering `hasOwnProperty` into the editor was throwing exceptions.

For information on the Spell Checker Pro plugin, see: [Spell Checker Pro plugin]({{site.baseurl}}/plugins/premium/tinymcespellchecker/).

## General bug fixes

{{site.productname}} 5.8.2 provides fixes for the following bugs:

- Fixed an issue when pasting cells from tables containing `colgroup`s into tables without `colgroup`s.
- Fixed an issue that could cause an invalid toolbar button state when multiple inline editors were on a single page.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
