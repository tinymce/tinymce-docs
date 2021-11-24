---
layout: default
title: Create an icon pack for TinyMCE
title_nav: Create an icon pack
description_short: Introducing icon pack creation.
description: How to make your own icon pack.
keywords: create creator skin icon
---

TinyMCE 6 introduced icon packs for customizing the editor icons.

## Prerequisites

This guide assumes:

* Familiarity with the command line and running commands.
* [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com) are already installed.
* Optional: [`git`](https://git-scm.com/) is already installed.

## How icons work in TinyMCE

A {{site.productname}} icon pack is a `.js` file containing strings of [SVG's](https://developer.mozilla.org/en-US/docs/Web/SVG). An icon pack can be used: to include one or more custom icons; or to replace some or all of the default {{site.productname}} icons.

An icon pack only requires the custom icons to be included; the default {{site.productname}} icons are used as a fallback for icons missing from the custom icon pack.

> Don't forget to explore our ready-to-use Premium Icon Packs such as 'Material' icons, and a smaller version of our default icons at [{{site.prem_skins_icons}}]({{site.plugindirectory}}/skins-and-icon-packs/).

## Creating a TinyMCE icon pack

To create a custom icon pack:

* [Download and setup the icon pack template](#downloadandsetuptheiconpacktemplate)
* [Add the SVG files](#addthesvgfiles)
* [Build the icon pack](#buildtheiconpack)

### Download and setup the icon pack template

To use the {{site.productname}} icon pack template project:

1. Download the [{{site.productname}} Oxide Icon Pack Template](https://github.com/tinymce/oxide-icon-pack-template) by either:

    - Downloading the `.zip` file from the [Oxide Icon Pack Template GitHub page](https://github.com/tinymce/oxide-icon-pack-template) and extract the contents.
    - From a terminal or command prompt, use git to clone the GitHub repository, such as:

        ```sh
$ git clone https://github.com/tinymce/oxide-icon-pack-template.git
        ```
2. Open a terminal or command prompt, navigate to the `oxide-icon-pack-template` directory.
3. Install the project dependencies by executing:

    ```sh
$ npm install
    ```
4. When prompted, enter a name for the icon pack. The icon pack name should only contain:

    * Numbers.
    * Letters.
    * Hyphens ( `-` ).
    * Underscores ( `_` ).

The icon pack name will be used with the [icons]({{site.baseurl}}/configure/editor-appearance/#icons) option to apply the icons in {{site.productname}}.

### Add the SVG files

Each SVG files placed in `/src/svg` will be converted to an icon. The file names of the SVG files are used to set the icon identifier used by {{site.productname}}.

For example: `bold.svg` will have the identifier `bold`. Such as:

```js
tinymce.init({
  selector: '#tiny_custom_button',
  toolbar: 'myButton',
  icons: 'my_icon_pack',
  setup: function (editor) {
    editor.ui.registry.addButton('myButton', {
      icon: 'bold',    // the 'bold' icon  created from 'bold.svg'
      onAction: function (_) {
        editor.insertContent('&nbsp;<strong>It\'s my icon button!</strong>&nbsp;');
      }
    });
  }
});
```

For a list of the icon identifiers, see: [Available icons]({{site.baseurl}}/advanced/editor-icon-identifiers/).

{{site.productname}} does not resize the SVGs provided, relying on the size defined in the SVG. This allows icons of different sizes to be used in the editor. The Toolbar button sizes are independent of the icon sizes. To change button sizes, a [custom skin]({{site.baseurl}}/advanced/creating-a-skin/) is required.

> **Note**: Input SVGs must be shapes, not strokes. SVG files containing strokes will not render correctly. If the input files contain strokes, use a graphics program to convert the strokes into shapes.

### Build the icon pack

To build the icon pack using Gulp:

1. Open a terminal or command prompt and navigate to the root directory of the icon pack (such as: `oxide-icon-pack-template/`).
2. Build the icon pack by executing the `npx gulp` command:

    ```sh
$ npx gulp
    ```
    A `dist/` directory containing the icon pack will be created.
3. Using a web browser, open `dist/html/icons.html` to preview the icons.

#### Troubleshooting information for building icon packs

The SVG files are optimized during the build process with [SVGO](https://github.com/svg/svgo). The optimization can result in distorted graphics due to rounding errors. The graphics may be fixed by providing new SVGO options. To change the SVGO options used:

1. Using a text editor, open `gulpfile.js`.
2. Add the `svgo` option to the `iconPackager` function, such as:

    ```js
iconPackager({
  name: 'my-icon-pack',
  svgo: { floatPrecision: 3 } //Increase the rounding precision
})
    ```
All user defined options, including SVGO options, will merge with the default options. For information on SVGO options, see: [SVGO on GitHub](https://github.com/svg/svgo).

## Deploying an icon pack
An icon pack can be served either:

  * [With {{site.productname}}](#deploytheiconpackwithtinymce)
  * [Separate from {{site.productname}}](#deploytheiconpackandtinymceseparately)

### Deploy the icon pack with TinyMCE
{% assign customIconPack = true %}
{% include configuration/icons.md %}

### Deploy the icon pack and TinyMCE separately
{% include configuration/icons_url.md %}
{% assign customIconPack = false %}