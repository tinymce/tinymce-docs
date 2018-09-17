---
layout: draft
title: Dialog Component
title_nav: Dialog Component
description: Dialog component summary is a reference list of all TinyMCE UI components that can be used to display simple information.
keywords: dialog dialogapi
---

## Introduction

This chapter describes the Dialog component summary is a reference list of all TinyMCE UI components that can be used to display simple information.

### AlertBanner

An **AlertBanner** is a color coded banner to alert the user of a problem, a url may be provided to direct users to reference site that may resolve the alerted issue.

```js
    {
    	type: 'alertbanner',
      level: 'info', // 'info' | 'warn' | 'error' | 'success'
      text: 'An informative message to the user',
      icon: string,
    }
```

### Button

A **Button**component to be used inside the dialog body, these buttons differ from toolbar buttons and dialog footer buttons.


```js
    {
          type: 'button',
          text: 'Alpha',
          primary: true,
          name: 'alpha-button'
        }
```

### Charmap

A **Charmap** is a specialised component that prints a range of special characters from unicode

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

A **Checkbox** is a component, used to toggle states on, or off

```js
    {
      type: 'checkbox',
      name: 'checkbox-1',
      label: 'Checkbox Label'
    }
```

### ColourInput

A **ColorInput** is a specialised input field which takes rgb colors and will render the sample color typed

```js
    {
      type: 'colorinput',
      name: 'colorA',
      label: 'Colour Label',
      colspan: 1
    }
```

### ColorPicker

A **ColorPicker**  is an intuitive color picker tool similar to image editors.

```js
    {
      type: 'colorpicker',
      name: 'colour',
      label: 'Color A',
      colspan: 1
    }
```

### DropZone

A **DropZone** is a component that catches drag and drop items, or lets the user browse  that can send a list of files for processing and receive the result

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

A **HtmlPanel** is similar to panel. Only takes a string of HTML

```js
    {
      type: 'htmlpanel',
      html: '<div>html</div>'
    }
```

### Iframe

An **Iframe** is a component used to?

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

An **Input** is a single line text field, a label element is also rendered

```js
    {
      type: 'input',
      name: 'inputA',
      label: 'Input Label'
      colspan: 1
    }
```

### JukeBox

A **JukeBox**  is a specialised component that can cycle through a list of options.

```js
    {
      type: 'colorpicker',
      name: 'colorpicker',
      label: 'Color'
    }
```

### Panel

A **Panel** is a basic container, that holds other components, we can compose many components inside a panel. In HTML terms consider a panel a <div> wrapper. A dialog body configuration must begin with either a Panel or a TabPanel

```js
    {
      type: 'panel',
      items: [ ... ]
    }
```

### SelectBox

A **SelectBox** allows users to select a choice from a list of many <reword>

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

A **SizeInput** is a specialised input field that can lock ratios, see image dialog or ....

```js
    {
      type: 'sizeinput',
      name: 'size',
      label: 'Dimensions'
      colspan: 1
    }
```

### Tabpanel

A **Tabpanel -** is similar to a Panel, where it can holder other components. TabPanel is a layout component that will separate sections using tabs. Each tab is a panel that can hold different components. A dialog body configuration must begin with either a Panel or a TabPanel

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

A **TextArea** is a multiline text field

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

A **UrlInput**  is a specialised input text field for

```js
    // URL input for image dialog
    // this will include a typeahead for previous image urls entered
    {
      name: 'src',
      type: 'urlinput',
      filetype: 'image',
      label: 'Source'
    }
    // URL input for link dialog
    // The main difference from the image mode is that it will include typeahead
    // information for all anchor targets and headings in the document as well
    // as the history of 5 previously entered URLs.
    {
      name: 'url',
      type: 'urlinput',
      filetype: 'file',
      label: 'Url'
    }
    // Note that "filetype" also accepts "media" though I am uncertain what
    // the difference is to "image".
```