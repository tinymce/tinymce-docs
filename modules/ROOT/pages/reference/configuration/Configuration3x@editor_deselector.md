---
layout: default
title: editor_deselector
---

This option enables you to specify a CSS class name that will deselect textareas from being converted into editor instances. If this option isn't set to a value, it will not have any effect, and the mode option will choose textareas instead. The default value of this option is "mceNoEditor", so if mceNoEditor is added to the class attribute of a textarea it will be excluded for conversion. This option also enables you to use regular expressions like myEditor|myOtherEditor or `.*editor`, which then need to be inside a regexp (see below).

## Example of usage of the editor_deselector option:

```js
tinyMCE.init({
  ...
  editor_deselector : "mceNoEditor"
});
```

```js
tinyMCE.init({
  ...
  editor_deselector : /(NoEditor|NoRichText)/
});
```

## Example of usage in the HTML:

```html
<textarea id="myarea1" class="mceNoEditor">This will NOT be an editor.</textarea>
<textarea id="myarea2">This will be an editor.</textarea>
```
