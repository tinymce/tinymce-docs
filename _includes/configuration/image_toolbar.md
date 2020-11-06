### quickbars_image_toolbar

{{ site.requires_5_2v }}

The **quickbars_image_toolbar** option configures the Quick Image toolbar provided by the [quickbars plugin]({{site.baseurl}}/plugins/opensource/quickbars). To change the buttons on the Quick Image toolbar, provide a space-separated string of [toolbar button names]({{ site.baseurl }}/advanced/available-toolbar-buttons/). The Quick Image toolbar is intended for image-related buttons, but any [{{site.productname}} toolbar buttons]({{ site.baseurl }}/advanced/available-toolbar-buttons/) or [custom toolbar buttons]({{ site.baseurl }}/ui-components/toolbarbuttons) are allowed.

To disable the Quick Image toolbar, set `quickbars_image_toolbar` to `false`.

**Type:** `String` or `false`

**Defaults:** `alignleft aligncenter alignright`

#### Example: Customizing the Quick Image toolbar

```js
tinymce.init({
  selector: 'div.tinymce',
  plugins: 'quickbars image imagetools',
  inline: true,
  quickbars_image_toolbar: 'alignleft aligncenter alignright | rotateleft rotateright | imageoptions'
});
```

#### Example: Disabling the Quick Image toolbar

To disable the Quick Image toolbar, set `quickbars_image_toolbar` to `false`.

```js
tinymce.init({
  selector: 'div.tinymce',
  plugins: 'quickbars',
  inline: true,
  quickbars_image_toolbar: false
});
```
