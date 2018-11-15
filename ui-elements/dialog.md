---
layout: default
title: Dialog
title_nav: Dialog
description: Dialog is a TinyMCE UI component used to display simple information.
keywords: dialog dialogapi api
---

## Introduction

The Dialog API allows plugins to show dialogs (sometimes referred to as modals) in your application. The API supports the use of dynamic content for all aspects and is easily configurable/overridable.

## Use Cases

* **Display simple information** (e.g., source code plugin, displays the HTML code from the content in the dialog).
* **Display complex information** sections can be contained within tabs (e.g., help dialog or special chars dialog are tabbed dialogs).
* **Interactive dialogs** use web forms to collect interaction data and then apply the data  (e.g.: search and replace dialog, uses an input field. Where the input text will be used as the search key.)

##  Types of Dialogs

### Simple

The simple dialogs are used to display simple information, such as source code plugin, or the HTML code from the content in the dialog. These dialogs need a way to set the desired content into the dialog.

A dialog is a TinyMCE UI component. You can use one of the many TinyMCE components inside your dialogs to fulfill a use case. For example, the `search` and `replace` dialog is made up of two input fields - two check boxes and five buttons. We compose components by using a configuration structure. The most basic configuration structure is this:

For example,

```js
const dialogConfig = {
   title: 'Just a title',
   body: {
     type: 'panel', // Note: The root body type can only be of type Panel or TabPanel, see component definitions for `panel` or `tabpanel` below.
     items: []      //A list of UI component configurations the dialog will have.
   },
   buttons: []    //A list of button configurations the dialog will have.
}
```

Using the above example, calling `tinymce.activeEditor.windowManager.open(dialogConfig)` will create a dialog with the title `Just a title`, an empty body, and an empty footer without buttons.

### Complex

The complex dialogs are used to display complex information. These sections can be contained within tabs. For example, the help dialog or the special chars dialog. These dialogs need a way to set the desired content into a defined tab section.

### Interactive

The interactive dialogs use web forms to collect interaction data, and then apply the data  (e.g.: The search and replace dialog uses an input field.  Where the input text will be used as the search key). These are the most complex forms of dialogs and requires the ability to define what data is required, and how to get that data when we need it, and how to set the data to what we want.

The following `Pet Name Machine` example illustrates an interactive dialog:

{% include codepen.html id="dialog-pet-machine" height="150" tab="js" %}

The key highlight in this example is the input field for ‘enter the name of a cat’. The name property `catdata` is associated with the `initalData`. All body components that require a name property also require an `initialData` property. This is how the relationship between the underlaying data model and the component is declared. Notice that when we first load the dialog, the input field is pre-populated with `initial cat`. When `initialData.catdata = ''` then on load, the input field should be empty.

In this example, we declared two buttons to be placed in the dialog footer, **Close** and **Submit**.  These are pre-constructed buttons that perform common actions, such as,

* Closing a dialog or submitting a dialog.
* The type: `close` button is pre-wired to *abort* and *close* the dialog.
* The type: `submit` button when clicked, will invoke the `onSubmit` callback provided in the configuration. We use that callback to insert the message.  When `onSubmit` is called, a dialog `instanceApi` is passed in as the parameter. The dialog does not close by default because some use cases may require a server side callback confirmation.
* The type: `cancel` button dismisses an action request.
* The type: `custom` button can be used to specify your own custom operation.

## Composition

To demonstrate how data flows through the dialog and how buttons are configured, we will create a dialog that inserts the name of a cat into the editor content on submit.  We will refer to this example as we walk through the new dialog instance API.

## Dialog Instance API

When a dialog is created, a dialog `instanceApi` is returned.  For example,

```js
  const instanceApi = editor.windowManager.open(config);
```

The `instanceApi` is a javascript object containing methods attached to the dialog instance.  When the dialog is *closed*, the `instanceApi` is *destroyed*.

## instanceAPI Methods

| Methods | Description |
|---------|-------------|
| `getData(): <T>`  | `getData()` returns a key-value object matching the structure of the initialData -> See, initialData configuration. The object keys in the returned data object represent a component name.  For the Insert Cat Name example, `data.catdata` is the value currently being held by the input field with the name `catdata` |
| `setData(newConfig: object): void`  | `setData(newData)` updates the dataset.  This method also works with partial data sets. |
| `disable(name: string): void` | Calling `disable` and passing the component name will disable the component.  Calling enable(name) will re-enable the component. |
| `enable(name: string): void` | Calling `enable` and passing the component name will enable a component, and users can interact with the component. |
| `focus(name: string): void` | Calling `focus` and passing the component name will set the browser focus to the component.|
| `block(message: string): void` | Calling `block` and passing a message string will disable the entire dialog window and display the message notifying users why the dialog is blocked, this is useful for asynchronous data.  When the data is ready we use unblock() to unlock the dialog |
| `unblock(): void` | Calling `unblock` will unlock the dialog instance restoring functionality |
| `showtab(name: string): void` | This method only applies to tab dialogs only. Calling `showtab` and passing the name of a tab will make the dialog switch to the named tag. |
| `close(): void` | Calling the `close` method will close the dialog.  When closing the dialog, all DOM elements and dialog data are destroyed.  When `open(config)` is called again, all DOM elements and data are recreated from the config. |
| `redial(config): void` | Calling `redial` and passing a dialog configuration, will destroy the current dialog and create a new dialog.  Redial is used to create a multipage form, where the next button loads a new form page. |

