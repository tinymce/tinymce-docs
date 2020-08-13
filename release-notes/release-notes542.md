---
layout: default
title: TinyMCE 5.4.2
title_nav: TinyMCE 5.4.2
description: Release notes for TinyMCE 5.4.2
keywords: releasenotes bugfixes
---

## Overview

These release notes provide an overview of the changes for {{site.productname}} 5.4.2, including:

- [General bug fixes](#generalbugfixes)
- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

> This is the {{site.cloudname}} and {{site.enterpriseversion}} release notes. For information on the latest community version of {{site.productname}}, see: [{{site.productname}} Changelog]({{site.baseurl}}/changelog/).

## General bug fixes

{{site.productname}} 5.4.2 provides fixes for the following bugs:

* Fixed resizing the window not resizing the editor in fullscreen mode.
* Fixed clicking on notifications causing inline editors to hide.
* Fixed an issue where link urls couldn't be deleted or edited in the link dialog in some cases.
* Fixed a regression where the `anchor_top` and `anchor_bottom` settings weren't working when set to `false`.
* Fixed an exception thrown when removing inline formats that contained additional styles or classes.
* Fixed an exception thrown when positioning the context toolbar on Internet Explorer 11 in some edge cases.
* Fixed inline formats not removed when more than one `removeformat` format rule existed.
* Fixed an issue where spaces were sometimes removed when removing formating on nearby text.
* Fixed list toolbar buttons not showing as active when a list is selected.
* Fixed an issue where the UI would sometimes not be shown or hidden when calling show or hide methods on the editor.
* Fixed the list type style not retained when copying list items.
* Fixed tabs in plain text converted to a single space and added new [`paste_tab_spaces`]({{site.baseurl}}/plugins/paste/#paste_tab_spaces) setting to control how many spaces are used to represent a tab.

## Accompanying Premium Plugin changes

The following premium plugins updates were released alongside {{site.productname}} 5.4.2.

### PowerPaste 5.3.2

The {{site.productname}} 5.4.2 release includes an accompanying release of the **PowerPaste** premium plugin.

**PowerPaste** 5.3.2 provides the following bug fixes:

* Fixed an exception thrown on IE 11 due to using `String.startsWith`.
* Fixed an issue where lists would become corrupt on IE 11 due to invalid empty font elements.
* Fixed multiple new lines collapsing into a single new line when pasting plain text.
* Fixed cut and copy not working with table selections.
* Fixed tabs in plain text converted to a single space and added new [`paste_tab_spaces`]({{site.baseurl}}/plugins/powerpaste/#paste_tab_spaces) setting to control how many spaces are used to represent a tab.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
