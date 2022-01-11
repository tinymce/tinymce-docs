# CSS for rendering TinyMCE content outside the editor
:title_nav: CSS for rendering content
:description: CSS for rendering TinyMCE content outside the editor, such as on a webpage.
:keywords: css content_css

The following content styles (CSS) are added to the editor when the relevent plugins are enabled. These are in addition to the styles added by the `default` content CSS. For details on the default CSS, see: [the `content_css` option]({{site.baseurl}}/content/add-css-options/#content_css).

These styles can be used to replicate the styles shown in the editor when the content is rendered outside {{site.productname}}, or can be used as a template for creating custom styles for these elements.

```css
/*
* For rendering images inserted using the image plugin.
* Includes image captions using the HTML5 figure element.
*/

{% include css-codeblock/image-plugin-css.md %}

/*
 Alignment using classes rather than inline styles
 check out the "formats" option
*/

img.align-left {
  float: left;
}

img.align-right {
  float: right;
}

/*
* Premium Plugins CSS
*/

/* The Table of Contents Plugin */

{% include css-codeblock/toc-plugin-css.md %}

/* The Checklist Plugin */

{% include css-codeblock/checklist-plugin-css.md %}

/* The Page Embed plugin */

{% include css-codeblock/pageembed-plugin-css.md %}

/* The Media Embed plugin */

{% include css-codeblock/mediaembed-plugin-css.md %}
```
