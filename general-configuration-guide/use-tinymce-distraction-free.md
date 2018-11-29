---
layout: default
title: TinyMCE inlite editing mode
title_nav: Inlite editing mode
description: Theme that renders a lightweight UI for inline editing.
keywords: theme inlite distraction-free
---

The _inlite_ theme is responsible for rendering the editor lightweight inline mode. This is an optional more lightweight distraction-free UI for the editor. It provides options to quickly insert links, images, and tables into your content. For a sample view of this mode, visit the [Distraction-free Editor]({{ site.baseurl }}/demo/editor-dfree/) example page.

The `inlite` plugin is responsible for rendering the editor lightweight inline mode. The current default theme is called [Classic]({{ site.baseurl }}../use-tinymce-classic). This is an optional more lightweight distraction-free UI for the editor.

##### Example:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'inlite' ],
    toolbar: false,
    menubar: false,
    inline: true
});
```

### Theme specific controls

#### quicklink

The `quicklink` lets you quickly insert/edit links inline.

##### Example:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'inlite' ],
    toolbar: false,
    menubar: false,
    inline: true,
    inlite_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote'
});
```

#### quickimage

The `quickimage` lets you quickly insert images from the local machine into the editor. These can then be automatically uploaded if you configure [image uploading]({{ site.baseurl }}/advanced/handle-async-image-uploads/).

##### Example:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'inlite' ],
    toolbar: false,
    menubar: false,
    inline: true,
    inlite_insert_toolbar: 'quickimage quicktable'
});
```

#### quicktable

The `quicktable` lets you quickly insert a 2x2 table with 100% width.

##### Example:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'inlite' ],
    toolbar: false,
    menubar: false,
    inline: true,
    inlite_insert_toolbar: 'quickimage quicktable'
});
```

### Related configuration options

* [insert_toolbar]({{ site.baseurl }}/configure/editor-appearance/#insert_toolbar)
* [selection_toolbar]({{ site.baseurl }}/configure/editor-appearance/#selection_toolbar)
* [inline]({{ site.baseurl }}/configure/editor-appearance/#inline)
* [skin]({{ site.baseurl }}/configure/editor-appearance/#skin)
* [theme]({{ site.baseurl }}/configure/editor-appearance/#theme)


{% assign_page next_page = "/general-configuration-guide/multiple-editors/index.html" %}
{% include next-step.html next=next_page %}