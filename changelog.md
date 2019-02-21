---
layout: default
title: Changelog
description: The history of TinyMCE releases.
keywords: changelog
class: changelog
---

{% capture changelog %}

## Version 5.0.1 February 21, 2019
* Fixed an issue where adding links to images would replace the image with text.
* Fixed an issue where the inline editor could use fractional pixels for positioning.
* Fixed an issue where uploading non-image files in the Image Plugin upload tab threw an error.
* Added H1-H6 toggle button registration to the silver theme.
* Fixed an issue in the media plugin that was causing the source url and height/width to be lost in certain circumstances.
* Fixed an issue with the Context Toolbar not being removed when clicking outside of the editor.
* Fixed an issue where clicking 'Remove link' wouldn't remove the link in certain circumstances.
* Added the ability highlight the code sample toolbar button when a code sample is selected.
* Fixed an issue where the media plugin would fail when parsing dialog data.
* Fixed an issue where retrieving the selected content as text didn't create newlines.
* Fixed incorrect keyboard shortcuts in the Help dialog for Windows.
* Fixed an issue where JSON serialization could produce invalid JSON.
* Fixed production CSS including references to source maps.
* Fixed development CSS was not included in development zip.
* Added a new toolbar setting `toolbar_drawer` that, upon the toolbar running over one line of groups, the remaining groups will overflow into a collapsible drawer.
* Fixed the autocompleter matches predicate not matching on the start of words by default.
* Added new settings to the emoticons plugin to allow additional emoticons to be added.
* Fixed an issue where the window could be scrolled with modal dialogs open.
* Fixed an issue where autocomplete menus would show an icon margin, when no items had icons.
* Fixed an issue in the quickbars plugin where images incorrectly showed the text selection toolbar.
* Fixed an issue that caused the inline editor to fail to render in specific circumstances.
* Removed paste as text notification banner and paste_plaintext_inform setting.

## Version 5.0.0 February 4, 2019
* Fixed an issue where tab panel heights weren't sizing properly on smaller screens and weren't updating on resize.
* Added links and registered names with * to denote premium plugins in Plugins tab of Help dialog.
* Fixed an issue where tab panel heights weren't sizing properly on smaller screens and weren't updating on resize.
* Changed Tiny 5 mobile skin to look more uniform with desktop.
* Fixed image tools not having any padding between the label and slider.
* Fixed Blacklisted table, th and td as inline editor target.
* Fixed context toolbar toggle buttons not showing the correct state.
* Fixed missing separators in the spellchecker context menu between the suggestions and actions.
* Fixed notification icon positioning in alert banners.
* Fixed a typo in the word count plugin name.
* Fixed charmap and emoticons dialogs not having a primary button.
* Fixed an issue where resizing wouldn't work correctly depending on the box-sizing model.

## Version 5.0.0-rc-2 January 22, 2019
* Removed unnecessary 'flex' and unused 'colspan' properties from the new dialog APIs.
* Added screen reader accessibility for sidebar and statusbar.
* Updated Emoticons and Charmap dialogs to be screen reader accessible.
* Updated the textpattern plugin to properly support nested patterns and to allow running a command with a value for a pattern with a start and an end.
* Changed checkboxes to use a boolean for its state, instead of a string.
* Changed formatting menus so they are registered and made the align toolbar button use an icon instead of text.
* Fixed the link dialog such that it will now retain class attributes when updating links.
* Fixed "Find and replace" not showing in the "Edit" menu by default.
* Fixed dropdown buttons missing the 'type' attribute, which could cause forms to be incorrectly submitted.
* Fixed emoticon and charmap search not returning expected results in certain cases.
* Fixed blank rel_list values throwing an exception in the link plugin.

## Version 5.0.0-rc-1 January 8, 2019
* Added editor settings functionality to specify title attributes for toolbar groups.
* Added icons instead of button text to improve Search and Replace dialog footer appearance.
* Added `tox-dialog__table` instead of `mce-table-striped` class to enhance Help dialog appearance.
* Added title attribute to iframes so, screen readers can announce iframe labels.
* Added a wordcount menu item, that defaults to appearing in the tools menu.
* Updated the font select dropdown logic to try to detect the system font stack and show "System Font" as the font name.
* Updated the autocompleter to only show when it has matched items.
* Updated SizeInput labels to "Height" and "Width" instead of Dimensions.
* Updated the build process to minify and generate ASCII only output for the emoticons database.
* Fixed readonly mode not fully disabling editing content.
* Fixed accessibility issues with the font select, font size, style select and format select toolbar dropdowns.
* Fixed accessibility issues with split dropdowns.
* Fixed the legacyoutput plugin to be compatible with TinyMCE 5.0.
* Fixed icons not showing correctly in the autocompleter popup.
* Fixed an issue where preview wouldn't show anything in Edge under certain circumstances.
* Fixed the height being incorrectly calculated for the autoresize plugin.

