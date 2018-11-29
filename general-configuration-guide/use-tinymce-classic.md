---
layout: default
title: TinyMCE classic editing mode
title_nav: Classic editing mode
description: Theme that renders iframe or inline modes using the TinyMCE core UI framework.
keywords: theme classic
---

TinyMCE has three main integration modes: a _classic_ form-based mode, an _inline_ editing mode, and a distraction-free _inlite_ mode.

The most common TinyMCE integration uses the editor in the classic mode. In this integration mode, the editor toolbar is always present, and can be quickly identified by users as being a rich text editor.

The default `silver` theme is responsible for rendering the editor in classic mode.

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