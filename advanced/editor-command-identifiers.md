---
layout: default
title: Commands Available for TinyMCE
title_nav: Available Commands
description_short: Complete list of editor commands.
description: The complete list of exposed editor commands.
keywords: editorcommands editorcommand execcommand Bold Italic Underline Strikethrough Superscript Subscript Cut Copy Paste Unlink JustifyLeft JustifyCenter JustifyRight JustifyFull JustifyNone InsertUnorderedList InsertOrderedList ForeColor HiliteColor FontName FontSize RemoveFormat mceBlockQuote FormatBlock mceInsertContent mceToggleFormat mceSetContent Indent Outdent InsertHorizontalRule mceToggleVisualAid mceInsertLink selectAll delete mceNewDocument Undo Redo mceAutoResize mceShowCharmap mceCodeEditor mceDirectionLTR mceDirectionRTL mceFullPageProperties mceFullscreen mceImage mceInsertDate mceInsertTime mceInsertDefinitionList mceNonBreaking mcePageBreak mcePreview mcePrint mceSave SearchReplace mceSpellcheck mceInsertTemplate mceVisualBlocks mceVisualChars mceMedia mceAnchor mceTableSplitCells mceTableMergeCells mceTableInsertRowBefore mceTableInsertRowAfter mceTableInsertColBefore mceTableInsertColAfter mceTableDeleteCol mceTableDeleteRow mceTableCutRow mceTableCopyRow mceTablePasteRowBefore mceTablePasteRowAfter mceTableDelete mceInsertTable mceTableRowProps mceTableCellProps mceEditImage mceAddEditor mceRemoveEditor mceToggleEditor
---

## Overview

