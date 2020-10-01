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

### The toolbar drawer can now be controlled using commands

A new editor command (`execCommand('ToggleToolbarDrawer')`) and editor state query (`queryCommandState('ToggleToolbarDrawer')`) have been added. The command allows the Toolbar Drawer (which holds excess toolbar buttons) to be opened and closed using editor commands. The current state of the Toolbar Drawer can also be queried.

For information on:

- The Toolbar Drawer, see: [User interface options - `toolbar_mode`]({{site.baseurl}}/configure/editor-appearance/#toolbar_mode).
- Commands and query commands available in {{site.productname}}, see: [Commands Available for TinyMCE]({{site.baseurl}}/advanced/editor-command-identifiers/).

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

* Added a TypeScript declaration file to the bundle output for TinyMCE core.
* Added new `table_column_resizing` setting to control how table columns are resized when using the resize bars.
* Added the ability to remove images on a failed upload using the `images_upload_handler` failure callback.
* Added `hasPlugin` function to the editor API to determine if a plugin exists or not.
* Added the ability to use `colgroup` elements in tables.
* Added a new setting `table_use_colgroups` for toggling whether colgroups are used in new tables.
* Added the ability to delete and navigate HTML media elements without the `media` plugin.
* Added `fullscreen_native` setting to the `fullscreen` plugin to enable use of the entire monitor.
* Added table related oxide variables to the Style API for more granular control over table cell selection appearance.
* Added new APIs to allow for programmatic control of the inline toolbar visibility.
* Added the `origin` property to the `ObjectResized` and `ObjectResizeStart` events, to specify which handle the resize was performed on.
* Added new StyleSheetLoader `unload` and `unloadAll` APIs to allow loaded stylesheets to be removed.
* Added back the ability to use nested items in the `image_class_list`, `link_class_list`, `link_list`, `table_class_list`, `table_cell_class_list`, and `table_row_class_list` settings.
* Changed how CSS manipulates table cells when selecting multiple cells to achieve a semi-transparent selection.
* Changed the `target` property on fired events to use the native event target. The original target for an open shadow root can be obtained using `event.getComposedPath()`.
* Changed the editor to clean-up loaded CSS stylesheets when all editors using the stylesheet have been removed.
* Changed `imagetools` context menu icon for accessing the `image` dialog to use the `image` icon.
* Changed the `editor.insertContent()` and `editor.selection.setContent()` APIs to retain leading and trailing whitespace.
* Changed the `table` plugin `Column` menu to include the cut, copy and paste column menu items.
* Changed the default table styles in the content CSS files to better support the styling options available in the `table` dialog.
* Deprecated the `Env.experimentalShadowDom` flag.

## General bug fixes

{{site.productname}} 5.5 provides fixes for the following bugs:

* Fixed tables with no borders displaying with the default border styles in the `preview` dialog.
* Fixed loss of whitespace when inserting content after a non-breaking space.
* Fixed the `event.getComposedPath()` function throwing an exception for events fired from the editor.
* Fixed notifications not appearing when the editor is within a ShadowRoot.
* Fixed focus issues with inline dialogs when the editor is within a ShadowRoot.
* Fixed the `template` plugin previews missing some content styles.
* Fixed the `media` plugin not saving the alternative source url in some situations.
* Fixed an issue where column resizing using the resize bars was inconsistent between fixed and relative table widths.
* Fixed an issue where dragging and dropping within a table would select table cells.
* Fixed up and down keyboard navigation not working for inline `contenteditable="false"` elements.
* Fixed dialog not retrieving `close` icon from icon pack.
* Fixed the `unlink` toolbar button not working when selecting multiple links.
* Fixed the `link` dialog not showing the "Text to display" field in some valid cases.
* Fixed the `DOMUtils.split()` API incorrectly removing some content.
* Fixed pressing the escape key not focusing the editor when using multiple toolbars.
* Fixed the `dirty` flag not being correctly set during an `AddUndo` event.
* Fixed `editor.selection.setCursorLocation` incorrectly placing the cursor outside `pre` elements in some circumstances.
* Fixed an exception being thrown when pressing the enter key inside pre elements while `br_in_pre` setting is false.

## Deprecated features

The following features have been deprecated with the release of {{site.productname}} 5.5:

- [The premium Mexican Spanish language pack has been deprecated](#thepremiummexicanspanishlanguagepackhasbeendeprecated).

### The premium Mexican Spanish language pack has been deprecated

With the release of {{site.productname}} 5.5, the premium Mexican Spanish language pack (`es_MX`) has been deprecated and will not be updated in the future. The community-translated Mexican Spanish language pack is unaffected.

For information on the community maintained language packs, see: [Localization options - `language`]({{site.baseurl}}/configure/localization/#language).

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
