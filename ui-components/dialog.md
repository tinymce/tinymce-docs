---
layout: default
title: Dialog
title_nav: Dialog
description: An overview of TinyMCE dialogs and how to create custom dialogs.
keywords: dialog dialogapi api
---
## Overview

A dialog is a popup UI element that contains a header, body and footer, each containing specific types of sub-components. Dialogs also have an instance API and several configuration options, including configurable callback functions for certain dialog events.

> Note: TinyMCE also supports [URL dialogs]({{site.baseurl}}/ui-components/urldialog/). Configuring a URL dialog is quite different to configuring a standard TinyMCE dialog.

### Use cases

#### Display simple information

The [`code`]({{site.baseurl}}/plugins/code) plugin's dialog is an example of a simple dialog. It contains only one body panel component that displays the HTML code from the content.

![Source Code]({{site.baseurl}}/images/sourcecode.png)

#### Display complex information
More complex dialogs can use [tab panels]({{site.baseurl}}/ui-components/dialogcomponents/#tabpanel) and various [layouts]({{site.baseurl}}/ui-components/dialogcomponents/#layoutcomponents) to categorise and organise information displayed to the user. For example, the [`help`]({{site.baseurl}}/plugins/help) and [`character map`]({{site.baseurl}}/plugins/charmap) plugins use dialogs with tabbed panels to categorise and separate information.

![Special Characters]({{site.baseurl}}/images/specialchars.png)

#### Interactive dialogs
TinyMCE dialogs can also contain [interactive components]({{site.baseurl}}/ui-components/dialogcomponents/#basiccomponents) such as buttons, checkboxes and input fields.

For example, the [`image`]({{site.baseurl}}/plugins/image) plugin's dialog allows for users to link to or upload an image, input a description, title, class, caption, height and width, then insert it into the editor.

![Insert/Edit images]({{site.baseurl}}/images/interactive.png)

Interactive dialogs may require extensive configuration. For example, for a form-like dialog you may need to configure:

* dialog components
* initial data
* input validation on change and/or on submit
* input processing on submit
* handling of asynchronous data calls

See the following sections for information on configuration options.

## Dialog configuration

A dialog configuration has three main parts:

* **Title:** The title of the dialog. This will display in the header of the dialog.

* **Body:** The body of the dialog. The body component can be a [panel](#panel) or a [tab panel](#tabpanel), which can contain an array of [panel components]({{site.baseurl}}/ui-components/dialogcomponents/#panelcomponents) such as buttons, inputs and text.

* **Buttons:** An array of [footer buttons](#button) that are displayed in the dialog's footer.

### Basic example

The most basic configuration structure is this:

```js
tinymce.activeEditor.windowManager.open({
  title: 'Dialog Title', // The dialog's title - displayed in the dialog header
  body: {
    type: 'panel', // The root body type - a Panel or TabPanel
    items: [ // A list of panel components
      {
        type: 'htmlpanel', // A HTML panel component
        html: 'Panel content goes here'
      }
    ]
  },
  buttons: [] // A list of footer buttons
});
```

### Config options

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| title | string | required | The title of the dialog. This will display in the header of the dialog. |
| body | Panel or TabPanel | required | The configuration for the body of the dialog. See [Body components](#bodycomponents). |
| buttons | DialogButton[] | required | An array of [footer buttons](#footercomponents) to render in the footer of the dialog.  |
| size | 'normal', 'medium' or 'large' | optional | default: `normal` - Dialog size options. |
| initialData | object | optional | An object containing initial values for the dialog's panel components. |
| onAction | (dialogApi, details) => void | optional | Function invoked when a user interacts with a `button` type panel component. |
| onSubmit | (dialogApi) => void | optional | Function invoked when the dialog is submitted. |
| onCancel | (dialogApi) => void | optional | Function invoked when the dialog is cancelled. The dialog header's close button and the `cancel` footer button invoke this function. |
| onChange | (dialogApi, data) => void | optional | Function invoked when the value of an `input` type panel component changes. |
| onClose | () => void | optional | Function invoked when the dialog is closed. |
| onTabChange | (dialogApi, details) => void | optional | **This method only applies to [tab panel]({{site.baseurl}}/ui-components/dialogcomponents/#tabpanel) dialogs.** Function invoked when the user changes tabs. `details` is an object that contains `newTabName` and `oldTabName`. |

For more information on the `dialogApi` object that is passed to some of the configuration options, see the [dialog instance API](#dialogapimethods) documentation.

### Body components

The body of a dialog must be either a [`panel`]({{site.baseurl}}/ui-components/dialogcomponents/#panel) (a single panel) or a [`tabpanel`]({{site.baseurl}}/ui-components/dialogcomponents/#tabpanel) (a collection of panels). Each panel can contain [panel components]({{site.baseurl}}/ui-components/dialogcomponents/#panelcomponents) such as inputs, buttons and text.

> Note: TinyMCE also supports [URL dialogs]({{site.baseurl}}/ui-components/urldialog/). Configuring a URL dialog is quite different to configuring a standard TinyMCE dialog.

#### Panel

The basic dialog type is a **panel** dialog. A panel is a container for [panel components]({{site.baseurl}}/ui-components/dialogcomponents/#panelcomponents). A panel type dialog only has one panel.

```js
{
  type: 'panel',
  items: [ ... ] // array of panel components
}
```

#### TabPanel

A **tabpanel** dialog contains multiple panels, and a tab navigation menu on the left-hand side of the dialog to allow for switching between panels. Each panel can contain different [panel components]({{site.baseurl}}/ui-components/dialogcomponents/#panelcomponents), allowing for complex dialogs.

See the [tab panel component reference]({{site.baseurl}}/ui-components/dialogcomponents/#tabpanel) for tab panel configuration options.

```js
{
  type: 'tabpanel',
  tabs: [ // array of tab panel specifications
    {
      name: 'mytab',
      title: 'My Tab',
      items: [ ... ] // array of panel components
    },
    ...
  ]
}
```

The `name` of the panel can be used with the [`dialogApi.showTab('tabName')`](#dialogapimethods) method to programmatically switch tabs. It is also passed to [`onTabChange`](#configoptions) as part of the `details` object.

##### Example tab panel

The Help plugin's dialog is an example of a tab panel dialog.

![Help Button]({{site.baseurl}}/images/help.png)

### Footer buttons

A **button** is a clickable component that can contain text or an icon. There are two types of buttons (primary and secondary buttons), though the only difference is that they are styled differently. Primary buttons are intended to stand out. The color will depend on the chosen [skin]({{site.baseurl}}/general-configuration-guide/customize-ui/#skins).

> Note: Dialog footer buttons are different to [dialog panel buttons]({{site.baseurl}}/ui-components/dialogcomponents/#button).

#### Configuration

| Name | Type | Requirement | Description |
| ---- | ---- | ----------- | ----------- |
| type | `'button'` | required | The component type. Must be `'button'`. |
| text | string | required | Text to display in the button **if icon is not specified**. Also used for the button's `title` attribute. |
| name | string | optional | A identifier for the button. If not specified, the button will be assigned a randomly generated name.  |
| icon | string | optional | Name of the icon to be displayed. Must correspond to an icon in the icon pack. **When configured, the button will display the icon instead of text.** |
| primary | boolean | optional | Whether to style the button as a primary or secondary button. |
| disabled | boolean | optional | default: `false` - When `true`, the button will be disabled when the dialog loads. |
| align | `'end'` or `'start'` | optional | default: `'end'` - When set to `'end'` the button will display on the right-hand side of the dialog. When set to `'start'` the button will display on the left-hand side. |

> Note: Buttons do not support mixing icons and text at the moment.

#### Dialog instance API methods

To toggle between a button's disabled and enabled states, use `dialogApi.enable(name)` or `dialogApi.disable(name)`, where `name` is the identifier the button was configured with. See the [dialog instance API](#dialoginstanceapi) documentation for more information.

#### Dialog config event callbacks

When a user clicks on a button, the dialog's `onAction()` will be fired. The `details` object that is passed to `onAction()` will include the button's `name`. This will allow developers to create a click handler for a footer button. See the [Redial example]({{site.baseurl}}/ui-components/dialog/#interactiveexampleusingredialconfigvoid) for an example of how to use this.

The different footer button types will also invoke different callbacks when clicked:

* The **Submit** button will invoke the `onSubmit` callback provided in the configuration. This callback is used to insert the message.
* The **Cancel** button will invoke the `onCancel` and `onClose` callbacks provided in the configuration.
* The **Custom** button will invoke the `onAction` callbacks provided in the configuration, and pass it the button's `name` in the `details` object.

See the [dialog configuration options](#configoptions) documentation for more information.


#### Example

```js
{
  type: 'submit',
  name: 'submitButton',
  text: 'Submit',
  // icon: 'checkmark', // will replace the text if configured
  disabled: false,
  primary: true,
  align: 'start'
}
```

## Dialog instance API

When a dialog is created, a dialog instance API is returned. For example, `const instanceApi = editor.windowManager.open(config);`. The dialog API instance is also passed to some of the [dialog configuration options](#configoptions).

The instance API is a javascript object containing methods attached to the dialog instance. When the dialog is closed, the instance API is destroyed.

### Dialog API methods

| Methods | Description |
|---------|-------------|
| `getData(): <T>` | `getData()` returns a key-value object matching the structure of the `initialData`. The object keys in the returned data object represent a component's `name`.  |
| `setData(newConfig: object): void`  | `setData(newData)` updates the data set.  This method also works with partial data sets. |
| `enable(name: string): void` | Calling `enable()` and passing the component `name` will enable a component, allowing users to interact with the component. |
| `disable(name: string): void` | Calling `disable()` and passing the component's `name` will disable the component. |
| `focus(name: string): void` | Calling `focus()` and passing the component's `name` will set the browser's focus to the component.|
| `block(message: string): void` | Calling `block()` and passing a message string will disable the entire dialog window and show a loading image. This is useful for handling asynchronous data. The message is used for screen reader accessibility. When the data is ready use `unblock()` to unblock the dialog. |
| `unblock(): void` | Calling `unblock()` will unblock the dialog restoring functionality. |
| `close(): void` | Calling the `close()` method will close the dialog. When closing the dialog, all DOM elements and dialog data are destroyed.  When `windowManager.open(config)` is called again, all DOM elements and data are recreated from the config. |
| `redial(config): void` | Calling `redial()` and passing a dialog body configuration will destroy and recreate the body of the dialog.  |
| `showTab(name: string): void` | **This method only applies to [tab panel]({{site.baseurl}}/ui-components/dialogcomponents/#tabpanel) dialogs.** Calling `showTab()` and passing the `name` of a tab will make the dialog switch to the named tab. |

## Examples

### Simple interactive dialog

This example is referred to throughout the new [dialog instance API]({{site.baseurl}}/ui-components/dialog/#dialoginstanceapi) section.

Redial can be used to change information or options. F, create a multipage form, where the next button loads a new form page or to re-create the dialog with different components or options.

For the [**Insert Cat Name**]({{site.baseurl}}/ui-components/dialog/#dialogcomposition) example, `data.catdata` is the value currently being held by the input field with the name `catdata`.

The following example demonstrates how data flows through the dialog and how buttons are configured. This is an interactive dialog that inserts the name of a cat into the editor content on **Submit**.

{% include codepen.html id="dialog-pet-machine" height="150" tab="js" %}

The key highlight in this example is the input field for ‘enter the name of a cat’. The name property `catdata` is associated with the `initalData`.

> Note: All body components that require a name property also require an `initialData` property. This is how the relationship between the underlaying data model and the component is declared.

When the dialog is loaded first, the input field is pre-populated with the _initial cat_.

When `initialData.catdata = ''` then on load, the input field should be empty.

In this example, two buttons are declared to be placed in the dialog footer, **Close** and **Submit**. These are pre-constructed buttons that perform common actions, such as, closing a dialog or submitting a dialog.


### Interactive example using redial

The following example demonstrates one way of implementing an Interactive Dialog using the `redial(config): void` method. Custom buttons are used for creating two separate dialogs that are cycled through by pressing the **Next** button.

To see the output of the code, click on the TinyMCE tab on the fiddle below.

{% include codepen.html id="redial" height="900" tab="js" %}

In the configuration structure, the first level is like any other dialog. The difference is the `onAction` call loads a new configuration for the dialog using redial. The configuration that is used in the `redial(dialogConf)` call can be any supported dialog structure. It could even replace this **Redial Demo** configuration, in the **Pet Name Machine** example in the [compostion]({{site.baseurl}}/ui-components/dialog/#dialogcomposition) section.

This demo also includes the use of `dialogApi.enable` and `dialogApi.disable` to disable the **Next** button when user input is required. For **Checkboxes**, the `onChange` callback is used to handle the changes for the checkbox data. The checkbox data is mapped to its defined `name: anyterms`. When a user clicks or presses **Enter** on the checkbox, the new value of the checkbox is returned by the `getData()` call stored in the anyterms property. Given the state of the checkbox, the **Next** button is either disabled or enabled.

The `onAction` callback at the root level, is the handler for the **Previous** and **Next** buttons. The `onAction` handler is shared across multiple buttons, and this name property is used to identify the clicked button. The previous button named **doesnothing** is used to highlight branching.

A **Switch** statement could be used to handle many buttons.

The `onAction` callback inside the `redial()` call, is a separate handler for the redialed dialog. Since there is only one button, which button triggered the click is not checked. This handler demonstrates the `dialogApi.close()` API.

> Note: Please see [this]({{site.baseurl}}/ui-components/dialogcomponents) page for a comprehensive list of components.
