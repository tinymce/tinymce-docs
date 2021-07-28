---
layout: default
title: Tab Focus plugin
title_nav: Tab Focus
description: Tab into and out of the TinyMCE control in your web form.
keywords: tabfocus tabfocus_elements prev next
---

This plugin adds the possibility to tab in/out of {{site.productname}}.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'tabfocus'
});
```

## Options

This setting affects the execution of the `tabfocus` plugin. This setting can be used to change the focus behavior of the editor when the tab key has been pressed inside the editable area.

{% include configuration/tabfocus_elements.md %}
