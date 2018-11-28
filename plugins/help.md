---
layout: default
title: Help plugin
title_nav: Help
description: Shows the help dialog.
keywords: help
controls: toolbar button, menu item
---

The help plugin adds a button and/or menu item that opens a dialog showing two tabs: 

* Handy shortcuts that explains some nice-to-know keyboard shortcuts
* Plugin list that shows which plugins that have been installed, with links to the relevant documentation pages if available, and a list of available premium plugins.

In the footer of the dialog you can also see which version of TinyMCE you are using.

The help dialog can also be shown by pressing the keyboard shortcut `Alt + 0`. 

##### Example setup

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "help",
  toolbar: "help"
});
```

## Exposing metadata for the help plugin

For information on how to expose metadata from you custom plugin to add it to the Installed plugins list in the Help plugin, see the  [Creating a Plugin page]({{ site.baseurl }}/advanced/creating-a-plugin/#exposingmetadata).