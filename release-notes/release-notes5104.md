---
layout: default
title: TinyMCE 5.10.4
title_nav: TinyMCE 5.10.4
description: Release notes for TinyMCE 5.10.4
keywords: releasenotes bugfixes
---

## Overview

{{site.productname}} 5.10.4 was released for {{site.enterpriseversion}} and {{site.cloudname}} on Wednesday, May 4<sup>th</sup>, 2022. It includes {{site.productname}} 5.10.4 and additional changes to premium plugins. These release notes provide an overview of the changes for {{site.productname}} 5.10.4, including:

- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [General bug fixes](#generalbugfixes)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

{{site.releasenotes_for_stable}}

## Accompanying Premium Plugin changes

The following premium plugin updates were released alongside {{site.productname}} 5.10.4.

### Spell Checker Pro 2.5.1

The {{site.productname}} 5.10.4 release includes an accompanying release of the **Spell Checker Pro** premium plugin.

**Spell Checker Pro** 2.5.1 fixes the page focus incorrectly changing when spellchecking is triggered on multiple editors after scrolling.

For information on the Spell Checker Pro plugin, see: [Spell Checker Pro plugin]({{site.baseurl}}/plugins/premium/tinymcespellchecker/).

## General bug fixes

{{site.productname}} 5.10.4 provides fixes for the following bugs:

- Inline toolbars flickered when switching between editors.
- Multiple inline toolbars were shown if focused too quickly.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
