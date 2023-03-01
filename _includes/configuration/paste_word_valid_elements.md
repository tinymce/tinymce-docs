### `paste_word_valid_elements`

{% include DEPRECATED/generic-5_10.md %}

This option enables you to configure the `valid_elements` specific to MS Office. Word produces a lot of junk HTML, so when users paste things from Word we do extra restrictive filtering on it to remove as much of this as possible. This option enables you to specify which elements and attributes you want to include when Word contents are intercepted.

>**Note:** To access this feature, you need to set the value of [paste_enable_default_filters]({{site.baseurl}}/plugins/opensource/paste/#paste_enable_default_filters) to `"false"` in your configuration.

**Type:** `String`

#### Example: Using `paste_word_valid_elements`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  menubar: 'edit',
  toolbar: 'paste',
  paste_word_valid_elements: 'b,strong,i,em,h1,h2'
});
```

