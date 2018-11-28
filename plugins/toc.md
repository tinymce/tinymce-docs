---
layout: default
title: Table of Contents plugin
title_nav: Table of Contents
description: Insert a simple Table of Contents into TinyMCE editor
keywords: toc toc_depth toc_class toc_header
controls: toolbar button, menu item
---

`toc` plugin will generate basic *Table of Contents* and insert it into the editor at the current cursor position. Items for the table will be taken from the headers found in the content. 

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "toc",
  toolbar: "toc",
  menubar: "insert"
});
```

*Table of Contents* will have a simple HTML structure - a wrapper `div` element, a header with *editable* title and unordered nested list with navigation links. Nesting depth is customisable. 

Internally plugin doesn't apply any inline styles. Basic formatting can be added via [Boilerplate Content CSS]({{ site.baseurl }}/advanced/boilerplate-content-css/), that can be customised to your needs.

```css
/* Basic styles for Table of Contents plugin (toc) */
.mce-toc {
	border: 1px solid gray;
}

.mce-toc h2 {
	margin: 4px;
}

.mce-toc li {
	list-style-type: none;
}
```

## Options

### `toc_depth`

By default headers in the content will be inspected only three levels deep, so - `H1` through `H3`. But it is possible to change this behaviour by setting `toc_depth` to any number in 1-9 range, therefore matching all the headers beginning with `H1` and all the way down to `H9`.

**Type:** `Number`

**Default Value:** `3`

##### Example

```js
tinymce.init({
  selector: "textarea",
  plugins: "toc",
  toolbar: "toc",
  toc_depth: 3
});
```

### `toc_header`

Table of contents has a header and by default it will be marked up with `H2` tag. With `toc_header` option you can change it to some other tag.

**Type:** `String`

**Default Value:** `H2`

##### Example

```js
tinymce.init({
  selector: "textarea",
  plugins: "toc",
  toolbar: "toc",
  toc_header: "div" // case doesn't matter
});
```

### `toc_class`

With `toc_class` you can change the class name that gets assigned to the wrapper `div`. Please note that you will have to alter [Boilerplate Content CSS]({{ site.baseurl }}/advanced/boilerplate-content-css/)) accordingly.

**Type:** `String`

**Default Value:** `mce-toc`

##### Example

```js
tinymce.init({
  selector: "textarea",
  plugins: "toc",
  toolbar: "toc",
  toc_class: "our-toc"
});
```