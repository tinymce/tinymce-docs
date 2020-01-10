---
layout: default
title: TinyMCE 5.1.5
title_nav: TinyMCE 5.1.5
description: Release notes for TinyMCE 5.1.5
keywords: releasenotes bugfixes
---

These release notes provide an overview of the changes for {{site.productname}} 5.1.5, including:

- [General bug fixes](#generalbugfixes)

> This is the {{site.cloudname}} and {{site.enterpriseversion}} release notes. For information on the latest community version of {{site.productname}}, see: [{{site.productname}} Changelog]({{site.baseurl}}/changelog/).

## General bug fixes

{{site.productname}} 5.1.5 provides fixes for the following bugs:

- The editor user interface was unresponsive on "hybrid" devices that accepted both `touch` and `mouse` events.
- The `paste` plugin incorrectly pasting images when _paste as text_ was enabled.
- The `charmap` plugin focusing the first tab instead of the search input field.
- The editor throwing an exception when inserting content if the caret was directly before or after a `contenteditable="false"` element.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}