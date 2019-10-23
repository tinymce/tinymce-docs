
The following new features were added to the {{site.productname}} 5.1 version.

### Mobile







#### Mobiles now use the `silver` theme
The mobile experience provided for {{site.productname}} 4.7 through {{site.productname}} 5.0 has been deprecated in {{site.productname}} 5.1.

most Premium Plugins now work on mobile
not:
* permanent pen

The new mobile experience comes with a number of user interface changes in addition to the {{site.productname}} "desktop" experience:

* [Horizontal contextual menus on mobile]

| **Legacy mobile experience**<br />( {{site.productname}} 4.7 through {{site.productname}} 5.0 ) | **New mobile experience**<br />( {{site.productname}} 5.1 + )                              |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| ![{{site.productname}} legacy mobile experience]({{site.baseurl}}/images/legacy_mobile_exp.png) | ![{{site.productname}} 5.1+ mobile experience]({{site.baseurl}}/images/5_1_mobile_exp.png) |

Add the following `meta` tag to the `head` of pages using {{site.productname}} to ensure the mobile user interface functions as intended.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

To revert to the legacy mobile theme, add the mobile theme to the {{site.productname}} configuration, such as:

```js
tinymce.init({
  mobile: {
    theme: 'mobile'
  }
});
```

For information on:
* Using the `silver` theme for mobile, see: [TinyMCE Mobile]({{site.baseurl}}/mobile/).
* Using the legacy `mobile` theme, see: [TinyMCE Mobile - The legacy mobile theme]({{site.baseurl}}/mobile/#thelegacymobiletheme).

#### Horizontal contextual menus on mobile
Contextual menus are now mobile friendly, with an update to be horizontal on mobile devices. Contextual menus will open when a long-press is used on mobile devices. They also [side-scroll](#side-scrollingtoolbarsonmobile) to allow larger lists of items to be available on mobile devices.

<img alt="Example of the side-scrolling toolbar and contextual toolbar" src="{{site.baseurl}}/images/side-scrolling-context-toolbar.png" style="display:block;margin-left:auto;margin-right:auto;max-width:50%;border: 1px solid #036DD5" />

#### Side-scrolling toolbars on mobile
Toolbars and [horizontal menus](#horizontalcontextualmenusonmobile) side-scroll using "swipe" gestures on mobile devices. This allows longer toolbars to be used without occupying too much screen space. This feature removes the need for a toolbar drawer on mobile devices.

#### Contextual keyboard settings
A new `inputMode` configuration setting for dialog components has been added to provide contextual onscreen keyboards on mobile devices. Dialogs in {{site.productname}}, the core {{site.productname}} plugins, and the premium {{site.productname}} plugins have been updated to use `inputMode`.

For information on using `inputMode`, see: [Dialog components - `inputMode`]({{site.baseurl}}/ui-components/dialogcomponents/#inputmode).

#### New mobile defaults for selected settings
These mobile-specific default values have been set to disable unsupported settings for mobile devices or to provide the best experience without configuration from developers.

The following settings have mobile-specific default values:

* [`menubar`]({{site.baseurl}}/configure/editor-appearance/#menubar) - defaults to `false` on mobile phones.
* [`toolbar_drawer`]({{site.baseurl}}/configure/editor-appearance/#toolbar_drawer) - defaults to `false` on mobile devices. The toolbar will [side-scroll by default](#sidescrollingtoolbarsonmobile).
* [`toolbar_sticky`]({{site.baseurl}}/configure/editor-appearance/#toolbar_sticky) - Sticky Toolbar is not supported on mobile devices and defaults to `false`.
* [`table_grid`]({{site.baseurl}}/plugins/table/#table_grid) - Table grid is not supported on mobile devices and defaults to `false`. When creating tables on mobile, a dialog is shown instead of the table grid.
* [`resize`]({{site.baseurl}}/configure/editor-appearance/#resize) - Resizing is not supported on mobile devices and defaults to `false`.
* [`object_resizing`]({{site.baseurl}}/configure/advanced-editing-behavior/#object_resizing) - Object resizing is not supported on mobile devices and defaults to `false`.

To override these mobile defaults, add the setting to the `mobile` configuration, such as:

```js
tinymce.init({
  selector: 'textarea',
  mobile: {
    menubar: true
  }
});
```

#### Touch-friendly split buttons
* Added additional padding to split button chevrons on touch devices, to make them easier to interact with   TINY-4223    mobile  UI improvement

#### Table cell selection on mobile
TinyMCE 5.1
* Added touch selector handles for table selections on touch devices   TINY-4097    mobile  Table multicell selection using selectors
<img alt="Touch selector handles for selecting multiple table cells" src="{{site.baseurl}}/images/table_cell_touch_selector_handles.png" style="display:block;margin-left:auto;margin-right:auto;max-width:50%;border: 1px solid #036DD5" />

> Note: iPads do not use the `mobile` part of the {{site.productname}} init configuration. This is due to a constraint added by Apple to return the environment as a "desktop environment" for iPads. iPads users will receive the other changes to touch functionality, such as context toolbars and context menus.

### Sticky Toolbar

A Sticky Toolbar (or Docking Toolbar), docks the toolbar and the menu to the top of the screen when scrolling down a web page until the editor is no longer visible.

For information on the Sticky Toolbars, see: [Enabling Sticky Toolbars]({{site.baseurl}}/configure/editor-appearance/#toolbar_sticky).

### Minor changes

#### Changes to the Env API for platform detection
New platform detection functions have been added to the [`Env` API]({{site.baseurl}}/api/tinymce/tinymce.env/), allowing for some older detection properties to be deprecated.

##### New Env API properties

| Property          | Type   | Description                                                   |
| ----------------- | ------ | ------------------------------------------------------------- |
| `browser.current` | String | Returns the current browser name.                             |
| `browser.version` | Object | Returns the current browser major and minor version.          |
| `os.current`      | String | Returns the current operating system name.                    |
| `os.version`      | Object | Returns the current operating system major and minor version. |

##### New Env methods

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

For a list of deprecated `Env` APIs, see: [Deprecated API Properties - `tinymce.Env`](#deprecatedapiproperties-tinymceenv).

#### Added new `referrer_policy` setting
* added new referrer_policy setting to add the referrerpolicy attribute when loading scripts or stylesheets.

#### Added a dark TinyMCE skin
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

#### Added border width to Table cell dialog
* Added border width field to Table Cell dialog   TINY-4028    gen  any css value
<img alt="Cell Properties Dialog with new Border Width field" src="{{site.baseurl}}/images/border-width-cell-props.png" style="display:block;margin-left:auto;margin-right:auto;max-width:50%;border: 1px solid #036DD5" />

#### Changed the default `toolbar_drawer` to `floating`
* Changed default setting for `toolbar_drawer` to `floating`   TINY-3634    gen   docs and info to revert (was false)

#### Icon changes
* Changed visualblocks toolbar button icon ![New visualblocks icon]({{site.baseurl}}/images/icons/visualblocks.svg) and renamed `paragraph` ![`paragraph` renamed to `visualchars`]({{site.baseurl}}/images/icons/visualchars.svg) icon to `visualchars`   TINY-4074    UI change  button to show invisibles icon updated

#### Fixes to positioning of inline dialogs and menus
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

#### Mentions
The {{site.productname}} 5.1 release includes **Mentions** 2.1.0.

**Mentions** 2.1.0 has been updated to allow for the inclusion of "extra" menu items, such as additional results or search items. For details, see: [Mentions - `mentions_fetch`]({{site.baseurl}}/plugins/mentions/#mentions_fetch).