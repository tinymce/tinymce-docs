---
layout: default
title: Changelog
description: The history of TinyMCE releases.
keywords: changelog
class: changelog
---

> This is the {{site.productname}} Community version changelog. For information about the latest {{site.cloudname}} or {{site.enterpriseversion}} Release, see: [{{site.productname}} Release Notes]({{site.baseurl}}/release-notes/).

## 5.8.0 - 2021-05-06

### Added
- Added the `PAGE_UP` and `PAGE_DOWN` key code constants to the `VK` API #TINY-4612
- The editor resize handle can now be controlled using the keyboard #TINY-4823
- Added a new `fixed_toolbar_container_target` setting which renders the toolbar in the specified `HTMLElement`. Patch contributed by pvrobays

### Improved
- The `inline_boundaries` feature now supports the `home`, `end`, `pageup`, and `pagedown` keys #TINY-4612
- Updated the `formatter.matchFormat` API to support matching formats with variables in the `classes` property #TINY-7227
- Added HTML5 `audio` and `video` elements to the default alignment formats #TINY-6633
- Added support for alpha list numbering to the list properties dialog #TINY-6891

### Changed
- Updated the `image` dialog to display the class list dropdown as full-width if the caption checkbox is not present #TINY-6400
- Renamed the "H Align" and "V Align" input labels in the Table Cell Properties dialog to "Horizontal align" and "Vertical align" respectively #TINY-7285

### Deprecated
- The undocumented `setIconStroke` Split Toolbar Button API has been deprecated and will be removed in a future release #TINY-3551

### Fixed
- Fixed a bug where it wasn't possible to align nested list items #TINY-6567
- The RGB fields in the color picker dialog were not staying in sync with the color palette and hue slider #TINY-6952
- The color preview box in the color picker dialog was not correctly displaying the saturation and value of the chosen color #TINY-6952
- The color picker dialog will now show an alert if it is submitted with an invalid hex color code #TINY-2814
- Fixed a bug where the `TableModified` event was not fired when adding a table row with the Tab key #TINY-7006
- Added missing `images_file_types` setting to the exported TypeScript types #GH-6607
- Fixed a bug where lists pasted from Word with Roman numeral markers were not displayed correctly. Patch contributed by aautio #GH-6620
- The `editor.insertContent` API was incorrectly handling nested `span` elements with matching styles #TINY-6263
- The HTML5 `small` element could not be removed when clearing text formatting #TINY-6633
- The Oxide button text transform variable was incorrectly using `capitalize` instead of `none`. Patch contributed by dakur #GH-6341
- Fix dialog button text that was using title-style capitalization #TINY-6816
- Table plugin could perform operations on tables containing the inline editor #TINY-6625
- Fixed Tab key navigation inside table cells with a ranged selection #TINY-6638
- The foreground and background toolbar button color indicator is no longer blurry #TINY-3551
- Fixed a regression in the `tinymce.create()` API that caused issues when multiple objects were created #TINY-7358
- Fixed the `LineHeight` command causing the `change` event to be fired inconsistently #TINY-7048

<!-- Note: The below anchor is matches a historical changelog format and is not needed for new versions in the changelog. -->
<div><a class="anchor" id="version571march172021"></a></div>

## 5.7.1 - 2021-03-17

### Fixed
- Fixed the `help` dialog incorrectly linking to the changelog of TinyMCE 4 instead of TinyMCE 5 #TINY-7031
- Fixed a bug where error messages were displayed incorrectly in the image dialog #TINY-7099
- Fixed an issue where URLs were not correctly filtered in some cases #TINY-7025
- Fixed a bug where context menu items with names that contained uppercase characters were not displayed #TINY-7072
- Fixed context menu items lacking support for the `disabled` and `shortcut` properties #TINY-7073
- Fixed a regression where the width and height were incorrectly set when embedding content using the `media` dialog #TINY-7074

<div><a class="anchor" id="version570february102021"></a></div>

## 5.7.0 - 2021-02-10

### Added
- Added IPv6 address support to the URI API. Patch contributed by dev7355608 #GH-4409
- Added new `structure` and `style` properties to the `TableModified` event to indicate what kinds of modifications were made #TINY-6643
- Added `video` and `audio` live embed support for the `media` plugin #TINY-6229
- Added the ability to resize `video` and `iframe` media elements #TINY-6229
- Added a new `font_css` setting for adding fonts to both the editor and the parent document #TINY-6199
- Added a new `ImageUploader` API to simplify uploading image data to the configured `images_upload_url` or `images_upload_handler` #TINY-4601
- Added an Oxide variable to define the container background color in fullscreen mode #TINY-6903
- Added Oxide variables for setting the toolbar background colors for inline and sticky toolbars #TINY-6009
- Added a new `AfterProgressState` event that is fired after `editor.setProgressState` calls complete #TINY-6686
- Added support for `table_column_resizing` when inserting or deleting columns #TINY-6711

### Changed
- Changed table and table column copy behavior to retain an appropriate width when pasted #TINY-6664
- Changed the `lists` plugin to apply list styles to all text blocks within a selection #TINY-3755
- Changed the `advlist` plugin to log a console error message when the `list` plugin isn't enabled #TINY-6585
- Changed the z-index of the `setProgressState(true)` throbber so it does not hide notifications #TINY-6686
- Changed the type signature for `editor.selection.getRng()` incorrectly returning `null` #TINY-6843
- Changed some `SaxParser` regular expressions to improve performance #TINY-6823
- Changed `editor.setProgressState(true)` to close any open popups #TINY-6686

### Fixed
- Fixed `codesample` highlighting performance issues for some languages #TINY-6996
- Fixed an issue where cell widths were lost when merging table cells #TINY-6901
- Fixed `col` elements incorrectly transformed to `th` elements when converting columns to header columns #TINY-6715
- Fixed a number of table operations not working when selecting 2 table cells on Mozilla Firefox #TINY-3897
- Fixed a memory leak by backporting an upstream Sizzle fix #TINY-6859
- Fixed table `width` style was removed when copying #TINY-6664
- Fixed focus lost while typing in the `charmap` or `emoticons` dialogs when the editor is rendered in a shadow root #TINY-6904
- Fixed corruption of base64 URLs used in style attributes when parsing HTML #TINY-6828
- Fixed the order of CSS precedence of `content_style` and `content_css` in the `preview` and `template` plugins. `content_style` now has precedence #TINY-6529
- Fixed an issue where the image dialog tried to calculate image dimensions for an empty image URL #TINY-6611
- Fixed an issue where `scope` attributes on table cells would not change as expected when merging or unmerging cells #TINY-6486
- Fixed the plugin documentation links in the `help` plugin #DOC-703
- Fixed events bound using `DOMUtils` not returning the correct result for `isDefaultPrevented` in some cases #TINY-6834
- Fixed the "Dropped file type is not supported" notification incorrectly showing when using an inline editor #TINY-6834
- Fixed an issue with external styles bleeding into TinyMCE #TINY-6735
- Fixed an issue where parsing malformed comments could cause an infinite loop #TINY-6864
- Fixed incorrect return types on `editor.selection.moveToBookmark` #TINY-6504
- Fixed the type signature for `editor.selection.setCursorLocation()` incorrectly allowing a node with no `offset` #TINY-6843
- Fixed incorrect behavior when editor is destroyed while loading stylesheets #INT-2282
- Fixed figure elements incorrectly splitting from a valid parent element when editing the image within #TINY-6592
- Fixed inserting multiple rows or columns in a table cloning from the incorrect source row or column #TINY-6906
- Fixed an issue where new lines were not scrolled into view when pressing Shift+Enter or Shift+Return #TINY-6964
- Fixed an issue where list elements would not be removed when outdenting using the Enter or Return key #TINY-5974
- Fixed an issue where file extensions with uppercase characters were treated as invalid #TINY-6940
- Fixed dialog block messages were not passed through TinyMCE's translation system #TINY-6971

<div><a class="anchor" id="version562december82020"></a></div>

## 5.6.2 - 2020-12-08

### Fixed
- Fixed a UI rendering regression when the document body is using `display: flex` #TINY-6783

<div><a class="anchor" id="version561november252020"></a></div>

## 5.6.1 - 2020-11-25

### Fixed
- Fixed the `mceTableRowType` and `mceTableCellType` commands were not firing the `newCell` event #TINY-6692
- Fixed the HTML5 `s` element was not recognized when editing or clearing text formatting #TINY-6681
- Fixed an issue where copying and pasting table columns resulted in invalid HTML when using colgroups #TINY-6684
- Fixed an issue where the toolbar would render with the wrong width for inline editors in some situations #TINY-6683

<div><a class="anchor" id="version560november182020"></a></div>

## 5.6.0 - 2020-11-18

