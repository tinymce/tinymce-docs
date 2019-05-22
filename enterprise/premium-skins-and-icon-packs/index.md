---
layout: default
title: Premium Skins and Icon Packs
title_nav: Premium Skins and Icon Packs
description: Quickly give TinyMCE a new look.
keywords: skin skins icon icons material bootstrap customize theme
---

The Premium Skins and Icon Packs lets you quickly give TinyMCE a new look. Just choose one of our pre-made skins and icon packs.

You can freely mix skins and icon packs but note that some skins are designed to be used with a particular icon pack. For example the Small skin is supposed to be used together with the Small icon pack or the Jam icon pack.

## How to use a premium skin

The premium skins use the [skin option]({{site.baseurl}}/configure/editor-appearance/#skin) in the init function.

```
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  skin: "bootstrap" // Name of the skin
});
```

Simply use one of the following keywords to get the skins

- material-outline
- material-classic
- bootstrap
- borderless
- small

## How to use Icon Packs

The icon packs use the [icon option]({{site.baseurl}}/configure/editor-appearance/#icons) in the TinyMCE config.

    tinymce.init({
      selector: 'textarea',  // change this value according to your HTML
      icons: 'material'      // Name of icon pack
    });

Simply use one of the following keywords to get the icons

- material
- jam
- small

## Examples
Below are some recommended combinations of skins and icons

* [Bootstrap skin]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/bootstrap-demo/)
* [Material Outline skin with Material icon pack]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/material-classic-demo/)
* [Material Classic skin with Material icon pack]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/material-outline-demo/)
* [Small skin with Small icon pack]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/small-demo/)
* [Small skin with Jam icon pack]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/jam-demo/)
* [Borderless editor]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/borderless-demo/)

<!--{% include codepen.html id="premiumskinsandicons-material-classic" %}-->
