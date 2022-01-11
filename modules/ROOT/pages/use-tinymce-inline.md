# Setup inline editing mode
:title_nav: Inline editing mode
:description_short: Learn about forms-based editing v. inline editing.
:description: Understand the difference between traditional forms-based editing and advanced inline editing.
:keywords: form inline edit stylesheet

{{site.productname}} has three main integration modes: a _classic_ full editor mode, an _inline_ editing mode, and a distraction-free mode.

{% include /misc/admon_not_on_mobile.md %}

The inline editing mode is used for merging the editing and reading views of the page for a seamless editing experience and true WYSIWYG behavior.

Inline editing mode does not replace the selected element with an iframe, but instead edits the element's content in-place. Inline editors are designed:

- To be "hidden" until the editable content is selected,
- To use the CSS stylesheet of the page where it initializes, and
- To have minimal UI around the content area to minimize the area occupied by the editor.

## Enabling inline editing mode

Inline mode only works on content within a block element (such as: `div` or `h1`).
To enable inline mode, set the `inline` option to `true`. For example:

```html
<!DOCTYPE html>
<html>
<head>
  <script src="{{ site.cdnurl }}" referrerpolicy="origin"></script>
  <script type="text/javascript">
  tinymce.init({
    selector: '#myeditablediv',
    inline: true
  });
  </script>
</head>

<body>
  <h1>{{site.productname}} Inline Editing Mode Guide</h1>
  <form method="post">
    <div id="myeditablediv">Click here to edit!</div>
  </form>
</body>
</html>
```

The following demonstration is using four {{site.productname}} editors in inline mode, two for the headings, and two for the body text.

{% include live-demo.html id="inline" %}

For information on inline mode and the `inline` setting, see: [User interface options - inline]({{site.baseurl}}/interface/editor-mode/inline-editor-options/#inline).

