---
layout: default
title: Tiny Skins and Icon Packs
title_nav: Tiny Skins and Icon Packs
description: Quickly give TinyMCE a new look.
keywords: skin skins icon icons material bootstrap customize theme
---

The {{site.prem_skins_icons}} lets you quickly give {{site.productname}} a new look. Just choose one of our pre-made skins and icon packs.

### How to use a premium skin

Use the [skin]({{site.baseurl}}/configure/editor-appearance/#skin) option, in combination with the [content_css]({{site.baseurl}}/configure/content-appearance/#content_css) option and the values listed below.

Available values for [skins]({{site.baseurl}}/configure/editor-appearance/#skin):

- material-classic
- material-outline
- bootstrap
- fabric
- borderless
- small
- jam
- naked
- outside
- snow

Available values for [content_css]({{site.baseurl}}/configure/content-appearance/#content_css):

- material-classic
- material-outline
- fabric

##### Example

```js
tinymce.init({
  selector: 'textarea',    // change this value according to your HTML
  skin: 'fabric',       // Name of the skin
  content_css: 'fabric' // Name of the content skin
});
```

### How to use an icon pack

Use the [icons]({{site.baseurl}}/configure/editor-appearance/#icons) option with any of the values listed below.

Available values for [icon]({{site.baseurl}}/configure/editor-appearance/#icons) packs:

- material
- small
- jam
- thin

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  icons: 'material'      // Name of icon pack
});
```

For information on using the `icons` option, see: [User interface options - `icons`]({{site.baseurl}}/configure/editor-appearance/#icons).

#### Icon pack compatibility matrix

Due to different toolbar button sizes, some icon packs fit better with some skins. Use the below matrix as a guide.

| Skin | Compatible Icon pack |
| --- | --- |
| material-classic | material, jam, small, thin |
| material-outline | material, jam, small, thin |
| bootstrap | material, jam, small, thin |
| fabric | material, jam, small, thin |
| borderless | material, jam, small, thin |
| naked | material, jam, small, thin |
| outside | material, jam, small, thin |
| snow | material, jam, small, thin |
| small | jam, small |
| jam | jam, small |

### Examples

Below are some recommended combinations of skins and icon packs:

* [Bootstrap skin]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/bootstrap-demo/)
* [Material Outline skin with Material icon pack]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/material-outline-demo/)
* [Material Classic skin with Material icon pack]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/material-classic-demo/)
* [Microsoft Fabric skin]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/fabric-demo/)
* [Small skin with Small icon pack]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/small-demo/)
* [Small skin with Jam icon pack]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/jam-demo/)
* [Borderless editor]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/borderless-demo/)
* [Naked editor]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/naked-demo/)
* [Outside editor]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/outside-demo/)
* [Snow editor]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/snow-demo/)

{% assign pluginname = 'Tiny Skins and Icon' %}
{% assign pluginminimumplan = 'tiertwo' %}
{% assign plugindocspage = '../configure/editor-appearance/#skin' %}
{% assign extensionType = 'Packs' %}
{% assign pluralExtensionType = true %}
{% include misc/purchase-premium-plugins.md %}
{% assign extensionType = false %}
{% assign pluralExtensionType = false %}

