## selector

This option allows you to specify a CSS selector for the areas that TinyMCE should make editable.

When using this option in TinyMCE's regular editing mode, the element will be replaced with an `iframe` that TinyMCE will perform all operations within.

An example of this setting that will replace all `textarea` elements on the page is as follows:

```js
tinymce.init({
    ...
    selector: "textarea",
    ...
});
```

An example of this setting that will replace a `textarea` element with id "editable" on the page is as follows:

```js
tinymce.init({
    ...
    selector: "textarea#editable",
    ...
});
```

When using this option in TinyMCE's inline editing mode, the selector can be used on any block element and will edit the content in place instead of replacing the element with an `iframe`.

An example of this setting being used in inline editing mode on a div element with id "editable" is as follows:

```js
tinymce.init({
    ...
    selector: "div#editable",
    inline: true,
    ...
});
```

For more information on the differences between regular and inline editing modes please see this page [here](/getting-started/using-tinymce-inline/).
