---
layout: default
title: Character Map plugin
title_nav: Character Map
description: Insert special characters into TinyMCE.
keywords: charmap symbols
controls: toolbar button, menu item
---

This plugin adds a dialog to the editor with a map of special unicode characters, which cannot be added directly from the keyboard. The dialog can be invoked via a toolbar button - `charmap` - or a dedicated menu item added as `Insert > Special character`.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "charmap",
  toolbar: "charmap",
  menubar: "insert"
});
```

### Options

The default map of unicode characters can be overridden or extended through the options below.

Internally, character map is defined by the array of arrays, where each sub-array represents a single character. The first item in the sub-array is character code. The second is a title that shows up when mouse hovers over the specified character in the map. Character code can be either decimal, octal or hexadecimal (in the case of octal or hexadecimal format, code should be appropriately prefixed with 0 and 0x). Options are expected to be provided in the same format.

```js
[
  [160, 'no-break space'],
  [173, 'soft hyphen'],
  [34, 'quotation mark'],
  ...
  [8205, 'zero width joiner'],
  [8206, 'left-to-right mark'],
  [8207, 'right-to-left mark']
];
```

### `charmap`

With this option it is possible to fully override the default character map. This can be an array or a function that returns an array in the above mentioned format.

**Type:** `Array`, `Function`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "code",
  toolbar: "code",
  menubar: "tools",
  charmap: [
    [0x2615, 'morning coffee']
  ]
});
```

### `charmap_append`

This option provides a way to append some additional characters to the default character map. This can be array or a function that returns an array in the above mentioned format.

**Type:** `Array`, `Function`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "code",
  toolbar: "code",
  menubar: "tools",
  charmap_append: [
    [0x2600, 'sun'],
    [0x2601, 'cloud']
  ]
});
```
