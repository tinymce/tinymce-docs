---
layout: default
title: Migrating from TinyMCE 4.x to Tiny 5.0.
title_nav: Migrating from 4.x
description: Instructions for migrating from TinyMCE 4.x to Tiny 5.0.
keywords: migration considerations premigration pre-migration
---

## Migrating from 4.x

### Initialization

The initialization process of Tiny 5.0 is the same as TinyMCE 4.x. The bootstrap process and initialization events all remain the same.  The main difference is in the `init` configuration, specifically the configuration items for UI components.
It still retains a familiar JSON structure. However, the properties have been greatly simplified.

### Plugins

In version 5.0 some plugins have moved. These plugins are now a part of the core editor and are not required to be declared in the plugins setting.

#### Moved Plugins

| **Plugin Name** | **Description** |
| --------------- |  -------------- |
| [ContextMenu](https://www.tiny.cloud/docs/plugins/contextmenu/) | New API. See [docs]({{site.baseurl}}/components/contextmenu/). |
| [WordCount](https://www.tiny.cloud/docs/plugins/wordcount/) | Moved to the core. No changes required. |

### Themes

In version 5.0, some themes have been removed and are now combined in a new single responsive theme called **Silver**.

| **Removed Theme** | **Replaced by** |
| ----------------- | --------------  |
| [Modern](https://www.tiny.cloud/docs/themes/modern/) | Silver |
| [Modern inline](https://www.tiny.cloud/docs/general-configuration-guide/use-tinymce-inline/) | Silver Inline |
| [Inlite(Distraction-free Editor)](https://www.tiny.cloud/docs/themes/inlite/) | Silver (distraction free configuration) |
| [Mobile](https://www.tiny.cloud/docs/themes/mobile/) | Silver (responsive to screen size)  |

### Settings

In version 5.0, some configurations have been removed because they are no longer necessary or an improved solution has been introduced.

#### Changed Settings

| **Old Settings** |  **Description**|
| ---------------- | --------------- |
| Dialog width | Uses CSS3 for optimal width |
| Dialog height | Uses CSS3 for optimal height |
| Settings for inline styles | Uses CSS stylesheets for custom |

#### New Settings

The following options were newly added:

* **UI components**: Users can now build their components from configurations. This is an enhancement that simplifies the previous way of creating components.

#### Removed Settings

* **Fixed_toolbar_container**: Owing to the enhancements to the new inline toolbar behaviour, `fixed_toolbar_container` is not required in Tiny 5.0.

### Methods

* All methods for creating UI components in TinyMCE 4.x have been removed.
* No core editor methods where removed (tinymce, editor, selection, on(), etc remain the same).


#### Changed Methods

| **Old Method** | **New Method** |
| -------------- | -------------- |
| editor.addButton() | editor.ui.registry.addButton() |
| editor.addMenuItem() | editor.ui.registry.addMenuItem() |


#### New Method

The following methods were newly added:

* Creating buttons now use explicit methods. For example, to create a toggleButton we would use `editor.ui.registry.addToggleButton()`.
* The configuration for the toggle button has been simplified because it only supports one specific type of button.


##### New methods for custom toolbar buttons:

| **New Method** | **Description** |
| -------------- | --------------- |
| editor.ui.registry.addToggleButton() | Adds a custom toolbar toggle button. |
| editor.ui.registry.addSplitButton() | Adds a custom toolbar split button. |
| editor.ui.registry.addMenuButton() | Adds a custom toolbar menu button. |

For more information, see [docs]({{site.baseurl}}/components/toolbarbuttons/).

##### New method for custom menu items:

| **New Method** | **Description** |
| ----------- | -------------- |
| editor.ui.registry.addToggleMenuItem() | Adds a custom toggle menu item. |
| editor.ui.registry.addAutocompleter() | Adds a custom autocompleter. |
| editor.ui.registry.addContextMenu() | Adds a custom context menu. |

### Events

#### Removed Events

| **Removed Event** | **Description**|
| ----------------- | -------------- |
| BeforeRenderUi | Fired before the UI was rendered. |
