---
layout: default
title: TinyMCE 5.4.2
title_nav: TinyMCE 5.4.2
description: Release notes for TinyMCE 5.4.2
keywords: releasenotes bugfixes
---

## Overview

{{site.productname}} 5.4.2 was released for {{site.enterpriseversion}} and {{site.cloudname}} on Wednesday, August 26<sup>th</sup>, 2020.  It includes {{site.productname}} 5.4.2 and additional changes to premium plugins. These release notes provide an overview of the changes for {{site.productname}} 5.4.2, including:

- [General bug fixes](#generalbugfixes)
- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

{{site.releasenotes_for_stable}}

## General bug fixes

{{site.productname}} 5.4.2 provides fixes for the following bugs:

* Fixed the editor not resizing when resizing the browser window in fullscreen mode.
* Fixed clicking on notifications causing inline editors to hide.
* Fixed an issue where link URLs could not be deleted or edited in the link dialog in some cases.
* Fixed a regression where setting the `anchor_top` or `anchor_bottom` options to `false` was not working.
* Fixed the `anchor` plugin not supporting the `allow_html_in_named_anchor` option.
* Fixed an exception thrown when removing inline formats that contained additional styles or classes.
* Fixed an exception thrown when positioning the context toolbar on Internet Explorer 11 in some edge cases.
* Fixed inline formats not removed when more than one `removeformat` format rule existed.
* Fixed an issue where spaces were sometimes removed when removing formatting on nearby text.
* Fixed the list toolbar buttons not showing as active when a list is selected.
* Fixed an issue where the UI would sometimes not be shown or hidden when calling the show or hide API methods on the editor.
* Fixed the list type style not retained when copying list items.
* Fixed the Paste plugin converting tabs in plain text to a single space character. A [`paste_tab_spaces`]({{site.baseurl}}/plugins/opensource/paste/#paste_tab_spaces) option has been included for setting the number of spaces used to replace a tab character.

## Accompanying Premium Plugin changes

The following premium plugins updates were released alongside {{site.productname}} 5.4.2.

### PowerPaste 5.3.2

The {{site.productname}} 5.4.2 release includes an accompanying release of the **PowerPaste** premium plugin.

**PowerPaste** 5.3.2 provides the following bug fixes:

* Fixed an exception thrown on IE 11 due to using `String.startsWith`.
* Fixed an issue where lists would become corrupt on IE 11 due to invalid empty font elements.
* Fixed multiple new lines collapsing into a single new line when pasting plain text.
* Fixed cut and copy not working with table selections.
* Fixed the PowerPaste plugin converting tabs in plain text to a single space character. A [`paste_tab_spaces`]({{site.baseurl}}/plugins/premium/powerpaste/#paste_tab_spaces) option has been included for setting the number of spaces used to replace a tab character.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
