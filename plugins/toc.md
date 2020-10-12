---
layout: default
title: Table of Contents plugin
title_nav: Table of Contents
description: Insert a simple Table of Contents into TinyMCE editor
keywords: toc toc_depth toc_class toc_header
controls: toolbar button, menu item
---

{% assign pluginname = "Table of Contents" %}
{% assign plugincode = "toc" %}

The `toc` plugin will generate basic *Table of Contents* and insert it into the editor at the current cursor position. Items for the table will be taken from the headers found in the content.

**Type:** `String`

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

Internally plugin doesn't apply any inline styles. Basic formatting can be added via [Boilerplate Content CSS]({{ site.baseurl }}/general-configuration-guide/boilerplate-content-css/), that can be customized to your needs.

```css
{% include css-codeblock/toc-plugin-css.md %}
```

## Options

### `toc_depth`

By default headers in the content will be inspected only three levels deep, so - `H1` through `H3`. But it is possible to change this behavior by setting `toc_depth` to any number in 1-9 range, therefore matching all the headers beginning with `H1` and all the way down to `H9`.

**Type:** `Number`

**Default Value:** `3`

#### Example: Using `toc_depth`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'toc',
  toolbar: 'toc',
  toc_depth: 3
});
```

### `toc_header`

Table of contents has a header and by default it will be marked up with `H2` tag. With `toc_header` option you can change it to some other tag.

**Type:** `String`

**Default Value:** `H2`

#### Example: Using `toc_header`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'toc',
  toolbar: 'toc',
  toc_header: 'div' // case doesn't matter
});
```

### `toc_class`

With `toc_class` you can change the class name that gets assigned to the wrapper `div`. Please note that you will have to alter [Boilerplate Content CSS]({{ site.baseurl }}/general-configuration-guide/boilerplate-content-css/)) accordingly.

**Type:** `String`

**Default Value:** `mce-toc`

#### Example: Using `toc_class`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'toc',
  toolbar: 'toc',
  toc_class: 'our-toc'
});
```

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Table of Contents plugin provides the following JavaScript commands.

{% include commands/toc-cmds.md %}
