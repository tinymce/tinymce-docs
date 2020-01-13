---
layout: default
title: Quick Toolbar plugin
title_nav: Quick Toolbar
description: User interface controls to create content faster.
keywords: plugin inlite quickbar
---

The Quick Toolbar plugin (`quickbars`) enables new user interface components to help users create content faster. It can be used to create an experience similar to Medium, Quip, and other modern editing tools.

It replaces the capabilities of the `inlite` theme in TinyMCE 4 or earlier.

The Quick Toolbar plugin enables three new context toolbars:

* _Quick Selection_ - shown when text is selected for quick access to formatting buttons such as bold, italic and link.
* _Quick Insert_ - shown when a new line is created for the quick insertion of objects such as tables and images.
* _Quick Image_ - shown when an image or figure is selected for quick access to image formatting buttons such as alignment.

It also enables three new toolbar buttons:

* _Quick Link_ - an inline dialog for creating and editing links without a dialog.
* _Quick Image_ - immediately prompts a user to select a local image to upload.
* _Quick Table_ - immediately inserts a 2x2 table without prompting the user to select the number of rows and columns.


##### Example enabling all context toolbars with their default toolbar buttons:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'quickbars' ],
    toolbar: false,
    menubar: false,
    inline: true
});
```
#### Example disabling the Quick Insert context toolbar:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'quickbars' ],
    toolbar: false,
    menubar: false,
    inline: true,
    quickbars_insert_toolbar: false
});
```

#### Example disabling the Quick Selection context toolbar:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'quickbars' ],
    toolbar: false,
    menubar: false,
    inline: true,
    quickbars_selection_toolbar: false
});
```

#### Example disabling the Quick Image context toolbar:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'quickbars' ],
    toolbar: false,
    menubar: false,
    inline: true,
    quickbars_image_toolbar: false
});
```

### Plugin-specific toolbar buttons

#### Quick Link

The Quick Link (`quicklink`) toolbar button lets the user quickly insert/edit links inline. It is included in the Quick Selection context toolbar by default and can be used in other context toolbars.

##### Example:

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'quickbars' ],
    setup: function(editor) {
        editor.ui.registry.addContextToolbar('imageselection', {
            predicate: function(node) {
                return node.nodeName === 'P';
            },
            items: 'quicklink',
            position: 'node'
        });
    }
});
```

#### Quick Image

The Quick Image (`quickimage`) toolbar button helps you quickly insert images from your computer into the editor. It is included in the Quick Insert context toolbar by default and can be used in other toolbars.

> Note: To enable automatic upload of images on insertion, [image upload]({{ site.baseurl }}/advanced/handle-async-image-uploads/) must be configured.

##### Example using quickimage in the editor toolbar

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'quickbars' ],
    toolbar: 'quickimage'
});
```

#### Quick Table

The Quick Table (`quicktable`) toolbar button inserts a 2x2 table with 100% width. It is included in the Quick Insert context toolbar by default and can be used in other toolbars.

##### Example using quicktable in the editor toolbar

```js
tinymce.init({
    selector: "div.tinymce",
    plugins: [ 'quickbars' ],
    toolbar: 'quicktable'
});
```

### Configuration options

##{% include configuration/image-toolbar.md %}

##{% include configuration/insert-toolbar.md %}

##{% include configuration/selection-toolbar.md %}
