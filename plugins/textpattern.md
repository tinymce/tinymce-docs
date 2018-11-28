---
layout: default
title: Text Pattern plugin
title_nav: Text Pattern
description: Matches special patterns in the text and applies formats or executed commands on these patterns.
keywords: textpattern textpattern_patterns format cmd
---

This plugin matches special patterns in the text and applies formats, replaces text, or executes commands on these patterns.

The default pattern is similar to markdown syntax, so you can type `# text` to produce a header or `**text**` to make text **bold**.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",
  plugins: "textpattern"
});
```

### Options

This setting affects the execution of the `textpattern` plugin. Text patterns that are matched by the editor can be changed here.

### `textpattern_patterns`

This option lets you configure the text patterns that get matched by the `textpattern` plugin. By default, it has basic markdown patterns.

There are three types of patterns: inline, block, and replacement patterns. Inline patterns have a start and end whereas the block- and replacement-based patterns only have a start. You can specify formats to be applied to the selection, commands to be executed, or text to be replaced.

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugin: 'textpattern',
  textpattern_patterns: [
     {start: '*', end: '*', format: 'italic'},
     {start: '**', end: '**', format: 'bold'},
     {start: '#', format: 'h1'},
     {start: '##', format: 'h2'},
     {start: '###', format: 'h3'},
     {start: '####', format: 'h4'},
     {start: '#####', format: 'h5'},
     {start: '######', format: 'h6'},
     {start: '1. ', cmd: 'InsertOrderedList'},
     {start: '* ', cmd: 'InsertUnorderedList'},
     {start: '- ', cmd: 'InsertUnorderedList'},
     {start: '//brb', replacement: 'Be Right Back'}
  ]
});
```
