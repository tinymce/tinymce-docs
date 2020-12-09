---
layout: default
title: TinyMCE 5.0.14
title_nav: TinyMCE 5.0.14
keywords: releasenotes newfeatures deleted technologypreview bugfixes knownissues
---

## Overview

{{site.productname}} 5.0.14 was released for {{site.enterpriseversion}} and {{site.cloudname}} on Wednesday, August 28<sup>th</sup>, 2019. It includes {{site.productname}} 5.0.14 and additional changes to premium plugins. These Release Notes provide a high-level coverage of: improvements and additions, known issues, important bug fixes & deprecated functionality associated with the release of TinyMCE 5.0.14.

## New features

### TinyMCE

#### Autocompleter API

The autocompleter API now provides a new `reload` function to allow the autocompleter menu to reload, with potentially more or different results. This could be used for a "More..." menu item that would load more results.

See the autocompleter documentation for information: [https://www.tiny.cloud/docs/ui-components/autocompleter/](https://www.tiny.cloud/docs/ui-components/autocompleter/)


### Accessibility Checker 2.1.0

Two new settings have been introduced to allow developers to set the Accessibility Level and HTML version they wish to comply to. The new settings are:

* `a11ychecker_level`  - a, aa or aaa (aa by default)
* `a11ychecker_html_version` - html4 or html5 (html4 by default)

Accessibility Checker 2.1.0 provides a new streamlined design for the accessibility checker dialog:

![Redesigned Accessibility Checker Dialog]({{site.baseurl}}/images/accessibility_checker.png)

> **Note:** Currently, additional accessibility rules are not supported, but variations of the current rules can be checked. For example, enabling `aaa` will check the color contrast is 7:1 instead of 4.5:1.

## Updates and enhancements

### PowerPaste 5.0.2

PowerPaste 5.0.2 now provides a way for developers to keep unsupported image source URLs in the HTML, instead of PowerPaste completely removing them. To enable, set the new `powerpaste_keep_unsupported_src` setting to `true`, which will store the original `src` in the `data-image-src` attribute. This allows the images to be replaced manually using post-processing. For example: If the `src` is a `file://` URL, a service with access to the local filesystem can add the images during post-processing of the posted content.

PowerPaste 5.0.2 addresses two issues where pasting an external image could cause a Cross Origin Resource Sharing (CORS) error and pasting local image files didn't respect the `powerpaste_allow_local_images` setting.

## Bug Fixes

For a list of bug fixes included in this release, see: [Changelog - Version 5.0.14](https://www.tiny.cloud/docs/changelog/#version5014august192019)

## Known issues

### TinyMCE

#### Search and replace plugin

When using an editor larger than the size of the screen, the find and replace dialog may disappear off the top
of the screen and users will need to scroll back up to find the next match in the content. A fix will be provided in an upcoming release of TinyMCE.

## Errata&#58; TinyMCE 5.0.14 Premium Plugins

This errata documents updates to the TinyMCE 5.0.14 Premium Plugins, and was released on the 12th September, 2019. Future releases of TinyMCE will also include these changes.

### Errata&#58; Updates and enhancements

#### PowerPaste

PowerPaste 5.1.0 includes a significant update to how tables are handled when pasted from Microsoft Word or Excel. The new version produces cleaner table HTML which better conforms with HTML5 standards and tables produced by the TinyMCE tables plugin.
These changes solve bugs with TinyMCE table functionality behaving unexpectedly on tables added using PowerPaste.

### Errata&#58; Bug Fixes

#### Enhanced Media Embed

Enhanced Media Embed 2.2.3 addresses an issue where embedded snippets were not created when inputting links and pressing the Enter Key in Firefox.

For information on Enhanced Media Embed refer to the [documentation]({{site.baseurl}}/plugins/premium/mediaembed/).

#### PowerPaste

PowerPaste 5.1.0 fixes a bug introduced in 5.0.0 regarding image handling. This resulted in images being pasted as base64 encoded images, rather than as image blob. This also affected the functionality of `images_upload_handler`.
