### quickbars_selection_toolbar

The **quickbars_selection_toolbar** option configures the Quick Selection toolbar provided by the [quickbars plugin]({{site.baseurl}}/plugins/opensource/quickbars). To change the buttons on the Quick Selection toolbar, provide a space-separated string of [toolbar button names]({{ site.baseurl }}/advanced/available-toolbar-buttons/). The Quick Selection toolbar is intended for buttons related to formatting content, but any [{{site.productname}} toolbar buttons]({{ site.baseurl }}/advanced/available-toolbar-buttons/) or [custom toolbar buttons]({{ site.baseurl }}/ui-components/toolbarbuttons) are allowed.

To disable the Quick Selection toolbar, set `quickbars_selection_toolbar` to `false`.

Type
: `String`

Defaults
: `bold italic | quicklink h2 h3 blockquote`

#### Example: Customizing the Quick Selection toolbar

```js
tinymce.init({
  selector: 'div.tinymce',
  plugins: 'quickbars',
  quickbars_selection_toolbar: 'bold italic | formatselect | quicklink blockquote'
});
```

#### Example: Disabling the Quick Selection toolbar

To disable the Quick Selection toolbar, set `quickbars_selection_toolbar` to `false`.

```js
tinymce.init({
  selector: 'div.tinymce',
  plugins: 'quickbars',
  quickbars_selection_toolbar: false
});
```
