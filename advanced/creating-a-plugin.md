---
layout: default
title: Create a plugin for {{site.productname}}
title_nav: Create a plugin
description_short: Introducing plugin creation, with an example.
description: A short introduction to creating plugins for {{site.productname}} along with an example plugin.
keywords: plugin plugin.js plugin.min.js tinymce.js
---

{{site.productname}} is designed to be easily extended by custom plugins.

## Requirements

To be recognised as a plugin by {{site.productname}}, the code for your custom plugin must have a JavaScript file with a single entry point that registers the plugin with {{site.productname}} using the `PluginManager` API. Any other code or resources can be in separate files and can be loaded in any standard manner. {{site.productname}} also has various APIs for loading [scripts]({{ site.baseurl }}/api/tinymce.dom/tinymce.dom.scriptloader/) and [stylesheets]({{ site.baseurl }}/api/tinymce.dom/tinymce.dom).stylesheetloader/).

{{site.productname}} does not require any special file structure or tooling apart from these requirements, so custom plugins can be developed using most frameworks and tools.

### Yeoman Generator

{{site.companyname}} maintains a [Yeoman generator]({{ site.baseurl }}/advanced/yeoman-generator/) to assist with creating plugins for {{site.productname}}. The Yeoman Generator will create the files and boilerplate code required for a custom plugin, and sets up some helpful commands.

## Registering a custom plugin with {{site.productname}}
Register a custom plugin with {{site.productname}} using the PluginManager. `PluginManager.add()` takes a string for the plugin identifier and a function that contains the code for initializing the plugin. Optionally return an object containing a function that returns metadata which will be used in the list of plugins in the [Help plugin]({{ site.baseurl }}/plugins/opensource/help) dialog.

The plugin identifier passed to `PluginManager.add()` is used by {{site.productname}} as an identifier string. It should be alphanumeric and can not contain spaces. Plugin identifiers should be unique. If multiple plugins have the same identifier, one will override the others.

The metadata object can contain the following values:

- `name`: A string that contains the plugin's name, usually in a human-readable format.
- `url`: A string that contains a URL, usually used to link to help documentation.

### Example: Plugin registration boilerplate

```js
tinymce.PluginManager.add('pluginId', function(editor, url) {
  // add plugin code here

  return {
    getMetadata: function () {
      return {
        name: 'Custom plugin',
        url: 'https://example.com/docs/customplugin'
      };
    }
  }
});
```

## Using custom plugins with {{site.productname}}

Custom plugins can be used by a {{site.productname}} instance by either:

- **Using `external_plugins`**: Use the [external_plugins option]({{ site.baseurl }}/configure/integration-and-setup/#external_plugins) to specify the URL based location of the entry point file for the plugin.
- **Copy code into `plugins` folder**: Copy the entry point file (and any other files) into the `plugins` folder of the distributed {{site.productname}} code.

The plugin can then be used by including it in the list of plugins specified by the [`plugins` option]({{ site.baseurl }}/configure/integration-and-setup/#plugins).

> **Note:** {{ site.companyname }} recommends using the `external_plugins` option for custom plugins.

### Example: Using `external_plugins`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  external_plugins: {
    pluginId: 'https://example.com/customplugincode.min.js'
  },
  plugins: ''
});
```

### Example: Copying plugin code into the `plugins` folder

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'pluginId'
});
```

## Testing {{site.productname}}

Due to the amount of browser APIs used by {{site.productname}}, when testing {{site.productname}} or any custom plugins, you must use a testing framework that runs on a real browser. Testing frameworks that mock the browser will not work.

## Language localization

{{site.productname}} comes with translations for many languages. To add additional strings to a supported language for a custom plugin, use the following procedure.

1. Create a "langs" directory in the plugin directory for custom translations.
2. For each language that the plugin supports, create a translation file. The files should be JavaScript files and use the relevant language code as the file name. For example, {{site.productname}} will look for a Spanish translation file at `'<your plugin>/langs/es_ES.js'`, where `<your plugin>` is to the directory that contains the plugin's entry point file. For a list of supported languages, see: [Supported languages]({{ site.baseurl }}/configure/localization/#supportedlanguages).
2. In each translation file, add translation strings by passing an object containing key-value pairs of source strings and translation strings to `tinymce.addI18n()`.
3. In the plugin's entry point file, call `tinymce.PluginManager.requireLangPack()` and pass it the plugin identifier and a comma deliminated string of the language codes to load.

### Example: The content of a translation file for additional Spanish translations

```js
tinymce.addI18n('es_ES', {
  'Example plugin': 'Complemento de ejemplo'
});
```

### Example: Loading additional translation files for a custom plugin

```js
// Register the custom plugin
tinymce.PluginManager.add('pluginId', function(editor, url) {
  // add plugin code here
});
// Load the required translation files
tinymce.PluginManager.requireLangPack('pluginId', 'es_ES,de_AT');
```

## Example plugin

This example plugin demonstrates how to add a simple toolbar button and menu item. This button opens a dialog that allows a title to be entered into the editor. The menu item will open the same dialog as the button.

{% include live-demo.html tab="js" id="custom-plugin" %}
