---
layout: default
title: 01. Basic Setup
description_short: The 3 most important configuration settings, with examples.
description: TinyMCE provides a wide range of configuration options that enable you to integrate it tightly with your application.
keywords: selector plugin toolbar configuration configure
---

In this introduction to TinyMCE configuration, we will discuss the most important options typically used in traditional form-based layouts, along with examples of how to use TinyMCE as an inline editor. This information is useful when creating user experiences where the editing view of the page is merged with the reading view of the page.

Once you've added the TinyMCE script to your page there are three configuration aspects you need to consider:

1. [Selector configuration](#selectorconfiguration)
2. [Plugin configuration](#pluginconfiguration)
3. [Toolbar & menu configuration](#toolbarmenuconfiguration)

## A note about code snippet examples

Throughout the reference documentation, we use snippets of code to show you an example implementation of the topic being discussed. Below are some examples of what snippets look like throughout the documentation.

Snippets typically look like this:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugin: 'a_tinymce_plugin',
  a_plugin_option: true,
  a_configuration_option: 400
});
```

Snippets always include a `selector` with the value `'textarea'`. You need to change this value according to your HTML, but otherwise, the snippet is a working code block.

Cut and paste the snippet into your HTML document, replacing everything between the `<script>` tags containing the `tinymce` object (`tinymce.init({})`). If the setting makes a visual change to the editor, (for example adds a toolbar button or menu item) you'll see the changes in the editor.

## Selector configuration

Selector configuration is the most critical configuration option for your TinyMCE integration. Selector configuration allows you to use CSS `selector` syntax to determine which elements on the page should be editable through TinyMCE.

In other words, this is where you specify a CSS selector for the areas that TinyMCE makes editable.

When using this option in TinyMCE's regular editing mode, the selected element is replaced with an `iframe` and TinyMCE performs all operations within this context.

Here's an example to replace all `textarea` elements on the page:

```js
tinymce.init({
  selector: 'textarea'
});
```

You can also match an `id` attribute. The following is an example to replace a `textarea` element with `id` `'editable'` on the page:

```js
tinymce.init({
  selector: 'textarea#editable'
});
```

When using this option in TinyMCE's [inline editing mode](../use-tinymce-inline/) the selector can be used on any block element, which edits the content in place instead of replacing the element with an `iframe`.

Here, `selector` is being used in inline editing mode on a `div` element with `id` `'editable'`:

```js
tinymce.init({
  selector: 'div#editable',
  inline: true
});
```

> For more information on the differences between regular and inline editing modes see the [Using TinyMCE Inline](../use-tinymce-inline/) page. 


## Plugin configuration

The `plugins` configuration option allows you to enable functionality within the editor. Since several TinyMCE plugins provide useful features to your users, it is essential to consider which plugins you wish to include.

Fortunately, it is easy to enable plugin functionality. All you need to do is add the `plugins` key to `tinymce.init()` and provide a comma, space-separated string, or an array of strings as values. Here's an example:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins : 'advlist autolink link image lists charmap print preview'
});
```

We show you how to configure plugins throughout this guide. The full list of plugins, their options, and control associations is [available here]({{ site.baseurl }}/plugins/).


## Toolbar & menu configuration

TinyMCE comes with a default set of toolbar controls out of the box, such as bold, italic, and text alignment buttons. Ideally, the type of settings you would expect to find in any WYSIWYG editor.

However, in most integrations, it's desirable to change the toolbar configuration to suit your needs. Fortunately, that's quite easy to do too.

#### Default toolbar controls

Before we get to configuring the toolbar, let's have a look at the default toolbar buttons. You can probably work out what they do from their name.

```js
newdocument, bold, italic, underline, strikethrough, alignleft, aligncenter, alignright, alignjustify, styleselect, formatselect, fontselect, fontsizeselect, cut, copy, paste, bullist, numlist, outdent, indent, blockquote, undo, redo, removeformat, subscript, superscript
```

![TinyMCE Default Toolbar & Menubar State]({{ site.baseurl }}/images/tinymce-default-state.png)

*Default TinyMCE toolbar & menubar state*

The `toolbar` option allows you to choose which buttons appear on the toolbar, as well as the order and grouping of those items.

The toolbar option is provided with a space separated list of `toolbar` values to specify the controls that should appear on the TinyMCE's toolbar. To create groups within this list, add `"|"` pipe characters between the groups of controls that you would like to create.

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: 'undo redo | styleselect | bold italic | link image',
});
```

The toolbar option should be provided a boolean value of `false` to disable the toolbar entirely. For example:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: false
});
```

