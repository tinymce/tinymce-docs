---
layout: default
title: 2. Basic Configuration
description: TinyMCE provides a wide range of configuration options that enable you to integrate it tightly with your application.
description_short: The 3 most important config settings, with examples.
---

In this introduction to TinyMCE configuration we will discuss the most important options typically used in traditional form-based layouts, along with examples of how to use TinyMCE as an inline editor (which is very useful when creating user experiences where the editing view of the page is merged with the reading view of the page.)

Once you've added the TinyMCE script to your page there are three configuration aspects you need to consider:

1. Selector configuration
2. Plugin configuration
3. Toolbar configuration


### Selector configuration

This is the most important configuration option for your TinyMCE integration. Selector configuration allows you to use CSS `selector` syntax to determine which elements on the page should be editable through TinyMCE.

In other words, this is where you specify a CSS selector for the areas TinyMCE will make editable.

When using this option in TinyMCE's regular editing mode the selected element will be replaced with an `iframe` and TinyMCE will perform all operations within this context.

Here's an example that will replace all `textarea` elements on the page:

```js
tinymce.init({
  selector: "textarea",
});
```

You can also match an ID attribute. The following example will replace a `textarea` element with `id` `"editable"` on the page:

```js
tinymce.init({
  selector: "textarea#editable",
});
```

When using this option in TinyMCE's [inline editingmode](../using-tinymce-inline/) the selector can be used on any block element, which will edit the content in place instead of replacing the element with an `iframe`.

Here's an example of this setting being used in inline editing mode on a `div` element with `id` `"editable"`:

```js
tinymce.init({
  selector: "div#editable",
  inline: true
});
```

> For more information on the differences between regular and inline editing modes see the [Using TinyMCE Inline](../using-tinymce-inline/) page. (It's the next step in this guide, so hang in there and we'll get to that in a moment.)


### Plugins configuration

The `plugins` configuration option allows you to enable functionality within the editor. By default, **no** plugins are loaded.

However, there are several significant TinyMCE plugins that provide key features. It is important to not only consider which plugins you wish to include but to also understand how to include them.

Fortunately this is easy. Add `plugins` to `tinymce.init()` and provide a comma or space separated string, or an array of strings, as values. Here's an example:

```js
tinymce.init({
  selector: "textarea",
  plugins : "advlist autolink link image lists charmap print preview"
});
```

The full list of plugins, their options and control associations is [available here]({{ site.baseurl }}/plugins/).


### Toolbar configuration

TinyMCE comes with a default set of toolbar controls out of the box, things such as bold, italic and text alignment. Basically, the type of settings you would expect to find in any WYSIWYG editor. However, in most integrations it's desirable to change the toolbar configuration to suit your needs. Fortunately that's quite easy to do too.

But before we get to configuring the toolbar, let's have a look at the default menu items and toolbar buttons. You'll see us use some of these in the examples below and you can probably work out what they do from their names.

**Default Toolbar Controls**

> newdocument bold italic underline strikethrough alignleft aligncenter alignright alignjustify styleselect formatselect fontselect fontsizeselect cut copy paste bullist numlist outdent indent blockquote undo redo removeformat subscript superscript


The toolbar configuration option allows you to choose which items appear on the toolbar, as well as the order and grouping of those toolbar items.

Additionally, multiple toolbars can be used by specifying multiple toolbar options suffixed with a number i.e. "toolbar1", "toolbar2", "toolbar3", etc. If multiple toolbars are used, the original toolbar option will be ignored.

To specify the controls that should appear on TinyMCE's toolbar, the toolbar option should be provided with a space separated list of toolbar controls. To create groups within this list, add `"|"` pipe characters between the groups of controls that you would like to create.

An example of such a grouped toolbar is as follows:

```js
tinymce.init({
  selector: "textarea",
  toolbar: "undo redo | styleselect | bold italic | link image"
});
```

To disable the toolbar entirely, the toolbar option should be provided a boolean value of `false`, like this:

```js
tinymce.init({
  selector: "textarea",
  toolbar: false
});
```

To specify multiple toolbars, the toolbar option should be provided with an array of space separated strings.

Here is an example creating multiple toolbars:

