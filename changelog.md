---
layout: default
title: Changelog
description: The history of TinyMCE releases.
keywords: changelog
class: changelog
---

{% capture changelog %}

## Version 4.8.5 October 30, 2018
* Added a content_css_cors setting to the editor that adds the crossorigin="anonymous" attribute to link tags added by the StyleSheetLoader.
* Fixed a bug where trying to remove formatting with a collapsed selection range would throw an exception.
* Fixed a bug in the image plugin that caused updating figures to split contenteditable elements.
* Fixed a bug that was causing incorrect viewport calculations for fixed position UI elements.
* Fixed a bug where inline formatting would cause the delete key to do nothing.

## Version 4.8.4 October 23, 2018
* Added support for the HTML5 `main` element.
* Changed the keyboard shortcut to move focus to contextual toolbars to Ctrl+F9.
* Fixed a bug where content css could not be loaded from another domain.
* Fixed a bug on FireFox where the cursor would get stuck between two contenteditable false inline elements located inside of the same block element divided by a BR.
* Fixed a bug with the insertContent method where nonbreaking spaces would be inserted incorrectly.
* Fixed a bug where the toolbar of the inline editor would not be visible in some scenarios.
* Fixed a bug where removing the editor while more than one notification was open would throw an error.
* Fixed a bug where the menubutton would be rendered on top of the menu if the viewport didn't have enough height.
* Fixed a bug with the annotations api where annotating collapsed selections caused problems.
* Fixed a bug where wbr elements were being transformed into whitespace when using the Paste Plugin's paste as text setting.
* Fixed a bug where the Search and Replace didn't replace spaces correctly.
* Fixed a bug with sublist items not persisting selection.
* Fixed a bug with mceInsertRawHTML command not working as expected.

## Version 4.8.3 September 13, 2018
* Fixed a bug where the Wordcount Plugin didn't correctly count words within tables on IE11.
* Fixed a bug where it wasn't possible to move the caret out of a table on IE11 and Firefox.
* Fixed a bug where merging empty blocks didn't work as expected, sometimes causing content to be deleted.
* Fixed a bug where the Textcolor Plugin didn't show the correct current color.
* Fixed a bug where clear formatting with a collapsed selection would sometimes clear formatting from more content than expected.
* Fixed a bug with the Table Plugin where it wasn't possible to keyboard navigate to the caption.

## Version 4.8.2 August 9, 2018
* Moved annotator from "experimental" to "annotator" object on editor.
* Improved the multiclick normalization across browsers.
* Fixed a bug where running getSelectedBlocks with a collapsed selection between block elements would produce incorrect results.
* Fixed a bug where the ScriptLoaders loadScript method would not work as expected in FireFox when loaded on the same page as a ShadowDOM polyfill.
* Removed reference to ShadowDOM event.path as Blink based browsers now support event.composedPath.
* Fixed a bug where a reference to localStorage would throw an "access denied" error in IE11 with strict security settings.
* Fixed a bug where pasting using the toolbar button on an inline editor in IE11 would cause a looping behaviour.

## Version 4.8.1 July 26, 2018
* Fixed a bug where the content of inline editors was being cleaned on every call of `editor.save()`.
* Fixed a bug where the arrow of the Inlite Theme toolbar was being rendered incorrectly in RTL mode.
* Fixed a bug with the Paste Plugin where pasting after inline contenteditable false elements moved the caret to the end of the line.

## Version 4.8.0 July 11, 2018
* Fixed a bug where deleting paragraphs inside of table cells would delete the whole table cell.
* Fixed a bug in the Table Plugin where removing row height set on the row properties dialog did not update the table.
* Fixed a bug with the font select toolbar item didn't update correctly.
* Fixed a bug where all bogus elements would not be deleted when removing an inline editor.

## Version 4.7.13 May 16, 2018
* Fixed a bug where Edge 17 wouldn't be able to select images or tables.
* Fixed issue where whitespace wasn't preserved when the editor was initialized on pre elements.
* Fixed a bug with the fontselect dropdowns throwing an error if the editor was hidden in Firefox.
* Fixed a bug where it wasn't possible to merge table cells on IE 11.
* Fixed a bug where textcolor wasn't applying properly on IE 11 in some situations.
* Fixed a bug where the justifyfull command state wasn't working correctly.
* Fixed a bug where the styles wasn't updated correctly when resizing some tables.
* Added missing code menu item from the default menu config.
* Added new align button for combining the separate align buttons into a menu button.

## Version 4.7.12 May 3, 2018
* Added an option to filter out image svg data urls.
* Added support for html5 `details` and `summary` elements.
* Changed so the `mce-abs-layout-item` css rule targets `html` instead of `body`. Patch contributed by nazar-pc.
* Fixed a bug where the "read" step on the mobile theme was still present on Android mobile browsers.
* Fixed a bug where all images in the editor document would reload on any editor change.
* Fixed a bug with the [Table Plugin]({{ site.baseurl }}/plugins/table) where ObjectResized event wasn't being triggered on column resize.
* Fixed so the selection is set to the first suitable caret position after `editor.setContent` called.
* Fixed so links with `xlink:href` attributes are filtered correctly to prevent XSS.
* Fixed a bug on IE11 where pasting content into an inline editor initialized on a heading element would create new editable elements.
* Fixed a bug where readonly mode would not work as expected when the editor contained `contentEditable=true` elements.
* Fixed a bug where the[ Link Plugin]({{ site.baseurl }}/plugins/link) would throw an error when used together with the webcomponents polyfill. Patch contributed by 4esnog.
* Fixed a bug where the "Powered by TinyMCE" branding link would break on XHTML pages. Patch contributed by tistre.
* Fixed a bug where the same id would be used in the blobcache for all pasted images. Patch contributed by thorn0.

## Version 4.7.11 April 11, 2018
* Added a new imagetools_credentials_hosts option to the [Imagetools Plugin]({{ site.baseurl }}/plugins/imagetools).
* Fixed a bug where toggling a list containing empty LIs would throw an error. Patch contributed by bradleyke.
* Fixed a bug where applying block styles to a text with the caret at the end of the paragraph would select all text in the paragraph.
* Fixed a bug where toggling on the [Spellchecker Plugin]({{ site.baseurl }}/plugins/spellchecker) would trigger isDirty on the editor.
* Fixed a bug where it was possible to enter content into selection bookmark spans.
* Fixed a bug where if a non paragraph block was configured in forced_root_block the editor.getContent method would return incorrect values with an empty editor.
* Fixed a bug where dropdown menu panels stayed open and fixed in position when dragging dialog windows.
* Fixed a bug where it wasn't possible to extend table cells with the space button in Safari.
* Fixed a bug where the setupeditor event would thrown an error when using the [Compat3x Plugin]({{ site.baseurl }}/plugins/compat3x).
* Fixed a bug where an error was thrown in FontInfo when called on a detached element.

## Version 4.7.10 April 3, 2018
* Removed the "read" step from the mobile theme.
* Added normalization of triple clicks across browsers in the editor.
* Added a `hasFocus` method to the editor that checks if the editor has focus.
* Added correct icon to the [Nonbreaking Plugin]({{ site.baseurl }}/plugins/nonbreaking) menu item.
* Fixed so the `getContent`/`setContent` methods work even if the editor is not initialized.
* Fixed a bug with the [Media Plugin]({{ site.baseurl }}/plugins/media) where query strings were being stripped from youtube links.
* Fixed a bug where image styles were changed/removed when opening and closing the [Image Plugin]({{ site.baseurl }}/plugins/image) dialog.
* Fixed a bug in the [Table Plugin]({{ site.baseurl }}/plugins/table) where some table cell styles were not correctly added to the content html.
* Fixed a bug in the [Spellchecker Plugin]({{ site.baseurl }}/plugins/spellchecker) where it wasn't possible to change the spellchecker language.
* Fixed so the the unlink action in the [Link Plugin]({{ site.baseurl }}/plugins/link) has a menu item and can be added to the contextmenu.
* Fixed a bug where it wasn't possible to keyboard navigate to the start of an inline element on a new line within the same block element.
* Fixed a bug with the [Text Color Plugin]({{ site.baseurl }}/plugins/textcolor) where if used with an inline editor located at the bottom of the screen the colorpicker could appear off screen.
* Fixed a bug with the UndoManager where undo levels were being added for nbzwsp characters.
* Fixed a bug with the [Table Plugin]({{ site.baseurl }}/plugins/table) where the caret would sometimes be lost when keyboard navigating up through a table.
* Fixed a bug where FontInfo.getFontFamily would throw an error when called on a removed editor.
* Fixed a bug in Firefox where undo levels were not being added correctly for some specific operations.
* Fixed a bug where initializing an inline editor inside of a table would make the whole table resizeable.
* Fixed a bug where the fake cursor that appears next to tables on Firefox was positioned incorrectly when switching to fullscreen.
* Fixed a bug where zwsp's weren't trimmed from the output from `editor.getContent({ format: 'text' })`.
* Fixed a bug where the fontsizeselect/fontselect toolbar items showed the body info rather than the first possible caret position info on init.
* Fixed a bug where it wasn't possible to select all content if the editor only contained an inline boundary element.
* Fixed a bug where `content_css` urls with query strings wasn't working.
* Fixed a bug in the [Table Plugin]({{ site.baseurl }}/plugins/table) where some table row styles were removed when changing other styles in the row properties dialog.

## Version 4.7.9 February 27, 2018
* Fixed a bug where the editor target element didn't get the correct style when removing the editor.

## Version 4.7.8 February 26, 2018
* Fixed an issue with the [Help Plugin]({{ site.baseurl }}/plugins/help) where the menuitem name wasn't lowercase.
* Fixed an issue on MacOS where text and bold text did not have the same line-height in the autocomplete dropdown in the [Link Plugin]({{ site.baseurl }}/plugins/link) dialog.
* Fixed a bug where the "paste as text" option in the [Paste Plugin]({{ site.baseurl }}/plugins/paste) didn't work.
* Fixed a bug where dialog list boxes didn't get positioned correctly in documents with scroll.
* Fixed a bug where the [Inlite Theme]({{ site.baseurl }}/themes/inlite) didn't use the [Table Plugin]({{ site.baseurl }}/plugins/table) api to insert correct tables.
* Fixed a bug where the [Inlite Theme]({{ site.baseurl }}/themes/inlite) panel didn't hide on blur in a correct way.
* Fixed a bug where placing the cursor before a table in Firefox would scroll to the bottom of the table.
* Fixed a bug where selecting partial text in table cells with rowspans and deleting would produce faulty tables.
* Fixed a bug where the [Preview Plugin]({{ site.baseurl }}/plugins/preview) didn't work on Safari due to sandbox security.
* Fixed a bug where table cell selection using the keyboard threw an error.
* Fixed so the font size and font family doesn't toggle the text but only sets the selected format on the selected text.
* Fixed so the built-in spellchecking on Chrome and Safari creates an undo level when replacing words.

## Version 4.7.7  February 19, 2018
* Added a border style selector to the advanced tab of the [Image Plugin]({{ site.baseurl }}/plugins/image).
* Added better controls for default table inserted by the [Table Plugin]({{ site.baseurl }}/plugins/table).
* Added new `table_responsive_width` option to the [Table Plugin]({{ site.baseurl }}/plugins/table) that controls whether to use pixel or percentage widths.
* Fixed a bug where the [Link Plugin]({{ site.baseurl }}/plugins/link) text didn't update when a URL was pasted using the context menu.
* Fixed a bug with the [Spellchecker Plugin]({{ site.baseurl }}/plugins/spellchecker) where using "Add to dictionary" in the context menu threw an error.
* Fixed a bug in the [Media Plugin]({{ site.baseurl }}/plugins/media) where the preview node for iframes got default width and height attributes that interfered with width/height styles.
* Fixed a bug where backslashes were being added to some font family names in Firefox in the fontselect toolbar item.
* Fixed a bug where errors would be thrown when trying to remove an editor that had not yet been fully initialized.
* Fixed a bug where the [Imagetools Plugin]({{ site.baseurl }}/plugins/imagetools) didn't update the images atomically.
* Fixed a bug where the [Fullscreen Plugin]({{ site.baseurl }}/plugins/fullscreen) was throwing errors when being used on an inline editor.
* Fixed a bug where drop down menus weren't positioned correctly in inline editors on scroll.
* Fixed a bug with a semicolon missing at the end of the bundled javascript files.
* Fixed a bug in the [Table Plugin]({{ site.baseurl }}/plugins/table) with cursor navigation inside of tables where the cursor would sometimes jump into an incorrect table cells.
* Fixed a bug where indenting a table that is a list item using the "Increase indent" button would create a nested table.
* Fixed a bug where text nodes containing only whitespace were being wrapped by paragraph elements.
* Fixed a bug where whitespace was being inserted after br tags inside of paragraph tags.
* Fixed a bug where converting an indented paragraph to a list item would cause the list item to have extra padding.
* Fixed a bug where Copy/Paste in an editor with a lot of content would cause the editor to scroll to the top of the content in IE11.
* Fixed a bug with a memory leak in the DragHelper. Path contributed by ben-mckernan.
* Fixed a bug where the advanced tab in the [Media Plugin]({{ site.baseurl }}/plugins/media) was being shown even if it didn't contain anything. Patch contributed by gabrieeel.
* Fixed an outdated eventname in the EventUtils. Patch contributed by nazar-pc.
* Fixed an issue where the Json.parse function would throw an error when being used on a page with strict CSP settings.
* Fixed so you can place the curser before and after table elements within the editor in Firefox and Edge/IE.

## Version 4.7.6 January 29, 2018
* Fixed a bug in the jquery integration where it threw an error saying that "global is not defined".
* Fixed a bug where deleting a table cell whose previous sibling was set to contenteditable false would create a corrupted table.
* Fixed a bug where highlighting text in an unfocused editor did not work correctly in IE11/Edge.
* Fixed a bug where the table resize handles were not being repositioned when activating the [Fullscreen Plugin]({{ site.baseurl }}/plugins/fullscreen).
* Fixed a bug where the [Imagetools Plugin]({{ site.baseurl }}/plugins/imagetools) dialog didn't honor editor RTL settings.
* Fixed a bug where block elements weren't being merged correctly if you deleted from after a contenteditable false element to the beginning of another block element.
* Fixed a bug where TinyMCE didn't work with module loaders like webpack.

## Version 4.7.5 January 22, 2018
* Fixed bug with the [Codesample Plugin]({{ site.baseurl }}/plugins/codesample) where it wasn't possible to edit codesamples when the editor was in inline mode.
* Fixed bug where focusing on the status bar broke the keyboard navigation functionality.
* Fixed bug where an error would be thrown on Edge by the [Table Plugin]({{ site.baseurl }}/plugins/table) when pasting using the [Powerpaste Plugin]({{ site.baseurl }}/plugins/powerpaste).
* Fixed bug in the [Table Plugin]({{ site.baseurl }}/plugins/table) where selecting row border style from the dropdown menu in advanced row properties would throw an error.
* Fixed bug with icons being rendered incorrectly on Chrome on Mac OS.
* Fixed bug in the [Textcolor Plugin]({{ site.baseurl }}/plugins/textcolor) where the font color and background color buttons wouldn't trigger an ExecCommand event.
* Fixed bug in the [Link Plugin]({{ site.baseurl }}/plugins/link) where the url field wasn't forced LTR.
* Fixed bug where the [Nonbreaking Plugin]({{ site.baseurl }}/plugins/nonbreaking) incorrectly inserted spaces into tables.
* Fixed bug with the inline theme where the toolbar wasn't repositioned on window resize.

## Version 4.7.4 December 5, 2017
* Fixed bug in the [Nonbreaking Plugin]({{ site.baseurl }}/plugins/nonbreaking) Plugin where the nonbreaking_force_tab setting was being ignored.
* Fixed bug in the [Table Plugin]({{ site.baseurl }}/plugins/table) where changing row height incorrectly converted column widths to pixels.
* Fixed bug in the [Table Plugin]({{ site.baseurl }}/plugins/table) on Edge and IE11 where resizing the last column after resizing the table would cause invalid column heights.
* Fixed bug in the [Table Plugin]({{ site.baseurl }}/plugins/table) where keyboard navigation was not normalized between browsers.
* Fixed bug in the [Table Plugin]({{ site.baseurl }}/plugins/table) where the colorpicker button would show even without defining the colorpicker_callback.
* Fixed bug in the [Table Plugin]({{ site.baseurl }}/plugins/table) where it wasn't possible to set the cell background color.
* Fixed bug where Firefox would throw an error when intialising an editor on an element that is hidden or not yet added to the DOM.
* Fixed bug where Firefox would throw an error when intialising an editor inside of a hidden iframe.

