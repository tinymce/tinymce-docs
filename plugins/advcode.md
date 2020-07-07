---
layout: default
title: Advanced Code Editor plugin
title_nav: Advanced Code Editor
description: How to setup TinyMCE's Advanced Code Editor plugin.
keywords: code advcode codemirror
controls: toolbar button, menu item
---

{{site.premiumplugin}}

This plugin adds a toolbar button that allows a user to edit the HTML code using a more advanced [code editor]({{ site.baseurl }}/enterprise/advcode/) than the default textarea.

If you are using Advanced Code Editor `advcode` plugin, make sure you do not use Code (`code`) plugin.

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'advcode',
  toolbar: 'code'
});
```

## The difference between the Code and Advanced Code Editor plugins

{% include codepen.html id="advcode" %}

{% include misc/advcode-shortcuts.md %}

## Commands

The Advanced Code plugin provides the following JavaScript command.

{% include commands/code-cmds.md %}
