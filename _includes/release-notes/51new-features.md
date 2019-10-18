
The following new features were added to the {{site.productname}} 5.1 version.

### Mobile

most Premium Plugins now work on mobile


| **Legacy mobile experience**<br />( {{site.productname}} 4.7 through {{site.productname}} 5.0 ) | **New mobile experience**<br />( {{site.productname}} 5.1 + )                              |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| ![{{site.productname}} legacy mobile experience]({{site.baseurl}}/images/legacy_mobile_exp.png) | ![{{site.productname}} 5.1+ mobile experience]({{site.baseurl}}/images/5_1_mobile_exp.png) |

Add the following `meta` tag to the `head` of pages using {{site.productname}} to ensure the mobile user interface functions as intended.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

* Added touch selector handles for table selections on touch devices   TINY-4097    mobile  Table multicell selection using selectors
<img alt="Touch selector handles for selecting multiple table cells" src="{{site.baseurl}}/images/table_cell_touch_selector_handles.png" style="max-width:50%" />
* Added additional padding to split button chevrons on touch devices, to make them easier to interact with   TINY-4223    mobile  UI improvement
* Added `inputMode` config field to specify inputmode attribute of `input` dialog components   TINY-4062    mobile  Sets contextual keyboard. Specifies field type (num, str, etc.)
* Added new `inputMode` property to relevant plugins/dialogs   TINY-4102    mobile  Sets contextual keyboard. Specifies field type (num, str, etc.)
* Changed phones to use the `silver` theme by default   TINY-3634    mobile  docs and info to revert
    - `menubar`(phones only)   TINY-4077    mobile
    - `table_grid`   TINY-4075    mobile  Table creating, get a dialog instead
    - `resize`   TINY-4157    mobile
    - `object_resizing`   TINY-4157    mobile  just not text (false and not supported on mobile)
* Changed toolbars and context toolbars to sidescroll on mobile   TINY-3894   TINY-4107  mobile  UI improvement - no more draw by default
<img alt="Example of the side-scrolling toolbar and contextual toolbar" src="{{site.baseurl}}/images/side-scrolling-context-toolbar.png" style="max-width:50%" />
* Changed context menus to render as horizontal menus on touch devices   TINY-4107    mobile  longpress to open context menus
* Changed the `urlinput` dialog component to use the `url` type attribute   TINY-4102    mobile  Sets contextual keyboard. Specifies field type (num, str, etc.)

> We'll also need to document that iPadOS will not use the `mobile` part of the {{site.productname}} init configuration, since Apple want it to behave similar to a desktop environment. However since it's still a touch device we will change some functionality (eg context toolbars/menus) to behave better for a touch device.

### Sticky Toolbar

A Sticky Toolbar (or Docking Toolbar), docks the toolbar and the menu to the top of the screen when scrolling down a web page until the editor is no longer visible.

