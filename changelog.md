---
layout: default
title: Changelog
description: The history of TinyMCE releases.
keywords: changelog
class: changelog
---

> This is the {{site.productname}} Community version changelog. For information about the latest {{site.cloudname}} or {{site.enterpriseversion}} Release, see: [{{site.productname}} Release Notes]({{site.baseurl}}/release-notes/).

## 5.10.8 - 2023-10-19

### Fixed
- Specific HTML content caused mXSS when using undo/redo.
- Specific HTML content caused mXSS when using the `getContent` and `setContent` APIs with the `format: 'raw'` option, which also affected the `resetContent` API and the draft restoration feature of the Autosave plugin.
- Notification messages containing HTML were not properly XSS sanitized before being displayed.

## 5.10.7 - 2022-12-06

### Fixed
- A cross-site scripting (XSS) vulnerability in TinyMCE alerts which allowed arbitrary JavaScript execution was found and fixed.

## 5.10.6 - 2022-10-19

### Fixed
- The `name` and `id` attributes of some elements were incorrectly removed during serialization.
- Notifications would not properly reposition when toggling fullscreen mode.
- Toggling fullscreen mode with the `fullscreen` plugin now also fires the `ResizeEditor` event.
- The URL detection used for `autolink` and smart paste didn't work if a path segment contained valid characters such as `!` and `:`.

## 5.10.5 - 2022-05-25

### Fixed
- Base64 data URIs were not extracted correctly during parsing when proceeded by `data:` text.
- Empty lines that were formatted in a ranged selection using the `format_empty_lines` option were not kept in the serialized content.
- The `s` element was missing from the default schema text inline elements.
- Some text inline elements specified via the schema were not removed when empty by default.

## 5.10.4 - 2022-04-27

### Fixed
- Inline toolbars flickered when switching between editors.
- Multiple inline toolbars were shown if focused too quickly.

## 5.10.3 - 2022-02-09

### Fixed
- Alignment would sometimes be removed on parent elements when changing alignment on certain inline nodes, such as images.
- The `fullscreen` plugin would reset the scroll position when exiting fullscreen mode.

## 5.10.2 - 2021-11-17

### Fixed
- Internal selectors were appearing in the style list when using the `importcss` plugin.

## 5.10.1 - 2021-11-03

### Fixed
- The iframe aria help text was not read by some screen readers.
- Clicking the `forecolor` or `backcolor` toolbar buttons would do nothing until selecting a color.
- Crop functionality did not work in the `imagetools` plugin when the editor was rendered in a shadow root.
- Fixed an exception thrown on Safari when closing the `searchreplace` plugin dialog.
- The `autolink` plugin did not convert URLs to links when starting with a bracket.
- The `autolink` plugin incorrectly created nested links in some cases.
- Tables could have an incorrect height set on rows when rendered outside of the editor.
- In certain circumstances, the table of contents plugin would incorrectly add an extra empty list item.
- The insert table grid menu displayed an incorrect size when re-opening the grid.
- The word count plugin was treating the zero width space character (`&#8203;`) as a word.

## 5.10.0 - 2021-10-11

### Added
- Added a new `URI.isDomSafe(uri)` API to check if a URI is considered safe to be inserted into the DOM.
- Added the `ESC` key code constant to the `VK` API.
- Added a new `deprecation_warnings` setting for turning off deprecation console warning messages.

### Improved
- The `element` argument of the `editor.selection.scrollIntoView()` API is now optional, and if it is not provided the current selection will be scrolled into view.

### Changed
- The deprecated `scope` attribute is no longer added to `td` cells when converting a row to a header row.
- The number of `col` elements is normalized to match the number of columns in a table after a table action.

### Fixed
- Fixed a regression that caused block wrapper formats to apply and remove incorrectly when using a collapsed selection with multiple words.
- Resizing table columns in some scenarios would resize the column to an incorrect position.
- Inserting a table where the parent element had padding would cause the table width to be incorrect.
- The resize backdrop element did not have the `data-mce-bogus="all"` attribute set to prevent it being included in output.
- Resize handles appeared on top of dialogs and menus when using an inline editor.
- Fixed the `autoresize` plugin incorrectly scrolling to the top of the editor content in some cases when changing content.
- Fixed the `editor.selection.scrollIntoView()` type signature, as it incorrectly required an `Element` instead of `HTMLElement`.
- Table cells that were both row and column headers did not retain the correct state when converting back to a regular row or column.
- Clicking beside a non-editable element could cause the editor to incorrectly scroll to the top of the content.
- Clicking in a table cell, with a non-editable element in an adjacent cell, incorrectly caused the non-editable element to be selected.
- Split toolbar buttons incorrectly had nested `tabindex="-1"` attributes.
- Fixed notifications rendering in the wrong place initially and when the page was scrolled.
- Fixed an exception getting thrown when the number of `col` elements didn't match the number of columns in a table.
- The table selection state could become incorrect after selecting a noneditable table cell.
- As of Mozilla Firefox 91, toggling fullscreen mode with `toolbar_sticky` enabled would cause the toolbar to disappear.
- Fixed URLs not cleaned correctly in some cases in the `link` and `image` plugins.
- Fixed the `image` and `media` toolbar buttons incorrectly appearing to be in an inactive state in some cases.
- Fixed the `editor.selection.selectorChanged` API not firing if the selector matched the current selection when registered in some cases.
- Inserting content into a `contenteditable="true"` element that was contained within a `contenteditable="false"` element would move the selection to an incorrect location.
- Dragging and dropping `contenteditable="false"` elements could result in the element being placed in an unexpected location.
- Pressing the Escape key would not cancel a drag action that started on a `contenteditable="false"` element within the editor.
- `video` and `audio` elements were unable to be played when the `media` plugin live embeds were enabled in some cases.
- Pasting images would throw an exception if the clipboard `items` were not files (for example, screenshots taken from gnome-software). Patch contributed by cedric-anne.

### Deprecated
- Several APIs have been deprecated. See the release notes section for information.
- Several Editor settings have been deprecated. See the release notes section for information.
- The Table of Contents and Image Tools plugins will be classified as Premium plugins in the next major release.
- Word support in the `paste` plugin has been deprecated and will be removed in the next major release.

## 5.9.2 - 2021-09-08

### Fixed
- Fixed an exception getting thrown when disabling events and setting content.

## 5.9.1 - 2021-08-27

### Fixed
- Published TinyMCE types failed to compile in strict mode.
- The `TableModified` event sometimes didn't fire when performing certain table actions.

## 5.9.0 - 2021-08-26

### Added
- Added a new `mceFocus` command that focuses the editor. Equivalent to using `editor.focus()`.
- Added a new `mceTableToggleClass` command which toggles the provided class on the currently selected table.
- Added a new `mceTableCellToggleClass` command which toggles the provided class on the currently selected table cells.
- Added a new `tablecellvalign` toolbar button and menu item for vertical table cell alignment.
- Added a new `tablecellborderwidth` toolbar button and menu item to change table cell border width.
- Added a new `tablecellborderstyle` toolbar button and menu item to change table cell border style.
- Added a new `tablecaption` toolbar button and menu item to toggle captions on tables.
- Added a new `mceTableToggleCaption` command that toggles captions on a selected table.
- Added a new `tablerowheader` toolbar button and menu item to toggle the header state of row cells.
- Added a new `tablecolheader` toolbar button and menu item to toggle the header state of column cells.
- Added a new `tablecellbordercolor` toolbar button and menu item to select table cell border colors, with an accompanying setting `table_border_color_map` to customize the available values.
- Added a new `tablecellbackgroundcolor` toolbar button and menu item to select table cell background colors, with an accompanying setting `table_background_color_map` to customize the available values.
- Added a new `language` menu item and toolbar button to add `lang` attributes to content, with an accompanying `content_langs` setting to specify the languages available.
- A new `lang` format is now available that can be used with `editor.formatter`, or applied with the `Lang` editor command.
- Added a new `language` icon for the `language` toolbar button.
- Added a new `table-row-numbering` icon.
- Added new plugin commands: `mceEmoticons` (Emoticons), `mceWordCount` (Word Count), and `mceTemplate` (Template).
- Added a new `iframe_aria_text` setting to set the iframe title attribute.
- Added a new DomParser `Node.children()` API to return all the children of a `Node`.

### Improved
- Sticky toolbars can now be offset from the top of the page using the new `toolbar_sticky_offset` setting.
- Fancy menu items now accept an `initData` property to allow custom initialization data.
- Improved the load time of the `fullpage` plugin by using the existing editor schema rather than creating a new one.
- Improved the performance when UI components are rendered.
- The context toolbar no longer unnecessarily repositions to the top of large elements when scrolling.
- The context toolbar will now move out of the way when it overlaps with the selection, such as in table cells.
- The context toolbar now uses a short animation when transitioning between different locations.
- `Env.browser` now uses the User-Agent Client Hints API where it is available.
- Icons with a `-rtl` suffix in their name will now automatically be used when the UI is rendered in right-to-left mode.
- The `formatter.match` API now accepts an optional `similar` parameter to check if the format partially matches.
- The `formatter.formatChanged` API now supports providing format variables when listening for changes.
- The formatter will now fire `FormatApply` and `FormatRemove` events for the relevant actions.
- The `autolink` plugin link detection now permits custom protocols.
- The `autolink` plugin valid link detection has been improved.

