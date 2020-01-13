## quickbars_insert_toolbar

The **quickbars_image_toolbar** option enables configuration of the Quick Image toolbar enabled by the [quickbars]({{ site.baseurl }}/plugins/quickbars) plugin. The toolbar can be disabled by setting `quickbars_image_toolbar` to `false`. The toolbar can also be configured to display non-default buttons using a space-separated string of toolbar button names. The Quick Image toolbar is intended for image-related buttons but any [{{site.productname}} toolbar buttons]({{ site.baseurl }}/advanced/editor-control-identifiers/#toolbarcontrols) or [custom toolbar buttons]({{ site.baseurl }}/ui-components/toolbarbuttons) are allowed.

**Type:** `String` or `false`

**Defaults:** `alignleft aligncenter alignright`

##### Example customizing the Quick Image toolbar

```js
tinymce.init({
  selector: 'div.tinymce',
  plugins: 'quickbars',
  inline: true,
  quickbars_image_toolbar: 'alignleft aligncenter alignright'
});
```

##### Example disabling the Quick Image toolbar

```js
tinymce.init({
  selector: 'div.tinymce',
  plugins: 'quickbars',
  inline: true,
  quickbars_image_toolbar: false
});
```
