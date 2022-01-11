# Code plugin
:title_nav: Code
:description: Edit your content's HTML source.
:keywords: wysiwyg source html edit
:controls: toolbar button, menu item

{% assign pluginname = "Code" %}
{% assign plugincode = "code" %}

This plugin adds a toolbar button that allows a user to edit the HTML code hidden by the WYSIWYG view. It also adds the menu item `Source code` under the `Tools` menu.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'code',
  toolbar: 'code',
  menubar: 'tools'
});
```

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Code plugin provides the following {{site.productname}} command.

{% include commands/code-cmds.md %}