### Changed
- Changed the load order so content CSS is loaded before the editor is populated with content.
- Changed the `emoticons`, `wordcount`, `code`, `codesample`, and `template` plugins to open dialogs using commands.
- The context toolbar will no longer show an arrow when it overlaps the content, such as in table cells.
- The context toolbar will no longer overlap the statusbar for toolbars using `node` or `selection` positions.

### Fixed
- The `editor.fire` API was incorrectly mutating the original `args` provided.
- Unbinding an event handler did not take effect immediately while the event was firing.
- Binding an event handler incorrectly took effect immediately while the event was firing.
- Unbinding a native event handler inside the `remove` event caused an exception that blocked editor removal.
- The `SetContent` event contained the incorrect `content` when using the `editor.selection.setContent()` API.
- The editor content could be edited after calling `setProgressState(true)` in iframe mode.
- Tabbing out of the editor after calling `setProgressState(true)` behaved inconsistently in iframe mode.
- Flash of unstyled content while loading the editor because the content CSS was loaded after the editor content was rendered.
- Partially transparent RGBA values provided in the `color_map` setting were given the wrong hex value.
- HTML comments with mismatched quotes were parsed incorrectly under certain circumstances.
- The editor could crash when inserting certain HTML content.
- Inserting certain HTML content into the editor could result in invalid HTML once parsed.
- Links in notification text did not show the correct mouse pointer.
- Using the Tab key to navigate into the editor on Microsoft Internet Explorer 11 would incorrectly focus the toolbar.
- The editor selection could be placed in an incorrect location when undoing or redoing changes in a document containing `contenteditable="false"` elements.
- Menus and context menus were not closed when clicking into a different editor.
- Context menus on Android were not displayed when more than one HTML element was selected.
- Disabled nested menu items could still be opened.
- The nested menu item chevron icon was not fading when the menu item was disabled.
- `imagetools` buttons were incorrectly enabled for remote images without `imagetools_proxy` set.
- Only table content would be deleted when partially selecting a table and content outside the table.
- The table cell selection handling was incorrect in some cases when dealing with nested tables.
- Removing a table row or column could result in the cursor getting placed in an invalid location.
- Pressing the Tab key to navigate through table cells did not skip noneditable cells.
- Clicking on a noneditable table cell did not show a visual selection like other noneditable elements.
- Some table operations would incorrectly cause table row attributes and styles to be lost.
- The selection was incorrectly lost when using the `mceTableCellType` and `mceTableRowType` commands.
- The `mceTableRowType` was reversing the order of the rows when converting multiple header rows back to body rows.
- The table dialog did not always respect the `table_style_with_css` option.
- Pasting into a table with multiple cells selected could cause the content to be pasted in the wrong location.
- The `TableModified` event was not fired when pasting cells into a table.
- The table paste column before and after icons were not flipped in RTL mode.
- Fixed table corruption when deleting a `contenteditable="false"` cell.
- The `dir` attribute was being incorrectly applied to list items.
- Applying selector formats would sometimes not apply the format correctly to elements in a list.
- For formats that specify an attribute or style that should be removed, the formatter `match` API incorrectly returned `false`.
- The type signature on the `formatter.matchNode` API had the wrong return type (was `boolean` but should have been `Formatter | undefined`).
- The `formatter.formatChanged` API would ignore the `similar` parameter if another callback had already been registered for the same format.
- The `formatter.formatChanged` API would sometimes not run the callback the first time the format was removed.
- Base64 encoded images with spaces or line breaks in the data URI were not displayed correctly. Patch contributed by RoboBurned

### Deprecated
- The `bbcode`, `fullpage`, `legacyoutput`, and `spellchecker` plugins have been deprecated and marked for removal in the next major release.

## 5.8.2 - 2021-06-23

### Fixed
- Fixed an issue when pasting cells from tables containing `colgroup`s into tables without `colgroup`s.
- Fixed an issue that could cause an invalid toolbar button state when multiple inline editors were on a single page.

## 5.8.1 - 2021-05-20

### Fixed
- An unexpected exception was thrown when switching to readonly mode and adjusting the editor width.
- Content could be lost when the `pagebreak_split_block` setting was enabled.
- The `list-style-type: none;` style on nested list items was incorrectly removed when clearing formatting.
- URLs were not always detected when pasting over a selection. Patch contributed by jwcooper.
- Properties on the `OpenNotification` event were incorrectly namespaced.

## 5.8.0 - 2021-05-06

### Added
- Added the `PAGE_UP` and `PAGE_DOWN` key code constants to the `VK` API.
- The editor resize handle can now be controlled using the keyboard.
- Added a new `fixed_toolbar_container_target` setting which renders the toolbar in the specified `HTMLElement`. Patch contributed by pvrobays

### Improved
- The `inline_boundaries` feature now supports the `home`, `end`, `pageup`, and `pagedown` keys.
- Updated the `formatter.matchFormat` API to support matching formats with variables in the `classes` property.
- Added HTML5 `audio` and `video` elements to the default alignment formats.
- Added support for alpha list numbering to the list properties dialog.

### Changed
- Updated the `image` dialog to display the class list dropdown as full-width if the caption checkbox is not present.
- Renamed the "H Align" and "V Align" input labels in the Table Cell Properties dialog to "Horizontal align" and "Vertical align" respectively.

### Deprecated
- The undocumented `setIconStroke` Split Toolbar Button API has been deprecated and will be removed in a future release.

### Fixed
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

<!-- Note: The below anchor matches an historical changelog format and is not needed for new versions in the changelog. -->
<div><a class="anchor" id="version571march172021"></a></div>

## 5.7.1 - 2021-03-17

### Fixed
- Fixed the `help` dialog incorrectly linking to the changelog of TinyMCE 4 instead of TinyMCE 5.
- Fixed a bug where error messages were displayed incorrectly in the image dialog.
- Fixed an issue where URLs were not correctly filtered in some cases.
- Fixed a bug where context menu items with names that contained uppercase characters were not displayed.
- Fixed context menu items lacking support for the `disabled` and `shortcut` properties.
- Fixed a regression where the width and height were incorrectly set when embedding content using the `media` dialog.

<div><a class="anchor" id="version570february102021"></a></div>

## 5.7.0 - 2021-02-10

### Added
- Added IPv6 address support to the URI API. Patch contributed by dev7355608.
- Added new `structure` and `style` properties to the `TableModified` event to indicate what kinds of modifications were made.
- Added `video` and `audio` live embed support for the `media` plugin.
- Added the ability to resize `video` and `iframe` media elements.
- Added a new `font_css` setting for adding fonts to both the editor and the parent document.
- Added a new `ImageUploader` API to simplify uploading image data to the configured `images_upload_url` or `images_upload_handler`.
- Added an Oxide variable to define the container background color in fullscreen mode.
- Added Oxide variables for setting the toolbar background colors for inline and sticky toolbars.
- Added a new `AfterProgressState` event that is fired after `editor.setProgressState` calls complete.
- Added support for `table_column_resizing` when inserting or deleting columns.

### Changed
- Changed table and table column copy behavior to retain an appropriate width when pasted.
- Changed the `lists` plugin to apply list styles to all text blocks within a selection.
- Changed the `advlist` plugin to log a console error message when the `list` plugin isn't enabled.
- Changed the z-index of the `setProgressState(true)` throbber so it does not hide notifications.
- Changed the type signature for `editor.selection.getRng()` incorrectly returning `null`.
- Changed some `SaxParser` regular expressions to improve performance.
- Changed `editor.setProgressState(true)` to close any open popups.

### Fixed
- Fixed `codesample` highlighting performance issues for some languages.
- Fixed an issue where cell widths were lost when merging table cells.
- Fixed `col` elements incorrectly transformed to `th` elements when converting columns to header columns.
- Fixed a number of table operations not working when selecting 2 table cells on Mozilla Firefox.
- Fixed a memory leak by backporting an upstream Sizzle fix.
- Fixed table `width` style was removed when copying.
- Fixed focus lost while typing in the `charmap` or `emoticons` dialogs when the editor is rendered in a shadow root.
- Fixed corruption of base64 URLs used in style attributes when parsing HTML.
- Fixed the order of CSS precedence of `content_style` and `content_css` in the `preview` and `template` plugins. `content_style` now has precedence.
- Fixed an issue where the image dialog tried to calculate image dimensions for an empty image URL.
- Fixed an issue where `scope` attributes on table cells would not change as expected when merging or unmerging cells.
- Fixed the plugin documentation links in the `help` plugin.
- Fixed events bound using `DOMUtils` not returning the correct result for `isDefaultPrevented` in some cases.
- Fixed the "Dropped file type is not supported" notification incorrectly showing when using an inline editor.
- Fixed an issue with external styles bleeding into TinyMCE.
- Fixed an issue where parsing malformed comments could cause an infinite loop.
- Fixed incorrect return types on `editor.selection.moveToBookmark`.
- Fixed the type signature for `editor.selection.setCursorLocation()` incorrectly allowing a node with no `offset`.
- Fixed incorrect behavior when editor is destroyed while loading stylesheets.
- Fixed figure elements incorrectly splitting from a valid parent element when editing the image within.
- Fixed inserting multiple rows or columns in a table cloning from the incorrect source row or column.
- Fixed an issue where new lines were not scrolled into view when pressing Shift+Enter or Shift+Return.
- Fixed an issue where list elements would not be removed when outdenting using the Enter or Return key.
- Fixed an issue where file extensions with uppercase characters were treated as invalid.
- Fixed dialog block messages were not passed through TinyMCE's translation system.

