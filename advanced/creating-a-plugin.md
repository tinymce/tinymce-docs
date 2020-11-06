---
layout: default
title: Create a plugin for TinyMCE
title_nav: Create a plugin
description_short: Introducing plugin creation, with an example.
description: A short introduction to creating plugins for TinyMCE along with an example plugin.
keywords: plugin plugin.js plugin.min.js tinymce.js
---

{{site.productname}} is designed to make creating plugins simple and to provide choice. Users can employ the [Yeoman generator]({{ site.baseurl }}/advanced/yeoman-generator/) or you can use the following tutorial that outlines the basic concepts of creating a plugin. Consult the API documentation and review the existing plugins that are shipped with the core editor for additional details.

## File Structure

First create a directory in the {{site.productname}} plugins directory. {{site.productname}} loads the `plugin.js` file when developers use the `tinymce.js` file in the page. Similarly, the `tinymce.min.js` loads the `plugin.min.js` file. The recommended usage is to use the `tinymce.js` file while developing and then use a build script minifying the `plugin.js` into `plugin.min.js` in production.

The build scripts that comes with the {{site.productname}} development package automatically builds all plugins including custom ones.

## Example of the plugin file structure

```
/tinymce/plugins/example/plugin.js
/tinymce/plugins/example/plugin.min.js
```

This new example plugin can be loaded using the `tinymce.init` plugins option.

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'example'
});
```

Developers can designate the location of the plugins by loading the `plugin.js` or `plugin.min.js` files directly after the `tinymce.js` or `tinymce.min.js`.

## Example of loading the plugin from another URL

```html
<script src="/tinymce/js/tinymce.min.js"></script>
<script src="/scripts/my.tinymce.plugin.js"></script>
```

## Example plugin

This example plugin demonstrates how to add a simple toolbar button and menu item. This button opens a dialog that allows a title to be entered into the editor. The menu item will open the same dialog as the button.

```js
tinymce.PluginManager.add('example', function(editor, url) {
  var openDialog = function () {
    return editor.windowManager.open({
      title: 'Example plugin',
      body: {
        type: 'panel',
        items: [
          {
            type: 'input',
            name: 'title',
            label: 'Title'
          }
        ]
      },
      buttons: [
        {
          type: 'cancel',
          text: 'Close'
        },
        {
          type: 'submit',
          text: 'Save',
          primary: true
        }
      ],
      onSubmit: function (api) {
        var data = api.getData();
        // Insert content when the window form is submitted
        editor.insertContent('Title: ' + data.title);
        api.close();
      }
    });
  };

  // Add a button that opens a window
  editor.ui.registry.addButton('example', {
    text: 'My button',
    onAction: function () {
      // Open window
      openDialog();
    }
  });

  // Adds a menu item, which can then be included in any menu via the menu/menubar configuration
  editor.ui.registry.addMenuItem('example', {
    text: 'Example plugin',
    onAction: function() {
      // Open window
      openDialog();
    }
  });

  return {
    getMetadata: function () {
      return  {
        name: 'Example plugin',
        url: 'http://exampleplugindocsurl.com'
      };
    }
  };
});
```

## Example init

The following is an example of how to use the new toolbar button.

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'example',
  toolbar: 'example'
});
```

## Exposing metadata

Metadata can be exposed from a custom plugin by returning an object with the property `getMetadata` with a function that returns an object with a `name` and `url` property. This metadata is used by the [Help Plugin]({{site.baseurl}}/plugins/opensource/help/) to show the correct name and link for the plugin in the Plugins installed tab. See the `test` plugin above for example.

## Language localization

Create a "langs" directory in the plugin directory for custom translations. {{site.productname}} loads language files based on the specified language code. For example, if the language is "es_ES" it will try to load ```'<your plugin>/langs/es_ES.js'```.

The structure is similar to `.po` files in that the English string left and its corresponding translation on the right.

## Example of a Spanish translation for the dialog title

```js
tinymce.addI18n('es_ES', {
  'Example plugin': 'Example plugin'
});
```

> Warning: A 404 error will load if translations are missing in the plugin that the full {{site.productname}} package contains. Add the following line to the top of the plugin file to avoid this.

```js
tinymce.PluginManager.requireLangPack('example', 'es_ES,de_AT');
```
