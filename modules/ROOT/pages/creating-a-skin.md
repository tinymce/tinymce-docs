# Create a skin for TinyMCE
:title_nav: Create a skin
:description_short: Introducing skin creation.
:description: Introducing skin creation, less and icon modification.
:keywords: create creator skin icon

This section provides information on how to manually create a new skin to customize the appearance of {{site.productname}} {{site.productmajorversion}}.

The {{site.productname}} Skin Tool provides an interactive method for designing and creating a skin for {{site.productname}}, visit: [http://skin.tiny.cloud/](http://skin.tiny.cloud/).

## Prerequisites

This guide assumes:

* Familiarity with the command line and running simple commands.
* [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/en/) and [Gulp](https://gulpjs.com) are already installed.
* Basic understanding of [Less](http://lesscss.org), the CSS preprocessor we use to build the skins. More specifically, [read the section about variables](http://lesscss.org/features/#variables-feature).

## Preparation

The CSS that goes with a theme is called a skin. The default skin for {{site.productname}} {{site.productmajorversion}} is named Oxide and is written in [Less](http://lesscss.org), a popular CSS preprocessor. With Oxide we introduced a concept we call the **Style API**. This API consists of around 300 variables which you use to modify the appearance of {{site.productname}}. You never touch the underlying CSS. The benefit of this approach is that improvements we make to the CSS and HTML won't break your custom skin. This also means that if things don't work as expected, we can provide support and bug fixes, something that was virtually impossible before.

> **Important**: We do not recommend modifying or overriding CSS rules directly.

To set up the skin development environment, begin with the following steps:

1. Download (or `git clone`) the [{{site.productname}} source code](https://github.com/tinymce/tinymce).

2. Open the terminal and navigate to the folder you just downloaded.

3. Install dependencies with the command:

   ```sh
   yarn install
   ```

4. Launch the web server to preview the skins using the command:

   ```sh
   yarn oxide-start
   ```

You should now be able to open a web browser and point it to the url displayed in the terminal, usually `http://localhost:3000`.

The development environment is set up and ready to work.

![{{site.productname}} skin SDK for Silver theme]({{site.baseurl}}/images/SDKforsilver.png)

If you just need to build the skins without launching a web server, run:

```sh
yarn oxide-build
```

## Making or editing a skin

Make sure you have performed the preparation steps above.

### Overview

Navigate to `modules/oxide/src/less/skins/`. There are two folders in this location:
* `/ui` - which is the skins for the editor. The important file here is `skin.less`.
* `/content` - which is the skins for the content within the editor.

The folder `modules/oxide/src/less/theme/` contains the Less files. At the top of most files you'll find the available variables that defines the default colors, margins, fonts etc (variables are the strings that starts with an at-character, for example `@background-color`). *Do not edit these files*, instead use them as a reference when creating your skin. We recommend starting with the two files containing global variables: `modules/oxide/src/less/theme/globals/global-variables.less` and the toolbar buttons: `modules/oxide/src/less/theme/components/toolbar-button/toolbar-button.less`.

The general workflow is that you look inside the less files within the theme folder and copy the variables you like to change into your skin's `skin.less` file.

> Note: The skin **only** changes the visual presentation of the UI and **not** the placement of elements. Placement of elements is done by the {{site.productname}} UI framework. This framework makes it possible to do complex UI layouts on all browsers without touching any CSS when plugins are created.

### Creating a skin

1. Begin by duplicating the `default` folder located in `modules/oxide/src/less/skins/ui/` and rename it to the name of your skin.
2. Start the development server using the terminal command `yarn oxide-start`. If you already have the server running, you need to restart it to make it recognize your new skin using `ctrl-c` and then start it again.
3. Open the file `modules/oxide/src/less/skin/ui/<your-skin-name>/skin.less`.
4. Open any less file located in the theme folder, for example `modules/oxide/src/less/theme/globals/global-variables.less` and copy a variable you like to change, it's easiest to copy the whole line. Let's copy the `@background-color` variable to start with.
5. Paste the variable into the `skin.less` file you opened in step 2. For a striking look, change the variable value to be red, like this: `@background-color: red;`. Then save the file.

Your skin.less file should now look like this:

```
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

@import 'src/less/theme/theme';

//
// Place your variables here
//

@background-color: red;
```
Switch to the web browser. Select your skin from the *Skin menu*. It should show a fiery red editor

![{{site.productname}} skin SDK for Silver theme]({{site.baseurl}}/images/SDKforsilverCustomExample.png)

This is how you skin {{site.productname}}: copy variables from the files in the theme folder and paste them into your skin file. There are variables for most things, like spacing between toolbar buttons to letter spacing. Simple yet powerful.

> **Tip**: You can change the {{site.productname}} config in `modules/oxide/src/demo/index.html` to suit your particular use case.

## Creating a content CSS file

To update the appearance of the content within the editor, such as headings, quotes, lists, etc... you create a content css. These are located in `modules/oxide/src/less/skin/content/`

1. Create a folder in `modules/oxide/src/less/skins/content/` and create a `content.less` file in it. Alternatively, you can duplicate any of the existing content css.
2. Start the development server using the terminal command yarn oxide-start. If you already have the server running, you need to restart it to make it recognize your new skin using ctrl-c and then start it again.
3. Add the relevant element selectors for the desired use case such as `h1` to `h6`, `a`, `blockquote`, `code`, `table`, etc...

## Moving the skin into TinyMCE

1. Copy the skin and/or content CSS from `modules/oxide/build/skins/` to the corresponding folders in your production {{site.productname}} folder.
2. Update the {{site.productname}} init function with the [skin]({{site.baseurl}}/interface/editor-appearance/editor-skin/#skin) option and/or the [content_css]({{site.baseurl}}/content/add-css-options/#content_css) option.

For more information on how to specify the location of the skin file, see [this]({{site.baseurl}}/interface/editor-appearance/editor-skin/#skin_url) section.

## Modifying the icons

For information on adding custom icons, see: [Create an icon pack for {{site.productname}}]({{site.baseurl}}/how-to-guides/customizing-the-editor-appearance/creating-an-icon-pack/).
