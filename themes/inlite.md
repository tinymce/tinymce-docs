---
layout: default
title: Inlite theme
title_nav: Inlite
description: Theme that renders a light weight UI for inline editing.
keywords: theme inlite
---

The `inlite` theme is responsible for rendering the editor lightweight inline mode. The current default theme is called [modern]({{ site.baseurl }}/themes/modern/) this is an optional more lightweight distraction-free UI for the editor.

##### Example:

```js
tinymce.init({
    selector: "div.tinymce",
    theme: "inlite",
    inline: true
});
```

### Theme specific controls

#### quicklink
Lets you quickly insert/edit links inline.

##### Example:

```js
tinymce.init({
    selector: "div.tinymce",
    theme: "inlite",
    inline: true,
    selection_toolbar: 'bold italic | quicklink h2 h3 blockquote'
});
```

#### quickimage

Lets you quickly insert images from the local machine into the editor. These can then be automatically uploaded if you configure [image uploading]({{ site.baseurl }}/advanced/handle-async-image-uploads/).

##### Example:

```js
tinymce.init({
    selector: "div.tinymce",
    theme: "inlite",
    inline: true,
    insert_toolbar: 'quickimage quicktable'
});
```

#### quicktable

Lets you quickly insert a table 2x2 with 100% width.

##### Example:

```js
tinymce.init({
    selector: "div.tinymce",
    theme: "inlite",
    inline: true,
    insert_toolbar: 'quickimage quicktable'
});
```

### Related configuration options

* [insert_toolbar]({{ site.baseurl }}/configure/editor-appearance/#insert_toolbar)
* [selection_toolbar]({{ site.baseurl }}/configure/editor-appearance/#selection_toolbar)
* [inline]({{ site.baseurl }}/configure/editor-appearance/#inline)
* [skin]({{ site.baseurl }}/configure/editor-appearance/#skin)
* [theme]({{ site.baseurl }}/configure/editor-appearance/#theme)
