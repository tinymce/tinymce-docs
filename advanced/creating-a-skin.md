---
layout: default
title: Create a skin for TinyMCE
title_nav: Create a skin
description_short: Introducing skin creation.
description: Introducing skin creation, less and icon modification.
keywords: create creator skin icon
---

This section provides information on how to create a new skin to alter the appearance of TinyMCE.

## Prerequisites:

This guide assumes:

* Basic understanding of [Node.js](http://nodejs.org) and [Gulp](http://gulpjs.com).
* Familiarity with the command line and running simple commands.

> Note: The  [TinyMCE Skin Creator](http://skin.tinymce.com/) only supports TinyMCE 4.

## Preparation

A skin for TinyMCE 5 is written in [less](http://lesscss.org), a popular CSS preprocessor. Making a skin primarily involves modifying variables similar to using an API. The CSS rules are not modified or overridden, instead the `less` variables in the `skin` files is modified. This makes updating TinyMCE easier.

> Important: TinyMCE does not recommend modifying or overriding CSS rules directly.

1. Download (or `git clone`) the [TinyMCE skin tools](https://github.com/tinymce/oxide).
1. Open a terminal and `cd` into the `/oxide` directory.
1. Run the following command to install all dependencies:
```js
npm install
```
4. To start `gulp` and spin up a web server for previewing the files, run the following command:
```js
npm run start
```
> This command starts the preview server at the URL `http://localhost:3000` and starts watching the filesystem for changes.

> Note: Run the following command to just build the files:
```
npm run build
```


### Result:

The development environment is set up and ready to work.

![**TinyMCE skin SDK for Silver theme**]({{site.baseurl}}/images/SDKforsilver.png)

## Making or editing a skin

The preparation steps above must be performed to create or edit a skin.

### Overview

In the `/oxide` directory, navigate to `src/less/skins/`. There are two folders in this location:
* `/ui` - which is the skins for the editor.
* `/content` - which is the skins for the content within the editor.

The skin imports the theme `less` files located in the `src/less/theme/` directory.

To create a skin, the CSS in the `/theme` folder is not required to be edited. Instead, TinyMCE provides variables for the relevant CSS properties, such as colors, margins, and spacings, that are used in the skin file to customize TinyMCE.

This allows the user to easily update the TinyMCE instance despite making advanced changes to the skin, since the only thing that is changed is a variable file. Another benefit of this approach is that the user gains access to all the variables that have been tested to work together with the browsers.

> Note: The skin **only** changes the visual presentation of the UI and **not** the placement of elements. Placement of elements is done by the TinyMCE UI framework. This framework makes it possible to do complex UI layouts on all browsers without touching any CSS when plugins are created.

### Creating a skin

1. In the `/oxide` directory, begin by duplicating the `default` folder located in `src/less/skins/ui/` and rename it to the name of your skin.
1. Open the file `src/less/theme/globals/global-variables.less` and **copy** the variables to change into the `skin.less` file of the duplicated folder in the previous step.
1. Change the values. The variables in the `skin.less` will override the default values.

For more detailed customizations, review the variables in each component, such as `src/less/theme/components/toolbar-button.less` and copy the desired ones to the `skin.less`.

To style interface elements in the content, such as selection color, drag handles, table of contents, bookmarks etc, copy variables to `src/less/skins/ui/<skin-name>/content.less` or `content.inline.less` (if inline mode is being used).

Following is an example of a sample `skin.less` file:

```js
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

@import 'src/less/theme/theme';

//

// Root variables
// Begin customization by changing these variables as most other variables are derivatives of these.
@background-color: #1976D2;
@base-value: 24px;
@color-black: #222f3e;
@color-tint: #3498db;
@color-white: #fff;
@color-error: #c00;
@font-stack: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;

// Colors
@border-color: darken(@background-color, 20);
@text-color: contrast(@background-color, @color-black, @color-white);
@text-color-muted: contrast(@background-color, fade(@color-black, 60%), fade(@color-white, 50%));
```

### Preview the skin

1. To preview the new skin, run the following command from a terminal:
```js
npm run start
```
2. Navigate to the address shown in the terminal, usually `localhost:3000`. The TinyMCE skin SDK for Silver theme development environment page will appear in the browser.
3. In the **Editor examples** section, select the new skin from the **UI skin** drop-down menu.
![**UI skin**]({{site.baseurl}}/images/default-copy.png)

#### Result

TinyMCE editor with all the configured skin changes will appear in the browser screen.

### Creating a content css

To update the appearance of the content within the editor, such as headings, quotes, lists etc you create a content css. These are located in `src/less/skin/content/`

1. Create a folder in `src/less/skins/content/` and create a `content.less` file in it. Alternatively, any of the existing content skins can be duplicated.
2. Add the relevant element selectors for the desired use case such as `h1` to `h6`, `a`, `blockquote`, `code`, `table`, etc.

### Moving the skin into TinyMCE

1. Copy the skin and/or content skin from `build/skins/` to the corresponding folders in the duplicated TinyMCE folder.
2. Update the init function with the [skin](https://www.tiny.cloud/docs-beta/configure/editor-appearance/#skin) option and/or the [content_css](https://www.tiny.cloud/docs-beta/configure/content-appearance/#content_css) option.

#### Example

Following is an example of a sample `init` configuration for moving the configured skin into a TinyMCE instance.

```js
<!DOCTYPE html>
<html>
  <head>
    <script src="js/tinymce/tinymce.min.js"></script>

    <script>

      tinymce.init({
        selector: 'textarea',

        skin_url: '../oxide/build/skins/ui/<name of default(copy)>',
        content_css: '../oxide/build/skins/content/<name of the new-skin>/content.min.css'
      })
    </script>
  </head>
  <body>
    <textarea>Hello, World</textarea>

  </body>
</html>
```

## Modifying the icons

Documentation on how to change the icons will be added here shortly.
