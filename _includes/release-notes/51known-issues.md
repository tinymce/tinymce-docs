
This section describes issues that users of {{site.productname}} 5.1 may encounter, as well as possible workarounds for these issues.

[Track {{site.productname}} issues on GitHub](https://github.com/tinymce/tinymce/labels/5.x).

### UI elements may render behind the keyboard on iOS 12 devices

#### Issue
UI elements may be rendered behind the keyboard on iOS 12 devices. This includes, but is not limited to:

* Dialogs.
* Context menus.
* Context toolbars.

This is due to a limitation of Safari on iOS 12. The silver theme relies on the `VisualViewport` API to determine the area of the page is visible on the device. Unfortunately the `VisualViewport` API is an experimental feature in iOS 12.

#### Workaround
To workaround this issue, users can either:

* Upgrade to iOS 13 or later
* Turn on the experimental feature by going to:

**Settings** &#62; **Safari** &#62; **Advanced** &#62; **Experimental Features** &#62; **Visual Viewport API**.

### Toolbar may overflow for inline editors on mobile

#### Issue
When a {{site.productname}} editor set to `inline: true` is opened on a mobile device, long toolbars will extend beyond the screen edge.

#### Workaround
Setting the editor [width]({{site.baseurl}}/configure/editor-appearance/#width) will constrain the toolbar width.

### UI issue with sidebars on mobile

#### Issue

> **Note**: This issue affects the [Comments plugin]({{site.baseurl}}/plugins/comments/).

When opening sidebars on small screens (such as mobile phones), the sidebar may occupy most or all of the text area of the editor.

#### Workaround
For the comments plugin, the comments sidebar can be collapsed using the `showcomments` toolbar button (![comment.svg]({{ site.baseurl }}/images/icons/comment.svg)).

For other plugins with sidebars, no workaround exists. {{site.companyname}} recommends setting the `plugins` for `mobile` to exclude plugins with sidebars:

For example

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'code hr table comments',
  mobile: {
    plugins: 'code hr table'
  }
});
```