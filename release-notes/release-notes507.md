---
layout: default
title: TinyMCE 5.0.7
title_nav: TinyMCE 5.0.7
keywords: releasenotes newfeatures deleted technologypreview bugfixes knownissues
---

## Overview

The Release Notes provide high-level coverage of the improvements and additions that have been implemented in TinyMCE 5.0.7 and document known problems in this release, as well as important bug fixes, deprecated functionality, and other details.

TinyMCE 5.0.7 release adds improvements to the TinyMCE editor to improve the overall user experience.

## New features

### Premium Skins and Icon Packs

The new **Premium Skins and Icon Packs** adds an easy way to quickly give TinyMCE a new look, or to make it easier to integrate with popular CSS frameworks, such as `Bootstrap`, `Material Design` from Google, and `Fabric`, which is the design system for Microsoft Office.

To try out the **Premium Skins and Icon Packs** start with this [dedicated product page](https://apps.tiny.cloud/products/skins-and-icon-packs/) or check out the [pricing page](https://www.tiny.cloud/pricing) to see all the flexible pricing options.

For more information and demos on the new **Premium Skins and Icon Packs** refer to the full [documentation]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/).

### Tiny Drive

Tiny Drive 1.3.0 comes with significant changes to the previous versions. Improved solutions have been introduced for unnecessary and obsolete configuration options. A comprehensive list of the updates and fixed issues is available in the [Changelog]({{site.baseurl}}/tinydrive/changelog/).

To try out **Tiny Drive** start with this [dedicated product page](https://www.tiny.cloud/drive/) or check out the [pricing page](https://www.tiny.cloud/pricing) to see all the flexible pricing options.

For more information on **Tiny Drive** refer to the full [documentation]({{site.baseurl}}/tinydrive/).

There is also a demo provided to explore the **Tiny Drive** capabilities [here]({{site.baseurl}}/tinydrive/introduction/#demo).

### Enhanced Media Embed

**Enhanced Media Embed** 2.2.0 adds a new [`mediaembed_inline_styles`]({{site.baseurl}}/plugins/mediaembed/#mediaembed_inline_styles) setting allowing styles to be embedded inline, instead of requiring additional content css to be added to your site.

For more information on **Enhanced Media Embed** refer to the full [documentation]({{site.baseurl}}/plugins/mediaembed/).

### Image Tools custom image fetch

The **Image Tools** plugin includes a new `imagetools_fetch_image` setting, which allows a custom function to be used to fetch the image content for more complex, such as when authentication is required.

For more information on `imagetools_fetch_image`, refer to the [documentation]({{site.baseurl}}/plugins/imagetools/#imagetools_fetch_image).

### Help API

The **Help** plugin includes a new `help_tabs` setting and an API to be able to add tabs from within custom plugins. This allows for the default tabs to be enabled/disabled, change the tab order or to add additional tabs to the help dialog.

For more information on the new `help_tabs` setting and API, refer to the [documentation]({{site.baseurl}}/plugins/help/).

## Updates and enhancements

### TinyMCE

The new TinyMCE 5.0.7 editor comes with significant changes to the previous versions. Improved solutions have been introduced for unnecessary and obsolete configuration options. A comprehensive list of the updates and fixed issues is available in the [changelog]({{site.baseurl}}/changelog/#version507june52019).

## Known issues

### Premium skins and icon packs

Using the cloud hosted premium content skins, in combination with the [preview]({{site.baseurl}}/plugins/preview/) plugin will cause nothing to render in the preview dialog. This is because the `Origin` header to be sent to the server is `null`, due to how the preview dialog is implemented in TinyMCE. This will be fixed in the next patch release of TinyMCE.

> Note: This issue only impacts cloud and does not impact self-hosted installations.