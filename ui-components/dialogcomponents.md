---
layout: default
title: Dialog components
title_nav: Dialog components
description: Dialog component summary is a reference list of all TinyMCE UI components that can be used to display simple information.
keywords: dialog dialogapi
---

This chapter describes the Dialog component summary is a reference list of all TinyMCE UI components that can be used to display simple information.

### alertbanner

An **Alertbanner** is a color-coded banner to alert the user of a problem. A URL may be provided to direct users to a reference site that may resolve the informed issue.

```js
{
  type: 'alertbanner',
  level: 'info', // 'info' | 'warn' | 'error' | 'success'
  text: 'An informative message to the user',
  icon: string
}
```

### button

A **Button** component to be used inside the dialog body. These buttons differ from toolbar buttons and dialog footer buttons.


```js
{
  type: 'button',
  text: 'Alpha',
  primary: true,
  name: 'alpha-button'
}
```

### charmap

A **charmap** is a specialized component that prints a range of unique characters from Unicode.

```js
{
  type: 'charmap',
  name: 'charmap-1',
  characters: [
    {value: 'A', text: 'A'},
    {value: 'B', text: 'B'},
    {value: 'C', text: 'C'}
  ]
}
```

### checkbox

A **checkbox** is a component, used to toggle states on, or off.

```js
{
  type: 'checkbox',
  name: 'checkbox-1',
  label: 'Checkbox Label'
}
```

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

A **dropzone** is a component that catches drag and drops items, or lets the user browse that can send a list of files for processing and receive the result.

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

A **htmlpanel** is similar to panel. It only takes a string of HTML.

```js
{
  type: 'htmlpanel',
  html: '<div>html</div>'
}
```

### iframe

A **iframe** is a component used to define the values of an iframe.

```js
{
  name: 'IframeName',
  type: 'iframe',
  label: 'Description of iframe',
  sandboxed: true
}
```

### input

A **input** is a single line text field, and also renders a label element.

```js
{
  type: 'input',
  name: 'inputA',
  label: 'Input Label',
  placeholder: 'example'
}
```

### panel

A **panel** is a basic container, that holds other components, we can compose many components inside a panel. In HTML terms consider a panel a `<div>` wrapper. A dialog body configuration must begin with either a `panel` or a `tabpanel`.

```js
{
  type: 'panel',
  items: [ ... ]
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

### tabpanel

A **tabpanel** is similar to a `panel`, where it can hold other components. Tabpanel is a layout component that will separate sections using tabs. Each tab is a panel that can contain different components. A dialog body configuration must begin with either a `panel` or a `tabpanel`.

```js
{
  type: 'tabpanel',
  tabs: [
    {
      title: 'First Tab',
      items: [ .... ]
    },
    ...
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

A **uRlinput** is a specialized input text field for image dialog. This will include a typeahead for previous image URLs entered.

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
