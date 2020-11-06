
The following new features and enhancements were added for the {{site.productname}} 5.1 release.

### Mobile

{{site.productname}} 5.1 provides an improved mobile editor, replacing the existing mobile editor with a touch friendly version of the silver theme.

The new mobile experience comes with a number of user interface changes, building on the {{site.productname}} desktop experience:

* [Mobile devices now use the `silver` theme](#mobiledevicesnowusethesilvertheme)
* [Horizontal contextual menus on mobile](#horizontalcontextualmenusonmobile)
* [Side-scrolling toolbars on mobile](#side-scrollingtoolbarsonmobile)
* [Contextual keyboard settings](#contextualkeyboardsettings)
* [New mobile defaults for selected settings](#newmobiledefaultsforselectedsettings)
* [Table cell selection on mobile](#tablecellselectiononmobile)
* [Touch-friendly split buttons](#touch-friendlysplitbuttons)
* [Unsupported settings for mobile](#unsupportedsettingsformobile)

The new mobile experience allows most of the {{site.productname}} plugins to work on mobile devices, except for:

* [Comments]({{site.baseurl}}/plugins/premium/comments/)
* [Image tools]({{site.baseurl}}/plugins/opensource/imagetools/)
* [MoxieManager]({{site.baseurl}}/plugins/premium/moxiemanager/)
* [Permanent Pen]({{site.baseurl}}/plugins/premium/permanentpen/)

#### Enabling the mobile editor

To ensure the mobile editor functions as intended, add the following `meta` tag to the `head` of pages using {{site.productname}}.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

#### Mobile devices now use the `silver` theme
The mobile experience provided for {{site.productname}} 4.7 through {{site.productname}} 5.0 has been deprecated in {{site.productname}} 5.1.

| **Legacy mobile experience**<br />( {{site.productname}} 4.7 through {{site.productname}} 5.0 ) | **New mobile experience**<br />( {{site.productname}} 5.1 + )                              |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| ![{{site.productname}} legacy mobile experience]({{site.baseurl}}/images/legacy_mobile_exp.png) | ![{{site.productname}} 5.1+ mobile experience]({{site.baseurl}}/images/5_1_mobile_exp.png) |


To revert to the legacy mobile theme, add the mobile theme to the {{site.productname}} configuration, such as:

```js
tinymce.init({
  mobile: {
    theme: 'mobile'
  }
});
```

> **Note:** No enhancements have been made to the legacy mobile theme. All the changes described in these release notes relate to the `silver` theme on mobile devices.

For information on:
* Using the `silver` theme for mobile, see: [{{site.productname}} Mobile]({{site.baseurl}}/mobile/).
* Using the legacy `mobile` theme, see: [{{site.productname}} Mobile - The legacy mobile theme]({{site.baseurl}}/mobile/#thelegacymobiletheme).

#### Horizontal contextual menus on mobile
Contextual menus are now horizontal on mobile devices and open when a long-press is used. They also [side-scroll](#side-scrollingtoolbarsonmobile) to allow larger lists of items to be available on mobile devices.

For example:

<img alt="Example of the side-scrolling toolbar and contextual toolbar" src="{{site.baseurl}}/images/side-scrolling-context-toolbar.png" style="width:380px;border: 1px solid #036DD5" />

#### Side-scrolling toolbars on mobile
Toolbars and [horizontal menus](#horizontalcontextualmenusonmobile) side-scroll using "swipe" gestures on mobile devices. This allows longer toolbars to be used without occupying too much screen space. This feature removes the need for a toolbar drawer on mobile devices.

#### Contextual keyboard settings
A new `inputMode` configuration setting for dialog input components has been added to provide contextual onscreen keyboards on mobile devices. Dialogs in {{site.productname}}, the core {{site.productname}} plugins, and the premium {{site.productname}} plugins have been updated to use `inputMode`.

For information on using `inputMode`, see: [Dialog components - `inputMode`]({{site.baseurl}}/ui-components/dialogcomponents/#inputmode).

#### New mobile defaults for selected settings
These mobile-specific default values have been set to disable unsupported settings for mobile devices or to provide the best experience without configuration from developers.

The following settings have mobile-specific default values:

* [`menubar`]({{site.baseurl}}/configure/editor-appearance/#menubar) - defaults to `false` on mobile phones.
* [`toolbar_drawer`]({{site.baseurl}}/configure/editor-appearance/#toolbar_drawer) - defaults to `false` on mobile devices. The toolbar will [side-scroll by default](#sidescrollingtoolbarsonmobile).
* [`toolbar_sticky`]({{site.baseurl}}/configure/editor-appearance/#toolbar_sticky) - Sticky Toolbar is not supported on mobile devices and defaults to `false`.
* [`table_grid`]({{site.baseurl}}/plugins/opensource/table/#table_grid) - Table grid is not supported on mobile devices and defaults to `false`. When creating tables on mobile, a dialog is shown instead of the table grid.
* [`resize`]({{site.baseurl}}/configure/editor-appearance/#resize) - Resizing is not supported on mobile devices and defaults to `false`.
* [`object_resizing`]({{site.baseurl}}/configure/advanced-editing-behavior/#object_resizing) - Object resizing is not supported on mobile devices and defaults to `false`.

#### Table cell selection on mobile
The [table plugin]({{site.baseurl}}/plugins/opensource/table/) has been updated to provide _touch selection handles_ on touch devices. The touch selection handles appear when users double-tap a table cell, and allow users to select a range of table cells on touch devices.

For example:

<img alt="Touch selector handles for selecting multiple table cells" src="{{site.baseurl}}/images/table_cell_touch_selector_handles.png" style="width:380px;border: 1px solid #036DD5" />

#### Touch-friendly split buttons
The styling on [split buttons]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#splitbutton) has been updated to include more padding so they are easier to interact with on touch devices.

#### Unsupported settings for mobile

The following settings are not supported on mobile devices:

* [Inline editing mode]({{site.baseurl}}/general-configuration-guide/use-tinymce-inline/).
* [Distraction-free editing mode]({{site.baseurl}}/general-configuration-guide/use-tinymce-distraction-free/).
* [`inline`]({{site.baseurl}}/configure/editor-appearance/#inline).
* [`toolbar_sticky`]({{site.baseurl}}/configure/editor-appearance/#toolbar_sticky).
* [`table_grid`]({{site.baseurl}}/plugins/opensource/table/#table_grid).
* [`resize`]({{site.baseurl}}/configure/editor-appearance/#resize).
* [`object_resizing`]({{site.baseurl}}/configure/advanced-editing-behavior/#object_resizing).


### Sticky Toolbar

The Sticky Toolbar (or Docking Toolbar) docks the toolbar and the menu to the top of the screen when scrolling down a web page. The sticky toolbar will remain docked until the editor is no longer visible. This allows the menu and toolbar to remain in view when editing large text areas.

![Sticky Toolbar animation]({{site.baseurl}}/images/sticky-toolbar.gif)

For information on the Sticky Toolbars, see: [Enabling Sticky Toolbars]({{site.baseurl}}/configure/editor-appearance/#toolbar_sticky).

### Changes to the Env API for platform detection
New platform detection functions have been added to the [`Env` API]({{site.baseurl}}/api/tinymce/tinymce.env/), allowing for some older detection properties to be deprecated.

#### New Env API properties

| Property          | Type   | Description                                                   |
| ----------------- | ------ | ------------------------------------------------------------- |
| `browser.current` | String | Returns the current browser name.                             |
| `browser.version` | Object | Returns the current browser major and minor version.          |
| `os.current`      | String | Returns the current operating system name.                    |
| `os.version`      | Object | Returns the current operating system major and minor version. |

#### New Env methods

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

### Added new `referrer_policy` setting
Used for setting the level of referrer information sent when loading plugins and CSS. Referrer policies can be used to:

* Improve the privacy of end-users.
* Assist with server-side filtering of cross-origin requests for {{site.productname}} resources.

For information on using the `referrer_policy` setting, see: [Integration and setup options - `referrer_policy`]({{site.baseurl}}/configure/integration-and-setup/#referrer_policy).

### Added a dark content css skin
A dark CSS definition for `content_css` has been added to compliment the dark user interface skin.

For example:

{% include live-demo.html id="dark-mode" %}

For information on using the dark version of the default skin, see: [Customizing the editor UI - Skins]({{site.baseurl}}/general-configuration-guide/customize-ui/#skins).

### Added border width to Table cell dialog
The table plugin has been updated to include a **Border width** field in the **Cell Properties** dialog. The field will accept any [valid CSS units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#Lengths).

For example:

<img alt="Cell Properties Dialog with new Border Width field" src="{{site.baseurl}}/images/border-width-cell-props.png" style="width:380px;border: 1px solid #036DD5" />

### Changed the default `toolbar_drawer` to `floating`
The default for the `toolbar_drawer` setting has been changed from `false` to `floating`.

To revert to the {{site.productname}} 5.0 behavior, add `toolbar_drawer: false` to the `tinymce.init`, such as:

```js
tinymce.init({
  selection: textarea#myEditor
  toolbar_drawer: false
});
```

For information on the `toolbar_drawer` setting, see: [User interface options - `toolbar_drawer`]({{site.baseurl}}/configure/editor-appearance/#toolbar_drawer).

### Icon changes
In {{site.productname}} 5.0, the same icon (`paragraph`) was used for the `visualchars` and `visualblocks` menu items and toolbar buttons.

To improve the user experience:

* The `paragraph` icon has been renamed `visualchars` and is used for the `visualchars` toolbar button: ![`paragraph` renamed to `visualchars`]({{site.baseurl}}/images/icons/visualchars.svg)
* A new `visualblocks` icon is used for the `visualblocks` toolbar button: ![New visualblocks icon]({{site.baseurl}}/images/icons/visualblocks.svg)

For the list of icons included in {{site.productname}}, see: [Available icons]({{site.baseurl}}/advanced/editor-icon-identifiers/).

### Fixes to the positioning of inline dialogs and menus
Fixes for inline dialogs and menus have been included to:

* Position inline dialogs correctly when the page is scrolled.
* Reposition inline dialogs and menus when resizing {{site.productname}}.
