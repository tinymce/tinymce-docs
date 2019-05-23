---
layout: default
title: Dialog components
title_nav: Dialog components
description: Dialog component summary is a reference list of all TinyMCE UI components that can be used to display simple information.
keywords: dialog dialogapi
---

This chapter is a reference list of all TinyMCE dialog UI components.

## Body Components

The body of a dialog must be either a `panel` (a single panel) or a `tabpanel` (a collection of panels). Each panel can contain [interactive components](#panelcomponents) such as inputs, buttons and text.

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
| name | string | optional | A unique identifier for the tab. If not specified, the tab will be assigned a randomly generated value. |
| title | string | required | The title of the tab for the navigation menu. |
| items | array | required | An array of [panel components](#panelcomponents) to display inside the panel. |

**Note:** Panel components in different tabs with the same `name` will use the same value in the [dialog's data object]({{site.baseurl}}/ui-components/dialog/#dialogcomposition). This allows for transference of data between tabs. For example, the `charmap` and `emoticons` plugin dialogs contain a search input field in each tab. By assigning the same name to all the search fields, user data entered on one tab will be transferred when the user changes tabs.

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

#### Dialog Instance API Methods

The dialog instance API contains the `showTab("tabName")` method, which allows for programmatic tab switching using the registered `name` of a tab.

For more information on the dialog instance API, see the [dialog instance API]({{site.baseurl}}/ui-components/dialog/#dialoginstanceapi) reference.

#### Dialog Config Options

A dialog can be configured with an [`onTabChange`]({{site.baseurl}}/ui-components/dialog/#configoptions) callback. This function is called when the user changes tabs. It is passed the dialog instance API and a `details` object which contains `newTabName` and `oldTabName`.

As an example of when this is useful, the `charmap` and `emoticons` plugin dialogs use `newTabName` to change search results to match the character or emoticon category represented by the current tab.

#### Example

Below is a trivial example of how to use `onTabChange` and `showTab()`.

```js
const dialogConfig = {
  title: "Example Dialog",
  body: {
    type: 'tabpanel',
    tabs: [ ... ]
  },
  buttons: [],
  onTabChange: (dialogApi, details) => {
    // log the contents of details
    console.log(details.newTabName);
    console.log(details.oldTabName);

    // switch back to the old tab
    dialogApi.showTab(details.oldTabName);
  }
};
```

## Panel Components

### alertbanner

An **alertbanner** is a color-coded banner to alert the user of a problem. A URL may be provided to direct users to a reference site that may resolve the informed issue.

```js
{
  type: 'alertbanner',
  level: 'info', // 'info' | 'warn' | 'error' | 'success'
  text: 'An informative message to the user',
  icon: string
}
```

### bar

A **bar** is a layout component that creates a single row of items in the dialog body.

```js
{
  type: 'bar',
  items: [ ]
}
```

### button

A **button** is a component to be used inside the dialog body. These buttons differ from toolbar buttons and dialog footer buttons.


```js
{
  type: 'button',
  text: 'Alpha',
  primary: true,
  name: 'alpha-button'
}
```

### checkbox

A **checkbox** is a component used to toggle states to `on` or `off`.

```js
{
  type: 'checkbox',
  name: 'checkbox-1',
  label: 'Checkbox Label'
}
```

### collection

A **collection** is a layout component that creates a panel containing a collection of symbols in the dialog body.

```js
{
  type: 'collection',
  name: 'collection-1',
  label: 'Collection Label'
}
```

> Note: To populate the collection with data, specify an array of items in the dialogs [`initialData`]({{site.baseurl}}/ui-components/dialog/#dialogcomposition) property. Each item should contain a `text`, `value`, and `icon` property.

### colorinput

A **colorinput** is a specialized input field which takes `RGB` colors and will render the sample color typed.

```js
{
  type: 'colorinput',
  name: 'colorA',
  label: 'Color Label'
}
```

### colorpicker

A **colorpicker**  is an intuitive color picker tool similar to image editors.

```js
{
  type: 'colorpicker',
  name: 'color',
  label: 'Color A'
}
```

### dropzone

A **dropzone** is a component that catches drag and drops items or lets the user browse that can send a list of files for processing and receive the result.

```js
{
  type: 'dropzone',
  name: 'dropzone',
  label: 'Dropzone'
}
```

### grid

A **grid** is a layout component that creates columns in the dialog body.

```js
{
  type: 'grid',
  columns: 2,
  items: [ ]
}
```

### htmlpanel

An **htmlpanel** is similar to panel. It only takes a string of HTML.

```js
{
  type: 'htmlpanel',
  html: '<div>html</div>'
}
```

### iframe

An **iframe** is a component used to define the values of an iframe.

```js
{
  name: 'IframeName',
  type: 'iframe',
  label: 'Description of iframe',
  sandboxed: true
}
```

### input

An **input** is a single line text field, and also renders a label element.

```js
{
  type: 'input',
  name: 'inputA',
  label: 'Input Label',
  placeholder: 'example'
}
```

### label

A **label** is a component that wraps other components and renders a label element.

```js
{
  type: 'label',
  label: 'Caption',
  items: [ ]
}
```

### selectbox

A **selectbox** allows users to select a choice from a list of many options.

```js
{
  type: 'selectbox',
  name: 'SelectA',
  label: 'Select Label',
  items: [
    { value: 'one', text: 'One' },
    { value: 'two', text: 'Two' }
  ]
}
```

### sizeinput

A **sizeinput** is a specialized input field that can lock ratios, see image dialog.

```js
{
  type: 'sizeinput',
  name: 'size',
  label: 'Dimensions'
}
```

### table

A **table** is a layout component that renders a simple table.

```js
{
  type: 'table',
  header: [ 'Heading 1', 'Heading 2', 'Heading 3' ],
  cells: [
    [ 'Cell 1', 'Cell 2', 'Cell 3' ],
    [ 'Cell 4', 'Cell 5', 'Cell 6' ]
  ]
}
```

### textarea

A **textarea** is a multiline text field.

```js
{
  type: 'textarea',
  name: 'text-a',
  label: 'Text: ',
  placeholder: 'example'
}
```

### urlinput

A **urlinput** is a specialized input text field for image dialog. This will include a typeahead for previous image URLs entered.

```js
// URL input for image dialog
// This will include a typeahead for previous image urls entered
{
  name: 'src',
  type: 'urlinput',
  filetype: 'image',
  label: 'Source'
}
// URL input for link dialog
// The main difference from the image mode is that it will include typeahead
// Information for all anchor targets and headings in the document as well
// As the history of 5 previously entered URLs.
{
  name: 'url',
  type: 'urlinput',
  filetype: 'file',
  label: 'Url'
}
// Note that "filetype" also accepts "media"
```
