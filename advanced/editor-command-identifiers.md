---
layout: default
title: Editor command identifiers
title_nav: Editor command identifiers
description_short: Complete list of editor commands.
description: The complete list of exposed editor commands.
keywords: editorcommands editorcommand execcommand Bold Italic Underline Strikethrough Superscript Subscript Cut Copy Paste Unlink JustifyLeft JustifyCenter JustifyRight JustifyFull JustifyNone InsertUnorderedList InsertOrderedList ForeColor HiliteColor FontName FontSize RemoveFormat mceBlockQuote FormatBlock mceInsertContent mceToggleFormat mceSetContent Indent Outdent InsertHorizontalRule mceToggleVisualAid mceInsertLink selectAll delete mceNewDocument Undo Redo mceAutoResize mceShowCharmap mceCodeEditor mceDirectionLTR mceDirectionRTL mceFullPageProperties mceFullscreen mceImage mceInsertDate mceInsertTime mceInsertDefinitionList mceNonBreaking mcePageBreak mcePreview mcePrint mceSave SearchReplace mceSpellcheck mceInsertTemplate mceVisualBlocks mceVisualChars mceMedia mceAnchor mceTableSplitCells mceTableMergeCells mceTableInsertRowBefore mceTableInsertRowAfter mceTableInsertColBefore mceTableInsertColAfter mceTableDeleteCol mceTableDeleteRow mceTableCutRow mceTableCopyRow mceTablePasteRowBefore mceTablePasteRowAfter mceTableDelete mceInsertTable mceTableRowProps mceTableCellProps mceEditImage mceAddEditor mceRemoveEditor mceToggleEditor
---

The following tables show the existing editor commands. These commands are provided by `tinymce` and not by the browser's internal commands. These commands can be executed using the [execCommand]({{ site.baseurl }}/api/tinymce/tinymce.editorcommands/#execcommand) function.

## Editor Management Commands

The following commands are used to manage editor instances.

For example:

```js
tinymce.execCommand('mceAddEditor', false, '<editor_id>');
tinymce.execCommand('mceRemoveEditor', false, '<editor_id>');
tinymce.execCommand('mceToggleEditor', false, '<editor_id>');
```

