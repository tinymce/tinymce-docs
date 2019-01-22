---
layout: default
title: TinyMCE distraction-free editing mode
title_nav: Distraction-free editing mode
description: Theme that renders a lightweight UI for inline editing.
keywords: theme inlite distraction-free
---

The **Distraction-free** theme renders the editor in lightweight inline mode. This mode provides options to quickly insert links, images, and tables into the content. For a sample view of this mode, see the [Distraction-free Editor]({{ site.baseurl }}/demo/editor-dfree/) example page.

##### Example:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'quickbars' ],
    toolbar: false,
    menubar: false,
    inline: true
});
```

### Theme specific controls

#### quicklink

The `quicklink` quickly inserts and edits link inline.

##### Example:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'quickbars' ],
    toolbar: false,
    menubar: false,
    inline: true,
    quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote'
});
```

#### quickimage

`quickimage` inserts images from the local machine into the editor. These can be automatically uploaded by configuring [image uploading]({{ site.baseurl }}/advanced/handle-async-image-uploads/).

##### Example:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'quickbars' ],
    toolbar: false,
    menubar: false,
    inline: true,
    quickbars_insert_toolbar: 'quickimage quicktable'
});
```

#### quicktable

`quicktable` quickly inserts a 2x2 table with 100% width.

##### Example:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'quickbars' ],
    toolbar: false,
    menubar: false,
    inline: true,
    quickbars_insert_toolbar: 'quickimage quicktable'
});
```

### Related configuration options

* [quickbars_insert_toolbar]({{ site.baseurl }}/configure/editor-appearance/#quickbars_insert_toolbar)
* [quickbars_selection_toolbar]({{ site.baseurl }}/configure/editor-appearance/#quickbars_selection_toolbar)
* [inline]({{ site.baseurl }}/configure/editor-appearance/#inline)
* [skin]({{ site.baseurl }}/configure/editor-appearance/#skin)
* [theme]({{ site.baseurl }}/configure/editor-appearance/#theme)


{% assign_page next_page = "/general-configuration-guide/multiple-editors/index.html" %}
{% include next-step.html next=next_page %}
