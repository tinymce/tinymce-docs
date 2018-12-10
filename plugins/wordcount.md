---
layout: default
title: Word Count plugin
title_nav: Word Count
description: Show a word count in the TinyMCE status bar.
keywords: wordcount
---

This plugin adds word count functionality to TinyMCE by placing a counter on the right edge of the status bar. Clicking the wordcount in the statusbar switches between counting words and characters. Using the menuitem, situated in the Tools dropdown, or the toolbar button you can open a dialog box with both word and character counts. 

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "wordcount",
  toolbar: "wordcount"
});
```
