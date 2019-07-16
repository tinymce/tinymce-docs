---
layout: default
title: Errata&#58; TinyMCE 5.0.9 Premium Plugins
title_nav: Errata&#58; TinyMCE 5.0.9 Premium Plugins
description_short: Errata for updates to the TinyMCE 5.0.9 Premium Plugins
description: Errata for updates to the TinyMCE 5.0.9 Premium Plugins
keywords: errata releasenotes bugissues premiumplugins newfeatures
---

## Overview

This errata documents updates to the TinyMCE 5.0.9 Premium Plugins released on the 17th July, 2019. Future releases of TinyMCE will also include these changes.

## Tiny Comments

**Tiny Comments** 2.1.0 adds two optional display name settings:

* `tinycomments_author_name` option for embedded mode.
* `authorName` API property for callback mode.

These settings can resolve permission issues related to duplicate user names by separating the "author id" and "author name".

> **Note:** If these settings are not used, **Tiny Comments** reverts to using the `tinycomments_author` option or `author` property for the display name.

For information on **Tiny Comments**, refer to the [**Tiny Comments** documentation]({{site.baseurl}}/plugins/comments/).

## PowerPaste

The new version of PowerPaste 5.0.1 includes bug fixes. Refer to the changelog below for a full list of changes.

### Changelog

* Added: console logged error codes to assist with support requests.
* Removed: unused Flash files that were getting bundled with PowerPaste.
* Fixed: PowerPaste not respecting the `automatic_uploads` editor setting.
* Fixed: images incorrectly pasted when `paste_as_text` was enabled.
* Fixed: issue where `<pre>` elements were not allowed to contain images.
* Fixed: issue where the wrong error notification was displayed when images failed to import.
* Fixed: leading, trailing and sequential spaces being lost when pasting plain text.

For information on **PowerPaste**, refer to the [**PowerPaste** documentation]({{site.baseurl}}/plugins/powerpaste/).