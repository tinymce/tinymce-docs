---
layout: default
title: Accessibility
title_nav: Accessibility
description_short: Learn how TinyMCE works with screen readers and how screen readers work with TinyMCE.
description: Learn how TinyMCE works with screen readers and how screen readers work with TinyMCE.
keywords: accessibility wai aria jaws nvda
---

As of version 4.0.17 of TinyMCE, we now follow the WAI-ARIA specification, making it compatible with screen readers such as JAWS and NVDA. At the time of writing, we would **highly** recommend the use of [NVDA](http://www.nvaccess.org/) together with [Firefox](https://www.mozilla.org/en-US/firefox/products/) for the best Accessibility experience with TinyMCE.

## Keyboard shortcuts

The `ALT+key` shortcut assumes that you are currently in the content area of the editor.

| ALT Key   | Result      |
|-----------|-------------|
| ALT + F9  | Focus/jump to menu bar |
| ALT + F10 | Focus/jump to toolbar |
| ALT + F11 | Focus/jump to element path |
| ESC       | Close menu/submenu/dialog (also gets you back to editor area) |
| Tab/Arrow | Navigate left/right through menu/toolbar |


## How to work with the editor

When you navigate into an editor instance, you will land in the content area. Arrowing up and down will give you paragraphs, headings and other items such as links. Note that NVDA and Firefox treat links as embedded characters, you have actually to navigate into them to read their texts, but they are accessible.

From the content, you can press Alt+F9 to move focus to the menu bar. Left and Right arrow navigate through the top menu items like in your average desktop app, and Down Arrow will open a menu. Note that from there, you cannot go Right or Left through the various drop-down menus, you first have to press Escape once to go back to the top level. When on submenus, Right Arrow will walk into them, escape will back up.

Alternatively, you can press `Alt+F10` to focus toolbars. You’ll land on the first toolbar and can tab or arrow through the items. Submenu items will have the sub-menus or panels opened via Down Arrow, and closed via Escape. When you reach the end of one toolbar, Right Arrow and LeftArrow wrap to the next and previous toolbars respectively. Escape will bring you back into the central content area.

From either the menus or toolbars, you can open dialogs such as Insert/Edit or Image/Video. These are multi-page dialogs with at least two tabs at the top. When in the tab list, the Right and Left arrow will move between the tabs, Space will make the current tab active. Tab moves into the panel and through the controls. `OK` will accept changes, `Escape` or `Cancel` will discard.

On the toolbars and in the formatting menu, you can insert emoticons or change the text and background colors. These are panels you open by pressing DownArrow or Enter on their respective menu/toolbar items and then use the arrow keys to select the actual item you want to be applied/inserted. All of these items are also made to talk, so a blind person can change the text color as well and know what they’re doing.

## Credits

Most of this text was written by Marco, who is working as an Accessibility QA Engineer and Evangelist at Mozilla. We would like to extend our thanks for the help with the WAI-ARIA implementation, could not have done it without him. [Visit Marco's excellent blog!](http://www.marcozehe.de/)
