---
layout: default
title: Create a Sidebar Panel
title_nav: Create a Sidebar Panel
description_short: Introducing sidebar creation.
description: A short introduction to creating sidebars.
keywords: sidebar
---

Creating sidebars in TinyMCE is fairly easy and lets you add custom UI widgets inside a constrained and easily accessible area of the editor. The sidebar is created to allow integrators and plugin authors to provide additional tools that can be used on the contents in tinymce.

## Editor sidebar API

The sidebar API is fairly straight forward it allows you to add sidebars on editor instances in a similar way as adding buttons or menu items. You can either add sidebars directly in the tinymce.init using the setup callback or inside your own plugin.

This is the syntax for the addSidebar function: `editor.addSidebar(id:String, options:Object)`

### Options object

#### `tooltip`

This allows your to specify a tooltip to be displayed when hovering the sidebar toggle button.

**Type**: `String`

#### `icon`

This allows your to specify a icon for the sidebar toggle button. The icon should be a name of an icon provided by tinymce skin.

**Type**: `String`

#### `image`

This allows your to specify a custom image url to use as an icon.

**Type**: `String`

#### `onrender`

This allows your to specify a function to be called when the panel is first created. It will pass in a api object.

**Type**: `function`

#### `onshow`

This allows your to specify a function to be called when the panel displayed. It will pass in a api object.

**Type**: `function`

#### `onhide`

This allows your to specify a function to be called when the panel has been hidden. It will pass in a api object.

**Type**: `function`

### API Object

#### `element():DOMElement`

This function will just return the root element of the sidebar panel.

## Example inside the tinymce.init

```js
tinymce.init({
  ...
  setup: function (editor) {
    editor.addSidebar('mysidebar', {
      tooltip: 'My sidebar',
      icon: 'settings',
      onrender: function (api) {
        console.log('Render panel', api.element());
      },
      onshow: function (api) {
        console.log('Show panel', api.element());
        api.element().innerHTML = 'Hello world!';
      },
      onhide: function (api) {
        console.log('Hide panel', api.element());
      }
    });
  }
});
```

## Example inside a TinyMCE plugin

```js
tinymce.PluginManager.add('myplugin', function (editor) {
  editor.addSidebar('mysidebar', {
    tooltip: 'My sidebar',
    icon: 'settings',
    onrender: function (api) {
      console.log('Render panel', api.element());
    },
    onshow: function (api) {
      console.log('Show panel', api.element());
      api.element().innerHTML = 'Hello world!';
    },
    onhide: function (api) {
      console.log('Hide panel', api.element());
    }
  });
});
```
