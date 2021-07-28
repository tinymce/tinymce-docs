---
layout: default
title: Help plugin
title_nav: Help
description: Shows the help dialog.
keywords: help
controls: toolbar button, menu item
---

{% assign pluginname = "Help" %}
{% assign plugincode = "help" %}

The help plugin adds a button and/or menu item that opens a dialog showing two tabs:

* Handy shortcuts that explains some nice-to-know keyboard shortcuts
* Plugin list that shows which plugins that have been installed, with links to the relevant documentation pages if available, and a list of available premium plugins.

In the footer of the dialog you can also see which version of {{site.productname}} you are using.

The help dialog can also be shown by pressing the keyboard shortcut `Alt + 0`.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'help',
  toolbar: 'help'
});
```

## Config Options

{% include configuration/help_tabs.md %}

## API

| Name | Arguments | Description |
|------| ------| ----------- |
| addTab | tabSpec: [TabPanel]({{site.baseurl}}/ui-components/dialogcomponents/#tabpanel) | Register a tab for the Help dialog |

### Example: Using the `addTab` API

```js
tinymce.activeEditor.plugins.help.addTab({
  name: 'custom',
  title: 'My Custom Tab',
  items: [
    {
      type: 'htmlpanel',
      html: '<p>This is a custom tab</p>',
    }
  ]
});
```

## Exposing metadata for the help plugin

For information on how to expose metadata from you custom plugin to add it to the Installed plugins list in the Help plugin, see the  [Creating a Plugin page]({{ site.baseurl }}/advanced/creating-a-plugin/#exposingmetadata).

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Help plugin provides the following JavaScript command.

{% include commands/help-cmds.md %}
