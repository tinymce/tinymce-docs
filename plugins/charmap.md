---
layout: default
title: Character Map Plugin
title_nav: Character Map
description: Insert special characters into TinyMCE.
keywords: charmap symbols
controls: toolbar button, menu item
---

This plugin adds a dialog to TinyMCE editor with a map of special unicode characters, that cannot be added directly from keyboard. Dialog can be invoked via toolbar button - `charmap` or dedicated menu item - `Insert > Special character`.

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

Default map of unicode characters can be overriden or extended through the options below.

Internally character map is defined by the array of arrays, where each sub-array represents a single character. First item in the sub-array is character code and second - a title that shows up when mouse hovers over the specified character in the map. Character code can be either decimal, octal or hexadecimal (in the case of octal or hexadecimal format, code should be appropriately prefixed with 0 and 0x). Options are expected to be provided in the same format.

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

With this option it is possible to fully override default character map. Option can be array or a function that returns an array in the above mentioned format.

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

A way to append some additional characters to the default character map. Option can be array or a function that returns an array in the above mentioned format.

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
