---
layout: default
title: Word Count Plugin
title_nav: Word Count
description: Show a word count in the TinyMCE status bar.
keywords: wordcount
---

This plugin adds word count functionality to TinyMCE, placing a counter on the right edge of the status as well as a toolbar button that opens a dialog showing both word- and character count. By clicking the wordcount in the statusbar you can switch between counting words and characters.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "wordcount",
  toolbar: "wordcount"
});
```
