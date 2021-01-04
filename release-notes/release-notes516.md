---
layout: default
title: TinyMCE 5.1.6
title_nav: TinyMCE 5.1.6
description: Release notes for TinyMCE 5.1.6
keywords: releasenotes bugfixes
---

## Overview

{{site.productname}} 5.1.6 was released for {{site.enterpriseversion}} and {{site.cloudname}} on Wednesday, February 5<sup>th</sup>, 2020. It includes {{site.productname}} 5.1.6 and additional changes to premium plugins. These release notes provide an overview of the changes for {{site.productname}} 5.1.6, including:

- [General bug fixes](#generalbugfixes)
- [Security fixes](#securityfixes)
- [Premium Plugin changes](#premiumpluginchanges)

{{site.releasenotes_for_stable}}

## General bug fixes

{{site.productname}} 5.1.6 provides the following bug fixes:

- When the editor is in `readonly` mode, it will now ensure links are properly blocked when clicked.
- The `FontSize` query value command now calculates legacy font sizes consistently with CSS font sizes.
- Changing a tables row type from `Header` to `Body` no-longer incorrectly moves the row to the bottom of the table.
- Context menus now open correctly on hybrid devices that support both touch and mouse input.
- Context menus no longer open in the wrong location when the target was the editor body.
- The `image` plugin now respects the [`automatic_uploads`]({{site.baseurl}}/configure/file-image-upload/#automatic_uploads) setting when uploading local images.

## Security fixes

{{site.productname}} 5.1.6 provides fixes for the following security issues:

- CDATA parsing and sanitization has been improved to address a cross-site scripting (XSS) vulnerability.

## Premium Plugin changes

### Advanced Code Editor

The {{site.productname}} 5.1.6 release includes **Advanced Code Editor** 2.0.3.

**Advanced Code Editor** 2.0.3 provides the following bug fixes:

- The code editor gutter will no longer render on top of the content in {{site.productname}} 4.
- The code editor dialog will now resize responsively based on the window size in {{site.productname}} 5.

### Enhanced Media Embed

The {{site.productname}} 5.1.6 release includes **Enhanced Media Embed** 2.2.5.

**Enhanced Media Embed** 2.2.5 provides the following bug fixes:

- The [`mediaembed_max_width`]({{site.baseurl}}/plugins/premium/mediaembed/#mediaembed_max_width) setting will now constrain the max width correctly on Internet Explorer 11.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
