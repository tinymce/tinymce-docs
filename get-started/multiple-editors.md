---
layout: default
title: 03. Use multiple editors
description_short: Learn how to insert mutliple editor instances on a single page.
description: Learn how to insert mutliple editor instances on a single page.
keywords: form inline edit
---

Now that you know how to add TinyMCE to your page it's time to cover how to add multiple instances of the editor to a single page. This is a common use case, especially when using TinyMCE inline mode. For example, you may wish to break your page content into sections (e.g. titles, paragraphs, etc.) that the user can edit individually.

## Mutliple editor instances that share the same configuration

In the following example, the page is broken into two separate editable areas, each sharing a single editor configuration. Each individual editable `div` is provided the same `class` of 'myeditablediv'. When the user clicks within the content area TinyMCE will be loaded for just that area.    

```html
<!DOCTYPE html>
<html>
<head>
  <script src="//tinymce.cachefly.net/4.2/tinymce.min.js"></script>
  <script>
    tinymce.init({
      selector: ".myeditablediv",
      inline: true
    });
  </script>
</head>

<body>
  <h1>Multple editors on a page - Section 1 </h1>
  <form method="post">
    <div class="myeditablediv">Click here to edit the first section of content!</div>
  </form>
  
   <h1>Multple editors on a page - Section 2 </h1>
  <form method="post">
      <div class="myeditablediv">Click here to edit the second section of content!</div>
      
  </form>
</body>
</html>
```
> Note that the css selector used in this example is a `class` since 'id' must be unique.  


## Mutliple editor instances, each with a unique configuration

In this next example each editable area will be loaded with an instance of TinyMCE with a unique configuration. This is especially helpful when the differnet content areas have different needs. For example, you may want to provide a very simple configuration for editing titles and a more complete configuration for editing body content. This is accomplished by defining a `tinymce.init' for each desired configuration.  

```html
<!DOCTYPE html>
<html>
<head>
  <script src="//tinymce.cachefly.net/4.2/tinymce.min.js"></script>
  <script>
    tinymce.init({
      selector: "#myeditableh1",
      inline: true,
      menubar: false,
      toolbar: "undo redo"
    });
  </script>
  <script>
    tinymce.init({
      selector: "#myeditablediv",
      inline: true
    });
  </script>
</head>

<body>
    <form method="post">
     <h1 id="myeditableh1">This title can be edited</h1>
    /form>
  
    <form method="post">
      <div id="myeditablediv">
        <p>This section of content can be edited</p>
      </div>
    </form>
</body>
</html>
```


{% assign_page next_page = "/get-started/xxxxxxxxxxxx/index.html" %}
{% include next-step.html next=next_page %}
