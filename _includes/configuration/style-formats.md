
## style_formats

This option allows you to define custom items for the `styleselect` dropdown toolbar button and the `formats` menu item.

There are four types of items the array can contain:

* **Style:** The item must have a `title` and the necessary fields to [specify a new format]({{ site.baseurl }}/configure/content-formatting/#formattype). An optional `name` can be provided for the style, which will be prefixed with `custom-` to ensure that it does not override the default editor formats. If given a unique `name`, the style can be used with the formatting API. The item will be rendered in the UI as a clickable item that applies the given format.
* **Style reference:** The item must have a `title` and a `format` which refers to a pre-registered editor [format]({{ site.baseurl }}/configure/content-formatting/#formats). The item will be rendered in the UI as a clickable item that applies the given format.
* **Nested menu:** The item must have a `title` and an `items` array that contains other items that will be rendered as a sub-menu.
* **Group heading:** The item must only have a `title` and will be rendered as a non-clickable heading within the menu. This is useful for grouping items without using nested menus.

To merge custom styles with the default `styles_format` values, set [`style_formats_merge`]({{ site.baseurl }}/configure/editor-appearance/#style_formats_merge) to `true`.

**Type:** `Array`

**Default:**

The following is the default value for `style_formats` where it is using references to existing formats:

```js
style_formats: [
  { title: 'Headings', items: [
    { title: 'Heading 1', format: 'h1' },
    { title: 'Heading 2', format: 'h2' },
    { title: 'Heading 3', format: 'h3' },
    { title: 'Heading 4', format: 'h4' },
    { title: 'Heading 5', format: 'h5' },
    { title: 'Heading 6', format: 'h6' }
  ]},
  { title: 'Inline', items: [
    { title: 'Bold', format: 'bold' },
    { title: 'Italic', format: 'italic' },
    { title: 'Underline', format: 'underline' },
    { title: 'Strikethrough', format: 'strikethrough' },
    { title: 'Superscript', format: 'superscript' },
    { title: 'Subscript', format: 'subscript' },
    { title: 'Code', format: 'code' }
  ]},
  { title: 'Blocks', items: [
    { title: 'Paragraph', format: 'p' },
    { title: 'Blockquote', format: 'blockquote' },
    { title: 'Div', format: 'div' },
    { title: 'Pre', format: 'pre' }
  ]},
  { title: 'Align', items: [
    { title: 'Left', format: 'alignleft' },
    { title: 'Center', format: 'aligncenter' },
    { title: 'Right', format: 'alignright' },
    { title: 'Justify', format: 'alignjustify' }
  ]}
]
```

## Example: Using `style_formats`

This example shows how to append 3 new style formats.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  style_formats: [
    {title: 'Bold text', inline: 'b'},
    {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
    {name: 'my-inline', title: 'My inline', inline: 'span', classes: [ 'my-inline' ]}
  ],
  // The following option is used to append style formats rather than overwrite the default style formats.
  style_formats_merge: true
});
```

## Interactive examples

This example shows you how to:

- Override the built-in [formats]({{ site.baseurl }}/configure/content-formatting/#formats).
- Add some custom styles to the `styleselect` dropdown toolbar button and the `formats` menu item using the [style_formats]({{ site.baseurl }}/configure/editor-appearance/#style_formats) configuration option.

{% include live-demo.html id="format-custom" tab="js" %}

This example shows you how to edit HTML5 content such as sections and articles.

{% include live-demo.html id="format-html5" tab="js" %}
