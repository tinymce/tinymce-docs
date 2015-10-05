---
layout: default
title: Quick Start
---

# Step 1

## CDN
// todo

## NPM
// todo

## jQuery
// todo

## SDK

// http://www.tinymce.com/wiki.php/Installation

Getting started with TinyMCE is really easy. In this guide you will initialize TinyMCE on a `<textarea>` as part of an HTML `<form>`. When the `<form>` is submitted, the contents of the TinyMCE editor will be submitted as part of the `<form>` POST.  

To complete this guide, you will need access to a web server. This guide assumes a web server is running on port 80 of localhost.

### Step 1: Download a copy of TinyMCE and put it on a web server.

Download a copy of the TinyMCE package from TinyMCE Downloads.
Unzip the package and move the "tinymce/js/tinymce" directory into a web accessible location on your web server (for example, localhost).

### Step 2: Add TinyMCE to a page.

With TinyMCE accessible via your web server (http://localhost/tinymce/), you can now include the TinyMCE script anywhere you would like to use the TinyMCE editor.

To add the script, add the following inside your page's <head> tag.

```
<script type="text/javascript" src="<your installation path>/tinymce/tinymce.min.js"></script>
```

### Step 3: Initialize TinyMCE as Part of a Web Form

With the script included, you may then initialize TinyMCE on any element (or elements) in your webpage.

TinyMCE lets you identify elements to replace via a CSS3 selector.  To add TinyMCE to a page you pass an object that contains a selector to tinymce.init().

In this example, you will replace <textarea id="mytextarea"> with a TinyMCE editor by passing the selector '#mytextarea' to tinymce.init().

```
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="<your installation path>/tinymce/tinymce.min.js"></script>
    <script type="text/javascript">
        tinymce.init({
            selector: "#mytextarea"
        });
    </script>
</head>
<body>
    <h1>TinyMCE Getting Started Guide</h1>
    <form method="post">
        <textarea id="mytextarea"></textarea>
    </form>
</body>
</html>
```

Try it now!

You’ve added TinyMCE to the page - that's all there is to it!

Next, we'll look at retrieving content as part of a <form> POST.

### Step 4: Saving Content with a <form> POST

When the form is submitted, the TinyMCE editor mimics the behaviour of a normal HTML <textarea> during a form POST.  No additional configuration is required.


## Bower
// todo

## Custom Build
// todo

## Download
// todo

# Step 2 (Installation)

## What's next?

 * examples
 * ??
 * ??
