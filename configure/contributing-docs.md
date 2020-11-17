---
layout: default
title: Contribute to documentation
title_nav: Contribute to documentation
description_short: Contribute to TinyMCE's developer documentation.
description: Contribute to TinyMCE's developer documentation.
keywords: opensource oss contributors lgpl docs dox
---

{% assign readabilityGuidelines = "https://readabilityguidelines.co.uk" %}
{% assign msStyleGuide = "https://docs.microsoft.com/en-us/style-guide" %}

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
  selector: 'textarea', // change this value according to your HTML
  plugins: 'codesample',
  toolbar: 'codesample',
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

```md
hello, [text to link](http://www.example.com) to the URL example.com.
```

### Live demos

Live demos can be added to content using the "live-demo.html" include, such as:

```liquid
{% raw %}{%{% endraw %} include live-demo.html id="basic-example" {% raw %}%}{% endraw %}
```

There are several options for this include file, see [`_includes/live-demo.html`](https://github.com/tinymce/tinymce-docs/blob/develop/_includes/live-demo.html) for details.

The source for each live-demo is store in the [`_includes/live-demos/`](https://github.com/tinymce/tinymce-docs/blob/develop/_includes/live-demos/) directory.

### Adding metadata to a page

Every page should have a meta section starting at line 1 containing information that is both informative and system critical. If you are creating a page or editing one that currently has inadequate meta information, please read the comments next to the default meta fields below.

```md
---                // Three dashes at the start and end of the meta section, must be included.
layout: default    // In most cases leave this as 'default'.
title:             // The nav.yml references this so it must be included and it should be brief.
title_nav:         // Descriptive title for the navigation bar, if omitted nav defaults to title field.
description_short: // Short description for the grid layouts.
description:       // Detailed description at page level for the header section under the title.
keywords:          // Space-separated list of keywords in the content.
---
```

## Recommended tools

The following tools are recommended for significant edits to the documentation. The warnings and notifications from these tools should only be used as _guides_, not as _rules_.

- A Spelling Checker (US English). Note: Some IDE/text editor spelling checkers work well with Pascal-case, Camel-case, and Snake-case.
- Alex - [Alex.js integrations](https://alexjs.com/#integrations).
- Write Good - [Write good based plugins](https://github.com/btford/write-good#other-projects-using-write-good).
- A markdown linter (We use the Kramdown flavor of markdown).
- A Jekyll linter.

## Style guide

> **Note**: You are not required to know the style guide, **but** changes may be requested on GitHub pull requests to {{site.companyname}} documentation where these guidelines are not met.

The {{site.companyname}} documentation style guide is based on the Readability Guideline provided by Content Design London. We have chosen this guide because it's:

- open to the community
- focused on readability.

The information in the following subsections gives an overview of key points and lists both exceptions and additions. Please follow the guidelines on this page when they differ from the linked information.

For information the Readability Guidelines project, visit [Content Design London: Readability Guidelines]({{readabilityGuidelines}}/).

### Keep it simple

Use short, simple words where possible. Use formal language.

Do not use:

- Long sentences.
- Slang; such as _there you go_.
- Jargon; such as _leverage_ and _streamline_.
- Ambiguous contractions; such as _there'd_, and _it'll_.
- Latin terms; such as _i.e._, _e.g._, _etc._, _vs._, and _via_.
- Metaphors; such as _cherry picking_ and _nutshell_.
- Complex or specialist terms; such as _chrome_ (the toolbar, menu bar, status bar) and _upstream_.

For guidelines on using specialist terms, see: [Content Design London: Readability Guidelines - Specialist terms]({{readabilityGuidelines}}/clear-language/specialist-terms/).

For information on:

- Using simple words, see: [Content Design London: Readability Guidelines - Plain English]({{readabilityGuidelines}}/clear-language/plain-english/).
- Short, simple sentences, see: [Content Design London: Readability Guidelines - Simple sentences]({{readabilityGuidelines}}/clear-language/simple-sentences/).
- Words to avoid, such as jargon, metaphores, and Latin terms; see: [Content Design London: Readability Guidelines - Words to avoid]({{readabilityGuidelines}}/clear-language/words-to-avoid/).

For a short list of some commonly used Latin terms, see: [Australian Government Style Manual - Latin shortened forms](https://www.stylemanual.gov.au/format-writing-and-structure/clear-language-and-writing-style/plain-english-and-word-choice/latin-shortened-forms).

### Use US English (en_US) spelling

Use United States English. For example:

- "behavior" rather than "behaviour".
- "canceled" rather than "cancelled".

### Use proper names for programs and languages

When referring to the name of a development language, use the proper name or the industry convention.

For example:

- "CSS" not "css"
- "jQuery" not "Jquery"
- "React" not "React-js"

When using these terms in code elements (&#96;) or pre blocks (&#96;&#96;&#96;), use standard syntax. Such as:

- `tinymce`
- `<html>`
- `var React = require('react');`

When referring to a program, use the proper name.

For example:

- "Microsoft Internet Explorer" not "IE"
- "Apache Tomcat" not "Tomcat"
- "TinyMCE" not "Tiny"

### TinyMCE or tinymce

Use the capitalized version of TinyMCE when referring to the open source project or the editor. "TinyMCE" is an abbreviation of "Tiny MoxieCode Editor", but is better known as TinyMCE.

Use lowercase when referring to the `tinymce` JavaScript object.

### Use Active voice not Passive voice

Use active voice. Passive voice decreases readability and comprehension.

For information on the difference between active and passive voice, see: [Grammar Girl: Active Voice Versus Passive Voice](https://www.quickanddirtytips.com/education/grammar/active-voice-versus-passive-voice).

### Titles and headings

Titles and headings should be:

- Descriptive but concise
- Written using Sentence-case capitalization.

Sentence case capitalization is more comfortable to read in technical documentation.

For guidelines on headings and titles, see: [Content Design London: Readability Guidelines - Headings and titles]({{readabilityGuidelines}}/content-design/headings-titles/).

### Using abbreviations, acronyms, and intialisms

General points:

- Do not use points or spaces.
- Write out "for example" and "that is" in full (not "eg" or "ie").
- If an acronym is better understood than the full text, use the acronym.
- Use all capital letters for initialisms.
- Start with a capital letter for acronyms.
- Capitalize single letters in expressions.
- Provide full text explanations.
- Consider providing a full explanation each time.

For guidelines on using abbreviations, acronyms, and intialisms; see: [Content Design London: Readability Guidelines - Abbreviations and acronyms]({{readabilityGuidelines}}/grammar-points/abbreviations-and-acronyms/).

### Adverbs

Avoid adverbs, such as: _very_ and _usually_.

For examples and a definition of an adverb, see: [Cambridge Dictionary: Grammar - Adverbs](https://dictionary.cambridge.org/grammar/british-grammar/adverbs_2).

For (casual) information on removing adverbs, see: [Grammar Girl: How to Eliminate Adverbs](https://www.quickanddirtytips.com/education/grammar/how-to-eliminate-adverbs).

### Contractions

Avoid contractions, such as: _can't_, _don't_, _they're_, and _could've_.

For information on contractions, see: [Content Design London: Readability Guidelines - Contractions]({{readabilityGuidelines}}/grammar-points/contractions/).

### Hyphens

Limit use of hyphens. Some general pointers:

- Only use a hyphen if the word or phrase is confusing without it.
- Make sure your hyphen usage is up to date.
- Be consistent with hyphen usage.

For guidelines on using hyphens, see: [Content Design London: Readability Guidelines - Hyphens and dashes]({{readabilityGuidelines}}/grammar-points/hyphens-and-dashes/).

### Pronouns

Avoid pronouns, such as: _we_, _you_, _their_, and _I_.

For examples and a definition of an pronoun, see: [Cambridge Dictionary: Grammar - Pronouns](https://dictionary.cambridge.org/grammar/british-grammar/pronouns_1).

For reasons to avoid pronouns, see: [Content Design London: Readability Guidelines - We, you, our, your, my]({{readabilityGuidelines}}/audiences-devices-channels/we-you-our-your-my/).

### First, Second, or Third Person Perspective

Write in a second person perspective, such as: _You_, and _your_. Remember to avoid using pronouns, including _you_ and _your_.

For information on writing in a second person perspective, see: [Grammar Girl: First, Second, and Third Person](https://www.quickanddirtytips.com/education/grammar/first-second-and-third-person?page=1).

### Links and cross-references

When adding links or cross-references:

- Make link text meaningful.
- Avoid mid-sentence links.
- Match the destination content.
- Use sentence case.

For guidelines on adding links to the documentation, see: [Content Design London: Readability Guidelines - Links]({{readabilityGuidelines}}/content-design/links/).

### Images and icons

Avoid adding images to the documentation. They can quickly become outdated. Use a description or a "demo" instead.

When images are used, reuse existing images if possible. This includes icons.

Ensure a brief description of the image is provided in the alternative text attribute.

For information on providing useful alternative text for images, see: [WCAG 2.1 specification: G95 - Providing short text alternatives that provide a brief description of the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G95.html).

### Talking about the user interface

{{site.companyname}} uses the Microsoft Style Guide for describing the user interface and interacting with the user interface. Some exceptions may exist in the glossary at the end of this page.

For guidelines on:

- Describing _interactions_ with the user interface for a procedure or task, see: [Microsoft Style Guide: Describing interactions with UI]({{msStyleGuide}}/procedures-instructions/describing-interactions-with-ui).
- Describing _interactions_ with the user interface for a procedure or task with multiple input methods; for example, procedures that can be performed with a keyboard or a mouse; see: [Microsoft Style Guide: Describing alternative input methods - Multiple input methods and branching within procedures]({{msStyleGuide}}/procedures-instructions/describing-alternative-input-methods#multiple-input-methods-and-branching-within-procedures).
- Referring to user interface elements in instructions or procedures, see: [Microsoft Style Guide: Formatting text in instructions]({{msStyleGuide}}/procedures-instructions/formatting-text-in-instructions).
- Referring to the mouse and mouse-based interactions, such as "click" and "right mouse button"; see: [Microsoft Style Guide: Mouse and mouse interaction terms]({{msStyleGuide}}/a-z-word-list-term-collections/term-collections/mouse-mouse-interaction-terms).
- Referring to keyboard keys and keyboard shortcuts, see: [Microsoft Style Guide: Keys and keyboard shortcuts]({{msStyleGuide}}/a-z-word-list-term-collections/term-collections/keys-keyboard-shortcuts).
- Referring to touch interactions, such as "tap" and "swipe"; see: [Microsoft Style Guide: Describing alternative input methods - Pen-computing and touch procedures]({{msStyleGuide}}/procedures-instructions/describing-alternative-input-methods#pen-computing-and-touch-procedures).

### Adding admonitions or notes

Avoid adding admonitions (also known as: _notices_, _notes_, _warnings_, or _callouts_) where possible. Over-use of admonitions may lead to what is sometimes referred to as "Admonition Fatigue". For an article on reason for limiting the use of admonitions, see: [Harvard Business Review: Consumer Warning Labels Aren’t Working](https://hbr.org/2016/11/consumer-warning-labels-arent-working).

Admontions typically start with: _Tip_, _Note_, _Important_, _Caution_, or _Warning_.

For example:

> **Note**: This is a note; used for additional, indirectly related information.

> **Important**: This is a note that is important for users to read.

{{site.companyname}} documentation uses four levels of admonition:

1. **Note**: Use for additional, indirectly related information. Do not use where it is possible to reword or rewrite the content to incorporate the information.
2. **Important**: Use when ignoring the notice _may_ or _will_ lead to unexpected behavior.
3. **Caution**: Use when ignoring the notice _may_ lead to one or more of the following:

    - A significant increase in the risk of a security breach.
    - Create a security vulnerability.
    - Cause information loss.
    - System failure.
    - Worse outcomes than those listed here.

4. **Warning**: Use when ignoring the notice _will_ lead to one or more of the following:

    - A significant increase in the risk of a security breach.
    - Create a security vulnerability.
    - Cause information loss.
    - System failure.
    - Worse outcomes than those listed here.

### Useful general writing advice

The following pages provide advice on writing, including technical writing.

- For a brief overview of how users read (or don't read) content, see: [Content Design London: Readability Guidelines - How people read]({{readabilityGuidelines}}/content-design/how-people-read/).
- For points on how to structure content, see: [Content Design London: Readability Guidelines - Page design]({{readabilityGuidelines}}/content-design/page-design/).
- For general information on writing, covering a variety of subjects, see: [plainlanguage.gov: Mary Dash’s Writing Tips](https://plainlanguage.gov/resources/articles/dash-writing-tips/).

## Glossary

{% include misc/glossary.md %}
