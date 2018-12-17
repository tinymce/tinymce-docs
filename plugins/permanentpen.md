---
layout: default
title: Permanent Pen Plugin
title_nav: Permanent Pen
description: Apply formats while typing
keywords: permanent pen copy text format style
controls: toolbar button, contextmenu, menu item
---

The Permanent Pen allows a user to apply a pre-defined format (for example, color, typeface and type style, font, etc.) to a new content, overriding the default values set for that content area.

The Permanent Pen is useful when a distinct style text needs to be repeatedly added to the content. The user can pre-define the desired style in the Permanent Pen properties. This pre-defined style is applied to all the text entered into the document while the Permanent Pen is enabled. The ability to store information for reuse saves the user time and ensures consistency across the content.

The Permanent Pen can also be used to create user notes and other useful comments in a different format for easy identification. This allows the user to add text without modifying the original content.

The default properties of Permanent Pen are:

```js
fontname: 'arial,helvetica,sans-serif',
forecolor: '#E74C3C',
fontsize: '12pt',
hilitecolor: '',
bold: true,
italic: false,
underline: false,
strikethrough: false
```
For more information on TinyMCE formats, refer to the [formats]({{site.baseurl}}/configure/content-formatting/#formats) section.

Permanent Pen is a premium plugin from Tiny. Please see the [Premium features]({{site.baseurl}}/enterprise/permanentpen/) section for all the buying options.

Once you have obtained the Permanent Pen plugin, refer to the following instructions for using it.

### Configuring the Permanent Pen toolbar button

Use the following script to configure the Permanent Pen toolbar button:

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: 'permanentpen',
  contextmenu: 'permanentpen',
  toolbar: 'permanentpen'
```
**Result**:
The ![**Permanent Pen**]({{site.baseurl}}/images/pp-disabled.png)(**Permanent Pen**) button appears in the toolbar menu.

### Using a Permanent Pen

#### To enable Permanent Pen

1. Click on the ![**Permanent Pen**]({{site.baseurl}}/images/pp-disabled.png)(**Permanent Pen**) toolbar button to enable the Permanent Pen.
2. Place the cursor in the desired text area and start typing.

**Result**:
The **Permanent Pen** toolbar button background color changes to _grey_ ![**Permanent Pen**]({{site.baseurl}}/images/pp-enabled.png) and the text is entered using the default settings.

#### To disable Permanent Pen

To exit the Permanent Pen, click on the ![**Permanent Pen**]({{site.baseurl}}/images/pp-enabled.png)(**Permanent Pen**) icon.

The **Permanent Pen** toolbar button background color changes to _white_ ![**Permanent Pen**]({{site.baseurl}}/images/pp-disabled.png).

### Accessing the Permanent Pen properties

There are two ways to access the Permanent Pen properties:

#### From the menubar

In the TinyMCE 5.0 instance, choose the *Format* -> *(Permanent Pen)* option from the **Format** menu.

![Format Menu]({{site.baseurl}}/images/formatmenu.png)

#### Inline

1. Place the cursor on the text entered using a Permanent Pen.
2. Right-click anywhere from inside the text area.
3. Choose on the **Permanent Pen** option.

![Right-click]({{site.baseurl}}/images/right-click.png)

**Result**:
The **Permanent pen properties** dialog box appears.

> Note: The Permanent Pen has to be enabled to access the **Permanent pen properties** dialog box by right-clicking the text. On the other hand, the menubar option can be accessed without enabling the Permanent Pen.

### Changing Permanent Pen properties

#### Using the UI

1. Open the **Permanent pen properties** dialog box using any of the above methods.
![Permanent pen properties]({{site.baseurl}}/images/pp-prop.png)
2. Select the desired settings from the **Font** and **Size** drop-down menus.
3. To select the desired **Styles**, click on the radio button next to **Bold**, **Italic**, **Strikethrough**, or **Underline**.
4. Choose the desired **Text color**.
5. Select the desired **Background color**
6. Press **Ok** to save or **Cancel** to dismiss.

**Result**:
When the Permanent Pen is enabled, it will apply the new settings to the entered text.

#### Using the script

Alternatively, the Permanent Pen properties can also be changed by configuring the properties in `tinymce.init`.

##### `permanentpen_properties`

The default formats for Permanent Pen can be specified in the following configuration.

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: 'permanentpen',
  contextmenu: 'permanentpen',
  toolbar: 'permanentpen',
  permanentpen_properties: {
    fontname: 'arial,helvetica,sans-serif',
    forecolor: '#E74C3C',
    fontsize: '12pt',
    hilitecolor: '',
    bold: true,
    italic: false,
    strikethrough: false,
    underline: false
  }
});
```
For more information on TinyMCE formats, refer to the [formats]({{site.baseurl}}/configure/content-formatting/#formats) section.

Check out the [Permanent Pen demo]({{site.baseurl}}/demo/permanentpen/) to try out this new feature.