## Version 4.7.3 November 23, 2017
* Added functionality to open the [Codesample Plugin]({{ site.baseurl }}/plugins/codesample) dialog when double clicking on a codesample. Patch contributed by dakuzen.
* Fixed bug where undo/redo didn't work correctly with some formats and caret positions.
* Fixed bug where the color picker didn't show up in [Table Plugin]({{ site.baseurl }}/plugins/table) dialogs.
* Fixed bug where it wasn't possible to change the width of a table through the [Table Plugin]({{ site.baseurl }}/plugins/table) dialog.
* Fixed bug where the [Charmap Plugin]({{ site.baseurl }}/plugins/charmap) couldn't insert some special characters.
* Fixed bug where editing a newly inserted link would not actually edit the link but insert a new link next to it.
* Fixed bug where deleting all content in a table cell made it impossible to place the caret into it.
* Fixed bug where the vertical alignment field in the [Table Plugin]({{ site.baseurl }}/plugins/table) cell properties dialog didn't do anything.
* Fixed bug where an image with a caption showed two sets of resize handles in IE11.
* Fixed bug where pressing the enter button inside of an h1 with contenteditable set to true would sometimes produce a p tag.
* Fixed bug with backspace not working as expected before a noneditable element.
* Fixed bug where operating on tables with invalid rowspans would cause an error to be thrown.
* Fixed so a real base64 representation of the image is available on the blobInfo that the [images_upload_handler]({{ site.baseurl }}/configure/file-image-upload/#images_upload_handler) gets called with.
* Fixed so the image upload tab is available when the [images_upload_handler]({{ site.baseurl }}/configure/file-image-upload/#images_upload_handler) is defined (and not only when the [images_upload_url]({{ site.baseurl }}/configure/file-image-upload/#images_upload_url) is defined).

## Version 4.7.2 November 7, 2017
* Rewrote the [Table Plugin]({{ site.baseurl }}/plugins/table).
* Rewrote/simplified the CSS for [inline boundaries]({{ site.baseurl }}/configure/content-appearance/#inline_boundaries) selection by switching to an attribute selector.
* Added support for attributes with colon in [valid_elements]({{ site.baseurl }}/configure/content-filtering/#valid_elements) and addValidElements.
* Added support for dailymotion short url in the [Media Plugin]({{ site.baseurl }}/plugins/media). Patch contributed by [maat8](https://github.com/maat8).
* Added support for converting to half pt when converting font size from px to pt. Patch contributed by [danny6514](https://github.com/danny6514).
* Added support for location hash to the [Autosave plugin]({{ site.baseurl }}/plugins/autosave) to make it work better with SPAs using hash routing.
* Added support for merging table cells when pasting a table into another table.
* Fixed so the language packs are only loaded once. Patch contributed by [0xor1](https://github.com/0xor1).
* Fixed bug where an error would be thrown on editor initialization if the window.getSelection() returned null.
* Fixed bug where holding down control or alt keys made the keyboard navigation inside an inline boundary not work as expected.
* Fixed bug where applying formats in IE11 produced extra, empty paragraphs in the editor.
* Fixed bug where the [Word Count Plugin]({{ site.baseurl }}/plugins/wordcount) didn't count some mathematical operators correctly.
* Fixed bug where removing an inline editor removed the element that the editor had been initialized on.
* Fixed bug where setting the selection to the end of an editable container caused some formatting problems.
* Fixed bug where an error would be thrown sometimes when an editor was removed because of the selection bookmark was being stored asynchronously.
* Fixed a bug where an editor initialized on an empty list did not contain any valid cursor positions.
* Fixed a bug with the [Context Menu Plugin]({{ site.baseurl }}/plugins/contextmenu) and webkit browsers on Mac where right-clicking inside a table would produce an incorrect selection.
* Fixed bug where the [Image Plugin]({{ site.baseurl }}/plugins/image) constrain proportions setting wasn't working as expected.
* Fixed bug where deleting the last character in a span with decorations produced an incorrect element when typing.
* Fixed bug where focusing on inline editors made the toolbar flicker when moving between elements quickly.
* Fixed bug where the selection would be stored incorrectly in inline editors when the mouseup event was fired outside the editor body.
* Fixed bug where toggling bold at the end of an inline boundary would toggle off the whole word.
* Fixed bug where setting the skin to false would not stop the loading of some skin css files.
* Fixed bug in mobile theme where pinch-to-zoom would break after exiting the editor.
* Fixed bug where sublists of a fully selected list would not be switched correctly when changing list style.
* Fixed bug where inserting media by source would break the UndoManager.
* Fixed bug where inserting some content into the editor with a specific selection would replace some content incorrectly.
* Fixed bug where selecting all content with ctrl+a in IE11 caused problems with untoggling some formatting.
* Fixed bug where the [Search and Replace Plugin]({{ site.baseurl }}/plugins/searchreplace) left some marker spans in the editor when undoing and redoing after replacing some content.
* Fixed bug where the editor would not get a scrollbar when using the [Fullscreen]({{ site.baseurl }}/plugins/fullscreen) and [Autoresize]({{ site.baseurl }}/plugins/autoresize) plugins together.
* Fixed bug where the font selector would stop working correctly after selecting fonts three times.
* Fixed so pressing the enter key inside of an inline boundary inserts a br after the inline boundary element.
* Fixed a bug where it wasn't possible to use tab navigation inside of a table that was inside of a list.
* Fixed bug where end_container_on_empty_block would incorrectly remove elements.
* Fixed bug where content_styles weren't added to the [Preview Plugin]({{ site.baseurl }}/plugins/preview) iframe.
* Fixed so the beforeSetContent/beforeGetContent events are preventable.
* Fixed bug where changing height value in [Table Plugin]({{ site.baseurl }}/plugins/table) advanced tab didn't do anything.
* Fixed bug where it wasn't possible to remove formatting from content in beginning of table cell.

## Version 4.7.1 October 9, 2017
* Fixed bug where theme set to false on an inline editor produced an extra div element after the target element.
* Fixed bug where the editor drag icon was misaligned with the branding set to false.
* Fixed bug where doubled menu items were not being removed as expected with the removed_menuitems setting.
* Fixed bug where the [Table of Contents plugin]({{ site.baseurl }}/plugins/toc/) threw an error when initialized.
* Fixed bug where it wasn't possible to add inline formats to text selected right to left.
* Fixed bug where the paste from plain text mode did not work as expected.
* Fixed so the style previews do not set color and background color when selected.
* Fixed bug where the [Autolink plugin]({{ site.baseurl }}/plugins/autolink/) didn't work as expected with some formats applied on an empty editor.
* Fixed bug where the [Textpattern plugin]({{ site.baseurl }}/plugins/textpattern/) were throwing errors on some patterns.
* Fixed bug where the Save plugin saved all editors instead of only the active editor. Patch contributed by dannoe.

## Version 4.7.0 October 3, 2017
* Added new mobile UI that is specifically designed for mobile devices. See the [mobile docs]({{ site.baseurl }}/mobile/).
* Added an updated the default skin to be more modern. It's now more white (since white is preferred by most implementations).
* Added an updated default menu structure to be more similar to common office suites like Google Docs. To customize the menu, see the [menu]({{ site.baseurl }}/configure/editor-appearance/#menu) and [menubar]({{ site.baseurl }}/configure/editor-appearance/#menubar) config docs.
* Fixed so theme can be set to false on both inline and iframe editor modes.
* Fixed bug where inline editor would add/remove the [visualblocks]({{ site.baseurl }}/plugins/visualblocks/) css multiple times.
* Fixed bug where selection wouldn't be properly restored when editor lost focus and commands were invoked.
* Fixed bug where the [Table of Contents plugin]({{ site.baseurl }}/plugins/toc/) would generate `id:s` for headers even though a `toc` wasn't inserted into the content.
* Fixed bug where is wasn't possible to drag/drop contents within the editor if [paste_data_images]({{ site.baseurl }}/plugins/paste/#paste_data_images) was set to true.
* Fixed bug where **getParam** and close in **WindowManager** would get the first opened window instead of the last opened window.
* Fixed table bug where `delete` would delete between cells inside a table in Firefox.

## Version 4.6.7 September 18, 2017
* Fixed bug where paste wasn't working in IOS.
* Fixed bug where the [Word Count plugin]({{ site.baseurl }}/plugins/wordcount/) didn't count some mathematical operators correctly.
* Fixed bug where inserting a list in a table caused the cell to expand in height.
* Fixed bug where pressing enter in a list located inside of a table deleted list items instead of inserting new list item.
* Fixed bug where copy and pasting table cells produced inconsistent results.
* Fixed bug where initializing an editor with an ID of 'length' would throw an exception.
* Fixed bug where it was possible to split a non merged table cell.
* Fixed bug where copy and pasting a list with a very specific selection into another list would produce a nested list.
* Fixed bug where copy and pasting ordered lists sometimes produced unordered lists.
* Fixed bug where padded elements inside other elements would be treated as empty.
* Added some missing translations to [Image]({{ site.baseurl }}/plugins/image/), [Link]({{ site.baseurl }}/plugins/link/) and [Help]({{ site.baseurl }}/plugins/help/) plugins.
* Fixed so you can resize images inside a figure element.
* Fixed bug where an inline TinyMCE editor initialized on a table did not set selection on load in Chrome.
* Fixed the positioning of the inlite toolbar when the target element wasn't big enough to fit the toolbar.

## Version 4.6.6 August 30, 2017
* Fixed so that notifications wrap long text content instead of bleeding outside the notification element.
* Fixed so the [content_style]({{ site.baseurl }}/configure/content-appearance/#content_style) css is added after the skin and custom stylesheets.
* Fixed bug where it wasn't possible to remove a table with the cut button.
* Fixed bug where the center format wasn't getting the same font size as the other formats in the format preview.
* Fixed bug where the [Word Count plugin]({{ site.baseurl }}/plugins/wordcount/) wasn't counting hyphenated words correctly.
* Fixed bug where all content pasted into the editor was added to the end of the editor.
* Fixed bug where enter keydown on list item selection only deleted content and didn't create a new line.
* Fixed bug where destroying the editor while the content css was still loading caused error notifications on Firefox.
* Fixed bug where undoing cut operation in IE11 left some unwanted html in the editor content.
* Fixed bug where enter keydown would throw an error in IE11.
* Fixed bug where duplicate instances of an editor were added to the editors array when using the createEditor API.
* Fixed bug where the formatter applied formats on the wrong content when spellchecker was activated.
* Fixed bug where switching formats would reset font size on child nodes.
* Fixed bug where the table caption element weren't always the first descendant to the table tag.
* Fixed bug where pasting some content into the editor on chrome some newlines were removed.
* Fixed bug where it wasn't possible to remove a list if a list item was a table element.
* Fixed bug where copy/pasting partial selections of tables wouldn't produce a proper table.
* Fixed bug where the [Search And Replace plugin]({{ site.baseurl }}/plugins/searchreplace/) plugin could not find consecutive spaces.
* Fixed bug where background color wasn't applied correctly on some partially selected contents.

## Version 4.6.5 August 2, 2017
* Added new [inline_boundaries_selector]({{ site.baseurl }}/configure/content-appearance/#inline_boundaries_selector) that allows you to specify the elements that should have boundaries.
* Added new local upload feature, which allows the user to upload images directly from the image dialog.
* Added a new API for providing meta data for plugins. It will show up in the [Help dialog]({{ site.baseurl }}/plugins/help/) if it's provided.
* Fixed so that the notifications created by the notification manager are more screen reader accessible.
* Fixed bug where changing the list format on multiple selected lists didn't change all of the lists.
* Fixed bug where the nonbreaking plugin would insert multiple undo levels when pressing the tab key.
* Fixed bug where delete/backspace wouldn't render a caret when all editor contents where deleted.
* Fixed bug where delete/backspace wouldn't render a caret if the deleted element was a single contentEditable false element.
* Fixed bug where the [Word Count plugin]({{ site.baseurl }}/plugins/wordcount/) wouldn't count words correctly if word where typed after applying a style format.
* Fixed bug where the [Word Count plugin]({{ site.baseurl }}/plugins/wordcount/) would count mathematical formulas as multiple words for example 1+1=2.
* Fixed bug where formatting of triple clicked blocks on Chrome/Safari would result in styles being added outside the visual selection.
* Fixed bug where paste would add the contents to the end of the editor area when inline mode was used.
* Fixed bug where toggling off bold formatting on text entered in a new paragraph would add an extra line break.
* Fixed bug where [Autolink plugin]({{ site.baseurl }}/plugins/autolink/) would only produce a link on every other consecutive link on Firefox.
* Fixed bug where it wasn't possible to select all contents if the content only had one `pre` element.
* Fixed bug where sizzle would produce lagging behavior on some sites due to repaints caused by feature detection.
* Fixed bug where toggling off inline formats wouldn't include the space on selected contents with leading or trailing spaces.
* Fixed bug where the cut operation in UI wouldn't work in Chrome.
* Fixed bug where some legacy editor initialization logic would throw exceptions about editor settings not being defined.
* Fixed bug where it wasn't possible to apply text color to links if they where part of a non collapsed selection.
* Fixed bug where an exception would be thrown if the user selected a video element and then moved the focus outside the editor.
* Fixed bug where list operations didn't work if there where block elements inside the list items.
* Fixed bug where applying block formats to lists wrapped in block elements would apply to all elements in that wrapped block.

## Version 4.6.4 June 13, 2017
* Fixed bug where the editor would move the caret when clicking on the scrollbar next to a content editable false block.
* Fixed bug where the text color select dropdowns wasn't placed correctly when they didn't fit the width of the screen.
* Fixed bug where the default editor line height wasn't working for mixed font size contents.
* Fixed bug where the content css files for inline editors were loaded multiple times for multiple editor instances.
* Fixed bug where the initial value of the font size/font family dropdowns wasn't displayed.
* Fixed bug where the I18n api was not supporting arrays as the translation replacement values.
* Fixed bug where chrome would display "The given range isn't in document." errors for invalid ranges passed to setRng.
* Fixed bug where the compat3x plugin wasn't working since the global tinymce references wasn't resolved correctly.
* Fixed bug where the preview plugin wasn't encoding the base url passed into the iframe contents producing a xss bug.
* Fixed bug where the dom parser/serializer wasn't handling some special elements like noframes, title and xmp.
* Fixed bug where the dom parser/serializer wasn't handling cdata sections with comments inside.
* Fixed bug where the editor would scroll to the top of the editable area if a dialog was closed in inline mode.
* Fixed bug where the link dialog would not display the right rel value if rel_list was configured.
* Fixed bug where the context menu would select images on some platforms but not others.
* Fixed bug where the filenames of images were not retained on dragged and drop into the editor from the desktop.
* Fixed bug where the paste plugin would misrepresent newlines when pasting plain text and having forced_root_block configured.
* Fixed so that the error messages for the imagetools plugin is more human readable.
* Fixed so the internal validate setting for the parser/serializer can't be set from editor initialization settings.

## Version 4.6.3 - May 30, 2017
* Fixed bug where the arrow keys didn't work correctly when navigating on nested inline boundary elements.
* Fixed bug where delete/backspace didn't work correctly on nested inline boundary elements.
* Fixed bug where image editing didn't work on subsequent edits of the same image.
* Fixed bug where charmap descriptions wouldn't properly wrap if they exceeded the width of the box.
* Fixed bug where the default image upload handler only accepted 200 as a valid http status code.
* Fixed so rel on target=_blank links gets forced with only noopener instead of both noopener and noreferrer.

## Version 4.6.2 - May 23, 2017
* Fixed bug where the SaxParser would run out of memory on very large documents.
* Fixed bug with formatting like font size wasn't applied to del elements.
* Fixed bug where various api calls would be throwing exceptions if they where invoked on a removed editor instance.
* Fixed bug where the branding position would be incorrect if the editor was inside a hidden tab and then later showed.
* Fixed bug where the color levels feature in the imagetools dialog wasn't working properly.
* Fixed bug where imagetools dialog wouldn't pre-load images from CORS domains, before trying to prepare them for editing.
* Fixed bug where the tab key would move the caret to the next table cell if being pressed inside a list inside a table.
* Fixed bug where the cut/copy operations would loose parent context like the current format etc.
* Fixed bug with format preview not working on invalid elements excluded by valid_elements.
* Fixed bug where blocks would be merged in incorrect order on backspace/delete.
* Fixed bug where zero length text nodes would cause issues with the undo logic if there where iframes present.
* Fixed bug where the font size/family select lists would throw errors if the first node was a comment.
* Fixed bug with csp having to allow local script evaluation since it was used to detect global scope.
* Fixed bug where CSP required a relaxed option for javascript: URLs in unsupported legacy browsers.
* Fixed bug where a fake caret would be rendered for td with the contenteditable=false.
* Fixed bug where typing would be blocked on IE 11 when within a nested contenteditable=true/false structure.

## Version 4.6.1 - May 10, 2017
* Added configuration option to list plugin to disable tab indentation.
* Fixed bug where format change on very specific content could cause the selection to change.
* Fixed bug where TinyMCE could not be lazyloaded through jquery integration.
* Fixed bug where entities in style attributes weren't decoded correctly on paste in webkit.
* Fixed bug where fontsize_formats option had been renamed incorrectly.
* Fixed bug with broken backspace/delete behaviour between contenteditable=false blocks.
* Fixed bug where it wasn't possible to backspace to the previous line with the inline boundaries functionality turned on.
* Fixed bug where is wasn't possible to move caret left and right around a linked image with the inline boundaries functionality turned on.
* Fixed bug where pressing enter after/before hr element threw exception. Patch contributed bradleyke.
* Fixed so the CSS in the visualblocks plugin doesn't overwrite background color. Patch contributed by Christian Rank.
* Fixed bug where multibyte characters weren't encoded correctly. Patch contributed by James Tarkenton.
* Fixed bug where shift-click to select within contenteditable=true fields wasn't working.

## Version 4.6.0 - May 4, 2017
* Dropped support for IE 8-10 due to market share and lack of support from Microsoft. See tinymce docs for details.
* Added an inline boundary caret position feature that makes it easier to type at the beginning/end of links/code elements.
* Added a help plugin that adds a button and a dialog showing the editor shortcuts and loaded plugins.
* Added an inline_boundaries option that allows you to disable the inline boundary feature if it's not desired.
* Added a new ScrollIntoView event that allows you to override the default scroll to element behavior.
* Added role and aria- attributes as valid elements in the default valid elements config.
* Added new internal flag for PastePreProcess/PastePostProcess this is useful to know if the paste was coming from an external source.
* Added new ignore function to UndoManager this works similar to transact except that it doesn't add an undo level by default.
* Fixed so that urls gets retained for images when being edited. This url is then passed on to the upload handler.
* Fixed so that the editors would be initialized on readyState interactive instead of complete.
* Fixed so that the init event of the editor gets fired once all contentCSS files have been properly loaded.
* Fixed so that width/height of the editor gets taken from the textarea element if it's explicitly specified in styles.
* Fixed so that keep_styles set to false no longer clones class/style from the previous paragraph on enter.
* Fixed so that the default line-height is 1.2em to avoid zwnbsp characters from producing text rendering glitches on Windows.
* Fixed so that loading errors of content css gets presented by a notification message.
* Fixed so figure image elements can be linked when selected this wraps the figure image in a anchor element.
* Fixed bug where it wasn't possible to copy/paste rows with colspans by using the table copy/paste feature.
* Fixed bug where the protect setting wasn't properly applied to header/footer parts when using the fullpage plugin.
* Fixed bug where custom formats that specified upper case element names where not applied correctly.
* Fixed bug where some screen readers weren't reading buttons due to an aria specific fix for IE 8.
* Fixed bug where cut wasn't working correctly on iOS due to it's clipboard API not working correctly.
* Fixed bug where Edge would paste div elements instead of paragraphs when pasting plain text.
* Fixed bug where the textpattern plugin wasn't dealing with trailing punctuations correctly.
* Fixed bug where image editing would some times change the image format from jpg to png.
* Fixed bug where some UI elements could be inserted into the toolbar even if they where not registered.
* Fixed bug where it was possible to click the TD instead of the character in the character map and that caused an exception.
* Fixed bug where the font size/font family dropdowns would sometimes show an incorrect value due to css not being loaded in time.
* Fixed bug with the media plugin inserting undefined instead of retaining size when media_dimensions was set to false.
* Fixed bug with deleting images when forced_root_blocks where set to false.
* Fixed bug where input focus wasn't properly handled on nested content editable elements.
* Fixed bug where Chrome/Firefox would throw an exception when selecting images due to recent change of setBaseAndExtent support.
* Fixed bug where malformed blobs would throw exceptions now they are simply ignored.
* Fixed bug where backspace/delete wouldn't work properly in some cases where all contents was selected in WebKit.
* Fixed bug with Angular producing errors since it was expecting events objects to be patched with their custom properties.
* Fixed bug where the formatter would apply formatting to spellchecker errors now all bogus elements are excluded.
* Fixed bug with backspace/delete inside table caption elements wouldn't behave properly on IE 11.
* Fixed bug where typing after a contenteditable false inline element could move the caret to the end of that element.
* Fixed bug where backspace before/after contenteditable false blocks wouldn't properly remove the right element.
* Fixed bug where backspace before/after contenteditable false inline elements wouldn't properly empty the current block element.
* Fixed bug where vertical caret navigation with a custom line-height would sometimes match incorrect positions.
* Fixed bug with paste on Edge where character encoding wasn't handled properly due to a browser bug.
* Fixed bug with paste on Edge where extra fragment data was inserted into the contents when pasting.
* Fixed bug with pasting contents when having a whole block element selected on WebKit could cause WebKit spans to appear.
* Fixed bug where the visualchars plugin wasn't working correctly showing invisible nbsp characters.
* Fixed bug where browsers would hang if you tried to load some malformed html contents.
* Fixed bug where the init call promise wouldn't resolve if the specified selector didn't find any matching elements.
* Fixed bug where the Schema isValidChild function was case sensitive.

## Version 4.5.9 - August 2, 2018
* Fixed a bug where Edge 17 wouldn't be able to select images or tables.

## Version 4.5.8 - November 5, 2017
* Fixed bug where paste on Edge wouldn't paste UTF characters since Microsoft didn't implement the html5 clipboard api correctly.
* Fixed bug where it was hard to focus the editor on IE 10 since the body element didn't have full height.
* Fixed bug where malformed blob urls wouldn't be handled correctly by the editor.

## Version 4.5.7 - April 25, 2017
* Fixed bug with selection around inline contenteditable false would get collapsed incorrectly.
* Fixed bug where pasting on Microsoft Edge 40+ would produce clipboard fragment headers.

## Version 4.5.6 - March 30, 2017
* Fixed bug where it wasn't possible to select floated images in some cases.

## Version 4.5.5 - March 7, 2017
* Fixed bug where fontsize could not be changed after changing the text color.

## Version 4.5.4 - February 23, 2017
* Fixed bug where setBaseAndExtend would throw exceptions on Chrome 58 when selecting images.
* Fixed bug where deleting partially selected contents could remove all contents in some edge cases on WebKit.

## Version 4.5.3 - February 1, 2017
* Added keyboard navigation for menu buttons when the menu is in focus.
* Added api to the list plugin for setting custom classes/attributes on lists.
* Added validation for the anchor plugin input field according to W3C id naming specifications.
* Fixed bug where media placeholders were removed after resize with the forced_root_block setting set to false.
* Fixed bug where deleting selections with similar sibling nodes sometimes deleted the whole document.
* Fixed bug with inlite theme where several toolbars would appear scrolling when more than one instance of the editor was in use.
* Fixed bug where the editor would throw error with the fontselect plugin on hidden editor instances in Firefox.
* Fixed bug where the background color would not stretch to the font size.
* Fixed bug where font size would be removed when changing background color.
* Fixed bug where the undomanager trimmed away whitespace between nodes on undo/redo.
* Fixed bug where media_dimensions=false in media plugin caused the editor to throw an error.
* Fixed bug where IE was producing font/u elements within links on paste.
* Fixed bug where some button tooltips were broken when compat3x was in use.
* Fixed bug where backspace/delete/typeover would remove the caption element.
* Fixed bug where powerspell failed to function when compat3x was enabled.
* Fixed bug where it wasn't possible to apply sub/sup on text with large font size.
* Fixed bug where pre tags with spaces weren't treated as content.
* Fixed bug where Meta+A would select the entire document instead of all contents in nested ce=true elements.

## Version 4.5.2 - January 4, 2017
* Added missing keyboard shortcut description for the underline menu item in the format menu.
* Fixed bug where external blob urls wasn't properly handled by editor upload logic. Patch contributed by David Oviedo.
* Fixed bug where urls wasn't treated as a single word by the wordcount plugin.
* Fixed bug where nbsp characters wasn't treated as word delimiters by the wordcount plugin.
* Fixed bug where editor instance wasn't properly passed to the format preview logic. Patch contributed by NullQuery.
* Fixed bug where the fake caret wasn't hidden when you moved selection to a cE=false element.
* Fixed bug where it wasn't possible to edit existing code sample blocks.
* Fixed bug where it wasn't possible to delete editor contents if the selection included an empty block.
* Fixed bug where the formatter wasn't expanding words on some international characters. Patch contributed by Martin Larochelle.
* Fixed bug where the open link feature wasn't working correctly on IE 11.
* Fixed bug where enter before/after a cE=false block wouldn't properly padd the paragraph with an br element.
* Fixed so font size and font family select boxes always displays a value by using the runtime style as a fallback.
* Fixed so missing plugins will be logged to console as warnings rather than halting the initialization of the editor.
* Fixed so splitbuttons become normal buttons in advlist plugin if styles are empty. Patch contributed by René Schleusner.
* Fixed so you can multi insert rows/cols by selecting table cells and using insert rows/columns.

## Version 4.5.1 - December 7, 2016
* Fixed bug where the lists plugin wouldn't initialize without the advlist plugins if served from cdn.
* Fixed bug where selectors with "*" would cause the style format preview to throw an error.
* Fixed bug with toggling lists off on lists with empty list items would throw an error.
* Fixed bug where editing images would produce non existing blob uris.
* Fixed bug where the offscreen toc selection would be treated as the real toc element.
* Fixed bug where the aria level attribute for element path would have an incorrect start index.
* Fixed bug where the offscreen selection of cE=false that where very wide would be shown onscreen. Patch contributed by Steven Bufton.
* Fixed so the default_link_target gets applied to links created by the autolink plugin.
* Fixed so that the name attribute gets removed by the anchor plugin if editing anchors.

## Version 4.5.0 - November 23, 2016
* Added new toc plugin allows you to insert table of contents based on editor headings.
* Added new auto complete menu to all url fields. Adds history, link to anchors etc.
* Added new sidebar api that allows you to add custom sidebar panels and buttons to toggle these.
* Added new insert menu button that allows you to have multiple insert functions under the same menu button.
* Added new open link feature to ctrl+click, alt+enter and context menu.
* Added new media_embed_handler option to allow the media plugin to be populated with custom embeds.
* Added new support for editing transparent images using the image tools dialog.
* Added new images_reuse_filename option to allow filenames of images to be retained for upload.
* Added new security feature where links with target="_blank" will by default get rel="noopener noreferrer".
* Added new allow_unsafe_link_target to allow you to opt-out of the target="_blank" security feature.
* Added new style_formats_autohide option to automatically hide styles based on context.
* Added new codesample_content_css option to specify where the code sample prism css is loaded from.
* Added new support for Japanese/Chinese word count following the unicode standards on this.
* Added new fragmented undo levels this dramatically reduces flicker on contents with iframes.
* Added new live previews for complex elements like table or lists.
* Fixed bug where it wasn't possible to properly tab between controls in a dialog with a disabled form item control.
* Fixed bug where firefox would generate a rectangle on elements produced after/before a cE=false elements.
* Fixed bug with advlist plugin not switching list element format properly in some edge cases.
* Fixed bug where col/rowspans wasn't correctly computed by the table plugin in some cases.
* Fixed bug where the table plugin would thrown an error if object_resizing was disabled.
* Fixed bug where some invalid markup would cause issues when running in XHTML mode. Patch contributed by Charles Bourasseau.
* Fixed bug where the fullscreen class wouldn't be removed properly when closing dialogs.
* Fixed bug where the PastePlainTextToggle event wasn't fired by the paste plugin when the state changed.
* Fixed bug where table the row type wasn't properly updated in table row dialog. Patch contributed by Matthias Balmer.
* Fixed bug where select all and cut wouldn't place caret focus back to the editor in WebKit. Patch contributed by Daniel Jalkut.
* Fixed bug where applying cell/row properties to multiple cells/rows would reset other unchanged properties.
* Fixed bug where some elements in the schema would have redundant/incorrect children.
* Fixed bug where selector and target options would cause issues if used together.
* Fixed bug where drag/drop of images from desktop on chrome would thrown an error.
* Fixed bug where cut on WebKit/Blink wouldn't add an undo level.
* Fixed bug where IE 11 would scroll to the cE=false elements when they where selected.
* Fixed bug where keys like F5 wouldn't work when a cE=false element was selected.
* Fixed bug where the undo manager wouldn't stop the typing state when commands where executed.
* Fixed bug where unlink on wrapped links wouldn't work properly.
* Fixed bug with drag/drop of images on WebKit where the image would be deleted form the source editor.
* Fixed bug where the visual characters mode would be disabled when contents was extracted from the editor.
* Fixed bug where some browsers would toggle of formats applied to the caret when clicking in the editor toolbar.
* Fixed bug where the custom theme function wasn't working correctly.
* Fixed bug where image option for custom buttons required you to have icon specified as well.
* Fixed bug where the context menu and contextual toolbars would be visible at the same time and sometimes overlapping.
* Fixed bug where the noneditable plugin would double wrap elements when using the noneditable_regexp option.
* Fixed bug where tables would get padding instead of margin when you used the indent button.
* Fixed bug where the charmap plugin wouldn't properly insert non breaking spaces.
* Fixed bug where the color previews in color input boxes wasn't properly updated.
* Fixed bug where the list items of previous lists wasn't merged in the right order.
* Fixed bug where it wasn't possible to drag/drop inline-block cE=false elements on IE 11.
* Fixed bug where some table cell merges would produce incorrect rowspan/colspan.
* Fixed so the font size of the editor defaults to 14px instead of 11px this can be overridden by custom css.
* Fixed so wordcount is debounced to reduce cpu hogging on larger texts.
* Fixed so tinymce global gets properly exported as a module when used with some module bundlers.
* Fixed so it's possible to specify what css properties you want to preview on specific formats.
* Fixed so anchors are contentEditable=false while within the editor.
* Fixed so selected contents gets wrapped in a inline code element by the codesample plugin.
* Fixed so conditional comments gets properly stripped independent of case. Patch contributed by Georgii Dolzhykov.
* Fixed so some escaped css sequences gets properly handled. Patch contributed by Georgii Dolzhykov.
* Fixed so notifications with the same message doesn't get displayed at the same time.
* Fixed so F10 can be used as an alternative key to focus to the toolbar.
* Fixed various api documentation issues and typos.
* Removed layer plugin since it wasn't really ported from 3.x and there doesn't seem to be much use for it.
* Removed moxieplayer.swf from the media plugin since it wasn't used by the media plugin.
* Removed format state from the advlist plugin to be more consistent with common word processors.  

## Version 4.4.3 - September 1, 2016
* Fixed bug where copy would produce an exception on Chrome.
* Fixed bug where deleting lists on IE 11 would merge in correct text nodes.
* Fixed bug where deleting partial lists with indentation wouldn't cause proper normalization.

## Version 4.4.2 - August 25, 2016
* Added new importcss_exclusive option to disable unique selectors per group.
* Added new group specific selector_converter option to importcss plugin.
* Added new codesample_languages option to apply custom languages to codesample plugin.
* Added new codesample_dialog_width/codesample_dialog_height options.
* Fixed bug where fullscreen button had an incorrect keyboard shortcut.
* Fixed bug where backspace/delete wouldn't work correctly from a block to a cE=false element.
* Fixed bug where smartpaste wasn't detecting links with special characters in them like tilde.
* Fixed bug where the editor wouldn't get proper focus if you clicked on a cE=false element.
* Fixed bug where it wasn't possible to copy/paste table rows that had merged cells.
* Fixed bug where merging cells could some times produce invalid col/rowspan attibute values.
* Fixed bug where getBody would sometimes thrown an exception now it just returns null if the iframe is clobbered.
* Fixed bug where drag/drop of cE=false element wasn't properly constrained to viewport.
* Fixed bug where contextmenu on Mac would collapse any selection to a caret.
* Fixed bug where rtl mode wasn't rendered properly when loading a language pack with the rtl flag.
* Fixed bug where Kamer word bounderies would be stripped from contents.
* Fixed bug where lists would sometimes render two dots or numbers on the same line.
* Fixed bug where the skin_url wasn't used by the inlite theme.
* Fixed so data attributes are ignored when comparing formats in the formatter.
* Fixed so it's possible to disable inline toolbars in the inlite theme.
* Fixed so template dialog gets resized if it doesn't fit the window viewport.

## Version 4.4.1 - July 26, 2016
* Added smart_paste option to paste plugin to allow disabling the paste behavior if needed.
* Fixed bug where png urls wasn't properly detected by the smart paste logic.
* Fixed bug where the element path wasn't working properly when multiple editor instances where used.
* Fixed bug with creating lists out of multiple paragraphs would just create one list item instead of multiple.
* Fixed bug where scroll position wasn't properly handled by the inlite theme to place the toolbar properly.
* Fixed bug where multiple instances of the editor using the inlite theme didn't render the toolbar properly.
* Fixed bug where the shortcut label for fullscreen mode didn't match the actual shortcut key.
* Fixed bug where it wasn't possible to select cE=false blocks using touch devices on for example iOS.
* Fixed bug where it was possible to select the child image within a cE=false on IE 11.
* Fixed so inserts of html containing lists doesn't merge with any existing lists unless it's a paste operation.

## Version 4.4.0 - June 30, 2016
* Added new inlite theme this is a more lightweight inline UI.
* Added smarter paste logic that auto detects urls in the clipboard and inserts images/links based on that.
* Added a better image resize algorithm for better image quality in the imagetools plugin.
* Fixed bug where it wasn't possible to drag/dropping cE=false elements on FF.
* Fixed bug where backspace/delete before/after a cE=false block would produce a new paragraph.
* Fixed bug where list style type css property wasn't preserved when indenting lists.
* Fixed bug where merging of lists where done even if the list style type was different.
* Fixed bug where the image_dataimg_filter function wasn't used when pasting images.
* Fixed bug where nested editable within a non editable element would cause scroll on focus in Chrome.
* Fixed so invalid targets for inline mode is blocked on initialization. We only support elements that can have children.

## Version 4.3.13 - June 8, 2016
* Added characters with a diacritical mark to charmap plugin. Patch contributed by Dominik Schilling.
* Added better error handling if the image proxy service would produce errors.
* Fixed issue with pasting list items into list items would produce nested list rather than a merged list.
* Fixed bug where table selection could get stuck in selection mode for inline editors.
* Fixed bug where it was possible to place the caret inside the resize grid elements.
* Fixed bug where it wasn't possible to place in elements horizontally adjacent cE=false blocks.
* Fixed bug where multiple notifications wouldn't be properly placed on screen.
* Fixed bug where multiple editor instance of the same id could be produces in some specific integrations.

## Version 4.3.12 - May 10, 2016
* Fixed bug where focus calls couldn't be made inside the editors PostRender event handler.
* Fixed bug where some translations wouldn't work as expected due to a bug in editor.translate.
* Fixed bug where the node change event could fire with a node out side the root of the editor.
* Fixed bug where Chrome wouldn't properly present the keyboard paste clipboard details when paste was clicked.
* Fixed bug where merged cells in tables couldn't be selected from right to left.
* Fixed bug where insert row wouldn't properly update a merged cells rowspan property.
* Fixed bug where the color input boxes preview field wasn't properly set on initialization.
* Fixed bug where IME composition inside table cells wouldn't work as expected on IE 11.
* Fixed so all shadow dom support is under and experimental flag due to flaky browser support.

## Version 4.3.11 - April 25, 2016
* Fixed bug where it wasn't possible to insert empty blocks though the API unless they where padded.
* Fixed bug where you couldn't type the Euro character on Windows.
* Fixed bug where backspace/delete from a cE=false element to a text block didn't work properly.
* Fixed bug where the text color default grid would render incorrectly.
* Fixed bug where the codesample plugin wouldn't load the css in the editor for multiple editors.
* Fixed so the codesample plugin textarea gets focused by default.

## Version 4.3.10 - April 12, 2016
* Fixed bug where the key "y" on WebKit couldn't be entered due to conflict with keycode for F10 on keypress.

## Version 4.3.9 - April 12, 2016
* Added support for focusing the contextual toolbars using keyboard.
* Added keyboard support for slider UI controls. You can no increase/decrease using arrow keys.
* Added url pattern matching for Dailymotion to media plugin. Patch contributed by Bertrand Darbon.
* Added body_class to template plugin preview. Patch contributed by Milen Petrinski.
* Added options to better override textcolor pickers with custom colors. Patch contributed by Xavier Boubert.
* Added visual arrows to inline contextual toolbars so that they point to the element being active.
* Fixed so toolbars for tables or other larger elements get better positioned below the scrollable viewport.
* Fixed bug where it was possible to click links inside cE=false blocks.
* Fixed bug where event targets wasn't properly handled in Safari Technical Preview.
* Fixed bug where drag/drop text in FF 45 would make the editor caret invisible.
* Fixed bug where the remove state wasn't properly set on editor instances when detected as clobbered.
* Fixed bug where offscreen selection of some cE=false elements would render onscreen. Patch contributed by Steven Bufton
* Fixed bug where enter would clone styles out side the root on editors inside a span. Patch contributed by ChristophKaser.
* Fixed bug where drag/drop of images into the editor didn't work correctly in FF.
* Fixed so the first item in panels for the imagetools dialog gets proper keyboard focus.
* Changed the Meta+Shift+F shortcut to Ctrl+Shift+F since Czech, Slovak, Polish languages used the first one for input.

## Version 4.3.8 - March 15, 2016
* Fixed bug where inserting HR at the end of a block element would produce an extra empty block.
* Fixed bug where links would be clickable when readonly mode was enabled.
* Fixed bug where the formatter would normalize to the wrong node on very specific content.
* Fixed bug where some nested list items couldn't be indented properly.
* Fixed bug where links where clickable in the preview dialog.
* Fixed so the alt attribute doesn't get padded with an empty value by default.
* Fixed so nested alignment works more correctly. You will now alter the alignment to the closest block parent.

## Version 4.3.7 - March 2, 2016
* Fixed bug where incorrect icons would be rendered for imagetools edit and color levels.
* Fixed bug where navigation using arrow keys inside a SelectBox didn't move up/down.
* Fixed bug where the visualblocks plugin would render borders round internal UI elements.

## Version 4.3.6 - March 1, 2016
* Added new paste_remember_plaintext_info option to allow a global disable of the plain text mode notification.
* Added new PastePlainTextToggle event that fires when plain text mode toggles on/off.
* Fixed bug where it wasn't possible to select media elements since the drag logic would snap it to mouse cursor.
* Fixed bug where it was hard to place the caret inside nested cE=true elements when the outer cE=false element was focused.
* Fixed bug where editors wouldn't properly initialize if both selector and mode where used.
* Fixed bug where IME input inside table cells would switch the IME off.
* Fixed bug where selection inside the first table cell would cause the whole table cell to get selected.
* Fixed bug where error handling of images being uploaded wouldn't properly handle faulty statuses.
* Fixed bug where inserting contents before a HR would cause an exception to be thrown.
* Fixed bug where copy/paste of Excel data would be inserted as an image.
* Fixed caret position issues with copy/paste of inline block cE=false elements.
* Fixed issues with various menu item focus bugs in Chrome. Where the focused menu bar item wasn't properly blurred.
* Fixed so the notifications have a solid background since it would be hard to read if there where text under it.
* Fixed so notifications gets animated similar to the ones used by dialogs.
* Fixed so larger images that gets pasted is handled better.
* Fixed so the window close button is more uniform on various platform and also increased it's hit area.

## Version 4.3.5 - February 11, 2016
* Npm version bump due to package not being fully updated.

## Version 4.3.4 - February 11, 2016
* Added new OpenWindow/CloseWindow events that gets fired when windows open/close.
* Added new NewCell/NewRow events that gets fired when table cells/rows are created.
* Added new Promise return value to tinymce.init makes it easier to handle initialization.
* Removed the jQuery version the jQuery plugin is now moved into the main package.
* Removed jscs from build process since eslint can now handle code style checking.
* Fixed various bugs with drag/drop of contentEditable:false elements.
* Fixed bug where deleting of very specific nested list items would result in an odd list.
* Fixed bug where lists would get merged with adjacent lists outside the editable inline root.
* Fixed bug where MS Edge would crash when closing a dialog then clicking a menu item.
* Fixed bug where table cell selection would add undo levels.
* Fixed bug where table cell selection wasn't removed when inline editor where removed.
* Fixed bug where table cell selection wouldn't work properly on nested tables.
* Fixed bug where table merge menu would be available when merging between thead and tbody.
* Fixed bug where table row/column resize wouldn't get properly removed when the editor was removed.
* Fixed bug where Chrome would scroll to the editor if there where a empty hash value in document url.
* Fixed bug where the cache suffix wouldn't work correctly with the importcss plugin.
* Fixed bug where selection wouldn't work properly on MS Edge on Windows Phone 10.
* Fixed so adjacent pre blocks gets joined into one pre block since that seems like the user intent.
* Fixed so events gets properly dispatched in shadow dom. Patch provided by Nazar Mokrynskyi.

## Version 4.3.3 - January 14, 2016

* Added new table_resize_bars configuration setting. This setting allows you to disable the table resize bars.
* Added new beforeInitialize event to tinymce.util.XHR lets you modify XHR properties before open. Patch contributed by Brent Clintel.
* Added new autolink_pattern setting to autolink plugin. Enables you to override the default autolink formats. Patch contributed by Ben Tiedt.
* Added new charmap option that lets you override the default charmap of the charmap plugin.
* Added new charmap_append option that lets you add new characters to the default charmap of the charmap plugin.
* Added new insertCustomChar event that gets fired when a character is inserted by the charmap plugin.
* Fixed bug where table cells started with a superfluous `&nbsp;` in IE10+.
* Fixed bug where table plugin would retain all BR tags when cells were merged.
* Fixed bug where media plugin would strip underscores from youtube urls.
* Fixed bug where IME input would fail on IE 11 if you typed within a table.
* Fixed bug where double click selection of a word would remove the space before the word on insert contents.
* Fixed bug where table plugin would produce exceptions when hovering tables with invalid structure.
* Fixed bug where fullscreen wouldn't scroll back to it's original position when untoggled.
* Fixed so the template plugins templates setting can be a function that gets a callback that can provide templates.

## Version 4.3.2 - December 14, 2015

* Fixed bug where the resize bars for table cells were not affected by the object_resizing property.
* Fixed bug where the contextual table toolbar would appear incorrectly if TinyMCE was initialized inline inside a table.
* Fixed bug where resizing table cells did not fire a node change event or add an undo level.
* Fixed bug where double click selection of text on IE 11 wouldn't work properly.
* Fixed bug where codesample plugin would incorrectly produce br elements inside code elements.
* Fixed bug where media plugin would strip dashes from youtube urls.
* Fixed bug where it was possible to move the caret into the table resize bars.
* Fixed bug where drag/drop into a cE=false element was possible on IE.

## Version 4.3.1 - November 26, 2015

* Fixed so it's possible to disable the table inline toolbar by setting it to false or an empty string.
* Fixed bug where it wasn't possible to resize some tables using the drag handles.
* Fixed bug where unique id:s would clash for multiple editor instances and cE=false selections.
* Fixed bug where the same plugin could be initialized multiple times.
* Fixed bug where the table inline toolbars would be displayed at the same time as the image toolbars.
* Fixed bug where the table selection rect wouldn't be removed when selecting another control element.

## Version 4.3.0 - November 23, 2015

* Added new table column/row resize support. Makes it a lot more easy to resize the columns/rows in a table.
* Added new table inline toolbar. Makes it easier to for example add new rows or columns to a table.
* Added new notification API. Lets you display floating notifications to the end user.
* Added new codesample plugin that lets you insert syntax highlighted pre elements into the editor.
* Added new image_caption to images. Lets you create images with captions using a HTML5 figure/figcaption elements.
* Added new live previews of embeded videos. Lets you play the video right inside the editor.
* Added new setDirty method and "dirty" event to the editor. Makes it easier to track the dirty state change.
* Added new setMode method to Editor instances that lets you dynamically switch between design/readonly.
* Added new core support for contentEditable=false elements within the editor overrides the browsers broken behavior.
* Rewrote the noneditable plugin to use the new contentEditable false core logic.
* Fixed so the dirty state doesn't set set to false automatically when the undo index is set to 0.
* Fixed the Selection.placeCaretAt so it works better on IE when the coordinate is between paragraphs.
* Fixed bug where data-mce-bogus="all" element contents where counted by the word count plugin.
* Fixed bug where contentEditable=false elements would be indented by the indent buttons.
* Fixed bug where images within contentEditable=false would be selected in WebKit on mouse click.
* Fixed bug in DOMUntils split method where the replacement parameter wouldn't work on specific cases.
* Fixed bug where the importcss plugin would import classes from the skin content css file.
* Fixed so all button variants have a wrapping span for it's text to make it easier to skin.
* Fixed so it's easier to exit pre block using the arrow keys.
* Fixed bug where listboxes with fix widths didn't render correctly.


## Version 4.2.7 — October 27, 2015

* Fixed bug where backspace/delete would remove all formats on the last paragraph character in WebKit/Blink.
* Fixed bug where backspace within a inline format element with a bogus caret container would move the caret.
* Fixed bug where backspace/delete on selected table cells wouldn't add an undo level.
* Fixed bug where script tags embedded within the editor could sometimes get a mce- prefix prepended to them
* Fixed bug where validate: false option could produce an error to be thrown from the Serialization step.
* Fixed bug where inline editing of a table as the root element could let the user delete that table.
* Fixed bug where inline editing of a table as the root element wouldn't properly handle enter key.
* Fixed bug where inline editing of a table as the root element would normalize the selection incorrectly.
* Fixed bug where inline editing of a list as the root element could let the user delete that list.
* Fixed bug where inline editing of a list as the root element could let the user split that list.
* Fixed bug where resize handles would be rendered on editable root elements such as table.


## Version 4.2.6 — September 28, 2015

* Added capability to set request headers when using XHRs.
* Added capability to upload local images automatically default delay is set to 30 seconds after editing images.
* Added commands ids mceEditImage, mceAchor and mceMedia to be avaiable from execCommand.
* Added Edge browser to saucelabs grunt task. Patch contributed by John-David Dalton.
* Fixed bug where blob uris not produced by tinymce would produce HTML invalid markup.
* Fixed bug where selection of contents of a nearly empty editor in Edge would sometimes fail.
* Fixed bug where color styles woudln't be retained on copy/paste in Blink/Webkit.
* Fixed bug where the table plugin would throw an error when inserting rows after a child table.
* Fixed bug where the template plugin wouldn't handle functions as variable replacements.
* Fixed bug where undo/redo sometimes wouldn't work properly when applying formatting collapsed ranges.
* Fixed bug where shift+delete wouldn't do a cut operation on Blink/WebKit.
* Fixed bug where cut action wouldn't properly store the before selection bookmark for the undo level.
* Fixed bug where backspace in side an empty list element on IE would loose editor focus.
* Fixed bug where the save plugin wouldn't enable the buttons when a change occured.
* Fixed bug where Edge wouldn't initialize the editor if a document.domain was specified.
* Fixed bug where enter key before nested images would sometimes not properly expand the previous block.
* Fixed bug where the inline toolbars wouldn't get properly hidden when blurring the editor instance.
* Fixed bug where Edge would paste Chinese characters on some Windows 10 installations.
* Fixed bug where IME would loose focus on IE 11 due to the double trailing br bug fix.
* Fixed bug where the proxy url in imagetools was incorrect. Patch contributed by Wong Ho Wang.


## Version 4.2.5 — August 31, 2015

* Added fullscreen capability to embedded youtube and vimeo videos.
* Fixed bug where the uploadImages call didn't work on IE 10.
* Fixed bug where image place holders would be uploaded by uploadImages call.
* Fixed bug where images marked with bogus would be uploaded by the uploadImages call.
* Fixed bug where multiple calls to uploadImages would result in decreased performance.
* Fixed bug where pagebreaks were editable to imagetools patch contributed by Rasmus Wallin.
* Fixed bug where the element path could cause too much recursion exception.
* Fixed bug for domains containing ".min". Patch contributed by Loïc Février.
* Fixed so validation of external links to accept a number after `www`. Patch contributed by Victor Carvalho.
* Fixed so the charmap is exposed though execCommand. Patch contributed by Matthew Will.
* Fixed so that the image uploads are concurrent for improved performance.
* Fixed various grammar problems in inline documentation. Patches provided by nikolas.


## Version 4.2.4 — August 17, 2015

* Added picture as a valid element to the HTML 5 schema. Patch contributed by Adam Taylor.
* Fixed bug where contents would be duplicated on drag/drop within the same editor.
* Fixed bug where floating/alignment of images on Edge wouldn't work properly.
* Fixed bug where it wasn't possible to drag images on IE 11.
* Fixed bug where image selection on Edge would sometimes fail.
* Fixed bug where contextual toolbars icons wasn't rendered properly when using the toolbar_items_size.
* Fixed bug where searchreplace dialog doesn't get prefilled with the selected text.
* Fixed bug where fragmented matches wouldn't get properly replaced by the searchreplace plugin.
* Fixed bug where enter key wouldn't place the caret if was after a trailing space within an inline element.
* Fixed bug where the autolink plugin could produce multiple links for the same text on Gecko.
* Fixed bug where EditorUpload could sometimes throw an exception if the blob wasn't found.
* Fixed xss issues with media plugin not properly filtering out some script attributes.


## Version 4.2.3 — July 30, 2015

* Fixed bug where image selection wasn't possible on Edge due to incompatible setBaseAndExtend API.
* Fixed bug where image blobs urls where not properly destroyed by the imagetools plugin.
* Fixed bug where keyboard shortcuts wasn't working correctly on IE 8.
* Fixed skin issue where the borders of panels where not visible on IE 8.


## Version 4.2.2 — July 22, 2015

* Fixed bug where float panels were not being hidden on inline editor blur when fixed_toolbar_container config option was in use.
* Fixed bug where combobox states wasn't properly updated if contents where updated without keyboard.
* Fixed bug where pasting into textbox or combobox would move the caret to the end of text.
* Fixed bug where removal of bogus span elements before block elements would remove whitespace between nodes.
* Fixed bug where repositioning of inline toolbars where async and producing errors if the editor was removed from DOM to early. Patch by iseulde.
* Fixed bug where element path wasn't working correctly. Patch contributed by iseulde.
* Fixed bug where menus wasn't rendered correctly when custom images where added to a menu. Patch contributed by Naim Hammadi.


## Version 4.2.1 — June 29, 2015

* Fixed bug where back/forward buttons in the browser would render blob images as broken images.
* Fixed bug where Firefox would throw regexp to big error when replacing huge base64 chunks.
* Fixed bug rendering issues with resize and context toolbars not being placed properly until next animation frame.
* Fixed bug where the rendering of the image while cropping would some times not be centered correctly.
* Fixed bug where listbox items with submenus would me selected as active.
* Fixed bug where context menu where throwing an error when rendering.
* Fixed bug where resize both option wasn't working due to resent addClass API change. Patch contributed by Jogai.
* Fixed bug where a hideAll call for container rendered inline toolbars would throw an error.
* Fixed bug where onclick event handler on combobox could cause issues if element.id was a function by some polluting libraries.
* Fixed bug where listboxes wouldn't get proper selected sub menu item when using link_list or image_list.
* Fixed so the UI controls are as wide as 4.1.x to avoid wrapping controls in toolbars.
* Fixed so the imagetools dialog is adaptive for smaller screen sizes.


## Version 4.2.0 — June 25, 2015

* Added new flat default skin to make the UI more modern.
* Added new imagetools plugin, lets you crop/resize and apply filters to images.
* Added new contextual toolbars support to the API lets you add floating toolbars for specific CSS selectors.
* Added new promise feature fill as tinymce.util.Promise.
* Added new built in image upload feature lets you upload any base64 encoded image within the editor as files.
* Fixed bug where resize handles would appear in the right position in the wrong editor when switching between resizable content in different inline editors.
* Fixed bug where tables would not be inserted in inline mode due to previous float panel fix.
* Fixed bug where floating panels would remain open when focus was lost on inline editors.
* Fixed bug where cut command on Chrome would thrown a browser security exception.
* Fixed bug where IE 11 sometimes would report an incorrect size for images in the image dialog.
* Fixed bug where it wasn't possible to remove inline formatting at the end of block elements.
* Fixed bug where it wasn't possible to delete table cell contents when cell selection was vertical.
* Fixed bug where table cell wasn't emptied from block elements if delete/backspace where pressed in empty cell.
* Fixed bug where cmd+shift+arrow didn't work correctly on Firefox mac when selecting to start/end of line.
* Fixed bug where removal of bogus elements would sometimes remove whitespace between nodes.
* Fixed bug where the resize handles wasn't updated when the main window was resized.
* Fixed so script elements gets removed by default to prevent possible XSS issues in default config implementations.
* Fixed so the UI doesn't need manual reflows when using non native layout managers.
* Fixed so base64 encoded images doesn't slow down the editor on modern browsers while editing.
* Fixed so all UI elements uses touch events to improve mobile device support.
* Removed the touch click quirks patch for iOS since it did more harm than good.
* Removed the non proportional resize handles since. Unproportional resize can still be done by holding the shift key.




## Version 4.1.10 - May 5, 2015

* Fixed bug where plugins loaded with compat3x would sometimes throw errors when loading using the jQuery version.
* Fixed bug where extra empty paragraphs would get deleted in WebKit/Blink due to recent Quriks fix.
* Fixed bug where the editor wouldn't work properly on IE 12 due to some required browser sniffing.
* Fixed bug where formatting shortcut keys where interfering with Mac OS X screenshot keys.
* Fixed bug where the caret wouldn't move to the next/previous line boundary on Cmd+Left/Right on Gecko.
* Fixed bug where it wasn't possible to remove formats from very specific nested contents.
* Fixed bug where undo levels wasn't produced when typing letters using the shift or alt+ctrl modifiers.
* Fixed bug where the dirty state wasn't properly updated when typing using the shift or alt+ctrl modifiers.
* Fixed bug where an error would be thrown if an autofocused editor was destroyed quickly after its initialization. Patch provided by thorn0.
* Fixed issue with dirty state not being properly updated on redo operation.
* Fixed issue with entity decoder not handling incorrectly written numeric entities.
* Fixed issue where some PI element values wouldn't be properly encoded.


## Version 4.1.9 — March 10, 2015

* Fixed bug where indentation wouldn't work properly for non list elements.
* Fixed bug with image plugin not pulling the image dimensions out correctly if a custom document_base_url was used.
* Fixed bug where ctrl+alt+[1-9] would conflict with the AltGr+[1-9] on Windows. New shortcuts is ctrl+shift+[1-9].
* Fixed bug with removing formatting on nodes in inline mode would sometimes include nodes outside the editor body.
* Fixed bug where extra nbsp:s would be inserted when you replaced a word surronded by spaces using insertContent.
* Fixed bug with pasting from Google Docs would produce extra strong elements and line feeds.


## Version 4.1.8 — March 5, 2015

* Added new html5 sizes attribute to img elements used together with srcset.
* Added new elementpath option that makes it possible to disable the element path but keep the statusbar.
* Added new option table_style_by_css for the table plugin to set table styling with css rather than table attributes.
* Added new link_assume_external_targets option to prompt the user to prepend http:// prefix if the supplied link does not contain a protocol prefix.
* Added new image_prepend_url option to allow a custom base path/url to be added to images.
* Added new table_appearance_options option to make it possible to disable some options.
* Added new image_title option to make it possible to alter the title of the image, disabled by default.
* Fixed bug where selection starting from out side of the body wouldn't produce a proper selection range on IE 11.
* Fixed bug where pressing enter twice before a table moves the cursor in the table and causes a javascript error.
* Fixed bug where advanced image styles were not respected.
* Fixed bug where the less common Shift+Delete didn't produce a proper cut operation on WebKit browsers.
* Fixed bug where image/media size constrain logic would produce NaN when handling non number values.
* Fixed bug where internal classes where removed by the removeformat command.
* Fixed bug with creating links table cell contents with a specific selection would throw a exceptions on WebKit/Blink.
* Fixed bug where valid_classes option didn't work as expected according to docs. Patch provided by thorn0.
* Fixed bug where jQuery plugin would patch the internal methods multiple times. Patch provided by Drew Martin.
* Fixed bug where backspace key wouldn't delete the current selection of newly formatted content.
* Fixed bug where type over of inline formatting elements wouldn't properly keep the format on WebKit/Blink.
* Fixed bug where selection needed to be properly normalized on modern IE versions.
* Fixed bug where Command+Backspace didn't properly delete the whole line of text but the previous word.
* Fixed bug where UI active states wheren't properly updated on IE if you placed caret within the current range.
* Fixed bug where delete/backspace on WebKit/Blink would remove span elements created by the user.
* Fixed bug where delete/backspace would produce incorrect results when deleting between two text blocks with br elements.
* Fixed bug where captions where removed when pasting from MS Office.
* Fixed bug where lists plugin wouldn't properly remove fully selected nested lists.
* Fixed bug where the ttf font used for icons would throw an warning message on Gecko on Mac OS X.
* Fixed a bug where applying a color to text did not update the undo/redo history.
* Fixed so shy entities gets displayed when using the visualchars plugin.
* Fixed so removeformat removes ins/del by default since these might be used for strikethough.
* Fixed so multiple language packs can be loaded and added to the global I18n data structure.
* Fixed so transparent color selection gets treated as a normal color selection. Patch contributed by Alexander Hofbauer.
* Fixed so it's possible to disable autoresize_overflow_padding, autoresize_bottom_margin options by setting them to false.
* Fixed so the charmap plugin shows the description of the character in the dialog. Patch contributed by Jelle Hissink.
* Removed address from the default list of block formats since it tends to be missused.
* Fixed so the pre block format is called preformatted to make it more verbose.
* Fixed so it's possible to context scope translation strings this isn't needed most of the time.
* Fixed so the max length of the width/height input fields of the media dialog is 5 instead of 3.
* Fixed so drag/dropped contents gets properly processed by paste plugin since it's basically a paste. Patch contributed by Greg Fairbanks.
* Fixed so shortcut keys for headers is ctrl+alt+[1-9] instead of ctrl+[1-9] since these are for switching tabs in the browsers.
* Fixed so "u" doesn't get converted into a span element by the legacy input filter. Since this is now a valid HTML5 element.
* Fixed font families in order to provide appropriate web-safe fonts.


## Version 4.1.7 — November 27, 2014

* Added HTML5 schema support for srcset, source and picture. Patch contributed by mattheu.
* Added new cache_suffix setting to enable cache busting by producing unique urls.
* Added new paste_convert_word_fake_lists option to enable users to disable the fake lists convert logic.
* Fixed so advlist style changes adds undo levels for each change.
* Fixed bug where WebKit would sometimes produce an exception when the autolink plugin where looking for URLs.
* Fixed bug where IE 7 wouldn't be rendered properly due to to aggressive css compression.
* Fixed bug where DomQuery wouldn't accept window as constructor element.
* Fixed bug where the color picker in 3.x dialogs wouldn't work properly. Patch contributed by Callidior.
* Fixed bug where the image plugin wouldn't respect the document_base_url.
* Fixed bug where the jQuery plugin would fail to append to elements named array prototype names.


## Version 4.1.6 — October 8, 2014

* Fixed bug with clicking on the scrollbar of the iframe would cause a JS error to be thrown.
* Fixed bug where null would produce an exception if you passed it to selection.setRng.
* Fixed bug where Ctrl/Cmd+Tab would indent the current list item if you switched tabs in the browser.
* Fixed bug where pasting empty cells from Excel would result in a broken table.
* Fixed bug where it wasn't possible to switch back to default list style type.
* Fixed issue where the select all quirk fix would fire for other modifiers than Ctrl/Cmd combinations.
* Replaced jake with grunt since it is more mainstream and has better plugin support.


## Version 4.1.5 — September 9, 2014

* Fixed bug where sometimes the resize rectangles wouldn't properly render on images on WebKit/Blink.
* Fixed bug in list plugin where delete/backspace would merge empty LI elements in lists incorrectly.
* Fixed bug where empty list elements would result in empty LI elements without it's parent container.
* Fixed bug where backspace in empty caret formated element could produce an type error exception of Gecko.
* Fixed bug where lists pasted from word with a custom start index above 9 wouldn't be properly handled.
* Fixed bug where tabfocus plugin would tab out of the editor instance even if the default action was prevented.
* Fixed bug where tabfocus wouldn't tab properly to other adjacent editor instances.
* Fixed bug where the DOMUtils setStyles wouldn't properly removed or update the data-mce-style attribute.
* Fixed bug where dialog select boxes would be placed incorrectly if document.body wasn't statically positioned.
* Fixed bug where pasting would sometimes scroll to the top of page if the user was using the autoresize plugin.
* Fixed bug where caret wouldn't be properly rendered by Chrome when clicking on the iframes documentElement.
* Fixed so custom images for menubutton/splitbutton can be provided. Patch contributed by Naim Hammadi.
* Fixed so the default action of windows closing can be prevented by blocking the default action of the close event.
* Fixed so nodeChange and focus of the editor isn't automatically performed when opening sub dialogs.


## Version 4.1.4 — August 21, 2014

* Added new media_filter_html option to media plugin that blocks any conditional comments, scripts etc within a video element.
* Added new content_security_policy option allows you to set custom policy for iframe contents. Patch contributed by Francois Chagnon.
* Fixed bug where activate/deactivate events wasn't firing properly when switching between editors.
* Fixed bug where placing the caret on iOS was difficult due to a WebKit bug with touch events.
* Fixed bug where the resize helper wouldn't render properly on older IE versions.
* Fixed bug where resizing images inside tables on older IE versions would sometimes fail depending mouse position.
* Fixed bug where editor.insertContent would produce an exception when inserting select/option elements.
* Fixed bug where extra empty paragraphs would be produced if block elements where inserted inside span elements.
* Fixed bug where the spellchecker menu item wouldn't be properly checked if spellchecking was started before it was rendered.
* Fixed bug where the DomQuery filter function wouldn't remove non elements from collection.
* Fixed bug where document with custom document.domain wouldn't properly render the editor.
* Fixed bug where IE 8 would throw exception when trying to enter invalid color values into colorboxes.
* Fixed bug where undo manager could incorrectly add an extra undo level when custom resize handles was removed.
* Fixed bug where it wouldn't be possible to alter cell properties properly on table cells on IE 8.
* Fixed so the color picker button in table dialog isn't shown unless you include the colorpicker plugin or add your own custom color picker.
* Fixed so activate/deactivate events fire when windowManager opens a window since.
* Fixed so the table advtab options isn't separated by an underscore to normalize naming with image_advtab option.
* Fixed so the table cell dialog has proper padding when the advanced tab in disabled.


## Version 4.1.3 - July 29, 2014

* Added event binding logic to tinymce.util.XHR making it possible to override headers and settings before any request is made.
* Fixed bug where drag events wasn't fireing properly on older IE versions since the event handlers where bound to document.
* Fixed bug where drag/dropping contents within the editor on IE would force the contents into plain text mode even if it was internal content.
* Fixed bug where IE 7 wouldn't open menus properly due to a resize bug in the browser auto closing them immediately.
* Fixed bug where the DOMUtils getPos logic wouldn't produce a valid coordinate inside the body if the body was positioned non static.
* Fixed bug where the element path and format state wasn't properly updated if you had the wordcount plugin enabled.
* Fixed bug where a comment at the beginning of source would produce an exception in the formatter logic.
* Fixed bug where setAttrib/getAttrib on null would throw exception together with any hooked attributes like style.
* Fixed bug where table sizes wasn't properly retained when copy/pasting on WebKit/Blink.
* Fixed bug where WebKit/Blink would produce colors in RGB format instead of the forced HEX format when deleting contents.
* Fixed bug where the width attribute wasn't updated on tables if you changed the size inside the table dialog.
* Fixed bug where control selection wasn't properly handled when the caret was placed directly after an image.
* Fixed bug where selecting the contents of table cells using the selection.select method wouldn't place the caret properly.
* Fixed bug where the selection state for images wasn't removed when placing the caret right after an image on WebKit/Blink.
* Fixed bug where all events wasn't properly unbound when and editor instance was removed or destroyed by some external innerHTML call.
* Fixed bug where it wasn't possible or very hard to select images on iOS when the onscreen keyboard was visible.
* Fixed so auto_focus can take a boolean argument this will auto focus the last initialized editor might be useful for single inits.
* Fixed so word auto detect lists logic works better for faked lists that doesn't have specific markup.
* Fixed so nodeChange gets fired on mouseup as it used to before 4.1.1 we optimized that event to fire less often.
* Removed the finish menu item from spellchecker menu since it's redundant you can stop spellchecking by toggling menu item or button.


## Version 4.1.2 - July 15, 2014

* Added offset/grep to DomQuery class works basically the same as it's jQuery equivalent.
* Fixed bug where backspace/delete or setContent with an empty string would remove header data when using the fullpage plugin.
* Fixed bug where tinymce.remove with a selector not matching any editors would remove all editors.
* Fixed bug where resizing of the editor didn't work since the theme was calling setStyles instead of setStyle.
* Fixed bug where IE 7 would fail to append html fragments to iframe document when using DomQuery.
* Fixed bug where the getStyle DOMUtils method would produce an exception if it was called with null as it's element.
* Fixed bug where the paste plugin would remove the element if the none of the paste_webkit_styles rules matched the current style.
* Fixed bug where contextmenu table items wouldn't work properly on IE since it would some times fire an incorrect selection change.
* Fixed bug where the padding/border values wasn't used in the size calculation for the body size when using autoresize. Patch contributed by Matt Whelan.
* Fixed bug where conditional word comments wouldn't be properly removed when pasting plain text.
* Fixed bug where resizing would sometime fail on IE 11 when the mouseup occurred inside the resizable element.
* Fixed so the iframe gets initialized without any inline event handlers for better CSP support. Patch contributed by Matt Whelan.
* Fixed so the tinymce.dom.Sizzle is the latest version of sizzle this resolves the document context bug.


## Version 4.1.1 - July 8, 2014

* Fixed bug where pasting plain text on some WebKit versions would result in an empty line.
* Fixed bug where resizing images inside tables on IE 11 wouldn't work properly.
* Fixed bug where IE 11 would sometimes throw "Invalid argument" exception when editor contents was set to an empty string.
* Fixed bug where document.activeElement would throw exceptions on IE 9 when that element was hidden or removed from dom.
* Fixed bug where WebKit/Blink sometimes produced br elements with the Apple-interchange-newline class.
* Fixed bug where table cell selection wasn't properly removed when copy/pasting table cells.
* Fixed bug where pasting nested list items from Word wouldn't produce proper semantic nested lists.
* Fixed bug where right clicking using the contextmenu plugin on WebKit/Blink on Mac OS X would select the target current word or line.
* Fixed bug where it wasn't possible to alter table cell properties on IE 8 using the context menu.
* Fixed bug where the resize helper wouldn't be correctly positioned on older IE versions.
* Fixed bug where fullpage plugin would produce an error if you didn't specify a doctype encoding.
* Fixed bug where anchor plugin would get the name/id of the current element even if it wasn't anchor element.
* Fixed bug where visual aids for tables wouldn't be properly disabled when changing the border size.
* Fixed bug where some control selection events wasn't properly fired on older IE versions.
* Fixed bug where table cell selection on older IE versions would prevent resizing of images.
* Fixed bug with paste_data_images paste option not working properly on modern IE versions.
* Fixed bug where custom elements with underscores in the name wasn't properly parsed/serialized.
* Fixed bug where applying inline formats to nested list elements would produce an incorrect formatting result.
* Fixed so it's possible to hide items from elements path by using preventDefault/stopPropagation.
* Fixed so inline mode toolbar gets rendered right aligned if the editable element positioned to the documents right edge.
* Fixed so empty inline elements inside empty block elements doesn't get removed if configured to be kept intact.
* Fixed so DomQuery parentsUntil/prevUntil/nextUntil supports selectors/elements/filters etc.
* Fixed so legacyoutput plugin overrides fontselect and fontsizeselect controls and handles font elements properly.

## Version 4.1.0 - June 18, 2014

* Added new file_picker_callback option to replace the old file_browser_callback the latter will still work though.
* Added new custom colors to textcolor plugin will be displayed if a color picker is provided also shows the latest colors.
* Added new color_picker_callback option to enable you to add custom color pickers to the editor.
* Added new advanced tabs to table/cell/row dialogs to enable you to select colors for border/background.
* Added new colorpicker plugin that lets you select colors from a hsv color picker.
* Added new tinymce.util.Color class to handle color parsing and converting.
* Added new colorpicker UI widget element lets you add a hsv color picker to any form/window.
* Added new textpattern plugin that allows you to use markdown like text patterns to format contents.
* Added new resize helper element that shows the current width & height while resizing.
* Added new "once" method to Editor and EventDispatcher enables since callback execution events.
* Added new jQuery like class under tinymce.dom.DomQuery it's exposed on editor instances (editor.$) and globally under (tinymce.$).
* Fixed so the default resize method for images are proportional shift/ctrl can be used to make an unproportional size.
* Fixed bug where the image_dimensions option of the image plugin would cause exceptions when it tried to update the size.
* Fixed bug where table cell dialog class field wasn't properly updated when editing an a table cell with an existing class.
* Fixed bug where Safari on Mac would produce webkit-fake-url for pasted images so these are now removed.
* Fixed bug where the nodeChange event would get fired before the selection was changed when clicking inside the current selection range.
* Fixed bug where valid_classes option would cause exception when it removed internal prefixed classes like mce-item-.
* Fixed bug where backspace would cause navigation in IE 8 on an inline element and after a caret formatting was applied.
* Fixed so placeholder images produced by the media plugin gets selected when inserted/edited.
* Fixed so it's possible to drag in images when the paste_data_images option is enabled. Might be useful for mail clients.
* Fixed so images doesn't get a width/height applied if the image_dimensions option is set to false useful for responsive contents.
* Fixed so it's possible to pass in an optional arguments object for the nodeChanged function to be passed to all nodechange event listeners.
* Fixed bug where media plugin embed code didn't update correctly.



## Version 4.0.28 - May 27, 2014

* Fixed critical issue with empty urls producing an exception when converted into absolute urls due to resent bug fix in tinymce.util.URI.


## Version 4.0.27 - May 27, 2014

* Added support for definition lists to lists plugin and enter key logic. This can now created by the format menu.
* Added cmd option for the style_formats menu enables you to toggle commands on/off using the formats menu for example lists.
* Added definition lists to visualblocks plugin so these are properly visualized like other list elements.
* Added new paste_merge_formats option that reduces the number of nested text format elements produced on paste. Enabled by default.
* Added better support for nested link_list/image_list menu items each item can now have a "menu" item with subitems.
* Added "Add to Dictionary" support to spellchecker plugin when the backend tells that this feature is available.
* Added new table_default_attributes/table_default_styles options patch contributed by Dan Villiom Podlaski Christiansen.
* Added new table_class_list/table_cell_class_list/table_row_class_list options to table plugin.
* Added new invalid_styles/valid_classes options to better control what gets returned for the style/class attribute.
* Added new file_browser_callback_types option that allows you to specify where to display the picker based on dialog type.
* Fixed so the selected state is properly handled on nested menu items in listboxes patch contributed by Jelle Kralt.
* Fixed so the invisiblity css value for TinyMCE gets set to inherit instead of visible to better support dialog scripts like reveal.
* Fixed bug where Gecko would remove anchors when pasting since the their default built in logic removes empty nodes.
* Fixed bug where it wasn't possible to paste on Chrome Andoid since it doesn't properly support the Clipboard API yet.
* Fixed bug where user defined type attribute value of text/javascript didn't get properly serialized.
* Fixed bug where space in span elements would removed when the element was considered empty.
* Fixed bug where the undo/redo button states didn't change if you removed all undo levels using undoManager.clear.
* Fixed bug where unencoded links inside query strings or hash values would get processed by the relative urls logic.
* Fixed bug where contextmenu would automatically close in inline editing mode on Firefox running on Mac.
* Fixed bug where Gecko/IE would produce multiple BR elements when forced_root_block was set to false and a table was the last child of body.
* Fixed bug where custom queryCommandState handlers didn't properly handle boolean states.
* Fixed bug where auto closing float panels link menus wasn't automatically closed when the window was resized.
* Fixed bug where the image plugin wouldn't update image dimensions when the current image was changed using the image_list select box.
* Fixed bug with paste plugin not properly removing paste bin on Safari Mac when using the cmd+shift+v keyboard command.
* Fixed bug where the paste plugin wouln't properly strip trailing br elements under very specific scenarios.
* Fixed bug where enter key wouldn't properly place the caret on Gecko when pressing enter in a text block with a br ended line inside.
* Fixed bug where Safari Mac shortcuts like Cmd+Opt+L didn't get passed through to the browser due to a Quirks fix.
* Fixed so plain text mode works better when it converts rich text to plain text when pasting from for example Word.
* Fixed so numeric keycodes can be used in the shortcut format enabling support for any key to be specified.
* Fixed so table cells can be navigated with tab key and new rows gets automatically added when you are at the last cell.
* Fixed bug where formatting before cursor gets removed when toggled off for continued content.


## Version 4.0.26 - May 6, 2014

* Fixed bug in media plugin where changing existing url did not use media regex patterns to create protocol neutral url.
* Fixed bug where selection wasn't properly restored on IE 11 due to a browser bug with Element.contains.


## Version 4.0.25 - April 30, 2014

* Fixed bug where it wasn't possible to submit forms with editor instances on WebKit/Blink.


## Version 4.0.24 - April 30, 2014

* Added new event_root setting for inline editors. Lets you bind all editor events on a parent container.
* Fixed bug where show/hide/isHidden didn't work properly for inline editor instances.
* Fixed bug where preview plugin dialog didn't handle relative urls properly.
* Fixed bug where the autolink plugin would remove the trailing space after an inserted link.
* Fixed bug in paste plugin where pasting in a page with scrollbars would scroll to top of page in webkit browsers.
* Fixed bug where the paste plugin on WebKit would remove styles from pasted source code with style attributes.
* Fixed so image_list/link_list can be a function that allows custom async calls to populate these lists.


## Version 4.0.23 - April 24, 2014

* Added isSameOrigin method to tinymce.util.URI it handles default protocol port numbers better. Patch contributed by Matt Whelan.
* Fixed bug where IE 11 would add br elements to the end of the editor body element each time it was shown/hidden.
* Fixed bug where the autolink plugin would produce an index out of range exception for some very specific HTML.
* Fixed bug where the charmap plugin wouldn't properly insert non breaking space characters when selected.
* Fixed bug where pasting from Excel 2011 on Mac didn't produce a proper table when using the paste plugin.
* Fixed bug where drag/dropping inside a table wouldn't properly end the table cell selection.
* Fixed bug where drag/dropping images within tables on Safari on Mac wouldn't work properly.
* Fixed bug where editors couldn't be re-initialized if they where externally destroyed.
* Fixed bug where inline editors would produce a range index exception when clicking on buttons like bold.
* Fixed bug where the preview plugin wouldn't properly handle non encoded upper UTF-8 characters.
* Fixed so document.currentScript is used when detecting the current script location. Patch contributed by Mickael Desgranges.
* Fixed issue with the paste_webkit_styles option so is disabled by default since it might produce a lot of extra styles.


## Version 4.0.22 - April 16, 2014

* Added lastLevel to BeforeAddUndo level event so it's easier to block undo level creation based.
* Fixed so multiple list elements can be indented properly. Patch contributed by Dan Villiom Podlaski Christiansen.
* Fixed bug where the selection would be at the wrong location sometimes for inline editor instances.
* Fixed bug where drag/dropping content into an inline editor would fail on WebKit/Blink.
* Fixed bug where table grid wouldn't work properly when the UI was rendered in for RTL mode.
* Fixed bug where range normalization wouldn't handle mixed contentEditable nodes properly.
* Fixed so the media plugin doesn't override the existing element rules you now need to manually whitelist non standard attributes.
* Fixed so old language packs get properly loaded when the new longer language code format is used.
* Fixed so all track changes junk such as comments, deletes etc gets removed when pasting from Word.
* Fixed so non image data urls is blocked by default since they might contain scripts.
* Fixed so it's possible to import styles from the current page stylesheets into an inline editor by using the importcss_file_filter.
* Fixed bug where the spellchecker plugin wouldn't add undo levels for each suggestion replacement.
* Reworked the default spellchecker RPC API to match the new PHP Spellchecker package. Fallback documented in the TinyMCE docs.


## Version 4.0.21 - April 1, 2014

* Added new getCssText method to formatter to get the preview css text value for a format to be used in UI.
* Added new table_grid option that allows you to disable the table grid and use a dialog.
* Added new image_description, image_dimensions options to image plugin. Patch contributed by Pat O'Neill.
* Added new media_alt_source, media_poster, media_dimensions options to media plugin. Patch contributed by Pat O'Neill.
* Added new ability to specify high/low dpi versions custom button images for retina displays.
* Added new getWindows method to WindowManager makes it easier to control the currently opened windows.
* Added new paste_webkit_styles option to paste plugin to control the styles that gets retained on WebKit.
* Added preview of classes for the selectboxes used by the link_class_list/image_class_list options.
* Added support for Sauce Labs browser testing using the new saucelabs-tests build target.
* Added title input field to link dialog for a11y reasons can be disabled by using the link_title option.
* Fixed so the toolbar option handles an array as input for multiple toolbar rows.
* Fixed so the editor renders in XHTML mode apparently some people still use this rendering mode.
* Fixed so icons gets rendered better on Firefox on Mac OS X by applying -moz-osx-font-smoothing.
* Fixed so the auto detected external media sources produced protocol relative urls. Patch contributed by Pat O'Neill.
* Fixed so it's possible to update the text of a button after it's been rendered to page DOM.
* Fixed bug where iOS 7.1 Safari would open linked when images where inserted into links.
* Fixed bug where IE 11 would scroll to the top of inline editable elements when applying formatting.
* Fixed bug where tabindex on elements within the editor contents would cause issues on some browsers.
* Fixed bug where link text wouldn't be properly updated in gecko if you changed an existing link.
* Fixed bug where it wasn't possible to close dialogs with the escape key if the focus was inside a textbox.
* Fixed bug where Gecko wouldn't paste rich text contents from Word or other similar word processors.
* Fixed bug where binding events after the control had been rendered could fail to produce a valid delegate.
* Fixed bug where IE 8 would throw and error when removing editors with a cross domain content_css setting.
* Fixed bug where IE 9 wouldn't be able to select text after an editor instance with caret focus was removed.
* Fixed bug where the autoresize plugin wouldn't resize the editor if you inserted huge images.
* Fixed bug where multiple calls to the same init would produce extra editor instances.
* Fixed bug where fullscreen toggle while having the autoresize plugin enabled wouldn't produce scrollbars.
* Fixed so screen readers use a dialog instead of the grid for inserting tables.
* Fixed so Office 365 Word contents gets filtered the same way as content from desktop Office.
* Fixed so it's possible to override the root container for UI elements defaults to document.body.
* Fixed bug where tabIndex is set to -1 on inline editable elements. It now keeps the existing tabIndex intact.
* Fixed issue where the UndoManager transact method couldn't be nested since it only had one lock.
* Fixed issue where headings/heading where labeled incorrectly as headers/header.


## Version 4.0.20 - March 18, 2014

* Fixed so all unit tests can be executed in a headless phantomjs instance for CI testing.
* Fixed so directionality setting gets applied to the preview dialog as well as the editor body element.
* Fixed a performance issue with the "is" method in DOMUtils. Patch contributed by Paul Bosselaar.
* Fixed bug where paste plugin wouldn't paste plain text properly when pasting using browser menus.
* Fixed bug where focusable SVG elements would throw an error since className isn't a proper string.
* Fixed bug where the preview plugin didn't properly support the document_base_url setting.
* Fixed bug where the focusedEditor wouldn't be set to null when that editor was removed.
* Fixed bug where Gecko would throw an exception when editors where removed.
* Fixed bug where the FocusManager wouldn't handle selection restoration properly on older IE versions.
* Fixed bug where the searchreplace plugin would produce an exception on very specific multiple searches.
* Fixed bug where some events wasn't properly unbound when all editors where removed from page.
* Fixed bug where tapping links on iOS 7.1 would open the link instead of placing the caret inside.
* Fixed bug where holding the finger down on iOS 7.1 would open the link/image callout menu.
* Fixed so the jQuery plugin returns null when getting the the tinymce instance of an element before it's initialized.
* Fixed so selection normalization gets executed more often to reduce incorrect UI states on Gecko.
* Fixed so the default action of closing the window on a form submission can be prevented using "preventDefault".


## Version 4.0.19 - March 11, 2014

* Added support for CSS selector expressions in object_resizing option. Allows you to control what to resize.
* Added addToTop compatibility to compat3x plugin enables more legacy 3.x plugins to work properly.
* Fixed bug on IE where it wasn't possible to align images when they where floated left.
* Fixed bug where the indent/outdent buttons was enabled though readonly mode was enabled.
* Fixed bug where the nodeChanged event was fired when readonly mode was enabled.
* Fixed bug where events like blur could be fired to editor instances that where manually removed on IE 11.
* Fixed bug where IE 11 would move focus to menubar/toolbar when using the tab key in a form with an editor.
* Fixed bug where drag/drop in Safari on Mac didn't work properly due to lack of support for modern dataTransfer object.
* Fixed bug where the remove event wasn't properly executed when the editor instances where removed.
* Fixed bug where the selection change handler on inline editors would fail if the editor instance was removed.


## Version 4.0.18 - February 27, 2014

* Fixed bug where images would get class false/undefined when initially created.


## Version 4.0.17 - February 26, 2014

* Added much better wai-aria accessibility support when it comes to keyboard navigation of complex UI controls.
* Added dfn,code,samp,kbd,var,cite,mark,q elements to the default remove formats list. Patch contributed by Naim Hammadi.
* Added var,cite,dfn,code,mark,q,sup,sub to the list of elements that gets cloned on enter. Patch contributed by Naim Hammadi.
* Added new visual_anchor_class option to specify a custom class for inline anchors. Patch contributed by Naim Hammadi.
* Added support for paste_data_images on WebKit/Blink when the user pastes image data.
* Added support for highlighting the video icon when a video is added that produces an iframe. Patch contributed by monkeydiane.
* Added image_class_list/link_class_list options to image/link dialogs to let the user select classes.
* Fixed bug where the ObjectResizeStart event didn't get fired properly by the ControlSelection class.
* Fixed bug where the autolink plugin would steal focus when loaded on IE 9+.
* Fixed bug where the editor save method would remove the current selection when called on an inline editor.
* Fixed bug where the formatter would merge span elements with parent bookmarks if an id format was used.
* Fixed bug where WebKit/Blink browsers would scroll to the top of the editor when pasting into an empty element.
* Fixed bug where removing the editor would cause an error about wrong document on IE 11 under specific circumstances.
* Fixed bug where Gecko would place the caret at an incorrect location when using backspace.
* Fixed bug where Gecko would throw "Wrong Document Error" for ranges that pointing to removed nodes.
* Fixed bug where it wasn't possible to properly update the title and encoding properties in the fullpage plugin.
* Fixed bug where paste plugin would produce an extra undo level on IE.
* Fixed bug where the formatter would apply inline formatting outside the current word in if the selection was collapsed.
* Fixed bug where it wasn't possible to delete tables on Chrome if you placed the selection within all the contents of the table.
* Fixed bug where older IE versions wouldn't properly insert contents into table cells when editor focus was lost.
* Fixed bug where older IE versions would fire focus/blur events even though the editor focus didn't change.
* Fixed bug where IE 11 would add two trailing BR elements to the editor iframe body if the editor was hidden.
* Fixed bug where the visualchars plugin wouldn't display non breaking spaces if they where inserted while the state was enabled.
* Fixed bug where the wordcount plugin would be very slow some HTML where to much backtracking occured.
* Fixed so pagebreak elements in the editor breaks pages when printing. Patch contributed by penc.
* Fixed so UndoManager events pass though the original event that created the undo level such as a keydown, blur etc.
* Fixed so the inserttime button is callsed insertdatetime the same as the menu item and plugin name.
* Fixed so the word count plugin handles counting properly on most languages on the planet.
* Fixed bug where the auroreize plugin would throw an error if the editor was manually removed within a few seconds.
* Fixed bug where the image dialog would get stuck if the src was removed. Patch contribued by monkeydiane.
* Fixed bug where there is an extra br tag for IE 9/10 that isn't needed. Patch contributed by monkeydiane.
* Fixed bug where drag/drop in a scrolled editor would fail since it didn't use clientX/clientY cordinates. Patch contributed by annettem.


## Version 4.0.16 - January 31, 2014

* Fixed bug where the editor wouldn't be properly rendered on IE 10 depending on the document.readyState.


## Version 4.0.15 - January 30, 2014

* Fixed bug where paste in inline mode would produce an exception if the contents was pasted inside non overflow element.


## Version 4.0.14 - January 30, 2014

* Fixed a bug in the image plugin where images couldn't be inserted if the image_advtab option wasn't set to true.


## Version 4.0.13 - January 30, 2014

* Added language selection menu to spellchecker button similar to the 3.x functionality. Patch contributed by threebytesfull.
* Added new style_formats_merge option that enables you to append to the default formats instead of replaceing them. Patch contributed by PacificMorrowind.
* Fixed bug where the DOMUtils getPos API function didn't properly handle the location of the root element. Patch contributed by Andrew Ozz.
* Fixed bug where the spellchecker wouldn't properly place the spellchecker suggestions menu. Patch contributed by Andrew Ozz.
* Fixed bug where the tabfocus plugin would prevent the user from suing Ctrl+Tab, Patch contributed by Andrew Ozz.
* Fixed bug where table resize handles could sometimes be added to elements out side the editable inline element.
* Fixed bug where the inline mode editor UI would render incorrectly when the stylesheets didn't finish loading on Chrome.
* Fixed bug where IE 8 would insert the image outside the editor unless it was focused first.
* Fixed bug where older IE versions would throw an exception on drag/drop since they don't support modern dataTransfer API.
* Fixed bug where the blockquote button text wasn't properly translated since it had the wrong English key.
* Fixed bug where the importcss plugin didn't import a.class rules properly as selector formats.
* Fixed bug where the combobox control couldn't be disabled or set to a specific character size initially.
* Fixed bug where the FormItem didn't inherit the disabled state from the control to be wrapped.
* Fixed bug where adding a TinyMCE instance within a TinyMCE dialog wouldn't properly delegate the events.
* Fixed bug where any overflow parent containers would automatically scroll to the left when pasting in Chrome.
* Fixed bug where IE could throw an error when search/replacing contents due to an invalid selection being returned.
* Fixed bug where WebKit would fire focus/blur events incorrectly if the editor was empty due to a WebKit focus bug.
* Fixed bug where WebKit/Blink would scroll to the top of editor if the height was more than the viewport height.
* Fixed bug where blurring and removing the editor could cause an exteption to be thrown by the FocusManager.
* Fixed bug where the media plugin would override specified dimensions for url pattern matches. Patch contributed by penc.
* Fixed bug where the autoresize plugin wouldn't take margins into account when calculating the body size. Patch contributed by lepoltj.
* Fixed bug where the image plugin would throw errors some times on IE 8 when it preloaded the image to get it's dimensions.
* Fixed bug where the image plugin wouldn't update the style if the user closed the dialog before focusing out. Patch contributed by jonparrott.
* Fixed bug where bindOnReady in EventUtils wouldn't work properly for some edge cases on older IE versions. Patch contributed by Godefroy.
* Fixed bug where image selector formats wasn't properly handled by the importcss plugin.
* Fixed bug where the dirty state of the editor wasn't set when editing an existing link URL.
* Fixed bug where it wasn't possible to prevent paste from happening by blocking the default behavior when the paste plugin was enabled.
* Fixed bug where text to display in the insert/edit link dialog wouldn't be properly entity encoded.
* Fixed bug where Safari 7 on Mac OS X would delete contents if you pressed Cmd+C since it passes out a charCode for the event.
* Fixed bug where bound drop events inside inline editors would get fired on all editor instances instead of the specific instance.
* Fixed bug where images outlined selection border would be clipped when the autoresize plugin was enabled.
* Fixed bug where image dimension constrains proportions wouldn't work properly if you altered a value and immediately clicked the submit button.
* Fixed so you don't need to set language option to false when specifying a custom language_url.
* Fixed so the link dialog "text to display" field gets automatically hidden if the selection isn't text contents. Patch contributed by Godefroy.
* Fixed so the none option for the target field in the link dialog gets excluded when specifiying the target_list config option.
* Fixed so outline styles are displayed by default in the formats preview. Patch contributed by nhammadi.
* Fixed so the max characters for width/height is more than 3 in the media and image dialogs.
* Fixed so the old mceSpellCheck command toggles the spellchecker on/off.
* Fixed so the setupeditor event is fired before the setup callback setting to ease up compatibility with 3.x.
* Fixed so auto url link creation in IE 9+ is disabled by default and re-enabled by the autolink plugin.
* Removed the custom scrollbars for WebKit since the default browser scrollbars looks a lot better now days.


## Version 4.0.12 - December 18, 2013

* Added new media_scripts option to the media plugin. This makes it possible to embed videos using script elements.
* Fixed bug where WebKit/Blink would produce random span elements and styles when deleting contents inside the editor.
* Fixed bug where WebKit/Blink would produce span elements out of link elements when they where removed by the unlink command.
* Fixed bug where div block formats in inline mode where applied to all paragraphs within the editor.
* Fixed bug where div blocks where marked as an active format in inline mode when doing non collapsed selections.
* Fixed bug where the importcss plugin wouldn't append styles if the style_formats option was configured.
* Fixed bug where the importcss plugin would import styles into groups multiple times for different format menus.
* Fixed bug where the paste plugin wouldn't properly remove the paste bin element on IE if a tried to paste a file.
* Fixed bug where selection normalization wouldn't properly handle cases where a range point was after a element node.
* Fixed bug where the default time format for the inserttime split button wasn't the first item in the list.
* Fixed bug where the default text for the formatselect control wasn't properly translated by the language pack.
* Fixed bug where links would be inserted incorrectly when auto detecting absolute urls/emails links in inline mode.
* Fixed bug where IE 11 would insert contents in the wrong order due to focus/blur async problems.
* Fixed bug where pasting contents on IE sometimes would place the contents at the end of the editor.
* Fixed so drag/drop on non IE browsers gets filtered by the paste plugin. IE doesn't have the necessary APIs.
* Fixed so the paste plugin better detects Word 2007 contents not marked with -mso junk.
* Fixed so image button isn't set to an active state when selecting control/media placeholder items.


## Version 4.0.11 - Novebmer 20, 2013

* Added the possibility to update button icon after it's been rendered.
* Added new autosave_prefix option allows you to set the prefix for the local storage keys.
* Added new pagebreak_split_block option to make it easier to split block elements with a page break.
* Fixed bug where IE would some times produce font elements when typing out side the body root blocks.
* Fixed bug where IE wouldn't properly use the configured root block element but instead use the a paragraph.
* Fixed bug where IE would throw a stack overflow if control selections non images was made in inline mode.
* Fixed bug where IE 8 would render an extra enter element if the contents of the editor was empty.
* Fixed bug where the caret wasn't moved to the first suitable element when updating the source.
* Fixed bug where protocol relative urls would be forced into http protocol.
* Fixed bug where internal images with data urls such as video elements would be removed by the paste_data_images option.
* Fixed bug where the autoresize plugin wouldn't properly resize the editor to initial contents some times.
* Fixed bug where the templates dialog wouldn't be properly rendered on IE 7.
* Fixed bug where updating styles in the advanced tab under the image dialog would remove the style attribute on cancel.
* Fixed bug where tinymce.full.min.js bundle script wasn't detected when looking for the tinymce root path.
* Fixed bug where the SaxParser would throw a malformed URI sequence for inproperly encoded uris.
* Fixed bug where enabling table caption wouldn't properly render the caption element on IE 10 and below.
* Fixed bug where the scrollbar would be placed to the left and on top of the text of menu items in RTL mode.
* Fixed bug where Firefox on Mac OS X would navigate forward/backward on CMD+Arrow keys.
* Fixed bug where fullscreen toggle on fixed sized editors wouldn't be properly full screened.
* Fixed bug where the unlink button would remove all links from the body element in inline mode under running in IE.
* Fixed bug where iOS wasn't able to place the caret inside an empty editor when clicking below the first line.
* Fixed so internal document anchors in Word documents are retained when pasting using the paste from word feature.
* Fixed so menu shortcuts gets rendered with the Apple command icon patch contributed by Andy Keller.
* Fixed so the CSS compression of styles like "border" is a bit better for mixed values.
* Fixed so the template_popup_width/template_popup_height option works properly in the template plugin.
* Fixed so the languages parameter for AddOnManager.requireLangPack works the same way as for 3.x.
* Fixed so the autosave plugin uses the current page path, query string and editor id as it's default prefix.
* Fixed so the fullpage plugin adds/removes any link style sheets to the current iframe document.


## Version 4.0.10 - October 28, 2013

* Added new forced_root_block_attrs option that allows you to specify attributes for the root block.
* Fixed bug where the custom resize handles didn't work properly on IE 11.
* Fixed bug where the code plugin would select all contents in IE when content was updated.
* Fixed bug where the scroll position wouldn't get applied to floating toolbars.
* Fixed bug where focusing in/out of the editor would move the caret to the top of the editor on IE 11.
* Fixed bug where the listboxes for link and image lists wasn't updated when the url/src was changed.
* Fixed bug where selection bookmark elements would be visible in the elements path list.


## Version 4.0.9 - October 24, 2013

* Added support for external template files to template plugin just set the templates option to a URL with JSON data.
* Added new allow_script_urls option. Enabled by default, trims all script urls from attributes.
* Fixed bug where IE would sometimes throw a "Permission denied" error unless the Sizzle doc was properly removed.
* Fixed bug where lists plugin would remove outer list items if inline editable element was within a LI parent.
* Fixed bug where insert table grid widget would insert a table on item to large when using a RTL language pack.
* Fixed bug where fullscreen mode wasn't rendering properly on IE 7.
* Fixed bug where resize handlers wasn't moved correctly when scrolling inline editable elements.
* Fixed bug where it wasn't possible to paste from Excel and possible other applications due to Clipboard API bugs in browsers.
* Fixed bug where Shift+Ctrl+V didn't produce a plain text paste on IE.
* Fixed bug where IE would sometimes move the selection to the a previous location.
* Fixed bug where the editor wasn't properly scrolled to the content insert location in inline mode.
* Fixed bug where some comments would be parsed as HTML by the SaxParser.
* Fixed bug where WebKit/Blink would render tables incorrectly if unapplying formats when having multiple table cells selected.
* Fixed bug where the paste_data_images option wouldn't strip all kinds of data images.
* Fixed bug where the GridLayout didn't render items correctly if the contents overflowed the layout container.
* Fixed bug where the Window wasn't properly positioned if the size of the button bar or title bar was wider than the contents.
* Fixed bug where psuedo selectors for finding UI controls didn't work properly.
* Fixed bug where resized splitbuttons would throw an exception if it didn't contain an icon.
* Fixed bug where setContent would move focus into the editor even though it wasn't active.
* Fixed bug where IE 11 would sometimes throw an "Invalid function" error when calling setActive on the body element.
* Fixed bug where the importcss plugin would import styles from CSS files not present in the content_css array.
* Fixed bug where the jQuery plugin will initialize the editors twice if the core was loaded using the script_url option.
* Fixed various bugs and issues related to indentation of OL/UL list elements.
* Fixed so IE 7 renders the classic mode buttons the same size as other browsers.
* Fixed so document.readyState is checked when loading and initializing TinyMCE manually after page load.


## Version 4.0.8 - October 10, 2013

* Added RTL support so all of the UI is rendered right to left if a language pack has a _dir property set to rtl.
* Fixed bug where layout managers wouldn't handle subpixel values properly. When for example the browser was zoomed in.
* Fixed bug where the importcss plugin wouldn't import classes from local stylesheets with remote @import rules on Gecko.
* Fixed bug where Arabic characters wouldn't be properly counted in wordcount plugin.
* Fixed bug where submit event would still fire even if it was unbound on IE 10. Now the event is simply ignored.
* Fixed bug where IE 11 would return border-image: none when getting style attributes with borders in them.
* Fixed various UI rendering issues on older IE versions.
* Fixed so readonly option renderes the editor in inline mode with all UI elements disabled and all events blocked.


## Version 4.0.7 - October 2, 2013

* Added new importcss_selector_filter option to importcss plugin. Makes it easier to select specific classes to import.
* Added new importcss_groups option to importcss plugin. Enables you separate classes into menu groups based on filters.
* Added new PastePreProcess/PastePostProcess events and reintroduced paste_preprocess/paste_postprocess paste options.
* Added new paste_word_valid_elements option lets you control what elements gets pasted when pasting from Word.
* Fixed so panelbutton is easier to use. It's now possible to set the panel contents to any container type.
* Fixed so editor.destroy calls editor.remove so that both destroy and remove can be used to remove an editor instance.
* Fixed so the searchreplace plugin doesn't move focus into the editor until you close the dialog.
* Fixed so the searchreplace plugin search for next item if you hit enter inside the dialog.
* Fixed so importcss_selector_converter callback is executed with the scope set to importcss plugin instance.
* Fixed so the default selector converter function is exposed in importcss plugin.
* Fixed issue with the tabpanel not expanding properly when the tabs where wider than the body of the panel.
* Fixed issue with the menubar option producing a JS exception if set to true.
* Fixed bug where closing a dialog with an opened listbox would cause errors if new dialogs where opened.
* Fixed bug where hidden input elements wasn't removed when inline editor instances where removed.
* Fixed bug where editors wouldn't initialize some times due to event logic not working correctly.
* Fixed bug where pre elements woudl cause searchreplace and spellchecker plugins to mark incorrect locations.
* Fixed bug where embed elements wouldn't be properly resized if they where configured in using the video_template_callback.
* Fixed bug where paste from word would remove all BR elements since it was missing in the default paste_word_valid_elements.
* Fixed bug where paste filtering wouldn't work properly on old WebKit installations pre Clipboard API.
* Fixed bug where linebreaks would be removed by paste plugin on IE since it didn't properly detect Word contents.
* Fixed bug where paste plugin would convert some Word paragraphs that looked like lists into lists.
* Fixed bug where editors wasn't properly initialized if the document.domain is set to the same as the current domain on IE.
* Fixed bug where an exception was thrown when removing an editor after opening the context menu multiple times.
* Fixed bug where paste as plain text on Gecko would add extra BR elements when pasting paragraphs.


## Version 4.0.6 - September 12, 2013

* Added new compat3x plugin that makes it possible to load most 3.x plugins. Only available in the development package.
* Added new skin_url option enables you to load local skins when using the CDN version.
* Added new theme_url option enables you to load local themes when using the CDN version.
* Added new importcss_file_filter option to importcss to enable users to specify what files to import from.
* Added new template_preview_replace_values option to template plugin to add example data for variables.
* Added image option support for addMenuItem calls. Enables you to provide a custom image for menu items.
* Fixed bug where editor.insertContent wouldn't set format and selection type on events.
* Fixed bug where inserting BR elements on IE 8 would thrown an exception when the range is at a empty text node.
* Fixed bug where outdent of single LI element within another LI would produce an empty list element OL/UL.
* Fixed bug where the bullist/numlist buttons wouldn't be deselected when deleting all contents.
* Fixed bug where toggling an empty list item off wouldn't produce a new empty block element.
* Fixed bug where it wasn't possible to apply lists to mixed text blocks and br lines.
* Fixed bug where it wasn't possible to paste contents on iOS when the paste plugin was enabled.
* Fixed bug where it wasn't possible to delete HR elements on Gecko.
* Fixed bug where scrolling and refocusing using the mouse would place the caret incorrectly on IE.
* Fixed bug where you needed to hit the empty paragraph to get editor focus in IE 11.
* Fixed bug where activeEditor wasn't set to the correct editor when opening windows.
* Fixed bug where dirty state wasn't set to false when undoing to the first undo level.
* Fixed bug where pasting in inline mode on Safari on Mac wouldn't work properly.
* Fixed bug where content_css wasn't loaded into the insert template dialog.
* Fixed bug where setting the contents of the editor to non text contents would produce an incorrect selection range.
* Fixed so code dialog height gets smaller that the viewport height if it doesn't fit.
* Fixed so inline editable regions scroll when pressing enter/return.
* Fixed so inline toolbar gets positioned correctly when inline element is within a scrollable container.
* Fixed various memory leaks when removing editor instances dynamically.
* Removed CSS for BR elements in visualblocks due to problems with Chrome and IE.


## Version 4.0.5 - August 27, 2013

* Added visuals for UL, LI and BR to visualblocks plugin. Patch contributed by Dan Ransom.
* Added new autosave_restore_when_empty option to autosave plugin. Enabled by default.
* Fixed bug where an exception was thrown when inserting images if valid_elements didn't include an ID for the image.
* Fixed bug where the advlist plugin wouldn't properly render the splitbutton controls.
* Fixed bug where visual blocks menu item wouldn't be marked checked when using the visualblocks_default_state option.
* Fixed bug where save button in save plugin wouldn't get properly enabled when contents was changed.
* Fixed bug where it was possible to insert images without any value for it's source attribute.
* Fixed bug where altering image attributes wouldn't add a new undo level.
* Fixed bug where import rules in CSS files wouldn't be properly imported by the importcss plugin.
* Fixed bug where selectors could be imported multiple times. Producing duplicate formats.
* Fixed bug where IE would throw exception if selection was changed while the editor was hidden.
* Fixed so complex rules like .class:before doesn't get imported by default in the importcss plugin.
* Fixed so it's possible to remove images by setting the src attribute to a blank value.
* Fixed so the save_enablewhendirty setting in the save plugin is enabled by default.
* Fixed so block formats drop down for classic mode can be translated properly using language packs.
* Fixed so hr menu item and toolbar button gets the same translation string.
* Fixed so bullet list toolbar button gets the correct translation from language packs.
* Fixed issue with Chrome logging CSS warning about border styling for combo boxes.
* Fixed issue with Chrome logging warnings about deprecated keyLocation property.
* Fixed issue where custom_elements would not remove the some of the default rules when cloning rules from div and span.


## Version 4.0.4 - August 21, 2013

* Added new importcss plugin. Lets you auto import classes from CSS files similar to the 3.x behavior.
* Fixed bug where resize handles would be positioned incorrectly when inline element parent was using position: relative.
* Fixed bug where IE 8 would throw Unknown runtime error if the editor was placed within a P tag.
* Fixed bug where removing empty lists wouldn't produce blocks or brs where the old list was in the DOM.
* Fixed bug where IE 10 wouldn't properly initialize template dialog due to async loading issues.
* Fixed bug where autosave wouldn't properly display the warning about content not being saved due to isDirty changes.
* Fixed bug where it wouldn't be possible to type if a touchstart event was bound to the parent document.
* Fixed bug where code dialog in code plugin wouldn't wouldn't add a proper undo level.
* Fixed issue where resizing the editor in vertical mode would set the iframe width to a pixel value.
* Fixed issue with naming of insertdatetime settings. All are now prefixed with the plugin name.
* Fixed so an initial change event is fired when the user types the first character into the editor.
* Fixed so swf gets mapped to object element in media plugin. Enables embedding of flash with alternative poster.


## Version 4.0.3 - August 8, 2013

* Added new code_dialog_width/code_dialog_height options to control code dialog size.
* Added missing pastetext button that works the same way as the pastetext menu item.
* Added missing smaller browse button for the classical smaller toolbars.
* Fixed bug where input method would produce new lines when inserting contents to an empty editor.
* Fixed bug where pasting single indented list items from Word would cause a JS exception.
* Fixed bug where applying block formats inside list elements in inline mode would apply them to whole document.
* Fixed bug where link editing in inline mode would cause exception on IE/WebKit.
* Fixed bug where IE 10 wouldn't render the last button group properly in inline mode due to wrapping.
* Fixed bug where localStorage initialization would fail on Firefox/Chrome with disabled support.
* Fixed bug where image elements would get an __mce id when undo/redo:ing to a level with image changes.
* Fixed bug where too long template names wouldn't fit the listbox in template plugin.
* Fixed bug where alignment format options would be marked disabled when forced_root_block was set to false.
* Fixed bug where UI listboxes such as fontsize, fontfamily wouldn't update properly when switching editors in inline mode.
* Fixed bug where the formats select box would mark the editable container DIV as a applied format in inline mode.
* Fixed bug where IE 7/8 would scroll to empty editors when initialized.
* Fixed bug where IE 7/8 wouldn't display previews of format options.
* Fixed bug where UI states wasn't properly updated after code was changed in the code dialog.
* Fixed bug with setting contents in IE would select all contents within the editor.
* Fixed so the undoManages transact function disables any other undo levels from being added while within the transaction.
* Fixed so sub/sup elements gets removed when the Clear formatting action is executed.
* Fixed so text/javascript type value get removed by default from script elements to match the HTML5 spec.


## Version 4.0.2 - July 18, 2013

* Fixed bug where formatting using menus or toolbars wasn't possible on Opera 12.15.
* Fixed bug where IE 8 keyboard input would break after paste using the paste plugin.
* Fixed bug where IE 8 would throw an error when populating image size in image dialog.
* Fixed bug where image resizing wouldn't work properly on latest IE 10.0.9 version.
* Fixed bug where focus wasn't moved to the hovered menu button in a menubar container.
* Fixed bug where paste would produce an extra uneeded undo level on IE and Gecko.
* Fixed so anchors gets listed in the link dialog as they where in TinyMCE 3.x.
* Fixed so sub, sup and strike though gets passed through when pasting from Word.
* Fixed so Ctrl+P can be used to print the current document. Patch contributed by jashua212.


## Version 4.0.1 - June 26, 2013

* Added new paste_as_text config option to force paste as plaintext mode.
* Added new pastetext menu item that lets you toggle paste as plain text mode on/off.
* Added new insertdatetime_element option to insertdatetime plugin. Enables HTML5 time element support.
* Added new spellchecker_wordchar_pattern option to allow configuration of language specific characters.
* Added new marker to formats menu displaying the formats used at the current selection/caret location.
* Fixed bug where the position of the text color picker would be wrong if you switched to fullscreen.
* Fixed bug where the link plugin would ask to add the mailto: prefix multiple times.
* Fixed bug where list outdent operation could produce empty list elements on specific selections.
* Fixed bug where element path wouldn't properly select parent elements on IE.
* Fixed bug where IE would sometimes throw an exception when extrancting the current selection range.
* Fixed bug where line feeds wasn't properly rendered in source view on IE.
* Fixed bug where word count wouldn't be properly rendered on IE 7.
* Fixed bug where menubuttons/listboxes would have an incorrect height on IE 7.
* Fixed bug where browser spellchecking was enabled while editing inline on IE 10.
* Fixed bug where spellchecker wouldn't properly find non English words.
* Fixed bug where deactivating inline editor instances would force padding-top: 0 on page body.
* Fixed bug where jQuery would initialize editors multiple times since it didn't check if the editor already existed.
* Fixed bug where it wasn't possible to paste contents on IE 10 in modern UI mode when paste filtering was enabled.
* Fixed bug where tabfocus plugin wouldn't work properly on inline editor instances.
* Fixed bug where fullpage plugin would clear the existing HTML head if contents where inserted into the editor.
* Fixed bug where deleting all table rows/columns in a table would cause an exception to be thrown on IE.
* Fixed so color button panels gets toggled on/off when activated/deactivated.
* Fixed so format menu items that can't be applied to the current selection gets disabled.
* Fixed so the icon parameter for addButton isn't automatically filled if a button text is provided.
* Fixed so image size fields gets updated when selecting a new image in the image dialog.
* Fixed so it doesn't load any language pack if the language option is set to "en".
* Fixed so ctrl+shift+z works as an alternative redo shortcut to match a common Mac OS X shortcut.
* Fixed so it's not possible to drag/drop in images in Gecko by default when paste plugin is enabled.
* Fixed so format menu item texts gets translated using the specified language pack.
* Fixed so the image dialog title is the same as the insert/edit image button text.
* Fixed so paste as plain text produces BR:s in PRE block and when forced_root_block is disabled.


## Version 4.0 - June 13, 2013

* Added new insertdate_dateformat, insertdate_timeformat and insertdate_formats options to insertdatetime.
* Added new font_formats, fontsize_formats and block_formats options to configure fontselect, fontsizeselect and formatselect.
* Added new table_clone_elements option to table plugin. Enables you to specify what elements to clone when adding columns/rows.
* Added new auto detect logic for site and email urls in link plugin to match the logic found in 3.x.
* Added new getParams/setParams to WindowManager to make it easier to handle params to iframe based dialogs. Contributed by Ryan Demmer.
* Added new textcolor options that enables you to specify the colors you want to display. Contributed by Jennifer Arsenault.
* Added new external file support for link_list and image_list options. The file format is a simple JSON file.
* Added new "both" mode for the resize option. Enables resizing in both width and height.
* Added new paste_data_images option that allows you to enable/disable paste of data images.
* Added new fixed_toolbar_container option that allows you to add a fixed container for the inline toolbar.
* Fixed so font name, font size and block format select boxes gets updated with the current format.
* Fixed so the resizeTo/resizeBy methods for the theme are exposed as it as in 3.x.
* Fixed so the textcolor controls are splitbuttons as in 3.x. Patch contributed by toxalot/jashua212.
* Fixed bug where the theme content css wasn't loaded into the preview dialog.
* Fixed bug where the template description in template dialog wouldn't display the text correctly.
* Fixed bug where various UI elements wasn't properly removed when an editor instance was removed.
* Fixed bug where editing links in inline mode would fail on WebKit.
* Fixed bug where the pagebreak_separator option in the pagebreak plugin wasn't working properly.
* Fixed bug where the child panels of the float panel in inline mode wasn't properly placed.
* Fixed bug where the float panel children of windows wasn't position fixed.
* Fixed bug where the size of the ok button was hardcoded, caused issues with i18n.
* Fixed bug where single comment in editor would cause exceptions due to resolve path logic not detecting elements only.
* Fixed bug where switching alignment of tables in dialogs wouldn't properly remove existing alignments.
* Fixed bug where the table properties dialog would show columns/rows textboxes.
* Fixed bug where jQuery wasn't used instead of Sizzle in the jQuery version of TinyMCE.
* Fixed bug where setting resize option to false whouldn't properly render the word count.
* Fixed bug where table row type change would produce multiple table section elements.
* Fixed bug where table row type change on multiple rows would add them in incorrect order.
* Fixed bug where fullscreen plugin would maximize the editor on resize after toggling it off.
* Fixed bug where context menu would be position at an incorrect coordinate in inline mode.
* Fixed bug where inserting lists in inline mode on IE would produce errors since the body would be converted.
* Fixed bug where the body couldn't be styled properly in custom content_css files.
* Fixed bug where template plugins menu item would override the image menu item.
* Fixed bug where IE 7-8 would render the text inside inputs at the wrong vertical location.
* Fixed bug where IE configured to IE 7 compatibility mode wouldn't render the icons properly.
* Fixed bug where editor.focus wouldn't properly fire the focusin event on WebKit.
* Fixed bug where some keyboard shortcuts wouldn't work on IE 8.
* Fixed bug where the undo state wasn't updated until the end of a typing level.
* Fixed bug where keyboard shortcuts on Mac OS wasn't working correctly.
* Fixed bug where empty inline elements would be created when toggling formatting of in empty block.
* Fixed bug where applying styles on WebKit would fail in inline mode if the user released the mouse button outside the body.
* Fixed bug where the visual aids menu item wasn't selected if the editor was empty.
* Fixed so the isDirty/isNotDirty states gets updated to true/false on save() and change events.
* Fixed so skins have separate CSS files for inline and iframe mode.
* Fixed so menus and tool tips gets constrained to the current viewport.
* Fixed so an error is thrown if users load jQuery after the jQuery version of TinyMCE.
* Fixed so the filetype for media dialog passes out media instead of image as file type.
* Fixed so it's possible to disable the toolbar by setting it to false.
* Fixed so autoresize plugin isn't initialized when the editor is in inline mode.
* Fixed so the inline editing toolbar will be rendered below elements if it doesn't fit above it.


## Version 4.0b3 - May 15, 2013

* Added new optional advanced tab for image dialog with hspace, vspace, border and style.
* Added new change event that gets fired when undo levels are added to editor instances.
* Added new removed_menuitems option enables you to list menu items to remove from menus.
* Added new external_plugins option enables you to specify external locations for plugins.
* Added new language_url option enables you to specify an external location for the language pack.
* Added new table toolbar control that displays a menu for inserting/editing menus.
* Fixed bug where IE 10 wouldn't load files properly from cache.
* Fixed bug where image dialog wouldn't properly remove width/height if blanked.
* Fixed bug where all events wasn't properly unbound when editor instances where removed.
* Fixed bug where data- attributes wasn't working properly in the SaxParser.
* Fixed bug where Gecko wouldn't properly render broken images.
* Fixed bug where Gecko wouldn't produce the same error dialog on paste as other browsers.
* Fixed bug where is wasn't possible to prevent execCommands in beforeExecCommand event.
* Fixed bug where the fullpage_hide_in_source_view option wasn't working in the fullpage plugin.
* Fixed bug where the WindowManager close method wouldn't properly close the top most window.
* Fixed bug where it wasn't possible to paste in IE 10 due to JS exception.
* Fixed bug where tab key didn't move to the right child control in tabpanels.
* Fixed bug where enter inside a form would focus the first button like control in TinyMCE.
* Fixed bug where it would match scripts that looked like the tinymce base directory incorrectly.
* Fixed bug where the spellchecker wouldn't properly toggle off the spellcheck mode if no errors where found.
* Fixed bug in searchreplace plugin where it would remove all spans instead of the marker spans.
* Fixed issue where selector wouldn't disable existing mode setting.
* Fixed so it's easier to configure the menu and menubar.
* Fixed so bodyId/bodyClass is applied to preview as it's done to the editor iframe.


## Version 4.0b2 - April 24, 2013

* Added new rel_list option to link plugin. Enables you to specify values for a rel drop down.
* Added new target_list option to link plugin. Enables you to add to or disable the link targets.
* Added new link_list option to link plugin. Enables you to specify a list of links to pick from.
* Added new image_list option to image pluigin. Enables you to specify a list of images to pick from.
* Added new textcolor plugin. This plugin holds the text color and text background color buttons.
* Fixed bug where alignment of images wasn't working properly on Firefox.
* Fixed bug where IE 8 would throw error when inserting a table.
* Fixed bug where IE 8 wouldn't render the element path properly.
* Fixed bug where old IE versions would render a red focus border.
* Fixed bug where old IE versions would render a frameborder for iframes.
* Fixed bug where WebKit wouldn't properly open the cell properties dialog on edge case selection.
* Fixed bug where charmap wouldn't correctly render all characters in grid.
* Fixed bug where link dialog wouldn't update the link text properly.
* Fixed bug where the focus/blur states on inline editors wasn't handled correctly on IE.
* Fixed bug where IE would throw "unknown error" exception sometimes in ForceBlocks logic.
* Fixed bug where IE would't properly render disabled buttons in button groups.
* Fixed bug where tab key wouldn't properly move to next input field in dialogs.
* Fixed bug where resize handles for tables and images would appear at wrong positions on IE 8.
* Fixed bug where dialogs would produce stack overflow if title was wider than content.
* Fixed bug with table cell/row menu items being enabled even if no cell was selected.
* Fixed so the text to display is after the URL field in the link dialog.
* Fixed so the width setting applies to the editor panel in modern theme.
* Fixed so it's easier to make custom icons for buttons using plain old images.


## Version 4.0b1 - April 11, 2013

* Added new node.js based build process used uglify, amdlc, jake etc.
* Added new package.json to enable easy installation of dependent npm packages used for building.
* Added new link, image, charmap, anchor, code, hr plugins since these are now moved out of the theme.
* Rewrote all plugins and themes from scratch so they match the new UI framework.
* Replaced all events to use the more common <target>.on/off(<event>) methods instead of <target>.<event>.add/remove.
* Rewrote the TinyMCE core to use AMD style modules. Gets compiled to an inline library using amdlc.
* Rewrote all core logic to pass jshint rules. Each file has specific jshint rules.
* Removed all IE6 specific logic since 4.x will no longer support such an old browser.
* Reworked the file names and directory structure of the whole project to be more similar to other JS projects.
* Replaced tinymce.util.Cookie with tinymce.util.LocalStorage. Fallback to userData for IE 7 native localStorage for the rest.
* Replaced the old 3.x UI with a new modern UI framework.
* Removed "simple" theme and added new "modern" theme.
* Removed advhr, advimage, advlink, iespell, inlinepopups, xhtmlxtras and style plugins.
* Updated Sizzle to the latest version.

{% endcapture %}

{{ changelog | pretty_changelog }}
