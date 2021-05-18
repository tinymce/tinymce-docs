---
layout: default
title: TinyMCE 5.8
title_nav: TinyMCE 5.8
description: Release notes for TinyMCE 5.8
keywords: releasenotes bugfixes
---

## Overview

{{site.productname}} 5.8 was released for {{site.enterpriseversion}} and {{site.cloudname}} on Wednesday, May 19<sup>th</sup>, 2021. It includes {{site.productname}} 5.8 and additional changes to premium plugins. These release notes provide an overview of the changes for {{site.productname}} 5.8, including:

- [New features](#newfeatures)
- [Enhancements](#enhancements)
- [Functionality changes](#functionalitychanges)
- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [Accompanying Premium Skins and Icon Packs changes](#accompanyingpremiumskinsandiconpackschanges)
- [General bug fixes](#generalbugfixes)
- [Deprecated features](#deprecatedfeatures)
- [Known issues](#knownissues)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

{{site.releasenotes_for_stable}}

## New features

The following new features were added for the {{site.productname}} 5.8 release.

### Added new `fixed_toolbar_container_target` option

The new `fixed_toolbar_container_target` option allows the inline toolbar to be rendered in a specified `HTMLElement`, similar to the `fixed_toolbar_container` setting. This feature was contributed by [pvrobays](https://github.com/pvrobays).

For information on the `fixed_toolbar_container_target` option, see [User interface options - `fixed_toolbar_container_target`]({{ site.baseurl }}/configure/editor-appearance/#fixed_toolbar_container_target).

### Added support for resizing the editor using the keyboard

Keyboard navigation can now be used to select the editor resize handle. Once it is selected, the arrow keys can be used to resize the editor.

For information on editor resizing, see: [User interface options - Resize]({{site.baseurl}}/configure/editor-appearance#resize).

### Additional new features

{{site.productname}} 5.8 introduces the following minor new features:

- Added the `PAGE_UP` and `PAGE_DOWN` key code constants to the `VK` API.

## Enhancements

The following enhancements were made for the {{site.productname}} 5.8 release.

### Improved keyboard navigation for the inline boundary feature

Users can now escape inline elements (such as links and comments) using the `Home`, `End`, `PageUp`, and `PageDown` keys. Due to their unique behavior, `PageUp` and `PageDown` are not available in macOS.

For information on inline boundaries, see: [Content appearance options - Inline boundaries]({{site.baseurl}}/configure/content-appearance/#inline_boundaries).

### Additional enhancements

{{site.productname}} 5.8 introduces the following minor enhancements:

- Updated the `formatter.matchFormat` API to support matching formats with variables in the `classes` property.
- Added HTML5 `audio` and `video` elements to the default alignment formats.
- Added support for alpha list numbering to the list properties dialog.

## Functionality changes

The following functionality changes were made for the {{site.productname}} 5.8 release:

- Updated the `image` dialog to display the class list dropdown as full-width if the caption checkbox is not present.
- Renamed the "H Align" and "V Align" input labels in the Table Cell Properties dialog to "Horizontal align" and "Vertical align" respectively.

## Accompanying Premium Plugin changes

The following premium plugin updates were released alongside {{site.productname}} 5.8.

### Accessibility Checker 2.3.2

The {{site.productname}} 5.8 release includes an accompanying release of the **Accessibility Checker** premium plugin.

**Accessibility Checker** 2.3.2 provides the following bug fixes:

- Fixed an issue where the ordered list structure rule was not enforced when list items were separated by `br` elements.
- Fixed an issue where adjacent links were not detected when separated by zero-width unicode characters.
- Fixed an issue that could cause paragraphs that were used as headings to not be detected.
- Fixed help documentation URLs pointing to old website locations.
- Fixed dialog button text incorrectly using title-style capitalization.

For information on the Accessibility Checker plugin, see: [Accessibility Checker plugin]({{site.baseurl}}/plugins/premium/a11ychecker/).

### Comments 2.4.0

The {{site.productname}} 5.8 release includes an accompanying release of the **Comments** premium plugin.

This release adds new resolve conversation functionality, making it is possible for the user to perform an action which has another semantic meaning than that of deleting a conversation. It is up to the integrator to perform some additional action after a user has resolved a conversation.

**Comments** 2.4.0 provides the following new features:

- Added a new `tinycomments_resolve` option for adding and configuring resolve conversation functionality for Comments in callback mode. For details, see: [Configuring comments callbacks - `tinycomments_resolve`]({{site.baseurl}}/advanced/configuring-comments-callbacks/#tinycomments_resolve).
- Added a new `tinycomments_can_resolve` option for adding and configuring resolve conversation functionality for Comments in embedded mode. For details, see: [Comments plugin - `tinycomments_can_resolve`]({{site.baseurl}}/plugins/premium/comments/#tinycomments_can_resolve).

For information on the Comments plugin, see: [Comments plugin]({{site.baseurl}}/plugins/premium/comments/).

### Export 1.0.0

The {{site.productname}} 5.8 release includes an accompanying release of the **Export** premium plugin.

**Export** 1.0.0 provides the following improvements:

- Improved error handling when a PDF conversion failure occurs due to browser limitations.
- Changed how image proxy errors are handled to gracefully fail and render a transparent image when an image proxy error occurs.

**Export** 1.0.0 provides the following bug fixes:

- Fixed an issue where internal document links did not navigate within the client-side PDF exporter output.

For information on the Export plugin, see: [Export plugin]({{site.baseurl}}/plugins/premium/export/).

### PowerPaste 5.5.0

The {{site.productname}} 5.8 release includes an accompanying release of the **PowerPaste** premium plugin.

This release adds support for copying and pasting content from Google Docs, making it possible to copy content and retain styles from Google Docs. By default, a dialog will appear asking users if the content should be cleaned or merged when pasting Google Docs content.

**PowerPaste** 5.5.0 provides the following new features:

- Added Google Docs paste support which can be controlled using the new [`powerpaste_googledocs_import` option]({{site.baseurl}}/plugins/premium/powerpaste/#powerpaste_googledocs_import).

**PowerPaste** 5.5.0 provides the following improvements:

- The editor will now show a "loading" screen while paste events are processed.

**PowerPaste** 5.5.0 provides the following bug fixes:

- Fixed an issue where automatic linking didn't work with URLs containing commas in the path.
- Fixed an issue where tables or images sometimes had negative left margins after being pasted.
- Fixed an issue where it was possible for the width to be stripped from a table when pasted.
- Fixed merge and clean dialog button text incorrectly using title-style capitalization.

For information on:

- The PowerPaste plugin, see: [PowerPaste plugin]({{site.baseurl}}/plugins/premium/powerpaste/).
- PowerPaste support and compatibility, including Google Docs support, see: [Supported Premium Versions and Platforms - PowerPaste support]({{site.baseurl}}/enterprise/system-requirements/#powerpastesupportcopyandpaste).

### Spell Checker Pro 2.3.1

The {{site.productname}} 5.8 release includes an accompanying release of the **Spell Checker Pro** premium plugin.

**Spell Checker Pro** 2.3.1 provides the following bug fixes:

- Fixed as-you-type spellchecking not running when editor content is changed programmatically.
- Fixed English medical variants incorrectly falling back to regular English.
- Fixed `en_UK` and `en_BR` incorrectly spellchecking as US English instead of UK English.
- Fixed menu items sometimes not rendering as toggled due to language codes using a case sensitive comparison.

For information on the Spell Checker Pro plugin, see: [Spell Checker Pro plugin]({{site.baseurl}}/plugins/premium/tinymcespellchecker/).

### Tiny Drive 1.4.0

The {{site.productname}} 5.8 release includes an accompanying release of **Tiny Drive**.

**Tiny Drive** 1.4.0 provides the following new features:

- Added a new [`tinydrive_skin`]({{ site.baseurl }}/tinydrive/configuration/#tinydrive_skin) option for applying a skin to the {{site.productname}} {{site.cloudfilemanager}} plugin.
- Added a new `oxide-dark` skin for plugin mode.
- Added a new PDF viewer to add previews for PDF files.

**Tiny Drive** 1.4.0 provides the following bug fixes:

- Fixed a bug where images with `exif` orientation would be incorrectly oriented.
- Fixed a bug where specifying 'audio' for the `filetype` setting would not list the files in the grid view.
- Fixed a bug where tabbing though the user interface could throw an error.

For information on Tiny Drive, see: [Tiny Drive]({{ site.baseurl }}/tinydrive/).

## Accompanying Premium Skins and Icon Packs changes

The {{site.productname}} 5.8 release includes an accompanying release of the **Premium Skins and Icon Packs**.

### Premium Skins and Icon Packs - New features

A new Fluent skin and accompanying content css, which follows the Microsoft design language, is now available for {{site.productname}}.

For information on using premium skins and icon packs, see: [Premium Skins and Icon Packs]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/).

## General bug fixes

{{site.productname}} 5.8 provides fixes for the following bugs:

- Fixed a bug where it wasn't possible to align nested list items.
- The RGB fields in the color picker dialog were not staying in sync with the color palette and hue slider.
- The color preview box in the color picker dialog was not correctly displaying the saturation and value of the chosen color.
- The color picker dialog will now show an alert if it is submitted with an invalid hex color code.
- Fixed a bug where the `TableModified` event was not fired when adding a table row with the Tab key.
- Added missing `images_file_types` setting to the exported TypeScript types.
- Fixed a bug where lists pasted from Word with Roman numeral markers were not displayed correctly. Patch contributed by aautio.
- The `editor.insertContent` API was incorrectly handling nested `span` elements with matching styles.
- The HTML5 `small` element could not be removed when clearing text formatting.
- The Oxide button text transform variable was incorrectly using `capitalize` instead of `none`. Patch contributed by dakur.
- Fix dialog button text that was using title-style capitalization.
- Table plugin could perform operations on tables containing the inline editor.
- Fixed Tab key navigation inside table cells with a ranged selection.
- The foreground and background toolbar button color indicator is no longer blurry.
- Fixed a regression in the `tinymce.create()` API that caused issues when multiple objects were created.
- Fixed the `LineHeight` command causing the `change` event to be fired inconsistently.

## Deprecated features

The following features have been deprecated with the release of {{site.productname}} 5.8:

The undocumented `setIconStroke` Split Toolbar Button API has been deprecated and will be removed in a future release.

## Known issues

This section describes issues that users of {{site.productname}} 5.8 may encounter and possible workarounds for these issues.

**Outline**

- [Unexpected behavior when moving the caret using the PageDown and End keys](#unexpectedbehaviorwhenmovingthecaretusingthepagedownandendkeys)
- [Accessibility when using keyboard navigation to resize the editor](#accessibilitywhenusingkeyboardnavigationtoresizetheeditor)
- [Content pasted from Google Docs cannot be outdented](#contentpastedfromgoogledocscannotbeoutdented)

### Unexpected behavior when moving the caret using the PageDown and End keys

**Issue**: This issue affects moving the caret over links using the `Page Down` or `End` keys. If the caret is placed adjacent to a link and the key is pressed, the caret will move inside the link rather than past it.

**Workaround**: There was no known workaround at the time of the release.

### Accessibility when using keyboard navigation to resize the editor

**Issue**: The editor can now be resized using keyboard navigation, however there is currently no available ARIA specification to indicate the resize state for screen readers or other assistive technology to consume.

**Workaround**: There was no known workaround at the time of the release. We are tracking the relevant [ARIA GitHub issue](https://github.com/w3c/aria/issues/432) for a way to support this.

### Content pasted from Google Docs cannot be outdented

**Issue**: This issue affects content pasted in from Google Docs using the [PowerPaste plugin]({{site.baseurl}}/plugins/premium/powerpaste/). When content is pasted into the editor that contains indentation, it then cannot be outdented using the available toolbar buttons.

**Workaround**: The only known workaround is to configure TinyMCE to use margins instead of padding for indentation. This can be enabled by configuring the [`indent_use_margin` option]({{site.baseurl}}/configure/content-formatting/#indent_use_margin).

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
