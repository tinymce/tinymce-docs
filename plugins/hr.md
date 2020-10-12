---
layout: default
title: Horizontal Rule plugin
title_nav: Horizontal Rule
description: Insert a horizontal line.
keywords: hr insert
controls: toolbar button, menu item
---

{% assign pluginname = "Horizontal Rule" %}
{% assign plugincode = "hr" %}

The Horizontal Rule (`hr`) plugin allows a user to insert a horizontal rule on the page at the cursor insertion point. It also adds a toolbar button and a menu item `Horizontal line` under the `Insert` menu.

**Type:** `String`

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'hr',
  toolbar: 'hr'
});
```

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}