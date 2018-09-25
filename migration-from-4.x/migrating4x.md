---
layout: draft
title: Migrating from TinyMCE 4.x to TinyMCE 5.0.
title_nav: Migrating from 4.x
description: Instructions for migrating from TinyMCE 4.x to TinyMCE 5.0.
keywords: migration considerations premigration pre-migration
---

## Migrating from 4.x

### Initialization

The initialization process of Tiny 5, is the same as Tiny 4, the bootstrap process and initialization events all remain the same.  The main difference is in the init configuration, specifically the configuration items for Ui components.
It still retains a familiar JSON structure, however the properties have been greatly simplified.

### Plugins

In version 5 some plugins have been deprecated.  These plugins are now part of the core editor and are not required to be declared in the plugins setting.

#### Moved Plugins

| **Plugin Name** | **Description** |
| ---------- | ------------------------- |
|ContextMenu | New api, see docs |
| WordCount | No changes required |

### Themes

In version 5, some themes have been removed and are now combined in a new single responsive theme called Silver.

| **Removed Theme** | **Replaced by** |
| ------------ | ------------- |
| Modern | Silver |
| Modern inline | Silver Inline |
| Inlite (Distraction-free Editor) | Silver (distraction free configuration) |
| Mobile | Silver (responsive to screen size)  |

### Settings

In version 5, Some configurations have been removed because they are no longer necessary or an improved solution has been introduced.
Changed Settings

| **Old Settings** |  **Description**|
| ---------------- | ---------------- |
| dialog width | Uses css3 for optimal width |
| dialog height | Uses css3 for optimal height |
| settings for inline styles | Use css stylesheets for custom |

#### New Settings

The following options were newly added:

* Ui components, see
* TBD
* TBD

#### Removed Settings

* Fixed_toolbar_container - because of the new inline toolbar behaviour

### Methods

All methods for creating Ui components in Tiny 4 have been removed.
No core editor methods where removed (tinymce, editor, selection, on() etc remain the same)


#### Changed Methods

| **Old Method** | **New Method** | **Description** |
| ----------- | -------------- | -------------- |
| editor.addButton() | editor.ui.registry.addButton() | |
| editor.addMenuItem() | editor.ui.registry.addMenuItem() | |


#### New Method

The following methods were newly added:
Creating buttons now use explicit methods, for example to create a toggleButton we would use editor.ui.registry.addToggleButton().
The configuration for the toggle button has been simplified because it only supports one specific type of button.

##### New methods for custom toolbar buttons:

| **New Method** | **Description** |
| ----------- | -------------- |
| editor.ui.registry.addToggleButton()|  |
| editor.ui.registry.addSplitButton() |  |
| editor.ui.registry.addMenuButton() |  |

##### New method for custom menu items:

| **New Method** | **Description** |
| ----------- | -------------- |
| editor.ui.registry.addToggleMenuItem() |  |
| editor.ui.registry.addAutocompleter() |  |
| editor.ui.registry.addContextMenu() |  |

### Events

#### Removed Events

| **Removed Event** | **Description**|
| ----------------- | -------------- |
| BeforeRenderUi |  |
