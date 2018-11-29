---
layout: default
title: Basic setup
title_nav: Basic setup
description_short: The three most important configuration settings, with examples.
description: TinyMCE provides a wide range of configuration options that enable you to integrate it tightly with your application.
keywords: selector plugin toolbar configuration configure
---

This introduction to TinyMCE configuration section details important options used in traditional form-based layouts, useful information for creating streamlined user experiences and examples of using TinyMCE as an inline editor. 

There are three configuration options that require careful consideration once the TinyMCE script has been added to your page:

1. [Selector configuration](#selectorconfiguration)
2. [Plugin configuration](#pluginconfiguration)
3. [Toolbar & menu configuration](#toolbarmenuconfiguration)

## A note about code snippet examples

Code snippets are provided as example implementations for each topic in this reference section.

Example code snippet:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugin: 'a_tinymce_plugin',
  a_plugin_option: true,
  a_configuration_option: 400
});
```

Snippets regularly include a `selector` with the value `'textarea'`. Adapt the value of the working code block according to the HTML. 

Insert the snippet into your HTML document and replace everything between the `<script>` tags containing the `tinymce` object (`tinymce.init({})`). Visual changes such as adding a toolbar button or menu item changes the editor immediately.

## Selector configuration

Selector configuration is an important configuration option for TinyMCE integration. Selector configuration uses CSS `selector` syntax to determine which elements on the page are editable through TinyMCE.

> Important!: This is where TinyMCE editable areas are specified. 

TinyMCE replaces the selected element with an `iframe` and performs its operations within that `iframe` while in regular editing mode. 

The following example replaces all `textarea` elements on the page:

```js
tinymce.init({
  selector: 'textarea'
});
```

TinyMCE can also match an `id` attribute. 

The following example replaces a `textarea` element with `id` `'editable'` on the page:

```js
tinymce.init({
  selector: 'textarea#editable'
});
```

This selector can be used on any block element while using this option in TinyMCE's [inline editing mode](../use-tinymce-inline/). Inline editing mode edits the content in place instead of replacing the element with an `iframe`.

The following example uses `selector` in inline editing mode on a `div` element with `id` `'editable'`:

```js
tinymce.init({
  selector: 'div#editable',
  inline: true
});
```

> Note: For more information on the differences between regular and inline editing modes see the [Using TinyMCE Inline](../use-tinymce-inline/) page.


## Plugin configuration

The `plugins` configuration option enables the plugins functionality within the editor. TinyMCE plugins provide useful features to extend and enhance the TinyMCE experience.

> Important: Now is the time to consider which plugins to include in TinyMCE

Enabling plugin functionality is simple. Simply add the `plugins` key to `tinymce.init()` and provide a comma, space-separated string, or an array of strings as values. 

The following example enables plugins.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins : 'advlist autolink link image lists charmap print preview'
});
```

Documentation about configuring plugins are in the relevant sections of the documentation.  The full list of plugins, their options, and control associations is [available here]({{ site.baseurl }}/plugins/).


## Toolbar & menu configuration

TinyMCE provides a default set of toolbar controls, such as bold, italic, and text alignment buttons. TinyMCE provides an easy way to change this toolbar configuration to suit individual deployment scenarios.

#### Default toolbar controls

The TinyMCE default toolbar contains the following buttons:

newdocument | bold | italic | underline | strikethrough
alignleft | aligncenter | alignright | alignjustify | styleselect
formatselect | fontselect | fontsizeselect | cut | copy
paste | bullist | numlist | outdent | indent
blockquote | undo | redo | removeformat | subscript
superscript | | | |

![TinyMCE Default Toolbar & Menubar State]({{ site.baseurl }}/images/tinymce-default-state.png)

*Default TinyMCE toolbar & menubar state*

The `toolbar` option diplays, orders, and groups the toolbar buttons.

Use a space separate list to specify the buttons that appear in TinyMCE's toolbar. Use `"|"` pipe characters between the groups of buttons to create groups within this list.

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to the HTML
  toolbar: 'undo redo | styleselect | bold italic | link image',
});
```

Set the boolean value to `false` to disable the toolbar entirely. This example disables the toolbar.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to the HTML
  toolbar: false
});
```

