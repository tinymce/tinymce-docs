---
layout: default
title: Contribute to documentation
title_nav: Contribute to documentation
description_short: Contribute to TinyMCE's developer documentation.
description: Contribute to TinyMCE's developer documentation.
keywords: opensource oss contributors lgpl docs dox
---

This page outlines how you can provide feedback and contribute to {{site.productname}} documentation.

## Contributor Code of Conduct

For our Contributor Code of Conduct, visit our [Contributor Covenant Code of Conduct on GitHub](https://github.com/tinymce/tinymce-docs/blob/develop/CODE_OF_CONDUCT.md#contributor-covenant-code-of-conduct).

## How to contribute to TinyMCE's documentation

We welcome people with technical writing experience to help make {{site.productname}}'s docs as useful to our community as possible. Although you don't need to be an expert developer to contribute, a basic understanding of software development is helpful.

What is more important is your ability to articulate complex ideas. Our goal is to help developers understand {{site.productname}}'s functionality as quickly as possible.

Simply branch the [docs GitHub repository](https://github.com/tinymce/tinymce-docs) and submit a PR, or reach out to the [{{site.productname}} docs team](https://github.com/tinymce/tinymce-docs/issues/new?assignees=&labels=question&template=question.md) if you have a specific question.

## TinyMCE documentation tech stack

The documentation is built with Jekyll. Text files are written in [kramdown](https://kramdown.gettalong.org/) and published on [GitHub](https://github.com/tinymce/tinymce-docs). You will find the [repo here](https://github.com/tinymce/tinymce-docs).

## Markdown & code syntax

The documentation is written in [kramdown Flavored Markdown](https://kramdown.gettalong.org/). If you are not familiar with kramdown [read this](https://kramdown.gettalong.org/quickref.html).

### Highlighting

Code language syntax and associated elements are highlighted using an open and closing backtick. For example, this `object` is actually enclosed with backticks like this: \`object\`.

Highlight words relating specifically to executable parts of software languages. Keys and their values when pertaining to objects and methods (particularly the case with {{site.productname}}) should have backticks. We cannot cover every use case here and contributors need to use their best judgment. What is more important is your ability to articulate complex ideas.

### Code snippets

Code snippets should always be complete, executable code blocks starting with the `tinymce` object. We write code snippets by enclosing the example code within three opening and closing backticks. The first set of backticks is immediately followed by the code's language, which helps correct syntax highlighting: typically, html, css, js (and sometimes php).

Include any key values pairs and method options that are required to enable a user to test the snippet in a local HTML file. You do not need to include the `html` surrounding the `tinymce` object that would be required to make the snippet work.

For example, this is good:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'codesample',
  toolbar: 'codesample'
});
```

This is not:

```js
tinymce.init({
  ...
  plugins: 'codesample',
  toolbar: 'codesample'
  ...
});
```

### URLs and links

Resources to be linked take the form of placing the linked text between brackets and the URL between parenthesis. Linking an external resource looks like this:

```
hello, [text to link](http://www.example.com) to the URL example.com.
```

### Codepens

Codepens can be added to content using the "codepen.html" include, such as:

```
{% raw %}{%{% endraw %} include codepen.html id="basic-example" {% raw %}%}{% endraw %}
```

There are several options for this include file, see [`_includes/codepen.html`](https://github.com/tinymce/tinymce-docs/blob/develop/_includes/codepen.html) for details.

The source for each CodePen is store in the [`_includes/codepens/`](https://github.com/tinymce/tinymce-docs/blob/develop/_includes/codepens/) directory.

### Adding metadata to a page

Every page should have a meta section starting at line 1 containing information that is both informative and system critical. If you are creating a page or editing one that currently has inadequate meta information, please read the comments next to the default meta fields below.

```
---                // Three dashes at the start and end of the meta section, must be included.
layout: default    // In most cases leave this as 'default'.
title:             // The nav.yml references this so it must be included and it should be brief.
title_nav:         // Descriptive title for the navigation bar, if omitted nav defaults to title field.
description_short: // Short description for the grid layouts.
description:       // Detailed description at page level for the header section under the title.
keywords:          // Space-separated list of keywords in the content.
---
```

## Style Guide

### TinyMCE v. tinymce

Use the capitalized version of TinyMCE when referring to the open source project or the editor. Use lowercase when referring to the `tinymce` JavaScript object.

### Title capitalization

For titles use "Sentence case capitalization". Sentence case capitalization is more comfortable to read in technical documentation.

### Spelling

Use United States English. For example, behavior rather than behaviour, and canceled rather than cancelled.

### Proper names

When referring to the name of a development language we use the proper name or, where appropriate, the industry convention. For example, HTML, CSS, JavaScript, jQuery, React, AngularJS (not HTML, css, Jquery or React-js.)

The exception to this rule is when we are talking about the code itself (see the note above about TinyMCE v. tinymce). For example, write "HTML is great" when talking about the HTML language, but write, "escape your `html`" when talking about action with or within a codebase.

### Active voice v. Passive voice

Use [active voice](https://www.grammarly.com/blog/active-vs-passive-voice/). Passive voice decreases readability and comprehension.

### Adverbs

Avoid [adverbs](https://dictionary.cambridge.org/dictionary/english/adverb), such as: _very_ or _usually_.

### Pronouns

Avoid [pronouns](https://dictionary.cambridge.org/dictionary/english/pronoun), such as: _we_, _you_, or _I_.

### First, Second, or Third Person Perspective

Write in a [third person perspective](https://www.grammarly.com/blog/first-second-and-third-person/), such as: _He_, _she_, _they_, or _them_.

### Keep it simple

Use short, simple words where possible. Use formal language, do not use: slang, acronyms, initialisms, abbreviations, and [ambiguous contractions (such as _there'd_, or _it'll_)](https://docs.microsoft.com/en-us/style-guide/word-choice/use-contractions).