---
layout: default
title: Format Painter
title_nav: Format Painter
description: Quickly apply formats to multiple pieces of text.
keywords: formats formatting edit formatpainter_removeformat formatpainter_tableformats formatpainter_blacklisted_formats
controls: toolbar button
---

The `Format Painter` plugin allows a user to copy and paste formatting from one location to another, such as font style and size. The format painter is capable of working with a wide variety of formats and styles such as inline & block formats and table styles.

The format painter may be used either through keyboard shortcuts or a toolbar button.

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "formatpainter",
  toolbar: "formatpainter"
});
```

## Usage

The format painter operates in two modes, one for retrieval and one for application of formats. The usage differs slightly depending on whether the keyboard or toolbar button is being used.

**Usage with Toolbar Button**

1. Position the cursor at the location you wish to retrieve formats from.
2. Toggle the `Format Painter` button to read the formats.
3. Select the content you wish to apply the formats to.

**Usage with Keyboard**

1. Position the cursor at the location you wish to retrieve formats from.
2. Press `Ctrl+Alt+C` to read the formats.
3. Select the content you wish to apply the formats to.
4. Press `Ctrl+Alt+V` to apply the formats.

The format painter retains the formats after application making it possible to apply the same formats multiple times by using the `Ctrl+Alt+V` shortcut.

## Options

The format painter acts upon all [`formats`]({{ site.baseurl }}/configure/content-formatting/#formats) registered in the editor. In addition to any standard formats, it will treat lists as a block format whenever the [`lists plugin`]({{ site.baseurl }}/plugins/lists/) is made available.

### `formats`

The format painter plugin will register a number of formats upon initialization. You may override these through the [`formats`]({{ site.baseurl }}/configure/content-formatting/#exampleofusageoftheformatsoption) option.
<br/>
The example below showcases the formats registered automatically by the plugin upon initialization. The `formatpainter_removeformat` is used to clear any existing formats before applying the new ones. It is similar to the [`removeformat`]({{ site.baseurl }}/configure/content-formatting/#removingaformat) format.

**Type:** `Object`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'formatpainter',
  formats: {
    borderstyle: { selector: 'td,th', styles: { borderTopStyle: '%valueTop', borderRightStyle: '%valueRight', borderBottomStyle: '%valueBottom', borderLeftStyle: '%valueLeft', }, remove_similar: true },
    bordercolor: { selector: 'td,th', styles: { borderTopColor: '%valueTop', borderRightColor: '%valueRight', borderBottomColor: '%valueBottom', borderLeftColor: '%valueLeft' }, remove_similar: true },
    backgroundcolor: { selector: 'td,th', styles: { backgroundColor: '%value' }, remove_similar: true },
    formatpainter_removeformat: [
      { selector: 'b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins', remove: 'all', split: true, expand: false, block_expand: true, deep: true },
      { selector: 'span', attributes: ['style', 'class'], remove: 'empty', split: true, expand: false, deep: true },
      { selector: '*:not(tr,td,th,table)', attributes: ['style', 'class'], split: false, expand: false, deep: true }
    ]
  }
});
```

### `formatpainter_table_format_names`

The format painter treats table formats differently for better user experience. The `formatpainter_table_format_names` option allows you to specify the formats to be defined as such. In practice, this means that these formats will be active when reading and applying formats to and from tables.

**Type:** `String`

**Default:** `'borderstyle,bordercolor,backgroundcolor'`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'formatpainter',
  formatpainter_table_format_names: 'borderstyle,bordercolor,backgroundcolor'
});
```

### `formatpainter_blacklisted_formats`

This option makes it possible to blacklist formats that you don't want the format painter to act upon.

**Type:** `String`

**Default:** `'link,address,removeformat,formatpainter_removeformat'`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'formatpainter',
  formatpainter_blacklisted_formats: 'link,address,removeformat,formatpainter_removeformat' // Default value
});
```