<div><a class="anchor" id="version562december82020"></a></div>

## 5.6.2 - 2020-12-08

### Fixed
- Fixed a UI rendering regression when the document body is using `display: flex`.

<div><a class="anchor" id="version561november252020"></a></div>

## 5.6.1 - 2020-11-25

### Fixed
- Fixed the `mceTableRowType` and `mceTableCellType` commands were not firing the `newCell` event.
- Fixed the HTML5 `s` element was not recognized when editing or clearing text formatting.
- Fixed an issue where copying and pasting table columns resulted in invalid HTML when using colgroups.
- Fixed an issue where the toolbar would render with the wrong width for inline editors in some situations.

<div><a class="anchor" id="version560november182020"></a></div>

## 5.6.0 - 2020-11-18

### Added
- Added new `BeforeOpenNotification` and `OpenNotification` events which allow internal notifications to be captured and modified before display.
- Added support for `block` and `unblock` methods on inline dialogs.
- Added new `TableModified` event which is fired whenever changes are made to a table.
- Added new `images_file_types` setting to determine which image file formats will be automatically processed into `img` tags on paste when using the `paste` plugin.
- Added support for `images_file_types` setting in the image file uploader to determine which image file extensions are valid for upload.
- Added new `format_empty_lines` setting to control if empty lines are formatted in a ranged selection.
- Added template support to the `autocompleter` for customizing the autocompleter items.
- Added new user interface `enable`, `disable`, and `isDisabled` methods.
- Added new `closest` formatter API to get the closest matching selection format from a set of formats.
- Added new `emojiimages` emoticons database that uses the twemoji CDN by default.
- Added new `emoticons_database` setting to configure which emoji database to use.
- Added new `name` field to the `style_formats` setting object to enable specifying a name for the format.

### Changed
- Changed `readonly` mode to allow hyperlinks to be clickable.

### Fixed
- Fixed the `change` event not firing after a successful image upload.
- Fixed the type signature for the `entity_encoding` setting not accepting delimited lists.
- Fixed layout issues when empty `tr` elements were incorrectly removed from tables.
- Fixed image file extensions lost when uploading an image with an alternative extension, such as `.jfif`.
- Fixed a security issue where URLs in attributes weren't correctly sanitized.
- Fixed `DOMUtils.getParents` incorrectly including the shadow root in the array of elements returned.
- Fixed an issue where the root document could be scrolled while an editor dialog was open inside a shadow root.
- Fixed `getContent` with text format returning a new line when the editor is empty.
- Fixed table column and row resizers not respecting the `data-mce-resize` attribute.
- Fixed inserting a table via the `mceInsertTable` command incorrectly creating 2 undo levels.
- Fixed nested tables with `colgroup` elements incorrectly always resizing the inner table.
- Fixed the `visualchars` plugin causing the editor to steal focus when initialized.
- Fixed `fullpage` plugin altering text content in `editor.getContent()`.
- Fixed `fullscreen` plugin not working correctly with multiple editors and shadow DOM.
- Fixed font size keywords such as `medium` not displaying correctly in font size menus.
- Fixed an issue where some attributes in table cells were not copied over to new rows or columns.
- Fixed incorrectly removing formatting on adjacent spaces when removing formatting on a ranged selection.
- Fixed the `Cut` menu item not working in the latest version of Mozilla Firefox.
- Fixed some incorrect types in the new TypeScript declaration file.
- Fixed a regression where a fake offscreen selection element was incorrectly created for the editor root node.
- Fixed an issue where menus would incorrectly collapse in small containers.
- Fixed an issue where only one table column at a time could be converted to a header.
- Fixed some minor memory leaks that prevented garbage collection for editor instances.
- Fixed resizing a `responsive` table not working when using the column resize handles.
- Fixed incorrectly calculating table `col` widths when resizing responsive tables.
- Fixed an issue where spaces were not preserved in pre-blocks when getting text content.
- Fixed a regression that caused the selection to be difficult to see in tables with backgrounds.
- Fixed content pasted multiple times in the editor when using Microsoft Internet Explorer 11. Patch contributed by mattford.

<div><a class="anchor" id="version551october12020"></a></div>

## 5.5.1 - 2020-10-01

### Fixed
- Fixed pressing the down key near the end of a document incorrectly raising an exception.
- Fixed incorrect Typescript types for the `Tools` API.

<div><a class="anchor" id="version550september292020"></a></div>

## 5.5.0 - 2020-09-29

### Added
- Added a TypeScript declaration file to the bundle output for TinyMCE core.
- Added new `table_column_resizing` setting to control how table columns are resized when using the resize bars.
- Added the ability to remove images on a failed upload using the `images_upload_handler` failure callback.
- Added `hasPlugin` function to the editor API to determine if a plugin exists or not.
- Added new `ToggleToolbarDrawer` command and query state handler to allow the toolbar drawer to be programmatically toggled and the toggle state to be checked.
- Added the ability to use `colgroup` elements in tables.
- Added a new setting `table_use_colgroups` for toggling whether colgroups are used in new tables.
- Added the ability to delete and navigate HTML media elements without the `media` plugin.
- Added `fullscreen_native` setting to the `fullscreen` plugin to enable use of the entire monitor.
- Added table related oxide variables to the Style API for more granular control over table cell selection appearance.
- Added new `toolbar_persist` setting to control the visibility of the inline toolbar.
- Added new APIs to allow for programmatic control of the inline toolbar visibility.
- Added the `origin` property to the `ObjectResized` and `ObjectResizeStart` events, to specify which handle the resize was performed on.
- Added new StyleSheetLoader `unload` and `unloadAll` APIs to allow loaded stylesheets to be removed.
- Added the `LineHeight` query command and action to the editor.
- Added the `lineheight` toolbar and menu items, and added `lineheight` to the default format menu.
- Added a new `contextmenu_avoid_overlap` setting to allow context menus to avoid overlapping matched nodes.
- Added new listbox dialog UI component for rendering a dropdown that allows nested options.
- Added back the ability to use nested items in the `image_class_list`, `link_class_list`, `link_list`, `table_class_list`, `table_cell_class_list`, and `table_row_class_list` settings.

### Changed
- Changed how CSS manipulates table cells when selecting multiple cells to achieve a semi-transparent selection.
- Changed the `target` property on fired events to use the native event target. The original target for an open shadow root can be obtained using `event.getComposedPath()`.
- Changed the editor to clean-up loaded CSS stylesheets when all editors using the stylesheet have been removed.
- Changed `imagetools` context menu icon for accessing the `image` dialog to use the `image` icon.
- Changed the `editor.insertContent()` and `editor.selection.setContent()` APIs to retain leading and trailing whitespace.
- Changed the `table` plugin `Column` menu to include the cut, copy and paste column menu items.
- Changed the default table styles in the content CSS files to better support the styling options available in the `table` dialog.

### Deprecated
- Deprecated the `Env.experimentalShadowDom` flag.

### Fixed
- Fixed tables with no borders displaying with the default border styles in the `preview` dialog.
- Fixed loss of whitespace when inserting content after a non-breaking space.
- Fixed the `event.getComposedPath()` function throwing an exception for events fired from the editor.
- Fixed notifications not appearing when the editor is within a ShadowRoot.
- Fixed focus issues with inline dialogs when the editor is within a ShadowRoot.
- Fixed the `template` plugin previews missing some content styles.
- Fixed the `media` plugin not saving the alternative source url in some situations.
- Fixed an issue where column resizing using the resize bars was inconsistent between fixed and relative table widths.
- Fixed an issue where dragging and dropping within a table would select table cells.
- Fixed up and down keyboard navigation not working for inline `contenteditable="false"` elements.
- Fixed dialog not retrieving `close` icon from icon pack.
- Fixed the `unlink` toolbar button not working when selecting multiple links.
- Fixed the `link` dialog not showing the "Text to display" field in some valid cases.
- Fixed the `DOMUtils.split()` API incorrectly removing some content.
- Fixed pressing the escape key not focusing the editor when using multiple toolbars.
- Fixed the `dirty` flag not being correctly set during an `AddUndo` event.
- Fixed `editor.selection.setCursorLocation` incorrectly placing the cursor outside `pre` elements in some circumstances.
- Fixed an exception being thrown when pressing the enter key inside pre elements while `br_in_pre` setting is false.

<div><a class="anchor" id="version542august172020"></a></div>

## 5.4.2 - 2020-08-17

