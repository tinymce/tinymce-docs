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

## API

The plugin exposes an API for retrieving the word- and character count of either the whole document or the current editor selection. Following is an example of how to retrieve each property.

##### Example

```js
var wordcount = tinymce.activeEditor.plugins.wordcount;

console.log(wordcount.body.getWordCount());
console.log(wordcount.body.getCharacterCount());
console.log(wordcount.body.getCharacterCountWithoutSpaces());

console.log(wordcount.selection.getWordCount());
console.log(wordcount.selection.getCharacterCount());
console.log(wordcount.selection.getCharacterCountWithoutSpaces());
```
