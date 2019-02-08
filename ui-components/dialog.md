---
layout: default
title: Dialog
title_nav: Dialog
description: Dialog is a TinyMCE UI component used to display simple information.
keywords: dialog dialogapi api
---
## Overview

A dialog is a TinyMCE UI component. Dialogs have their own dialog components which can be used inside dialogs to fulfill a use case. The Dialog API allows showing dialogs (sometimes referred to as modals) in the user application. This API supports the use of dynamic content for all aspects and is easily configurable and overridable. 

### Use cases

* **Display simple information** - The plugin that is used to view the source code is an example of a simple dialog that displays the HTML code from the content.

* **Display complex information** - These dialogs can display complex information by using layouts components like tabs or columns to help present information to the user. For example, the help and special characters dialog are tabbed dialogs.

* **Interactive dialogs** - These dialogs use web forms to collect interaction data and then apply the data. For example, the search and replace dialog uses an input field, where the input text will be used as the search key. Another example is, special characters or character map dialogs use typeaheads to dynamically narrow down matches as you type.

For example, the search and replace dialog is made up of two input fields - two checkboxes and five buttons. Components are composed by using a configuration structure. The most basic configuration structure is this:

```js
const dialogConfig = {
   title: 'Just a title',
   body: {
     type: 'panel', // The root body type can only be of type Panel or TabPanel
     items: [] // A list of UI component configurations the dialog will have.
   },
   buttons: [] // A list of button configurations the dialog will have.
}
```

## Dialog configuration framework

A Dialog configuration framework has three main parts:

* **Title** This is the title of a dialog.

* **Body** The body can be either a Panel or Tab Panel.

