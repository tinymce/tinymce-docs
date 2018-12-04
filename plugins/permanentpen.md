---
layout: default
title: Permanent Pen Plugin
title_nav: Permanent Pen
description: Apply formats when typing
keywords: 
controls: toolbar button, contextmenu, menu item
---

The Permanent Pen plugin lets a user apply formats while typing. It adds a toolbar button which toggles the functionality of the Permanent Pen. It also adds a `Permanent Pen` item under the `Format` menu which opens up a properties dialog when clicked. The Permanent Pen properties dialog, also accessible through a context menu, can be used to configure the formats used.

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: 'permanentpen',
  contextmenu: 'permanentpen',
  toolbar: 'permanentpen'
});
```

### Options

### `permanentpen_properties`

This configuration option lets you specify the default formats for the Permanent Pen.

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: 'permanentpen',
  contextmenu: 'permanentpen',
  toolbar: 'permanentpen',
  permanentpen_properties: {
    fontname: 'arial,helvetica,sans-serif',
    forecolor: '#E74C3C',
    fontsize: '12pt',
    hilitecolor: '',
    bold: true,
    italic: false,
    strikethrough: false,
    underline: false
  }
});
```