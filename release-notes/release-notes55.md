---
layout: default
title: TinyMCE 5.5
title_nav: TinyMCE 5.5
description: Release notes for TinyMCE 5.5
keywords: releasenotes bugfixes
---

These release notes provide an overview of the changes for {{site.productname}} 5.5, including:

- [TinyMCE 5.5 new features and enhancements](#tinymce54newfeaturesandenhancements)
- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [Minor changes for TinyMCE 5.5](#minorchangesfortinymce54)
- [General bug fixes](#generalbugfixes)
- [Security fixes](#securityfixes)
- [Deprecated features](#deprecatedfeatures)
- [Known issues](#knownissues)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

> This is the {{site.cloudname}} and {{site.enterpriseversion}} release notes. For information on the latest community version of {{site.productname}}, see: [{{site.productname}} Changelog]({{site.baseurl}}/changelog/).

## TinyMCE 5.5 new features and enhancements

The following new features and enhancements were added for the {{site.productname}} 5.5 release.

### New `contextmenu_avoid_overlap` option for controlling the placement of context menus

The new `contextmenu_avoid_overlap` option can be used to prevent context menus from covering the selected node if the node matches the specified [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).

For information on the `contextmenu_avoid_overlap` option, see: [User interface options - `contextmenu_avoid_overlap`]({{site.baseurl}}/configure/editor-appearance/#contextmenu_avoid_overlap).

### New persistent toolbar option for inline mode

A new `toolbar_persist` option has been added for disabling the automatic show and hide behavior of the toolbar and menu bar for inline editors.

For information on the new persistent toolbar option, see: [User interface options - `toolbar_persist`]({{site.baseurl}}/configure/editor-appearance/#toolbar_persist).

### New listbox component for custom dialogs

The new listbox component for custom dialogs is a composite component with a label and a dropdown list of options for users to select from. This component displays a menu-like dropdown and allows nested options to be shown to users.

For information on the listbox dialog component, see: [Dialog components - listbox]({{site.baseurl}}/ui-components/dialogcomponents/#listbox).

### New line height support in the editor

{{site.productname}} 5.5 now supports adjustable line heights. There is a new `lineheight` button available for toolbars, and a new `lineheight` menu item (included by default in the format menu). There is also a new `LineHeight` editor command to change line height and a `LineHeight` query command value to get the current line height.

For information on:

- The `lineheight` toolbar button, see: [Available Toolbar Buttons - The core toolbar buttons]({{site.baseurl}}/advanced/available-toolbar-buttons/#thecoretoolbarbuttons).
- The `lineheight` menu item, see: [Available Menu Items - The core menu items]({{site.baseurl}}/advanced/available-menu-items/#the-core-menu-items).
- The `LineHeight` editor command, see: [Commands available for {{site.productname}} - Core Editor commands]({{site.baseurl}}/advanced/editor-command-identifiers/#coreeditorcommands).
- The `LineHeight` query command value, see: [Commands available for {{site.productname}} - Available query command values]({{site.baseurl}}/advanced/editor-command-identifiers/#availablequerycommandvalues).

## Accompanying Premium Plugin changes

The following premium plugin updates were released alongside {{site.productname}} 5.5.

### Advanced Code Editor X.Y.Z

The {{site.productname}} 5.5 release includes an accompanying release of the **Advanced Code Editor** premium plugin.

**Advanced Code Editor** X.Y.Z provides the following improvements:

-

For information on the    plugin, see: []().

## Minor changes for TinyMCE 5.5

{{site.productname}} 5.5 introduces the following minor changes:

*

## General bug fixes

{{site.productname}} 5.5 provides fixes for the following bugs:

*


## Security fixes

{{site.productname}} 5.5 provides fixes for the following security issues:

*

## Deprecated features

The following features have been deprecated with the release of {{site.productname}} 5.5:

- []().

###

## Known issues

This section describes issues that users of {{site.productname}} 5.5 may encounter, as well as possible workarounds for these issues.

**Outline**

* []()

###

#### Issue


#### Workaround


{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
