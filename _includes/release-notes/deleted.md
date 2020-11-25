
In TinyMCE 5.0, some configurations have been removed because they are no longer necessary or an improved solution has been introduced. Refer to the [Migration Guide]({{site.baseurl}}/migration-from-4x/), for more information.

### Editor-Core removed settings

| **Setting** | **Description** |
| ----------- | --------------- |
| [`fixed_toolbar_container`](https://www.tiny.cloud/docs-4x/configure/editor-appearance/#fixed_toolbar_container) | Owing to the enhancements to the new inline toolbar behaviour, `fixed_toolbar_container` is not required in TinyMCE 5.0. |
| [`insert_button_items`](https://www.tiny.cloud/docs-4x/configure/editor-appearance/#insert_button_items) | Owing to the changes in the menus and removal of the `context` property, `insert_button_items` is not required in TinyMCE 5.0. Refer to the [Migration guide]({{site.baseurl}}/migration-from-4x/#removedsettings) for a workaround. |

### Removed themes

* [Inlite]({{site.baseurl}}/migration-from-4x/#inlite)
* [Modern]({{site.baseurl}}/migration-from-4x/#modern)

### Removed events

| **Removed event** | **Description**|
| ----------------- | -------------- |
| BeforeRenderUi | Fired before the UI was rendered. |

### Removed toolbar button types

[Listbox](https://www.tiny.cloud/docs-4x/demo/custom-toolbar-listbox/) is no longer a supported toolbar button type in TinyMCE 5.0. Though listbox has been removed, any functionality provided by custom listbox toolbar buttons can be retained by switching to a different kind of toolbar button using the new methods. The recommended toolbar button type to switch to is the **Split** button.

### Removed features

The following plugins from TinyMCE 4.x do not require height or width options to be specified in TinyMCE 5.0:

* [Code]({{site.baseurl}}/plugins/opensource/code/)
* [Codesample]({{site.baseurl}}/plugins/opensource/codesample/)
* [Preview]({{site.baseurl}}/plugins/opensource/preview/)
* [Template]({{site.baseurl}}/plugins/opensource/template/)

Refer to the [Migration Guide]({{site.baseurl}}/migration-from-4x/), for more information.

### Other removed component configuration settings

Some UI configurations in TinyMCE 5.0 have changed due to an updated UI engine. Please see this [section]({{site.baseurl}}/migration-from-4x/#otherremovedcomponentconfigurationsettings) of the Migration Guide for more information.