To specify multiple toolbars, the `toolbar` option should be provided with an `array` of space separated strings as shown in the example below. Alternatively you can add multiple `toolbar` options suffixed with a number i.e. "toolbar1", "toolbar2", "toolbar3".

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: [
    'undo redo | styleselect | bold italic | link image',
    'alignleft aligncenter alignright'
  ]
});
```

### A quick look at menu and menubar controls

Just as there is a `toolbar` option, there is also a `menu` option. In fact, there is two menu related options: `menu` and `menubar`. Let's take a quick look at the default menu items. Some of these settings are used in the examples throughout this guide and all of them within the plugins and customization documentation.

#### Default menu controls

```js
newdocument, undo, redo, visualaid, cut, copy, paste, selectall, bold, italic, underline, strikethrough, subscript, superscript, removeformat, formats
```

The difference between the two options is that `menubar` affects the items placed on the menu bar itself where `menu` affects individual items appearing on a menu's drop-down. Additionally, `menu` gives you much more granular control of your menus. For example, you can create your own titles for menu items using `menu`.

In the snippet below, our menubar includes only the menu items `File`, `Edit` and `View`. However, this also loads the default items included in each respective menu. For example, `Edit` loads Undo, Redo, Cut, Copy, Paste, and Select all.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  menubar: 'file edit view'
});
```

If you wanted to create an `Edit` menu and include only Cut, Copy, Paste items you would use `menu` instead. Like this:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  menu: {
    view: {title: 'Edit', items: 'cut, copy, paste'}
  }
});
```

For a little bit of fun, you can even create your own menu titles. In the snippet below we create a menu with the title "Happy" and include the "Source code" item.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  menu: {
    view: {title: 'Happy', items: 'code'}
  },
  plugins: 'code'  // required by the code menu item
});
```

If you wish to exclude `menubar` and/or `toolbar` controls set their value to `false`. For example, to remove the toolbar *and* menu completely you would do this:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  menubar: false,  // removes the menubar
  toolbar: false  // removes the toolbar
});
```

> Important: If a menu or toolbar control is associated with plugin functionality, we highlight that relationship under its respective plugin entry. Be sure to look for the icons.



## Basic configuration example

Using the configuration options above you'll be able to instantiate TinyMCE and perform the initial customizations to match your editor requirements. TinyMCE has many many other configuration options available that enable further customization and extension of the editor.

You will find full list of [configuration options here]({{ site.baseurl }}/configure/). Plugins, their options and control associations are [available here]({{ site.baseurl }}/plugins/).

To help get you started, let's walk through an example of a basic TinyMCE configuration.

```html
<!DOCTYPE html>
<html>
<head>
  <script type="text/javascript" src='{{ site.cdnurl }}'></script>
  <script type="text/javascript">
  tinymce.init({
    selector: '#myTextarea',
    theme: 'modern',
    width: 600,
    height: 300,
    plugins: [
      'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
      'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
      'save table contextmenu directionality emoticons template paste textcolor'
    ],
    content_css: 'css/content.css',
    toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons'
  });
  </script>
</head>

<body>
  <textarea id="myTextarea"></textarea>
</body>
</html>
```

#### Breakdown of the above example

First, we want to select only the `textarea` with the id `myTextarea`.

> ```js
selector: '#myTextarea',
```

We next choose a theme, in this case, the modern theme (which is the default theme, so this isn't needed. You can, however, create your own themes using the [TinyMCE Skin Creator](http://skin.tinymce.com/)).

> ```js
theme: 'modern',
```

Here we set the width and height of the editable area in pixels. These must be numeric values.

> ```js
width: 600,
height: 300,
```

Here we select the plugins that should be included on load.

> ```js
plugins: [
  'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
  'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
  'save table contextmenu directionality emoticons template paste textcolor'
],
```

Next, we set the styling of the editable area using `content_css`. The styling should be a (very) stripped down version of your website CSS, with things such as styles for headers (H1-H6), table layouts, margins, paddings around elements (images, paragraphs), and so on.

> ```js
content_css: 'css/content.css',
```

Lastly, we want to select the toolbar buttons exposed to the user. You can use a comma or space as a separator.

> ```js
toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons',
```

And we are done. We hope you found the above example helpful in showing not only how powerful TinyMCE is but also how easy it is to customize.

{% assign_page next_page = "/general-configuration-guide/use-tinymce-inline/index.html" %}
{% include next-step.html next=next_page %}