### Added
- Added new `BeforeOpenNotification` and `OpenNotification` events which allow internal notifications to be captured and modified before display #TINY-6528
- Added support for `block` and `unblock` methods on inline dialogs #TINY-6487
- Added new `TableModified` event which is fired whenever changes are made to a table #TINY-6629
- Added new `images_file_types` setting to determine which image file formats will be automatically processed into `img` tags on paste when using the `paste` plugin #TINY-6306
- Added support for `images_file_types` setting in the image file uploader to determine which image file extensions are valid for upload #TINY-6224
- Added new `format_empty_lines` setting to control if empty lines are formatted in a ranged selection #TINY-6483
- Added template support to the `autocompleter` for customizing the autocompleter items #TINY-6505
- Added new user interface `enable`, `disable`, and `isDisabled` methods #TINY-6397
- Added new `closest` formatter API to get the closest matching selection format from a set of formats #TINY-6479
- Added new `emojiimages` emoticons database that uses the twemoji CDN by default #TINY-6021
- Added new `emoticons_database` setting to configure which emoji database to use #TINY-6021
- Added new `name` field to the `style_formats` setting object to enable specifying a name for the format #TINY-4239

### Changed
- Changed `readonly` mode to allow hyperlinks to be clickable #TINY-6248

### Fixed
- Fixed the `change` event not firing after a successful image upload #TINY-6586
- Fixed the type signature for the `entity_encoding` setting not accepting delimited lists #TINY-6648
- Fixed layout issues when empty `tr` elements were incorrectly removed from tables #TINY-4679
- Fixed image file extensions lost when uploading an image with an alternative extension, such as `.jfif` #TINY-6622
- Fixed a security issue where URLs in attributes weren't correctly sanitized #TINY-6518
- Fixed `DOMUtils.getParents` incorrectly including the shadow root in the array of elements returned #TINY-6540
- Fixed an issue where the root document could be scrolled while an editor dialog was open inside a shadow root #TINY-6363
- Fixed `getContent` with text format returning a new line when the editor is empty #TINY-6281
- Fixed table column and row resizers not respecting the `data-mce-resize` attribute #TINY-6600
- Fixed inserting a table via the `mceInsertTable` command incorrectly creating 2 undo levels #TINY-6656
- Fixed nested tables with `colgroup` elements incorrectly always resizing the inner table #TINY-6623
- Fixed the `visualchars` plugin causing the editor to steal focus when initialized #TINY-6282
- Fixed `fullpage` plugin altering text content in `editor.getContent()` #TINY-6541
- Fixed `fullscreen` plugin not working correctly with multiple editors and shadow DOM #TINY-6280
- Fixed font size keywords such as `medium` not displaying correctly in font size menus #TINY-6291
- Fixed an issue where some attributes in table cells were not copied over to new rows or columns #TINY-6485
- Fixed incorrectly removing formatting on adjacent spaces when removing formatting on a ranged selection #TINY-6268
- Fixed the `Cut` menu item not working in the latest version of Mozilla Firefox #TINY-6615
- Fixed some incorrect types in the new TypeScript declaration file #TINY-6413
- Fixed a regression where a fake offscreen selection element was incorrectly created for the editor root node #TINY-6555
- Fixed an issue where menus would incorrectly collapse in small containers #TINY-3321
- Fixed an issue where only one table column at a time could be converted to a header #TINY-6326
- Fixed some minor memory leaks that prevented garbage collection for editor instances #TINY-6570
- Fixed resizing a `responsive` table not working when using the column resize handles #TINY-6601
- Fixed incorrectly calculating table `col` widths when resizing responsive tables #TINY-6646
- Fixed an issue where spaces were not preserved in pre-blocks when getting text content #TINY-6448
- Fixed a regression that caused the selection to be difficult to see in tables with backgrounds #TINY-6495
- Fixed content pasted multiple times in the editor when using Microsoft Internet Explorer 11. Patch contributed by mattford #GH-4905

<div><a class="anchor" id="version551october12020"></a></div>

## 5.5.1 - 2020-10-01

### Fixed
- Fixed pressing the down key near the end of a document incorrectly raising an exception #TINY-6471
- Fixed incorrect Typescript types for the `Tools` API #TINY-6475

<div><a class="anchor" id="version550september292020"></a></div>

## 5.5.0 - 2020-09-29

### Added
- Added a TypeScript declaration file to the bundle output for TinyMCE core #TINY-3785
- Added new `table_column_resizing` setting to control how table columns are resized when using the resize bars #TINY-6001
- Added the ability to remove images on a failed upload using the `images_upload_handler` failure callback #TINY-6011
- Added `hasPlugin` function to the editor API to determine if a plugin exists or not #TINY-766
- Added new `ToggleToolbarDrawer` command and query state handler to allow the toolbar drawer to be programmatically toggled and the toggle state to be checked #TINY-6032
- Added the ability to use `colgroup` elements in tables #TINY-6050
- Added a new setting `table_use_colgroups` for toggling whether colgroups are used in new tables #TINY-6050
- Added the ability to delete and navigate HTML media elements without the `media` plugin #TINY-4211
- Added `fullscreen_native` setting to the `fullscreen` plugin to enable use of the entire monitor #TINY-6284
- Added table related oxide variables to the Style API for more granular control over table cell selection appearance #TINY-6311
- Added new `toolbar_persist` setting to control the visibility of the inline toolbar #TINY-4847
- Added new APIs to allow for programmatic control of the inline toolbar visibility #TINY-4847
- Added the `origin` property to the `ObjectResized` and `ObjectResizeStart` events, to specify which handle the resize was performed on #TINY-6242
- Added new StyleSheetLoader `unload` and `unloadAll` APIs to allow loaded stylesheets to be removed #TINY-3926
- Added the `LineHeight` query command and action to the editor #TINY-4843
- Added the `lineheight` toolbar and menu items, and added `lineheight` to the default format menu #TINY-4843
- Added a new `contextmenu_avoid_overlap` setting to allow context menus to avoid overlapping matched nodes #TINY-6036
- Added new listbox dialog UI component for rendering a dropdown that allows nested options #TINY-2236
- Added back the ability to use nested items in the `image_class_list`, `link_class_list`, `link_list`, `table_class_list`, `table_cell_class_list`, and `table_row_class_list` settings #TINY-2236

### Changed
- Changed how CSS manipulates table cells when selecting multiple cells to achieve a semi-transparent selection #TINY-6311
- Changed the `target` property on fired events to use the native event target. The original target for an open shadow root can be obtained using `event.getComposedPath()` #TINY-6128
- Changed the editor to clean-up loaded CSS stylesheets when all editors using the stylesheet have been removed #TINY-3926
- Changed `imagetools` context menu icon for accessing the `image` dialog to use the `image` icon #TINY-4141
- Changed the `editor.insertContent()` and `editor.selection.setContent()` APIs to retain leading and trailing whitespace #TINY-5966
- Changed the `table` plugin `Column` menu to include the cut, copy and paste column menu items #TINY-6374
- Changed the default table styles in the content CSS files to better support the styling options available in the `table` dialog #TINY-6179

### Deprecated
- Deprecated the `Env.experimentalShadowDom` flag #TINY-6128

### Fixed
- Fixed tables with no borders displaying with the default border styles in the `preview` dialog #TINY-6179
- Fixed loss of whitespace when inserting content after a non-breaking space #TINY-5966
- Fixed the `event.getComposedPath()` function throwing an exception for events fired from the editor #TINY-6128
- Fixed notifications not appearing when the editor is within a ShadowRoot #TINY-6354
- Fixed focus issues with inline dialogs when the editor is within a ShadowRoot #TINY-6360
- Fixed the `template` plugin previews missing some content styles #TINY-6115
- Fixed the `media` plugin not saving the alternative source url in some situations #TINY-4113
- Fixed an issue where column resizing using the resize bars was inconsistent between fixed and relative table widths #TINY-6001
- Fixed an issue where dragging and dropping within a table would select table cells #TINY-5950
- Fixed up and down keyboard navigation not working for inline `contenteditable="false"` elements #TINY-6226
- Fixed dialog not retrieving `close` icon from icon pack #TINY-6445
- Fixed the `unlink` toolbar button not working when selecting multiple links #TINY-4867
- Fixed the `link` dialog not showing the "Text to display" field in some valid cases #TINY-5205
- Fixed the `DOMUtils.split()` API incorrectly removing some content #TINY-6294
- Fixed pressing the escape key not focusing the editor when using multiple toolbars #TINY-6230
- Fixed the `dirty` flag not being correctly set during an `AddUndo` event #TINY-4707
- Fixed `editor.selection.setCursorLocation` incorrectly placing the cursor outside `pre` elements in some circumstances #TINY-4058
- Fixed an exception being thrown when pressing the enter key inside pre elements while `br_in_pre` setting is false #TINY-4058

<div><a class="anchor" id="version542august172020"></a></div>

## 5.4.2 - 2020-08-17