For information on the Sticky Toolbars, see: [Enabling Sticky Toolbars]({{site.baseurl}}/configure/editor-appearance/#toolbar_sticky).

#### Minor changes

* Added new platform detection functions to `Env` and deprecated older detection properties   TINY-4184    gen  os detection/query API changes

| Property          | Type   | Description                                                   |
| ----------------- | ------ | ------------------------------------------------------------- |
| `browser.current` | String | Returns the current browser name.                             |
| `browser.version` | Object | Returns the current browser major and minor version.          |
| `os.current`      | String | Returns the current operating system name.                    |
| `os.version`      | Object | Returns the current operating system major and minor version. |

| Method                 | Type    | Description                                                          |
| ---------------------- | ------- | -------------------------------------------------------------------- |
| `browser.isEdge`       | Boolean | Returns `true` if the user's browser is Microsoft Edge.              |
| `browser.isChrome`     | Boolean | Returns `true` if the user's browser is Google Chrome.               |
| `browser.isIE`         | Boolean | Returns `true` if the user's browser is Microsoft Internet Explorer. |
| `browser.isOpera`      | Boolean | Returns `true` if the user's browser is Opera.                       |
| `browser.isFirefox`    | Boolean | Returns `true` if the user's browser is Firefox.                     |
| `browser.isSafari`     | Boolean | Returns `true` if the user's browser is Safari.                      |
| `os.isWindows`         | Boolean | Returns `true` if the user's operating system is Microsoft Windows.  |
| `os.isiOS`             | Boolean | Returns `true` if the user's operating system is iOS.                |
| `os.isAndroid`         | Boolean | Returns `true` if the user's operating system is Android.            |
| `os.isOSX`             | Boolean | Returns `true` if the user's operating system is Mac OS X.           |
| `os.isLinux`           | Boolean | Returns `true` if the user's operating system is Linux.              |
| `os.isSolaris`         | Boolean | Returns `true` if the user's operating system is Solaris.            |
| `os.isFreeBSD`         | Boolean | Returns `true` if the user's operating system is FreeBSD.            |
| `deviceType.isDesktop` | Boolean | Returns `true` if the user's device is a desktop device.             |
| `deviceType.isiPad`    | Boolean | Returns `true` if the user's device is an iPad.                      |
| `deviceType.isiPhone`  | Boolean | Returns `true` if the user's device is an iPhone.                    |
| `deviceType.isPhone`   | Boolean | Returns `true` if the user's device is a phone.                      |
| `deviceType.isTablet`  | Boolean | Returns `true` if the user's device is a tablet.                     |
| `deviceType.isTouch`   | Boolean | Returns `true` if the user's device is a touch device.               |
| `deviceType.isWebView` | Boolean | Returns `true` if the user's device is a WebView device.             |

* added new referrer_policy setting to add the referrerpolicy attribute when loading scripts or stylesheets.
* added a dark content_css skin to go with the dark UI skin.
    Enable dark mode in TinyMCE
    There are two ways to enable dark mode in TinyMCE.

    You can initialize the editor with the following settings:
```
    skin: "oxide-dark",
    content_css: "dark"
```
    Alternatively, you can initialize the mode depending on the user’s preference as specified in the operating system:
```
    skin: (window.matchMedia("(prefers-color-scheme: dark)").matches ? "oxide-dark" : ""),
    content_css: (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "")
```
{% include codepen.html id="dark-mode" %}

* Added border width field to Table Cell dialog   TINY-4028    gen  any css value
<img alt="Cell Properties Dialog with new Border Width field" src="{{site.baseurl}}/images/border-width-cell-props.png" style="max-width:50%" />
* Changed default setting for `toolbar_drawer` to `floating`   TINY-3634    gen   docs and info to revert (was false)
* Changed visualblocks toolbar button icon ![New visualblocks icon]({{site.baseurl}}/images/icons/visualblocks.svg) and renamed `paragraph` ![`paragraph` renamed to `visualchars`]({{site.baseurl}}/images/icons/visualchars.svg) icon to `visualchars`   TINY-4074    UI change  button to show invisibles icon updated
* Fixed inline dialogs positioning incorrectly when the page is scrolled   TINY-4018    positioning of dialogs and menus improved
* Fixed inline dialogs and menus not repositioning when resizing   TINY-3227    positioning of dialogs and menus improved

### Premium Plugins

#### PowerPaste
The {{site.productname}} 5.1 release includes **PowerPaste** 5.2.0.

**PowerPaste** _5.0_ included a change to the `Remove Formatting` functionality to filter out inline style elements (such as `strong`, `b`, `em`, `i`, and `sub`), in-line with other editor functionality.

**PowerPaste** _5.1.1_ **reverses the _5.0_ change** and includes a new `powerpaste_clean_filtered_inline_elements` setting. This setting accepts a list of inline style elements to be filtered. These inline elements will be filtered on `clean` or `Remove Formatting` paste.

To retain the _5.0_ default inline style element filter, add the following setting to `tinymce.init`:
```js
powerpaste_clean_filtered_inline_elements: 'strong,em,b,i,u,strike,sup,sub,font'
```

For information on `powerpaste_clean_filtered_inline_elements`, see: [PowerPaste - `powerpaste_clean_filtered_inline_elements`]({{site.baseurl}}/plugins/powerpaste/#powerpaste_clean_filtered_inline_elements).

#### Page Embed
The {{site.productname}} 5.1 release includes **Page Embed** 1.0.1.

**Page Embed** 1.0.1 has been updated to include a touch event listener to allow embedded media to execute on mobile platforms.

#### Format Painter
The {{site.productname}} 5.1 release includes **Format Painter** 1.2.0.

**Format Painter** 1.2.0 has been updated to support the mobile platforms. The **Format Painter** will now function as expected for mobile users.

#### Checklist
The {{site.productname}} 5.1 release includes **Checklist** 1.0.1.

**Checklist** 1.0.1 includes a fix to allow checklist items to be toggled on an iPad.
<!--
#### Mentions
The {{site.productname}} 5.1 release includes **Mentions** 2.1.0.

__Needs info__ **Mentions** 2.1.0 adds the ability to include "extra" menu items that allow reloading with different search params.
-->