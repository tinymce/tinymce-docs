---
layout: default
title: 01. Your First Steps
description_short: Setup TinyMCE in less than 5 minutes (on your desktop).
description: Get a local instance of TinyMCE up and running in less than 5 minutes.
keywords: tinymce script textarea
---

Welcome to the tinymce documentaiton. In this first section we will be installing tinmce and providing some background on what it does.

We will start by getting a local editor up and running using our content delivery network(CDN). This should take about 5 minutes and is a good stating point for developers who are new to tinymce.

To get started download TinyMCE and install it locally the [Advanced Install](../advanced-install/#sdkinstall) by following the instructions in the "Get Started" section.

Once you have completed this we will get started using the CDN. The next four steps will take you through setting up your local editor instance.

## Step 1: Include the TinyMCE script

Include this line of code in the `<head>` of your HTML page:

```html
<script src='{{ site.cdnurl }}'></script>
```



## Step 2: Initialize TinyMCE as part of a web form

With the script included, initialize TinyMCE on any element (or elements) in your web page.

Since TinyMCE lets you identify replaceable elements via a CSS selector, all you need do is pass an object that contains a `selector` to `tinymce.init()`.

In this example, let's replace `<textarea id='mytextarea'>` with a TinyMCE editor instance by passing the selector `'#mytextarea'` to `tinymce.init()`.

```html
<!DOCTYPE html>
<html>
<head>
  <script src='{{ site.cdnurl }}'></script>
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

And that's all there is to it! Read on as we have two more notes for you.

> Note: if you're testing this locally, you will need to prepend `https://` to urls in the `script` tag. For example, `<script src='https:{{ site.cdnurl }}'></script>`.

## Step 3: Saving content with a form POST

When the `<form>` section is submitted the TinyMCE editor mimics the behavior of a normal HTML `<textarea>` during the `post` operation. In your form handler you can process the content submitted as if it had come from a regular `<textarea>`.

{% assign_page next_page = "/get-started/basic-setup/index.html" %}
{% include next-step.html next=next_page %}
