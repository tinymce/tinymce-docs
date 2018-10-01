---
layout: default
title: Quick Start
description_short: Setup TinyMCE in less than 5 minutes.
description: Get an instance of TinyMCE up and running in less than 5 minutes.
keywords: tinymce script textarea
---

TinyMCE is a powerful and flexible rich text editor that you can embed in your web application. 

The Developer Preview is perfect for developers who want to see how Tiny 5 integrates into their ecosystem. 

## Step 1: Include the TinyMCE script

Download and unzip the pre-compiled [Developer Preview Zip](https://devpreview.tiny.cloud/download/tinymce.zip).

Alternatively, you can build your own with the [Developer Preview SDK](https://github.com/tinymce/tinymce/tree/5.x).

Include this line of code in the `<head>` of your HTML page and link to the tinymce.min.js source file:

```html
<script src='https://devpreview.tiny.cloud/demo/tinymce.min.js'></script>
```

> Tip: We give you a complete HTML snippet in Step 2.


## Step 2: Initialize TinyMCE as part of a web form

With the script included, initialize TinyMCE on any element (or elements) in your web page.

Since TinyMCE lets you identify replaceable elements via a CSS selector, all you need to do is pass an object that contains a `selector` to `tinymce.init()`.

In this example, let's replace `<textarea id='mytextarea'>` with a TinyMCE editor instance by passing the selector `'#mytextarea'` to `tinymce.init()`.

```html
<!DOCTYPE html>
<html>
<head>
  <script src='https://devpreview.tiny.cloud/demo/tinymce.min.js'></script>
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

When the `<form>` is submitted the TinyMCE editor mimics the behavior of a normal HTML `<textarea>` during the `POST`. In your form handler, you can process the content submitted as if it had come from a regular `<textarea>`.

That is all there is to it!

If you prefer to download TinyMCE and install it locally the [Advanced Install]({{  site.baseurl }}/general-configuration-guide/advanced-install/#packagemanagerinstalloptions) page in the [General Configuration Guide]({{  site.baseurl }}/general-configuration-guide) has instructions. This document also provides information about TinyMCE features such as advanced installation options, working with plugins, learning about content filtering, and spell checking.