* **Footer** This section consists of a [button]({{site.baseurl}}/ui-components/dialogcomponents/#button) or list of buttons.

### Body components

#### Panel

A **Panel** is a basic container that holds other components. Many components can be configured inside a panel. In HTML terms, consider a panel as a `<div>` wrapper. A dialog body configuration must begin with either a Panel or a TabPanel.

```js
var panelConfig = {
  type: 'panel',
  items: []
};
```
**Items:** - These are an array of component configurations. Any component listed in the [dialog components]({{site.baseurl}}/ui-components/dialogcomponents/) are compatible.

#### TabPanel

A **TabPanel** is similar to a panel, where it can hold other [components]({{site.baseurl}}/ui-components/dialogcomponents/). Each tab can hold different components which display information for the user, that are grouped by tabs. A dialog body configuration must begin with either a Panel or a TabPanel.

```js
var tabPanelConfig = {
  type: 'tabpanel',
  tabs: [
    {
      title: string,
      items: [<other dialog components>]
    },
    ...
  ]
};
```
**Tabs:** These are an array of tab configurations. Each tab has a title which is used to reference the tab. The `items` property in the tab configuration takes a list of components and works the same way as a Panel. A tab can be programmatically be switched by calling `dialogApi.showTab('title')`. For example, the dialog that appears as a result of the Help plugin is usually formatted in tab panels.

![Help Button]({{site.baseurl}}/images/help.png)

### Footer components

#### Button

The following configuration is used to create a button inside the dialog body:

```js
var buttonConfig = {
  type: 'button',
  name: string,
  text: string,
  icon: string,
  disabled: boolean,
  primary: boolean,
  align: 'start' | 'end'
}
```

**Name:** The name property on the button is used as an id attribute to identify the dialog component. For example, when `name: foobutton` is defined and a user clicks on that button, the dialog `onAction()` handler will fire and provide an object containing the name of the dialog component, e.g. `details.name = 'foobutton'`. This will allow developers to create a click handler for **foobutton**. See dialog [onAction()]({{site.baseurl}}/ui-components/dialog/#interactiveexampleusingredialconfigvoid) configuration.

**Text:** This will be the text displayed on the button. For example, `text: ‘do magic’` will create a button with text **do magic**.

**Icon:** This will be the name of the icon to be displayed on the button, instead of any text. The name must correspond to an icon in the icon pack. Dialog buttons do not support mixing icons and text at the moment.

**Disabled:** (Value: Boolean; Default: False): When set to true, the button will be disabled when the dialog loads. To toggle between disabled and enabled states, use `dialogApi.enable(name)` or `dialogApi.disable(name)`. See [dialog API]({{site.baseurl}}/ui-components/dialog/#dialoginstanceapi) for more information.

**Primary:** (Default: False): When set to true, the button will be colored to stand out. The color will depend on the chosen [skin]({{site.baseurl}}/general-configuration-guide/customize-ui/#skins).

**Align:** (Default: 'end'): This will define the position of the button in the footer. When set to `end`, the button will be positioned on the right side of the dialog. When set to `start`, the button will be positioned on the left side of the dialog.

#### Button types

The **Close** button is pre-wired to abort and close the dialog.

The **Submit** button when clicked will invoke the `onSubmit` callback provided in the configuration. This callback is used to insert the message.

When `onSubmit` is called, a [dialog instance API]({{site.baseurl}}/ui-components/dialog/#dialoginstanceapi) is passed in as the parameter. The dialog does not close by default because some use cases may require a server-side callback confirmation.

The **Cancel** button dismisses an action request.

The **Custom** button can be used to specify a custom operation.

## Dialog application examples

### Simple dialog

The simple dialogs are used to display simple information, such as the plugins that display the source code or the HTML code from the content in the dialog. These dialogs may not have any values set in the body and footer parts of the dialog configuration.

![Source Code]({{site.baseurl}}/images/sourcecode.png)

An example of a simple dialog is:

```js
const dialogConfig = {
   title: 'Just a title',
   body: {
     type: 'panel', // The root body type can only be of type Panel or TabPanel.
     items: [] // A list of UI component configurations the dialog will have.
   },
   buttons: [] // A list of button configurations the dialog will have.
}
```

Using the above example, calling `tinymce.activeEditor.windowManager.open(dialogConfig)` will create a dialog with the title **Just a title**, an empty body, and an empty footer without buttons.

### Complex dialog

The complex dialogs are used to display more complex information. These sections can be contained within tabs. For example, the help dialog or the special chars dialog. These dialogs need a way to set the desired content into a defined tab section.

![Special Characters]({{site.baseurl}}/images/specialchars.png)

### Interactive dialog

The interactive dialogs use web forms to collect data from the user, and then apply the data. For example, the search and replace dialog uses an input field, where the input text will be used as the search key. These are the most complex forms of dialogs and require the users to configure the following:

* Definition of the desired user input (for example, the search value in the search and replace dialog).

* Method to process the user input.

* Required operation to be performed on the user input.

![Insert/Edit images]({{site.baseurl}}/images/interactive.png)

When the dimensions are provided in the above dialog, the interactive dialog can process that information and resize the image to fit the provided values.

### Interactive example using redial(config): void

The following example demonstrates one way of implementing an Interactive Dialog using the `redial(config): void` method. Custom buttons are used for creating two separate dialogs that are cycled through by pressing the **Next** button.

To see the output of the code, click on the TinyMCE tab on the fiddle below.

{% include codepen.html id="redial" height="900" tab="js" %}

In the configuration structure, the first level is like any other dialog. The difference is the `onAction` call loads a new configuration for the dialog using redial. The configuration that is used in the `redial(dialogConf)` call can be any supported dialog structure. It could even replace this **Redial Demo** configuration, in the **Pet Name Machine** example in the [compostion]({{site.baseurl}}/ui-components/dialog/#dialogcomposition) section.

This demo also includes the use of `dialogApi.enable` and `dialogApi.disable` to disable the **Next** button when user input is required. For **Checkboxes**, the `onChange` callback is used to handle the changes for the checkbox data. The checkbox data is mapped to its defined `name: anyterms`. When a user clicks or presses **Enter** on the checkbox, the new value of the checkbox is returned by the `getData()` call stored in the anyterms property. Given the state of the checkbox, the **Next** button is either disabled or enabled.

The `onAction` callback at the root level, is the handler for the **Previous** and **Next** buttons. The `onAction` handler is shared across multiple buttons, and this name property is used to identify the clicked button. The previous button named **doesnothing** is used to highlight branching.

A **Switch** statement could be used to handle many buttons.

The `onAction` callback inside the `redial()` call, is a separate handler for the redialed dialog. Since there is only one button, which button triggered the click is not checked. This handler demonstrates the `dialogApi.close()` API.

> Note: Please see [this]({{site.baseurl}}/ui-components/dialogcomponents) page for a comprehensive list of components.


## Dialog composition

The following example demonstrates how data flows through the dialog and how buttons are configured. This is an interactive dialog that inserts the name of a cat into the editor content on **Submit**. This example is referred to throughout the new [dialog instance API]({{site.baseurl}}/ui-components/dialog/#dialoginstanceapi) section.

The following Pet Name Machine example illustrates an interactive dialog:

{% include codepen.html id="dialog-pet-machine" height="150" tab="js" %}

The key highlight in this example is the input field for ‘enter the name of a cat’. The name property `catdata` is associated with the `initalData`.

> Note: All body components that require a name property also require an `initialData` property. This is how the relationship between the underlaying data model and the component is declared.

When the dialog is loaded first, the input field is pre-populated with the _initial cat_.

When `initialData.catdata = ''` then on load, the input field should be empty.

In this example, two buttons are declared to be placed in the dialog footer, **Close** and **Submit**. These are pre-constructed buttons that perform common actions, such as, closing a dialog or submitting a dialog.

## Dialog instance API

When a dialog is created, a dialog instance API is returned. For example, `const instanceApi = editor.windowManager.open(config);`

The instance API is a javascript object containing methods attached to the dialog instance. When the dialog is closed, the instance API is destroyed.

### Instance API methods

| Methods | Description |
|---------|-------------|
| `getData(): <T>` | `getData()` returns a key-value object matching the structure of the `initialData`. The object keys in the returned data object represent a component name.  For the [**Insert Cat Name**]({{site.baseurl}}/ui-components/dialog/#dialogcomposition) example, `data.catdata` is the value currently being held by the input field with the name `catdata`. |
| `setData(newConfig: object): void`  | `setData(newData)` updates the data set.  This method also works with partial data sets. |
| `enable(name: string): void` | Calling `enable()` and passing the component name will enable a component, allowing users to interact with the component. |
| `disable(name: string): void` | Calling `disable()` and passing the component name will disable the component. Calling `enable(name)` will re-enable the component. |
| `focus(name: string): void` | Calling `focus()` and passing the component name will set the browser focus to the component.|
| `block(message: string): void` | Calling `block()` and passing a message string will disable the entire dialog window and show a loading image. This is useful for handling asynchronous data. The message is used for screen reader accessibility. When the data is ready use `unblock()` to unlock the dialog. |
| `unblock(): void` | Calling `unblock()` will unlock the dialog instance restoring functionality. |
| `showTab(name: string): void` | This method only applies to tab dialogs only. Calling `showTab()` and passing the name of a tab will make the dialog switch to the named tag. |
| `close(): void` | Calling the `close()` method will close the dialog. When closing the dialog, all DOM elements and dialog data are destroyed.  When `open(config)` is called again, all DOM elements and data are recreated from the config. |
| `redial(config): void` | Calling `redial()` and passing a dialog configuration, will destroy the current dialog and create a new dialog. Redial is used to create a multipage form, where the next button loads a new form page or to re-create the dialog with different components or options. |






