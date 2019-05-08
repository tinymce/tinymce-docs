---
layout: default
title: Changelog
description: The history of TinyMCE releases.
keywords: changelog
class: changelog
---

{% capture changelog %}

## Version 5.0.5 May 9, 2019
* Added menu items to match the forecolor/backcolor toolbar buttons.
* Added default directionality based on the configured language.
* Added styles, icons and tests for rtl mode.
* Fixed autoresize not working with floating elements or when media elements finished loading.
* Fixed incorrect vertical caret positioning in IE 11.
* Fixed submenu anchoring hiding overflowed content.
* Removed unused and hidden validation icons to avoid displaying phantom tooltips.

## Version 5.0.4 April 23, 2019
* Added back URL dialog functionality, which is now available via `editor.windowManager.openUrl()`.
* Added the missing throbber functionality when calling `editor.setProgressState(true)`.
* Added function to reset the editor content and `undo`/`dirty` state via `editor.resetContent()`.
* Added the ability to set menu buttons as `active`.
* Added `editor.mode` API, featuring a custom editor mode API.
* Added better styling to `floating` toolbar drawer.
* Added the new premium plugins to the Help dialog plugins tab.
* Added the linkchecker context menu items to the default configuration.
* Fixed image context menu items showing on placeholder images.
* Fixed dialog labels and text color contrast within notifications/alert banners to satisfy WCAG 4.5:1 contrast ratio for accessibility.
* Fixed the `selectbox` and `colorpicker` items not being translated.
* Fixed toolbar drawer `sliding` mode to correctly focus the editor when tabbing via keyboard navigation.
* Fixed positioning of the styleselect menu in iOS while using the mobile theme.
* Fixed the `menubutton` `onSetup` callback to be correctly executed when rendering the menu buttons.
* Fixed `default_link_target` setting to be correctly utilized when creating a link.
* Fixed `colorpicker` floating marginally outside its container.
* Fixed `disabled` menu items displaying as `active` when hovered.
* Removed redundant mobile wrapper.

## Version 5.0.3 March 19, 2019
* Changed empty nested-menu items within the style formats menu to be disabled or hidden if the value of `style_formats_autohide` is `true`.
* Changed the entire phrase 'Powered by Tiny' in the status bar to be a link instead of just the word 'Tiny'.
* Changed `formatselect`, `styleselect`, and `align` menus to use the `mceToggleFormat` command internally.
* Fixed toolbar keyboard navigation to work as expected when `toolbar_drawer` is configured.
* Fixed text direction buttons to display the correct pressed state in selections that have no explicit `dir` property.
* Fixed the mobile editor to clean up properly when removed.
* Fixed quickbar toolbars to add an empty box to the screen when it is set to `false`.
* Fixed an issue where pressing the **Delete/Backspace** key at the edge of tables was creating incorrect selections.
* Fixed an issue where dialog collection items (emoticon and special character dialogs) couldn't be selected with touch devices.
* Fixed a type error introduced in TinyMCE version 5.0.2 when calling `editor.getContent()` with nested bookmarks.
* Fixed an issue that prevented default icons from being overridden.
* Fixed an issue where **Home/End** keys wouldn't move the caret correctly before or after `contenteditable=false` inline elements.
* Fixed styles to be preserved in IE 11 when editing via the `fullpage` plugin.
* Fixed the `link` plugin context toolbar missing the open link button.
* Fixed inconsistent dialog component spacing.

## Version 5.0.2 March 5, 2019
* Added presentation and document presets to `htmlpanel` dialog component.
* Added missing `fixed_toolbar_container` setting that has been reimplemented in the Silver theme.
* Added a new toolbar setting `toolbar_drawer` that moves toolbar groups which overflow the editor width into either a *sliding* or *floating* toolbar section.
* Changed the build process to include package lock files in the dev distribution archive.
* Fixed inline dialogs that did not have aria attributes.
* Fixed the UI registry to include default icons to enhance flexibility and allow use outside of toolbar buttons.
* Fixed a memory leak related to select toolbar items.
* Fixed a memory leak due to format changed listeners that were never unbound.
* Fixed an issue where content may have been lost when using permanent bookmarks.
* Fixed the `quicklink` toolbar button not rendering in the `quickbars` plugin.
* Fixed an issue where menus were generating invalid HTML in some cases.
* Fixed an issue that could cause the mobile theme to show a blank white screen when the editor was inside an `overflow:hidden` element.
* Fixed mobile theme using a transparent background and not taking up the full width on iOS.
* Fixed the template plugin dialog missing the `description` field.
* Fixed input dialog components using an invalid default `type` attribute.
* Fixed an issue where pressing the Backspace/Delete keys before or after page break elements wouldn't move the caret.
* Fixed an issue in the table plugin where menu items and toolbar buttons weren't showing correctly based on the selection.
* Fixed inconsistent button focus styles in Firefox.
* Fixed the resize icon floating left when all status bar elements were disabled.
* Fixed the resize handle to not show in fullscreen mode.

