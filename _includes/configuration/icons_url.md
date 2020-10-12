{% if customIconPack != true %}
## `icons_url`

The **icons_url** option allows the editor icons to be extended or replaced using an icon pack. For information on creating icon packs, see: [Create an icon pack for {{site.productname}}]({{site.baseurl}}/advanced/creating-an-icon-pack/).
{% endif %}

On initialization, {{site.productname}} will try to load any icon pack specified by the **icons_url** option. The icons in the icon pack will be merged with [{{site.productname}}'s default icons]({{site.baseurl}}/advanced/editor-icon-identifiers/) and icons in the icon pack will overwrite the default icons with the same identifier.

`icons_url` is used to specify the location of an icon pack when {{site.productname}} and the icon pack are loaded from different locations. For example: When loading {{site.productname}} from {{site.cloudname}}, the icon pack can be loaded from a different web server.
{% if customIconPack == true %}
Such as:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  icons_url: 'https://www.example.com/icons/my_icon_pack/icons.js', // load icon pack
  icons: 'my_icon_pack'      // use icon pack
});
```
{% else %}
**Type:**  `String`

### Example: Using `icons_url`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  icons_url: 'https://www.example.com/icons/material/icons.js', // load icon pack
  icons: 'material'      // use icon pack
});
```
{% endif %}