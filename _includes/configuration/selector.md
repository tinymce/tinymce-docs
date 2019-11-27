## selector

This option allows you to specify a CSS selector for the areas that {{site.productname}} should make editable.

When using this option in {{site.productname}}'s regular editing mode, the element will be replaced with an `iframe` that {{site.productname}} will perform all operations within.

**Type:** `String`

##### Example: Replace all textarea elements on the page

```js
tinymce.init({
  selector: 'textarea'  // change this value according to your HTML
});
```

##### Example: Replace a textarea element with id 'editable'

```js
tinymce.init({
    selector: 'textarea#editable'
});
```

When using this option in {{site.productname}}'s inline editing mode, the selector can be used on any block element and will edit the content in place instead of replacing the element with an `iframe`.

##### Example: Inline editing mode on a div element with id 'editable'

```js
tinymce.init({
    selector: 'div#editable',
    inline: true
});
```

For more information on the differences between regular and inline editing modes please see this page [here]({{ site.baseurl }}/general-configuration-guide/use-tinymce-inline/).
