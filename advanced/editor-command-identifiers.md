---
layout: default
title: Editor command identifiers
title_nav: Editor command identifiers
description_short: Complete list of editor commands.
description: The complete list of exposed editor commands.
keywords: editorcommands editorcommand execcommand Bold Italic Underline Strikethrough Superscript Subscript Cut Copy Paste Unlink JustifyLeft JustifyCenter JustifyRight JustifyFull JustifyNone InsertUnorderedList InsertOrderedList ForeColor HiliteColor FontName FontSize RemoveFormat mceBlockQuote FormatBlock mceInsertContent mceToggleFormat mceSetContent Indent Outdent InsertHorizontalRule mceToggleVisualAid mceInsertLink selectAll delete mceNewDocument Undo Redo mceAutoResize mceShowCharmap mceCodeEditor mceDirectionLTR mceDirectionRTL mceFullPageProperties mceFullscreen mceImage mceInsertDate mceInsertTime mceInsertDefinitionList mceNonBreaking mcePageBreak mcePreview mcePrint mceSave SearchReplace mceSpellcheck mceInsertTemplate mceVisualBlocks mceVisualChars mceMedia mceAnchor mceTableSplitCells mceTableMergeCells mceTableInsertRowBefore mceTableInsertRowAfter mceTableInsertColBefore mceTableInsertColAfter mceTableDeleteCol mceTableDeleteRow mceTableCutRow mceTableCopyRow mceTablePasteRowBefore mceTablePasteRowAfter mceTableDelete mceInsertTable mceTableRowProps mceTableCellProps mceEditImage
---


