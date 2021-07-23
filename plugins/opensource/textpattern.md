---
layout: default
title: Text Pattern plugin
title_nav: Text Pattern
description: Matches special patterns in the text and applies formats or executed commands on these patterns.
keywords: textpattern textpattern_patterns format cmd
---

The Text Pattern plugin matches special patterns in the text and applies formats, replaces text, or executes commands on these patterns.

The default pattern is similar to markdown syntax, so the user can type `# text` to produce a header or `**text**` to make text **bold**.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'textpattern'
});
```

## Options

This setting affects the execution of the `textpattern` plugin. Text patterns that are matched by the editor can be changed here.

{% include configuration/textpattern_patterns.md %}
