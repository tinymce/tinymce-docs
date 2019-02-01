---
layout: default
title: Quick start
title_nav: Quick start
description_short: Setup TinyMCE 5.0 in less than 5 minutes.
description: Get an instance of TinyMCE up and running in less than 5 minutes.
keywords: tinymce script textarea
---

TinyMCE 5.0 is a powerful and flexible rich text editor that can be embedded in the user's web application. 

The TinyMCE 5.0 is perfect for developers who want to see how the new version of TinyMCE integrates into their ecosystem.

## Step 1: Include the TinyMCE script

Build a TinyMCE 5.0 instance with the [TinyMCE 5.0 SDK](https://github.com/tinymce/tinymce/tree/master).

Include this line of code in the `<head>` of the HTML page and link to the tinymce.min.js source file:

```html
<script src="https://cloud.tinymce.com/5-stable/tinymce.min.js?apiKey=your_API_key"></script>
```

> Tip: A complete HTML snippet is provided in Step 2.


## Step 2: Initialize TinyMCE as part of a web form

With the script included, initialize TinyMCE 5.0 on any element (or elements) in the web page.

Since TinyMCE enables identifying replaceable elements via a CSS selector, the only requirement is to pass an object that contains a `selector` to `tinymce.init()`.

In this example, replace `<textarea id='mytextarea'>` with a TinyMCE 5.0 editor instance by passing the selector `'#mytextarea'` to `tinymce.init()`.

```html
<!DOCTYPE html>
<html>
<head>
  <script src='http://cloud.tinymce.com/5-testing/tinymce.min.js'></script>
  <script>
  tinymce.init({
    selector: '#mytextarea'
  });
  </script>
</head>

<body>
<h1>TinyMCE Quick Start Guide</h1>
  <form method="post">
    <textarea id="mytextarea">Hello, World!</textarea>
  </form>
</body>
</html>
```


## Step 3: Saving content with a form POST

When the `<form>` is submitted, the TinyMCE 5.0 editor mimics the behavior of a normal HTML `<textarea>` during the `POST`. In the user's form handler, the content submitted can be processed in the same way as the content created from a regular `<textarea>`.

That is all there is to it!

To download TinyMCE 5.0 and install it locally, the [More installation choices]({{  site.baseurl }}/general-configuration-guide/advanced-install/#packagemanagerinstalloptions) page in the [Introduction and getting started]({{ site.baseurl }}/general-configuration-guide) guide has instructions. This document also provides information about TinyMCE features such as advanced installation options, working with plugins, learning about content filtering, and spell checking.
