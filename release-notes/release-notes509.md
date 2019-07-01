---
layout: default
title: TinyMCE 5.0.9
title_nav: TinyMCE 5.0.9
keywords: releasenotes newfeatures deleted technologypreview bugfixes knownissues
---

## Overview

The Release Notes provide high-level coverage of the improvements and additions that have been implemented in TinyMCE 5.0.9 and document known problems in this release, as well as important bug fixes, deprecated functionality, and other details.

TinyMCE 5.0.9 release adds improvements to the TinyMCE editor to improve the overall user experience.

> **Note:** TinyMCE 5.0.8 community was not released to enterprise due to blockers found during QA. As such TinyMCE 5.0.9 enterprise contains changes from both TinyMCE 5.0.8 and 5.0.9 community releases.

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

For more information on the media plugin refer to the [documentation]({{site.baseurl}}/plugins/media/).

## Updates and enhancements

### TinyMCE

The new TinyMCE 5.0.9 editor comes with significant changes to the previous versions. Improved solutions have been introduced for unnecessary and obsolete configuration options. A comprehensive list of the updates and fixed issues is available in the [changelog]({{site.baseurl}}/changelog/#version509june262019).

#### Iframe dialog component

The TinyMCE `iframe` dialog component has been changed to use the `srcdoc` attribute instead of the `src` attribute when sandboxing is enabled, which will allow the `Origin` header to be correctly sent to the server.

This resolves the issue with the previous release where cloud hosted **Premium Skins and Icon packs** failed to load in the **Preview** plugin dialog.

#### Space key not working in lists

TinyMCE 5.0.9 has addressed an issue where trying to press the space key at the end of a nested list may not have correctly inserted a space. 

#### Legacy Output plugin

The **Legacy Output** plugin comes with numerous bug fixes and improvements. Issues have been addressed so that the correct font size will be shown in the font size selector, images can be center aligned and removing text colors will work as expected.

For more information on **Legacy Output** refer to the [documentation]({{site.baseurl}}/plugins/legacyoutput/).

### Enhanced Media Embed

**Enhanced Media Embed** 2.2.1 has addressed an issue where pressing the enter key after multiple links, separated by `<br>` elements, could cause the links to disappear.

For more information on **Enhanced Media Embed** refer to the [documentation]({{site.baseurl}}/plugins/mediaembed/).

### LinkChecker

**LinkChecker** 2.0.3 has addressed an issue where empty or blank links were incorrectly sent for validation and marked as invalid.

For more information on **Link Checker** refer to the [documentation]({{site.baseurl}}/plugins/linkchecker/).