### Fixed
- Fixed the editor not resizing when resizing the browser window in fullscreen mode #TINY-3511
- Fixed clicking on notifications causing inline editors to hide #TINY-6058
- Fixed an issue where link URLs could not be deleted or edited in the link dialog in some cases #TINY-4706
- Fixed a regression where setting the `anchor_top` or `anchor_bottom` options to `false` was not working #TINY-6256
- Fixed the `anchor` plugin not supporting the `allow_html_in_named_anchor` option #TINY-6236
- Fixed an exception thrown when removing inline formats that contained additional styles or classes #TINY-6288
- Fixed an exception thrown when positioning the context toolbar on Internet Explorer 11 in some edge cases #TINY-6271
- Fixed inline formats not removed when more than one `removeformat` format rule existed #TINY-6216
- Fixed an issue where spaces were sometimes removed when removing formating on nearby text #TINY-6251
- Fixed the list toolbar buttons not showing as active when a list is selected #TINY-6286
- Fixed an issue where the UI would sometimes not be shown or hidden when calling the show or hide API methods on the editor #TINY-6048
- Fixed the list type style not retained when copying list items #TINY-6289
- Fixed the Paste plugin converting tabs in plain text to a single space character. A `paste_tab_spaces` option has been included for setting the number of spaces used to replace a tab character #TINY-6237

<div><a class="anchor" id="version541july82020"></a></div>

## 5.4.1 - 2020-07-08

### Fixed
- Fixed the Search and Replace plugin incorrectly including zero-width caret characters in search results #TINY-4599
- Fixed dragging and dropping unsupported files navigating the browser away from the editor #TINY-6027
- Fixed undo levels not created on browser handled drop or paste events #TINY-6027
- Fixed content in an iframe element parsing as DOM elements instead of text content #TINY-5943
- Fixed Oxide checklist styles not showing when printing #TINY-5139
- Fixed bug with `scope` attribute not being added to the cells of header rows #TINY-6206

<div><a class="anchor" id="version540june302020"></a></div>

## 5.4.0 - 2020-06-30

### Added
- Added keyboard navigation support to menus and toolbars when the editor is in a ShadowRoot #TINY-6152
- Added the ability for menus to be clicked when the editor is in an open shadow root #TINY-6091
- Added the `Editor.ui.styleSheetLoader` API for loading stylesheets within the Document or ShadowRoot containing the editor UI #TINY-6089
- Added the `StyleSheetLoader` module to the public API #TINY-6100
- Added Oxide variables for styling the `select` element and headings in dialog content #TINY-6070
- Added icons for `table` column and row cut, copy, and paste toolbar buttons #TINY-6062
- Added all `table` menu items to the UI registry, so they can be used by name in other menus #TINY-4866
- Added new `mceTableApplyCellStyle` command to the `table` plugin #TINY-6004
- Added new `table` cut, copy, and paste column editor commands and menu items #TINY-6006
- Added font related Oxide variables for secondary buttons, allowing for custom styling #TINY-6061
- Added new `table_header_type` setting to control how table header rows are structured #TINY-6007
- Added new `table_sizing_mode` setting to replace the `table_responsive_width` setting, which has now been deprecated #TINY-6051
- Added new `mceTableSizingMode` command for changing the sizing mode of a table #TINY-6000
- Added new `mceTableRowType`, `mceTableColType`, and `mceTableCellType` commands and value queries #TINY-6150

### Changed
- Changed `advlist` toolbar buttons to only show a dropdown list if there is more than one option #TINY-3194
- Changed `mceInsertTable` command and `insertTable` API method to take optional header rows and columns arguments #TINY-6012
- Changed stylesheet loading, so that UI skin stylesheets can load in a ShadowRoot if required #TINY-6089
- Changed the DOM location of menus so that they display correctly when the editor is in a ShadowRoot #TINY-6093
- Changed the table plugin to correctly detect all valid header row structures #TINY-6007

### Fixed
- Fixed tables with no defined width being converted to a `fixed` width table when modifying the table #TINY-6051
- Fixed the `autosave` `isEmpty` API incorrectly detecting non-empty content as empty #TINY-5953
- Fixed table `Paste row after` and `Paste row before` menu items not disabled when nothing was available to paste #TINY-6006
- Fixed a selection performance issue with large tables on Microsoft Internet Explorer and Edge #TINY-6057
- Fixed filters for screening commands from the undo stack to be case-insensitive #TINY-5946
- Fixed `fullscreen` plugin now removes all classes when the editor is closed #TINY-4048
- Fixed handling of mixed-case icon identifiers (names) for UI elements #TINY-3854
- Fixed leading and trailing spaces lost when using `editor.selection.getContent({ format: 'text' })` #TINY-5986
- Fixed an issue where changing the URL with the quicklink toolbar caused unexpected undo behavior #TINY-5952
- Fixed an issue where removing formatting within a table cell would cause Internet Explorer 11 to scroll to the end of the table #TINY-6049
- Fixed an issue where the `allow_html_data_urls` setting was not correctly applied #TINY-5951
- Fixed the `autolink` feature so that it no longer treats a string with multiple "@" characters as an email address #TINY-4773
- Fixed an issue where removing the editor would leave unexpected attributes on the target element #TINY-4001
- Fixed the `link` plugin now suggest `mailto:` when the text contains an '@' and no slashes (`/`) #TINY-5941
- Fixed the `valid_children` check of custom elements now allows a wider range of characters in names #TINY-5971

<div><a class="anchor" id="version532june102020"></a></div>

## 5.3.2 - 2020-06-10

### Fixed
- Fixed a regression introduced in 5.3.0, where `images_dataimg_filter` was no-longer called #TINY-6086

<div><a class="anchor" id="version531may272020"></a></div>

## 5.3.1 - 2020-05-27

### Fixed
- Fixed the image upload error alert also incorrectly closing the image dialog #TINY-6020
- Fixed editor content scrolling incorrectly on focus in Firefox by reverting default content CSS html and body heights added in 5.3.0 #TINY-6019

<div><a class="anchor" id="version530may212020"></a></div>

## 5.3.0 - 2020-05-21

### Added
- Added html and body height styles to the default oxide content CSS #TINY-5978
- Added `uploadUri` and `blobInfo` to the data returned by `editor.uploadImages()` #TINY-4579
- Added a new function to the `BlobCache` API to lookup a blob based on the base64 data and mime type #TINY-5988
- Added the ability to search and replace within a selection #TINY-4549
- Added the ability to set the list start position for ordered lists and added new `lists` context menu item #TINY-3915
- Added `icon` as an optional config option to the toggle menu item API #TINY-3345
- Added `auto` mode for `toolbar_location` which positions the toolbar and menu bar at the bottom if there is no space at the top #TINY-3161

### Changed
- Changed the default `toolbar_location` to `auto` #TINY-3161
- Changed toggle menu items and choice menu items to have a dedicated icon with the checkmark displayed on the far right side of the menu item #TINY-3345
- Changed the `link`, `image`, and `paste` plugins to use Promises to reduce the bundle size #TINY-4710
- Changed the default icons to be lazy loaded during initialization #TINY-4729
- Changed the parsing of content so base64 encoded urls are converted to blob urls #TINY-4727
- Changed context toolbars so they concatenate when more than one is suitable for the current selection #TINY-4495
- Changed inline style element formats (strong, b, em, i, u, strike) to convert to a span on format removal if a `style` or `class` attribute is present #TINY-4741

### Fixed
- Fixed the `selection.setContent()` API not running parser filters #TINY-4002
- Fixed formats incorrectly applied or removed when table cells were selected #TINY-4709
- Fixed the `quickimage` button not restricting the file types to images #TINY-4715
- Fixed search and replace ignoring text in nested contenteditable elements #TINY-5967
- Fixed resize handlers displaying in the wrong location sometimes for remote images #TINY-4732
- Fixed table picker breaking in Firefox on low zoom levels #TINY-4728
- Fixed issue with loading or pasting contents with large base64 encoded images on Safari #TINY-4715
- Fixed supplementary special characters being truncated when inserted into the editor. Patch contributed by mlitwin. #TINY-4791
- Fixed toolbar buttons not set to disabled when the editor is in readonly mode #TINY-4592
- Fixed the editor selection incorrectly changing when removing caret format containers #TINY-3438
- Fixed bug where title, width, and height would be set to empty string values when updating an image and removing those attributes using the image dialog #TINY-4786
- Fixed `ObjectResized` event firing when an object wasn't resized #TINY-4161
- Fixed `ObjectResized` and `ObjectResizeStart` events incorrectly fired when adding or removing table rows and columns #TINY-4829
- Fixed the placeholder not hiding when pasting content into the editor #TINY-4828
- Fixed an issue where the editor would fail to load if local storage was disabled #TINY-5935
- Fixed an issue where an uploaded image would reuse a cached image with a different mime type #TINY-5988
- Fixed bug where toolbars and dialogs would not show if the body element was replaced (e.g. with Turbolinks). Patch contributed by spohlenz #GH-5653
- Fixed an issue where multiple formats would be removed when removing a single format at the end of lines or on empty lines #TINY-1170
- Fixed zero-width spaces incorrectly included in the `wordcount` plugin character count #TINY-5991
- Fixed a regression introduced in 5.2.0 whereby the desktop `toolbar_mode` setting would incorrectly override the mobile default setting #TINY-5998
- Fixed an issue where deleting all content in a single cell table would delete the entire table #TINY-1044

<div><a class="anchor" id="version522april232020"></a></div>

## 5.2.2 - 2020-04-23