| Command         | Description                                                                                                                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mceAddEditor    | Converts the specified HTML or DOM element into an editor instance with the specified ID.                                                                                                                                                                               |
| mceRemoveEditor | Removes an editor instance with the specified ID.                                                                                                                                                                                                                       |
| mceToggleEditor | Runs mceAddEditor if an editor is not detected for the specified ID, otherwise it runs either [hide]({{ site.baseurl }}/api/tinymce/tinymce.editor/#hide) if the editor is visible or [show]({{ site.baseurl }}/api/tinymce/tinymce.editor/#show) if it is not visible. |

## Listing core and plugin editor commands

To retrieve a list of avaliable commands from the active editor, run the following command from the browser console:

```js
tinymce.activeEditor.editorCommands.commands.exec;
```

## Core Editor commands

The commands on the following table are provided by the {{site.productname}} editor and do not require any plugins to be enabled.

| Command              | Description                                                                                                                                                                                                                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bold                 | Toggles bold formatting to selection.                                                                                                                                                                                                                                                       |
| Italic               | Toggles italic formatting to selection.                                                                                                                                                                                                                                                     |
| Underline            | Toggles underline formatting to selection.                                                                                                                                                                                                                                                  |
| Strikethrough        | Toggles strikethough formatting to selection.                                                                                                                                                                                                                                               |
| Superscript          | Toggles superscript formatting to selection.                                                                                                                                                                                                                                                |
| Subscript            | Toggles subscript formatting to selection.                                                                                                                                                                                                                                                  |
| Cut                  | Cuts the selected contents and puts in into users clipboard.                                                                                                                                                                                                                                |
| Copy                 | Copies the selected contents and puts in into users clipboard.                                                                                                                                                                                                                              |
| Paste                | Pastes the current clipboard contents into the editor.                                                                                                                                                                                                                                      |
| mceInsertLink        | Inserts a link at the current selection. The value is the URL to add to the link(s).                                                                                                                                                                                                        |
| Unlink               | Removes any links from the current selection.                                                                                                                                                                                                                                               |
| JustifyLeft          | Left aligns the current text block/image.                                                                                                                                                                                                                                                   |
| JustifyCenter        | Center aligns the current text block/image.                                                                                                                                                                                                                                                 |
| JustifyRight         | Right aligns the current text block/image.                                                                                                                                                                                                                                                  |
| JustifyFull          | Full aligns the current text block/image.                                                                                                                                                                                                                                                   |
| JustifyNone          | Removes any alignment to the selected text.                                                                                                                                                                                                                                                 |
| ForeColor            | Changes the text color of the text. The value passed in should be the color.                                                                                                                                                                                                                |
| HiliteColor          | Changes the background color of the text. The value passed in should be the color.                                                                                                                                                                                                          |
| FontName             | Font name to apply to the text. The value passed in should be the font family name.                                                                                                                                                                                                         |
| FontSize             | Font size of the text. The value passed in should be a valid CSS font size.                                                                                                                                                                                                                 |
| mceApplyTextcolor    | Applies text color or background color to the current selection. Requires an argument of either `'hilitecolor'` or `'forecolor'`, and the value of the color.                                                                                                                               |
| mceRemoveTextcolor   | Removes the text color or background color from the current selection. Requires an argument of either `'hilitecolor'` or `'forecolor'`.                                                                                                                                                     |
| RemoveFormat         | Removes any formats from the current selection.                                                                                                                                                                                                                                             |
| mceBlockQuote        | Wraps the selected text blocks into a block quote.                                                                                                                                                                                                                                          |
| FormatBlock          | Toggles the format of the selected block. The value passed in should be the block name. If no format is specified, the paragraph (<`p`>) format will be toggled. For a list of options, see: [FormatBlock and mceToggleFormat format options](#formatblockandmcetoggleformatformatoptions). |
| mceInsertContent     | Inserts contents at the current selection. The value passed in should be the contents to be inserted.                                                                                                                                                                                       |
| mceReplaceContent    | Replaces the current selection. The value passed in should be the new content.                                                                                                                                                                                                              |
| mceSetContent        | Sets the contents of the editor. The value is the contents to set as the editor contents.                                                                                                                                                                                                   |
| mceToggleFormat      | Toggles a specified format by name. The value is the name of the format to toggle. For a list of options, see: [FormatBlock and mceToggleFormat format options](#formatblockandmcetoggleformatformatoptions).                                                                               |
| ToggleSidebar        | Closes the currrent sidebar, or toogles the sidebar if the sidebar name is provided as a value (_`<sidebar-name>`_).                                                                                                                                                                        |
| Indent               | Indents the current selection.                                                                                                                                                                                                                                                              |
| Outdent              | Outdents the current selection.                                                                                                                                                                                                                                                             |
| InsertHorizontalRule | Inserts a horizontal rule at the cursor location or inplace of the current selection.                                                                                                                                                                                                       |
| InsertLineBreak      | Adds a line break `<br/>` at the current cursor or selection.                                                                                                                                                                                                                               |
| mceInsertNewLine     | Adds a new line at the current cursor or selection, such as splitting the current paragraph element.                                                                                                                                                                                        |
| mceInsertRawHTML     | Inserts the RAW HTML passed as a value, overwriting the current selection or at the cursor position. **Warning**: This command allows dangerous `<script>` elements to be added to and executed in the editor.                                                                              |
| mceToggleVisualAid   | Toggles the visual aids for: tables without borders and anchors.                                                                                                                                                                                                                            |
| SelectAll            | Selects all content in the editor.                                                                                                                                                                                                                                                          |
| Delete               | Deletes the current selection from the editor.                                                                                                                                                                                                                                              |
| ForwardDelete        | Deletes the current selection or the character to the right of the cursor for a collapsed selection.                                                                                                                                                                                        |
| mceNewDocument       | Removes all contents of the editor.                                                                                                                                                                                                                                                         |
| Redo                 | Redoes the last change to the editor.                                                                                                                                                                                                                                                       |
| Undo                 | Undoes the last change to the editor.                                                                                                                                                                                                                                                       |
| mceAddUndoLevel      | Adds an undo level.                                                                                                                                                                                                                                                                         |
| mceEndUndoLevel      | Adds an undo level.                                                                                                                                                                                                                                                                         |
| mceCleanup           | Copies the current editor content and sets the content using the copy.                                                                                                                                                                                                                      |
| mceSelectNode        | Selects a node in the editor. The target node is passed as the value (_`<DOM_node>`_).                                                                                                                                                                                                      |
| mceSelectNodeDepth   | Selects the parent DOM node 'n' levels above the current node.                                                                                                                                                                                                                              |
| mceRemoveNode        | Removes the current node or the target node passed as the value (_`<DOM_node>`_).                                                                                                                                                                                                           |

**Examples**

```js
tinymce.activeEditor.execCommand('Bold')
tinymce.activeEditor.execCommand('Italic')
tinymce.activeEditor.execCommand('Underline')
tinymce.activeEditor.execCommand('Strikethrough')
tinymce.activeEditor.execCommand('Superscript')
tinymce.activeEditor.execCommand('Subscript')
tinymce.activeEditor.execCommand('Cut')
tinymce.activeEditor.execCommand('Copy')
tinymce.activeEditor.execCommand('Paste')
tinymce.activeEditor.execCommand('mceInsertLink' false, 'https://www.tiny.cloud')
tinymce.activeEditor.execCommand('Unlink')
tinymce.activeEditor.execCommand('JustifyLeft')
tinymce.activeEditor.execCommand('JustifyCenter')
tinymce.activeEditor.execCommand('JustifyRight')
tinymce.activeEditor.execCommand('JustifyFull')
tinymce.activeEditor.execCommand('JustifyNone')
tinymce.activeEditor.execCommand('ForeColor', false, '#FF0000')
tinymce.activeEditor.execCommand('HiliteColor', false, '#FF0000')
tinymce.activeEditor.execCommand('FontName', false, 'courier new')
tinymce.activeEditor.execCommand('FontSize', false, '30px')
tinymce.activeEditor.execCommand('mceApplyTextcolor', 'hilitecolor', '#FF0000')
tinymce.activeEditor.execCommand('mceRemoveTextcolor', 'hilitecolor')
tinymce.activeEditor.execCommand('RemoveFormat')
tinymce.activeEditor.execCommand('mceBlockQuote')
tinymce.activeEditor.execCommand('FormatBlock', false, 'bold')
tinymce.activeEditor.execCommand('mceInsertContent', false, 'My new content')
tinymce.activeEditor.execCommand('mceReplaceContent', false, 'My replacement content')
tinymce.activeEditor.execCommand('mceSetContent', false, 'My content')
tinymce.activeEditor.execCommand('mceToggleFormat', false, 'bold')
tinymce.activeEditor.execCommand('ToggleSidebar')  /* OR */
tinymce.activeEditor.execCommand('ToggleSidebar', false, '<sidebar-name>')
tinymce.activeEditor.execCommand('Indent')
tinymce.activeEditor.execCommand('Outdent')
tinymce.activeEditor.execCommand('InsertHorizontalRule');
tinymce.activeEditor.execCommand('InsertLineBreak')
tinymce.activeEditor.execCommand('mceInsertNewLine')
tinymce.activeEditor.execCommand('mceInsertRawHTML', false, '<p>Hello, World!</p>')
tinymce.activeEditor.execCommand('mceToggleVisualAid')
tinymce.activeEditor.execCommand('SelectAll')
tinymce.activeEditor.execCommand('Delete')
tinymce.activeEditor.execCommand('ForwardDelete')
tinymce.activeEditor.execCommand('mceNewDocument')
tinymce.activeEditor.execCommand('Redo')
tinymce.activeEditor.execCommand('Undo')
tinymce.activeEditor.execCommand('mceAddUndoLevel')
tinymce.activeEditor.execCommand('mceEndUndoLevel')
tinymce.activeEditor.execCommand('mceCleanup')
tinymce.activeEditor.execCommand('mceSelectNode', false, '<DOM_node>')
tinymce.activeEditor.execCommand('mceSelectNodeDepth', false, 2) // For two nodes up.
tinymce.activeEditor.execCommand('mceRemoveNode') /* OR */
tinymce.activeEditor.execCommand('mceRemoveNode', false, '<DOM_node>')
```

### FormatBlock and mceToggleFormat format options

The following options can be used with the `FormatBlock` and `mceToggleFormat` commands.

**General format options**

The following options will work on most content.

| Format option  | Description                                                                                                                         |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| alignleft      | Toggles left alignment of the selected content.                                                                                     |
| aligncenter    | Toggles center alignment of the selected content.                                                                                   |
| alignright     | Toggles right alignment of the selected content.                                                                                    |
| alignjustify   | Toggles 'justified' alignment of the selected content.                                                                              |
| bold           | Toggles bold on the selected content.                                                                                               |
| italic         | Toggles italic on the selected content.                                                                                             |
| underline      | Toggles an underline on the selected content.                                                                                       |
| strikethrough  | Toggles strikethrough on the selected content.                                                                                      |
| blockquote     | Toggles a blockquote on the selected content.                                                                                       |
| subscript      | Toggles subscript on the selected content.                                                                                          |
| superscript    | Toggles superscripts on the selected content.                                                                                       |
| code           | Toggles a code (`<code>`) block on the selected content.                                                                            |
| p              | Toggles a paragraph (`<p>`) block on the selected content.                                                                          |
| h1             | Toggles a level 1 heading (`<h1>`) block on the selected content.                                                                   |
| h2             | Toggles a level 2 heading (`<h2>`) block on the selected content.                                                                   |
| h3             | Toggles a level 3 heading (`<h3>`) block on the selected content.                                                                   |
| h4             | Toggles a level 4 heading (`<h4>`) block on the selected content.                                                                   |
| h5             | Toggles a level 5 heading (`<h5>`) block on the selected content.                                                                   |
| h6             | Toggles a level 6 heading (`<h6>`) block on the selected content.                                                                   |
| div            | Toggles a division (`div>`) block on the selected content.                                                                          |
| address        | Toggles an address (`<address>`) block on the selected content.                                                                     |
| pre            | Toggles a preformated (`<pre>`) block on the selected content.                                                                      |
| samp           | Toggles a sample (`<samp>`) block on the selected content.                                                                          |
| forecolor      | Toggles a highlight color on the selected content. For example: `execCommand('mceToggleFormat', 'forecolor', '#FF0000')`            |
| hilitecolor    | Toggles a text color on the selected content. For example: `execCommand('mceToggleFormat', 'hilitecolor', '#FF0000')`               |
| fontname       | Toggles the specified font on the selected content. For example: `execCommand('mceToggleFormat', 'fontname', 'comic sans')`         |
| fontsize       | Toggles the specified font size on the selected content. For example: `execCommand('mceToggleFormat', 'fontsize', '30px')`          |
| fontsize_class | Toggles the specified font size (1-7) on the selected content. For example: `execCommand('mceToggleFormat', 'fontsize_class', '2')` |

**Definition list related format options**

The following options will work within definition lists (`<dl>`).

| Format option | Description                                                        |
| ------------- | ------------------------------------------------------------------ |
| dt            | Toggles a definition title (`<dt>`) block on the selected content. |
| dd            | Toggles a definition data (`<dd>`) block on the selected content.  |

**Link related format options**

The following option will work on links (`<a>`).

| Format option | Description                                           |
| ------------- | ----------------------------------------------------- |
| link          | Toggles a link (`<a>`) block on the selected content. |

**Table related format options**

The following options will work within tables on `<td>` and `<th>` elements.

| Format option | Description                                                      |
| ------------- | ---------------------------------------------------------------- |
| valigntop     | Toggles alignment of the cell content to the top of the cell.    |
| valignmiddle  | Toggles alignment of the cell content to the middle of the cell. |
| valignbottom  | Toggles alignment of the cell content to the bottom of the cell. |

## Plugin Commands

Commands are available for the following plugins:

- [Advanced Code](#advancedcode)
- [Advanced Lists](#advancedlists)
- [Advanced Tables](#advancedtables)
- [Anchor](#anchor)
- [Autoresize](#autoresize)
- [Case Change](#casechange)
- [Character Map](#charactermap)
- [Code](#code)
- [Code Sample](#codesample)
- [Comments](#comments)
- [Directionality](#directionality)
- [Format Painter](#formatpainter)
- [Full Page](#fullpage)
- [Full Screen](#fullscreen)
- [Help](#help)
- [Image](#image)
- [Image Tools](#imagetools)
- [Insert Date/Time](#insertdatetime)
- [Link](#link)
- [Lists](#lists)
- [Media](#media)
- [Nonbreaking Space](#nonbreakingspace)
- [Page Break](#pagebreak)
- [Paste](#pasteorpowerpaste)
- [Permanent Pen](#permanentpen)
- [PowerPaste](#powerpaste)
- [Preview](#preview)
- [Print](#print)
- [Save](#save)
- [Search and Replace](#searchandreplace)
- [Spell Checker](#spellchecker)
- [Table](#table)
- [Template](#template)
- [Table of Contents](#tableofcontents)
- [Visual Blocks](#visualblocks)
- [Visual Characters](#visualcharacters)

### Advanced Code

The following command requires the [Advanced Code (`advcode`)]({{ site.baseurl }}/plugins/advcode/) plugin.

{% include commands/code-cmds.md %}

### Advanced Lists

The following commands require the [Advanced Lists (`advlist`)]({{ site.baseurl }}/plugins/advlist/) plugin.

{% include commands/advlist-cmds.md %}

### Advanced Tables

The following commands require the [Advanced Tables (`advtable`)]({{ site.baseurl }}/plugins/advtable/) plugin.

{% include commands/advtable-cmds.md %}

### Anchor

The following command requires the [Anchor (`anchor`)]({{ site.baseurl }}/plugins/anchor/) plugin.

{% include commands/anchor-cmds.md %}

### Autoresize

The following command requires the [Autoresize (`autoresize`)]({{ site.baseurl }}/plugins/autoresize/) plugin.

{% include commands/autoresize-cmds.md %}

### Case Change

The following commands require the [Case Change (`casechange`)]({{ site.baseurl }}/plugins/casechange/) plugin.

{% include commands/casechange-cmds.md %}

### Character Map

The following command requires the [Character Map (`charmap`)]({{ site.baseurl }}/plugins/charmap/) plugin.

{% include commands/charmap-cmds.md %}

### Code

The following command requires the [Code (`code`)]({{ site.baseurl }}/plugins/code/) plugin.

{% include commands/code-cmds.md %}

### Code Sample

The following command requires the [Code Sample (`codesample`)]({{ site.baseurl }}/plugins/codesample/) plugin.

{% include commands/codesample-cmds.md %}

### Comments

The following commands require the [Comments (`tinycomments`)]({{ site.baseurl }}/plugins/comments/) plugin.

{% include commands/comments-cmds.md %}

### Directionality

The following commands require the [Directionality (`directionality`)]({{ site.baseurl }}/plugins/directionality/) plugin.

{% include commands/directionality-cmds.md %}

### Format Painter

The following commands require the [Format Painter (`formatpainter`)]({{ site.baseurl }}/plugins/comments/) plugin.

{% include commands/formatpainter-cmds.md %}

### Full Page

The following command requires the [Full Page (`fullpage`)]({{ site.baseurl }}/plugins/fullpage/) plugin.

{% include commands/fullpage-cmds.md %}

### Full Screen

The following command requires the [Full Screen (`fullscreen`)]({{ site.baseurl }}/plugins/fullscreen/) plugin.

{% include commands/fullscreen-cmds.md %}

### Help

The following command requires the [Help (`help`)]({{ site.baseurl }}/plugins/help/) plugin.

{% include commands/help-cmds.md %}

### Image

The following command requires the [Image (`image`)]({{ site.baseurl }}/plugins/image/) plugin.

{% include commands/image-cmds.md %}

### Image Tools

The following commands require the [Image Tools (`imagetools`)]({{ site.baseurl }}/plugins/imagetools/) plugin.

{% include commands/imagetools-cmds.md %}

### Insert Date/Time

The following commands require the [Insert Date/Time (`insertdatetime`)]({{ site.baseurl }}/plugins/insertdatetime/) plugin.

{% include commands/insertdatetime-cmds.md %}

### Link

The following command requires the [Link (`link`)]({{ site.baseurl }}/plugins/link/) plugin.

{% include commands/link-cmds.md %}

### Lists

The following commands require the [Lists (`lists`)]({{ site.baseurl }}/plugins/lists/) plugin.

{% include commands/lists-cmds.md %}

### Media

The following command requires the [Media (`media`)]({{ site.baseurl }}/plugins/media/) plugin.

{% include commands/media-cmds.md %}

### Nonbreaking Space

The following command requires the [Nonbreaking Space (`nonbreaking`)]({{ site.baseurl }}/plugins/nonbreaking/) plugin.

{% include commands/nbsp-cmds.md %}

### Page Break

The following command requires the [Page Break (`pagebreak`)]({{ site.baseurl }}/plugins/pagebreak/) plugin.

{% include commands/pagebreak-cmds.md %}

### Paste

The following commands require the [Paste (`paste`)]({{ site.baseurl }}/plugins/paste/) plugin.

{% include commands/paste-cmds.md %}

### Permanent Pen

The following commands require the [Permanent Pen (`permanentpen`)]({{ site.baseurl }}/plugins/permanentpen/) plugin.

{% include commands/permanentpen-cmds.md %}

### PowerPaste

The following command requires the [PowerPaste (`powerpaste`)]({{ site.baseurl }}/plugins/powerpaste/) plugin.

{% include commands/powerpaste-cmds.md %}

### Preview

The following command requires the [Preview (`preview`)]({{ site.baseurl }}/plugins/preview/) plugin.

{% include commands/preview-cmds.md %}

### Print

The following command requires the [Print (`print`)]({{ site.baseurl }}/plugins/print/) plugin.

{% include commands/print-cmds.md %}

### Save

The following commands require the [Save (`save`)]({{ site.baseurl }}/plugins/save/) plugin.

{% include commands/save-cmds.md %}

### Search and Replace

The following command requires the [Search and Replace (`searchreplace`)]({{ site.baseurl }}/plugins/searchreplace/) plugin.

{% include commands/searchreplace-cmds.md %}

### Spell Checker

The following command requires the [Spell Checker (`spellchecker`)]({{ site.baseurl }}/plugins/spellchecker/) plugin.

{% include commands/spellchecker-cmds.md %}

### Table

The following commands require the [Table (`table`)]({{ site.baseurl }}/plugins/table/) plugin.

{% include commands/table-cmds.md %}

### Template

The following command requires the [Template (`template`)]({{ site.baseurl }}/plugins/template/) plugin.

{% include commands/template-cmds.md %}

### Table of Contents

The following commands require the [Table of Contents (`toc`)]({{ site.baseurl }}/plugins/toc) plugin.

{% include commands/toc-cmds.md %}

### Visual Blocks

The following command requires the [Visual Blocks (`visualblocks`)]({{ site.baseurl }}/plugins/visualblocks/) plugin.

{% include commands/visualblocks-cmds.md %}

### Visual Characters

The following command requires the [Visual Characters (`visualchars`)]({{ site.baseurl }}/plugins/visualchars/) plugin.

{% include commands/visualchars-cmds.md %}