The example below specifies multiple toolbars by providing an `array` of space separated strings. 

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to the HTML
  toolbar: [
    'undo redo | styleselect | bold italic | link image',
    'alignleft aligncenter alignright'
  ]
});
```
> Note: Adding multiple `toolbar` options suffixed with a number i.e. "toolbar1", "toolbar2", "toolbar3" is allowed.


### A quick look at menu and menubar controls

Just as there is a `toolbar` option, there is also a `menu` option. There  are two menu related options: `menu` and `menubar`. Let's take a quick look at the default menu items. Some of these settings are used in the examples throughout this guide and all of them within the plugins and customization documentation.

#### Default menu controls

```js
newdocument, undo, redo, visualaid, cut, copy, paste, selectall, bold, italic, underline, strikethrough, subscript, superscript, removeformat, formats
```

`menubar` affects items placed on the menu bar itself and `menu` affects individual items appearing on a menu's drop-down. `menu` also provides granular control of the menus. Customized titles can be created for menu items using `menu`.

The menubar in the following snippet includes only the menu items `File`, `Edit` and `View`. 

> Note: The example above also loads the default items included in each respective menu. For example, `Edit` loads Undo, Redo, Cut, Copy, Paste, and Select all.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  menubar: 'file edit view'
});
```

The following example creates an `Edit` menu that includes only Cut, Copy, and Paste items.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  menu: {
    view: {title: 'Edit', items: 'cut, copy, paste'}
  }
});
```

Create your own menu titles by adding a `title` value. The following example creates a menu titled "Happy". In the snippet below we create a menu with the title "Happy" and includes the "Source code" item.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  menu: {
    view: {title: 'Happy', items: 'code'}
  },
  plugins: 'code'  // required by the code menu item
});
```

Setting the value of `menubar` or `toolbar` to false removes them. The example below removes both the toolbar *and* menubar.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  menubar: false,  // removes the menubar
  toolbar: false  // removes the toolbar
});
```

> Important: Each page in the plugin documentation indicates via an icon if that plugin has a toolbar buttons or menu items. 



## Basic configuration example

TinyMCE has many other configuration options available that enable further customization and extension of the editor to match the user's requirements.

The full list of configuration options is in the [Configure TinyMCE Guide]({{ site.baseurl }}/configure/). Plugins, their options and control associations are available in the [Plugin guide]({{ site.baseurl }}/plugins/).

The following example is a walkthrough of a basic TinyMCE configuration.

```html
<!DOCTYPE html>
<html>
<head>
  <script type="text/javascript" src='{{ site.cdnurl }}'></script>
  <script type="text/javascript">
  tinymce.init({
    selector: '#myTextarea',
    theme: 'silver',
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

Select only the `textarea` with the id `myTextarea`.

> ```js
selector: '#myTextarea',
```

Choose a theme such as the silver theme. 

> Note: Only the silver theme is currently compatible with TinyMCE 5. Create your themes using the [TinyMCE Skin Creator](http://skin.tinymce.com/)).

> ```js
theme: 'silver',
```

Set the width and height of the editable area in pixels as numeric values.

> ```js
width: 600,
height: 300,
```

Select the plugins that should be included on load.

> ```js
plugins: [
  'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
  'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
  'save table contextmenu directionality emoticons template paste textcolor'
],
```

Set the styling of the editable area using `content_css`. The styling should be a simplified version of your website CSS. Use styles for headers (H1-H6), table layouts, margins, paddings around elements (images, paragraphs), etc.

> ```js
content_css: 'css/content.css',
```

The final step is to select the toolbar buttons exposed to the user. Use a comma or space as a separator.

> ```js
toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons',
```

{% assign_page next_page = "/general-configuration-guide/use-tinymce-classic/index.html" %}
{% include next-step.html next=next_page %}
