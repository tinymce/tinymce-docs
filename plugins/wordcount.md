---
layout: default
title: Word Count Plugin
title_nav: Word Count
description: Show a word count in the TinyMCE status bar.
keywords: wordcount
---

This plugin adds word count functionality to TinyMCE, placing a counter on the right edge of the status bar.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "wordcount"
});
```

### Options

These settings affect the execution of the `wordcount` plugin. The regex values that determine how words are cleaned and counted may be set here.

### `wordcount_cleanregex`

This option allows you to specify the regex that will be used to *strip punctuation and numbers* from the word count.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "wordcount",
  wordcount_cleanregex: /[0-9.(),;:!?%#$?\x27\x22_+=\\\/\-]*/g
});
```

### `wordcount_countregex`

This option allows you to specify the regex that will be used to *count the words* for the word count.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "wordcount",
  wordcount_countregex: /[\w\u2019\x27\-\u00C0-\u1FFF]+/g
});
```
