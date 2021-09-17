---
layout: default
title: Quick Toolbars plugin
title_nav: Quick Toolbars
description: User interface controls to create content faster.
keywords: plugin inlite quickbar
---

{% assign pluginname = "Quick Toolbars" %}
{% assign plugincode = "quickbars" %}

The Quick Toolbar plugin adds three context toolbars:

* A **Quick Selection toolbar** - Shown when text is selected, providing formatting buttons such as: `bold`, `italic`, and `link`.
* A **Quick Insert toolbar** - Shown when a new line is added, providing buttons for inserting objects such as tables and images.
* A **Quick Image toolbar** - Shown when an image or figure is selected, providing image formatting buttons such as alignment options.

This plugin also adds three new toolbar buttons:

* **Quick Link** - An inline form for creating and editing links without a dialog.
* **Quick Image** - Prompts the user to select a local image to upload.
* **Quick Table** - Inserts a 2x2 table without prompting the user to select the number of rows and columns.

> **Note**: The Quick Toolbars plugin provides the contextual toolbars found in the `inlite` theme from TinyMCE 4 and earlier.

## Interactive example

{% include live-demo.html id="quickbars" %}

## Basic setup

```js
tinymce.init({
  selector: 'div.tinymce',
  plugins: [ 'quickbars' ]
});
```

### Disabling specific quick toolbars

The following examples show how to disable specific quick toolbars for editors where they are not required.

#### Example: Disabling the Quick Insert context toolbar

```js
tinymce.init({
  selector: 'div.tinymce',
  plugins: [ 'quickbars' ],
  quickbars_insert_toolbar: false
});
```

#### Example: Disabling the Quick Selection context toolbar

```js
tinymce.init({
  selector: 'div.tinymce',
  plugins: [ 'quickbars' ],
  quickbars_selection_toolbar: false
});
```

#### Example: Disabling the Quick Image context toolbar



```js
tinymce.init({
  selector: 'div.tinymce',
  plugins: [ 'quickbars' ],
  quickbars_image_toolbar: false
});
```

## Plugin-specific toolbar buttons

### Quick Link

The Quick Link (`quicklink`) toolbar button lets the user quickly insert/edit links inline. It is included in the Quick Selection context toolbar by default and can be used in other context toolbars.

#### Example: Using quicklink in a custom context toolbar

```js
tinymce.init({
  selector: 'div.tinymce',
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

### Quick Image

The Quick Image (`quickimage`) toolbar button allows users to quickly insert images from their computer into the editor. It is included in the Quick Insert context toolbar by default and can be used in other toolbars.

> **Note**: To enable automatic upload of images on insertion, [image upload]({{ site.baseurl }}/advanced/handle-async-image-uploads/) must be configured.

#### Example: Using quickimage in the editor toolbar

```js
tinymce.init({
  selector: 'div.tinymce',
  plugins: [ 'quickbars' ],
  toolbar: 'quickimage'
});
```

### Quick Table

The Quick Table (`quicktable`) toolbar button inserts a 2x2 table with 100% width. It is included in the Quick Insert context toolbar by default and can be used in other toolbars.

#### Example: Using quicktable in the editor toolbar

```js
tinymce.init({
  selector: 'div.tinymce',
  plugins: [ 'quickbars' ],
  toolbar: 'quicktable'
});
```

## Configuration options

{% include configuration/selection_toolbar.md %}

{% include configuration/insert_toolbar.md %}

{% include configuration/image_toolbar.md %}

{% include misc/plugin-toolbar-button-id-boilerplate.md %}