### Fixed
- Fixed the editor not resizing when resizing the browser window in fullscreen mode.
- Fixed clicking on notifications causing inline editors to hide.
- Fixed an issue where link URLs could not be deleted or edited in the link dialog in some cases.
- Fixed a regression where setting the `anchor_top` or `anchor_bottom` options to `false` was not working.
- Fixed the `anchor` plugin not supporting the `allow_html_in_named_anchor` option.
- Fixed an exception thrown when removing inline formats that contained additional styles or classes.
- Fixed an exception thrown when positioning the context toolbar on Internet Explorer 11 in some edge cases.
- Fixed inline formats not removed when more than one `removeformat` format rule existed.
- Fixed an issue where spaces were sometimes removed when removing formating on nearby text.
- Fixed the list toolbar buttons not showing as active when a list is selected.
- Fixed an issue where the UI would sometimes not be shown or hidden when calling the show or hide API methods on the editor.
- Fixed the list type style not retained when copying list items.
- Fixed the Paste plugin converting tabs in plain text to a single space character. A `paste_tab_spaces` option has been included for setting the number of spaces used to replace a tab character.

<div><a class="anchor" id="version541july82020"></a></div>

## 5.4.1 - 2020-07-08

### Fixed
- Fixed the Search and Replace plugin incorrectly including zero-width caret characters in search results.
- Fixed dragging and dropping unsupported files navigating the browser away from the editor.
- Fixed undo levels not created on browser handled drop or paste events.
- Fixed content in an iframe element parsing as DOM elements instead of text content.
- Fixed Oxide checklist styles not showing when printing.
- Fixed bug with `scope` attribute not being added to the cells of header rows.

<div><a class="anchor" id="version540june302020"></a></div>

## 5.4.0 - 2020-06-30

### Added
- Added keyboard navigation support to menus and toolbars when the editor is in a ShadowRoot.
- Added the ability for menus to be clicked when the editor is in an open shadow root.
- Added the `Editor.ui.styleSheetLoader` API for loading stylesheets within the Document or ShadowRoot containing the editor UI.
- Added the `StyleSheetLoader` module to the public API.
- Added Oxide variables for styling the `select` element and headings in dialog content.
- Added icons for `table` column and row cut, copy, and paste toolbar buttons.
- Added all `table` menu items to the UI registry, so they can be used by name in other menus.
- Added new `mceTableApplyCellStyle` command to the `table` plugin.
- Added new `table` cut, copy, and paste column editor commands and menu items.
- Added font related Oxide variables for secondary buttons, allowing for custom styling.
- Added new `table_header_type` setting to control how table header rows are structured.
- Added new `table_sizing_mode` setting to replace the `table_responsive_width` setting, which has now been deprecated.
- Added new `mceTableSizingMode` command for changing the sizing mode of a table.
- Added new `mceTableRowType`, `mceTableColType`, and `mceTableCellType` commands and value queries.

### Changed
- Changed `advlist` toolbar buttons to only show a dropdown list if there is more than one option.
- Changed `mceInsertTable` command and `insertTable` API method to take optional header rows and columns arguments.
- Changed stylesheet loading, so that UI skin stylesheets can load in a ShadowRoot if required.
- Changed the DOM location of menus so that they display correctly when the editor is in a ShadowRoot.
- Changed the table plugin to correctly detect all valid header row structures.

### Fixed
- Fixed tables with no defined width being converted to a `fixed` width table when modifying the table.
- Fixed the `autosave` `isEmpty` API incorrectly detecting non-empty content as empty.
- Fixed table `Paste row after` and `Paste row before` menu items not disabled when nothing was available to paste.
- Fixed a selection performance issue with large tables on Microsoft Internet Explorer and Edge.
- Fixed filters for screening commands from the undo stack to be case-insensitive.
- Fixed `fullscreen` plugin now removes all classes when the editor is closed.
- Fixed handling of mixed-case icon identifiers (names) for UI elements.
- Fixed leading and trailing spaces lost when using `editor.selection.getContent({ format: 'text' })`.
- Fixed an issue where changing the URL with the quicklink toolbar caused unexpected undo behavior.
- Fixed an issue where removing formatting within a table cell would cause Internet Explorer 11 to scroll to the end of the table.
- Fixed an issue where the `allow_html_data_urls` setting was not correctly applied.
- Fixed the `autolink` feature so that it no longer treats a string with multiple "@" characters as an email address.
- Fixed an issue where removing the editor would leave unexpected attributes on the target element.
- Fixed the `link` plugin now suggest `mailto:` when the text contains an '@' and no slashes (`/`).
- Fixed the `valid_children` check of custom elements now allows a wider range of characters in names.

<div><a class="anchor" id="version532june102020"></a></div>

## 5.3.2 - 2020-06-10

### Fixed
- Fixed a regression introduced in 5.3.0, where `images_dataimg_filter` was no-longer called.

<div><a class="anchor" id="version531may272020"></a></div>

## 5.3.1 - 2020-05-27

### Fixed
- Fixed the image upload error alert also incorrectly closing the image dialog.
- Fixed editor content scrolling incorrectly on focus in Firefox by reverting default content CSS html and body heights added in 5.3.0.

<div><a class="anchor" id="version530may212020"></a></div>

## 5.3.0 - 2020-05-21

### Added
- Added html and body height styles to the default oxide content CSS.
- Added `uploadUri` and `blobInfo` to the data returned by `editor.uploadImages()`.
- Added a new function to the `BlobCache` API to lookup a blob based on the base64 data and mime type.
- Added the ability to search and replace within a selection.
- Added the ability to set the list start position for ordered lists and added new `lists` context menu item.
- Added `icon` as an optional config option to the toggle menu item API.
- Added `auto` mode for `toolbar_location` which positions the toolbar and menu bar at the bottom if there is no space at the top.

### Changed
- Changed the default `toolbar_location` to `auto`.
- Changed toggle menu items and choice menu items to have a dedicated icon with the checkmark displayed on the far right side of the menu item.
- Changed the `link`, `image`, and `paste` plugins to use Promises to reduce the bundle size.
- Changed the default icons to be lazy loaded during initialization.
- Changed the parsing of content so base64 encoded urls are converted to blob urls.
- Changed context toolbars so they concatenate when more than one is suitable for the current selection.
- Changed inline style element formats (strong, b, em, i, u, strike) to convert to a span on format removal if a `style` or `class` attribute is present.

### Fixed
- Fixed the `selection.setContent()` API not running parser filters.
- Fixed formats incorrectly applied or removed when table cells were selected.
- Fixed the `quickimage` button not restricting the file types to images.
- Fixed search and replace ignoring text in nested contenteditable elements.
- Fixed resize handlers displaying in the wrong location sometimes for remote images.
- Fixed table picker breaking in Firefox on low zoom levels.
- Fixed issue with loading or pasting contents with large base64 encoded images on Safari.
- Fixed supplementary special characters being truncated when inserted into the editor. Patch contributed by mlitwin.
- Fixed toolbar buttons not set to disabled when the editor is in readonly mode.
- Fixed the editor selection incorrectly changing when removing caret format containers.
- Fixed bug where title, width, and height would be set to empty string values when updating an image and removing those attributes using the image dialog.
- Fixed `ObjectResized` event firing when an object wasn't resized.
- Fixed `ObjectResized` and `ObjectResizeStart` events incorrectly fired when adding or removing table rows and columns.
- Fixed the placeholder not hiding when pasting content into the editor.
- Fixed an issue where the editor would fail to load if local storage was disabled.
- Fixed an issue where an uploaded image would reuse a cached image with a different mime type.
- Fixed bug where toolbars and dialogs would not show if the body element was replaced (e.g. with Turbolinks). Patch contributed by spohlenz.
- Fixed an issue where multiple formats would be removed when removing a single format at the end of lines or on empty lines.
- Fixed zero-width spaces incorrectly included in the `wordcount` plugin character count.
- Fixed a regression introduced in 5.2.0 whereby the desktop `toolbar_mode` setting would incorrectly override the mobile default setting.
- Fixed an issue where deleting all content in a single cell table would delete the entire table.

<div><a class="anchor" id="version522april232020"></a></div>

## 5.2.2 - 2020-04-23

### Fixed
- Fixed an issue where anchors could not be inserted on empty lines.
- Fixed text decorations (underline, strikethrough) not consistently inheriting the text color.
- Fixed `format` menu alignment buttons inconsistently applying to images.
- Fixed the floating toolbar drawer height collapsing when the editor is rendered in modal dialogs or floating containers.
- Fixed `media` embed content not processing safely in some cases.

<div><a class="anchor" id="version521march252020"></a></div>

## 5.2.1 - 2020-03-25

### Fixed
- Fixed the "is decorative" checkbox in the image dialog clearing after certain dialog events.
- Fixed possible uncaught exception when a `style` attribute is removed using a content filter on `setContent`.
- Fixed the table selection not functioning correctly in Microsoft Edge 44 or higher.
- Fixed the table resize handles not functioning correctly in Microsoft Edge 44 or higher.
- Fixed the floating toolbar drawer disconnecting from the toolbar when adding content in inline mode.
- Fixed `readonly` mode not returning the appropriate boolean value.
- Fixed the `forced_root_block_attrs` setting not applying attributes to new blocks consistently.
- Fixed the editor incorrectly stealing focus during initialization in Microsoft Internet Explorer.
- Fixed dialogs stealing focus when opening an alert or confirm dialog using an `onAction` callback.
- Fixed inline dialogs incorrectly closing when clicking on an opened alert or confirm dialog.
- Fixed the context toolbar overlapping the menu bar and toolbar.
- Fixed notification and inline dialog positioning issues when using `toolbar_location: 'bottom'`.
- Fixed the `colorinput` popup appearing offscreen on mobile devices.
- Fixed special characters not being found when searching by "whole words only".
- Fixed an issue where dragging images could cause them to be duplicated.
- Fixed context toolbars activating without the editor having focus.
- Fixed an issue where removing the background color of text did not always work.
- Fixed an issue where new rows and columns in a table did not retain the style of the previous row or column.

