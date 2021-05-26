---
layout: default
title: TinyMCE 5.8.1
title_nav: TinyMCE 5.8.1
description: Release notes for TinyMCE 5.8.1
keywords: releasenotes bugfixes
---

## Overview

{{site.productname}} 5.8.1 was released for {{site.enterpriseversion}} and {{site.cloudname}} on Wednesday, May 26<sup>th</sup>, 2021. It includes {{site.productname}} 5.8.1 and additional changes to premium plugins. These release notes provide an overview of the changes for {{site.productname}} 5.8.1, including:

- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [General bug fixes](#generalbugfixes)
- [Security fixes](#securityfixes)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

{{site.releasenotes_for_stable}}

## Accompanying Premium Plugin changes

The following premium plugin updates were released alongside {{site.productname}} 5.8.1.

### Advanced Code 2.3.1

The {{site.productname}} 5.8.1 release includes an accompanying release of the **Advanced Code** premium plugin.

**Advanced Code** 2.3.1 includes updates to third-party dependencies, fixing a moderate severity ReDoS vulnerability.

For information on the Advanced Code plugin, see: [Advanced Code plugin]({{site.baseurl}}/plugins/premium/advcode/).

### Export 1.0.1

The {{site.productname}} 5.8.1 release includes an accompanying release of the **Export** premium plugin.

**Export** 1.0.1 fixes an issue where content was lost in the PDF output in some cases due to a compiler issue.

For information on the Export plugin, see: [Export plugin]({{site.baseurl}}/plugins/premium/export/).

### Tiny Drive 1.4.1

The {{site.productname}} 5.8.1 release includes an accompanying release of **Tiny Drive**.

**Tiny Drive** 1.4.1 fixes an issue where the `skin` setting wasn't working in standalone-mode.

For information on Tiny Drive, see: [Tiny Drive]({{ site.baseurl }}/tinydrive/).

## General bug fixes

{{site.productname}} 5.8.1 provides fixes for the following bugs:

- An unexpected exception was thrown when switching to readonly mode and adjusting the editor width.
- Content could be lost when the `pagebreak_split_block` setting was enabled.
- The `list-style-type: none;` style on nested list items was incorrectly removed when clearing formatting.
- URLs were not always detected when pasting over a selection. Patch contributed by jwcooper.
- Properties on the `OpenNotification` event were incorrectly namespaced.

## Security fixes

{{site.productname}} 5.8.1 provides fixes for the following security issues:

The **Advanced Code** plugin (`advcode`) has been updated to include upgraded third-party dependencies to fix a moderate severity ReDoS vulnerability.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
