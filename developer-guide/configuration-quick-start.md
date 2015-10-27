---
layout: default
title: Configure
---

It's now time to configure the editor. Here we'll introduce some basic and slightly more advanced configuration options (which you'd typically use in traditional forms based layouts) along with examples of how to use TinyMCE as an inline editor (which is useful when creating user experiences where you want the editing view of the page to be merged with the reading view of the page).



# Basic Configuration
TinyMCE provides a number of configuration options enabling you to integrate it tightly with your application.  This guide will explore the most commonly used configuration options to help you get the most out of your new TinyMCE installation.

Once you've added the TinyMCE script to your page, there are three main aspects of configuration you need to consider:
* selector
* plugins
* toolbar configuration

## Selector Configuration Option

Possibly the most important configuration option for your TinyMCE integration.  The selector configuration option allows you to use CSS selector syntax to determine which elements on the page should be editable through TinyMCE.

This option allows you to specify a CSS selector for the areas that TinyMCE should make editable.

When using this option in TinyMCE's regular editing mode, the element will be replaced with an `iframe` that TinyMCE will perform all operations within.

An example of this setting that will replace all `textarea` elements on the page is as follows:

```js
tinymce.init({
    ...
    selector: "textarea",
    ...
});
```

An example of this setting that will replace a `textarea` element with `id` `"editable"` on the page is as follows:

```js
tinymce.init({
    ...
    selector: "textarea#editable",
    ...
});
```

When using this option in TinyMCE's inline editing mode, the selector can be used on any block element and will edit the content in place instead of replacing the element with an iframe.

An example of this setting being used in inline editing mode on a `div` element with `id` `"editable"` is as follows:

```js
tinymce.init({
    ...
    selector: "div#editable",
    inline: true,
    ...
});
```

For more information on the differences between regular and inline editing modes please see the [inline section] on this page.

## Plugins Configuration Option

The plugins configuration option allows you to enable functionality within the editor. By default, **no** plugins are loaded. As there are several significant TinyMCE plugins that provide key features it is important that you consider which plugins you wish to include.

Specify which plugins you would like to use by providing this configuration option a comma or space separated string, or an array of strings.

An example of this setting is as follows:

```js
tinymce.init({
    ...
    plugins : 'advlist autolink link image lists charmap print preview'
    ...
});
```

The full list of plugins, their options and control reference is [available here].

## Toolbar Configuration Option

In most TinyMCE integrations it's desirable to change the toolbar configuration to suit your needs.  By default TinyMCE provides a basic set of editing tools on the toolbar and it is recommended that you adapt the toolbar configuration to match your requirements.

The toolbar configuration option allows you to choose which items appear on the toolbar as well as the order and grouping of toolbar items.

Alternatively, multiple toolbars can be used by specifying multiple toolbar options suffixed with a number ie. "toolbar1", "toolbar2", "toolbar3" etc.  If multiple toolbars are used, the original toolbar option will be ignored.

To specify the controls that should appear on TinyMCE's toolbar, the toolbar option should be provided with a space separated list of toolbar controls. To create groups within this list, please add `"|"` pipe characters between the groups of controls that you would like to create.

An example of such a grouped toolbar is as follows:

```js
tinymce.init({
    ...
    toolbar: "undo redo | styleselect | bold italic | link image",
    ...
});
```

To disable the toolbar, the toolbar option should be provided a boolean value of false.

An example of a disabled toolbar is as follows:

```js
tinymce.init({
    ...
    toolbar: false,
    ...
});
```

To specify multiple toolbars, the toolbar option should be provided with an array of space separated strings.

An example of multiple toolbars is as follows:

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



# Digging Deeper into Configuration Options

Using the configuration options above you'll be able to instantiate TinyMCE and perform the initial customizations to match your editor requirements. TinyMCE has many many other configuration options available that enable further customization and extension of the editor.

The full list of configuration options is [available here].

Some advanced installation configurations are shown here.

```html
<!-- place in header of your html document -->
<script>
tinymce.init({
    selector: "textarea#elm1",
    theme: "modern",
    width: 300,
    height: 300,
    plugins: [
         "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
         "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
         "save table contextmenu directionality emoticons template paste textcolor"
   ],
   content_css: "css/content.css",
   toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | l      ink image | print preview media fullpage | forecolor backcolor emoticons",
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

<!-- place in body of your html document -->
<textarea id="elm1" name="area"></textarea>
```

## Breakdown of the above example

Select only the textarea with ID elm1

```js
selector: "textarea#elm1",
```

Set the modern theme (default, not needed).

```js
theme: "modern",
```

Width of editor in pixels, integer value.

```js
width: 300,
```

Height of editor in pixels, integer value.

```js
height: 300,
```

A list of plugins that should be included on load.

```js
plugins: [
         "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
         "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
         "save table contextmenu directionality emoticons template paste textcolor"
],
```

Set a css to use inside the editor window, should be a stripped down version of your website CSS, with things such as styles for headers (H1-H6), table layouts, margins, paddings around elements (images, paragraphs etc).

```js
content_css: "css/content.css",
```

Select what buttons you might want in your toolbar, you can use comma or space as a seperator.

```js
toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",
```

Very powerful styles configuration, for example, "Bold text" simply makes a `<b>` tag, "Red Text" makes a span with a style coloring it RED.

The "Table row" can only be applied to a table row `<tr>`.

```js
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



# Inline Configuration

TinyMCE has two main integration modes: a "traditional" forms based mode, and an inline editing mode. The inline editing mode is useful when creating user experiences where you want the editing view of the page to be merged with the reading view of the page. This creates a seamless editing experience and true WYSIWYG behaviour.  From a technical perspective, in inline mode, the editor does not replace the selected element with it's own iframe, but instead edits the element's content in place instead.

## Forms-based Editing vs Inline Editing

Most common TinyMCE integrations use the editor in its traditional forms based mode.  In this integration mode the editor usage is as a form field that must be filled out to provide content.  The editor is always visible as part of the form to be edited.

Inline editing mode blends the editable view with the readable view of the page.  Elements are replaced inline with an editor once clicked rather than the editor always being visible.

Most significantly, when using inline editing TinyMCE is not isolated from the page by virtue of being encapsulated within an iframe.  This has the advantage of ensuring that the content within the editor inherits the surrounding page's styles when presenting the content.

Since the editor is not sandboxed in an iframe in inline editing mode, CSS styles for the editor's content will be inherited from the page that the editor is on.  This allows you to edit content exactly as it appears within the context of the page, providing a true WYSIWYG editing experience.

## Inline Editing and Complex Stylesheets

When using TinyMCE in inline mode it will inherit the CSS stylesheet from the page it is embedded in. While this is advantageous in providing a true WYSIWYG view of the content it can result in user confusion when working with complex CSS. This is because your site's CSS is now applying directly to the editor and may result in behaviour that the user doesn't expect. When using the editor in inline mode care should be taken when using styling that depends on structures within the editor. For example:

If you had a class like this:

```css
h1 strong {
    color:orange;
}
```

This would make the phrase "bold text" bold and orange in the structure:

```html
<h1>This text is <strong>bold text</strong> in a heading</h1>
```

If the user changed the heading to a paragraph or a different heading level then the text color of the bold text would, unexpectedly, change for the user. While this is entirely correct behaviour according to the stylesheet it is entirely unexpected from the user's perspective.

## Enabling Inline Editing Mode

Enabling inline editing mode is quite simple. Setting the "inline" configuration property to true is all that's needed in combination with a normal selector. An example of this is as follows:

```html
<!DOCTYPE html>
<html>
<head>
  <script type="text/javascript" src="<your installation path>/tinymce/tinymce.min.js"></script>
    <script type="text/javascript">
        tinymce.init({
            selector: "#myeditablediv",
            inline: true
        });
    </script>
</head>
<body>
    <h1>TinyMCE Inline Editing Mode Guide</h1>
    <form method="post">
        <div id="myeditablediv">Click here to edit!</div>
    </form>
</body>
</html>
```



# Next steps

* Become a TinyMCE editor ninja. Learn more about [advanced configuration options](./customize/).