<div><a class="anchor" id="version520february132020"></a></div>

## 5.2.0 - 2020-02-13

### Added
- Added the ability to apply formats to spaces.
- Added new `toolbar_location` setting to allow for positioning the menu and toolbar at the bottom of the editor.
- Added new `toolbar_groups` setting to allow a custom floating toolbar group to be added to the toolbar when using `floating` toolbar mode.
- Added new `link_default_protocol` setting to `link` and `autolink` plugin to allow a protocol to be used by default.
- Added new `placeholder` setting to allow a placeholder to be shown when the editor is empty.
- Added new `tinymce.dom.TextSeeker` API to allow searching text across different DOM nodes.
- Added a drop shadow below the toolbar while in sticky mode and introduced Oxide variables to customize it when creating a custom skin.
- Added `quickbars_image_toolbar` setting to allow for the image quickbar to be turned off.
- Added iframe and img `loading` attribute to the default schema. Patch contributed by ataylor32.
- Added new `getNodeFilters`/`getAttributeFilters` functions to the `editor.serializer` instance.
- Added new `a11y_advanced_options` setting to allow additional accessibility options to be added.
- Added new accessibility options and behaviours to the image dialog using `a11y_advanced_options`.
- Added the ability to use the window `PrismJS` instance for the `codesample` plugin instead of the bundled version to allow for styling custom languages.
- Added error message events that fire when a resource loading error occurs.

### Changed
- Changed the default schema to disallow `onchange` for select elements.
- Changed default `toolbar_mode` value from false to `wrap`. The value false has been deprecated.
- Changed `toolbar_drawer` setting to `toolbar_mode`. `toolbar_drawer` has been deprecated.
- Changed iframe mode to set selection on content init if selection doesn't exist.
- Changed table related icons to align them with the visual style of the other icons.
- Changed and improved the visual appearance of the color input field.
- Changed fake caret container to use `forced_root_block` when possible.
- Changed the `requireLangPack` API to wait until the plugin has been loaded before loading the language pack.
- Changed the formatter so `style_formats` are registered before the initial content is loaded into the editor.
- Changed media plugin to use https protocol for media urls by default.
- Changed the parser to treat CDATA nodes as bogus HTML comments to match the HTML parsing spec. A new `preserve_cdata` setting has been added to preserve CDATA nodes if required.

### Fixed
- Fixed incorrect parsing of malformed/bogus HTML comments.
- Fixed `quickbars` selection toolbar appearing on non-editable elements.
- Fixed bug with alignment toolbar buttons sometimes not changing state correctly.
- Fixed the `codesample` toolbar button not toggling when selecting code samples other than HTML.
- Fixed content incorrectly scrolling to the top or bottom when pressing enter if when the content was already in view.
- Fixed `scrollIntoView` potentially hiding elements behind the toolbar.
- Fixed editor not respecting the `resize_img_proportional` setting due to legacy code.
- Fixed flickering floating toolbar drawer in inline mode.
- Fixed an issue where the template plugin dialog would be indefinitely blocked on a failed template load.
- Fixed the `mscontrolselect` event not being unbound on IE/Edge.
- Fixed Confirm dialog footer buttons so only the "Yes" button is highlighted.
- Fixed `file_picker_callback` functionality for Image, Link and Media plugins.
- Fixed issue where floating toolbar drawer sometimes would break if the editor is resized while the drawer is open.
- Fixed incorrect `external_plugins` loading error message.
- Fixed resize handler was not hidden for ARIA purposes. Patch contributed by Parent5446.
- Fixed an issue where content could be lost if a misspelled word was selected and spellchecking was disabled.
- Fixed validation errors in the CSS where certain properties had the wrong default value.
- Fixed an issue where forced root block attributes were not applied when removing a list.
- Fixed an issue where the element path isn't being cleared when there are no parents.
- Fixed an issue where width and height in svg icons containing `rect` elements were overridden by the CSS reset.
- Fixed an issue where uploading images with `images_reuse_filename` enabled and that included a query parameter would generate an invalid URL.
- Fixed the `closeButton` property not working when opening notifications.
- Fixed keyboard flicker when opening a context menu on mobile.
- Fixed issue where plus icon svg contained strokes.

<div><a class="anchor" id="version516january282020"></a></div>

## 5.1.6 - 2020-01-28

### Fixed
- Fixed `readonly` mode not blocking all clicked links.
- Fixed legacy font sizes being calculated inconsistently for the `FontSize` query command value.
- Fixed changing a tables row from `Header` to `Body` incorrectly moving the row to the bottom of the table.
- Fixed the context menu not showing in certain cases with hybrid devices.
- Fixed the context menu opening in the wrong location when the target is the editor body.
- Fixed the `image` plugin not respecting the `automatic_uploads` setting when uploading local images.
- Fixed security issue related to parsing HTML comments and CDATA.

<div><a class="anchor" id="version515december192019"></a></div>

## 5.1.5 - 2019-12-19

### Fixed
- Fixed the UI not working with hybrid devices that accept both touch and mouse events.
- Fixed the `charmap` dialog initially focusing the first tab of the dialog instead of the search input field.
- Fixed an exception being raised when inserting content if the caret was directly before or after a `contenteditable="false"` element.
- Fixed a bug with pasting image URLs when paste as text is enabled.

<div><a class="anchor" id="version514december112019"></a></div>

## 5.1.4 - 2019-12-11

### Fixed
- Fixed dialog contents disappearing when clicking a checkbox for right-to-left languages.
- Fixed the `legacyoutput` plugin registering legacy formats after editor initialization, causing legacy content to be stripped on the initial load.
- Fixed search and replace not cycling through results when searching using special characters.
- Fixed the `visualchars` plugin converting HTML-like text to DOM elements in certain cases.
- Fixed an issue with the `paste` plugin not sanitizing content in some cases.
- Fixed HTML comments incorrectly being parsed in certain cases.

<div><a class="anchor" id="version513december42019"></a></div>

## 5.1.3 - 2019-12-04

### Fixed
- Fixed sticky toolbar not undocking when fullscreen mode is activated.
- Fixed the "Current Window" target not applying when updating links using the link dialog.
- Fixed disabled menu items not highlighting when focused.
- Fixed touch events passing through dialog collection items to the content underneath on Android devices.
- Fixed keyboard navigation of the Help dialog's Keyboard Navigation tab.
- Fixed search and replace dialog disappearing when finding offscreen matches on iOS devices.
- Fixed performance issues where sticky toolbar was jumping while scrolling on slower browsers.

<div><a class="anchor" id="version512november192019"></a></div>

## 5.1.2 - 2019-11-19

### Fixed
- Fixed desktop touch devices using `mobile` configuration overrides.
- Fixed unable to disable the new scrolling toolbar feature.
- Fixed touch events passing through any pop-up items to the content underneath on Android devices.
- Fixed the table selector handles throwing JavaScript exceptions for non-table selections.
- Fixed `cut` operations not removing selected content on Android devices when the `paste` plugin is enabled.
- Fixed inline toolbar not constrained to the window width by default.
- Fixed context toolbar split button chevrons pointing right when they should be pointing down.
- Fixed unable to access the dialog footer in tabbed dialogs on small screens.
- Fixed mobile table selectors were hard to select with touch by increasing the size.
- Fixed mobile table selectors moving when moving outside the editor.
- Fixed inline toolbars collapsing when using sliding toolbars.
- Fixed block textpatterns not treating NBSPs as spaces.
- Fixed backspace not merging blocks when the last element in the preceding block was a `contenteditable="false"` element.
- Fixed toolbar buttons that only contain text labels overlapping on mobile devices.
- Fixed quickbars quickimage picker not working on mobile.
- Fixed fullscreen not resizing in an iOS WKWebView component.

<div><a class="anchor" id="version511october282019"></a></div>

## 5.1.1 - 2019-10-28

### Fixed
- Fixed font formats containing spaces being wrapped in `&quot;` entities instead of single quotes.
- Fixed alert and confirm dialogs losing focus when clicked.
- Fixed clicking outside a modal dialog focusing on the document body.
- Fixed the context toolbar not hiding when scrolled out of view.

<div><a class="anchor" id="version510october172019"></a></div>

## 5.1.0 - 2019-10-17

### Added
- Added touch selector handles for table selections on touch devices.
- Added border width field to Table Cell dialog.
- Added touch event listener to media plugin to make embeds playable.
- Added oxide styling options to notifications and tweaked the default variables.
- Added additional padding to split button chevrons on touch devices, to make them easier to interact with.
- Added new platform detection functions to `Env` and deprecated older detection properties.
- Added `inputMode` config field to specify inputmode attribute of `input` dialog components.
- Added new `inputMode` property to relevant plugins/dialogs.
- Added new `toolbar_sticky` setting to allow the iframe menubar/toolbar to stick to the top of the window when scrolling.

### Changed
- Changed default setting for `toolbar_drawer` to `floating`.
- Changed mobile phones to use the `silver` theme by default.
- Changed some editor settings to default to `false` on touch devices:
  - `menubar`(phones only).
  - `table_grid`.
  - `resize`.
  - `object_resizing`.
