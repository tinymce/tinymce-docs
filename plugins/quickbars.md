---
layout: default
title: Quickbars plugin
title_nav: Quickbars
description: User interface controls to create content faster.
keywords: plugin inlite quickbars
---

The Quickbars plugin (`quickbars`) enables new user interface components to help users create content faster. It can be used to create an experience similar to Medium, Quip, and other modern editing tools.

It replaces the capabilities of the `inlite` theme in TinyMCE 4 or earlier.

The Quickbars plugin enables two new context toolbars:

* _Quick Selection_ - shown when text is selected for quick access to formatting commands such as bold, italic and link. 
* _Quick Insert_ - shown when a new line is created for the quick insertion of objects such as tables and images.

It also enables three new toolbar controls:

* _Quick Link_ - an inline experience for creating and editing links without a dialog
* _Quick Image_ - immediately prompts a user to select a local image to upload
* _Quick Table_ - immediately inserts a 2x2 table without prompting the user to select the number of rows and columns


##### Example enabling both context toolbars with their default controls:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'quickbars' ],
    toolbar: false,
    menubar: false,
    quickbars: true
});
```
#### Example disabling the Quick Insert toolbar:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'quickbars' ],
    toolbar: false,
    menubar: false,
    quickbars: true,
    quickbars_insert_toolbar: false
});
```

#### Example disabling the Quick Selection minibar:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'quickbars' ],
    toolbar: false,
    menubar: false,
    quickbars: true,
    quickbars_selection_toolbar: false
});
```

### Plugin-specific controls

#### Quick Link

The Quick Link (`quicklink`) control lets the user quickly insert/edit links inline. It can only be used in the Quick Selection toolbar.

##### Example:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'quickbars' ],
    toolbar: false,
    menubar: false,
    quickbars: true,
    quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote'
});
```

#### Quick Image

The Quick Image (`quickimage`) control lets you quickly insert images from the local computer into the editor. These can then be automatically uploaded if you configure [image uploading]({{ site.baseurl }}/advanced/handle-async-image-uploads/). It can be used in both the Quick Insert toolbar and other toolbars.

##### Example:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'quickbars' ],
    toolbar: false,
    menubar: false,
    quickbars: true,
    quickbars_insert_toolbar: 'quickimage quicktable'
});
```

#### Quick Table

The Quick Table (`quicktable`) control lets you quickly insert a 2x2 table with 100% width. It can be used in both the Quick Insert toolbar and other toolbars.

##### Example:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'quickbars' ],
    toolbar: false,
    menubar: false,
    quickbars: true,
    quickbars_insert_toolbar: 'quickimage quicktable'
});
```

### Related configuration options

* [quickbars_insert_toolbar]({{ site.baseurl }}/configure/editor-appearance/#quickbars_insert_toolbar)
* [quickbars_selection_toolbar]({{ site.baseurl }}/configure/editor-appearance/#quickbars_selection_toolbar)
