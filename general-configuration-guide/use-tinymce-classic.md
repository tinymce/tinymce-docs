---
layout: default
title: 02. Use TinyMCE Classic
description: Theme that renders iframe or inline modes using the tinymce core UI framework.
keywords: theme classic
---

TinyMCE has three main integration modes: a "classic" form-based mode, an inline editing mode, and a distraction-free mode.

The most common TinyMCE integration uses the editor in its **Classic** mode. In this integration mode, the editor toolbar is always present, and can be quickly identified by users as being a text editor.

The `silver` theme is responsible for rendering the editor in classic mode. This is currently the default theme.

For a sample view of this mode, visit the [Classic Editor]({{ site.baseurl }}/demo/classic/) example page.

##### Example:

```js
tinymce.init({
    selector: "textarea.tinymce",
});
```

### Related configuration options

* [elementpath]({{ site.baseurl }}/configure/editor-appearance/#elementpath)
* [fixed-toolbar-container]({{ site.baseurl }}/configure/editor-appearance/#fixed-toolbar-container)
* [inline]({{ site.baseurl }}/configure/editor-appearance/#inline)
* [menu]({{ site.baseurl }}/configure/editor-appearance/#menu)
* [menubar]({{ site.baseurl }}/configure/editor-appearance/#menubar)
* [resize]({{ site.baseurl }}/configure/editor-appearance/#resize)
* [skin]({{ site.baseurl }}/configure/editor-appearance/#skin)
* [statusbar]({{ site.baseurl }}/configure/editor-appearance/#statusbar)
* [theme]({{ site.baseurl }}/configure/editor-appearance/#theme)
* [toolbar]({{ site.baseurl }}/configure/editor-appearance/#toolbar)
* [toolbar-n]({{ site.baseurl }}/configure/editor-appearance/#toolbar-n)
* [height]({{ site.baseurl }}/configure/editor-appearance/#height)


{% assign_page next_page = "/general-configuration-guide/use-tinymce-inline/index.html" %}
{% include next-step.html next=next_page %}