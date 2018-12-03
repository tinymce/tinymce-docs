---
layout: default
title: Create a sidebar panel
title_nav: Create a sidebar panel
description_short: Introducing sidebar creation.
description: A short introduction to creating sidebars.
keywords: sidebar
---

TinyMCE allows developers to create sidebars and add custom UI widgets inside a constrained and easily accessible area of the editor. The sidebar is designed to allow administrators and plugin developers to provide additional tools that can be accessed by TinyMCE users.

## Editor sidebar API

The sidebar API allows developers to add sidebars on editor instances in a similar way as adding buttons or menu items. Developers can either add sidebars directly in the `tinymce.init` using the setup callback or inside your plugin.

This is the syntax for the addSidebar function: `editor.addSidebar(id:String, options:Object)`

### Options object

#### `tooltip`

The `tooltip` specifies a tooltip to be displayed when hovering over the sidebar toggle button.

**Type**: `String`

#### `icon`

The `icon` specifies an icon for the sidebar toggle button. The icon should be the name of an icon provided by the TinyMCE skin.

**Type**: `String`

#### `image`

The `image` specifies a custom image URL to use as an icon.

**Type**: `String`

#### `onrender`

The `onrender` specifies a function to be called when the panel is first created. It passes in an API object.

**Type**: `function`

#### `onshow`

The `onshow` specifies a function to be called when the panel displayed. It passes in an API object.

**Type**: `function`

#### `onhide`

The `onhide` specifies a function to be called when the panel is hidden. It passes in an API  object.

**Type**: `function`

### API Object

#### `element():DOMElement`

The `element():DOMElement` function returns the root element of the sidebar panel.

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
