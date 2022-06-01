---
layout: default
title: TinyMCE 5.10.5
title_nav: TinyMCE 5.10.5
description: Release notes for TinyMCE 5.10.5
keywords: releasenotes bugfixes
---

## Overview

{{site.productname}} 5.10.5 was released for {{site.enterpriseversion}} and {{site.cloudname}} on Wednesday, June 1<sup>st</sup>, 2022. It includes {{site.productname}} 5.10.4. These release notes provide an overview of the changes for {{site.productname}} 5.10.4, including:

- [General bug fixes](#generalbugfixes)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

{{site.releasenotes_for_stable}}

## General bug fixes

{{site.productname}} 5.10.4 provides fixes for the following bugs:

### base64 encoded images were corrupted and not displayed when added immediately following the string `data:`

When the string `data:` immediately preceded the insertion point, or was only separated from the insertion point by a Return character (ie, was on the line above the insertion point), adding an image in to a {{site.productname}} 5.x document caused the added image data to be parsed incorrectly.

Rather than displaying the encoded image, the mis-parsing caused the image to corrupt and present as a raw string of base64 text within html tags, which also displayed as text.

With this update, the `extractBase64DataUris` function, which was responsible for the mis-parsing, now engages in more comprehensive sanity checking. These further sanity checks prevent the function from mis-parsing a user-entered `data:` string.

Consequently, adding images to a {{site.productname}} 5.x document now works in this circumstance: the image is not corrupted and displays at the insertion point as expected.


### `format_empty_lines` did not work as documented

Previously, when `format_empty_lines` was set to `true`, lines that included no text (ie, a line consisting of just a Return) did not preserve inline formatting when saved.

So, for example, a line

```html
<p> 
<em> 
<strong> 
<span style="font-family: arial, helvetica, sans-serif;" ><br /></span> 
</strong> 
</em> 
</p> 
```

when saved, became

```html
<p> 
&nbsp; 
</p> 
```

That is, the line was preserved, but the formatting was not.

With this update, `format_empty_lines: true` behaves as it should (and as advertised), and formatting added to an otherwise empty line is preserved when saved.

NOTE: By default `format_empty_lines` is set to `false`.


### Some inline elements specified by the {{site.productname}} schema were not removed by default when empty

By default, the {{site.productname}} schema removes empty inline `html` elements.

Previously, however, some inline `html` elements — including `s`, `u`, `var`, `cite`, `dfn`, `code`, `mark`, `q`, `sup`, `sub`, and `samp` — were not removed when they were present but empty.

With this update, inline `html` elements such as those noted above will have the `removeEmpty` schema flag set, as expected.


### The default {{site.productname}} schema did not include the <s> element

Previously, the default {{site.productname}} schema did not include the `<s>` element in the text inline elements section of the schema. The element was included in the full element list, however.

Consequently, although `strike-through` elements rendered as expected, anything that relied on the `schema.getTextInlineElements()` API may not have handled the `<s>` element correctly.

This update corrects the omission in the {{site.productname}} schema and `<s>` element is now correctly returned by the `schema.getTextInlineElements()` API.```


{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
