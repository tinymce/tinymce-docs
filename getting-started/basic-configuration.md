---
layout: default
title: Basic Customization
---


TinyMCE provides a wide range of configuration options that enable you to integrate it tightly with your application.

In this Configuration Quick Start we will introduce the basic configuration options typically used in traditional form-based layouts, along with examples of how to use TinyMCE as an inline editor (which is very useful when creating user experiences where the editing view of the page is merged with the reading view of the page.)



## Basic Configuration

Once you've added the TinyMCE script to your page there are three configuration aspects you need to consider:

1. Selector Configuration
2. Plugin Configuration
3. Toolbar Configuration


### Selector Configuration

This is the most important configuration option for your TinyMCE integration. Selector configuration allows you to use CSS selector syntax to determine which elements on the page should be editable through TinyMCE.

In other words, this is where you specify a CSS selector for the areas TinyMCE will make editable.

When using this option in TinyMCE's regular editing mode the selected element will be replaced with an `iframe` and TinyMCE will perform all operations within this context.

Here's an example that will replace all `textarea` elements on the page:

```js
tinymce.init({
    ...
    selector: "textarea",
    ...
});
```

You can also match an ID attribute. The following example will replace a `textarea` element with `id` `"editable"` on the page:

```js
tinymce.init({
    ...
    selector: "textarea#editable",
    ...
});
```

When using this option in TinyMCE's inline editing mode the selector can be used on any block element, which will edit the content in place instead of replacing the element with an `iframe`.

Here's an example of this setting being used in inline editing mode on a `div` element with `id` `"editable"`:

```js
tinymce.init({
    ...
    selector: "div#editable",
    inline: true,
    ...
});
```

For more information on the differences between regular and inline editing modes see the Inline Configuration section on this page.


### Plugins Configuration

The `plugins` configuration option allows you to enable functionality within the editor. By default, **no** plugins are loaded.

However, there are several significant TinyMCE plugins that provide key features. It is important to not only consider which plugins you wish to include but to also understand how to include them.

Fortunately this is easy. Add `plugins` to `tinymce.init()` and provide a comma or space separated string, or an array of strings. Here's an example:

```js
tinymce.init({
    ...
    plugins : 'advlist autolink link image lists charmap print preview'
    ...
});
```

The full list of plugins, their options and control associations is [available here](/plugins/).


### Toolbar Configuration

In most TinyMCE integrations it's desirable to change the toolbar configuration to suit your needs. By default TinyMCE provides a basic set of editing tools on the toolbar and it is recommended that you adapt the toolbar configuration to match your requirements.

The toolbar configuration option allows you to choose which items appear on the toolbar as well as the order and grouping of toolbar items.

Additionally, multiple toolbars can be used by specifying multiple toolbar options suffixed with a number i.e. "toolbar1", "toolbar2", "toolbar3", etc. If multiple toolbars are used, the original toolbar option will be ignored.

To specify the controls that should appear on TinyMCE's toolbar, the toolbar option should be provided with a space separated list of toolbar controls. To create groups within this list, please add `"|"` pipe characters between the groups of controls that you would like to create.

An example of such a grouped toolbar is as follows:

```js
tinymce.init({
    ...
    toolbar: "undo redo | styleselect | bold italic | link image",
    ...
});
```

To disable the toolbar entirely, the toolbar option should be provided a boolean value of `false`, like this:

```js
tinymce.init({
    ...
    toolbar: false,
    ...
});
```

To specify multiple toolbars, the toolbar option should be provided with an array of space separated strings.

Here is an example creating multiple toolbars:

```js
tinymce.init({
    ...
    toolbar: [
        "undo redo | styleselect | bold italic | link image",
        "alignleft aligncenter alignright"
    ]
    ...
});
```

Alternatively, you may specify multiple toolbars through the use of the [toolbar<N>] option.


TinyMCE contains a set of core toolbar and menu controls; things such as bold, italic and text alignment. Basically, the type of settings you would expect to find in any WYSIWYG editor.

Here is the complete list of **core** **Menu Controls**, in space separated format.

```
newdocument undo redo visualaid cut copy paste selectall bold italic underline strikethrough subscript superscript removeformat formats
```

And here are the **core** **Toolbar Controls**, again in space separated format.

```
newdocument bold italic underline strikethrough alignleft aligncenter alignright alignjustify styleselect formatselect fontselect fontsizeselect cut copy paste bullist numlist outdent indent blockquote undo redo removeformat subscript superscript
```

To create groups of toolbar controls, add a `"|"` pipe character between the items you would like grouped together. For example:

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    menubar: "file edit view",
    toolbar: "bold italic | alignleft aligncenter alignright"
});
```

If you wish to exclude `menubar` and/or `toolbar` controls set their value to `"none"`. To remove the toolbar and menu completely you would do this:

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    menubar: "none",  // removes the menubar
    toolbar: "none"  // removes the toolbar
});
```

> Important! If a menu or toolbar control is associated with plugin functionality, we highlight that relationship under its respective plugin entry. Look for the icons.

Two notes for first time users:

1. If controls are not expressly declared, TinyMCE instantiates its default, **core** menu and toolbar controls. See the code example in the [First Steps](../first-steps/).
2. The `key` passed to the `.init` method for menu functionality can be either [`menu`](/editor-configuration-settings/editor-appearance/#menu) or [`menubar`](/editor-configuration-settings/editor-appearance/#menubar), but note that they operate differently.


## Basic Configuration Example

Using the configuration options above you'll be able to instantiate TinyMCE and perform the initial customizations to match your editor requirements. TinyMCE has many many other configuration options available that enable further customization and extension of the editor.

You will find full list of [configuration options here](/editor-configuration-settings/). Plugins, their options and control associations are [available here](/plugins/).

To help get you started, let's walk through an (advanced) TinyMCE configuration example.

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="<your installation path>/tinymce.min.js"></script>
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
       toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",
       style_formats: [
            {title: 'Bold text', inline: 'b'},
            {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
            {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
            {title: 'Example 1', inline: 'span', classes: 'example1'},
            {title: 'Example 2', inline: 'span', classes: 'example2'},
            {title: 'Table styles'},
            {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
        ]
     });
    </script>
</head>
<body>
    <textarea id="myTextarea"></textarea>
</body>
</html>
```

#### Breakdown of the above example

First we want to select only the `textarea` with id `myTextarea`:

> ```js
selector: "#myTextarea",
```

We next choose a theme, in this case the modern theme (default, not needed.)

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

`content_css` is important as it let's you style the content inside the editor window. This should be a (very) stripped down version of your website CSS, with things such as styles for headers (H1-H6), table layouts, margins, paddings around elements (images, paragraphs), and so on.

> ```js
content_css: "css/content.css",
```

Next select the buttons you want in your toolbar. You can use a comma or space as a separator.

> ```js
toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",
```

Lastly we have implemented a powerful styles configuration. For example, "Bold text" simply makes a `<b>` tag, "Red text" makes a span with a style coloring it RED.

The "Table row" can only be applied to a table row `<tr>`.

> ```js
    style_formats: [
        {title: 'Bold text', inline: 'b'},
        {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
        {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
        {title: 'Example 1', inline: 'span', classes: 'example1'},
        {title: 'Example 2', inline: 'span', classes: 'example2'},
        {title: 'Table styles'},
        {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
    ],
```

Check out the [formats options] for more information on how to bend these options to your will.



# Next Steps

In the next step you'll learn about TinyMCE's [inline mode](../using-tinymce-inline/).
