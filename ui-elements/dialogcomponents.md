---
layout: default
title: Dialog Components
title_nav: Dialog Components
description: Dialog component summary is a reference list of all TinyMCE UI components that can be used to display simple information.
keywords: dialog dialogapi
---

## Introduction

This chapter describes the Dialog component summary is a reference list of all TinyMCE UI components that can be used to display simple information.

### AlertBanner

An **AlertBanner** is a color-coded banner to alert the user of a problem. A URL may be provided to direct users to a reference site that may resolve the informed issue.

```js
    {
        type: 'alertbanner',
      level: 'info', // 'info' | 'warn' | 'error' | 'success'
      text: 'An informative message to the user',
      icon: string,
    }
```

### Button

A **Button** component to be used inside the dialog body. These buttons differ from toolbar buttons and dialog footer buttons.


```js
    {
      type: 'button',
      text: 'Alpha',
      primary: true,
      name: 'alpha-button'
    }
```

### Charmap

A **Charmap** is a specialized component that prints a range of unique characters from Unicode.

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

### Checkbox

A **Checkbox** is a component, used to toggle states on, or off.

```js
    {
      type: 'checkbox',
      name: 'checkbox-1',
      label: 'Checkbox Label'
    }
```

### ColorInput

A **ColorInput** is a specialized input field which takes `RGB` colors and will render the sample color typed.

```js
    {
      type: 'colorinput',
      name: 'colorA',
      label: 'Color Label',
      colspan: 1
    }
```

### ColorPicker

A **ColorPicker**  is an intuitive color picker tool similar to image editors.

```js
    {
      type: 'colorpicker',
      name: 'color',
      label: 'Color A',
      colspan: 1
    }
```

### DropZone

A **DropZone** is a component that catches drag and drops items, or lets the user browse that can send a list of files for processing and receive the result.

```js
    {
      type: 'dropzone',
      name: 'dropzone',
      label: 'Dropzone'
    }
```

### Grid

A **Grid** is a layout component that creates columns in the dialog body.

```js
    {
      type: 'grid',
      columns: 2,
      items: [ ]
    }
```

### HtmlPanel

A **HtmlPanel** is similar to panel. It only takes a string of HTML.

```js
    {
      type: 'htmlpanel',
      html: '<div>html</div>'
    }
```

### Iframe

A **Iframe** is a component used to define the values of an iframe.

```js
    {
        name: 'IframeName',
        type: 'iframe',
        label: 'Description of iframe',
        size: 'flex',
        sandboxed: true
    }
```

### Input

A **Input** is a single line text field, and also renders a label element.

```js
    {
      type: 'input',
      name: 'inputA',
      label: 'Input Label'
      colspan: 1
    }
```

### JukeBox

A **JukeBox**  is a specialized component that can cycle through a list of options.

```js
    {
      type: 'colorpicker',
      name: 'colorpicker',
      label: 'Color'
    }
```

### Panel

A **Panel** is a basic container, that holds other components, we can compose many components inside a panel. In HTML terms consider a panel a `<div>` wrapper. A dialog body configuration must begin with either a Panel or a TabPanel.

```js
    {
      type: 'panel',
      items: [ ... ]
    }
```

### SelectBox

A **SelectBox** allows users to select a choice from a list of many options.

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

### SizeInput

A **SizeInput** is a specialized input field that can lock ratios, see image dialog.

```js
    {
      type: 'sizeinput',
      name: 'size',
      label: 'Dimensions'
      colspan: 1
    }
```

### Tabpanel

A **Tabpanel -** is similar to a Panel, where it can hold other components. TabPanel is a layout component that will separate sections using tabs. Each tab is a panel that can contain different components. A dialog body configuration must begin with either a Panel or a TabPanel.

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

### TextArea

A **TextArea** is a multiline text field.

```js
    {
      type: 'textarea',
      size: 'flex'
      name: 'text-a',
      label: 'Text: ',
      colspan: 1
    }
```

### UrlInput

A **URlInput** is a specialized input text field for image dialog. This will include a typeahead for previous image URLs entered.

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
