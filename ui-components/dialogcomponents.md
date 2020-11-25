---
layout: default
title: Dialog components
title_nav: Dialog components
description: A reference list of all TinyMCE dialog components.
keywords: dialog dialogapi
---

This chapter is a reference list of all {{site.productname}} dialog components.

## Body components

The body of a dialog must be either a `panel` (a single panel) or a `tabpanel` (a collection of panels). Each panel can contain panel components, which are either [layout components](#layoutcomponents) or [basic components](#basiccomponents) such as inputs, buttons and text.

### panel

The basic dialog type is a **panel** dialog. A panel is a container for [interactive panel components](#panelcomponents). A panel type dialog only has one panel.

```js
{
  type: 'panel',
  items: [ ... ] // array of panel components
}
```

### tabpanel

A **tabpanel** dialog contains multiple panels, and a tab navigation menu on the left-hand side of the dialog to allow for switching between panels. Each panel can contain different [panel components](#panelcomponents), allowing for complex dialogs.

Each tab panel is defined using the following configuration options:

| Name | Type | Requirement | Description |
| ---- | ---- | ----------- | ----------- |
| name | string | optional | A identifier for the tab. If not specified, the tab will be assigned a randomly generated name. |
| title | string | required | The title of the tab for the navigation menu. |
| items | array | required | An array of [panel components](#panelcomponents) to display inside the panel. |

> **Note**: Panel components in different tabs with the same `name` will use the same value in the [dialog's data object]({{site.baseurl}}/ui-components/dialog/#dialogdataandstate). This allows for transference of data between tabs. For example, the `charmap` and `emoticons` plugin dialogs contain a search input field in each tab. By assigning the same name to all the search fields, user data entered on one tab will be transferred when the user changes tabs.

```js
{
  type: 'tabpanel',
  tabs: [ // array of tab panel configurations
    {
      name: 'mytab',
      title: 'My Tab',
      items: [ ... ] // array of panel components
    },
    ... // more panel configurations
  ]
}
```

#### Dialog instance API methods

The [dialog instance API]({{site.baseurl}}/ui-components/dialog/#dialoginstanceapi) contains the `showTab("tabName")` method, which allows for programmatic tab switching using the registered `name` of a tab.

#### Dialog configuration event callbacks

A dialog can be configured with an [`onTabChange`]({{site.baseurl}}/ui-components/dialog/#configurationoptions) callback. This function is called when the user changes tabs. It is passed the dialog instance API and a `details` object which contains `newTabName` and `oldTabName`.

As an example of when this is useful, the `charmap` and `emoticons` plugin dialogs use `newTabName` to change search results to match the character or emoticon category represented by the current tab.

#### Example: Using the dialog API

Below is a trivial example of how to use `onTabChange` and `showTab()`.

```js
const dialogConfig = {
  title: 'Example Dialog',
  body: {
    type: 'tabpanel',
    tabs: [ ... ] // array of panel configurations
  },
  buttons: [],
  onTabChange: function (dialogApi, details) {
    // log the contents of details
    console.log(details.newTabName);
    console.log(details.oldTabName);

    // switch back to the old tab
    dialogApi.showTab(details.oldTabName);
  }
};
```

## Panel components

Panels can contain [layout components](#layoutcomponents) and [basic components](#basiccomponents), which include components for displaying information and user interaction and input.

> **Note**: Panel components in different tabs with the same `name` will use the same value in the [dialog's data object]({{site.baseurl}}/ui-components/dialog/#dialogdataandstate). This allows for transference of data between tabs. For example, the `charmap` and `emoticons` plugin dialogs contain a search input field in each tab. By assigning the same name to all the search fields, user data entered on one tab will be transferred when the user changes tabs.

### Layout components

Some panel components can be used to apply a layout to an array of other panel components.

#### bar

A **bar** is a layout component that creates a single row of items in the dialog body.

```js
{
  type: 'bar', // component type
  items: [ ... ] // array of panel components
}
```

#### collection

A **collection** is a layout component that creates a panel containing a collection of small buttons in the dialog body. For example, this component is used in the dialogs for the [`charmap`]({{site.baseurl}}/plugins/opensource/charmap) and [`emoticons`]({{site.baseurl}}/plugins/opensource/emoticons) plugins.

```js
{
  type: 'collection', // component type
  name: 'collection-1', // identifier
  label: 'Collection Label'
}
```

To populate the collection with collection items, specify an array of items in the dialog's [`initialData`]({{site.baseurl}}/ui-components/dialog/#dialogdataandstate) property. To update the items in the collection, use the [dialog API's]({{site.baseurl}}/ui-components/dialog/#dialoginstanceapi) `setData()` method. Each item should contain a `text`, `value`, and `icon` property. For example:

```js
[
  {
    text: 'Bold',
    value: 'bold',
    icon: 'bold'
  },
  ... // more item configurations
]
```

#### grid

A **grid** is a layout component that creates columns in the dialog body.

```js
{
  type: 'grid', // component type
  columns: 2, // number of columns
  items: [ ... ] // array of panel components
}
```

#### label

A **label** is a layout component that wraps other components and adds a label above the group of components.

```js
{
  type: 'label', // component type
  label: 'Caption', // text for the group label
  items: [ ... ] // array of panel components
}
```

### Basic components

These panel components are used either to display information or to allow for user interaction and input.

#### alertbanner

An **alertbanner** is a coloured banner designed to notify users of important information. There are four "levels" of alert banner which each display in a different color. The levels are:

- `info`
- `warn`
- `error`
- `success`

Clicking the icon in the alert banner will fire the `onAction` function in the dialog's configuration, and pass it an object containing the `name` of the alertbanner component and `value`. `value` is the value of the `url` option if it is configured, otherwise it is an empty string.

| Name | Type | Requirement | Description |
| ---- | ---- | ----------- | ----------- |
| type | `'alertbanner'` | required | The component type. Must be `'alertbanner'`. |
| text | string | required | HTML text to display in the alertbanner. |
| level | `'info'`, `'warn'`, `'error'` or `'success'` | required | The alertbanner's level, which determines its styling.  |
| icon | string | required | {{site.predefinedIconsOnly}} |
| url | string | optional | A URL that is passed to `onAction` when the icon button is clicked. |

```js
{
  type: 'alertbanner', // component type
  level: 'info',
  text: 'An <strong>informative</strong> message to the user',
  url: 'http://my.url',
  icon: 'question'
}
```

#### button

A **button** is a clickable component that can contain text or an icon. There are two types of buttons (primary and secondary buttons), though the only difference is that they are styled differently. Primary buttons are intended to stand out. The color will depend on the chosen [skin]({{site.baseurl}}/general-configuration-guide/customize-ui/#skins).

> **Note**: Panel buttons are different to [dialog footer buttons]({{site.baseurl}}/ui-components/dialog/#footerbuttons).

**Events:** Interacting with a **button** component will fire the `onAction` function in the dialog's configuration, and pass it the button's `name` in the `details` object. This allows developers to create a click handler for each button.

| Name | Type | Requirement | Description |
| ---- | ---- | ----------- | ----------- |
| type | `'button'` | required | The component type. Must be `'button'`. |
| text | string | required | Text to display in the button **if icon is not specified**. Also used for the button's `title` attribute. |
| name | string | optional | A identifier for the button. If not specified, the button will be assigned a randomly generated name.  |
| icon | string | optional | {{site.predefinedIconsOnly}} **When configured, the button will display the icon instead of text.** |
| primary | boolean | optional | default: `false` - Whether to style the button as a primary or secondary button. |
| borderless | boolean | optional | default: `false` - Whether to style the button without a border and background color. |

> **Note**: Buttons do not support mixing icons and text at the moment.

```js
{
  type: 'button', // component type
  text: 'Alpha',
  primary: true,
  name: 'alpha-button',
  disabled: true,
  borderless: false
}
```

#### checkbox

A **checkbox** is a composite component with a checkbox and a label, and with `on` and `off` states.

**Events:** Interacting with a **checkbox** component will fire the `onChange` function in the dialog's configuration.

```js
{
  type: 'checkbox', // component type
  name: 'checkbox-1', // identifier
  label: 'Checkbox Label', // text for the label
  disabled: true // disabled state
}
```

#### colorinput

A **colorinput** is a specialized composite component with a label, an input field and button which opens a color swatch popup on click. Users can either type a hex color code into the input, or use the color swatch to choose a color. The color swatch button will change color to reflect the selected color.

```js
{
  type: 'colorinput', // component type
  name: 'colorinput', // identifier
  label: 'Color Label' // text for the label
}
```

#### colorpicker

A **colorpicker** component is an intuitive color picker tool similar to that found in modern image editors. It allows for a color to be chosen using a RGB colour slider, or for a color to be entered as either an RGB or hex color value.

```js
{
  type: 'colorpicker', // component type
  name: 'colorpicker', // identifier
}
```

#### dropzone

A **dropzone** is a composite component that catches drag and drops items or lets the user browse that can send a list of files for processing and receive the result. A text label is also rendered above the dropzone.

**Events:** Interacting with a **dropzone** component will fire the `onChange` function in the dialog's configuration.

```js
{
  type: 'dropzone', // component type
  name: 'dropzone', // identifier
  label: 'Dropzone' // text for the label
}
```

#### htmlpanel

A **htmlpanel** component takes any valid HTML and renders it in the dialog.

> **Note**: Despite the name a htmlpanel can not be used as a body component like `panel` and `tabpanel`.

```js
{
  type: 'htmlpanel', // component type
  html: '<div>Html goes here</div>'
}
```

#### iframe

An **iframe** component takes a HTML document as a string and displays it in the dialog within an iframe.

> **Note**: To replace the entire dialog body with an iframe that loads its content from a URL, use a [URL dialog]({{site.baseurl}}/ui-components/urldialog).

| Name | Type | Requirement | Description |
| ---- | ---- | ----------- | ----------- |
| type | `'iframe'` | required | The component type. Must be `'iframe'`. |
| name | string | required | A identifier for the button. |
| label | string | optional | String to use for the iframe's `title` attribute. |
| sandboxed | boolean | optional | default: `true` - When true, sets the iframe's `sandbox` attribute to `"allow-scripts allow-same-origin"`. |

```js
{
  type: 'iframe', // component type
  name: 'iframe', // identifier
  label: 'Description of iframe', // text for the iframe's title attribute
  sandboxed: true
}
```

To set the iframe's content on dialog open, specify document HTML as a string in the dialog's [`initialData`]({{site.baseurl}}/ui-components/dialog/#dialogdataandstate) property. To update the iframe's content, use the [dialog API's]({{site.baseurl}}/ui-components/dialog/#dialoginstanceapi) `setData()` method. For example:

```js
dialogApi.setData({
  iframe: '<!DOCTYPE html>' +
          '<html>' +
          '<head></head>' +
          '<body><p>Content here.</p></body>' +
          '</html>'
})
```

#### input

An **input** is a composite component that renders a label and a single line text input field.

**Events:** Interacting with an **input** component will fire the `onChange` function in the dialog's configuration **as the user types**.

| Property    | Type      | Requirement | Description                                                                                                |
| ----------- | --------- | ----------- | ---------------------------------------------------------------------------------------------------------- |
| type        | '`input`' | required    | The component type. Must be `'input'`.                                                                     |
| name        | string    | required    | A identifier for the input.                                                                               |
| label       | string    | optional    | String to use for the input's `title` attribute.                                                          |
| placeholder | string    | optional    | String of placeholder text for the input field.                                                            |
| disabled    | boolean   | optional    | Allows the field to be disabled. Default is `false`.                                                       |
| inputMode   | string    | optional    | Allows for the specification of input type for displaying contextual onscreen keyboards on mobile devices. |

```js
{
  type: 'input', // component type
  name: 'inputA', // identifier
  inputMode: 'text',
  label: 'Input Label', // text for the label
  placeholder: 'example', // placeholder text for the input
  disabled: true, // disabled state
  maximized: false // grow width to take as much space as possible
}
```

##### inputMode

{{site.requires_5_1v}}

`inputMode` is a property of `input`.

Use `inputMode` to set the type of onscreen keyboard provided on mobile devices when a user focuses the input element.

For a list of valid input modes, see: [MDN Web Docs - inputmode](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode).

#### listbox

{{site.requires_5_5v}}

A **listbox** is a composite component with a label and a dropdown list of options for users to select from. This component displays a menu-like dropdown and allows nested options to be shown to users.

**Events:** Interacting with a **listbox** component will fire the `onChange` function in the dialog's configuration.

```js
{
  type: 'listbox', // component type
  name: 'ListBoxA', // identifier
  label: 'ListBox Label',
  disabled: true, // disabled state
  items: [
    { text: 'One', value: 'one' },
    { text: 'Two', value: 'two' },
    { text: 'Submenu', items: [
      { text: 'Three', value: 'three' }
    ]}
  ]
}
```

#### selectbox

A **selectbox** is a composite component with a label and a single dropdown list of options for users to select from.

**Events:** Interacting with a **selectbox** component will fire the `onChange` function in the dialog's configuration.

```js
{
  type: 'selectbox', // component type
  name: 'SelectA', // identifier
  label: 'Select Label',
  disabled: true, // disabled state
  size: 1, // number of visible values (optional)
  items: [
    { value: 'one', text: 'One' },
    { value: 'two', text: 'Two' }
  ]
}
```

#### sizeinput

A **sizeinput** is a specialized composite component with two input fields labelled "Width" and "Height" and a "ratio lock" button. It should be used for setting dimensions on content elements.

**Events:** Interacting with the input fields of a **sizeinput** component will fire the `onChange` function in the dialog's configuration **when the user clicks away from the component**.

```js
{
  type: 'sizeinput', // component type
  name: 'size', // identifier
  label: 'Dimensions',
  disabled: true // disabled state
}
```

#### table

A **table** is a layout component that renders a simple table.

```js
{
  type: 'table', // component type
  header: [ 'Heading 1', 'Heading 2', 'Heading 3' ],
  cells: [
    [ 'Cell 1', 'Cell 2', 'Cell 3' ],
    [ 'Cell 4', 'Cell 5', 'Cell 6' ]
  ]
}
```

#### textarea

A **textarea** is a multiline text field.

**Events:** Interacting with a **textbox** component will fire the `onChange` function in the dialog's configuration.

```js
{
  type: 'textarea', // component type
  name: 'text-a', // identifier
  label: 'Text: ',
  placeholder: 'example',
  disabled: true, // disabled state
  maximized: false // grow width to take as much space as possible
}
```

#### urlinput

A **urlinput** is a specialized composite component for URL input or file upload. It has a label, a text input field and an optional filepicker button. The urlinput component also includes a **typeahead** dropdown that will display previously-entered URLs that match the current input text and update as the user types.

> **Note**: The filepicker button will only appear if [`file_picker_callback`]({{site.baseurl}}/configure/file-image-upload/#file_picker_callback) is configured.

**Events:** Interacting with a **selectbox** component will fire the `onChange` function in the dialog's configuration **when the user clicks away from the component**.

| Name | Type | Requirement | Description |
| ---- | ---- | ----------- | ----------- |
| type | `'urlinput'` | required | The component type. Must be `'urlinput'`. |
| name | string | required | A identifier for the urlinput. |
| label | string | optional | String to use for the label. |
| filetype | `'file'` or `'image'` or `'media'` | optional | default: `'file'` - Restrict the types of files that can be uploaded using the filepicker. `file` allows anything, including document links. **Requires `file_picker_callback` to be configured.** |
| disabled | boolean | optional | default: `false` - Whether the component should initially be disabled. |

##### urlinput examples

**urlinput for links**

The filepicker will accept any file type and the typeahead will include 5 previously entered URLs plus all anchor targets and headings in the document.

```js
{
  type: 'urlinput', // component type
  name: 'url', // identifier
  filetype: 'file', // allow any file types
  label: 'Url', // text for component label
  disabled: true // disabled state
}
```

**urlinput for image upload**

The filepicker will only accept images and the typeahead will include 5 previously entered image URLs.

```js
{
  type: 'urlinput', // component type
  name: 'src', // identifier
  filetype: 'image', // restrict file types to image types
  label: 'Source', // text for component label
  disabled: true // disabled state
}
```
