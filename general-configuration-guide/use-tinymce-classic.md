---
layout: default
title: 02. Use TinyMCE Classic
description: Theme that renders iframe or inline modes using the tinymce core UI framework.
keywords: theme classic
---

TinyMCE has three main integration modes: 

1. "classic" form-based
1. inline editing 
1. distraction-free

**Classic** mode is the most common TinyMCE integration. **Classic** mode's popularity is due to its familiarity to users and how quickly they identify it as a text editor.

The current default theme `silver` renders the editor in classic mode.

See the [Classic Editor]({{ site.baseurl }}/demo/classic/) example page.

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