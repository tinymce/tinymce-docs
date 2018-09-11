## selector

This option allows you to specify a CSS selector for the areas that TinyMCE should make editable.

When using this option in TinyMCE's regular editing mode, the element will be replaced with an `iframe` that TinyMCE will perform all operations within.

### Replace all textarea elements on the page

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: 'textarea'  // change this value according to your HTML
});
```

### Replace a textarea element with id 'editable'

**Type:** `String`

##### Example

```js
tinymce.init({
    selector: 'textarea#editable'
});
```

When using this option in TinyMCE's inline editing mode, the selector can be used on any block element and will edit the content in place instead of replacing the element with an `iframe`.

### Inline editing mode on a div element with id 'editable'

**Type:** `String`

##### Example

```js
tinymce.init({
    selector: 'div#editable',
    inline: true
});
```

For more information on the differences between regular and inline editing modes please see this page [here]({{ site.baseurl }}/general-configuration-guide/use-tinymce-inline/).
