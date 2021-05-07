---
layout: default
title: jQuery Plugin
---

TinyMCE 3.2.5 introduced a new jQuery plugin. This plugin helps integrate the TinyMCE with [jQuery](http://jquery.com/) by extending some internal functions and adding a new tinymce function and tinymce pseudo selector.

## TinyMCE initialization

You can initialize TinyMCE instances using a the tinymce function this will also lazy load the TinyMCE script and it's components. But in order for it to know where it's supposed to be loaded from you need to specify the URL to the tiny_mce.js script. See the example below.

```js
// Initializes all textareas with the tinymce class
$().ready(function() {
   $('textarea.tinymce').tinymce({
      script_url : '../js/tinymce/jscripts/tiny_mce/tiny_mce.js',
      theme : "advanced",
      ...
   });
});
```

For a list of configuration options that can be used with `$.tinymce()` see the [Configuration Reference](https://www.tiny.cloud/docs-3x/reference/Configuration3x/)

## TinyMCE interaction

You can also get editor instances by using selectors. Only one instance will be returned and this instance is NOT a jQuery instance since it makes little sense if there is multiple instances matched for the selector the first one in the collection will be returned.

```js
// Will display the contents of a textarea with the tinymce ID
alert($('#tinymce').tinymce().getContent());
```

You can also use normal jQuery functions to get/set the contents of TinyMCE editor instances see some examples below.

```js
// Will change the contents of an textarea with the ID "someeditor"
$('#someeditor').html('Some contents...');

// Will change the contents all text areas with the class tinymce
$('textarea.tinymce').html('Some contents...');

// Gets the contents from a specific editor
alert($('#someeditor').html());
```

There is also an [online example](https://www.tiny.cloud/docs/demo/full-featured/) that displays these functions.

## TinyMCE pseudo selector

The TinyMCE for jQuery plugin also adds a tinymce pseudo selector. This can be used to get all the instances of a page or check if an element has an editor instance or not. Below is an example on how to use the pseudo selector.

```js
// Getting all converted textareas and set contents to the
$('textarea:tinymce').html('Some content...');
```
