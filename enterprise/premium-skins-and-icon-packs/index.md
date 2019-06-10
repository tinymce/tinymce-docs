---
layout: default
title: Premium Skins and Icon Packs
title_nav: Premium Skins and Icon Packs
description: Quickly give TinyMCE a new look.
keywords: skin skins icon icons material bootstrap customize theme
---

The Premium Skins and Icon Packs lets you quickly give TinyMCE a new look. Just choose one of our pre-made skins and icon packs.

### How to use a premium skin

Use the [skin]({{site.baseurl}}/configure/editor-appearance/#skin) option together with the [content_css]({{site.baseurl}}/configure/content-appearance/#content_css) option with the values below.

```
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  skin: "bootstrap"      // Name of the skin
});
```

Available values for skins:

- material-classic
- material-outline
- bootstrap
- fabric
- borderless
- small
- jam

Available values for content_css:

- material-classic
- material-outline
- fabric

### How to use Icon Packs

Use the [icons]({{site.baseurl}}/configure/editor-appearance/#icons) option with any of the values listed below.

    tinymce.init({
      selector: 'textarea',  // change this value according to your HTML
      icons: 'material'      // Name of icon pack
    });

Available values for icon packs:

- material
- small
- jam

#### Icon pack compatibility matrix
Due to different toolbar button sizes, some icon packs fit better with some skins. Use the below matrix as a guide

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
For the self-hosted version of TinyMCE, Premium Skins and Icon Packs are available with the enterprise bundle which is available for download from the download page. All skins and icons packs are included in the bundle.


### Examples
Below are some recommended combinations of skins and icon packs

* [Bootstrap skin]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/bootstrap-demo/)
* [Material Outline skin with Material icon pack]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/material-classic-demo/)
* [Material Classic skin with Material icon pack]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/material-outline-demo/)
* [Microsoft Fabric skin]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/fabric-demo/)
* [Small skin with Small icon pack]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/small-demo/)
* [Small skin with Jam icon pack]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/jam-demo/)
* [Borderless editor]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/borderless-demo/)

### Getting started

#### Creating an account

To try out **Premium Skins and Icon Packs** and Tiny Cloud-delivered editor, the first step is to create a free [Tiny account](https://www.tiny.cloud/download/).

The free user account provisioned with a free 30-day trial of all Tiny [premium plugins](https://apps.tiny.cloud/product-category/tiny-cloud-extensions/), with no credit card information or commitment required.

#### Buy Premium Skins and Icon Packs

Start with this [dedicated product page](https://apps.tiny.cloud/products/premium-skins-and-icon-packs/) to see all the flexible pricing options. OEM and enterprise customers should [contact sales directly](https://www.tiny.cloud/contact/).