### Fixed
- Fixed an issue where anchors could not be inserted on empty lines #TINY-2788
- Fixed text decorations (underline, strikethrough) not consistently inheriting the text color #TINY-4757
- Fixed `format` menu alignment buttons inconsistently applying to images #TINY-4057
- Fixed the floating toolbar drawer height collapsing when the editor is rendered in modal dialogs or floating containers #TINY-4837
- Fixed `media` embed content not processing safely in some cases #TINY-4857

<div><a class="anchor" id="version521march252020"></a></div>

## 5.2.1 - 2020-03-25

### Fixed
- Fixed the "is decorative" checkbox in the image dialog clearing after certain dialog events #FOAM-11
- Fixed possible uncaught exception when a `style` attribute is removed using a content filter on `setContent` #TINY-4742
- Fixed the table selection not functioning correctly in Microsoft Edge 44 or higher #TINY-3862
- Fixed the table resize handles not functioning correctly in Microsoft Edge 44 or higher #TINY-4160
- Fixed the floating toolbar drawer disconnecting from the toolbar when adding content in inline mode #TINY-4725 #TINY-4765
- Fixed `readonly` mode not returning the appropriate boolean value #TINY-3948
- Fixed the `forced_root_block_attrs` setting not applying attributes to new blocks consistently #TINY-4564
- Fixed the editor incorrectly stealing focus during initialization in Microsoft Internet Explorer #TINY-4697
- Fixed dialogs stealing focus when opening an alert or confirm dialog using an `onAction` callback #TINY-4014
- Fixed inline dialogs incorrectly closing when clicking on an opened alert or confirm dialog #TINY-4012
- Fixed the context toolbar overlapping the menu bar and toolbar #TINY-4586
- Fixed notification and inline dialog positioning issues when using `toolbar_location: 'bottom'` #TINY-4586
- Fixed the `colorinput` popup appearing offscreen on mobile devices #TINY-4711
- Fixed special characters not being found when searching by "whole words only" #TINY-4522
- Fixed an issue where dragging images could cause them to be duplicated #TINY-4195
- Fixed context toolbars activating without the editor having focus #TINY-4754
- Fixed an issue where removing the background color of text did not always work #TINY-4770
- Fixed an issue where new rows and columns in a table did not retain the style of the previous row or column #TINY-4788

<div><a class="anchor" id="version520february132020"></a></div>

## 5.2.0 - 2020-02-13

### Added
- Added the ability to apply formats to spaces #TINY-4200
- Added new `toolbar_location` setting to allow for positioning the menu and toolbar at the bottom of the editor #TINY-4210
- Added new `toolbar_groups` setting to allow a custom floating toolbar group to be added to the toolbar when using `floating` toolbar mode #TINY-4229
- Added new `link_default_protocol` setting to `link` and `autolink` plugin to allow a protocol to be used by default #TINY-3328
- Added new `placeholder` setting to allow a placeholder to be shown when the editor is empty #TINY-3917
- Added new `tinymce.dom.TextSeeker` API to allow searching text across different DOM nodes #TINY-4200
- Added a drop shadow below the toolbar while in sticky mode and introduced Oxide variables to customize it when creating a custom skin #TINY-4343
- Added `quickbars_image_toolbar` setting to allow for the image quickbar to be turned off #TINY-4398
- Added iframe and img `loading` attribute to the default schema. Patch contributed by ataylor32. #GH-5112
- Added new `getNodeFilters`/`getAttributeFilters` functions to the `editor.serializer` instance #TINY-4344
- Added new `a11y_advanced_options` setting to allow additional accessibility options to be added #FOAM-11
- Added new accessibility options and behaviours to the image dialog using `a11y_advanced_options` #FOAM-11
- Added the ability to use the window `PrismJS` instance for the `codesample` plugin instead of the bundled version to allow for styling custom languages #TINY-4504
- Added error message events that fire when a resource loading error occurs #TINY-4509

### Changed
- Changed the default schema to disallow `onchange` for select elements #TINY-4614
- Changed default `toolbar_mode` value from false to `wrap`. The value false has been deprecated #TINY-4617
- Changed `toolbar_drawer` setting to `toolbar_mode`. `toolbar_drawer` has been deprecated #TINY-4416
- Changed iframe mode to set selection on content init if selection doesn't exist #TINY-4139
- Changed table related icons to align them with the visual style of the other icons #TINY-4341
- Changed and improved the visual appearance of the color input field #TINY-2917
- Changed fake caret container to use `forced_root_block` when possible #TINY-4190
- Changed the `requireLangPack` API to wait until the plugin has been loaded before loading the language pack #TINY-3716
- Changed the formatter so `style_formats` are registered before the initial content is loaded into the editor #TINY-4238
- Changed media plugin to use https protocol for media urls by default #TINY-4577
- Changed the parser to treat CDATA nodes as bogus HTML comments to match the HTML parsing spec. A new `preserve_cdata` setting has been added to preserve CDATA nodes if required #TINY-4625

### Fixed
- Fixed incorrect parsing of malformed/bogus HTML comments #TINY-4625
- Fixed `quickbars` selection toolbar appearing on non-editable elements #TINY-4359
- Fixed bug with alignment toolbar buttons sometimes not changing state correctly #TINY-4139
- Fixed the `codesample` toolbar button not toggling when selecting code samples other than HTML #TINY-4504
- Fixed content incorrectly scrolling to the top or bottom when pressing enter if when the content was already in view #TINY-4162
- Fixed `scrollIntoView` potentially hiding elements behind the toolbar #TINY-4162
- Fixed editor not respecting the `resize_img_proportional` setting due to legacy code #TINY-4236
- Fixed flickering floating toolbar drawer in inline mode #TINY-4210
- Fixed an issue where the template plugin dialog would be indefinitely blocked on a failed template load #TINY-2766
- Fixed the `mscontrolselect` event not being unbound on IE/Edge #TINY-4196
- Fixed Confirm dialog footer buttons so only the "Yes" button is highlighted #TINY-4310
- Fixed `file_picker_callback` functionality for Image, Link and Media plugins #TINY-4163
- Fixed issue where floating toolbar drawer sometimes would break if the editor is resized while the drawer is open #TINY-4439
- Fixed incorrect `external_plugins` loading error message #TINY-4503
- Fixed resize handler was not hidden for ARIA purposes. Patch contributed by Parent5446. #GH-5195
- Fixed an issue where content could be lost if a misspelled word was selected and spellchecking was disabled #TINY-3899
- Fixed validation errors in the CSS where certain properties had the wrong default value #TINY-4491
- Fixed an issue where forced root block attributes were not applied when removing a list #TINY-4272
- Fixed an issue where the element path isn't being cleared when there are no parents #TINY-4412
- Fixed an issue where width and height in svg icons containing `rect` elements were overridden by the CSS reset #TINY-4408
- Fixed an issue where uploading images with `images_reuse_filename` enabled and that included a query parameter would generate an invalid URL #TINY-4638
- Fixed the `closeButton` property not working when opening notifications #TINY-4674
- Fixed keyboard flicker when opening a context menu on mobile #TINY-4540
- Fixed issue where plus icon svg contained strokes #TINY-4681

<div><a class="anchor" id="version516january282020"></a></div>

## 5.1.6 - 2020-01-28

### Fixed
- Fixed `readonly` mode not blocking all clicked links #TINY-4572
- Fixed legacy font sizes being calculated inconsistently for the `FontSize` query command value #TINY-4555
- Fixed changing a tables row from `Header` to `Body` incorrectly moving the row to the bottom of the table #TINY-4593
- Fixed the context menu not showing in certain cases with hybrid devices #TINY-4569
- Fixed the context menu opening in the wrong location when the target is the editor body #TINY-4568
- Fixed the `image` plugin not respecting the `automatic_uploads` setting when uploading local images #TINY-4287
- Fixed security issue related to parsing HTML comments and CDATA #TINY-4544

<div><a class="anchor" id="version515december192019"></a></div>

## 5.1.5 - 2019-12-19

### Fixed
- Fixed the UI not working with hybrid devices that accept both touch and mouse events #TNY-4521
- Fixed the `charmap` dialog initially focusing the first tab of the dialog instead of the search input field #TINY-4342
- Fixed an exception being raised when inserting content if the caret was directly before or after a `contenteditable="false"` element #TINY-4528
- Fixed a bug with pasting image URLs when paste as text is enabled #TINY-4523

<div><a class="anchor" id="version514december112019"></a></div>

## 5.1.4 - 2019-12-11

### Fixed
- Fixed dialog contents disappearing when clicking a checkbox for right-to-left languages #TINY-4518
- Fixed the `legacyoutput` plugin registering legacy formats after editor initialization, causing legacy content to be stripped on the initial load #TINY-4447
- Fixed search and replace not cycling through results when searching using special characters #TINY-4506
- Fixed the `visualchars` plugin converting HTML-like text to DOM elements in certain cases #TINY-4507
- Fixed an issue with the `paste` plugin not sanitizing content in some cases #TINY-4510
- Fixed HTML comments incorrectly being parsed in certain cases #TINY-4511

<div><a class="anchor" id="version513december42019"></a></div>

