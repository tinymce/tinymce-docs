---
layout: default
title: Quick UI plugin
title_nav: Quick UI
description: Provides a selection toolbar and quick insert toolbar.
keywords: plugin inlite quickui
---

The Quick UI plugin (`quickui`) enables new user interface components to help users create content faster. It can be used to create an experience similar to Medium, Quip, and other modern editing tools.

It replaces the capabilities of the `inlite` theme in TinyMCE 4 or earlier.

The Quick UI plugin enables two new context toolbars:

* _Quick Selection_ - shown when text is selected for quick access to formatting commands such as bold, italic and link. 
* _Quick Insert_ - shown when a new line is created for the quick insertion of objects such as tables and images.

It also enables three new toolbar controls:

* _Quick Link_
* _Quick Image_
* _Quick Table_ 


##### Example enabling both context toolbars with their default controls:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'quickui' ],
    toolbar: false,
    menubar: false,
    quickui: true
});
```
#### Example disabling the Quick Insert toolbar:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'quickui' ],
    toolbar: false,
    menubar: false,
    quickui: true,
    quickui_insert_toolbar: false
});
```

#### Example disabling the Quick Selection minibar:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'quickui' ],
    toolbar: false,
    menubar: false,
    quickui: true,
    quickui_selection_toolbar: false
});
```

### Plugin-specific controls

#### Quick Link

The Quick Link (`quicklink`) control lets the user quickly insert/edit links inline.

##### Example:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'quickui' ],
    toolbar: false,
    menubar: false,
    quickui: true,
    quickui_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote'
});
```

#### Quick Image

The Quick Image (`quickimage`) control lets you quickly insert images from the local computer into the editor. These can then be automatically uploaded if you configure [image uploading]({{ site.baseurl }}/advanced/handle-async-image-uploads/).

##### Example:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'quickui' ],
    toolbar: false,
    menubar: false,
    quickui: true,
    quickui_insert_toolbar: 'quickimage quicktable'
});
```

#### Quick Table

The Quick Table (`quicktable`) control lets you quickly insert a 2x2 table with 100% width.

##### Example:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'quickui' ],
    toolbar: false,
    menubar: false,
    quickui: true,
    quickui_insert_toolbar: 'quickimage quicktable'
});
```

### Related configuration options

* [quickui_insert_toolbar]({{ site.baseurl }}/configure/editor-appearance/#quickui_insert_toolbar)
* [quickui_selection_toolbar]({{ site.baseurl }}/configure/editor-appearance/#quickui_selection_toolbar)
* [inline]({{ site.baseurl }}/configure/editor-appearance/#inline)
* [skin]({{ site.baseurl }}/configure/editor-appearance/#skin)
* [theme]({{ site.baseurl }}/configure/editor-appearance/#theme)
