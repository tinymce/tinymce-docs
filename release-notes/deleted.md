---
layout: draft
title: Deleted and Changed Features
title_nav: Deleted and Changed Features
description: These features have either changed or have been deleted in TinyMCE 5.0.
keywords: deleted features migration 4.x
---

Each release of TinyMCE adds new features and functionality. We also occasionally remove features and functionality, usually because we've added a better option.
Here are the details about the features and functionalities that we removed in Tiny 5.0.

##Listbox (Removed)

**Cause & consequence:** Listbox is no longer a supported toolbar button type in Tiny 5
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
**Cause & consequence:** The Inlite theme is no longer supported, in Tiny 5
**Fix:** The features that the Inlite theme used to provide, is now available as a plugin.  Using the configuration parameter { theme: 'silver', inline: true, toolbar: false, plugins: [ 'inlite' ] }, 
**Result:** Will provide a similar and improved distraction free experience in Tiny 5.

### Modern
**Cause & consequence:** The Modern theme is no longer supported, in Tiny 5.  The modern themes Ui library tinymce.ui.* are also deleted
**Fix:** 
-delicate topic requires more reviewers-
Depending on the level of customization to the Modern theme, we will break this topic up into 3 categories
(might look better in a table?)
minor customization: Has some custom buttons => no Ui fixes required, update button configuration to Tiny 5.0 format
some customization: Has a webform in a dialog that can be submitted => port tiny 4 config to tiny 5 config
major customization: You have created the kitchen sink => Not all api use cases are covered by our new Tiny 5 components, however we will strive to create a supprted work around or if there are sufficient requests, we will create a component to resolve the use case.
Please provide feedback on your use case, and your current tinymce 4 configuration file containing only the ui component, you wish to have supported or to know a work around. -improve submission instructions -

Tiny 5's silver theme contains a set of configuratable ui components, that could be used to replace
**Result:** 


### Mobile

## New Theme

## Silver