## 5.1.3 - 2019-12-04

### Fixed
- Fixed sticky toolbar not undocking when fullscreen mode is activated #TINY-4390
- Fixed the "Current Window" target not applying when updating links using the link dialog #TINY-4063
- Fixed disabled menu items not highlighting when focused #TINY-4339
- Fixed touch events passing through dialog collection items to the content underneath on Android devices #TINY-4431
- Fixed keyboard navigation of the Help dialog's Keyboard Navigation tab #TINY-4391
- Fixed search and replace dialog disappearing when finding offscreen matches on iOS devices #TINY-4350
- Fixed performance issues where sticky toolbar was jumping while scrolling on slower browsers #TINY-4475

<div><a class="anchor" id="version512november192019"></a></div>

## 5.1.2 - 2019-11-19

### Fixed
- Fixed desktop touch devices using `mobile` configuration overrides #TINY-4345
- Fixed unable to disable the new scrolling toolbar feature #TINY-4345
- Fixed touch events passing through any pop-up items to the content underneath on Android devices #TINY-4367
- Fixed the table selector handles throwing JavaScript exceptions for non-table selections #TINY-4338
- Fixed `cut` operations not removing selected content on Android devices when the `paste` plugin is enabled #TINY-4362
- Fixed inline toolbar not constrained to the window width by default #TINY-4314
- Fixed context toolbar split button chevrons pointing right when they should be pointing down #TINY-4257
- Fixed unable to access the dialog footer in tabbed dialogs on small screens #TINY-4360
- Fixed mobile table selectors were hard to select with touch by increasing the size #TINY-4366
- Fixed mobile table selectors moving when moving outside the editor #TINY-4366
- Fixed inline toolbars collapsing when using sliding toolbars #TINY-4389
- Fixed block textpatterns not treating NBSPs as spaces #TINY-4378
- Fixed backspace not merging blocks when the last element in the preceding block was a `contenteditable="false"` element #TINY-4235
- Fixed toolbar buttons that only contain text labels overlapping on mobile devices #TINY-4395
- Fixed quickbars quickimage picker not working on mobile #TINY-4377
- Fixed fullscreen not resizing in an iOS WKWebView component #TINY-4413

<div><a class="anchor" id="version511october282019"></a></div>

## 5.1.1 - 2019-10-28

### Fixed
- Fixed font formats containing spaces being wrapped in `&quot;` entities instead of single quotes #TINY-4275
- Fixed alert and confirm dialogs losing focus when clicked #TINY-4248
- Fixed clicking outside a modal dialog focusing on the document body #TINY-4249
- Fixed the context toolbar not hiding when scrolled out of view #TINY-4265

<div><a class="anchor" id="version510october172019"></a></div>

## 5.1.0 - 2019-10-17

### Added
- Added touch selector handles for table selections on touch devices #TINY-4097
- Added border width field to Table Cell dialog #TINY-4028
- Added touch event listener to media plugin to make embeds playable #TINY-4093
- Added oxide styling options to notifications and tweaked the default variables #TINY-4153
- Added additional padding to split button chevrons on touch devices, to make them easier to interact with #TINY-4223
- Added new platform detection functions to `Env` and deprecated older detection properties #TINY-4184
- Added `inputMode` config field to specify inputmode attribute of `input` dialog components #TINY-4062
- Added new `inputMode` property to relevant plugins/dialogs #TINY-4102
- Added new `toolbar_sticky` setting to allow the iframe menubar/toolbar to stick to the top of the window when scrolling #TINY-3982

### Changed
- Changed default setting for `toolbar_drawer` to `floating` #TINY-3634
- Changed mobile phones to use the `silver` theme by default #TINY-3634
- Changed some editor settings to default to `false` on touch devices:
  - `menubar`(phones only) #TINY-4077
  - `table_grid` #TINY-4075
  - `resize` #TINY-4157
  - `object_resizing` #TINY-4157
- Changed toolbars and context toolbars to sidescroll on mobile #TINY-3894 #TINY-4107
- Changed context menus to render as horizontal menus on touch devices #TINY-4107
- Changed the editor to use the `VisualViewport` API of the browser where possible #TINY-4078
- Changed visualblocks toolbar button icon and renamed `paragraph` icon to `visualchars` #TINY-4074
- Changed Oxide default for `@toolbar-button-chevron-color` to follow toolbar button icon color #TINY-4153
- Changed the `urlinput` dialog component to use the `url` type attribute #TINY-4102

### Fixed
- Fixed Safari desktop visual viewport fires resize on fullscreen breaking the restore function #TINY-3976
- Fixed scroll issues on mobile devices #TINY-3976
- Fixed context toolbar unable to refresh position on iOS12 #TINY-4107
- Fixed ctrl+left click not opening links on readonly mode and the preview dialog #TINY-4138
- Fixed Slider UI component not firing `onChange` event on touch devices #TINY-4092
- Fixed notifications overlapping instead of stacking #TINY-3478
- Fixed inline dialogs positioning incorrectly when the page is scrolled #TINY-4018
- Fixed inline dialogs and menus not repositioning when resizing #TINY-3227
- Fixed inline toolbar incorrectly stretching to the full width when a width value was provided #TINY-4066
- Fixed menu chevrons color to follow the menu text color #TINY-4153
- Fixed table menu selection grid from staying black when using dark skins, now follows border color #TINY-4153
- Fixed Oxide using the wrong text color variable for menubar button focused state #TINY-4146
- Fixed the autoresize plugin not keeping the selection in view when resizing #TINY-4094
- Fixed textpattern plugin throwing exceptions when using `forced_root_block: false` #TINY-4172
- Fixed missing CSS fill styles for toolbar button icon active state #TINY-4147
- Fixed an issue where the editor selection could end up inside a short ended element (such as `br`) #TINY-3999
- Fixed browser selection being lost in inline mode when opening split dropdowns #TINY-4197
- Fixed backspace throwing an exception when using `forced_root_block: false` #TINY-4099
- Fixed floating toolbar drawer expanding outside the bounds of the editor #TINY-3941
- Fixed the autocompleter not activating immediately after a `br` or `contenteditable=false` element #TINY-4194
- Fixed an issue where the autocompleter would incorrectly close on IE 11 in certain edge cases #TINY-4205

<div><a class="anchor" id="version5016september242019"></a></div>

## 5.0.16 - 2019-09-24

### Added
- Added new `referrer_policy` setting to add the `referrerpolicy` attribute when loading scripts or stylesheets #TINY-3978
- Added a slight background color to dialog tab links when focused to aid keyboard navigation #TINY-3877

### Fixed
- Fixed media poster value not updating on change #TINY-4013
- Fixed openlink was not registered as a toolbar button #TINY-4024
- Fixed failing to initialize if a script tag was used inside a SVG #TINY-4087
- Fixed double top border showing on toolbar without menubar when toolbar_drawer is enabled #TINY-4118
- Fixed unable to drag inline dialogs to the bottom of the screen when scrolled #TINY-4154
- Fixed notifications appearing on top of the toolbar when scrolled in inline mode #TINY-4159
- Fixed notifications displaying incorrectly on IE 11 #TINY-4169

<div><a class="anchor" id="version5015september22019"></a></div>

## 5.0.15 - 2019-09-02

### Added
- Added a dark `content_css` skin to go with the dark UI skin #TINY-3743

### Changed
- Changed the enabled state on toolbar buttons so they don't get the hover effect #TINY-3974

### Fixed
- Fixed missing CSS active state on toolbar buttons #TINY-3966
- Fixed `onChange` callback not firing for the colorinput dialog component #TINY-3968
- Fixed context toolbars not showing in fullscreen mode #TINY-4023

<div><a class="anchor" id="version5014august192019"></a></div>

## 5.0.14 - 2019-08-19

### Added
- Added an API to reload the autocompleter menu with additional fetch metadata #MENTIONS-17

### Fixed
- Fixed missing toolbar button border styling options #TINY-3965
- Fixed image upload progress notification closing before the upload is complete #TINY-3963
- Fixed inline dialogs not closing on escape when no dialog component is in focus #TINY-3936
- Fixed plugins not being filtered when defaulting to mobile on phones #TINY-3537
- Fixed toolbar more drawer showing the content behind it when transitioning between opened and closed states #TINY-3878
- Fixed focus not returning to the dialog after pressing the "Replace all" button in the search and replace dialog #TINY-3961

### Removed
- Removed Oxide variable `@menubar-select-disabled-border-color` and replaced it with `@menubar-select-disabled-border` #TINY-3965

<div><a class="anchor" id="version5013august62019"></a></div>

## 5.0.13 - 2019-08-06

### Changed
- Changed modal dialogs to prevent dragging by default and added new `draggable_modal` setting to restore dragging #TINY-3873
- Changed the nonbreaking plugin to insert nbsp characters wrapped in spans to aid in filtering. This can be disabled using the `nonbreaking_wrap` setting #TINY-3647
- Changed backspace behaviour in lists to outdent nested list items when the cursor is at the start of the list item #TINY-3651