## Version 5.0.0-beta-1 November 30, 2018
* Removed compat3x plugin.
* Added a new `addNestedMenuItem()` UI registry function and changed all nested menu items to use the new registry functions.
* Added title attribute to color swatch colors.
* Added anchorbar component to anchor inline toolbar dialogs to instead of the toolbar.
* Added support for toolbar<n> and toolbar array config options to be squashed into a single toolbar and not create multiple toolbars.
* Added error handling for when forced_root_block config option is set to true.
* Added functionality for the removed_menuitems config option.
* Added the ability to use a string to reference menu items in menu buttons and submenu items.
* Changed the name of the "inlite" plugin to "quickbars".
* Changed the background color icon to highlight background icon.
* Changed Help dialog to be accessible to screen readers.
* Changed the color swatch to save selected custom colors to local storage for use across sessions.
* Changed `WindowManager` API - methods `getParams`, `setParams` and `getWindows`, and the legacy `windows` property, have been removed. `alert` and `confirm` dialogs are no longer tracked in the window list.
* Fixed an inline mode issue where the save plugin upon saving can cause content loss.
* Fixed an issue in IE 11 where calling selection.getContent() would return an empty string when the editor didn't have focus.


## Version 5.0.0-preview-4 November 12, 2018
* Removed the tox-custom-editor class that was added to the wrapping element of codemirror.
* Added width and height placeholder text to image and media dialog dimensions input.
* Added the ability to keyboard navigate through menus, toolbars, sidebar and the status bar sequentially.
* Added translation capability back to the editor's UI.
* Added `label` component type for dialogs to group components under a label
* Changed the editor resize handle so that it should be disabled when the autoresize plugin is turned on.
* Changed UI text for microcopy improvements.
* Fixed distraction free plugin.
* Fixed contents of the input field being selected on focus instead of just recieving an outline highlight.
* Fixed styling issues with dialogs and menus in IE 11.
* Fixed custom style format control not honoring custom formats.
* Fixed context menu not appearing when clicking an image with a caption.
* Fixed directionality of UI when using an RTL language.
* Fixed page responsiveness with multiple inline editors.
* Fixed empty toolbar groups appearing through invalid configuration of the `toolbar` property.
* Fixed text not being retained when updating links through the link dialog.
* Fixed edit image context menu, context toolbar and toolbar items being incorrectly enabled when selecting invalid images.
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

## Version 5.0.0-preview-3 October 18, 2018
* Changed editor layout to use modern CSS properties over manually calculating dimensions.
* Changed `autoresize_min_height` and `autoresize_max_height` configurations to `min_height` and `max_height`.
* Changed `Whole word` label in Search and Replace dialog to `Find whole words only`.
* Fixed bugs with editor width jumping when resizing and the iframe not resizing to smaller than 150px in height.
* Fixed mobile theme bug that prevented the editor from loading.
* Fixed long toolbar groups extending outside of the editor instead of wrapping
* Fixed dialog titles so they are now proper case.
* Fixed color picker default to be #000000 instead of #ff00ff.
* Fixed "match case" option on the Find and Replace dialog is no longer selected by default.
* Fixed vertical alignment of toolbar icons #DES-134
* Fixed toolbar icons not appearing on IE11 #DES-133

## Version 5.0.0-preview-2 October 10, 2018
* Removed `colorpicker` plugin, it is now in the theme.
* Removed `textcolor` plugin, it is now in the theme.
* Added swatch is now shown for colorinput fields, instead of the colorpicker directly.
* Added fontformats and fontsizes menu items.
* Changed configuration of color options has been simplified to `color_map`, `color_cols`, and `custom_colors`.
* Changed `height` configuration to apply to the editor frame (including menubar, toolbar, status bar) instead of the content area.
* Fixed styleselect not updating the displayed item as the cursor moved.
* Fixed preview iframe not expanding to the dialog size.
* Fixed 'meta' shortcuts not translated into platform-specific text.
* Fixed tabbed dialogs (Charmap and Emoticons) shrinking when no search results returned
* Fixed a bug where alert banner icons were not retrieved from icon pack..
* Fixed component styles to flex so they fill large dialogs..
* Fixed editor flashing unstyled during load (still in progress)..

## Version 5.0.0-preview-1 October 1, 2018
* Developer preview 1

{% endcapture %}

{{ changelog | pretty_changelog }}
