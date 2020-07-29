---
layout: default
title: Boilerplate content CSS
title_nav: Boilerplate content CSS
description_short: Learn how to set up CSS for your site to integrate TinyMCE.
description: Learn how to set up CSS for your site to integrate TinyMCE.
keywords: css content_css
---

Some elements in {{site.productname}} require additional CSS to be added to the page that displays the content produced by the editor. The following CSS styles can be used to style these elements. Add this CSS file to the editor using the [content_css]({{ site.baseurl }}/configure/content-appearance/#content_css) option and add the styles the page where the saved content is presented.

```css
/*
 Removes margins on paragraphs,
 might be useful for mail clients
*/
/*p { margin: 0 }*/

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

{% include css-codeblock/toc-plugin-css.md %}

/*
* Premium Plugins CSS
*/

/* The Checklist Plugin */

{% include css-codeblock/checklist-plugin-css.md %}

/* The Page Embed plugin */

{% include css-codeblock/pageembed-plugin-css.md %}

/* The Media Embed plugin */

{% include css-codeblock/mediaembed-plugin-css.md %}
```
