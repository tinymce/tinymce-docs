---
layout: default
title: Anchor plugin
title_nav: Anchor
description: Insert anchors (sometimes referred to as a bookmarks).
controls: toolbar button, menu item
---

{% assign pluginname = "Anchor" %}
{% assign plugincode = "anchor" %}

This plugin adds an anchor/bookmark button to the toolbar that inserts an anchor at the editor's cursor insertion point. It also adds the menu item `anchor` under the `Insert` menu.

When a user clicks on the anchor button or menu item they will be prompted via a dialog box to enter a string. The string will be inserted into the HTML as an anchor id at the location of the cursor. For example, a user places their cursor at the beginning of "Hello World" and clicks on the anchor button and enters "start" in the dialog box. The resulting HTML will take the form of `<p><a id="start"></a>Hello, World!</p>`.

**Type:** `String`


##### Anchor plugin example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'anchor',
  toolbar: 'anchor',
  menubar: 'insert'
});
```

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Anchor plugin provides the following JavaScript command.

{% include commands/anchor-cmds.md %}