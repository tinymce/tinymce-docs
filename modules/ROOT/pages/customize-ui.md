# Customizing the editor UI
:title_nav: Customizing the UI
:description: Learn how to change the appearance of TinyMCE.
:keywords: themes skins statusbar

This section is about customizing {{site.productname}}'s user interface with skins, toolbar buttons, and manipulating the status bar.

## Themes

**Silver** is {{site.productname}}'s default theme. Users can easily customize the menu or toolbar without having to edit the theme. Theme creation requires a more in depth-knowledge of {{site.productname}}'s API and is beyond the scope of this guide. {{site.productname}} skins, however, are easier to make.

## Skins

Skins control the appearance of {{site.productname}} such as colors and spacing. The default skin is called **Oxide** (`oxide`) and has a `light` and a `dark` version. To initialize the editor with the dark version of the default skin, use the following configuration:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  skin: 'oxide-dark',
  content_css: 'dark'  //
});
```

To base the skin version on the user’s preference as specified in their operating system, use:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  skin: (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oxide-dark' : 'oxide'),
  content_css: (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default')
});
```

To create a skin interactively, visit [the {{site.productname}} 6 Skin Tool](http://skin.tiny.cloud/t5/). For information on manually creating skins for {{site.productname}}, see [Creating a skin]({{ site.baseurl }}/how-to-guides/customizing-the-editor-appearance/creating-a-skin/).

> **Note**: Developers often confuse the difference between {{site.productname}} "themes" and "skins". A **Skin** in {{site.productname}} is used to make changes to the appearance of the editor, for example, colors, margins, padding, fonts, icons, etc. A **Theme** creates the editor construction (left, top, bottom, or right of the editing area - vertical or horizontal, inline or outside, etc.). A skin usually changes the color scheme of a button, dialog, etc. while the theme applies to the whole editor including its functionality and has child skins to change the appearance.

## Changing editor height and width

A common UI customization used by developers is changing the height and width of the editable area. The following examples are code snippets that change {{site.productname}}'s height and width.

> **Note**: The links below contain specific details of these customization options.

### Set the editable area height

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  height : 300
});
```

See the [height option]({{ site.baseurl }}/initial-configuration/editor-size-options/#height) for customization details.

### Set the editable area width

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  width : 300
});
```

See the [width option]({{ site.baseurl }}/initial-configuration/editor-size-options/#width) for customization details.

### Set maximum and minimum heights and widths

The following code snippets use several options for the maximum and minimum values for heights and widths of the editable area.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  max_height: 500,
  max_width: 500,
  min_height: 100,
  min_width: 400
});
```

See the [max_height]({{ site.baseurl }}/initial-configuration/editor-size-options/#max_height), [max_width]({{ site.baseurl }}/initial-configuration/editor-size-options/#max_width), [min_height]({{ site.baseurl }}/initial-configuration/editor-size-options/#min_height), and [min_width]({{ site.baseurl }}/initial-configuration/editor-size-options/#min_width) documentation pages to learn more about these customization options.

The editable area can also automatically resize itself as the user enters content into the iframe with the [Autoresize plugin]({{site.baseurl}}/plugins-ref/opensource/autoresize/). Users can resize the editor on both the horizontal and vertical access by dragging the status bar handle with the [resize]({{ site.baseurl }}/initial-configuration/editor-size-options/#resize) configuration option.

## Customizing the editable area with content_css

Use the [`content_css`]({{ site.baseurl }}/content/add-css-options/#content_css) customization option to ensure that {{site.productname}}'s editable area has the same styling as the surrounding content.

{% include misc/shipped-content-css.md %}

The following example includes the file `mycontent.css` in all of the pages to control the site's global appearance. This example ensures the content in the editable area contains the same style as the site.

### Example using an absolute path

```js
// File: http://domain.mine/mysite/index.html

tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  content_css : '/mycontent.css'  // resolved to http://domain.mine/mycontent.css
});
```

See the [content_css]({{ site.baseurl }}/content/add-css-options/#content_css) customization page for more information about the use of absolute and relative paths as well as and how to use multiple stylesheets.

## Hiding the status bar

The status bar is the gray bar aligned to the bottom of the editor's editable area. The status bar contains the path information and the resize handle. Removing the status bar disables the ability for users to change the size of the editable area.

### Example: Hiding the status bar

The following example disables the status bar.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  statusbar: false
});
```

> **Note**: Refer to the plugins and advanced configuration options documentation for more information on how to restrict whether the resize handle can be dragged.

## Adding the code button plugin

One popular toolbar button that is *not* loaded with the "Silver" theme is the `code` button. Clicking the `code` button displays a dialog box containing the raw HTML hidden behind {{site.productname}}'s interface.

> **Note**: Additional functionality may require the inclusion of a plugin

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'code',
  toolbar: 'code'
});
```

All of the buttons disappear after the `code` button is added to the toolbar and a new menu called `Tools` with the menu item `Source code` is created. (See [this page]({{ site.baseurl }}/getting-started/install-setup/cloud/cloud-quick-start/) for a basic HTML code block.)

### Example: Adding the code toolbar button

The following example displays the default toolbar in addition to the `code` functionality:

```js
tinymce.init({
  selector: 'textarea',
  toolbar: 'undo redo styleselect bold italic alignleft aligncenter alignright bullist numlist outdent indent code',
  plugins: 'code'
  });
```

The ability to customize the user interface is an integral part of ensuring an integrated and complete user experience.
