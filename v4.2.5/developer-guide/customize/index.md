---
layout: default
title: Customize
---

// Explanation of how config/customization works, how plugins/control work and some example
// Maybe the index as well?

// Replicate Wiki content on this page: basic configuration, advanced, inline  

# Basic Configuration
TinyMCE provides a number of configuration options enabling you to integrate it tightly with your application.  This guide will explore the most commonly used configuration options to help you get the most out of your new TinyMCE installation.

Once you've added the TinyMCE script to your page, there are three main aspects of configuration you need to consider - selector, plugins and toolbar configuration options.

## Selector Configuration Option

Possibly the most important configuration option for your TinyMCE integration.  The selector configuration option allows you to use CSS selector syntax to determine which elements on the page should be editable through TinyMCE.

## Plugins Configuration Option

The plugins configuration option allows you to enable functionality within the editor.  By default, NO plugins are loaded.  As there are several significant TinyMCE plugins that provide key features it is important that you consider which plugins you wish to include.

Specify which plugins you would like to use by providing this configuration option a comma or space separated string, or an array of strings.

The full list of plugins is available here.

## Toolbar Configuration Option

In most TinyMCE integrations it's desirable to change the toolbar configuration to suit your needs.  By default TinyMCE provides a basic set of editing tools on the toolbar and it is recommended that you adapt the toolbar configuration to match your requirements.

The toolbar configuration option allows you to choose which items appear on the toolbar as well as the order and grouping of toolbar items.

Alternatively, multiple toolbars can be used by specifying multiple toolbar options suffixed with a number ie. "toolbar1", "toolbar2", "toolbar3" etc.  If multiple toolbars are used, the original toolbar option will be ignored.

The full list of items that may be used on toolbars is available here.

# Advanced Configuration

Using the configuration options above you'll be able to instantiate TinyMCE and perform the initial customizations to match your editor requirements.  TinyMCE has many many other configuration options available that enable further customization and extension of the editor.

The full list of configuration options is available here.

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

## Example breakdown

```js
selector: "textarea#elm1",
```

Select only the textarea with ID elm1

```js
theme: "modern",
```
Set the modern theme (default, not needed).

```js
width: 300,
```

Width of editor in pixels, integer value.

```js
height: 300,
```

Height of editor in pixels, integer value.

```js
plugins: [
         "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
         "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
         "save table contextmenu directionality emoticons template paste textcolor"
],
```

A list of plugins that should be included on load.

```js
content_css: "css/content.css",
```

Set a css to use inside the editor window, should be a stripped down version of your website CSS, with things such as styles for headers (H1-H6), table layouts, margins, paddings around elements (images, paragraphs etc).

```js
toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | l   
ink image | print preview media fullpage | forecolor backcolor emoticons",
```

Select what buttons you might want in your toolbar, you can use comma or space as a seperator.

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

Very powerfull styles configuration, for example, "Bold text" simply makes a &lt;b&gt; tag, "Red Text" makes a span with a style coloring it RED.

The "Table row" can only be applied to a table row (tr).

Check out the formats options for more information on how to bend these options to your will.

# Inline Configuration

TinyMCE has two main integration modes - a "traditional" forms based mode and an inline editing mode.  The inline editing mode is useful when creating user experiences where you want the editing view of the page to be merged with the reading view of the page.  This creates a seamless editing experience and true WYSIWYG behaviour.  From a technical perspective, in inline mode, the editor does not replace the selected element with it's own iframe, but instead edits the element's content in place instead.

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

Try it out now!
