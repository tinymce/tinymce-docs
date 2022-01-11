# Table of Contents plugin
:title_nav: Table of Contents
:description: Insert a simple Table of Contents into TinyMCE editor
:keywords: toc toc_depth toc_class toc_header
:controls: toolbar button, menu item

{% assign pluginname = "Table of Contents" %}
{% assign plugincode = "toc" %}

{% include DEPRECATED/toc.md %}

The `toc` plugin will generate basic *Table of Contents* and insert it into the editor at the current cursor position. Items for the table will be taken from the headers found in the content.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'toc',
  toolbar: 'toc',
  menubar: 'insert'
});
```

The *Table of Contents* will have a simple HTML structure - a wrapper `div` element, a header with *editable* title and unordered nested list with navigation links. Nesting depth is customizable.

Internally plugin doesn't apply any inline styles. Basic formatting can be added via [Boilerplate Content CSS]({{ site.baseurl }}/how-to-guides/learn-the-basics/editor-content-css/), that can be customized to your needs.

```css
{% include css-codeblock/toc-plugin-css.md %}
```

## Options

{% include configuration/toc_depth.md %}

{% include configuration/toc_header.md %}

{% include configuration/toc_class.md %}

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Table of Contents plugin provides the following {{site.productname}} commands.

{% include commands/toc-cmds.md %}
