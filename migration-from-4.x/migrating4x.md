---
layout: draft
title: Migrating from TinyMCE 4 to TinyMCE 5.
title_nav: Migrating from 4.x
description: Instructions for migrating from TinyMCE 4 to TinyMCE 5.
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
