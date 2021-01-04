
This section describes issues that users of {{site.productname}} 5.1 may encounter, as well as possible workarounds for these issues.

**Outline**

* [Autocompleter and keypress event issues on Android](#autocompleterandkeypresseventissuesonandroid)
* [Text Patterns plugin: Limited functionality on Android devices](#textpatternspluginlimitedfunctionalityonandroiddevices)
* [Spell Checker Pro plugin: Unexpected behavior on Android devices](#spellcheckerpropluginunexpectedbehavioronandroiddevices)
* [UI elements may render behind the keyboard on iOS 12 devices](#uielementsmayrenderbehindthekeyboardonios12devices)
* [UI issue with sidebars on mobile](#uiissuewithsidebarsonmobile)
* [Find and replace moving out of view in iOS](#findandreplacemovingoutofviewinios)
* [Inline toolbar placement issues on mobile devices](#inlinetoolbarplacementissuesonmobiledevices)
* [Touch selection handle issue on iOS](#touchselectionhandleissueonios)
* [Text selection context toolbar issue on Android devices](#textselectioncontexttoolbarissueonandroiddevices)
* [FormatPainter: Limited functionality on iOS devices](#formatpainterlimitedfunctionalityoniosdevices)

### Autocompleter and keypress event issues on Android

#### Issue

> **Note**: This issue affects the following plugins:
> * [Mentions]({{site.baseurl}}/plugins/premium/mentions/).
> * [Emoticons]({{site.baseurl}}/plugins/opensource/emoticons/).
> * [Character Map]({{site.baseurl}}/plugins/opensource/charmap/).

Plugins relying on the [autocompleter API]({{site.baseurl}}/ui-components/autocompleter/) or keypress events do not work on Android. Android intercepts content and processes content prior to insertion into the editor.

#### Workaround
The only known workaround for the autocompleter at the moment is to press space and then press backspace to trigger the autocompleter to activate.

### Text Patterns plugin: Limited functionality on Android devices

#### Issue
The text pattern plugin will not apply inline patterns if the text pattern is immediately followed by a space on Android devices. The Text Patterns plugin relies on keypress events, which do not work on Android. Android intercepts content and processes content prior to insertion into the editor.

#### Workaround
Press _Enter_ or _Return_ immediately after entering the text pattern.

### Spell Checker Pro plugin: Unexpected behavior on Android devices

#### Issue
When selecting a correction, the original word will be duplicated and inserted at the selection point. Such as `Anddddroid` might be replaced with `Anddd Andddroid droid`.

#### Workaround
No known workaround at the time of release.

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

### UI issue with sidebars on mobile

#### Issue

> **Note**: This issue affects the [Comments plugin]({{site.baseurl}}/plugins/premium/comments/).

When opening sidebars on small screens (such as mobile phones), the sidebar may occupy most or all of the text area of the editor.

#### Workaround
For the comments plugin, the comments sidebar can be collapsed using the `showcomments` toolbar button (![comment.svg]({{ site.baseurl }}/images/icons/comment.svg)).

For other plugins with sidebars, {{site.companyname}} recommends ensuring the sidebar's toolbar button is accessible on the toolbar.

### Find and replace moving out of view in iOS

#### Issue
The Find and replace dialog moves outside the screen view on iOS when finding a match off-screen.

#### Workaround
No known workaround at the time of release.

### Inline toolbar placement issues on mobile devices

#### Issue
On mobile devices, the inline toolbar can intermittently display in the wrong location when the keyboard is open or when scrolling.

#### Workaround
No known workaround at the time of release.

### Touch selection handle issue on iOS

#### Issue
The iOS touch selection handles (lollipops) sometimes remain on screen after the selection changes, resulting in misplaced or multiple selections.

#### Workaround
This may be an iOS bug, and the is no known workaround at the time of release. To remove the duplicate or multiple selections, restart the Safari app.

### Text selection context toolbar issue on Android devices

#### Issue
TinyMCE text selection context toolbars do not appear on Android.

#### Workaround
No known workaround at the time of release.

### Format Painter plugin: Limited functionality on iOS devices

#### Issue
Unable to apply formats using a collapsed selection on iOS due to iOS selection placement.

#### Workaround
No known workaround at the time of release.