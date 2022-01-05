---
layout: default
title: APIs for custom dialogs
title_nav: APIs
description: APIs for custom TinyMCE dialogs
keywords: dialog dialogapi api
---

When a dialog is created, a dialog instance API is returned. For example, `const instanceApi = editor.windowManager.open(config);`. The dialog API instance is also passed to some of the [dialog configuration options](#configurationoptions).

The instance API is a JavaScript object containing methods attached to the dialog instance. When the dialog is closed, the instance API is destroyed.

## Dialog data and state

All dialogs have an internal data store, which is used to track the value and/or state of the dialog's panel components.

This data store takes the form of a JavaScript object, where the object's keys are the `name`s of the configured panel components. For example, if a dialog contains a [checkbox]({{site.baseurl}}/how-to-guides/creating-custom-ui-components/dialogs/dialog-components/#checkbox) component configured with `name: myCheckbox` and the checkbox is not checked then the dialog's data object will contain `{ myCheckbox: false }`.

The current value of a dialog's data store can be accessed using the dialog instance API's `getData()` function. It can also be set using `setData()` which will automatically update the relevant components. For example, if you call `setData({ myCheckbox: true })` with the previous example, the checkbox would be toggled to checked.

To set initial values for components when the dialog is opened, use the `initialData` [dialog configuration option](#configurationoptions). For example, you could set the checkbox in the previous example to be checked when the dialog opens by including `initialData: { myCheckbox: true }` in the dialog's configuration.

## Dialog API methods

| Methods | Description |
|---------|-------------|
| `getData() => <T>` | `getData()` returns a key-value object matching the structure of the `initialData`. The object keys in the returned data object represent a component's `name`.  |
| `setData(newConfig: object) => void`  | `setData(newData)` updates the data set.  This method also works with partial data sets. |
| `enable(name: string) => void` | Calling `enable()` and passing the component `name` will enable a component, allowing users to interact with the component. |
| `disable(name: string) => void` | Calling `disable()` and passing the component's `name` will disable the component. |
| `focus(name: string) => void` | Calling `focus()` and passing the component's `name` will set the browser's focus to the component.|
| `block(message: string) => void` | Calling `block()` and passing a message string will disable the entire dialog window and show a loading image. This is useful for handling asynchronous data. The message is used for screen reader accessibility. When the data is ready use `unblock()` to unblock the dialog. |
| `unblock() => void` | Calling `unblock()` will unblock the dialog restoring functionality. |
| `close() => void` | Calling the `close()` method will close the dialog. When closing the dialog, all DOM elements and dialog data are destroyed.  When `windowManager.open(config)` is called again, all DOM elements and data are recreated from the config. |
| `redial(config) => void` | Calling `redial()` and passing a dialog body configuration will destroy and recreate the body of the dialog. See the [Redial](#redial) documentation. |
| `showTab(name: string) => void` | **This method only applies to [tab panel]({{site.baseurl}}/how-to-guides/creating-custom-ui-components/dialogs/dialog-components/#tabpanel) dialogs.** Calling `showTab()` and passing the `name` of a tab will make the dialog switch to the named tab. |

## Redial

**Redial** is a concept that allows developers to replace a dialog's configuration with a new configuration. This can be used for advanced applications such as:

* Programmatically changing the information displayed in a dialog while it is open.
* Changing panel components on user action. For example, updating the options in a `selectbox` component based on user input to another interactive component.
* Creating a multipage form where a button leads to the next page.

To redial a dialog, pass a new dialog configuration to the `redial()` method from the [dialog instance API](#dialoginstanceapi).

> Note: At the moment, Redial does not support partial dialog replacement or the replacement of specific components. Redial must be passed an entire dialog configuration.

See the [redial example](#interactiveexampleusingredial) for more information on how to use Redial.