- Changed toolbars and context toolbars to sidescroll on mobile.
- Changed context menus to render as horizontal menus on touch devices.
- Changed the editor to use the `VisualViewport` API of the browser where possible.
- Changed visualblocks toolbar button icon and renamed `paragraph` icon to `visualchars`.
- Changed Oxide default for `@toolbar-button-chevron-color` to follow toolbar button icon color.
- Changed the `urlinput` dialog component to use the `url` type attribute.

### Fixed
- Fixed Safari desktop visual viewport fires resize on fullscreen breaking the restore function.
- Fixed scroll issues on mobile devices.
- Fixed context toolbar unable to refresh position on iOS12.
- Fixed ctrl+left click not opening links on readonly mode and the preview dialog.
- Fixed Slider UI component not firing `onChange` event on touch devices.
- Fixed notifications overlapping instead of stacking.
- Fixed inline dialogs positioning incorrectly when the page is scrolled.
- Fixed inline dialogs and menus not repositioning when resizing.
- Fixed inline toolbar incorrectly stretching to the full width when a width value was provided.
- Fixed menu chevrons color to follow the menu text color.
- Fixed table menu selection grid from staying black when using dark skins, now follows border color.
- Fixed Oxide using the wrong text color variable for menubar button focused state.
- Fixed the autoresize plugin not keeping the selection in view when resizing.
- Fixed textpattern plugin throwing exceptions when using `forced_root_block: false`.
- Fixed missing CSS fill styles for toolbar button icon active state.
- Fixed an issue where the editor selection could end up inside a short ended element (such as `br`).
- Fixed browser selection being lost in inline mode when opening split dropdowns.
- Fixed backspace throwing an exception when using `forced_root_block: false`.
- Fixed floating toolbar drawer expanding outside the bounds of the editor.
- Fixed the autocompleter not activating immediately after a `br` or `contenteditable=false` element.
- Fixed an issue where the autocompleter would incorrectly close on IE 11 in certain edge cases.

<div><a class="anchor" id="version5016september242019"></a></div>

## 5.0.16 - 2019-09-24

### Added
- Added new `referrer_policy` setting to add the `referrerpolicy` attribute when loading scripts or stylesheets.
- Added a slight background color to dialog tab links when focused to aid keyboard navigation.

### Fixed
- Fixed media poster value not updating on change.
- Fixed openlink was not registered as a toolbar button.
- Fixed failing to initialize if a script tag was used inside a SVG.
- Fixed double top border showing on toolbar without menubar when toolbar_drawer is enabled.
- Fixed unable to drag inline dialogs to the bottom of the screen when scrolled.
- Fixed notifications appearing on top of the toolbar when scrolled in inline mode.
- Fixed notifications displaying incorrectly on IE 11.

<div><a class="anchor" id="version5015september22019"></a></div>

## 5.0.15 - 2019-09-02

### Added
- Added a dark `content_css` skin to go with the dark UI skin.

### Changed
- Changed the enabled state on toolbar buttons so they don't get the hover effect.

### Fixed
- Fixed missing CSS active state on toolbar buttons.
- Fixed `onChange` callback not firing for the colorinput dialog component.
- Fixed context toolbars not showing in fullscreen mode.

<div><a class="anchor" id="version5014august192019"></a></div>

## 5.0.14 - 2019-08-19

### Added
- Added an API to reload the autocompleter menu with additional fetch metadata #MENTIONS-17

### Fixed
- Fixed missing toolbar button border styling options.
- Fixed image upload progress notification closing before the upload is complete.
- Fixed inline dialogs not closing on escape when no dialog component is in focus.
- Fixed plugins not being filtered when defaulting to mobile on phones.
- Fixed toolbar more drawer showing the content behind it when transitioning between opened and closed states.
- Fixed focus not returning to the dialog after pressing the "Replace all" button in the search and replace dialog.

### Removed
- Removed Oxide variable `@menubar-select-disabled-border-color` and replaced it with `@menubar-select-disabled-border`.

<div><a class="anchor" id="version5013august62019"></a></div>

## 5.0.13 - 2019-08-06

### Changed
- Changed modal dialogs to prevent dragging by default and added new `draggable_modal` setting to restore dragging.
- Changed the nonbreaking plugin to insert nbsp characters wrapped in spans to aid in filtering. This can be disabled using the `nonbreaking_wrap` setting.
- Changed backspace behaviour in lists to outdent nested list items when the cursor is at the start of the list item.

### Fixed
- Fixed sidebar growing beyond editor bounds in IE 11.
- Fixed issue with being unable to keyboard navigate disabled toolbar buttons.
- Fixed issues with backspace and delete in nested contenteditable true and false elements.
- Fixed issue with losing keyboard navigation in dialogs due to disabled buttons.
- Fixed `MouseEvent.mozPressure is deprecated` warning in Firefox.
- Fixed `default_link_target` not being respected when `target_list` is disabled.
- Fixed mobile plugin filter to only apply to the mobile theme, rather than all mobile platforms.
- Fixed focus switching to another editor during mode changes.
- Fixed an exception being thrown when clicking on an uninitialized inline editor.
- Fixed unable to keyboard navigate to dialog menu buttons.
- Fixed dialogs being able to be dragged outside the window viewport.
- Fixed inline dialogs appearing above modal dialogs.

<div><a class="anchor" id="version5012july182019"></a></div>

## 5.0.12 - 2019-07-18

### Added
- Added ability to utilize UI dialog panels inside other panels.
- Added help dialog tab explaining keyboard navigation of the editor.

### Changed
- Changed the "Find and Replace" design to an inline dialog.

### Fixed
- Fixed issue where autolink spacebar event was not being fired on Edge.
- Fixed table selection missing the background color.
- Fixed removing shortcuts not working for function keys.
- Fixed non-descriptive UI component type names.
- Fixed UI registry components rendering as the wrong type when manually specifying a different type.
- Fixed an issue where dialog checkbox, input, selectbox, textarea and urlinput components couldn't be disabled.
- Fixed the context toolbar not using viable screen space in inline/distraction free mode.
- Fixed the context toolbar overlapping the toolbar in various conditions.
- Fixed IE11 edge case where items were being inserted into the wrong location.

<div><a class="anchor" id="version5011july42019"></a></div>

## 5.0.11 - 2019-07-04