- [Executable commands](#executablecommands)

  - [Listing core and plugin editor commands](#listingcoreandplugineditorcommands)
  - [Core Editor commands](#coreeditorcommands)
  - [Plugin Commands](#plugincommands)
  - [Editor Management Commands](#editormanagementcommands)

- [Query command states](#querycommandstates)

  - [Listing core and plugin query command states](#listingcoreandpluginquerycommandstates)
  - [Available query command states](#availablequerycommandstates)

- [Query command values](#querycommandvalues)

  - [Listing core and plugin Query command values](#listingcoreandpluginquerycommandvalues)
  - [Available Query command values](#availablequerycommandvalues)
  - [Query command values: Table plugin](#querycommandvaluestableplugin)

## Executable commands

The following tables show the existing editor commands. These commands are provided by `tinymce` and not by the browser's internal commands. These commands can be executed using the [execCommand]({{ site.baseurl }}/api/tinymce/tinymce.editorcommands/#execcommand) function.

### Listing core and plugin editor commands

To retrieve a list of avaliable commands from the active editor, run the following command from the browser console:

```js
tinymce.activeEditor.editorCommands.commands.exec;
```

### Core Editor commands

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
| Lang                 | Sets the language of the current selection. The value passed in should be a language spec described in [Content appearance options - `content_langs`]({{site.baseurl}}/configure/localization/#content_langs).                                                                              |
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
| LineHeight           | Sets the line height of the text. The value passed in should be a valid CSS line height. {{ site.requires_5_5v }}                                                                                                                                                                           |
| mceApplyTextcolor    | Applies text color or background color to the current selection. Requires an argument of either `'hilitecolor'` or `'forecolor'`, and the value of the color.                                                                                                                               |
| mceRemoveTextcolor   | Removes the text color or background color from the current selection. Requires an argument of either `'hilitecolor'` or `'forecolor'`.                                                                                                                                                     |
| RemoveFormat         | Removes any formats from the current selection.                                                                                                                                                                                                                                             |
| mceBlockQuote        | Wraps the selected text blocks into a block quote.                                                                                                                                                                                                                                          |
| FormatBlock          | Toggles the format of the current selection. The value passed in should be the format name. If no format is specified, the paragraph (<`p`>) format will be toggled. For a list of options, see: [Content formatting options - Built-in formats]({{ site.baseurl }}/configure/content-formatting/#built-informats). |
| mceInsertContent     | Inserts contents at the current selection. The value passed in should be the contents to be inserted.                                                                                                                                                                                       |
| mceReplaceContent    | Replaces the current selection. The value passed in should be the new content.                                                                                                                                                                                                              |
| mceSetContent        | Sets the contents of the editor. The value is the contents to set as the editor contents.                                                                                                                                                                                                   |
| mceToggleFormat      | Toggles a specified format by name. The value is the name of the format to toggle. For a list of options, see: [Content formatting options - Built-in formats]({{ site.baseurl }}/configure/content-formatting/#built-informats).                                                                               |
| ToggleSidebar        | Closes the currrent sidebar, or toogles the sidebar if the sidebar name is provided as a value (_`<sidebar-name>`_).                                                                                                                                                                        |
| ToggleToolbarDrawer  | Toggles the Toolbar Drawer. For information on toolbars, see: [User interface options - Toolbar]({{site.baseurl}}/configure/editor-appearance/#toolbar). {{site.requires_5_5v}}                                                                                                             |
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
| mceFocus             | Focuses and activates the editor. Places DOM focus inside the editor and also sets the editor as the active editor instance on the page. {{site.requires_5_9v}}                                                                                                                       |

**Examples**

```js
tinymce.activeEditor.execCommand('Bold');
tinymce.activeEditor.execCommand('Italic');
tinymce.activeEditor.execCommand('Underline');
tinymce.activeEditor.execCommand('Strikethrough');
tinymce.activeEditor.execCommand('Superscript');
tinymce.activeEditor.execCommand('Subscript');
tinymce.activeEditor.execCommand('Cut');
tinymce.activeEditor.execCommand('Copy');
tinymce.activeEditor.execCommand('Paste');
tinymce.activeEditor.execCommand('mceInsertLink', false, 'https://www.tiny.cloud');
tinymce.activeEditor.execCommand('Unlink');
tinymce.activeEditor.execCommand('JustifyLeft');
tinymce.activeEditor.execCommand('JustifyCenter');
tinymce.activeEditor.execCommand('JustifyRight');
tinymce.activeEditor.execCommand('JustifyFull');
tinymce.activeEditor.execCommand('JustifyNone');
tinymce.activeEditor.execCommand('ForeColor', false, '#FF0000');
tinymce.activeEditor.execCommand('HiliteColor', false, '#FF0000');
tinymce.activeEditor.execCommand('FontName', false, 'courier new');
tinymce.activeEditor.execCommand('FontSize', false, '30px');
tinymce.activeEditor.execCommand('LineHeight', false, '1.4');
tinymce.activeEditor.execCommand('mceApplyTextcolor', 'hilitecolor', '#FF0000');
tinymce.activeEditor.execCommand('mceRemoveTextcolor', 'hilitecolor');
tinymce.activeEditor.execCommand('RemoveFormat');
tinymce.activeEditor.execCommand('mceBlockQuote');
tinymce.activeEditor.execCommand('FormatBlock', false, 'bold');
tinymce.activeEditor.execCommand('mceInsertContent', false, 'My new content');
tinymce.activeEditor.execCommand('mceReplaceContent', false, 'My replacement content');
tinymce.activeEditor.execCommand('mceSetContent', false, 'My content');
tinymce.activeEditor.execCommand('mceToggleFormat', false, 'bold');
tinymce.activeEditor.execCommand('ToggleSidebar');  /* OR */
tinymce.activeEditor.execCommand('ToggleSidebar', false, '<sidebar-name>');
tinymce.activeEditor.execCommand('ToggleToolbarDrawer');
tinymce.activeEditor.execCommand('Indent');
tinymce.activeEditor.execCommand('Outdent');
tinymce.activeEditor.execCommand('InsertHorizontalRule');
tinymce.activeEditor.execCommand('InsertLineBreak');
tinymce.activeEditor.execCommand('mceInsertNewLine');
tinymce.activeEditor.execCommand('mceInsertRawHTML', false, '<p>Hello, World!</p>');
tinymce.activeEditor.execCommand('mceToggleVisualAid');
tinymce.activeEditor.execCommand('SelectAll');
tinymce.activeEditor.execCommand('Delete');
tinymce.activeEditor.execCommand('ForwardDelete');
tinymce.activeEditor.execCommand('mceNewDocument');
tinymce.activeEditor.execCommand('Redo');
tinymce.activeEditor.execCommand('Undo');
tinymce.activeEditor.execCommand('mceAddUndoLevel');
tinymce.activeEditor.execCommand('mceEndUndoLevel');
tinymce.activeEditor.execCommand('mceCleanup');
tinymce.activeEditor.execCommand('mceSelectNode', false, '<DOM_node>');
tinymce.activeEditor.execCommand('mceSelectNodeDepth', false, 2); // For two nodes up.
tinymce.activeEditor.execCommand('mceRemoveNode'); /* OR */
tinymce.activeEditor.execCommand('mceRemoveNode', false, '<DOM_node>');
tinymce.activeEditor.execCommand('mceFocus');
```

### Plugin Commands

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
- [Emoticons](#emoticons)
- [Export](#export)
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
- [Spell Checker Pro](#spellcheckerpro)
- [Table](#table)
- [Template](#template)
- [Table of Contents](#tableofcontents)
- [Visual Blocks](#visualblocks)
- [Visual Characters](#visualcharacters)
- [Word Count](#wordcount)

#### Advanced Code

The following command requires the [Advanced Code (`advcode`)]({{site.baseurl}}/plugins/premium/advcode/) plugin.

{% include commands/code-cmds.md %}

#### Advanced Lists

The following commands require the [Advanced Lists (`advlist`)]({{site.baseurl}}/plugins/opensource/advlist/) plugin.

{% include commands/advlist-cmds.md %}

#### Advanced Tables

The following commands require the [Advanced Tables (`advtable`)]({{site.baseurl}}/plugins/premium/advtable/) plugin.

{% include commands/advtable-cmds.md %}

#### Anchor

The following command requires the [Anchor (`anchor`)]({{site.baseurl}}/plugins/opensource/anchor/) plugin.

{% include commands/anchor-cmds.md %}

#### Autoresize

The following command requires the [Autoresize (`autoresize`)]({{site.baseurl}}/plugins/opensource/autoresize/) plugin.

{% include commands/autoresize-cmds.md %}

#### Case Change

The following commands require the [Case Change (`casechange`)]({{site.baseurl}}/plugins/premium/casechange/) plugin.

{% include commands/casechange-cmds.md %}

#### Character Map

The following command requires the [Character Map (`charmap`)]({{site.baseurl}}/plugins/opensource/charmap/) plugin.

{% include commands/charmap-cmds.md %}

#### Code

The following command requires the [Code (`code`)]({{site.baseurl}}/plugins/opensource/code/) plugin.

{% include commands/code-cmds.md %}

#### Code Sample

The following command requires the [Code Sample (`codesample`)]({{site.baseurl}}/plugins/opensource/codesample/) plugin.

{% include commands/codesample-cmds.md %}

#### Comments

The following commands require the [Comments (`tinycomments`)]({{site.baseurl}}/plugins/premium/comments/) plugin.

{% include commands/comments-cmds.md %}

#### Directionality

The following commands require the [Directionality (`directionality`)]({{site.baseurl}}/plugins/opensource/directionality/) plugin.

{% include commands/directionality-cmds.md %}

#### Emoticons

The following commands require the [Emoticons (`emoticons`)]({{site.baseurl}}/plugins/opensource/emoticons/) plugin.

{% include commands/emoticons-cmds.md %}

#### Export

The following commands require the [Export (`export`)]({{site.baseurl}}/plugins/premium/export/) plugin.

{% include commands/export-cmds.md %}

#### Format Painter

The following commands require the [Format Painter (`formatpainter`)]({{site.baseurl}}/plugins/premium/formatpainter/) plugin.

{% include commands/formatpainter-cmds.md %}

#### Full Page

{% include DEPRECATED/fullpage.md %}

The following command requires the [Full Page (`fullpage`)]({{site.baseurl}}/plugins/opensource/fullpage/) plugin.

{% include commands/fullpage-cmds.md %}

#### Full Screen

The following command requires the [Full Screen (`fullscreen`)]({{site.baseurl}}/plugins/opensource/fullscreen/) plugin.

{% include commands/fullscreen-cmds.md %}

#### Help

The following command requires the [Help (`help`)]({{site.baseurl}}/plugins/opensource/help/) plugin.

{% include commands/help-cmds.md %}

#### Image

The following command requires the [Image (`image`)]({{site.baseurl}}/plugins/opensource/image/) plugin.

{% include commands/image-cmds.md %}

#### Image Tools

The following commands require the [Image Tools (`imagetools`)]({{site.baseurl}}/plugins/opensource/imagetools/) plugin.

{% include commands/imagetools-cmds.md %}

#### Insert Date/Time

The following commands require the [Insert Date/Time (`insertdatetime`)]({{site.baseurl}}/plugins/opensource/insertdatetime/) plugin.

{% include commands/insertdatetime-cmds.md %}

#### Link

The following command requires the [Link (`link`)]({{site.baseurl}}/plugins/opensource/link/) plugin.

{% include commands/link-cmds.md %}

#### Lists

The following commands require the [Lists (`lists`)]({{site.baseurl}}/plugins/opensource/lists/) plugin.

{% include commands/lists-cmds.md %}

#### Media

The following command requires the [Media (`media`)]({{site.baseurl}}/plugins/opensource/media/) plugin.

{% include commands/media-cmds.md %}

#### Nonbreaking Space

The following command requires the [Nonbreaking Space (`nonbreaking`)]({{site.baseurl}}/plugins/opensource/nonbreaking/) plugin.

{% include commands/nbsp-cmds.md %}

#### Page Break

The following command requires the [Page Break (`pagebreak`)]({{site.baseurl}}/plugins/opensource/pagebreak/) plugin.

{% include commands/pagebreak-cmds.md %}

#### Paste

The following commands require the [Paste (`paste`)]({{site.baseurl}}/plugins/opensource/paste/) plugin.

{% include commands/paste-cmds.md %}

#### Permanent Pen

The following commands require the [Permanent Pen (`permanentpen`)]({{site.baseurl}}/plugins/premium/permanentpen/) plugin.

{% include commands/permanentpen-cmds.md %}

#### PowerPaste

The following command requires the [PowerPaste (`powerpaste`)]({{site.baseurl}}/plugins/premium/powerpaste/) plugin.

{% include commands/powerpaste-cmds.md %}

#### Preview

The following command requires the [Preview (`preview`)]({{site.baseurl}}/plugins/opensource/preview/) plugin.

{% include commands/preview-cmds.md %}

#### Print

The following command requires the [Print (`print`)]({{site.baseurl}}/plugins/opensource/print/) plugin.

{% include commands/print-cmds.md %}

#### Save

The following commands require the [Save (`save`)]({{site.baseurl}}/plugins/opensource/save/) plugin.

{% include commands/save-cmds.md %}

#### Search and Replace

The following command requires the [Search and Replace (`searchreplace`)]({{site.baseurl}}/plugins/opensource/searchreplace/) plugin.

{% include commands/searchreplace-cmds.md %}

#### Spell Checker

The following command requires the [Spell Checker (`spellchecker`)]({{site.baseurl}}/plugins/opensource/spellchecker/) plugin.

{% include DEPRECATED/spellchecker.md %}

{% include commands/spellchecker-cmds.md %}

#### Spell Checker Pro

The following commands require the [Spell Checker Pro (`tinymcespellchecker`)]({{site.baseurl}}/plugins/premium/tinymcespellchecker/) plugin.

{% include commands/tinymcespellchecker-cmds.md %}

#### Table

The following commands require the [Table (`table`)]({{site.baseurl}}/plugins/opensource/table/) plugin.

{% include commands/table-cmds.md %}

#### Template

The following command requires the [Template (`template`)]({{site.baseurl}}/plugins/opensource/template/) plugin.

{% include commands/template-cmds.md %}

#### Table of Contents

The following commands require the [Table of Contents (`toc`)]({{site.baseurl}}/plugins/opensource/toc) plugin.

{% include commands/toc-cmds.md %}

#### Visual Blocks

The following command requires the [Visual Blocks (`visualblocks`)]({{site.baseurl}}/plugins/opensource/visualblocks/) plugin.

{% include commands/visualblocks-cmds.md %}

#### Visual Characters

The following command requires the [Visual Characters (`visualchars`)]({{site.baseurl}}/plugins/opensource/visualchars/) plugin.

{% include commands/visualchars-cmds.md %}

#### Word Count

The following command requires the [Word Count (`wordcount`)]({{site.baseurl}}/plugins/opensource/visualchars/) plugin.

{% include commands/wordcount-cmds.md %}

### Editor Management Commands

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

## Query command states

{{site.productname}} provides the `queryCommandState` API to allow developers to determine the current state of selected content. The query will return `true` if the content is formatted using the same CSS styles and elements used by the corresponding command.

### Listing core and plugin query command states

To retrieve a list of avaliable queryable states from the active editor, run the following command from the browser console:

```js
tinymce.activeEditor.editorCommands.commands.state;
```

### Available query command states

The following command states can be queried using the [queryCommandState]({{ site.baseurl }}/api/tinymce/tinymce.editorcommands/#querycommandstate) API.

| Command              | Description                                                                                                                    |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Bold                 | Returns `true` if the content is formatted using the same markup as the {{site.productname}} `Bold` command.                   |
| InsertDefinitionList | Returns `true` if the content is formatted using the same markup as the {{site.productname}} `InsertDefinitionList` command.   |
| InsertOrderedList    | Returns `true` if the content is formatted using the same markup as the {{site.productname}} `InsertOrderedList` command.      |
| InsertUnorderedList  | Returns `true` if the content is formatted using the same markup as the {{site.productname}} `InsertUnorderedList` command.    |
| Italic               | Returns `true` if the content is formatted using the same markup as the {{site.productname}} `Italic` command.                 |
| JustifyCenter        | Returns `true` if the content is formatted using the same markup as the {{site.productname}} `JustifyCenter` command.          |
| JustifyFull          | Returns `true` if the content is formatted using the same markup as the {{site.productname}} `JustifyFull` command.            |
| JustifyLeft          | Returns `true` if the content is formatted using the same markup as the {{site.productname}} `JustifyLeft` command.            |
| JustifyRight         | Returns `true` if the content is formatted using the same markup as the {{site.productname}} `JustifyRight` command.           |
| mceBlockQuote        | Returns `true` if the content is formatted using the same markup as the {{site.productname}} `mceBlockQuote` command.          |
| Outdent              | Returns `true` if the content is formatted using the same markup as the {{site.productname}} `Outdent` command.                |
| Strikethrough        | Returns `true` if the content is formatted using the same markup as the {{site.productname}} `Strikethrough` command.          |
| Subscript            | Returns `true` if the content is formatted using the same markup as the {{site.productname}} `Subscript` command.              |
| Superscript          | Returns `true` if the content is formatted using the same markup as the {{site.productname}} `Superscript` command.            |
| ToggleToolbarDrawer  | Returns `true` if the Toolbar Drawer is open. The state can be controlled by the {{site.productname}} `ToggleToolbarDrawer` command. {{site.requires_5_5v}} |
| Underline            | Returns `true` if the content is formatted using the same markup as the {{site.productname}} `Underline` command.              |

**Examples**

```js
tinymce.activeEditor.queryCommandState('Bold');
tinymce.activeEditor.queryCommandState('InsertDefinitionList');
tinymce.activeEditor.queryCommandState('InsertOrderedList');
tinymce.activeEditor.queryCommandState('InsertUnorderedList');
tinymce.activeEditor.queryCommandState('Italic');
tinymce.activeEditor.queryCommandState('JustifyCenter');
tinymce.activeEditor.queryCommandState('JustifyFull');
tinymce.activeEditor.queryCommandState('JustifyLeft');
tinymce.activeEditor.queryCommandState('JustifyRight');
tinymce.activeEditor.queryCommandState('mceBlockQuote');
tinymce.activeEditor.queryCommandState('Outdent');
tinymce.activeEditor.queryCommandState('Strikethrough');
tinymce.activeEditor.queryCommandState('Subscript');
tinymce.activeEditor.queryCommandState('Superscript');
tinymce.activeEditor.queryCommandState('ToggleToolbarDrawer');
tinymce.activeEditor.queryCommandState('Underline');
```

## Query command values

{{site.productname}} provides the `queryCommandValue` API to allow developers to determine the current state of selected content. The query will return an object containing the relevant value.

### Listing core and plugin query command values

To retrieve a list of avaliable queryable command values from the active editor, run the following command from the browser console:

```js
tinymce.activeEditor.editorCommands.commands.value;
```

### Available query command values

The following command values can be queried using the [queryCommandValue]({{ site.baseurl }}/api/tinymce/tinymce.editorcommands/#querycommandvalue) API.

| Command       | Description                                                                |
| --------------| -------------------------------------------------------------------------- |
| FontName      | Returns the font name of the current selection.                            |
| FontSize      | Returns the font size of the current selection.                            |
| LineHeight    | Returns the line height of the current selection. {{ site.requires_5_5v }} |
| ToggleSidebar | Returns the current state of sidebar (open or closed).                     |


**Examples**

```js
tinymce.activeEditor.queryCommandValue('FontName');
tinymce.activeEditor.queryCommandValue('FontSize');
tinymce.activeEditor.queryCommandValue('LineHeight');
tinymce.activeEditor.queryCommandValue('ToggleSidebar');
```

### Query command values: Table plugin

{% include commands/table-query-cmd-values.md %}
