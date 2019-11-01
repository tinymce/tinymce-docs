---
layout: default
title: Premium Skins and Icon Packs
title_nav: Premium Skins and Icon Packs
description: Quickly give TinyMCE a new look.
keywords: skin skins icon icons material bootstrap customize theme
---

The Premium Skins and Icon Packs lets you quickly give {{site.productname}} a new look. Just choose one of our pre-made skins and icon packs.

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

Available values for [content_css]({{site.baseurl}}/configure/content-appearance/#content_css):

- material-classic
- material-outline
- fabric

##### Example

```js
tinymce.init({
  selector: 'textarea',    // change this value according to your HTML
  skin: "bootstrap",       // Name of the skin
  content_css: "bootstrap" // Name of the content skin
});
```

### How to use an icon pack

Use the [icons]({{site.baseurl}}/configure/editor-appearance/#icons) option with any of the values listed below.

Available values for [icon]({{site.baseurl}}/configure/editor-appearance/#icons) packs:

- material
- small
- jam

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
| material-classic | material, jam, small |
| material-outline | material, jam, small |
| bootstrap | material, jam, small |
| fabric | material, jam, small |
| borderless | material, jam, small |
| small | jam, small |
| jam | jam, small |

### Self hosted usage instructions

For the self-hosted version of {{site.productname}}, Premium Skins and Icon Packs are available as a download, either as part of the Pro bundle or as an individual purchase. All skins and icons packs are included in the bundle.

### Examples

Below are some recommended combinations of skins and icon packs:

* [Bootstrap skin]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/bootstrap-demo/)
* [Material Outline skin with Material icon pack]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/material-classic-demo/)
* [Material Classic skin with Material icon pack]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/material-outline-demo/)
* [Microsoft Fabric skin]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/fabric-demo/)
* [Small skin with Small icon pack]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/small-demo/)
* [Small skin with Jam icon pack]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/jam-demo/)
* [Borderless editor]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/borderless-demo/)

### Getting started

#### Creating an account

To try out **Premium Skins and Icon Packs** and {{site.cloudname}}-delivered editor, the first step is to create a free [{{site.accountpage}}](https://www.tiny.cloud/download/).

{{site.accountpage}}s receive a free 30-day trial of all {{site.cloudname}} [premium plugins]({{site.cloudextensions}}), with no credit card information or commitment required.

#### Buy Premium Skins and Icon Packs

Start with this [dedicated product page]({{site.productpages}}/skins-and-icon-packs/) to see all the flexible pricing options. OEM and enterprise customers should [contact sales directly]({{site.contactpage}}).
