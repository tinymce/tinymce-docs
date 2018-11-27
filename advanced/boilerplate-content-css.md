---
layout: default
title: Boilerplate content CSS
title_nav: Boilerplate content CSS
description_short: Learn how to set up CSS for your site to integrate TinyMCE.
description: Learn how to set up CSS for your site to integrate TinyMCE.
keywords: css content_css
---

There are advanced features in TinyMCE that require some CSS to be added to the page that displays the content produced by the editor. In general, to get as clean an output as possible from a rich text editor as well as to use some advanced features like captioned images, use CSS rather than inline styles to render correctly.

This Boilerplate CSS can be used to style these advanced elements. This CSS file can be used within the editor using the [content_css]({{ site.baseurl }}/configure/content-appearance/#content_css) option and also on your page where the saved content is presented.

```css
/* Image captions using the HTML5 figure element */
figure.align-left {
    float: left;
}

figure.align-right {
    float: right;
}

figure.image {
    display: inline-block;
    border: 1px solid gray;
    margin: 0 2px 0 1px;
    background: #f5f2f0;
}

figure.image img {
    margin: 8px 8px 0 8px;
}

figure.image figcaption {
    margin: 6px 8px 6px 8px;
    text-align: center;
}

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

/* Basic styles for Table of Contents plugin (toc) */
.mce-toc {
    border: 1px solid gray;
}

.mce-toc h2 {
    margin: 4px;
}

.mce-toc li {
    list-style-type: none;
}

/*
 Removes margins on paragraphs,
 might be useful for mail clients
*/
/*p { margin: 0 }*/


/* Override CSS styles when within the editor only */
/* .mce-content-body figure {...} */

/* Override styles for the inline boundaries used within the editor */
/* .mce-content-body *[data-mce-selected="inline-boundary"] {...} */


```
