---
layout: default
title: Nonbreaking Space plugin
title_nav: Nonbreaking Space
description: Insert a nonbreaking space.
keywords: nonbreaking nonbreaking_force_tab insert
controls: toolbar button, menu item
---

This plugin adds a button for inserting nonbreaking space entities `&nbsp;` at the current caret location (cursor insert point). It also adds a menu item `Nonbreaking space` under the `Insert` menu dropdown and a toolbar button.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "nonbreaking",
  menubar: "insert",
  toolbar: "nonbreaking"
});
```

### Options

### `nonbreaking_force_tab`

This option allows you to force TinyMCE to insert three `&nbsp;` entities when the user presses the keyboard `tab` key.

It's important to note that this does not change the behavior of the menu and toolbar controls, which will continue to insert a single `&nbsp` entity when `nonbreaking_force_tab` value is `true`.

However, the `true` condition does capture the tab key and contain it within the editable area, whereas when set to its default state of `false` a tab keypress will move the cursor to the next editable area (e.g. a browser url bar or form field on the current page).

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "nonbreaking",
  menubar: "insert",
  toolbar: "nonbreaking",
  nonbreaking_force_tab: true
});
```

#### Usage with `table` plugin

When using the `nonbreaking_force_tab` setting together with the `table` plugin it will conflict with the tab navigation between table cells. You can choose which setting you want to use by changing the ordering of the plugins in the init object. If `nonbreaking` is before `table` in the plugins setting you will activate the insert `&nbsp;` functionality, while if `table` is added before `nonbreaking` you will get tab table cell navigation. See examples:

This will activate the insert `&nbsp;` setting:

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "nonbreaking table",
  nonbreaking_force_tab: true
});
```

This will activate the tab table cell navigation:

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "table nonbreaking",
  nonbreaking_force_tab: true
});
```

