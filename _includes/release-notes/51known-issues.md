
This section describes issues that users of {{site.productname}} 5.1 may encounter, as well as possible workarounds for these issues.

[Track {{site.productname}} issues on GitHub](https://github.com/tinymce/tinymce/labels/5.x).

### UI elements may render behind the keyboard on iOS 12 devices

UI elements may be rendered behind the keyboard on iOS 12 devices. This includes, but is not limited to:

* Dialogs.
* Context menus.
* Context toolbars.

This is due to a limitation of Safari on iOS 12. The silver theme relies on the `VisualViewport` API to determine the area of the page is visible on the device. Unfortunately the `VisualViewport` API is an experimental feature in iOS 12.

To workaround this issue, users can either:

* Upgrade to iOS 13 or later
* Turn on the experimental feature by going to:

**Settings** &#62; **Safari** &#62; **Advanced** &#62; **Experimental Features** &#62; **Visual Viewport API**.



