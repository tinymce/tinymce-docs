# Nonbreaking Space plugin
:title_nav: Nonbreaking Space
:description: Insert a nonbreaking space.
:keywords: nonbreaking nonbreaking_force_tab insert
:controls: toolbar button, menu item

{% assign pluginname = "Nonbreaking Space" %}
{% assign plugincode = "nonbreaking" %}

This plugin adds a button for inserting nonbreaking space entities `&nbsp;` at the current caret location (cursor insert point). It also adds a menu item `Nonbreaking space` under the `Insert` menu dropdown and a toolbar button.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'nonbreaking',
  menubar: 'insert',
  toolbar: 'nonbreaking'
});
```

## Options

{% include configuration/nonbreaking_force_tab.md %}

{% include configuration/nonbreaking_wrap.md %}

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Nonbreaking Space plugin provides the following {{site.productname}} command.

{% include commands/nbsp-cmds.md %}
