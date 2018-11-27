---
layout: default
title: Setup inline editing mode
title_nav: Inline editing mode
description_short: Learn about forms-based editing v. inline editing.
description: Understand the difference between traditional forms-based editing and advanced inline editing.
keywords: form inline edit stylesheet
---

TinyMCE has three main integration modes: a _classic_ form-based mode, an _inline_ editing mode, and a distraction-free _inlite_ mode.

The inline editing mode is useful when creating user experiences where you want the editing view of the page to be merged with the reading view of the page. This creates a seamless editing experience and true WYSIWYG behavior.

When in inline editing mode the editor does not replace the selected element with its own iframe, but instead edits the element's content in place instead. For a sample view of this mode, visit the [Inline Editor]({{ site.baseurl }}/demo/inline) example page.


## Forms-based editing vs. inline editing

Most common TinyMCE integrations use the editor in its classic form-based mode. In this integration mode, the editor usage is as a form field that is filled out to provide content. The editor is always visible as part of the form to be edited.

Inline editing mode blends the editable view with the readable view of the page. Elements are replaced inline with an editor once clicked rather than the editor always being visible.

Most significantly, when using inline editing TinyMCE is not isolated from the page by being encapsulated within an iframe. This has the advantage of ensuring that the content within the editor inherits the surrounding page's styles when presenting the content.

Since the editor is not sandboxed in an iframe in inline editing mode, CSS styles for the editor's content are inherited from the page that the editor is on. This feature allows you to edit content exactly as it appears within the context of the page, providing a true WYSIWYG editing experience.


## Inline editing and complex stylesheets

When using TinyMCE in the inline mode it inherits the CSS stylesheet from the page it is embedded in.

While this is advantageous in providing a true WYSIWYG view of the content, it can result in user confusion when working with complex CSS. This is because your site's CSS is now being applied directly to the editor and may result in behavior that the user doesn't expect.

If you are going to use the editor in inline mode care should be taken when using styling that depends on structures within the editor. For example, if you had a class like this:

```css
h1 strong {
  color: orange;
}
```

This would make the phrase "bold text" bold and orange in the content:

```html
<h1>This text is <strong>bold text</strong> in a heading</h1>
```

If the user changed the heading to a paragraph or a different heading level, then the text color of the bold text would, unexpectedly, change for the user. While this is entirely correct behavior according to the stylesheet, it is entirely unexpected from the user's perspective.


## Enabling inline editing mode

Enabling inline editing mode is simple. Setting the `inline` configuration property to `true` is all that's needed, in combination with a normal `selector`. It is important to keep in mind that, unlike the classic form-based mode, inline only works with content that is within a block element (e.g. `div`, `h1`). An example of using inline editing mode with a div is as follows:

```html
<!DOCTYPE html>
<html>
<head>
  <script src="{{ site.cdnurl }}"></script>
  <script type="text/javascript">
  tinymce.init({
    selector: '#myeditablediv',
    inline: true
  });
  </script>
</head>

<body>
  <h1>TinyMCE Inline Editing Mode Guide</h1>
  <form method="post">
    <div id="myeditablediv">Click here to edit!</div>
  </form>
</body>
</html>
```

{% assign_page next_page = "/general-configuration-guide/use-tinymce-distraction-free/index.html" %}
{% include next-step.html next=next_page %}