### Fixed
- Fixed sidebar growing beyond editor bounds in IE 11 #TINY-3937
- Fixed issue with being unable to keyboard navigate disabled toolbar buttons #TINY-3350
- Fixed issues with backspace and delete in nested contenteditable true and false elements #TINY-3868
- Fixed issue with losing keyboard navigation in dialogs due to disabled buttons #TINY-3914
- Fixed `MouseEvent.mozPressure is deprecated` warning in Firefox #TINY-3919
- Fixed `default_link_target` not being respected when `target_list` is disabled #TINY-3757
- Fixed mobile plugin filter to only apply to the mobile theme, rather than all mobile platforms #TINY-3405
- Fixed focus switching to another editor during mode changes #TINY-3852
- Fixed an exception being thrown when clicking on an uninitialized inline editor #TINY-3925
- Fixed unable to keyboard navigate to dialog menu buttons #TINY-3933
- Fixed dialogs being able to be dragged outside the window viewport #TINY-3787
- Fixed inline dialogs appearing above modal dialogs #TINY-3932

<div><a class="anchor" id="version5012july182019"></a></div>

## 5.0.12 - 2019-07-18

### Added
- Added ability to utilize UI dialog panels inside other panels #TINY-3305
- Added help dialog tab explaining keyboard navigation of the editor #TINY-3603

### Changed
- Changed the "Find and Replace" design to an inline dialog #TINY-3054

### Fixed
- Fixed issue where autolink spacebar event was not being fired on Edge #TINY-3891
- Fixed table selection missing the background color #TINY-3892
- Fixed removing shortcuts not working for function keys #TINY-3871
- Fixed non-descriptive UI component type names #TINY-3349
- Fixed UI registry components rendering as the wrong type when manually specifying a different type #TINY-3385
- Fixed an issue where dialog checkbox, input, selectbox, textarea and urlinput components couldn't be disabled #TINY-3708
- Fixed the context toolbar not using viable screen space in inline/distraction free mode #TINY-3717
- Fixed the context toolbar overlapping the toolbar in various conditions #TINY-3205
- Fixed IE11 edge case where items were being inserted into the wrong location #TINY-3884

<div><a class="anchor" id="version5011july42019"></a></div>

## 5.0.11 - 2019-07-04

