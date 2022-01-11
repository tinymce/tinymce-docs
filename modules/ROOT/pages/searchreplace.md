# Search and Replace plugin
:title_nav: Search and Replace
:description: Find and replace content in TinyMCE.
:keywords: searchreplace edit
:controls: toolbar button, menu item

{% assign pluginname = "Search and Replace" %}
{% assign plugincode = "searchreplace" %}

This plugin adds search/replace dialogs to {{site.productname}}. It also adds a toolbar button and the menu item `Find and replace` under the `Edit` menu dropdown.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'searchreplace',
  menubar: 'edit',
  toolbar: 'searchreplace'
});
```

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Search and Replace plugin provides the following {{site.productname}} command.

{% include commands/searchreplace-cmds.md %}
