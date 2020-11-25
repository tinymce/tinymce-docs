---
layout: default
title: Dialog
title_nav: Dialog
description: An overview of TinyMCE dialogs and how to create custom dialogs.
keywords: dialog dialogapi api
---

A dialog is a popup UI element that contains a header, body and footer, each containing specific types of sub-components. Dialogs also have an instance API and several configuration options, including configurable callback functions for certain dialog events.

> **Note**: {{site.productname}} also supports [URL dialogs]({{site.baseurl}}/ui-components/urldialog/). Configuring a URL dialog is quite different to configuring a standard {{site.productname}} dialog.

## Use cases

### Display simple information

The [`code`]({{site.baseurl}}/plugins/opensource/code) plugin's dialog is an example of a simple dialog. It contains only one body panel component that displays the HTML code from the content.

![Source Code]({{site.baseurl}}/images/sourcecode.png)

### Display complex information

More complex dialogs can use [tab panels]({{site.baseurl}}/ui-components/dialogcomponents/#tabpanel) and various [layouts]({{site.baseurl}}/ui-components/dialogcomponents/#layoutcomponents) to categorise and organise information displayed to the user. For example, the [`help`]({{site.baseurl}}/plugins/opensource/help) and [`character map`]({{site.baseurl}}/plugins/opensource/charmap) plugins use dialogs with tabbed panels to categorise and separate information.

![Special Characters]({{site.baseurl}}/images/specialchars.png)

### Interactive dialogs

{{site.productname}} dialogs can also contain [interactive components]({{site.baseurl}}/ui-components/dialogcomponents/#basiccomponents) such as buttons, checkboxes and input fields.

For example, the [`image`]({{site.baseurl}}/plugins/opensource/image) plugin's dialog allows for users to link to or upload an image, input a description, title, class, caption, height and width, then insert it into the editor.

![Insert/Edit images]({{site.baseurl}}/images/interactive.png)

## Dialog configuration

A dialog configuration has three main parts to match the three main parts of the dialog's UI:

* **Title:** The title of the dialog. This will display in the header of the dialog.

* **Body:** The body of the dialog. The body component can be a [panel](#panel) or a [tab panel](#tabpanel), which can contain an array of [panel components]({{site.baseurl}}/ui-components/dialogcomponents/#panelcomponents) such as buttons, inputs and text.

* **Buttons:** An array of [footer buttons](#footerbuttons) that are displayed in the dialog's footer.

### Basic example

The configuration for a basic dialog that displays HTML information might look like this:

```js
tinymce.activeEditor.windowManager.open({
  title: 'Dialog Title', // The dialog's title - displayed in the dialog header
  body: {
    type: 'panel', // The root body type - a Panel or TabPanel
    items: [ // A list of panel components
      {
        type: 'htmlpanel', // A HTML panel component
        html: 'Panel content goes here.'
      }
    ]
  },
  buttons: [ // A list of footer buttons
    {
      type: 'submit',
      text: 'OK'
    }
  ]
});
```

### Configuration options

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| title | string | required | The title of the dialog. This will display in the header of the dialog. |
| body | `panel` or `tabpanel` component | required | The specification for the [body component](#bodycomponents). |
| buttons | `FooterButton[]` | required | An array of [footer buttons](#footerbuttons) to render in the footer of the dialog. |
| size | `'normal'`, `'medium'` or `'large'` | optional | default: `normal` - Dialog size options. |
| initialData | object | optional | An object containing initial values for the dialog's panel components. |
| onAction | `(dialogApi, details) => void` | optional | Function invoked when a user interacts with a `button` type panel component, clicks a **Custom** type footer button, or clicks an item in a **Menu** type footer button. |
| onSubmit | `(dialogApi) => void` | optional | Function invoked when a **Submit** type footer button is clicked. |
| onCancel | `(dialogApi) => void` | optional | Function invoked when the dialog is cancelled. The dialog header's close button and a **Cancel** type footer button invoke this function. |
| onChange | `(dialogApi, details) => void` | optional | Function invoked when the value of an `input` type panel component changes. |
| onClose | `() => void` | optional | Function invoked when the dialog is closed. The dialog header's close button, a **Cancel** type footer button and the dialog instance API's `close()` method invoke this function. |
| onTabChange | `(dialogApi, details) => void` | optional | **This method only applies to [tab panel]({{site.baseurl}}/ui-components/dialogcomponents/#tabpanel) dialogs.** Function invoked when the user changes tabs. `details` is an object that contains `newTabName` and `oldTabName`. |

For more information on the `dialogApi` object that is passed to some of the configuration options, see the [dialog instance API](#dialoginstanceapi) documentation.

#### Event callback functions

Each of the event callback functions - `onAction`, `onSubmit`, `onCancel`, `onChange`, `onClose` and `onTabChange` - are shared between all dialog components that may trigger them. For example, **Custom** type footer buttons and dialog panel buttons all trigger `onAction`. Therefore, callback functions that may be triggered by multiple components are passed an object (called `details` above) that contains the `name` of the component that triggered the event.

Any callback function that is not passed a `details` object assumes that the dialog will only contain one component which can trigger it or that it does not matter if the function is triggered by multiple components. For example, `onSubmit` is only triggered when a user clicks on a **Submit** type footer button, and {{site.productname}} assumes that a dialog will only have one **Submit** type button. In comparison, `onCancel` and `onClose` are both triggered by clicking the `X` button in the top right of a dialog or by clicking a **Cancel** type footer button. These two buttons have the same functionality, and therefore {{site.productname}} does not differentiate between them.

### Body components

The body of a dialog must be either a [`panel`]({{site.baseurl}}/ui-components/dialogcomponents/#panel) (a single panel) or a [`tabpanel`]({{site.baseurl}}/ui-components/dialogcomponents/#tabpanel) (a collection of panels). Each panel can contain [panel components]({{site.baseurl}}/ui-components/dialogcomponents/#panelcomponents) such as inputs, buttons and text.

> **Note**: {{site.productname}} also supports [URL dialogs]({{site.baseurl}}/ui-components/urldialog/). Configuring a URL dialog is quite different to configuring a standard {{site.productname}} dialog.

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

The `name` of the panel can be used with the [`dialogApi.showTab('tabName')`](#dialogapimethods) method to programmatically switch tabs. It is also passed to [`onTabChange`](#configurationoptions) as part of the `details` object.

##### Example tab panel

The Help plugin's dialog is an example of a tab panel dialog.

![Help Button]({{site.baseurl}}/images/help.png)

### Footer buttons

A **button** is a clickable component that can contain text or an icon. There are three types of buttons (primary, secondary and menu buttons). Primary and secondary buttons will perform an action when clicked, however they are styled differently. Primary buttons are intended to stand out. The color will depend on the chosen [skin]({{site.baseurl}}/general-configuration-guide/customize-ui/#skins). Menu buttons will open a menu with more options when clicked, instead of performing an action.

> **Note**: Dialog footer buttons are different to [dialog panel buttons]({{site.baseurl}}/ui-components/dialogcomponents/#button).

#### Configuration

| Name | Type | Requirement | Description |
| ---- | ---- | ----------- | ----------- |
| type | `'submit'` or `'cancel'` or `'custom'` or `'menu'` | required | Must be `'submit'`, `'cancel'`, `'custom'` or `'menu'` based on the type of callback function that should be invoked when the button is clicked. |
| text | string | required | Text to display in the button if `icon` is not specified. Also used for the button's `title` attribute. |
| name | string | optional | An identifier for the button. If not specified, the button will be assigned a randomly generated `name`.  |
| icon | string | optional | {{site.predefinedIconsOnly}} **When configured, the button will display the icon instead of text.** |
| primary | boolean | optional | default: `false` - Whether to style the button as a primary or secondary button. |
| disabled | boolean | optional | default: `false` - When `true`, the button will be disabled when the dialog loads. |
| align | `'end'` or `'start'` | optional | default: `'end'` - When set to `'end'` the button will display on the right-hand side of the dialog. When set to `'start'` the button will display on the left-hand side. |

> **Note**: Buttons do not support mixing icons and text at the moment.

#### Disabling and enabling buttons

To toggle between a button's disabled and enabled states, use `enable(name)` or `disable(name)` from the [dialog instance API](#dialoginstanceapi), where `name` is the identifier the button was configured with.

#### Button types and event callbacks

The different footer button types will invoke different callbacks when clicked:

* A **Submit** type button will invoke the `onSubmit` callback function provided in the dialog configuration.
* A **Cancel** type button will invoke the `onCancel` and `onClose` callback functions. These callback functions are also fired when a user clicks the `X` button in the top right of the dialog.
* A **Custom** type button will invoke the `onAction` callback function, and pass it the button's `name` in the `details` object. This allows developers to create a click handler for each **Custom** type footer button in the dialog. See the [Redial example](#interactiveexampleusingredial) for an example of how to use this.
* A **Menu** type button will fetch a list of options and display them in a drop-down menu. When a menu button item is clicked, the item `name` is passed to the [_dialog `onAction` callback_](#configurationoptions).  For details, see: [Dialog menu buttons](#dialogmenubuttons).

See the [dialog configuration options](#configurationoptions) documentation for more information.

##### Example: Dialog footer button

```js
{
  type: 'submit', // button type
  name: 'submitButton', // identifying name
  text: 'Submit', // text for the button
  // icon: 'checkmark', // will replace the text if configured
  disabled: false, // button is active when the dialog opens
  primary: true, // style the button as a primary button
  align: 'start' // align the button to the left of the dialog footer
}
```

##### Dialog menu buttons

A dialog menu button is a drop-down button that can be used to provide a drop-down list of items in a dialog footer.

When dialog menu items are clicked, a [_dialog `onAction` callback_](#configurationoptions) is triggered. The `name` of the menu item is passed into the onAction callback.
Clicking on the menu footer button won't trigger any callbacks and will only open the menu of specified items.

###### Dialog menu button

The following options can be specified for a dialog menu button:

| Name     | Value   | Requirement | Description                                                                                                                                           |
| -------- | ------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| items    | array   | required    | An array of [dialog menu items](#dialogmenuitems).                                                                                                    |
| name     | string  | optional    | An identifier for the button. If not specified, the button will be assigned a randomly generated `name`.                                              |
| text     | string  | optional    | Text to display if no icon is found.                                                                                                                  |
| icon     | string  | optional    | {{site.predefinedIconsOnly}}                                                                        |
| tooltip  | string  | optional    | Text for button tooltip.                                                                                                                              |

###### Dialog menu items

The following options can be specified for a dialog menu button _item_:

| Name     | Value   | Requirement | Description                                                                                                                                                                                              |
| -------- | ------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name     | string  | required    | Identifier for the dialog menu item which is passed to the [_dialog `onAction` callback_](#configurationoptions). `name` can be used with [initialData](#configurationoptions) to set the initial state. |
| type     | string  | required    | The type `togglemenuitem` should be used.                                                                                                                                                                |
| text     | string  | optional    | Text to display if no icon is found.                                                                                                                                                                     |
| value    | string  | optional    | A value to associate with the menu item.                                                                                                                                                                 |

###### Example: Dialog footer menu button

```js
buttons: [
  {
    type: 'menu', // button type
    name: 'myMenuButton', // identifying name
    text: 'My Menu', // text for the button
    // icon: 'user', // will replace the text if configured
    disabled: false, // button is active when the dialog opens
    align: 'start', // align the button to the left of the dialog footer
    tooltip: 'This is "My" button.',
    items: [
      {
        name: 'dialogMenuButtonItem1',
        type: 'togglemenuitem',
        text: 'Item 1.'
      },
      {
        name: 'dialogMenuButtonItem2',
        type: 'togglemenuitem',
        text: 'Item 2.'
      }
    ]
  }
]
```

## Dialog instance API

When a dialog is created, a dialog instance API is returned. For example, `const instanceApi = editor.windowManager.open(config);`. The dialog API instance is also passed to some of the [dialog configuration options](#configurationoptions).

The instance API is a JavaScript object containing methods attached to the dialog instance. When the dialog is closed, the instance API is destroyed.

### Dialog API methods

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
| `showTab(name: string) => void` | **This method only applies to [tab panel]({{site.baseurl}}/ui-components/dialogcomponents/#tabpanel) dialogs.** Calling `showTab()` and passing the `name` of a tab will make the dialog switch to the named tab. |

## Dialog data and state

All dialogs have an internal data store, which is used to track the value and/or state of the dialog's panel components.

This data store takes the form of a JavaScript object, where the object's keys are the `name`s of the configured panel components. For example, if a dialog contains a [checkbox]({{site.baseurl}}/ui-components/dialogcomponents/#checkbox) component configured with `name: myCheckbox` and the checkbox is not checked then the dialog's data object will contain `{ myCheckbox: false }`.

The current value of a dialog's data store can be accessed using the dialog instance API's `getData()` function. It can also be set using `setData()` which will automatically update the relevant components. For example, if you call `setData({ myCheckbox: true })` with the previous example, the checkbox would be toggled to checked.

To set initial values for components when the dialog is opened, use the `initialData` [dialog configuration option](#configurationoptions). For example, you could set the checkbox in the previous example to be checked when the dialog opens by including `initialData: { myCheckbox: true }` in the dialog's configuration.

## Redial

**Redial** is a concept that allows developers to replace a dialog's configuration with a new configuration. This can be used for advanced applications such as:

* Programmatically changing the information displayed in a dialog while it is open.
* Changing panel components on user action. For example, updating the options in a `selectbox` component based on user input to another interactive component.
* Creating a multipage form where a button leads to the next page.

To redial a dialog, pass a new dialog configuration to the `redial()` method from the [dialog instance API](#dialoginstanceapi).

> Note: At the moment, Redial does not support partial dialog replacement or the replacement of specific components. Redial must be passed an entire dialog configuration.

See the [redial example](#interactiveexampleusingredial) for more information on how to use Redial.

## Examples

### Simple interactive dialog

The following example demonstrates how data flows through the dialog and how buttons are configured. This is an interactive dialog that inserts the name of a cat into the editor content on submit.

{% include live-demo.html id="dialog-pet-machine" height="150" tab="js" %}

The dialog in this example contains two interactive components - an input component named `catdata` and a checkbox component named `isdog`. These names are used in the `initialdata` configuration property to set the initial values for these components. In this case, when the dialog loads the input will contain the text _initial Cat_ and the checkbox will not be checked.

The dialog also contains two footer buttons - a **submit** type button and a **cancel** type button. Since the dialog's configuration does not contain an `onCancel` callback, clicking the cancel type button will just close the dialog. However, the configuration does contain an `onSubmit` callback that will be fired when the submit type button is clicked.

In the `onSubmit` callback, the dialog instance API that is passed into the callback is used to call `getData()`. This function returns the dialog's data store, from which we are able to get the state of the `isdog` checkbox and the value of the `catadata` input. This information is used to construct a sentence which is then inserted into the editor. Finally, `close()` is called to manually close the dialog.

### Interactive example using Redial

Redial can be used to change information that is displayed in the dialog, create a multipage form where the next button loads a new form page, or to re-create the dialog with different components or options.

The following example demonstrates one way of implementing a multipage form dialog using the `redial()` method. Custom buttons are used to switch between the two pages of the form by calling `redial()` with the appropriate dialog configuration.

To see the output of the code, click on the {{site.productname}} tab on the fiddle below.

{% include live-demo.html id="redial" height="900" tab="js" %}

The example JavaScript code contains two dialog configurations - `page1Config` and `page2Config`. The {{site.productname}} initialisation code adds a button to the editor that when clicked calls `editor.windowManager.open(page1Config)` to open a dialog using the first configuration.

The configuration for the first page of the multipage form contains a description of the form and a checkbox. The checkbox, via the dialog's `onChange()` callback function, toggles whether the `next` button is disabled or enabled. The `next` button when clicked fires the `onAction()` callback function, which in turn triggers `redial()` which will replace the `page1Config` dialog with the `page2Config` dialog.

More specifically:

The `onChange()` callback in `page1Config` is fired when the checkbox is toggled. It uses `enable` and `disable` from the dialog instance API to disable and enable the **Next** button. The code uses `getData()` from the dialog instance API to get the state of the checkbox called `anyterms` (which is `true` if checked and `false` if unchecked) and choose `enable()` or `disable()` based on its value. It assigns the correct function to a variable, then calls that variable with the component name `uniquename` to toggle the state of the **Next** button.

The `onAction()` callback in `page1Config` is fired when either of the footer buttons are clicked, since they are both custom type footer buttons. `onAction()` is passed the dialog instance API and an object containing some data about the change event, including the `name` of the component that triggered it. This is important since the same `onAction()` handler is shared across all compatible dialog components. The code checks the `name` of the component that triggered `onAction()` and if it is `uniquename` (the name of the **Next** button) `redial(page2Config)` is called. If the component's `name` is `donothing` then the code does nothing.

In `page2Config` the `onAction()` callback uses `getData()` to get the value of the `selectbox` component, and specifically whether the user has chosen _Cat_, _Dog_ or _Rock_. It then constructs a sentence using this value, inserts it into the editor content and calls `close()` to manually close the dialog.