### Fixed
- Fixed packaging errors caused by a rollup treeshaking bug (https://github.com/rollup/rollup/issues/2970) #TINY-3866
- Fixed the customeditor component not able to get data from the dialog api #TINY-3866
- Fixed collection component tooltips not being translated #TINY-3855

<div><a class="anchor" id="version5010july22019"></a></div>

## 5.0.10 - 2019-07-02

### Added
- Added support for all HTML color formats in `color_map` setting #TINY-3837

### Changed
- Changed backspace key handling to outdent content in appropriate circumstances #TINY-3685
- Changed default palette for forecolor and backcolor to include some lighter colors suitable for highlights #TINY-2865
- Changed the search and replace plugin to cycle through results #TINY-3800

### Fixed
- Fixed inconsistent types causing some properties to be unable to be used in dialog components #TINY-3778
- Fixed an issue in the Oxide skin where dialog content like outlines and shadows were clipped because of overflow hidden #TINY-3566
- Fixed the search and replace plugin not resetting state when changing the search query #TINY-3800
- Fixed backspace in lists not creating an undo level #TINY-3814
- Fixed the editor to cancel loading in quirks mode where the UI is not supported #TINY-3391
- Fixed applying fonts not working when the name contained spaces and numbers #TINY-3801
- Fixed so that initial content is retained when initializing on list items #TINY-3796
- Fixed inefficient font name and font size current value lookup during rendering #TINY-3813
- Fixed mobile font copied into the wrong folder for the oxide-dark skin #TINY-3816
- Fixed an issue where resizing the width of tables would produce inaccurate results #TINY-3827
- Fixed a memory leak in the Silver theme #TINY-3797
- Fixed alert and confirm dialogs using incorrect markup causing inconsistent padding #TINY-3835
- Fixed an issue in the Table plugin with `table_responsive_width` not enforcing units when resizing #TINY-3790
- Fixed leading, trailing and sequential spaces being lost when pasting plain text #TINY-3726
- Fixed exception being thrown when creating relative URIs #TINY-3851
- Fixed focus is no longer set to the editor content during mode changes unless the editor already had focus #TINY-3852

<div><a class="anchor" id="version509june262019"></a></div>

## 5.0.9 - 2019-06-26

### Fixed
- Fixed print plugin not working in Firefox #TINY-3834

<div><a class="anchor" id="version508june182019"></a></div>

## 5.0.8 - 2019-06-18

### Added
- Added back support for multiple toolbars #TINY-2195
- Added support for .m4a files to the media plugin #TINY-3750
- Added new base_url and suffix editor init options #TINY-3681

### Fixed
- Fixed incorrect padding for select boxes with visible values #TINY-3780
- Fixed selection incorrectly changing when programmatically setting selection on contenteditable false elements #TINY-3766
- Fixed sidebar background being transparent #TINY-3727
- Fixed the build to remove duplicate iife wrappers #TINY-3689
- Fixed bogus autocompleter span appearing in content when the autocompleter menu is shown #TINY-3752
- Fixed toolbar font size select not working with legacyoutput plugin #TINY-2921
- Fixed the legacyoutput plugin incorrectly aligning images #TINY-3660
- Fixed remove color not working when using the legacyoutput plugin #TINY-3756
- Fixed the font size menu applying incorrect sizes when using the legacyoutput plugin #TINY-3773
- Fixed scrollIntoView not working when the parent window was out of view #TINY-3663
- Fixed the print plugin printing from the wrong window in IE11 #TINY-3762
- Fixed content CSS loaded over CORS not loading in the preview plugin with content_css_cors enabled #TINY-3769
- Fixed the link plugin missing the default "None" option for link list #TINY-3738
- Fixed small dot visible with menubar and toolbar disabled in inline mode #TINY-3623
- Fixed space key properly inserts a nbsp before/after block elements #TINY-3745
- Fixed native context menu not showing with images in IE11 #TINY-3392
- Fixed inconsistent browser context menu image selection #TINY-3789

<div><a class="anchor" id="version507june52019"></a></div>

## 5.0.7 - 2019-06-05

### Added
- Added new toolbar button and menu item for inserting tables via dialog #TINY-3636
- Added new API for adding/removing/changing tabs in the Help dialog #TINY-3535
- Added highlighting of matched text in autocompleter items #TINY-3687
- Added the ability for autocompleters to work with matches that include spaces #TINY-3704
- Added new `imagetools_fetch_image` callback to allow custom implementations for cors loading of images #TINY-3658
- Added `'http'` and `https` options to `link_assume_external_targets` to prepend `http://` or `https://` prefixes when URL does not contain a protocol prefix. Patch contributed by francoisfreitag. #GH-4335

### Changed
- Changed annotations navigation to work the same as inline boundaries #TINY-3396
- Changed tabpanel API by adding a `name` field and changing relevant methods to use it #TINY-3535

### Fixed
- Fixed text color not updating all color buttons when choosing a color #TINY-3602
- Fixed the autocompleter not working with fragmented text #TINY-3459
- Fixed the autosave plugin no longer overwrites window.onbeforeunload #TINY-3688
- Fixed infinite loop in the paste plugin when IE11 takes a long time to process paste events. Patch contributed by lRawd. #GH-4987
- Fixed image handle locations when using `fixed_toolbar_container`. Patch contributed by t00. #GH-4966
- Fixed the autoresize plugin not firing `ResizeEditor` events #TINY-3587
- Fixed editor in fullscreen mode not extending to the bottom of the screen #TINY-3701
- Fixed list removal when pressing backspace after the start of the list item #TINY-3697
- Fixed autocomplete not triggering from compositionend events #TINY-3711
- Fixed `file_picker_callback` could not set the caption field on the insert image dialog #TINY-3172
- Fixed the autocompleter menu showing up after a selection had been made #TINY-3718
- Fixed an exception being thrown when a file or number input has focus during initialization. Patch contributed by t00 #GH-2194

<div><a class="anchor" id="version506may222019"></a></div>

## 5.0.6 - 2019-05-22

### Added
- Added `icons_url` editor settings to enable icon packs to be loaded from a custom url #TINY-3585
- Added `image_uploadtab` editor setting to control the visibility of the upload tab in the image dialog #TINY-3606
- Added new api endpoints to the wordcount plugin and improved character count logic #TINY-3578

### Changed
- Changed plugin, language and icon loading errors to log in the console instead of a notification #TINY-3585

### Fixed
- Fixed the textpattern plugin not working with fragmented text #TINY-3089
- Fixed various toolbar drawer accessibility issues and added an animation #TINY-3554
- Fixed issues with selection and ui components when toggling readonly mode #TINY-3592
- Fixed so readonly mode works with inline editors #TINY-3592
- Fixed docked inline toolbar positioning when scrolled #TINY-3621
- Fixed initial value not being set on bespoke select in quickbars and toolbar drawer #TINY-3591
- Fixed so that nbsp entities aren't trimmed in white-space: pre-line elements #TINY-3642
- Fixed `mceInsertLink` command inserting spaces instead of url encoded characters #GH-4990
- Fixed text content floating on top of dialogs in IE11 #TINY-3640

<div><a class="anchor" id="version505may92019"></a></div>

## 5.0.5 - 2019-05-09

### Added
- Added menu items to match the forecolor/backcolor toolbar buttons #TINY-2878
- Added default directionality based on the configured language #TINY-2621
- Added styles, icons and tests for rtl mode #TINY-2621

### Fixed
- Fixed autoresize not working with floating elements or when media elements finished loading #TINY-3545
- Fixed incorrect vertical caret positioning in IE 11 #TINY-3188
- Fixed submenu anchoring hiding overflowed content #TINY-3564

### Removed
- Removed unused and hidden validation icons to avoid displaying phantom tooltips #TINY-2329

<div><a class="anchor" id="version504april232019"></a></div>

## 5.0.4 - 2019-04-23

### Added
- Added back URL dialog functionality, which is now available via `editor.windowManager.openUrl()` #TINY-3382
- Added the missing throbber functionality when calling `editor.setProgressState(true)` #TINY-3453
- Added function to reset the editor content and undo/dirty state via `editor.resetContent()` #TINY-3435
- Added the ability to set menu buttons as active #TINY-3274
- Added `editor.mode` API, featuring a custom editor mode API #TINY-3406
- Added better styling to floating toolbar drawer #TINY-3479
- Added the new premium plugins to the Help dialog plugins tab #TINY-3496
- Added the linkchecker context menu items to the default configuration #TINY-3543

### Fixed
- Fixed image context menu items showing on placeholder images #TINY-3280
- Fixed dialog labels and text color contrast within notifications/alert banners to satisfy WCAG 4.5:1 contrast ratio for accessibility #TINY-3351
- Fixed selectbox and colorpicker items not being translated #TINY-3546
- Fixed toolbar drawer sliding mode to correctly focus the editor when tabbing via keyboard navigation #TINY-3533
- Fixed positioning of the styleselect menu in iOS while using the mobile theme #TINY-3505
- Fixed the menubutton `onSetup` callback to be correctly executed when rendering the menu buttons #TINY-3547
- Fixed `default_link_target` setting to be correctly utilized when creating a link #TINY-3508
- Fixed colorpicker floating marginally outside its container #TINY-3026
- Fixed disabled menu items displaying as active when hovered #TINY-3027

### Removed
- Removed redundant mobile wrapper #TINY-3480

<div><a class="anchor" id="version503march192019"></a></div>

## 5.0.3 - 2019-03-19

### Changed
- Changed empty nested-menu items within the style formats menu to be disabled or hidden if the value of `style_formats_autohide` is `true` #TINY-3310
- Changed the entire phrase 'Powered by Tiny' in the status bar to be a link instead of just the word 'Tiny' #TINY-3366
- Changed `formatselect`, `styleselect` and `align` menus to use the `mceToggleFormat` command internally #TINY-3428

### Fixed
- Fixed toolbar keyboard navigation to work as expected when `toolbar_drawer` is configured #TINY-3432
- Fixed text direction buttons to display the correct pressed state in selections that have no explicit `dir` property #TINY-3138
- Fixed the mobile editor to clean up properly when removed #TINY-3445
- Fixed quickbar toolbars to add an empty box to the screen when it is set to `false` #TINY-3439
- Fixed an issue where pressing the **Delete/Backspace** key at the edge of tables was creating incorrect selections #TINY-3371
- Fixed an issue where dialog collection items (emoticon and special character dialogs) couldn't be selected with touch devices #TINY-3444
- Fixed a type error introduced in TinyMCE version 5.0.2 when calling `editor.getContent()` with nested bookmarks #TINY-3400
- Fixed an issue that prevented default icons from being overridden #TINY-3449
- Fixed an issue where **Home/End** keys wouldn't move the caret correctly before or after `contenteditable=false` inline elements #TINY-2995
- Fixed styles to be preserved in IE 11 when editing via the `fullpage` plugin #TINY-3464
- Fixed the `link` plugin context toolbar missing the open link button #TINY-3461
- Fixed inconsistent dialog component spacing #TINY-3436

<div><a class="anchor" id="version502march52019"></a></div>

## 5.0.2 - 2019-03-05

### Added
- Added presentation and document presets to `htmlpanel` dialog component #TINY-2694
- Added missing fixed_toolbar_container setting has been reimplemented in the Silver theme #TINY-2712
- Added a new toolbar setting `toolbar_drawer` that moves toolbar groups which overflow the editor width into either a `sliding` or `floating` toolbar section #TINY-2874

### Changed
- Updated the build process to include package lock files in the dev distribution archive #TINY-2870

### Fixed
- Fixed inline dialogs did not have aria attributes #TINY-2694
- Fixed default icons are now available in the UI registry, allowing use outside of toolbar buttons #TINY-3307
- Fixed a memory leak related to select toolbar items #TINY-2874
- Fixed a memory leak due to format changed listeners that were never unbound #TINY-3191
- Fixed an issue where content may have been lost when using permanent bookmarks #TINY-3400
- Fixed the quicklink toolbar button not rendering in the quickbars plugin #TINY-3125
- Fixed an issue where menus were generating invalid HTML in some cases #TINY-3323
- Fixed an issue that could cause the mobile theme to show a blank white screen when the editor was inside an `overflow:hidden` element #TINY-3407
- Fixed mobile theme using a transparent background and not taking up the full width on iOS #TINY-3414
- Fixed the template plugin dialog missing the description field #TINY-3337
- Fixed input dialog components using an invalid default type attribute #TINY-3424
- Fixed an issue where backspace/delete keys after/before pagebreak elements wouldn't move the caret #TINY-3097
- Fixed an issue in the table plugin where menu items and toolbar buttons weren't showing correctly based on the selection #TINY-3423
- Fixed inconsistent button focus styles in Firefox #TINY-3377
- Fixed the resize icon floating left when all status bar elements were disabled #TINY-3340
- Fixed the resize handle to not show in fullscreen mode #TINY-3404

<div><a class="anchor" id="version501february212019"></a></div>

## 5.0.1 - 2019-02-21

### Added
- Added H1-H6 toggle button registration to the silver theme #TINY-3070
- Added code sample toolbar button will now toggle on when the cursor is in a code section #TINY-3040
- Added new settings to the emoticons plugin to allow additional emoticons to be added #TINY-3088

### Fixed
- Fixed an issue where adding links to images would replace the image with text #TINY-3356
- Fixed an issue where the inline editor could use fractional pixels for positioning #TINY-3202
- Fixed an issue where uploading non-image files in the Image Plugin upload tab threw an error. #TINY-3244
- Fixed an issue in the media plugin that was causing the source url and height/width to be lost in certain circumstances #TINY-2858
- Fixed an issue with the Context Toolbar not being removed when clicking outside of the editor #TINY-2804
- Fixed an issue where clicking 'Remove link' wouldn't remove the link in certain circumstances #TINY-3199
- Fixed an issue where the media plugin would fail when parsing dialog data #TINY-3218
- Fixed an issue where retrieving the selected content as text didn't create newlines #TINY-3197
- Fixed incorrect keyboard shortcuts in the Help dialog for Windows #TINY-3292
- Fixed an issue where JSON serialization could produce invalid JSON #TINY-3281
- Fixed production CSS including references to source maps #TINY-3920
- Fixed development CSS was not included in the development zip #TINY-3920
- Fixed the autocompleter matches predicate not matching on the start of words by default #TINY-3306
- Fixed an issue where the page could be scrolled with modal dialogs open #TINY-2252
- Fixed an issue where autocomplete menus would show an icon margin when no items had icons #TINY-3329
- Fixed an issue in the quickbars plugin where images incorrectly showed the text selection toolbar #TINY-3338
- Fixed an issue that caused the inline editor to fail to render when the target element already had focus #TINY-3353

### Removed
- Removed paste as text notification banner and paste_plaintext_inform setting #POW-102

<div><a class="anchor" id="version500february42019"></a></div>

## 5.0.0 - 2019-02-04

Full documentation for the version 5 features and changes is available at https://www.tiny.cloud/docs/release-notes/

### Added
- Added links and registered names with * to denote premium plugins in Plugins tab of Help dialog #TINY-3223

### Changed
- Changed Tiny 5 mobile skin to look more uniform with desktop #TINY-2650
- Blacklisted table, th and td as inline editor target #TINY-717

### Fixed
- Fixed an issue where tab panel heights weren't sizing properly on smaller screens and weren't updating on resize #TINY-3242
- Fixed image tools not having any padding between the label and slider #TINY-3220
- Fixed context toolbar toggle buttons not showing the correct state #TINY-3022
- Fixed missing separators in the spellchecker context menu between the suggestions and actions #TINY-3217
- Fixed notification icon positioning in alert banners #TINY-2196
- Fixed a typo in the word count plugin name #TINY-3062
- Fixed charmap and emoticons dialogs not having a primary button #TINY-3233
- Fixed an issue where resizing wouldn't work correctly depending on the box-sizing model #TINY-3278

<div><a class="anchor" id="version500-rc-2january222019"></a></div>

## 5.0.0-rc-2 - 2019-01-22

### Added
- Added screen reader accessibility for sidebar and statusbar #TINY-2699

### Changed
- Changed formatting menus so they are registered and made the align toolbar button use an icon instead of text #TINY-2880
- Changed checkboxes to use a boolean for its state, instead of a string #TINY-2848
- Updated the textpattern plugin to properly support nested patterns and to allow running a command with a value for a pattern with a start and an end #TINY-2991
- Updated Emoticons and Charmap dialogs to be screen reader accessible #TINY-2693

### Fixed
- Fixed the link dialog such that it will now retain class attributes when updating links #TINY-2825
- Fixed "Find and replace" not showing in the "Edit" menu by default #TINY-3061
- Fixed dropdown buttons missing the 'type' attribute, which could cause forms to be incorrectly submitted #TINY-2826
- Fixed emoticon and charmap search not returning expected results in certain cases #TINY-3084
- Fixed blank rel_list values throwing an exception in the link plugin #TINY-3149

### Removed
- Removed unnecessary 'flex' and unused 'colspan' properties from the new dialog APIs #TINY-2973

<div><a class="anchor" id="version500-rc-1january82019"></a></div>

## 5.0.0-rc-1 - 2019-01-08

### Added
- Added editor settings functionality to specify title attributes for toolbar groups #TINY-2690
- Added icons instead of button text to improve Search and Replace dialog footer appearance #TINY-2654
- Added `tox-dialog__table` instead of `mce-table-striped` class to enhance Help dialog appearance #TINY-2360
- Added title attribute to iframes so, screen readers can announce iframe labels #TINY-2692
- Added a wordcount menu item, that defaults to appearing in the tools menu #TINY-2877

### Changed
- Updated the font select dropdown logic to try to detect the system font stack and show "System Font" as the font name #TINY-2710
- Updated the autocompleter to only show when it has matched items #TINY-2350
- Updated SizeInput labels to "Height" and "Width" instead of Dimensions #TINY-2833
- Updated the build process to minify and generate ASCII only output for the emoticons database #TINY-2744

### Fixed
- Fixed readonly mode not fully disabling editing content #TINY-2287
- Fixed accessibility issues with the font select, font size, style select and format select toolbar dropdowns #TINY-2713
- Fixed accessibility issues with split dropdowns #TINY-2697
- Fixed the legacyoutput plugin to be compatible with TinyMCE 5.0 #TINY-2301
- Fixed icons not showing correctly in the autocompleter popup #TINY-3029
- Fixed an issue where preview wouldn't show anything in Edge under certain circumstances #TINY-3035
- Fixed the height being incorrectly calculated for the autoresize plugin #TINY-2807

<div><a class="anchor" id="version500-beta-1november302018"></a></div>

## 5.0.0-beta-1 - 2018-11-30

### Added
- Added a new `addNestedMenuItem()` UI registry function and changed all nested menu items to use the new registry functions #TINY-2230
- Added title attribute to color swatch colors #TINY-2669
- Added anchorbar component to anchor inline toolbar dialogs to instead of the toolbar #TINY-2040
- Added support for toolbar<n> and toolbar array config options to be squashed into a single toolbar and not create multiple toolbars #TINY-2195
- Added error handling for when forced_root_block config option is set to true #TINY-2261
- Added functionality for the removed_menuitems config option #TINY-2184
- Added the ability to use a string to reference menu items in menu buttons and submenu items #TINY-2253

### Changed
- Changed the name of the "inlite" plugin to "quickbars" #TINY-2831
- Changed the background color icon to highlight background icon #TINY-2258
- Changed Help dialog to be accessible to screen readers #TINY-2687
- Changed the color swatch to save selected custom colors to local storage for use across sessions #TINY-2722
- Changed `WindowManager` API - methods `getParams`, `setParams` and `getWindows`, and the legacy `windows` property, have been removed. `alert` and `confirm` dialogs are no longer tracked in the window list. #TINY-2603

### Fixed
- Fixed an inline mode issue where the save plugin upon saving can cause content loss #TINY-2659
- Fixed an issue in IE 11 where calling selection.getContent() would return an empty string when the editor didn't have focus #TINY-2325

### Removed
- Removed compat3x plugin #TINY-2815

<div><a class="anchor" id="version500-preview-4november122018"></a></div>

## 5.0.0-preview-4 - 2018-11-12

### Added
- Added width and height placeholder text to image and media dialog dimensions input #AP-296
- Added the ability to keyboard navigate through menus, toolbars, sidebar and the status bar sequentially #AP-381
- Added translation capability back to the editor's UI #AP-282
- Added `label` component type for dialogs to group components under a label

### Changed
- Changed the editor resize handle so that it should be disabled when the autoresize plugin is turned on #AP-424
- Changed UI text for microcopy improvements #TINY-2281

### Fixed
- Fixed distraction free plugin #AP-470
- Fixed contents of the input field being selected on focus instead of just recieving an outline highlight #AP-464
- Fixed styling issues with dialogs and menus in IE 11 #AP-456
- Fixed custom style format control not honoring custom formats #AP-393
- Fixed context menu not appearing when clicking an image with a caption #AP-382
- Fixed directionality of UI when using an RTL language #AP-423
- Fixed page responsiveness with multiple inline editors #AP-430
- Fixed empty toolbar groups appearing through invalid configuration of the `toolbar` property #AP-450
- Fixed text not being retained when updating links through the link dialog #AP-293
- Fixed edit image context menu, context toolbar and toolbar items being incorrectly enabled when selecting invalid images #AP-323
- Fixed emoji type ahead being shown when typing URLs #AP-366
- Fixed toolbar configuration properties incorrectly expecting string arrays instead of strings #AP-342
- Fixed the block formatting toolbar item not showing a "Formatting" title when there is no selection #AP-321
- Fixed clicking disabled toolbar buttons hiding the toolbar in inline mode #AP-380
- Fixed `EditorResize` event not being fired upon editor resize #AP-327
- Fixed tables losing styles when updating through the dialog #AP-368
- Fixed context toolbar positioning to be more consistent near the edges of the editor #AP-318
- Fixed table of contents plugin now works with v5 toolbar APIs correctly #AP-347
- Fixed the `link_context_toolbar` configuration not disabling the context toolbar #AP-458
- Fixed the link context toolbar showing incorrect relative links #AP-435
- Fixed the alignment of the icon in alert banner dialog components #TINY-2220
- Fixed the visual blocks and visual char menu options not displaying their toggled state #TINY-2238
- Fixed the editor not displaying as fullscreen when toggled #TINY-2237

### Removed
- Removed the tox-custom-editor class that was added to the wrapping element of codemirror #TINY-2211

<div><a class="anchor" id="version500-preview-3october182018"></a></div>

## 5.0.0-preview-3 - 2018-10-18

### Changed
- Changed editor layout to use modern CSS properties over manually calculating dimensions #AP-324
- Changed `autoresize_min_height` and `autoresize_max_height` configurations to `min_height` and `max_height` #AP-324
- Changed `Whole word` label in Search and Replace dialog to `Find whole words only` #AP-387

### Fixed
- Fixed bugs with editor width jumping when resizing and the iframe not resizing to smaller than 150px in height #AP-324
- Fixed mobile theme bug that prevented the editor from loading #AP-404
- Fixed long toolbar groups extending outside of the editor instead of wrapping
- Fixed dialog titles so they are now proper case #AP-384
- Fixed color picker default to be #000000 instead of #ff00ff #AP-216
- Fixed "match case" option on the Find and Replace dialog is no longer selected by default #AP-298
- Fixed vertical alignment of toolbar icons #DES-134
- Fixed toolbar icons not appearing on IE11 #DES-133

<div><a class="anchor" id="version500-preview-2october102018"></a></div>

## 5.0.0-preview-2 - 2018-10-10

### Added
- Added swatch is now shown for colorinput fields, instead of the colorpicker directly #AP-328
- Added fontformats and fontsizes menu items #AP-390

### Changed
- Changed configuration of color options has been simplified to `color_map`, `color_cols`, and `custom_colors` #AP-328
- Changed `height` configuration to apply to the editor frame (including menubar, toolbar, status bar) instead of the content area #AP-324

### Fixed
- Fixed styleselect not updating the displayed item as the cursor moved #AP-388
- Fixed preview iframe not expanding to the dialog size #AP-252
- Fixed 'meta' shortcuts not translated into platform-specific text #AP-270
- Fixed tabbed dialogs (Charmap and Emoticons) shrinking when no search results returned
- Fixed a bug where alert banner icons were not retrieved from icon pack. #AP-330
- Fixed component styles to flex so they fill large dialogs. #AP-252
- Fixed editor flashing unstyled during load (still in progress). #AP-349

### Removed
- Removed `colorpicker` plugin, it is now in the theme #AP-328
- Removed `textcolor` plugin, it is now in the theme #AP-328

<div><a class="anchor" id="version500-preview-1october12018"></a></div>

## 5.0.0-preview-1 - 2018-10-01

Developer preview 1
