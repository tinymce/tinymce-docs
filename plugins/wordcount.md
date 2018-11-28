---
layout: default
title: Word Count plugin
title_nav: Word Count
description: Show a word count in the TinyMCE status bar.
keywords: wordcount wordcount_cleanregex wordcount_countregex
---

This plugin adds word count functionality to TinyMCE, placing a counter on the right edge of the status bar.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "wordcount"
});
```

### Options

These settings affect the execution of the `wordcount` plugin. The regular expression values that determine how words are cleaned and counted may be set here.

### `wordcount_cleanregex`

This option allows you to specify the regular expression that will be used to *strip punctuation and numbers* from the word count. **Removed in 4.5.0**

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "wordcount",
  wordcount_cleanregex: /[0-9.(),;:!?%#$?\x27\x22_+=\\\/\-]*/g
});
```

### `wordcount_countregex`

This option allows you to specify the regular expression that will be used to *count the words* for the word count. **Removed in 4.5.0**

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "wordcount",
  wordcount_countregex: /[\w\u2019\x27\-\u00C0-\u1FFF]+/g
});
```
