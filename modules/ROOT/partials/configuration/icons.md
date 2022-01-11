{% if customIconPack != true %}
## `icons`

The **icons** option allows the editor icons to be extended or replaced using an icon pack. For information on creating icon packs, see: [Create an icon pack for {{site.productname}}]({{site.baseurl}}/how-to-guides/customizing-the-editor-appearance/creating-an-icon-pack/).

Type
: `String`
{% endif %}

On initialization, {{site.productname}} will try to load any icon pack specified by the **icons** option. The icons in the icon pack will be merged with [{{site.productname}}'s default icons]({{site.baseurl}}/how-to-guides/creating-custom-ui-components/editor-icon-identifiers/) and icons in the icon pack will overwrite the default icons with the same identifier.

{{site.productname}} loads icon packs from the path `TINYMCE_BASE/icons/${iconPackName}/icons.js`;
where:

* `TINYMCE_BASE` is the {{site.productname}} root directory (the directory containing `tinymce.min.js`).
* `${iconPackName}` is the name of the icon pack.

To use a {{site.productname}} icon pack:

1. If required, create a new `icons` directory in `TINYMCE_BASE`.
1. Copy the icon pack into the `icons` directory.
{% if customIconPack == true %}
    For example:

    ```sh
    $ cp -r  dist/icons/my_icon_pack  TINYMCE_BASE/icons/
    ```
{% endif %}
1. Add the `icons` option to `tinymce.init`
{% if customIconPack == true %}
    ```js
    tinymce.init({
      selector: 'textarea',  // change this value according to your HTML
      icons: 'my_icon_pack'  // TINYMCE_BASE/icons/my_icon_pack/icons.js
    });
    ```
{% else %}

### Example: Using `icons`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  icons: 'material'  // TINYMCE_BASE/icons/material/icons.js
});
```
{% endif %}