```js
tinymce.init({
  selector: "textarea",
  toolbar: [
    "undo redo | styleselect | bold italic | link image",
    "alignleft aligncenter alignright"
  ]
});
```

Alternatively, you may specify multiple toolbars through the use of the [`toolbar<N>`]({{ site.baseurl }}/editor-configuration-settings/editor-appearance/#toolbar-n) option.

#### A quick look at menu and menubar controls

Just as there is a `toolbar` option, there is also a `menu` option. In fact, there are two menu related options: `menu` and `menubar`. Let's take a quick look at the default menu items, which you'll see us use in the examples below.

**Default Menu Controls**

> newdocument undo redo visualaid cut copy paste selectall bold italic underline strikethrough subscript superscript removeformat formats

The difference between the two options is that `menubar` affects the items placed on the menu "bar" itself where `menu` affects individual items appearing on a menu's dropdown. Additionally, `menu` will give you much more granular control (e.g. you can create your own titles for menu items). This is easier to understand with an example.

In the snippet below our menubar will include only the menu items `File`, `Edit` and `View`. However, this will also load the default items included in each respective menu. For example, `Edit` will load Undo, Redo, Cut, Copy, Paste, Select all.

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  menubar: "file edit view"
});
```

If you wanted to create an `Edit` menu and include only Cut, Copy, Paste items you would use `menu` instead. Like this:

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  menu: {
    view: {title: 'Edit', items: 'cut, copy, paste'}
  }
});
```

And for a little bit of fun, you can even create your own menu titles. In the snippet below we will create a menu with the title "Happy" and include the "Source code" item.

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  menu: {
    view: {title: 'Happy', items: 'code'}
  }
});
```

If you wish to exclude `menubar` and/or `toolbar` controls set their value to `false`. For example, to remove the toolbar and menu completely you would do this:

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  menubar: false,  // removes the menubar
  toolbar: false  // removes the toolbar
});
```

> Important! If a menu or toolbar control is associated with plugin functionality, we highlight that relationship under its respective plugin entry. Look for the icons.



## Basic configuration example

Using the configuration options above you'll be able to instantiate TinyMCE and perform the initial customizations to match your editor requirements. TinyMCE has many many other configuration options available that enable further customization and extension of the editor.

You will find full list of [configuration options here]({{ site.baseurl }}/editor-configuration-settings/). Plugins, their options and control associations are [available here]({{ site.baseurl }}/plugins/).

To help get you started, let's walk through an example of a basic TinyMCE configuration.

```html
<!DOCTYPE html>
<html>
<head>
  <script type="text/javascript" src="//tinymce.cachefly.net/4.2/tinymce.min.js"></script>
  <script type="text/javascript">
    tinymce.init({
      selector: "#myTextarea",
      theme: "modern",
      width: 300,
      height: 300,
      plugins: [
        "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
        "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
        "save table contextmenu directionality emoticons template paste textcolor"
      ],
      content_css: "css/content.css",
      toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons"
    });
  </script>
</head>

<body>
  <textarea id="myTextarea"></textarea>
</body>
</html>
```

#### Breakdown of the above example

First we want to select only the `textarea` with the id `myTextarea`.

> ```js
selector: "#myTextarea",
```

We next choose a theme, in this case the modern theme (which is the default theme, so this isn't needed. You can however create your own themes using the [TinyMCE Skin Creator](http://skin.tinymce.com/)).

> ```js
theme: "modern",
```

Here we set the width and height of the editor in pixels. These must be integer values.

> ```js
width: 300,
height: 300,
```

Here we select the plugins that should be included on load.

> ```js
plugins: [
  "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
  "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
  "save table contextmenu directionality emoticons template paste textcolor"
],
```

Next we set the styling of the editable area using `content_css`. This should be a (very) stripped down version of your website CSS, with things such as styles for headers (H1-H6), table layouts, margins, paddings around elements (images, paragraphs), and so on.

> ```js
content_css: "css/content.css",
```

Lastly we want to select the toolbar buttons exposed to the user. You can use a comma or space as a separator.

> ```js
toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",
```

And we are done. We hope you found the above example helpful in showing not only how powerful TinyMCE is but also how easy it is to customize.



## Next steps

In the next step you'll learn about TinyMCE's [inline mode](../using-tinymce-inline/).
