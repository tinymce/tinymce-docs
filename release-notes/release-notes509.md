---
layout: default
title: TinyMCE 5.0.9
title_nav: TinyMCE 5.0.9
keywords: releasenotes newfeatures deleted technologypreview bugfixes knownissues
---

> **Important:** Premium Plugins were updated on the 17th July, 2019, as described in the [Errata&#58; TinyMCE 5.0.9 Premium Plugins](#erratatinymce509premiumplugins).

## Overview

{{site.productname}} 5.0.9 was released for {{site.enterpriseversion}} and {{site.cloudname}} on Wednesday, July 3<sup>rd</sup>, 2019. It includes {{site.productname}} 5.0.9 and additional changes to premium plugins. The Release Notes provide high-level coverage of the improvements and additions that have been implemented in TinyMCE 5.0.9 and document known problems in this release, as well as important bug fixes, deprecated functionality, and other details.

TinyMCE 5.0.9 release adds improvements to the TinyMCE editor to improve the overall user experience.

> **Note:** TinyMCE 5.0.8 community was not released to enterprise due to issues found during QA. As such TinyMCE 5.0.9 enterprise contains changes from both TinyMCE 5.0.8 and 5.0.9 community releases.


## New features

### TinyMCE

#### Multiple toolbars

TinyMCE 5.0.9 adds back the ability to include multiple toolbars in the editor, similar to TinyMCE 4.x. Multiple toolbars can be configured by using the toolbar array or toolbar1, toolbar2, etc... configuration options.

![Multiple toolbars]({{site.baseurl}}/images/multiple-toolbars.png)

For more information on multiple toolbars refer to the [documentation]({{site.baseurl}}/configure/editor-appearance/#usingmultipletoolbars).

> **Note:** If multiple toolbars are used, the toolbar drawer will be disabled as toolbar drawers aren't compatible with multiple toolbars.

#### base_url and suffix options

TinyMCE 5.0.9 adds two new configuration options: `base_url` and `suffix`. These new options provide an easier way to provide the editor manager `baseURL` and `suffix` properties.

For more information on the new options refer to the [base_url]({{site.baseurl}}/configure/integration-and-setup/#base_url) and [suffix]({{site.baseurl}}/configure/integration-and-setup/#suffix) documentation.

#### Media plugin m4a file support

The **Media** plugin now supports the `M4A` audio format. Inserting a m4a file will now be embedded using a HTML5 `<audio>` element.

For more information on the media plugin refer to the [documentation]({{site.baseurl}}/plugins/opensource/media/).

## Updates and enhancements

### TinyMCE

The new TinyMCE 5.0.9 editor comes with numerous changes to the previous versions. A comprehensive list of the updates and fixed issues is available in the [changelog]({{site.baseurl}}/changelog/#version509june262019).

#### Iframe dialog component

The TinyMCE `iframe` dialog component has been changed to use the `srcdoc` attribute instead of the `src` attribute when sandboxing is enabled, which will allow the `Origin` header to be correctly sent to the server.

This resolves the issue with the previous release where cloud hosted **Premium Skins and Icon packs** failed to load in the **Preview** plugin dialog.

#### Space key not working in lists

TinyMCE 5.0.9 has addressed an issue where trying to press the space key at the end of a nested list may not have correctly inserted a space.

#### Legacy Output plugin

The **Legacy Output** plugin comes with numerous bug fixes and improvements. Issues have been addressed so that the correct font size will be shown in the font size selector, images can be center aligned and removing text colors will work as expected.

For more information on **Legacy Output** refer to the [documentation]({{site.baseurl}}/plugins/opensource/legacyoutput/).

### Enhanced Media Embed

**Enhanced Media Embed** 2.2.1 has addressed an issue where pressing the enter key after multiple links, separated by `<br>` elements, could cause the links to disappear.

For more information on **Enhanced Media Embed** refer to the [documentation]({{site.baseurl}}/plugins/premium/mediaembed/).

### LinkChecker

**LinkChecker** 2.0.3 has addressed an issue where empty or blank links were incorrectly sent for validation and marked as invalid.

For more information on **Link Checker** refer to the [documentation]({{site.baseurl}}/plugins/premium/linkchecker/).


## Errata&#58; TinyMCE 5.0.9 Premium Plugins

This errata documents updates to the TinyMCE 5.0.9 Premium Plugins released on the 17th July, 2019. Future releases of TinyMCE will also include these changes.

### Tiny Comments

**Tiny Comments** 2.1.0 adds two optional display name settings:

* `tinycomments_author_name` option for embedded mode.
* `authorName` API property for callback mode.

These settings can resolve permission issues related to duplicate user names by separating the "author id" and "author name".

> **Note:** If these settings are not used, **Tiny Comments** reverts to using the `tinycomments_author` option or `author` property for the display name.

For information on **Tiny Comments**, refer to the [**Tiny Comments** documentation]({{site.baseurl}}/plugins/premium/comments/).

### PowerPaste

The new version of PowerPaste 5.0.1 includes bug fixes. Refer to the changelog below for a full list of changes.

##### Changelog

* Added: console logged error codes to assist with support requests.
* Removed: unused Flash files that were getting bundled with PowerPaste.
* Fixed: PowerPaste not respecting the `automatic_uploads` editor setting.
* Fixed: images incorrectly pasted when `paste_as_text` was enabled.
* Fixed: issue where `<pre>` elements were not allowed to contain images.
* Fixed: issue where the wrong error notification was displayed when images failed to import.
* Fixed: leading, trailing and sequential spaces being lost when pasting plain text.

For information on **PowerPaste**, refer to the [**PowerPaste** documentation]({{site.baseurl}}/plugins/premium/powerpaste/).