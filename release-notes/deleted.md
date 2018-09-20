---
layout: draft
title: Deleted and Deprecated Features
title_nav: Deleted and Deprecated Features
description: These features have either changed or have been deleted in TinyMCE 5.0.
keywords: deleted features migration 4.x
---

##Listbox (Removed)

**Cause & consequence:** Listbox is no longer a supported toolbar button type in TinyMCE 5
**Fix:** Any custom listbox toolbar buttons should be converted to a different type of toolbar button using the new API. The recommended toolbar button type to switch to is split button.
**Result:** Though listbox has been removed, any functionality provided by custom listbox toolbar buttons can be retained by switching to another type of toolbar button.

## Table (Changed)

* Styles text field has been removed from the advanced table of the dialogs. This simplifies the dialogs for users, and gives the editor stricter control over the table styles which means we are better able to ensure the styles are correct.
* Improved how styles are set and retrieved from tables, rows and cells, so this should be more reliable now.
* Shifted to using CSS more for styling, and therefore was able to remove a few legacy data attributes that we were setting on tables/rows/cells which are no longer good practice to use. This makes the output HTML cleaner and more modern.
* When opening a properties dialog with a single table/row/cell selected, the dialog will autofill with the relevant existing values. If you select multiple rows or cells and open the relevant properties dialog, Tiny 4 will leave all the dialog fields blank. In Tiny 5, any fields which have the same values for all the selected rows or cells will autofill, and the fields which have no existing value or have differing values will be empty.
* "Border" input field in the tableprops dialog is now called "Border width", for better clarity.

## Removed Themes

### Inlite

### Modern

### Mobile

## New Theme

## Silver

