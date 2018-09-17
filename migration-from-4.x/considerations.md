---
layout: draft
title: Considerations
title_nav: Considerations
description: Instructions for migrating from TinyMCE 4.x to TinyMCE 5.0.
keywords: migration considerations premigration pre-migration
---


## Migrating from Previous Versions

The new TinyMCE 5.0 editor comes with significant changes to the previous versions. The new editor offers an easier to navigate user interface.

Our team at Tiny has worked on creating a configurable, less cumbersome editor while retaining the familiarity of the user interface from the older versions.

This chapter describes the migration process and workarounds if you are using an older version of TinyMCE. It includes tasks that you must perform before the migration can begin, and different workaround procedures for deprecated, deleted, and updated features.


## Important Considerations

### API changes

What does the current API allow us to do?

* Add a button to the toolbar editor.addButton()
* Create a button and attach it anywhere tinymce.ui.Factory.create


What can’t it do now that we would like it to do later

* Share the Ui with TBIO
* editor.addButton will need to create an Alloy config, we will need various adaptors to make it work both ways. This adds complexity and maybe awkward code.

What can it do now that we don’t want it to do later

* When we set { cmd: ‘foobar” } it will overwrite any onclick functions declared (Editor.ts addButton)
* Some args can be String or String[]
* Some args can take either fn() or String
* on<event> exposes too much

