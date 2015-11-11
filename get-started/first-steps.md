---
layout: default
title: 01. Your First Steps
description_short: Setup TinyMCE in less than 5 minutes (on your desktop).
description: Get a local instance of TinyMCE up and running in less than 5 minutes.
keywords: tinymce script textarea
---

From getting a local editor instance up and running in less than 5 minutes (via our content delivery network) to advanced installation options, working with plugins and learning about content filtering and spell checking, this is the place to start for developers new to TinyMCE.

So let's get to it. In the next 4 steps and in less than 5 minutes you'll have a basic, local editor instance up and running.

## Step 1: Include the TinyMCE script

Include this line of code in the `<head>` of your HTML page:

```html
<script src="//tinymce.cachefly.net/4.2/tinymce.min.js"></script>
```

> Tip: we give you a complete html snippet in Step 2.


## Step 2: Initialize TinyMCE as part of a web form

With the script included, initialize TinyMCE on any element (or elements) in your web page.

Since TinyMCE lets you identify replaceable elements via a CSS selector, all you need do is pass an object that contains a `selector` to `tinymce.init()`.

In this example, let's replace `<textarea id="mytextarea">` with a TinyMCE editor instance by passing the selector `'#mytextarea'` to `tinymce.init()`.

```html
<!DOCTYPE html>
<html>
<head>
  <script src="//tinymce.cachefly.net/4.2/tinymce.min.js"></script>
  <script>
    tinymce.init({
      selector: "#mytextarea"
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

And that's all there is to it! Read on as we have two more notes for you.

> Note: if you're testing this locally, you will need to prepend `https://` to urls in the `script` tag. For example, `<script src="https://tinymce.cachefly.net/4.2/tinymce.min.js"></script>`.

## Step 3: Saving content with a form POST

When the `<form>` is submitted the TinyMCE editor mimics the behavior of a normal HTML `<textarea>` during the `post`. In your form handler you can process the content submitted as if it had come from a regular `<textarea>`.

{% assign_page next_page = "/get-started/basic-setup/index.html" %}
{% include next-step.html next=next_page %}
