---
layout: default
title: Page Embed plugin
title_nav: Page Embed
description: Lets you easily add iframe embeds to your content.
keywords: view Page Embed insert iframe
controls: toolbar button, menu item
---

The TinyMCE **Page Embed** plugin lets you embed a page in your content in a responsive or exactly sized iframe.

This plugin adds a Page Embed button to the toolbar. Pressing the button opens a dialog where you can enter a URL to the page you want to embed into your content. You can also choose if you want to set an exact dimension size or use a responsive size such as 16 by 9 that will adapt to the page where your content will be shown. 


## Live example

{% include codepen.html id="page-embed" %}


##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "pageembed",
  menubar: "view",
  toolbar: "pageembed"
});
```

### Options

### `tiny_pageembed_classes`

Takes an array of objects with `text` and `value` properties that will populate the size select input in the plugin dialog. 

##### Example custom classes

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "pageembed",
  menubar: "view",
  toolbar: "pageembed",
  tiny_pageembed_classes: [
    { text: 'Big embed', value: 'my-big-class' },
    { text: 'Small embed', value: 'my-small-class' }
  ]
});
```

If set to an empty array the size select will not be shown and only exact sizes can be set.

##### Example disable select

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "pageembed",
  menubar: "view",
  toolbar: "pageembed",
  tiny_pageembed_classes: [ ]
});
```

### Default CSS

If the `tiny_pageembed_classes` setting is left undefined the default classes will be used, letting you choose between a selection of responsive sizes. To make these work on your page please make sure you add this css to the page:

```css
.tiny-pageembed--21by9,
.tiny-pageembed--16by9,
.tiny-pageembed--4by3,
.tiny-pageembed--1by1 {
  display: block;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: 100%;
}

.tiny-pageembed--21by9::before,
.tiny-pageembed--16by9::before,
.tiny-pageembed--4by3::before,
.tiny-pageembed--1by1::before {
  content: "";
  display: block;
}

.tiny-pageembed--21by9::before {
  padding-top: 42.857143%;
}

.tiny-pageembed--16by9::before {
  padding-top: 56.25%;
}

.tiny-pageembed--4by3::before {
  padding-top: 75%;
}

.tiny-pageembed--1by1::before {
  padding-top: 100%;
}

.tiny-pageembed--21by9 iframe,
.tiny-pageembed--16by9 iframe,
.tiny-pageembed--4by3 iframe,
.tiny-pageembed--1by1 iframe {
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
```