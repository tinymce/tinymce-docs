---
layout: draft
title: Tables Components
title_nav: Tables Components
description: Tables is a TinyMCE UI component that adds table management functionality to the TinyMCE editor.
keywords:
---

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