---
layout: default
title: TinyMCE classic editing mode
title_nav: Classic editing mode
description: The Theme that renders iframe or inline modes using the TinyMCE core UI framework.
keywords: theme classic
---

{{site.productname}} has three main integration modes:

* "classic" form-based
* inline editing
* distraction-free

**Classic** mode is the most common {{site.productname}} integration. **Classic** mode's popularity is due to its familiarity to users and how quickly they identify it as a text editor.

The current default theme `silver` renders the editor in classic mode.

See the [Classic editor]({{ site.baseurl }}/demo/classic/) example page.

##### Example:

```js
tinymce.init({
    selector: "textarea.tinymce",
});
```

### Related configuration options

* [elementpath]({{ site.baseurl }}/configure/editor-appearance/#elementpath)
<!-- * [fixed-toolbar-container]({{ site.baseurl }}/configure/editor-appearance/#fixed-toolbar-container) -->
* [inline]({{ site.baseurl }}/configure/editor-appearance/#inline)
* [menu]({{ site.baseurl }}/configure/editor-appearance/#menu)
* [menubar]({{ site.baseurl }}/configure/editor-appearance/#menubar)
* [resize]({{ site.baseurl }}/configure/editor-appearance/#resize)
* [skin]({{ site.baseurl }}/configure/editor-appearance/#skin)
* [statusbar]({{ site.baseurl }}/configure/editor-appearance/#statusbar)
* [theme]({{ site.baseurl }}/configure/editor-appearance/#theme)
* [toolbar]({{ site.baseurl }}/configure/editor-appearance/#toolbar)
* [toolbar-n]({{ site.baseurl }}/configure/editor-appearance/#toolbarn)
* [height]({{ site.baseurl }}/configure/editor-appearance/#height)


{% assign_page next_page = "/general-configuration-guide/use-tinymce-inline/index.html" %}
{% include next-step.html next=next_page %}
