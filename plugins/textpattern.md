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

There are three types of patterns: inline, block, and replacement patterns. Inline patterns have a `start` and an `end` text pattern whereas the block- and replacement-based patterns only have a `start`. You can specify formats to be applied to the selection, commands to be executed, or text to be replaced.

> Note: Formats and commands must be already registered with the editor. See the [formats]({{ site.baseurl }}/configure/content-formatting/#formats) and [commands]({{ site.baseurl }}/api/tinymce/tinymce.editorcommands/) documentation for more information.

**Default Value:**

```js
[
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
  {start: '- ', cmd: 'InsertUnorderedList' }
]
```

#### Inline patterns

Inline patterns have a `start` and an `end`, and either a `format` or a `cmd` and optional `value` property. This allows for patterns to be used to either apply a format or execute a command, optionally with the given value.

> Note: Inline patterns are executed on space and on enter.

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugin: 'textpattern',
  textpattern_patterns: [
    {start: '*', end: '*', format: 'italic'},
    {start: '**', end: '**', format: 'bold'},
    {start: '~', end: '~', cmd: 'createLink', value: 'https://tiny.cloud'}
  ]
});
```

Using the configuration in this example, typing `*`, some text, `*`, then space will result in the format `italic` being applied to the text between the `*` symbols. The same will happen for `**` and `bold`. The third pattern will execute `editor.execCommand('createLink', false, 'https://tiny.cloud')`, which will wrap the text between the `~` symbols in an link that points to `https://tiny.cloud`.

#### Block patterns

Block patterns have a `start` and either a `format` or a `cmd` and optional `value` property. They do not have an `end` property. This allows for patterns to be used to either apply a block format or execute a command, optionally with the given value.

> Note: Block patterns are only executed on enter, **not** on space.

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugin: 'textpattern',
  textpattern_patterns: [
    {start: '#', format: 'h1'},
    {start: '##', format: 'h2'},
    {start: '###', format: 'h3'},
    {start: '####', format: 'h4'},
    {start: '#####', format: 'h5'},
    {start: '######', format: 'h6'},
    {start: '* ', cmd: 'InsertUnorderedList'},
    {start: '- ', cmd: 'InsertUnorderedList'},
    {start: '1. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'decimal' }},
    {start: '1) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'decimal' }},
    {start: 'a. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-alpha' }},
    {start: 'a) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-alpha' }},
    {start: 'i. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-roman' }},
    {start: 'i) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-roman' }}
  ]
});
```

Using the configuration in this example, typing `#`, some text, then pressing enter will convert the text to a `h1` heading. Typing `1. `, some text, then pressing enter will convert the text to an ordered list, with the original text as the first list item, and the new line as the second list item. In particular, since we have specified `value`, this pattern will execute `editor.execCommand('InsertOrderedList', false, { 'list-style-type': 'decimal'})`.

#### Replacements patterns

Replacement patterns have a `start` and a `replacement`, which takes a string that can be text or HTML. Whether a replacement pattern inserts a block or inline element depends on what the `replacement` string is.

> Note: Replacement patterns are executed on space and on enter.

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugin: 'textpattern',
  textpattern_patterns: [
    {start: '---', replacement: '<hr/>'},
    {start: '--', replacement: '—'},
    {start: '-', replacement: '—'},
    {start: '(c)', replacement: '©'},
    {start: '//brb', replacement: 'Be Right Back'},
    {start: '//heading', replacement: '<h1 style="color: blue">Heading here</h1> <h2>Author: Name here</h2> <p><em>Date: 01/01/2000</em></p> <hr />'},
  ]
});
```

In this example, typing `---` will insert a horizontal rule block, but typing `(c)` will insert an inline copyright symbol. This is useful for commonly used phrases or symbols, and can be leveraged to create content templates. The last pattern is an example of this.