## Version 5.0.1 February 21, 2019
* Added H1-H6 toggle button registration to the silver theme.
* Added code sample toolbar button will now toggle on when the cursor is in a code section.
* Added new settings to the emoticons plugin to allow additional emoticons to be added.
* Fixed an issue where adding links to images would replace the image with text.
* Fixed an issue where the inline editor could use fractional pixels for positioning.
* Fixed an issue where uploading non-image files in the Image Plugin upload tab threw an error.
* Fixed an issue in the media plugin that was causing the source URL and height/width to be lost in certain circumstances.
* Fixed an issue with the Context Toolbar not being removed when clicking outside of the editor.
* Fixed an issue where clicking 'Remove link' wouldn't remove the link in certain circumstances.
* Fixed an issue where the media plugin would fail when parsing dialog data.
* Fixed an issue where retrieving the selected content as text didn't create new lines.
* Fixed incorrect keyboard shortcuts in the Help dialog for Windows.
* Fixed an issue where JSON serialization could produce invalid JSON.
* Fixed production CSS including references to source maps.
* Fixed development CSS was not included in the development zip.
* Fixed the `autocompleter` matches predicate not matching on the start of words by default.
* Fixed an issue where the page could be scrolled with modal dialogs open.
* Fixed an issue where autocomplete menus would show an icon margin when no items had icons.
* Fixed an issue in the `quickbars` plugin where images incorrectly showed the text selection toolbar.
* Fixed an issue that caused the inline editor to fail to render when the target element already had focus.
* Removed paste as text notification banner and `paste_plaintext_inform` setting.

## Version 5.0.0 February 4, 2019
* Added links and registered names with `*` to denote premium plugins in Plugins tab of Help dialog.
* Changed TinyMCE 5 mobile skin to look more uniform with the desktop.
* Fixed an issue where tab panel heights weren't sizing properly on smaller screens and weren't updating on resize.
* Fixed an issue where tab panel heights weren't sizing properly on smaller screens and weren't updating on resize.
* Fixed image tools not having any padding between the label and slider.
* Fixed Blacklisted table,` th` and `td` as inline editor target.
* Fixed context toolbar toggle buttons not showing the correct state.
* Fixed missing separators in the spellchecker context menu between the suggestions and actions.
* Fixed notification icon positioning in alert banners.
* Fixed a typo in the word count plugin name.
* Fixed `charmap` and emoticons dialogs not having a primary button.
* Fixed an issue where resizing wouldn't work correctly depending on the box-sizing model.

## Version 5.0.0-rc-2 January 22, 2019
* Added screen reader accessibility for sidebar and status bar.
* Changed Emoticons and Charmap dialogs to be screen reader accessible.
* Changed the `textpattern` plugin to support nested patterns properly and to allow running a command with a value for a pattern with a start and an end.
* Changed checkboxes to use a boolean for its state, instead of a string.
* Changed formatting menus, so they are registered and made the align toolbar button use an icon instead of text.
* Fixed the link dialog such that it will now retain class attributes when updating links.
* Fixed "Find and replace" not showing in the "Edit" menu by default.
* Fixed dropdown buttons missing the 'type' attribute, which could cause forms to be incorrectly submitted.
* Fixed `emoticon` and `charmap` search not returning expected results in certain cases.
* Fixed blank rel_list values throwing an exception in the link plugin.
* Removed unnecessary 'flex' and unused 'colspan' properties from the new dialog APIs.

## Version 5.0.0-rc-1 January 8, 2019
* Added editor settings functionality to specify title attributes for toolbar groups.
* Added icons instead of button text to improve Search and Replace dialog footer appearance.
* Added `tox-dialog__table` instead of `mce-table-striped` class to enhance Help dialog appearance.
* Added title attribute to iframes so, screen readers can announce iframe labels.
* Added a wordcount menu item, that defaults to appearing in the tools menu.
* Changed the `autocompleter` to only show when it has matched items.
* Changed **SizeInput** labels to **Height** and **Width** instead of **Dimensions**.
* Changed the build process to minify and generate ASCII only output for the emoticons database.
* Changed the font select dropdown logic to try to detect the system font stack and show "System Font" as the font name.
* Fixed read-only mode not fully disabling editing content.
* Fixed accessibility issues with the font select, font size, style select, and format select toolbar dropdowns.
* Fixed accessibility issues with split dropdowns.
* Fixed the `legacyoutput` plugin to be compatible with TinyMCE 5.0.
* Fixed icons not showing correctly in the `autocompleter` popup.
* Fixed an issue where preview wouldn't show anything in Edge under certain circumstances.
* Fixed the height being incorrectly calculated for the `autoresize` plugin.