This [example]({{site.baseurl}}/ui-elements/dialog/#example) demonstrates one way of implementing an Interactive Dialog using the `redial(config): void` method.


## Dialog Framework

A Dialog framework has two main parts:

* **Body** The body type can take either a **Panel** or **Tab Panel**.

* **Footer** This section consists of a **Button**.

### Panel

A **Panel** is a basic container, that holds other components. We can compose many components inside a panel.  In HTML terms, consider a panel a `<div>` wrapper.  A dialog body configuration must begin with either a **Panel** or a **TabPanel**.

```js
var panelConfig = {
  type: 'button',
  items: []
};
```

**Items:** Array of component configurations, any component listed in [this page]({{site.baseurl}}/ui-elements/dialogcomponents) are compatible.

### TabPanel

A **TabPanel** is similar to a Panel, where it can hold other components. We can separate components by tab sections. Each tab can hold different components which display information for the user that is grouped by tabs. A dialog body configuration must begin with either a **Panel** or a **TabPanel**.

```js
var tabPanelConfig = {
  type: 'tabpanel',
  tabs: [
    {
      title: string,
      items: []
    },
    …
  ]
};
```
**Tabs:** Array of tab configurations. Each tab has a title which is used to reference the tab. The items property in the tab configuration takes a list of components and works the same way as a Panel. We can programmatically switch to a tab by calling `dialogApi.showTab`(‘title’), see [dialogApi]({{site.baseurl}}/ui-elements/dialogcomponents) for more details.

### Button

To create a button inside the dialog body:

```js
var buttonConfig = {
  type:  'button'
  name: string,
  text: string,
  disabled: boolean,
  primary: boolean
}
```

**Name:** The name property on the button is used to identify which button was clicked. The name property is used as an id attribute to identify dialog components. When we define name: `foobutton` and a user clicks on that button. The dialog `onAction` handler will fire and provide event `details.name` will be `foobutton`. This will allow developers to create a click handler for ‘foobutton’. See dialog `[onAction]()` configuration.

**Text:** This will be the displayed button text. For example, text: ‘do magic’ will create a button with text ‘do magic’. Dialog buttons do not support icons at the moment.

**Disabled:** value: `boolean`, (defaults to false): When set to `true`, the button will be disabled when the dialog loads. To toggle between disabled and enabled states, use `dialogApi.enable(name)` or `dialogApi.disable(name)`. See [dialogApi]({{site.baseurl}}/ui-elements/dialogcomponents).

**Primary:** (defaults to false):  When set to `true`, the button will be colored to standout. The color will depend on the chosen skin.

## Example

### Interactive Example using `redial(config): void’

The following example demonstrates custom buttons using the redial dialog for creating two separate dialogs that we cycle through by pressing the `Next` button.

To see the output of the code, click on the TinyMCE tab on the fiddle below.

{% include codepen.html id="redial" height="900" tab="js" %}

In this redial example, we have two separate dialogs that we cycle through by pressing the `Next` button.  In the configuration structure, the first level is like any other dialog.

The difference is the `onAction` call, loads a new configuration for the dialog using redial.  The configuration we use in the `redial(dialogConf)`` call can be any supported dialog structure.  We could even replace this 'Redial Demo' configuration, with the Pet Name Machine example in the dialog [Interactive]({{site.baseurl}}/ui-elements/dialog/#interactive) section.

This demo also includes the use of `dialogApi.enable` and `dialogApi.disable` to disable the `Next` button when user input is required.  For checkboxes, we use the `onChange` callback to handle the changes for the checkbox data.  The checkbox data is mapped to its defined name: `anyterms`.  When a user clicks or presses enter on the checkbox, the new value of the checkbox is returned by the `getData()` call stored in the `anyterms` property.  Given the state of the checkbox, we either `disable` or `enable` the `Next` button.

The `onAction` callback at the root level, is the handler for the `Previous` and `Next` buttons. The `onAction` handler is shared across multiple buttons, and we use the name property to identify the clicked button.  The `Previous` button named 'doesnothing' is used to highlight branching.

A **Switch** statement could be used to handle many buttons.

The `onAction` callback inside the `redial()` call, is a separate handler for the redialed dialog.  Since there is only one button, we don't check which named button triggered the click. This handler demonstrates the `dialogApi.close()` API.

> Note: Please see [this]({{site.baseurl}}/ui-elements/dialogcomponents) page for a comprehensive list of components.

