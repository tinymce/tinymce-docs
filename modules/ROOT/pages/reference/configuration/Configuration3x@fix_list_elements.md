---
layout: default
title: fix_list_elements
---

This option enables you to specify that list elements UL/OL is to be converted to valid XHTML. This option is disabled by default.

## This invalid list:

```html
<ol>
  <li>a</li>
  <ol>
    <li>b</li>
    <li>c</li>
  </ol>
  <li>e</li>
</ol>

```

## Gets converted into this valid list:

```html
<ol>
  <li>a
    <ol>
      <li>b</li>
      <li>c</li>
    </ol>
  </li>
  <li>e</li>
</ol>

```

## Example of usage of the fix_list_elements option:

```js
tinyMCE.init({
  ...
  fix_list_elements : true
});
```
