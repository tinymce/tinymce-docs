---
layout: default
title: Editor Command Identifiers
keywords: EditorCommands EditorCommand
---

Here is a list of the currently exposed editor commands. All these commands are provided by tinymce and not by the browsers internal commands. These commands can be executed using the [execCommand](http://www.tinymce.com/wiki.php/api4:method.tinymce.Editor.execCommand) function.

| Command                | Core/Plugin      | Description   |
|------------------------|------------------|---------------|
| Bold                   | Core             | Toggles bold formatting to selection. |
| Italic                 | Core             | Toggles italic formatting to selection. |
| Underline              | Core             | Toggles underline formatting to selection. |
| Strikethrough          | Core             | Toggles strikethough formatting to selection. |
| Superscript            | Core             | Toggles superscript formatting to selection. |
| Subscript              | Core             | Toggles subscript formatting to selection. |
| Cut                    | Core             | Cuts the selected contents and puts in into users clipboard. |
| Copy                   | Core             | Copies the selected contents and puts in into users clipboard. |
| Paste                  | Core             | Pastes the current clipboard contents into the editor. |
| Unlink                 | Core             | Removes any links from the current selection. |
| JustifyLeft            | Core             | Left aligns the current text block/image. |
| JustifyCenter          | Core             | Center aligns the current text block/image. |
| JustifyRight           | Core             | Right aligns the current text block/image. |
| JustifyFull            | Core             | Full aligns the current text block/image. |
| JustifyNone            | Core             | Removes any alignment to the selected text. |
| InsertUnorderedList    | Core             | Inserts an unordered list into the editor. |
| InsertOrderedList      | Core             | Inserts and ordered list into the editor. |
| ForeColor              | Core             | Changes the text color of the text. The value passed in should be the color. |
| HiliteColor            | Core             | Changes the background color of the text. The value passed in should be the color. |
| FontName               | Core             | Font name to apply to the text. The value passed in should be the font family name. |
| FontSize               | Core             | Font size of the text. The value passed in should be the font size 1-7. |
| RemoveFormat           | Core             | Removes any formats from the current selection. |
| mceBlockQuote          | Core             | Wraps the selected text blocks into a block quote. |
| FormatBlock            | Core             | Changes the format of the current block. The value passed in should be the block name for example H1 or P. |
| mceInsertContent       | Core             | Inserts contents at the current selection. The value passed in should be the contents to be insterted. |
| mceToggleFormat        | Core             | Toggles a specified format by name. The value is the name of the format to toggle. |
| mceSetContent          | Core             | Sets the contents of the editor. The value is the contents to set as the editor contents. |
| Indent                 | Core             | Indents the current selection. |
| Outdent                | Core             | Outdents the current selection. |
| InsertHorizontalRule   | Core             | Inserts a horizontal ruler. |
| mceToggleVisualAid     | Core             | Toggles the visual aids for tables without borders etc. |
| mceInsertLink          | Core             | Inserts a link at the current selection. The value is the url to add to the link(s). |
| selectAll              | Core             | Selects all contents in the editor. |
| delete                 | Core             | Deletes the current selection from the editor. |
| mceNewDocument         | Core             | Removes all contents of the editor. |
| Undo                   | Core             | Undoes the last change to the editor. |
| Redo                   | Core             | Redoes the last change to the editor. |
| mceAutoResize          | [autoresize]     | Auto resizes the editor to the contents. |
| mceShowCharmap         | [charmap]        | Opens the charmap dialog. |
| mceCodeEditor          | [code]           | Opens the code editor dialog. |
| mceDirectionLTR        | [directionality] | Changes the directionality to LTR. |
| mceDirectionRTL        | [directionality] | Changes the directionality to RTL. |
| mceFullPageProperties  | [fullpage]       | Opens the fullpage dialog. |
| mceFullscreen          | [fullscreen]     | Toggles fullscreen mode. |
| mceImage               | [image]          | Opens the insert image dialog. |
| mceInsertDate          | [insertdatetime] | Inserts the current date as a human readable string. |
| mceInsertTime          | [insertdatetime] | Insert the current time as a human readable string. |
| mceInsertDefinitionList| [lists]          | Creates a definition list. |
| mceNonBreaking         | [nonbreaking]    | Inserts a non breaking space. |
| mcePageBreak           | [pagebreak]      | Inserts a page break. |
| mcePreview             | [preview]        | Displays a preview of the editor contents. |
| mcePrint               | [print]          | Prints the current page. |
| mceSave                | [save]           | Saves the current editor contents. |
| SearchReplace          | [searchreplace]  | Opens the search/replace dialog. |
| mceSpellcheck          | [spellchecker]   | Toggles spellchecking on/off. |
| mceInsertTemplate      | [template]       | Inserts a template the value should be the template HTML to process and insert. |
| mceVisualBlocks        | [visualblocks]   | Toggles visual blocks on/off. |
| mceVisualChars         | [visualchars]    | Toggles visual characters on/off. |
| mceMedia               | [media]          | Opens the insert/edit media dialog. |
| mceAnchor              | [anchor]         | Opens the insert/edit anchor edialog. |
| mceTableSplitCells     | [table]          | Splits the current merge table cell. |
| mceTableMergeCells     | [table]          | Merges the selected cells or opens a dialog if there is no cell selection. |
| mceTableInsertRowBefore| [table]          | Inserts a row before the current row. |
| mceTableInsertRowAfter | [table]          | Inserts a row after the current row. |
| mceTableInsertColBefore| [table]          | Inserts a column before the current column. |
| mceTableInsertColAfter | [table]          | Inserts a column after the current column. |
| mceTableDeleteCol      | [table]          | Deletes the current column. |
| mceTableDeleteRow      | [table]          | Deletes the current row. |
| mceTableCutRow         | [table]          | Cuts the current row into table clipboard. |
| mceTableCopyRow        | [table]          | Copies the current row into table clipboard. |
| mceTablePasteRowBefore | [table]          | Paste the clipboard row before the current row. |
| mceTablePasteRowAfter  | [table]          | Paste the clipboard row after the current row. |
| mceTableDelete         | [table]          | Deletes the current table. |
| mceInsertTable         | [table]          | Opens the insert table dialog. |
| mceTableRowProps       | [table]          | Opens the table row properties dialog. |
| mceTableCellProps      | [table]          | Opens the table cell properties dialog. |
| mceEditImage           | [imagetools]     | Opens the edit image dialog. |
