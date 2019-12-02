---
layout: default
title: TinyMCE distraction-free editing mode
title_nav: Distraction-free editing mode
description: Mode that renders a lightweight UI for inline editing.
keywords: Mode inlite distraction-free
---

The **Distraction-free** mode renders the editor in lightweight inline mode. This mode provides options to quickly insert links, images, and tables into the content.

To try out a {{site.productname}} editor in distraction-free mode, see the [Distraction-free editor]({{ site.baseurl }}/demo/editor-dfree/) example page.

{{site.notonmobile}}

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

### Mode specific controls

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

For information on:
* Configuring a Quick Toolbar; including `quicklink`, `quickimage`, and `quicktable`; see: [Quick Toolbar plugin]({{site.baseurl}}/plugins/quickbars/).
* Configuring a contextual toolbar, see: [Context Toolbar]({{site.baseurl}}/ui-components/contexttoolbar/).
* Configuring a contextual menu, see: [Context Menu]({{site.baseurl}}/ui-components/contextmenu/).
* Disabling the {{site.productname}} menubar, see: [Menubar]({{site.baseurl}}/configure/editor-appearance/#menubar).
* The `inline` setting, see: [inline]({{ site.baseurl }}/configure/editor-appearance/#inline).

{% assign_page next_page = "/general-configuration-guide/multiple-editors/index.html" %}
{% include next-step.html next=next_page %}
