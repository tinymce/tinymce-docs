---
layout: draft
title: Migrating from TinyMCE 4.x to TinyMCE 5.0.
title_nav: Migrating from 4.x
description: Instructions for migrating from TinyMCE 4.x to TinyMCE 5.0.
keywords: migration considerations premigration pre-migration
---

## Migrating from 4.x

### Initialization

In version 5 we have renamed the plugin from <X>  to <y>  to make it more suggestive and avoid any name conflict. Therefore, when initializing the editor or calling a method inside the editor, <y> method should be used instead of <x>.

### Plugins

In version 5 some plugins have been deprecated.  These plugins are now part of the core editor and are not required to be declared in the plugins setting.

#### Moved Plugins

| **Plugin Name** | **Required Changes** |
| ---------- | ------------------------- |
|ContextMenu | New api, see docs |
| WordCount | No changes required |

### Themes

In version 5, some themes have been removed and are now combined in a new single theme called Silver.

| **Removed Theme** | **New Theme** |
| ------------ | ------------- |
| Modern |  |
| Silver |  |
| Inlite (Distraction-free Editor) |  |
| Silver inline mode |  |

### Settings

In version 5, some settings were renamed to make them easier to find and browse. Some of them were removed because they are no longer necessary or they were out of the editor's scope.
Changed Settings

| **Old Settings** |  **New Settings**|
| ---------------- | ---------------- |

#### New Settings

The following options were newly added:

* TBD
* TBD
* TBD

#### Removed Settings

* Fixed_toolbar_container - because of the new inline toolbar behaviour\

### Methods

One of the main change from version 5 is the modular design. Old methods were moved into modules and some of them were removed because they were out of the editor's scope. If a method that you were using changed its name, we recommend that you also check the list of arguments.

#### Changed Methods

| **Old Method** | **New Method** |
| ----------- | -------------- |
| editor.addButton() |  |
| editor.ui.registry.addButton() |  |
| editor.addMenuItem() |  |
| editor.ui.registry.addMenuItem() |  |

#### New Method

The following methods were newly added:

##### New methods for custom toolbar buttons:

* editor.ui.registry.addToggleButton()
* editor.ui.registry.addSplitButton()
* editor.ui.registry.addMenuButton()

##### New method for custom menu items:

* editor.ui.registry.addToggleMenuItem()
* editor.ui.registry.addAutocompleter()
* editor.ui.registry.addContextMenu()

### Events

In version 5, the namespace of the events was changed from <X> to <Y>. Therefore, events should now be bind accordingly: $(selector).on('Y.event'). Most of the events from v4 are still available in v5, however most of them changed their name because of the new modular design. We recommend that you also check the list of arguments for the events you are using.
Some of the events from v4 were replaced in v5 by a generic event called commands.after. See tinymce.ui for more details.

#### Changed Events

| **Old Event** |  **New Event**|
| ------------- | ------------- |

#### New Events

The following events were newly added:


#### Removed Events

* BeforeRenderUi
