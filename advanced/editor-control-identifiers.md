---
layout: default
title: Editor Control Identifiers
title_nav: Editor Control Identifiers
description_short: Complete list of control identifiers.
description: Complete list of control identifiers.
keywords: controls toolbar
---

Here is a list of the toolbar/menu controls that the core and plugins provides. These controls can be configured using the [toolbar]({{ site.baseurl }}/configure/editor-appearance/#toolbar) or the [menu]({{ site.baseurl }}/configure/editor-appearance/#menu) config options.

## Toolbar controls

| Control     | Core/Plugin    |  Description   |
|-------------|----------------|----------------|
| newdocument | core | Creates a new document. |
| bold | core | Applies the bold format to the current selection. |
| italic | core |Applies the italic format to the current selection. |
| underline | core | Applies the underline format to the current selection. |
| strikethrough | core | Applies strikethough format to the current selection. |
| alignleft | core | Left aligns the current block or image. |
| aligncenter | core | Left aligns the current block or image. |
| alignright | core | Right aligns the current block or image. |
| alignjustify | core | Full aligns the current block or image. |
| styleselect | core | Dropdown list with styles to apply to selection. |
| formatselect | core | Dropdown list with block formats to apply to selection. |
| fontselect | core | Dropdown list with font families to apply to selection. |
| fontsizeselect | core | Dropdown list with font sizes to apply to selection. |
| cut | core | Cuts the current selection into clipboard. |
| copy | core | Copies the current selection into clipboard. |
| paste | core | Pastes the current clipboard into the editor. |
| bullist | core | Formats the current selection as a bullet list. |
| numlist | core | Formats the current selection as a numbered list. |
| outdent | core | Outdents the current list item or block element. |
| indent | core | Indents the current list item or block element. |
| blockquote | core | Applies block quote format to the current selection. |
| undo | core | Undoes the last operation. |
| redo | core | Redoes the last undoed operation. |
| removeformat | core | Removes the formatting from the current selection. |
| subscript | core | Applies subscript format to the current selection. |
| superscript | core | Applies superscript format to the current selection. |
| hr | [hr]({{ site.baseurl }}/plugins/hr/) | Inserts a horizontal rule into the editor. |
| link | [link]({{ site.baseurl }}/plugins/link/) | Creates/Edits links within the editor. |
| unlink | [link]({{ site.baseurl }}/plugins/link/) | Removes links from the current selection. |
| image | [image]({{ site.baseurl }}/plugins/image/) | Creates/Edits images within the editor. |
| charmap | [charmap]({{ site.baseurl }}/plugins/charmap/) | Inserts custom characters into the editor. |
| pastetext | [paste]({{ site.baseurl }}/plugins/paste/) | Toggles plain text pasting mode on/off. | 
| print | [print]({{ site.baseurl }}/plugins/print/) | Prints the current editor contents. |
| preview | [preview]({{ site.baseurl }}/plugins/preview/) | Previews the current editor contents. |
| anchor | [anchor]({{ site.baseurl }}/plugins/anchor/) | Creates/Edits anchor elements. |
| pagebreak | [pagebreak]({{ site.baseurl }}/plugins/pagebreak/) | Inserts a pagebreak into the editor. |
| spellchecker | [spellchecker]({{ site.baseurl }}/plugins/spellchecker/) | Spellchecks the current editor contents. |
| searchreplace | [searchreplace]({{ site.baseurl }}/plugins/searchreplace/) | Search and/or Replaces contents within the editor. |
| visualblocks | [visualblocks]({{ site.baseurl }}/plugins/visualblocks/) | Toggles the visibility of block elements. |
| visualchars | [visualchars]({{ site.baseurl }}/plugins/visualchars/) | Toggles the visibility of non breaking character elements. |
| code | [code]({{ site.baseurl }}/plugins/code/) | Opens the code dialog |
| fullscreen | [fullscreen]({{ site.baseurl }}/plugins/fullscreen/) | Toggles fullscreen mode |
| insertdatetime | [insertdatetime]({{ site.baseurl }}/plugins/insertdatetime/) | Inserts the current date/time |
| media | [media]({{ site.baseurl }}/plugins/media/) | Created/Edits embedded media elements. |
| nonbreaking | [nonbreaking]({{ site.baseurl }}/plugins/nonbreaking/) | Inserts a nonbreaking space into the editor. |
| save | [save]({{ site.baseurl }}/plugins/save/) | Saves the current editor contents to a form or ajax call. |
| cancel | [save]({{ site.baseurl }}/plugins/save/) | Cancels/Resets the editor contents to it's initial state. |
| table | [table]({{ site.baseurl }}/plugins/table/) | Create/Edit table elements. |
| ltr | [directionality]({{ site.baseurl }}/plugins/directionality/) | Sets the directionality of contents to ltr. |
| rtl | [directionality]({{ site.baseurl }}/plugins/directionality/) | Sets the directionality of contents to rtl. |
| emoticons | [emoticons]({{ site.baseurl }}/plugins/emoticons/) | Opens the emoticons dialog. |
| template | [template]({{ site.baseurl }}/plugins/template/) | Inserts templates into the editor. |
| forecolor | [textcolor]({{ site.baseurl }}/plugins/textcolor/) | Applies foreground/text color to selection. |
| backcolor | [textcolor]({{ site.baseurl }}/plugins/textcolor/) | Applies background color to selection. |
| insertfile | [moxiemanager]({{ site.baseurl }}/plugins/moxiemanager/) | Opens the MoxieManager dialog. |

## Menu controls

| Control     | Core/Plugin    |  Description   |
|-------------|----------------|----------------|
| newdocument | core | Creates a new document. |
| undo | core | Undoes the last operation. |
| redo | core | Redoes the last undoed operation. |
| visualaid | core | Toogles visual aids on/off. |
| cut | core | Cuts the current selection into clipboard. |
| copy | core | Copies the current selection into clipboard. |
| paste | core | Pastes the current clipboard contents into editor. |
| selectall | core | Selects all the editor contents. |
| bold | core | Applies bold format to current selection. |
| italic | core | Applies bold format to current selection. |
| underline | core | Applies bold format to current selection. |
| strikethrough | core | Applies bold format to current selection. |
| subscript | core | Applies bold format to current selection. |
| superscript | core | Applies bold format to current selection. |
| removeformat | core | Removes all formats form the current selection. |
| formats | core | Menu of all available formats. |
| link | [link]({{ site.baseurl }}/plugins/link/) | Opens the link dialog. |
| image | [image]({{ site.baseurl }}/plugins/image/) | Opens the image dialog. |
| charmap | [charmap]({{ site.baseurl }}/plugins/charmap/) | Opens the charmap dialog. |
| pastetext | [paste]({{ site.baseurl }}/plugins/paste/) | Toggles paste as plain text on/off. |
| print | [print]({{ site.baseurl }}/plugins/print/) | Prints the current document. |
| preview | [preview]({{ site.baseurl }}/plugins/preview/) | Previews the current document. |
| hr | [hr]({{ site.baseurl }}/plugins/hr/) | Inserts a horizontal rule into the editor. |
| anchor | [anchor]({{ site.baseurl }}/plugins/anchor/) | Inserts an anchor into the editor. |
| pagebreak | [pagebreak]({{ site.baseurl }}/plugins/pagebreak/) | Inserts a pagebreak into the editor. |
| spellchecker | [spellchecker]({{ site.baseurl }}/plugins/spellchecker/) | Toggles the spellchecker on/off. |
| searchreplace | [searchreplace]({{ site.baseurl }}/plugins/searchreplace/) | Opens the search/replace dialog. |
| visualblocks | [visualblocks]({{ site.baseurl }}/plugins/visualblocks/) | Toggles block visibility on/off. |
| visualchars | [visualchars]({{ site.baseurl }}/plugins/visualchars/) | Toggles visibility of nonbreaking spaces on/off. |
| code | [code]({{ site.baseurl }}/plugins/code/) | Opens the code dialog. |
| fullscreen | [fullscreen]({{ site.baseurl }}/plugins/fullscreen/) | Toggles fullscreen on/off. |
| insertdatetime | [insertdatetime]({{ site.baseurl }}/plugins/insertdatetime/) | Inserts the current date/time into the editor. |
| media | [media]({{ site.baseurl }}/plugins/media/) | Opens the media dialog. |
| nonbreaking | [nonbreaking]({{ site.baseurl }}/plugins/nonbreaking/) | Inserts a nonbreaking space into the editor. |
| inserttable | [table]({{ site.baseurl }}/plugins/table/) | Insert table grid menu. |
| tableprops | [table]({{ site.baseurl }}/plugins/table/) | Opens the table properties dialog. |
| deletetable | [table]({{ site.baseurl }}/plugins/table/) | Deletes the current table. |
| cell | [table]({{ site.baseurl }}/plugins/table/) | Cell menu item with related controls. |
| row | [table]({{ site.baseurl }}/plugins/table/) | Row menu item with related controls. |
| column | [table]({{ site.baseurl }}/plugins/table/) | Column menu item with related controls. |