### Fixed
- Fixed packaging errors caused by a rollup treeshaking bug (https://github.com/rollup/rollup/issues/2970).
- Fixed the customeditor component not able to get data from the dialog api.
- Fixed collection component tooltips not being translated.

<div><a class="anchor" id="version5010july22019"></a></div>

## 5.0.10 - 2019-07-02

### Added
- Added support for all HTML color formats in `color_map` setting.

### Changed
- Changed backspace key handling to outdent content in appropriate circumstances.
- Changed default palette for forecolor and backcolor to include some lighter colors suitable for highlights.
- Changed the search and replace plugin to cycle through results.

### Fixed
- Fixed inconsistent types causing some properties to be unable to be used in dialog components.
- Fixed an issue in the Oxide skin where dialog content like outlines and shadows were clipped because of overflow hidden.
- Fixed the search and replace plugin not resetting state when changing the search query.
- Fixed backspace in lists not creating an undo level.
- Fixed the editor to cancel loading in quirks mode where the UI is not supported.
- Fixed applying fonts not working when the name contained spaces and numbers.
- Fixed so that initial content is retained when initializing on list items.
- Fixed inefficient font name and font size current value lookup during rendering.
- Fixed mobile font copied into the wrong folder for the oxide-dark skin.
- Fixed an issue where resizing the width of tables would produce inaccurate results.
- Fixed a memory leak in the Silver theme.
- Fixed alert and confirm dialogs using incorrect markup causing inconsistent padding.
- Fixed an issue in the Table plugin with `table_responsive_width` not enforcing units when resizing.
- Fixed leading, trailing and sequential spaces being lost when pasting plain text.
- Fixed exception being thrown when creating relative URIs.
- Fixed focus is no longer set to the editor content during mode changes unless the editor already had focus.

<div><a class="anchor" id="version509june262019"></a></div>

## 5.0.9 - 2019-06-26

### Fixed
- Fixed print plugin not working in Firefox.

<div><a class="anchor" id="version508june182019"></a></div>

## 5.0.8 - 2019-06-18

### Added
- Added back support for multiple toolbars.
- Added support for .m4a files to the media plugin.
- Added new base_url and suffix editor init options.

### Fixed
- Fixed incorrect padding for select boxes with visible values.
- Fixed selection incorrectly changing when programmatically setting selection on contenteditable false elements.
- Fixed sidebar background being transparent.
- Fixed the build to remove duplicate iife wrappers.
- Fixed bogus autocompleter span appearing in content when the autocompleter menu is shown.
- Fixed toolbar font size select not working with legacyoutput plugin.
- Fixed the legacyoutput plugin incorrectly aligning images.
- Fixed remove color not working when using the legacyoutput plugin.
- Fixed the font size menu applying incorrect sizes when using the legacyoutput plugin.
- Fixed scrollIntoView not working when the parent window was out of view.
- Fixed the print plugin printing from the wrong window in IE11.
- Fixed content CSS loaded over CORS not loading in the preview plugin with content_css_cors enabled.
- Fixed the link plugin missing the default "None" option for link list.
- Fixed small dot visible with menubar and toolbar disabled in inline mode.
- Fixed space key properly inserts a nbsp before/after block elements.
- Fixed native context menu not showing with images in IE11.
- Fixed inconsistent browser context menu image selection.

<div><a class="anchor" id="version507june52019"></a></div>

## 5.0.7 - 2019-06-05

### Added
- Added new toolbar button and menu item for inserting tables via dialog.
- Added new API for adding/removing/changing tabs in the Help dialog.
- Added highlighting of matched text in autocompleter items.
- Added the ability for autocompleters to work with matches that include spaces.
- Added new `imagetools_fetch_image` callback to allow custom implementations for cors loading of images.
- Added `'http'` and `https` options to `link_assume_external_targets` to prepend `http://` or `https://` prefixes when URL does not contain a protocol prefix. Patch contributed by francoisfreitag.

### Changed
- Changed annotations navigation to work the same as inline boundaries.
- Changed tabpanel API by adding a `name` field and changing relevant methods to use it.

### Fixed
- Fixed text color not updating all color buttons when choosing a color.
- Fixed the autocompleter not working with fragmented text.
- Fixed the autosave plugin no longer overwrites window.onbeforeunload.
- Fixed infinite loop in the paste plugin when IE11 takes a long time to process paste events. Patch contributed by lRawd.
- Fixed image handle locations when using `fixed_toolbar_container`. Patch contributed by t00.
- Fixed the autoresize plugin not firing `ResizeEditor` events.
- Fixed editor in fullscreen mode not extending to the bottom of the screen.
- Fixed list removal when pressing backspace after the start of the list item.
- Fixed autocomplete not triggering from compositionend events.
- Fixed `file_picker_callback` could not set the caption field on the insert image dialog.
- Fixed the autocompleter menu showing up after a selection had been made.
- Fixed an exception being thrown when a file or number input has focus during initialization. Patch contributed by t00.

<div><a class="anchor" id="version506may222019"></a></div>

## 5.0.6 - 2019-05-22

### Added
- Added `icons_url` editor settings to enable icon packs to be loaded from a custom url.
- Added `image_uploadtab` editor setting to control the visibility of the upload tab in the image dialog.
- Added new api endpoints to the wordcount plugin and improved character count logic.

### Changed
- Changed plugin, language and icon loading errors to log in the console instead of a notification.

### Fixed
- Fixed the textpattern plugin not working with fragmented text.
- Fixed various toolbar drawer accessibility issues and added an animation.
- Fixed issues with selection and ui components when toggling readonly mode.
- Fixed so readonly mode works with inline editors.
- Fixed docked inline toolbar positioning when scrolled.
- Fixed initial value not being set on bespoke select in quickbars and toolbar drawer.
- Fixed so that nbsp entities aren't trimmed in white-space: pre-line elements.
- Fixed `mceInsertLink` command inserting spaces instead of url encoded characters.
- Fixed text content floating on top of dialogs in IE11.

<div><a class="anchor" id="version505may92019"></a></div>

## 5.0.5 - 2019-05-09

### Added
- Added menu items to match the forecolor/backcolor toolbar buttons.
- Added default directionality based on the configured language.
- Added styles, icons and tests for rtl mode.

### Fixed
- Fixed autoresize not working with floating elements or when media elements finished loading.
- Fixed incorrect vertical caret positioning in IE 11.
- Fixed submenu anchoring hiding overflowed content.

### Removed
- Removed unused and hidden validation icons to avoid displaying phantom tooltips.

<div><a class="anchor" id="version504april232019"></a></div>

## 5.0.4 - 2019-04-23

### Added
- Added back URL dialog functionality, which is now available via `editor.windowManager.openUrl()`.
- Added the missing throbber functionality when calling `editor.setProgressState(true)`.
- Added function to reset the editor content and undo/dirty state via `editor.resetContent()`.
- Added the ability to set menu buttons as active.
- Added `editor.mode` API, featuring a custom editor mode API.
- Added better styling to floating toolbar drawer.
- Added the new premium plugins to the Help dialog plugins tab.
- Added the linkchecker context menu items to the default configuration.

### Fixed
- Fixed image context menu items showing on placeholder images.
- Fixed dialog labels and text color contrast within notifications/alert banners to satisfy WCAG 4.5:1 contrast ratio for accessibility.
- Fixed selectbox and colorpicker items not being translated.
- Fixed toolbar drawer sliding mode to correctly focus the editor when tabbing via keyboard navigation.
- Fixed positioning of the styleselect menu in iOS while using the mobile theme.
- Fixed the menubutton `onSetup` callback to be correctly executed when rendering the menu buttons.
- Fixed `default_link_target` setting to be correctly utilized when creating a link.
- Fixed colorpicker floating marginally outside its container.
- Fixed disabled menu items displaying as active when hovered.

### Removed
- Removed redundant mobile wrapper.

<div><a class="anchor" id="version503march192019"></a></div>

## 5.0.3 - 2019-03-19

### Changed
- Changed empty nested-menu items within the style formats menu to be disabled or hidden if the value of `style_formats_autohide` is `true`.
- Changed the entire phrase 'Powered by Tiny' in the status bar to be a link instead of just the word 'Tiny'.
- Changed `formatselect`, `styleselect` and `align` menus to use the `mceToggleFormat` command internally.

### Fixed
- Fixed toolbar keyboard navigation to work as expected when `toolbar_drawer` is configured.
- Fixed text direction buttons to display the correct pressed state in selections that have no explicit `dir` property.
- Fixed the mobile editor to clean up properly when removed.
- Fixed quickbar toolbars to add an empty box to the screen when it is set to `false`.
- Fixed an issue where pressing the **Delete/Backspace** key at the edge of tables was creating incorrect selections.
- Fixed an issue where dialog collection items (emoticon and special character dialogs) couldn't be selected with touch devices.
- Fixed a type error introduced in TinyMCE version 5.0.2 when calling `editor.getContent()` with nested bookmarks.
- Fixed an issue that prevented default icons from being overridden.
- Fixed an issue where **Home/End** keys wouldn't move the caret correctly before or after `contenteditable=false` inline elements.
- Fixed styles to be preserved in IE 11 when editing via the `fullpage` plugin.
- Fixed the `link` plugin context toolbar missing the open link button.
- Fixed inconsistent dialog component spacing.

<div><a class="anchor" id="version502march52019"></a></div>

## 5.0.2 - 2019-03-05

### Added
- Added presentation and document presets to `htmlpanel` dialog component.
- Added missing fixed_toolbar_container setting has been reimplemented in the Silver theme.
- Added a new toolbar setting `toolbar_drawer` that moves toolbar groups which overflow the editor width into either a `sliding` or `floating` toolbar section.

### Changed
- Updated the build process to include package lock files in the dev distribution archive.

### Fixed
- Fixed inline dialogs did not have aria attributes.
- Fixed default icons are now available in the UI registry, allowing use outside of toolbar buttons.
- Fixed a memory leak related to select toolbar items.
- Fixed a memory leak due to format changed listeners that were never unbound.
- Fixed an issue where content may have been lost when using permanent bookmarks.
- Fixed the quicklink toolbar button not rendering in the quickbars plugin.
- Fixed an issue where menus were generating invalid HTML in some cases.
- Fixed an issue that could cause the mobile theme to show a blank white screen when the editor was inside an `overflow:hidden` element.
- Fixed mobile theme using a transparent background and not taking up the full width on iOS.
- Fixed the template plugin dialog missing the description field.
- Fixed input dialog components using an invalid default type attribute.
- Fixed an issue where backspace/delete keys after/before pagebreak elements wouldn't move the caret.
- Fixed an issue in the table plugin where menu items and toolbar buttons weren't showing correctly based on the selection.
- Fixed inconsistent button focus styles in Firefox.
- Fixed the resize icon floating left when all status bar elements were disabled.
- Fixed the resize handle to not show in fullscreen mode.

<div><a class="anchor" id="version501february212019"></a></div>

## 5.0.1 - 2019-02-21

### Added
- Added H1-H6 toggle button registration to the silver theme.
- Added code sample toolbar button will now toggle on when the cursor is in a code section.
- Added new settings to the emoticons plugin to allow additional emoticons to be added.

### Fixed
- Fixed an issue where adding links to images would replace the image with text.
- Fixed an issue where the inline editor could use fractional pixels for positioning.
- Fixed an issue where uploading non-image files in the Image Plugin upload tab threw an error.
- Fixed an issue in the media plugin that was causing the source url and height/width to be lost in certain circumstances.
- Fixed an issue with the Context Toolbar not being removed when clicking outside of the editor.
- Fixed an issue where clicking 'Remove link' wouldn't remove the link in certain circumstances.
- Fixed an issue where the media plugin would fail when parsing dialog data.
- Fixed an issue where retrieving the selected content as text didn't create newlines.
- Fixed incorrect keyboard shortcuts in the Help dialog for Windows.
- Fixed an issue where JSON serialization could produce invalid JSON.
- Fixed production CSS including references to source maps.
- Fixed development CSS was not included in the development zip.
- Fixed the autocompleter matches predicate not matching on the start of words by default.
- Fixed an issue where the page could be scrolled with modal dialogs open.
- Fixed an issue where autocomplete menus would show an icon margin when no items had icons.
- Fixed an issue in the quickbars plugin where images incorrectly showed the text selection toolbar.
- Fixed an issue that caused the inline editor to fail to render when the target element already had focus.

### Removed
- Removed paste as text notification banner and paste_plaintext_inform setting.

<div><a class="anchor" id="version500february42019"></a></div>

## 5.0.0 - 2019-02-04

Full documentation for the version 5 features and changes is available at https://www.tiny.cloud/docs/release-notes/

### Added
- Added links and registered names with * to denote premium plugins in Plugins tab of Help dialog.

### Changed
- Changed Tiny 5 mobile skin to look more uniform with desktop.
- Blacklisted table, th and td as inline editor target.

### Fixed
- Fixed an issue where tab panel heights weren't sizing properly on smaller screens and weren't updating on resize.
- Fixed image tools not having any padding between the label and slider.
- Fixed context toolbar toggle buttons not showing the correct state.
- Fixed missing separators in the spellchecker context menu between the suggestions and actions.
- Fixed notification icon positioning in alert banners.
- Fixed a typo in the word count plugin name.
- Fixed charmap and emoticons dialogs not having a primary button.
- Fixed an issue where resizing wouldn't work correctly depending on the box-sizing model.

<div><a class="anchor" id="version500-rc-2january222019"></a></div>

## 5.0.0-rc-2 - 2019-01-22

### Added
- Added screen reader accessibility for sidebar and statusbar.

### Changed
- Changed formatting menus so they are registered and made the align toolbar button use an icon instead of text.
- Changed checkboxes to use a boolean for its state, instead of a string.
- Updated the textpattern plugin to properly support nested patterns and to allow running a command with a value for a pattern with a start and an end.
- Updated Emoticons and Charmap dialogs to be screen reader accessible.

### Fixed
- Fixed the link dialog such that it will now retain class attributes when updating links.
- Fixed "Find and replace" not showing in the "Edit" menu by default.
- Fixed dropdown buttons missing the 'type' attribute, which could cause forms to be incorrectly submitted.
- Fixed emoticon and charmap search not returning expected results in certain cases.
- Fixed blank rel_list values throwing an exception in the link plugin.

### Removed
- Removed unnecessary 'flex' and unused 'colspan' properties from the new dialog APIs.

<div><a class="anchor" id="version500-rc-1january82019"></a></div>

## 5.0.0-rc-1 - 2019-01-08

### Added
- Added editor settings functionality to specify title attributes for toolbar groups.
- Added icons instead of button text to improve Search and Replace dialog footer appearance.
- Added `tox-dialog__table` instead of `mce-table-striped` class to enhance Help dialog appearance.
- Added title attribute to iframes so, screen readers can announce iframe labels.
- Added a wordcount menu item, that defaults to appearing in the tools menu.

### Changed
- Updated the font select dropdown logic to try to detect the system font stack and show "System Font" as the font name.
- Updated the autocompleter to only show when it has matched items.
- Updated SizeInput labels to "Height" and "Width" instead of Dimensions.
- Updated the build process to minify and generate ASCII only output for the emoticons database.

### Fixed
- Fixed readonly mode not fully disabling editing content.
- Fixed accessibility issues with the font select, font size, style select and format select toolbar dropdowns.
- Fixed accessibility issues with split dropdowns.
- Fixed the legacyoutput plugin to be compatible with TinyMCE 5.0.
- Fixed icons not showing correctly in the autocompleter popup.
- Fixed an issue where preview wouldn't show anything in Edge under certain circumstances.
- Fixed the height being incorrectly calculated for the autoresize plugin.

<div><a class="anchor" id="version500-beta-1november302018"></a></div>

## 5.0.0-beta-1 - 2018-11-30

### Added
- Added a new `addNestedMenuItem()` UI registry function and changed all nested menu items to use the new registry functions.
- Added title attribute to color swatch colors.
- Added anchorbar component to anchor inline toolbar dialogs to instead of the toolbar.
- Added support for toolbar<n> and toolbar array config options to be squashed into a single toolbar and not create multiple toolbars.
- Added error handling for when forced_root_block config option is set to true.
- Added functionality for the removed_menuitems config option.
- Added the ability to use a string to reference menu items in menu buttons and submenu items.

### Changed
- Changed the name of the "inlite" plugin to "quickbars".
- Changed the background color icon to highlight background icon.
- Changed Help dialog to be accessible to screen readers.
- Changed the color swatch to save selected custom colors to local storage for use across sessions.
- Changed `WindowManager` API - methods `getParams`, `setParams` and `getWindows`, and the legacy `windows` property, have been removed. `alert` and `confirm` dialogs are no longer tracked in the window list.

### Fixed
- Fixed an inline mode issue where the save plugin upon saving can cause content loss.
- Fixed an issue in IE 11 where calling selection.getContent() would return an empty string when the editor didn't have focus.

### Removed
- Removed compat3x plugin.

<div><a class="anchor" id="version500-preview-4november122018"></a></div>

## 5.0.0-preview-4 - 2018-11-12

### Added
- Added width and height placeholder text to image and media dialog dimensions input.
- Added the ability to keyboard navigate through menus, toolbars, sidebar and the status bar sequentially.
- Added translation capability back to the editor's UI.
- Added `label` component type for dialogs to group components under a label

### Changed
- Changed the editor resize handle so that it should be disabled when the autoresize plugin is turned on.
- Changed UI text for microcopy improvements.

### Fixed
- Fixed distraction free plugin.
- Fixed contents of the input field being selected on focus instead of just recieving an outline highlight.
- Fixed styling issues with dialogs and menus in IE 11.
- Fixed custom style format control not honoring custom formats.
- Fixed context menu not appearing when clicking an image with a caption.
- Fixed directionality of UI when using an RTL language.
- Fixed page responsiveness with multiple inline editors.
- Fixed empty toolbar groups appearing through invalid configuration of the `toolbar` property.
- Fixed text not being retained when updating links through the link dialog.
- Fixed edit image context menu, context toolbar and toolbar items being incorrectly enabled when selecting invalid images.
- Fixed emoji type ahead being shown when typing URLs.
- Fixed toolbar configuration properties incorrectly expecting string arrays instead of strings.
- Fixed the block formatting toolbar item not showing a "Formatting" title when there is no selection.
- Fixed clicking disabled toolbar buttons hiding the toolbar in inline mode.
- Fixed `EditorResize` event not being fired upon editor resize.
- Fixed tables losing styles when updating through the dialog.
- Fixed context toolbar positioning to be more consistent near the edges of the editor.
- Fixed table of contents plugin now works with v5 toolbar APIs correctly.
- Fixed the `link_context_toolbar` configuration not disabling the context toolbar.
- Fixed the link context toolbar showing incorrect relative links.
- Fixed the alignment of the icon in alert banner dialog components.
- Fixed the visual blocks and visual char menu options not displaying their toggled state.
- Fixed the editor not displaying as fullscreen when toggled.

### Removed
- Removed the tox-custom-editor class that was added to the wrapping element of codemirror.

<div><a class="anchor" id="version500-preview-3october182018"></a></div>

## 5.0.0-preview-3 - 2018-10-18

### Changed
- Changed editor layout to use modern CSS properties over manually calculating dimensions.
- Changed `autoresize_min_height` and `autoresize_max_height` configurations to `min_height` and `max_height`.
- Changed `Whole word` label in Search and Replace dialog to `Find whole words only`.

### Fixed
- Fixed bugs with editor width jumping when resizing and the iframe not resizing to smaller than 150px in height.
- Fixed mobile theme bug that prevented the editor from loading.
- Fixed long toolbar groups extending outside of the editor instead of wrapping
- Fixed dialog titles so they are now proper case.
- Fixed color picker default to be #000000 instead of #ff00ff.
- Fixed "match case" option on the Find and Replace dialog is no longer selected by default.
- Fixed vertical alignment of toolbar icons.
- Fixed toolbar icons not appearing on IE11.

<div><a class="anchor" id="version500-preview-2october102018"></a></div>

## 5.0.0-preview-2 - 2018-10-10

### Added
- Added swatch is now shown for colorinput fields, instead of the colorpicker directly.
- Added fontformats and fontsizes menu items.

### Changed
- Changed configuration of color options has been simplified to `color_map`, `color_cols`, and `custom_colors`.
- Changed `height` configuration to apply to the editor frame (including menubar, toolbar, status bar) instead of the content area.

### Fixed
- Fixed styleselect not updating the displayed item as the cursor moved.
- Fixed preview iframe not expanding to the dialog size.
- Fixed 'meta' shortcuts not translated into platform-specific text.
- Fixed tabbed dialogs (Charmap and Emoticons) shrinking when no search results returned
- Fixed a bug where alert banner icons were not retrieved from icon pack.
- Fixed component styles to flex so they fill large dialogs.
- Fixed editor flashing unstyled during load (still in progress).

### Removed
- Removed `colorpicker` plugin, it is now in the theme.
- Removed `textcolor` plugin, it is now in the theme.

<div><a class="anchor" id="version500-preview-1october12018"></a></div>

## 5.0.0-preview-1 - 2018-10-01

Developer preview 1
