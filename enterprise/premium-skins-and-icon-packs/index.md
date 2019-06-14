---
layout: default
title: Premium Skins and Icon Packs
title_nav: Premium Skins and Icon Packs
description: Quickly give TinyMCE a new look.
keywords: skin skins icon icons material bootstrap customize theme
---

The Premium Skins and Icon Packs lets you quickly give TinyMCE a new look. Just choose one of our pre-made skins and icon packs.

You can freely mix skins and icon packs but note that some skins are designed to be used with a particular icon pack. For example the Small skin is supposed to be used together with the Small icon pack or the Jam icon pack.

### How to use a premium skin

Cloud customers simply use the [skin option]({{site.baseurl}}/configure/editor-appearance/#skin) with any of the values below to get the skins. Some skins also has a custom [content_css]({{site.baseurl}}/configure/content-appearance/#content_css) to go with the skin.
If you are using self hosted, see below.

```
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  skin: "bootstrap"      // Name of the skin
});
```

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

### How to use Icon Packs

Cloud customers simply use the [icons option]({{site.baseurl}}/configure/editor-appearance/#icons) with any of the keywords listed below. If you using a self hosted version of TinyMCE, see below.

    tinymce.init({
      selector: 'textarea',  // change this value according to your HTML
      icons: 'material'      // Name of icon pack
    });

Availabe options for icon packs:

- material
- small
- jam

### Self hosted usage instructions
If you are using a self hosted version of TinyMCE you need to log in to your account and download enterprise bundle from the download page. All skins and icons are included in the package so you just need to update the `tinymce.init` config as outlined above.

### Examples
Below are some recommended combinations of skins and icons

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