Here is a list of exposed editor commands that `tinymce` provides. Use the [execCommand]({{ site.baseurl }}/api/tinymce/tinymce.editorcommands/#execcommand) function to execute the commands.


| Command     | Core/Plugin      | Description   |
|-------------|------------------|---------------|
| Bold | Core  | Toggles bold formatting to selection. |
| Italic | Core  | Toggles italic formatting to selection. |
| Underline | Core  | Toggles underline formatting to selection. |
| Strikethrough | Core  | Toggles strikethough formatting to selection. |
| Superscript | Core  | Toggles superscript formatting to selection. |
| Subscript | Core  | Toggles subscript formatting to selection. |
| Cut | Core  | Cuts the selected contents and puts in into users clipboard. |
| Copy | Core  | Copies the selected contents and puts in into users clipboard. |
| Paste | Core  | Pastes the current clipboard contents into the editor. |
| Unlink | Core  | Removes any links from the current selection. |
| JustifyLeft | Core  | Left aligns the current text block/image. |
| JustifyCenter | Core  | Center aligns the current text block/image. |
| JustifyRight | Core  | Right aligns the current text block/image. |
| JustifyFull | Core  | Full aligns the current text block/image. |
| JustifyNone | Core  | Removes any alignment to the selected text. |
| InsertUnorderedList | Core  | Inserts an unordered list into the editor. |
| InsertOrderedList | Core  | Inserts and ordered list into the editor. |
| ForeColor | Core | Changes the text color of the text. The value passed in should be the color. |
| HiliteColor | Core | Changes the background color of the text. The value passed in should be the color. |
| FontName | Core | Font name to apply to the text. The value passed in should be the font family name. |
| FontSize | Core | Font size of the text. The value passed in should be the font size 1-7. |
| RemoveFormat | Core | Removes any formats from the current selection. |
| mceBlockQuote | Core | Wraps the selected text blocks into a block quote. |
| FormatBlock | Core  | Changes the format of the current block. The value passed in should be the block name for example H1 or P. |
| mceInsertContent | Core  | Inserts contents at the current selection. The value passed in should be the contents to be insterted. |
| mceToggleFormat | Core  | Toggles a specified format by name. The value is the name of the format to toggle. |
| mceSetContent | Core  | Sets the contents of the editor. The value is the contents to set as the editor contents. |
| Indent | Core  | Indents the current selection. |
| Outdent | Core  | Outdents the current selection. |
| InsertHorizontalRule | Core  | Inserts a horizontal ruler. |
| mceToggleVisualAid | Core  | Toggles the visual aids for tables without borders etc. |
| mceInsertLink | Core  | Inserts a link at the current selection. The value is the URL to add to the link(s). |
| selectAll | Core  | Selects all contents in the editor. |
| delete | Core  | Deletes the current selection from the editor. |
| mceNewDocument | Core  | Removes all contents of the editor. |
| Undo | Core  | To undo the last change to the editor. |
| Redo | Core  | To redo the last change to the editor. |
| mceAutoResize | [autoresize]({{ site.baseurl }}/plugins/autoresize/) | Auto resizes the editor to the contents. |
| mceShowCharmap | [charmap]({{ site.baseurl }}/plugins/charmap/) | Opens the character map dialog. |
| mceCodeEditor | [code]({{ site.baseurl }}/plugins/code/) | Opens the code editor dialog. |
| mceDirectionLTR | [directionality]({{ site.baseurl }}/plugins/directionality/) | Changes the directionality to LTR. |
| mceDirectionRTL | [directionality]({{ site.baseurl }}/plugins/directionality/) | Changes the directionality to RTL. |
| mceFullPageProperties | [fullpage]({{ site.baseurl }}/plugins/fullpage/) | Opens the fullpage dialog. |
| mceFullscreen | [fullscreen]({{ site.baseurl }}/plugins/fullscreen/) | Toggles fullscreen mode. |
| mceImage | [image]({{ site.baseurl }}/plugins/image/) | Opens the insert image dialog. |
| mceEditImage | [imagetools]({{ site.baseurl }}/plugins/imagetools) | Opens the edit image dialog. |
| mceImageRotateRight | [imagetools]({{ site.baseurl }}/plugins/imagetools) | Rotates selected image 90 degrees clockwise. |
| mceImageRotateLeft | [imagetools]({{ site.baseurl }}/plugins/imagetools) | Rotates selected image 90 degrees counter clockwise. |
| mceImageFlipVertical | [imagetools]({{ site.baseurl }}/plugins/imagetools) | Flips selected image vertically. |
| mceImageFlipHorizontal | [imagetools]({{ site.baseurl }}/plugins/imagetools) | Flips selected image horizontally. |
| mceInsertDate | [insertdatetime]({{ site.baseurl }}/plugins/insertdatetime/) | Inserts the current date as a human readable string. |
| mceInsertTime | [insertdatetime]({{ site.baseurl }}/plugins/insertdatetime/) | Insert the current time as a human readable string. |
| mceInsertDefinitionList| [lists]({{ site.baseurl }}/plugins/lists/) | Creates a definition list. |
| mceNonBreaking | [nonbreaking]({{ site.baseurl }}/plugins/nonbreaking/) | Inserts a non breaking space. |
| mcePageBreak | [pagebreak]({{ site.baseurl }}/plugins/pagebreak/) | Inserts a page break. |
| mcePreview | [preview]({{ site.baseurl }}/plugins/preview/) | Displays a preview of the editor contents. |
| mcePrint | [print]({{ site.baseurl }}/plugins/print/) | Prints the current page. |
| mceSave | [save]({{ site.baseurl }}/plugins/save/) | Saves the current editor contents. |
| SearchReplace | [searchreplace]({{ site.baseurl }}/plugins/searchreplace/) | Opens the search/replace dialog. |
| mceSpellcheck | [spellchecker]({{ site.baseurl }}/plugins/spellchecker/) | Toggles spellchecking on/off. |
| mceInsertTemplate | [template]({{ site.baseurl }}/plugins/template/) | Inserts a template the value should be the template HTML to process and insert. |
| mceVisualBlocks | [visualblocks]({{ site.baseurl }}/plugins/visualblocks/) | Toggles visual blocks on/off. |
| mceVisualChars | [visualchars]({{ site.baseurl }}/plugins/visualchars/) | Toggles visual characters on/off. |
| mceMedia | [media]({{ site.baseurl }}/plugins/media/) | Opens the insert/edit media dialog. |
| mceAnchor | [anchor]({{ site.baseurl }}/plugins/anchor/) | Opens the insert/edit anchor dialog. |
| mceTableSplitCells | [table]({{ site.baseurl }}/plugins/table/) | Splits the current merge table cell. |
| mceTableMergeCells | [table]({{ site.baseurl }}/plugins/table/) | Merges the selected cells or opens a dialog if there is no cell selection. |
| mceTableInsertRowBefore| [table]({{ site.baseurl }}/plugins/table) | Inserts a row before the current row. |
| mceTableInsertRowAfter | [table]({{ site.baseurl }}/plugins/table) | Inserts a row after the current row. |
| mceTableInsertColBefore| [table]({{ site.baseurl }}/plugins/table) | Inserts a column before the current column. |
| mceTableInsertColAfter | [table]({{ site.baseurl }}/plugins/table) | Inserts a column after the current column. |
| mceTableDeleteCol | [table]({{ site.baseurl }}/plugins/table) | Deletes the current column. |
| mceTableDeleteRow | [table]({{ site.baseurl }}/plugins/table) | Deletes the current row. |
| mceTableCutRow | [table]({{ site.baseurl }}/plugins/table) | Cuts the current row into table clipboard. |
| mceTableCopyRow | [table]({{ site.baseurl }}/plugins/table) | Copies the current row into table clipboard. |
| mceTablePasteRowBefore | [table]({{ site.baseurl }}/plugins/table) | Pastes the clipboard row before the current row. |
| mceTablePasteRowAfter  | [table]({{ site.baseurl }}/plugins/table) | Pastes the clipboard row after the current row. |
| mceTableDelete | [table]({{ site.baseurl }}/plugins/table) | Deletes the current table. |
| mceInsertTable | [table]({{ site.baseurl }}/plugins/table) | Opens the insert table dialog. |
| mceTableRowProps | [table]({{ site.baseurl }}/plugins/table) | Opens the table row properties dialog. |
| mceTableCellProps | [table]({{ site.baseurl }}/plugins/table) | Opens the table cell properties dialog. |
| mceInsertToc | [toc]({{ site.baseurl }}/plugins/toc) | Inserts a Table of Contents into the editor. |
| mceUpdateToc | [toc]({{ site.baseurl }}/plugins/toc) | Updates the Table of Contents, if found in the editor. |
