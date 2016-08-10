---
layout: default
title: 12. System Requirements
description: Official TinyMCE browser support.
keywords: browser compatibility explorer ie safari firefox chrome edge
---

## Browser Compatibility

TinyMCE uses advanced JavaScript and tries to be as smart as possible when it comes to different browsers. The main focus is on Chrome, Firefox, Internet Explorer and Safari.

If a browser is not listed on this page it doesn't mean TinyMCE won't work, it does mean however that TinyMCE may not have been fully tested on the unlisted browser. To determine compatibility with an unlisted browser, try out the examples on our website.

Please use the [issues tracker on GitHub](https://github.com/tinymce/tinymce/issues) to submit bugs on the listed browsers only.

|Browser | Windows | Mac | GNU/Linux |
|:------:|:-------:|:---:|:---------:|
|Chrome  | OK      | OK  | OK |
|Firefox | OK      | OK  | OK |
|Edge    | OK      | N/A | N/A |
|IE 11   | OK      | N/A | N/A |
|IE 10   | OK      | N/A | N/A |
|IE 9    | OK *    | N/A | N/A |
|IE 8    | OK *    | N/A | N/A |
|Safari  | N/A     | OK  | N/A |

### Features that require a modern browser

Some features require modern browser API:s to function here is a list of the features that require IE 10+.

* [Image Upload Feature]({{ site.baseurl }}/configure/file-image-upload/)
* [Image Tools Plugin]({{ site.baseurl }}/plugins/imagetools/)
* [InLite Theme]({{ site.baseurl }}/themes/inlite/)
* [Non Editable Plugin]({{ site.baseurl }}/plugins/noneditable/) as of TinyMCE 4.3

{% assign_page next_page = "/get-started/get-support/index.html" %}
{% include next-step.html next=next_page %}
