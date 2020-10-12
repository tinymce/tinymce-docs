---
layout: default
title: Filtering TinyMCE content
title_nav: Content filtering
description: Learn how to create clean, maintainable and readable content.
---

{{site.productname}} has comprehensive content filtering capabilities that change the way the editor handles the input and output of content. This capability ensures content is clean, maintainable, and readable.

These settings enable developers to control content styling features that are available to users such as font formats, font sizes, and text indentation. This section focuses on 1 of 32 content filtering options available in {{site.productname}}. There are additional configuration options concerning the complex parsing of text. Those options are beyond the scope of the General Configuration Guide. Refer to the [Content filtering options]({{ site.baseurl }}/configure/content-filtering/) section to learn more.

## Roll your style formats

This section is about the [formats]({{ site.baseurl }}/configure/content-formatting/#formats) configuration option. This options lets developers override {{site.productname}} defaults and adds custom **formats** to the editor.

{{site.productname}} is equipped with a formatting engine that allows you to register a set of styles and attributes as a named **format**. For example, the `bold` format is the style that is applied to text when the bold button is clicked.

Check out the [custom formats example]({{ site.baseurl }}/demo/format-custom/) for a demonstration of this option.

### Style merging

Similar elements and styles are merged by default to reduce the output HTML size. For example, instead of assigning one `span` element for font size and another `span` element for font face, {{site.productname}} merges the two styles into a sing `span` element.

### Built-in formats

{{site.productname}} contains built-in formats that can be overridden. More information about these default controls is in the [Basic setup](../basic-setup) part of this guide.

* alignleft
* aligncenter
* alignright
* alignjustify
* bold
* italic
* underline
* strikethrough
* forecolor
* hilitecolor
* fontname
* fontsize
* blockquote
* removeformat
* p
* h1, h2, h3, h4, h5, h6
* div
* address
* pre
* div
* code
* dt, dd
* samp

Some built-in formats `fontsize`, `fontname`, `forecolor`, `hilitecolor` use a variable in their definition named `%value`. This gets replaced with the user selected item such as a `color` value. Check the variable substitution section below for details.

### Format parameters

The table of format parameters below explores some more advanced topics.

| Name       | Summary          |
|------------|------------------|
| inline     | Name of the inline element to produce, for example, `span`. The current text selection is wrapped in this inline element.
| block      | Name of the block element to produce for example `h1`. Existing block elements within the selection get replaced with the new block element. |
| selector   | CSS 3 selector pattern to find elements within the selection. The selector can be used to apply classes to specific elements or complex things like odd rows in a table. |
| classes    | Space-separated list of classes to apply the selected elements or the new inline/block element. |
| styles     | Name/value object with CSS style items to apply such as color and other attributes. |
| attributes | Name/value object with attributes to apply to the selected elements or the new inline/block element. |
| exact      | Disables the [Style merging]({{ site.baseurl }}/configure/editor-appearance/#style_formats_merge) feature when used. `exact` is needed for some CSS inheritance issues such as text-decoration for underline/strikethrough. |
| wrapper    | State that tells that the current format is a container format for block elements. For example a `div wrapper` or `blockquote`. |
| remove     | Specifies what the remove behavior of the element should be when the format is removed. |
| block_expand | controls if the selection should expand upwards to the closest matching block element.|
| deep       | Enables control for removing the child elements of the matching format. |

### Example of usage of the formats option

This example overrides some of the built-in formats and tells {{site.productname}} to apply classes instead of inline styles. It includes a custom format that produces `h1` elements with a title attribute and a `red` `css` style.

```js
// Output elements in HTML style
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  formats: {
    alignleft: {selector : 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes : 'left'},
    aligncenter: {selector : 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes : 'center'},
    alignright: {selector : 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes : 'right'},
    alignjustify: {selector : 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes : 'full'},
    bold: {inline : 'span', 'classes' : 'bold'},
    italic: {inline : 'span', 'classes' : 'italic'},
    underline: {inline : 'span', 'classes' : 'underline', exact : true},
    strikethrough: {inline : 'del'},
    forecolor: {inline : 'span', classes : 'forecolor', styles : {color : '%value'}},
    hilitecolor: {inline : 'span', classes : 'hilitecolor', styles : {backgroundColor : '%value'}},
    custom_format: {block : 'h1', attributes : {title : 'Header'}, styles : {color : 'red'}}
  }
});
```

{% assign_page next_page = "/general-configuration-guide/localize-your-language/index.html" %}
{% include next-step.html next=next_page %}
