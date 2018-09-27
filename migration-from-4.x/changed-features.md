---
layout: default
title: Changed Features
title_nav: Changed Features
description: These features have either changed or have been deleted in TinyMCE 5.0.
keywords: deleted removed changedfeatures migration 4.x
---

Each release of TinyMCE adds new features and functionality. We also occasionally remove features and functionality, usually because we've added a better option.
Here are the details about the features and functionalities that we removed in Tiny 5.0.

## Removed Features

### Listbox

**Listbox** is no longer a supported toolbar button type in Tiny 5.0. Though listbox has been removed, any functionality provided by custom listbox toolbar buttons can be retained by switching to another type of toolbar button.
Any custom listbox toolbar buttons can be converted to a different type of toolbar button using the new API. The recommended toolbar button type to switch to is **Split** button.


## Removed Themes

### Inlite

The Inlite theme is no longer supported in Tiny 5.0. The features that the Inlite theme used to provide, is now available as a plugin. For a workaround, using the configuration parameter { theme: 'silver', inline: true, toolbar: false, plugins: [ 'inlite' ] },
will provide a similar and improved distraction free experience in Tiny 5.0.

### Modern

The Modern theme is no longer supported in Tiny 5.  The modern themes Ui library `tinymce.ui.*` are also deleted. This change may impact user depending upon their levels of custumization.
For a workaround, refer the following table:

| Customization Level | Description | Impact |
| ------------------- | ----------- | ------ |
| Minor | Has some custom buttons | no Ui fixes required, update button configuration to Tiny 5.0 format |
| Moderate | Has a webform in a dialog that can be submitted | port tiny 4 config to tiny 5 config |
| Major | You have created the kitchen sink | Not all api use cases are covered by our new Tiny 5 components. However, we will strive to create a supported work around or if there are sufficient requests, we will create a component to resolve the use case. |

> Note: Please provide feedback on your use case, and your current Tinymce 4.x configuration file containing only the UI component that you wish to be supported or to know a work around.

> Note: The Silver theme in Tiny 5.0. contains a set of configurarable UI components that could be used to replace the current customizations(modern, inline, and inlite theme). Silver is enabled by default. If you do not specify a theme, it will default to Silver.


## Changed Features

### Table

* Styles text field has been removed from the advanced table of the dialogs. This simplifies the dialogs for users, and gives the editor stricter control over the table styles which means we are better able to ensure the styles are correct.
* Improved how styles are set and retrieved from tables, rows and cells, so this should be more reliable now.
* Shifted to using CSS more for styling, and therefore was able to remove a few legacy data attributes that we were setting on tables/rows/cells which are no longer good practice to use. This makes the output HTML cleaner and more modern.
* When opening a properties dialog with a single table/row/cell selected, the dialog will autofill with the relevant existing values. If you select multiple rows or cells and open the relevant properties dialog, Tiny 4 will leave all the dialog fields blank. In Tiny 5, any fields which have the same values for all the selected rows or cells will autofill, and the fields which have no existing value or have differing values will be empty.
* "Border" input field in the tableprops dialog is now called "Border width", for better clarity.

### Context Menu

The contextMenu can provide a simple list of clickable commands, or offer an in-menu form. This makes very simple attribute modification possible. Tiny 5.0 offers the contextMenu Plugin that is designed for web applications in need of menus on a possibly large amount of objects. Now, a single menu is defined that can be used by multiple objects and a contextMenu doesn't need to bind itself to triggering objects. This allows injecting and removing triggers without having to re-initialize or update contextMenu.

- The context menu is no longer a plugin, it is part of the core and always enabled.
- Plugins can now register context menu sections.
- Editor `contextmenu` configuration can include menu items as before, but now also as plugin menu sections. For example, the default context menu config is now `link image editimage table spelling` which are all plugin references.


### Context Toolbar

The Context Toolbar takes its buttons from things that are registered with as toolbar buttons using `addButton`, `addToggleButton`, `addSplitButton` or `addMenuButton`. For more information on Context Toolbars, see [docs]({{site.baseurl}}/components/contexttoolbar).

### Context Form

ContextForms are a generalisation of the `Insert Link` form that existed in the original `inlite` plugin from [TinyMCE 4]((https://www.tiny.cloud/docs/themes/inlite/#quicklink)).

### Toolbar buttons

1. Svg icons for better crisp look
2. Buttons are now added via methods in `editor.ui.registry` rather than `editor` e.g. `editor.ui.registry.addButton()` instead of `editor.addButton()`
3. New methods were added for split, toggle and menu toolbar buttons with configuration options specific to the button type, to make the creation of custom toolbar buttons easier.

### Custom Menu Items // TODO explanations of the subpoints

* editor.menuitems
* editor.sidebar

### Toolbar Menus

* New buttons are added to the global `editor.settings.menus` which is an enhancement since, it now shows the toggled state.
* Improved mouse and keyboard nav