Tables (Millie's Notes)
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

The following hasn't changed much from the current Tiny docs, but I'm listing it all out anyway for completion's sake and so I could run through it all in my head, to ensure I didn't miss anything

tableprops dialog UI:
 • General tab:
   ∘ Width: table width
   ∘ Height: table height
   ∘ Cell spacing: padding between cells
   ∘ Cell padding: padding within cells
   ∘ Border width: ditto
   ∘ Caption checkbox: adds a caption element above the table so you can type in a caption
   ∘ Alignment: alignment of the table within it's parent, using float or margin CSS styles
 • Advanced tab:
   ∘ Border style: standard css border for the *outside* of the table
   ∘ Border color: set border colour for the *whole* table
   ∘ Background color: ditto for table

rowprops dialog UI:
 • General tab:
   ∘ Row type: set as header, body or footer row
   ∘ Alignment: text alignment for that row
   ∘ Height: row height
 • Advanced tab:
   ∘ Border style: set border style for the row
   ∘ Border color: inner border colour for that row
   ∘ Background color: ditto for row

cellprops dialog UI:
 • General tab
   ∘ Width: cell width
   ∘ Height: cell height
   ∘ Cell type: set as cell or header cell
   ∘ Scope: ???
   ∘ H align: horizontal text alignment within the cell
   ∘ V align: vertical text alignment within the cell
 • Advanced tab:
   ∘ Border style: set border style for the cell
   ∘ Border color: set border color for the cell
   ∘ Background color: ditto for cell


API
 • available toolbar and context toolbar buttons:
   ∘ table (currently undocumented) - replicates the Table menu but allows it to be opened from a toolbar button. could be useful if menubars are turned off?
   ∘ tableprops
   ∘ tablerowprops (currently undocumented) - opens row properties dialog
   ∘ tablecellprops (currently undocumented) - opens cell properties dialog
   ∘ tabledelete
   ∘ tableinsertrowbefore
   ∘ tableinsertrowafter
   ∘ tabledeleterow
   ∘ tableinsertcolbefore
   ∘ tableinsertcolafter
   ∘ tabledeletecol
 • tableprops dialog options:
   ∘ table_advtab: true by default, if false hides the advanced tab of the table properties dialog
   ∘ table_class_list: takes a list of objects containing title and value properties. if specified, adds a drop down to the general tab of the dialog
 • tablerowprops dialog options:
   ∘ table_row_advtab: true by default, if false hides the advanced tab of the table row properties dialog
   ∘ table_row_class_list: takes a list of objects containing title and value properties. if specified, adds a drop down to the general tab of the dialog
 • tablecellprops dialog options:
   ∘ table_cell_advtab: true by default, if false hides the advanced tab of the table cell properties dialog
   ∘ table_cell_class_list: takes a list of objects containing title and value properties. if specified, adds a drop down to the general tab of the dialog
 • general:
   ∘ table_toolbar
   ∘ table_appearance_options
   ∘ table_clone_elements
   ∘ table_grid: disables the table grid in the table menu that's usually used to insert tables. replaces it with a button that opens a dialog like the tableprops dialog, but with two extra fields added: rows and cols, which are used to set how many rows and cols the user wants the table to have. essentially exists for accessibility reasons, since the table grid isn't accessible and never will be.
   ∘ table_tab_navigation
   ∘ table_default_attributes
   ∘ table_default_styles

Commands:
Currently not documented anywhere that I can tell, but these are all commands that can be run via " tinymce.execCommand(<cmd>) " in JS or the console, as far as I can tell.
• mceTableSplitCells
• mceTableMergeCells
• mceTableInsertRowBefore
• mceTableInsertRowAfter
• mceTableInsertColBefore
• mceTableInsertColAfter
• mceTableDeleteCol
• mceTableDeleteRow
• mceTableCutRow (grid)
• mceTableCopyRow (grid)
• mceTablePasteRowBefore (grid)
• mceTablePasteRowAfter (grid)
• mceTableDelete
• mceInsertTable
• mceTableProps
• mceTableRowProps
• mceTableCellProps




### Features

Background story

Here is an example of a post render api call. The e.control is the whole instance of the button and from that you can traverse the control widget tree structure. A more strict api would be to have specific api:s with only the actions needed for a specific widget.

http://stash/projects/TINYMCE/repos/tinymce/browse/src/plugins/fullscreen/main/ts/ui/Buttons.ts

So add button in some form of new api might look like:
  editor.ui.addToggleButton('fullscreen', {
    active: false,
    tooltip: 'Fullscreen',
    action: () => editor.execCommand('mceFullScreen'),
    postRender: (api) => {
      editor.on('FullscreenStateChanged', (e) => {
         api.active(e.state);
       });
    }
  });

Where api is something we define in the integration layer having just the states needed for a public api for a toggle button that would probably be something like:

interface ToggleButtonApi {
 isActive() => boolean;
 active(state: boolean) => void;
 isDisabled() => boolean;
 disabled(state: boolean) => void;
}

I think we would have to have a postRender on the new api but more strict.

The current api allows you to do things like e.control.parent().find('#buttonx').disable(true) since it has the full richness of the framework.


Goal
Tighten up the API (strict) Currently you can take our Ui and do as you like to it
Cons
when we change something, customer code breaks
Fear, customer gets version locked, support issues.
Pros
you can dev faster because you have access to all the things, its there i can use it.
The bulk of the ui is useful, you can make small changes to certain buttons for the custom finish.
Provide a stricter Api, but still allow customisations that hook into an official API (cut out the cons and keep the pros)


What are the common things people hack in postrender?
Is it to hide a button because they have their own custom button?
Eg: Provide an api to hide,
Expose the buttons action in a plugin api
Expose other methods required to perform the desired action via plugin api
List more …
What can we provide to fulfill these common requirements?

Imagineering Future,
you either use our Ui as is OR make your own Ui and use the editor and plugin Api to do as you wish.  It would be nice


Table plugin example:
The table plugin Ui provides users with specific features, most of these features are available programmatically via execCommands, some however are intertwined with the inner workings for example the onSubmitCellForm().  Without the Ui, you cannot programmatically call this.  We need a way to ‘register’ this method to a plugins api, which may look like this tinymce.activeEditor.plugins.table.api.onSubmitCellForm() or alternatively we could add to execCommand(‘tableOnSubmitCellForm’);

Life after removing postRender control
What are the things we still need to keep?
Event stuff -> on, off,  fire, hasEventListeners
Visuals -> focus, blur, hide, show, reflow, scrollIntoView ?
Strings -> encode entities, translate, aria


### Plugins

### Themes

### Existing data


## Installation and integration

### Pre-Migration Tasks

Spike
* Create a simple theme with alloy, editor.buttons & editor.menuItems
* Create an equivalent API to add a button only
* Create a Demo, that uses Alloy silver api, that adds 3 buttons
* Change the theme to ‘modern’, expect those 3 buttons to be added
* Rinse and repeat with toolbars, submenus, todo list all these components in jira


Text

## Configuration options compatibility table