## Version 5.0.0-beta-1 November 30, 2018
* Added a new `addNestedMenuItem()` UI registry function and changed all nested menu items to use the new registry functions.
* Added `title` attribute to color swatch colors.
* Added `anchorbar` component to anchor inline toolbar dialogs to instead of the toolbar.
* Added support for **toolbar<n>** and **toolbar array** config options to be squashed into a single toolbar and not create multiple toolbars.
* Added error handling for when `forced_root_block` config option is set to `true`.
* Added functionality for the `removed_menuitems` config option.
* Added the ability to use a string to reference menu items in menu buttons and submenu items.
* Changed the name of the "inlite" plugin to "quickbars".
* Changed the background color icon to highlight background icon.
* Changed Help dialog to be accessible to screen readers.
* Changed the color swatch to save selected custom colors to local storage for use across sessions.
* Changed `WindowManager` API - methods `getParams`, `setParams` and `getWindows`, and the legacy `windows` property, have been removed. `alert` and `confirm` dialogs are no longer tracked in the window list.
* Fixed an inline mode issue where the save plugin upon saving can cause content loss.
* Fixed an issue in IE 11 where calling `selection.getContent()` would return an empty string when the editor didn't have focus.
* Removed compat3x plugin.


## Version 5.0.0-preview-4 November 12, 2018
* Added width and height placeholder text to image and media dialog dimensions input.
* Added the ability to keyboard navigate through menus, toolbars, sidebar and the status bar sequentially.
* Added translation capability back to the editor's UI.
* Added `label` component type for dialogs to group components under a label.
* Changed the editor resize handle so that it should be disabled when the `autoresize` plugin is turned on.
* Changed UI text for microcopy improvements.
* Fixed distraction free plugin.
* Fixed contents of the input field selected on focus instead of just receiving an outline highlight.
* Fixed styling issues with dialogs and menus in IE 11.
* Fixed custom style format control not honoring custom formats.
* Fixed context menu not appearing when clicking an image with a caption.
* Fixed directionality of UI when using an RTL language.
* Fixed page responsiveness with multiple inline editors.
* Fixed empty toolbar groups appearing through an invalid configuration of the `toolbar` property.
* Fixed text not being retained when updating links through the link dialog.
* Fixed edit image context menu, context toolbar, and toolbar items being incorrectly enabled when selecting invalid images.
* Fixed emoji type ahead being shown when typing URLs.
* Fixed toolbar configuration properties incorrectly expecting string arrays instead of strings.
* Fixed the block formatting toolbar item not showing a "Formatting" title when there is no selection.
* Fixed clicking disabled toolbar buttons hiding the toolbar in inline mode.
* Fixed `EditorResize` event not being fired upon editor resize.
* Fixed tables losing styles when updating through the dialog.
* Fixed context toolbar positioning to be more consistent near the edges of the editor.
* Fixed table of contents plugin now works with v5 toolbar APIs correctly.
* Fixed the `link_context_toolbar` configuration not disabling the context toolbar.
* Fixed the link context toolbar showing incorrect relative links.
* Fixed the alignment of the icon in alert banner dialog components.
* Fixed the visual blocks and visual char menu options not displaying their toggled state.
* Fixed the editor not displaying as fullscreen when toggled.
* Removed the tox-custom-editor class that was added to the wrapping element of codemirror.

## Version 5.0.0-preview-3 October 18, 2018
* Changed editor layout to use modern CSS properties over manually calculating dimensions.
* Changed `autoresize_min_height` and `autoresize_max_height` configurations to `min_height` and `max_height`.
* Changed `Whole word` label in Search and Replace dialog to `Find whole words only`.
* Fixed bugs with editor width jumping when resizing and the iframe not resizing to smaller than `150px` in height.
* Fixed mobile theme bug that prevented the editor from loading.
* Fixed long toolbar groups extending outside of the editor instead of wrapping.
* Fixed dialog titles so they are now the proper case.
* Fixed color picker default to be `#000000` instead of `#ff00ff`.
* Fixed "match case" option on the **Find and Replace** dialog is no longer selected by default.
* Fixed vertical alignment of toolbar icons.
* Fixed toolbar icons not appearing on IE11.

## Version 5.0.0-preview-2 October 10, 2018
* Added swatch is now shown for `colorinput` fields, instead of the `colorpicker` directly.
* Added `fontformats` and `fontsizes` menu items.
* Changed configuration of color options has been simplified to `color_map`, `color_cols`, and `custom_colors`.
* Changed `height` configuration to apply to the editor frame (including menubar, toolbar, status bar) instead of the content area.
* Fixed `styleselect` not updating the displayed item as the cursor moved.
* Fixed preview iframe not expanding to the dialog size.
* Fixed 'meta' shortcuts not translated into platform-specific text.
* Fixed tabbed dialogs (Charmap and Emoticons) shrinking when no search results returned.
* Fixed a bug where alert banner icons were not retrieved from icon pack.
* Fixed component styles to flex, so they fill large dialogs.
* Fixed editor flashing unstyled during load (still in progress).
* Removed `colorpicker` plugin, it is now in the theme.
* Removed `textcolor` plugin, it is now in the theme.

## Version 5.0.0-preview-1 October 1, 2018
* Developer preview 1

{% endcapture %}

{{ changelog | pretty_changelog }}
