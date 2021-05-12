## skin

This option allows you to specify the skin that {{site.productname}} should use, or `false` to not load a skin. The default skin included with {{site.productname}} is named "oxide".

**Type:** `String` or `Boolean`

**Default value:** `'oxide'`

**Possible Values:** the name of a skin or `false`

The name of the skin should match the name of the folder within the skins directory of {{site.productname}}. If the specified skin is not found, {{site.productname}} will not load.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  skin: 'oxide'
});
```

If you would like to create your own skin, please see the guide [here]({{ site.baseurl }}/advanced/creating-a-skin/).
