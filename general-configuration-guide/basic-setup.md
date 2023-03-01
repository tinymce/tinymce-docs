---
layout: default
title: Basic setup
title_nav: Basic setup
description_short: The three most important configuration settings, with examples.
description: TinyMCE provides a range of configuration options that allow you to integrate it into your application.
keywords: selector plugin toolbar configuration configure
---

This introduction to {{site.productname}} details the options used in traditional form-based layouts, useful information for creating streamlined user experiences, and examples of using {{site.productname}} as an inline editor.

The four most common configuration options for {{site.productname}} are:

1. [_(Required)_ The Selector configuration](#selectorconfiguration)
2. [The Plugin configuration](#pluginconfiguration)
3. [The Toolbar configuration](#toolbarconfiguration)
4. [The Menu and Menu Bar configuration](#menuandmenubarconfiguration)

## A note about code snippet examples

Code snippets are provided as example implementations throughout the {{ site.productname }} documentation.

Example code snippet:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugin: 'a_tinymce_plugin',
  a_plugin_option: true,
  a_configuration_option: 400
});
```

Snippets include the `selector` option, which is described below. Change the value of the working code block according to the HTML.

Insert the snippet into a HTML document between the `<script>` tags and update the selector as described below.

## Selector configuration

Selector configuration is required for {{site.productname}} integration. Selector configuration uses [CSS `selector` syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) to determine which elements on the page are editable through {{site.productname}}.

{{site.productname}} visually replaces the selected element with an `iframe` (the editable content area) and the UI elements (such as toolbar, menu bar, and status bar).

The following example replaces all `textarea` elements on the page with {{site.productname}} instances:

```js
tinymce.init({
  selector: 'textarea'
});
```

{{site.productname}} can also match an `id` attribute.

The following example replaces a `textarea` element with the `id` `"default"` on the page:

```js
tinymce.init({
  selector: 'textarea#default'
});
```

Providing a {{site.productname}} editor with the default configuration, such as:
{% include live-demo.html id="default" %}

The selector can target most block elements when the editor is used in [inline editing mode](../use-tinymce-inline/). Inline mode edits the content in place, instead of replacing the element with an `iframe`.

The following example uses the `selector` in inline editing mode on a `div` element with `id` `'editable'`:

```js
tinymce.init({
  selector: 'div#editable',
  inline: true
});
```

For information on the differences between the classic and inline editing modes, see: [Setup inline editing mode](../use-tinymce-inline/).

## Plugin configuration

The functionality of {{site.productname}} is extended by using plugins, which are enabled using the `plugins` option.

The following example enables the lists (`lists`), Advanced Lists (`advlist`), Link (`link`), and Image (`image`) plugins.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'advlist link image lists'
});
```

For a full list of plugins and their options, see: [Add plugins to TinyMCE]({{ site.baseurl }}/plugins/).

## Toolbar configuration

{{site.productname}} provides a default set of toolbar controls, which can be overridden using the `toolbar` option.

### Default toolbar controls

The {{site.productname}} default toolbar contains the following buttons:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to the HTML
  toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent'
});
```

<script>
tinymce.init({
  selector: 'textarea.default'
});
</script>
<textarea class="default">Hello, World!</textarea><br/>

The `toolbar` option defines the presence, order, and grouping of toolbar buttons.

Use a space-separated list to specify the toolbar buttons for {{site.productname}}. Create toolbar groups by using the "`|`" pipe character between button names.

#### Additional information

* For additional toolbar options, including disabling the toolbar and adding multiple toolbars, see: [User interface options - toolbar]({{site.baseurl}}/configure/editor-appearance/#toolbar).
* For a list of all available toolbar items, see: [Toolbar Buttons Available for {{site.productname}}]({{site.baseurl}}/advanced/available-toolbar-buttons/).

## Menu and Menu bar configuration

There are two menu options: `menubar` and `menu`.
`menubar` is used to define the presence and order of _menus_, such as **File**, **Edit**, and **View**.
`menu` is used to define the presence and order of _menu items_, such as **New Document**, **Select all**, and **Source code**.

### Menu and Menu bar configuration examples

To display the _File_, _Edit_, and _View_ menus:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  menubar: 'file edit view'
});
```

