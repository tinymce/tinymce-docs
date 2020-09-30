### quickbars_insert_toolbar

The **quickbars_insert_toolbar** option configures the Quick Insert toolbar provided by the [quickbars plugin]({{ site.baseurl }}/plugins/quickbars). To change the buttons on the Quick Insert toolbar, provide a space-separated string of [toolbar button names]({{ site.baseurl }}/advanced/available-toolbar-buttons/). The Quick Insert toolbar is intended for buttons related to inserting content, but any [{{site.productname}} toolbar buttons]({{ site.baseurl }}/advanced/available-toolbar-buttons/) or [custom toolbar buttons]({{ site.baseurl }}/ui-components/toolbarbuttons) are allowed.

To disable the Quick Insert toolbar, set `quickbars_insert_toolbar` to `false`.

**Type:** `String`

**Defaults:** `quickimage quicktable`

#### Example: Customizing the Quick Insert toolbar

```js
tinymce.init({
  selector: 'div.tinymce',
  plugins: 'quickbars hr pagebreak',
  inline: true,
  quickbars_insert_toolbar: 'quickimage quicktable | hr pagebreak'
});
```


#### Example: Disabling the Quick Insert toolbar

To disable the Quick Insert toolbar, set `quickbars_insert_toolbar` to `false`.

```js
tinymce.init({
  selector: 'div.tinymce',
  plugins: 'quickbars',
  inline: true,
  quickbars_insert_toolbar: false
});
```
