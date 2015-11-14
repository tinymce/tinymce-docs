---
layout: default
title: Context Menu Plugin
title_nav: Context Menu
description: Right-click to perform actions in TinyMCE
keywords: contextmenu inserttable deletetable contextmenu_never_use_native
---

This plugin adds a configurable context menu that appears when a user (typically) right clicks in the editable area.

Note that by default `contextmenu` does not disable the operating system's native context menu.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "contextmenu",
  contextmenu: "link image inserttable | cell row column deletetable"
});
```

### Options

These settings affect the execution of the `contextmenu` plugin. The settings in this section allow direct control over how the `contextmenu` appears and what is included inside the `contextmenu`.

### `contextmenu`

This option allows you to specify which items should appear on TinyMCE's context menu.

To specify the menu items that should appear on TinyMCE's context menu, the `contextmenu` option should be provided with a space separated list of menu items. To create groups within this listing, add `"|"` pipe characters between the groups of menu items that you would like to create.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "contextmenu",
  contextmenu: "link image inserttable | cell row column deletetable"
});
```

### `contextmenu_never_use_native`

This option allows you to disable the browser's native context menu from appearing within the editor.

We advise you give some thought about whether you really want to do this. Many users expect certain behavior when right clicking in text areas and changes may be unwelcome. But hey, you're the boss.

**Type:** `Boolean`

**Default Value:** `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "contextmenu",
  contextmenu_never_use_native: true
});
```
