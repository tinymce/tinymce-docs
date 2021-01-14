---
layout: default
title: Accessibility
title_nav: Accessibility
description_short: Learn how TinyMCE works with screen readers and how screen readers work with TinyMCE.
description: Learn how TinyMCE works with screen readers and how screen readers work with TinyMCE.
keywords: accessibility wai aria jaws nvda
---

{{site.productname}} is compatible with screen readers such as JAWS and NVDA as it follows the WAI-ARIA specification. Use [NVDA](http://www.nvaccess.org/) together with [Firefox](https://www.mozilla.org/en-US/firefox/products/) for the best Accessibility experience.

## Keyboard shortcuts

The **Alt+key** shortcut assumes that the cursor is in the content area of the editor.

| Alt Key   | Result      |
|-----------|-------------|
| Alt+F9  | Focus/jump to menu bar |
| Alt+F10 | Focus/jump to toolbar |
| Alt+F11 | Focus/jump to element path |
| Esc       | Close menu/submenu/dialog (also gets you back to editor area) |
| Tab or Arrow | Navigate left/right through menu/toolbar |

For additional navigation keyboard shortcuts and shortcuts for applying some commonly-used formats, see: [Keyboard shortcuts]({{site.baseurl}}/advanced/keyboard-shortcuts/).

## How to work with the editor

When navigating to a TinyMCE editor, the keyboard focus (cursor) will be in the content area. The up and down arrow keys navigate between the lines of the editor, such as within and between paragraphs, headings and other items such as links.

### Navigating the menu bar

To focus on the editor menu bar, press **Alt+F9**. The **Left Arrow** and **Right Arrow** keys navigate through the top menu items. The **Down Arrow** key opens the highlighted menu and moves focus to the first menu item. To activate or select the highlighted menu item, use the **Enter**, **Return**, or **Spacebar** keys. Press the **Esc** key to collapse the menu. The **Right Arrow** key opens submenus and the **Esc** key collapses submenus. To return focus to the content area from the menu bar, use the **Esc** key.

### Navigating the toolbar

#### General toolbar navigation

To focus on the editor toolbars, press **Alt+F10**; which moves the keyboard focus to the first toolbar button on the first toolbar. To move between toolbar buttons _within_ toolbar groups (visual groups of toolbar buttons), use the **Left Arrow** and **Right Arrow** keys. To move the focus _between_ toolbar groups, use the **Tab** or **Shift+Tab** keys. When you reach the end a toolbar group the **Right Arrow** key will return the focus to the start of the toolbar group. To activate or select the highlighted toolbar button, use the **Enter**, **Return**, or **Spacebar**. To return focus to the content area from the menu bar, use the **Esc** key.

#### Navigating toolbar buttons that contain menus or grids

To open submenus or grid selections on toolbar buttons, use the **Down Arrow** key. To close submenus or grids, use the **Esc** key. Some toolbar buttons with menus will present a grid of options rather than a menu, such as the background color selector. These grids can be navigated with the arrow keys and closed using the **Esc** key.

### Navigating dialogs

Dialogs such as **Insert/Edit Image** are opened from either a menu item or a toolbar button. Some dialogs contain multiple tabs or pages of options. To change tabs or pages, use the arrow keys; the highlighted tab will become active immediately. Use the **Tab** key to navigate between the dialog options on the selected dialog tab. The **Save** dialog button stores the changes, and the **Cancel** dialog button or the **Esc** key discards changes.
