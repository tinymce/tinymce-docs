---
layout: default
title: TinyMCE Keyboard shortcuts
title_nav: TinyMCE Keyboard shortcuts
description_short: Complete list of keyboard shortcuts.
description: Complete list of keyboard shortcuts.
keywords: keyboard shortcuts
---

## Editor keyboard shortcuts

This is a list of available keyboard shortcuts within the editor body.

| Action                      | PC                    | Mac                         | Core/Plugin                                                |
|-----------------------------|-----------------------|-----------------------------|------------------------------------------------------------|
| Bold                        | Ctrl+B                | Command+B                   | core                                                       |
| Italic                      | Ctrl+I                | Command+I                   | core                                                       |
| Underline                   | Ctrl+U                | Command+U                   | core                                                       |
| Select All                  | Ctrl+A                | Command+A                   | core                                                       |
| Redo                        | Ctrl+Y / Ctrl+Shift+Z | Command+Y / Command+Shift+Z | core                                                       |
| Undo                        | Ctrl+Z                | Command+Z                   | core                                                       |
| Header 1                    | Alt+Shift+1           | Ctrl+Option+1               | core                                                       |
| Header 2                    | Alt+Shift+2           | Ctrl+Option+2               | core                                                       |
| Header 3                    | Alt+Shift+3           | Ctrl+Option+3               | core                                                       |
| Header 4                    | Alt+Shift+4           | Ctrl+Option+4               | core                                                       |
| Header 5                    | Alt+Shift+5           | Ctrl+Option+5               | core                                                       |
| Header 6                    | Alt+Shift+6           | Ctrl+Option+6               | core                                                       |
| Paragraph                   | Alt+Shift+7           | Ctrl+Option+7               | core                                                       |
| Div                         | Alt+Shift+8           | Ctrl+Option+8               | core                                                       |
| Address                     | Alt+Shift+9           | Ctrl+Option+9               | core                                                       |
| Focus to menu bar           | Alt+F9                | Option+F9                   | core                                                       |
| Focus to toolbar            | Alt+F10               | Option+F10                  | core                                                       |
| Focus to element path       | Alt+F11               | Option+F11                  | core                                                       |
| Focus to contextual toolbar | Ctrl+F9               | Ctrl+F9                     | core                                                       |
| Open the help dialog        | Alt+0                 | Option+0                    | [help]({{site.baseurl}}/plugins/opensource/help/)                   |
| Insert link                 | Ctrl+K                | Command+K                   | [link]({{site.baseurl}}/plugins/opensource/link/)                   |
| Toggle Fullscreen           | Ctrl+Shift+F          | Command+Shift+F             | [fullscreen]({{site.baseurl}}/plugins/opensource/fullscreen/)       |
| Save                        | Ctrl+S                | Command+S                   | [save]({{site.baseurl}}/plugins/opensource/save/)                   |
| Find                        | Ctrl+F                | Command+F                   | [searchreplace]({{site.baseurl}}/plugins/opensource/searchreplace/) |

## Accessibility keyboard shortcuts

This is a list of available keyboard shortcuts within the editor user interface.

| Action                                                                                       | PC                       | Mac                      |
|----------------------------------------------------------------------------------------------|--------------------------|--------------------------|
| Execute command                                                                              | Enter / Spacebar         | Enter / Spacebar         |
| Focus on next UI Element<br>(such as: Menu bar, Toolbar, Toolbar Group, Status Bar Item)     | Tab                      | Tab                      |
| Focus on previous UI Element<br>(such as: Menu bar, Toolbar, Toolbar Group, Status Bar Item) | Shift+Tab                | Shift+Tab                |
| Focus next Control<br>(such as: toolbar button, menu, or menu item)                          | Right Arrow / Down Arrow | Right Arrow / Down Arrow |
| Focus previous Control<br>(such as: toolbar button, menu, or menu item)                      | Left Arrow / Up Arrow    | Left Arrow / Up Arrow    |
| Open menu or toolbar menu button                                                             | Down Arrow / Spacebar    | Down Arrow / Spacebar    |
| Open group toolbar button                                                                    | Spacebar                 | Spacebar                 |
| Open split toolbar button                                                                    | Down Arrow               | Down Arrow               |
| Open the popup menu on split toolbar buttons                                                 | Shift+Enter              | Shift+Enter              |
| Open submenu                                                                                 | Right Arrow              | Right Arrow              |
| Close submenu                                                                                | Left Arrow / Esc         | Left Arrow / Esc         |
| Close dialog                                                                                 | Esc                      | Esc                      |
| Close menu                                                                                   | Esc                      | Esc                      |
| Move focus back to editor body                                                               | Esc                      | Esc                      |

> **Note**: Browsers and Screen Readers provide additional shortcuts within the editor context.

{% include misc/advcode-shortcuts.md %}

## Add custom shortcuts to TinyMCE

> **Important**: Adding a custom shortcut with a keyboard combination that conflicts with an existing {{site.productname}} or browser shortcut will override the existing shortcut.

To add a custom keyboard shortcut to {{site.productname}}, use either:

* [The `tinymce.Editor.addShortcut` API]({{site.baseurl}}/api/tinymce/tinymce.editor/#addshortcut).
* [The `tinymce.Shortcuts.add` API]({{site.baseurl}}/api/tinymce/tinymce.shortcuts/).

#{% include misc/shortcut-os-mappings.md %}

### Example: Custom keyboard shortcut

{% include live-demo.html id="custom-shortcut" tab="js" %}

### Example: Adding a custom shortcut for a menu item

When adding a shortcut for a custom menu item, add both a custom shortcut and a custom menu item. To display the shortcut on a custom menu item, add the `shortcut` configuration option when creating the menu item.

{% include live-demo.html id="custom-shortcut-2" tab="js" %}
