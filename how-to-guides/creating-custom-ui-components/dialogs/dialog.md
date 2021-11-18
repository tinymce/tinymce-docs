---
layout: default
title: Creating custom dialogs
title_nav: Creating custom dialogs
description: An overview of TinyMCE dialogs and how to create custom dialogs.
keywords: dialog dialogapi api
---

A dialog is a popup UI element that contains a header, body and footer, each containing specific types of sub-components. Dialogs also have an instance API and several configuration options, including configurable callback functions for certain dialog events.

> **Note**: {{site.productname}} also supports [URL dialogs]({{site.baseurl}}/ui-components/urldialog/). Configuring a URL dialog is different to configuring a standard {{site.productname}} dialog.

## Use cases

### Display basic information

The [`code`]({{site.baseurl}}/plugins/opensource/code) plugin's dialog is an example of a simple dialog. It contains only one body panel component that displays the HTML code from the content.

![Source Code]({{site.baseurl}}/images/sourcecode.png)

### Display complex information

More complex dialogs can use [tab panels]({{site.baseurl}}/ui-components/dialogcomponents/#tabpanel) and various [layouts]({{site.baseurl}}/ui-components/dialogcomponents/#layoutcomponents) to categorise and organise information displayed to the user. For example, the [`help`]({{site.baseurl}}/plugins/opensource/help) and [`character map`]({{site.baseurl}}/plugins/opensource/charmap) plugins use dialogs with tabbed panels to categorise and separate information.

![Special Characters]({{site.baseurl}}/images/specialchars.png)

### Interactive dialogs

{{site.productname}} dialogs can also contain [interactive components]({{site.baseurl}}/ui-components/dialogcomponents/#basiccomponents) such as buttons, checkboxes and input fields.

For example, the [`image`]({{site.baseurl}}/plugins/opensource/image) plugin's dialog allows for users to link to or upload an image, input a description, title, class, caption, height and width, then insert it into the editor.

![Insert/Edit images]({{site.baseurl}}/images/interactive.png)

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
