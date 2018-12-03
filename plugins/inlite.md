---
layout: default
title: Inlite plugin
title_nav: Inlite
description: Plugin that renders a light weight UI for inline editing.
keywords: plugin inlite
---

The `inlite` plugin is responsible for rendering the editor lightweight inline mode. This is an optional more lightweight distraction-free UI for the editor.

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