{% include live-demo.html id="menubar" %}

To create an `Edit` menu that only contains the _Undo_, _Redo_, and _Select all_ items.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  menu: {
    edit: {title: 'Edit', items: 'undo, redo, selectall'}
  }
});
```

{% include live-demo.html id="menu1" %}

To create a menu titled "Happy", provide an identifier for the menu and an object with the `title` and `items` for the menu.

For example:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  menu: {
    happy: {title: 'Happy', items: 'code'}
  },
  plugins: 'code',  // required by the code menu item
  menubar: 'happy'  // adds happy to the menu bar
});
```

{% include live-demo.html id="menu2" %}

### Default menu controls

The default menus are as follows:

{% include configuration/defaultmenuitems.md %}

> **Note**: Some menu items require a plugin, such as the `table` menu and items requires the `table` plugin.

#### Additional information

* For information on the `menu` setting, see: [User interface options - menu]({{site.baseurl}}/configure/editor-appearance/#menu).
* For information on the `menubar` setting, see: [User interface options - menubar]({{site.baseurl}}/configure/editor-appearance/#menubar).
* For a list of all available menu items, see: [Menu Items Available for {{site.productname}}]({{site.baseurl}}/advanced/available-menu-items/).

## Basic configuration example

The following example is a basic {{site.productname}} configuration.

```html
<!DOCTYPE html>
<html>
<head>
  <script
    type="text/javascript"
    src='{{ site.cdnurl }}'
    referrerpolicy="origin">
  </script>
  <script type="text/javascript">
  tinymce.init({
    selector: '#myTextarea',
    width: 600,
    height: 300,
    plugins: [
      'advlist autolink link image lists charmap print preview hr anchor pagebreak',
      'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
      'table emoticons template help'
    ],
    toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
      'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
      'forecolor backcolor emoticons | help',
    menu: {
      favs: {title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons'}
    },
    menubar: 'favs file edit view insert format tools table help',
    content_css: 'css/content.css'
  });
  </script>
</head>

<body>
  <textarea id="myTextarea"></textarea>
</body>
</html>
```

### Break-down of the basic configuration example

The following section is a break-down of the options used in the basic configuration example.

Selects the `textarea` with the id `myTextarea` to be replaced by the editor.

```js
selector: '#myTextarea',
```

Sets the width and height of the editable area in pixels as numeric values.

```js
width: 600,
height: 300,
```

Selects the plugins to be included on load.

```js
plugins: [
  'advlist autolink link image lists charmap print preview hr anchor pagebreak',
  'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
  'table emoticons template help'
],
```

Selects the toolbar buttons displayed to the user. Use a comma or space as a separator.

```js
toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons',
```

Adds an additional menu named "My Favorites" with `menu`, then adds it to the menu bar using `menubar`.

```js
menu: {
  favs: {title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons'}
},
menubar: 'favs file edit view insert format tools table help',
```

Sets the styling of the editable area using `content_css`.

```js
content_css: 'css/content.css',
```

{% include live-demo.html id="basic-conf" %}

### Additional information

* For a full list of configuration options, see: the [Configuration options reference]({{ site.baseurl }}/configure/).
* For a full list of Plugins and their options, see: [Add plugins to TinyMCE]({{ site.baseurl }}/plugins/).
* For information on the UI elements, see: [User interface components]({{ site.baseurl }}/ui-components/).
* For information on the CSS required to render some {{site.productname}} elements outside of the editor, see: [Boilerplate content CSS]({{site.baseurl}}/general-configuration-guide/boilerplate-content-css/).

{% assign_page next_page = "/general-configuration-guide/use-tinymce-classic/index.html" %}
{% include next-step.html next=next_page %}
