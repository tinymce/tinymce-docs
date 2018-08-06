---
layout: default
title: Create a Plugin for TinyMCE
title_nav: Create a Plugin
description_short: Introducing plugin creation, with an example.
description: A short introduction to creating plugins for TinyMCE along with an example plugin.
keywords: plugin plugin.js plugin.min.js tinymce.js
---

Creating plugins in TinyMCE is pretty simple - especially if you use the [Yeoman generator]({{ site.baseurl }}/advanced/yeoman-generator/)! - but if you would rather do it all by yourself, keep reading.

This tutorial tries to outline some of the basic concepts of creating a plugin. For more details consult the API documentation and check the existing plugins we ship with the core.

## File Structure

To create a plugin, you need to create a directory in the TinyMCE plugins directory. TinyMCE will load the plugin.js file if you use the tinymce.js file in your page. If you use the tinymce.min.js file, it will load the plugin.min.js file. It's recommended to use the tinymce.js file while developing then have a build script minifying the plugin.js into plugin.min.js for production usage.

The build scripts that comes with the development package of TinyMCE will automatically build all plugins including your custom ones.

## Example of the plugin file structure

```
/tinymce/plugins/example/plugin.js
/tinymce/plugins/example/plugin.min.js
```

This new example plugin can now be loaded using the tinymce.init plugins option.

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'example'
});
```

You can also have the plugin in any location you want by loading the plugin.js/plugin.min.js files directly after the tinymce.js/tinymce.min.js.

## Example of loading the plugin from another URL

```html
<script src="/tinymce/js/tinymce.min.js"></script>
<script src="/scripts/my.tinymce.plugin.js"></script>
```

## Example plugin

Here is an example plugin showing how you add a simple toolbar button and menu item. The button opens a dialog that lets you type in a title that gets inserted into the editor. The menu item will open the TinyMCE site in a dialog.

```js
tinymce.PluginManager.add('example', function(editor, url) {
  // Add a button that opens a window
  editor.addButton('example', {
    text: 'My button',
    icon: false,
    onclick: function() {
      // Open window
      editor.windowManager.open({
        title: 'Example plugin',
        body: [
          {type: 'textbox', name: 'title', label: 'Title'}
        ],
        onsubmit: function(e) {
          // Insert content when the window form is submitted
          editor.insertContent('Title: ' + e.data.title);
        }
      });
    }
  });

  // Adds a menu item to the tools menu
  editor.addMenuItem('example', {
    text: 'Example plugin',
    context: 'tools',
    onclick: function() {
      // Open window with a specific url
      editor.windowManager.open({
        title: 'TinyMCE site',
        url: 'https://www.tinymce.com',
        width: 800,
        height: 600,
        buttons: [{
          text: 'Close',
          onclick: 'close'
        }]
      });
    }
  });

  return {
    getMetadata: function () {
      return  {
        name: "Example plugin",
        url: "http://exampleplugindocsurl.com"
      };
    }
  };
});
```

## Example init

Here is an example of how to use the new toolbar button.

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'example',
  toolbar: 'example'
});
```

## Exposing metadata

You can expose metadata from your plugin by returning an object with the property `getMetadata` with a function that returns an object with a `name` and `url` property. This metadata will then be used by the [Help Plugin]({{ site.baseurl }}/plugins/help/) to show the correct name and link for your plugin in the Plugins installed tab. See the `test` plugin above for example.

## Language localization

If you want to have custom translations for your plugin you need to create a "langs" directory in your plugin directory. TinyMCE will then try to load language files based on the specified language core for example if the language is "sv_SE" it will try to load ```'<your plugin>/langs/sv_SE.js'```.

This file is similar to .po files it has the English string on the left side and the translated string on the right side.

## Example of a Swedish translation for the dialog title

```js
tinymce.addI18n('sv_SE', {
  'Example plugin': 'Example plugin'
});
```

Sometimes you don't have all the translations that the full TinyMCE package has this would result in a 404 error while loading the non-existing file. This can be avoided by adding this line to the top of your plugin file.

```js
tinymce.PluginManager.requireLangPack('example', 'sv_SE,de_AT');
```
