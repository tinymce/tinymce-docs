---
layout: default
title: Accessibility
title_nav: Accessibility
description_short: Learn how TinyMCE works with screen readers and how screen readers work with TinyMCE.
description: Learn how TinyMCE works with screen readers and how screen readers work with TinyMCE.
keywords: accessibility wai aria jaws nvda
---

TinyMCE is compatible with screen readers such as JAWS and NVDA as it follows the WAI-ARIA specification. Use [NVDA](http://www.nvaccess.org/) together with [Firefox](https://www.mozilla.org/en-US/firefox/products/) for the best Accessibility experience.

## Keyboard shortcuts

The `Alt+key` shortcut assumes that you are currently in the content area of the editor.

| Alt Key   | Result      |
|-----------|-------------|
| Alt + F9  | Focus/jump to menu bar |
| Alt + F10 | Focus/jump to toolbar |
| Alt + F11 | Focus/jump to element path |
| Esc       | Close menu/submenu/dialog (also gets you back to editor area) |
| Tab/Arrow | Navigate left/right through menu/toolbar |


## How to work with the editor

The content area has initial focus when you navigate into an editor instance. `Up Arrow` and `Down Arrow` gives you paragraphs,<!-- REQUIRES DEV REVIEW --> headings and other items such as links. Note that NVDA and Firefox treat links as embedded characters, you have actually to navigate into them to read their texts, but they are accessible.

Press `Alt+F9` to move focus to the menu bar. `Left Arrow` and `Right Arrow` navigates through the top menu items. `Down Arrow` opens the menu. Press `Esc` once to go back to the top level. `Right Arrow` on a submenu navigate into them while `Esc` backs out.

Alternatively, press `Alt+F10` to focus on the toolbars. The first toolbar has focus and you can `Tab` or arrow through the items<!-- DEV should items be buttons -->. Submenu items and panels are opened with `Down Arrow` and closed with `Esc`. When you reach the end of one toolbar the `Right Arrow` and `Left Arrow` wrap to the next and previous toolbars respectively. `Esc` brings you back into the central content area.

Dialogs such as Insert/Edit or Image/Video are opened from either the menus or the toolbars. These are multi-page dialogs with at least two tabs at the top. The `Right Arrow` and `Left Arrow` moves between the tabs in the tab list. `Space` makes the current tab active. Tab moves into the panel and through the controls. `Save` accepts changes, `Esc` or `Cancel` discards changes.

You can insert emoticons or change the text and background colors on the toolbars and in the formatting menu. These are panels you open by pressing `Down Arrow` or `Enter` on their respective menu/toolbar items and then use the arrow keys to select the item you want to be applied/inserted. All of these items are screen reader enabled allowing the visually impaired to navigate the toolbars and menu structure. 


