---
layout: draft
title: Tables
title_nav: Tables Overview
description: Tables is a TinyMCE UI component that adds table management functionality to the TinyMCE editor.
keywords:
---

## Introduction

- Old note: Apollo will deprecate the Advanced tab in the table properties dialog. New styling should be done via css and not inline styles
New note: Style field was removed but the rest of the advanced tab remains.

---

Usually accessed via the Table menu or Table context menu (right click)
 • Table Properties
 • Row > Row Properties
 • Cell > Cell Properties

They can also be added to the toolbar, but aren't included by default.

Changes between Tiny 4 and Apollo:
 • Styles text field has been removed from the advanced table of the dialogs. Much less confronting/confusing for non-dev users, and means we have more control over the table styles and therefore are better able to ensure the styles are correct
 • Related, put some work into improving how styles are set and retrieved from tables/rows/cells, so should be more reliable
 • Shifted to using CSS more for styling, and therefore was able to remove a few legacy data attributes that we were setting on tables/rows/cells which are no longer good practice to use. Html is now cleaner and shorter
 • When opening a properties dialog with a single table/row/cell selected, the dialog will autofill with the relevant existing values. If you select multiple rows or cells and open the relevant properties dialog, Tiny 4 will leave all the dialog fields blank. In Apollo, any fields which have the same values for all the selected rows or cells will autofill, and the fields which have no existing value or have differing values will be empty.
 • "Border" input field in the tableprops dialog is now called "Border width", for clarity


Docs:
 • tiny docs are mostly still correct, and the code snippets there are pretty good.
   ∘ in my demo page, when testing table_class_list, table_row_class_list and table_cell_class_list I added the following to my config so applying the classes would actually make a visible difference in the editor: " content_style: '.cat { border-color: green; color: red; background-color: }' "
   ∘ comparisons between the accessible and non-accessible ways of adding tables could be useful, since we know quite a few people go looking for the accessibility options
 • tbio docs - irrelevant, nothing on tables

## Use Cases


* To display simple information (eg: source code plugin, displays the HTML code from the content in the dialog)

** These dialogs need a way to set the desired content into the dialog

* To display complex information, sections can be contained within tabs ( eg: help dialog or special chars dialog are tabbed dialogs),

** These dialogs needs a way to set the desired content into a defined tab section

* Interactive dialogs use web forms to collect interaction data, and then apply the data  (eg: search and replace dialog, uses an input field.  Where the input text will be used as the search key)
** These are the most complexed forms of dialogs and requires the ability to define what data is required, and how to get that data when we need it, and how to set the data to what we want.
