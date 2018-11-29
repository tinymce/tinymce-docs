---
layout: default
title: Use multiple TinyMCE instances in a single page
title_nav: Multiple editors in a page
keywords: 
---

Now that you know how to add TinyMCE to your page, and how to use the `inline` mode, it's time to learn how to add multiple editor instances to a single page.

This is, in fact, a common use case, especially when using TinyMCE's `inline` mode. For example, you may wish to break your content into sections (e.g., titles, paragraphs) that the user can edit individually.

## Multiple editor instances sharing the same configuration

In the following example, the page is broken into two separate editable areas, each sharing a single editor configuration. Each editable `div` is provided the same `class` of 'myeditablediv'. When the user clicks within the content area, TinyMCE is loaded for just that area.

```html
<!DOCTYPE html>
<html>
<head>
  <script src="{{ site.cdnurl }}"></script>
  <script type="text/javascript">
  tinymce.init({
    selector: '.myeditablediv',
    inline: true
  });
  </script>
</head>

<body>
  <h1>Multple editors on a page: Section 1</h1>
  <form method="post">
    <div class="myeditablediv">Click here to edit the first section of content!</div>
  </form>

  <h1>Multple editors on a page: Section 2</h1>
  <form method="post">
      <div class="myeditablediv">Click here to edit the second section of content!</div>
  </form>
</body>
</html>
```
> Pro tip: note that the reason the css selector in this example is a `class` is because the `id` must be unique.

## Multiple editor instances, each with a unique configuration

In this next example, each editable area is loaded with an instance of TinyMCE with a unique configuration. This is especially helpful when different content areas have different needs. For example, you may want to provide a simple configuration for editing titles and a complete configuration for editing body content. This is accomplished by defining a `tinymce.init` object/method for each desired configuration.  

```html
<!DOCTYPE html>
<html>
<head>
  <script src="{{ site.cdnurl }}"></script>
  <script type="text/javascript">
  tinymce.init({
    selector: '#myeditable-h1',
    inline: true,
    menubar: false,
    toolbar: 'undo redo'
  });
  </script>
  <script>
  tinymce.init({
    selector: '#myeditable-div',
    inline: true
  });
  </script>
</head>

<body>
  <form method="post">
    <h1 id="myeditable-h1">This Title Can Be Edited If You Click Here</h1>
  </form>

  <form method="post">
    <div id="myeditable-div">
      <p>This section of content can be edited. Click here to see how.</p>
    </div>
  </form>
</body>
</html>
```

{% assign_page next_page = "/general-configuration-guide/advanced-install/index.html" %}
{% include next-step.html next=next_page %}
