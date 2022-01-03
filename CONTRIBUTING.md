# Contributing to the TinyMCE developer documentation

This page outlines how you can provide feedback and contribute to TinyMCE documentation.

## Contributor Code of Conduct

For our Contributor Code of Conduct, visit our [Contributor Covenant Code of Conduct on GitHub](https://github.com/tinymce/tinymce-docs/blob/develop/CODE_OF_CONDUCT.md#contributor-covenant-code-of-conduct).

## How to contribute to TinyMCE's documentation

We welcome people with technical writing experience to help make TinyMCE's docs as useful to our community as possible. Although you don't need to be an expert developer to contribute, a basic understanding of software development is helpful.

What is more important is your ability to articulate complex ideas. Our goal is to help developers understand TinyMCE's functionality as quickly as possible.

Simply branch the [docs GitHub repository](https://github.com/tinymce/tinymce-docs) and submit a PR, or reach out to the [TinyMCE docs team](https://github.com/tinymce/tinymce-docs/issues/new?assignees=&labels=question&template=question.md) if you have a specific question.

## TinyMCE documentation tech stack

The documentation is built with Jekyll. Text files are written in [kramdown](https://kramdown.gettalong.org/) and published on [GitHub](https://github.com/tinymce/tinymce-docs). You will find the [repo here](https://github.com/tinymce/tinymce-docs).

## Markdown & code syntax

The documentation is written in [kramdown Flavored Markdown](https://kramdown.gettalong.org/). If you are not familiar with kramdown [read this](https://kramdown.gettalong.org/quickref.html).

### Highlighting

Code language syntax and associated elements are highlighted using an open and closing backtick. For example, this `object` is actually enclosed with backticks like this: \`object\`.

Highlight words relating specifically to executable parts of software languages. Keys and their values when pertaining to objects and methods (particularly the case with TinyMCE) should have backticks. We cannot cover every use case here and contributors need to use their best judgment. What is more important is your ability to articulate complex ideas.

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

> **Note**: You are not required to know the style guide, **but** changes may be requested on GitHub pull requests to Tiny documentation where these guidelines are not met.

The Tiny documentation style guide is based on the Readability Guideline provided by Content Design London. We have chosen this guide because it's:

- open to the community
- focused on readability.

The information in the following subsections gives an overview of key points and lists both exceptions and additions. Please follow the guidelines on this page when they differ from the linked information.

For information the Readability Guidelines project, visit [Content Design London: Readability Guidelines](https://readabilityguidelines.co.uk/).

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

For guidelines on using specialist terms, see: [Content Design London: Readability Guidelines - Specialist terms](https://readabilityguidelines.co.uk/clear-language/specialist-terms/).

For information on:

- Using simple words, see: [Content Design London: Readability Guidelines - Plain English](https://readabilityguidelines.co.uk/clear-language/plain-english/).
- Short, simple sentences, see: [Content Design London: Readability Guidelines - Simple sentences](https://readabilityguidelines.co.uk/clear-language/simple-sentences/).
- Words to avoid, such as jargon, metaphores, and Latin terms; see: [Content Design London: Readability Guidelines - Words to avoid](https://readabilityguidelines.co.uk/clear-language/words-to-avoid/).

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

For guidelines on headings and titles, see: [Content Design London: Readability Guidelines - Headings and titles](https://readabilityguidelines.co.uk/content-design/headings-titles/).

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

For guidelines on using abbreviations, acronyms, and intialisms; see: [Content Design London: Readability Guidelines - Abbreviations and acronyms](https://readabilityguidelines.co.uk/grammar-points/abbreviations-and-acronyms/).

### Adverbs

Avoid adverbs, such as: _very_ and _usually_.

For examples and a definition of an adverb, see: [Cambridge Dictionary: Grammar - Adverbs](https://dictionary.cambridge.org/grammar/british-grammar/adverbs_2).

For (casual) information on removing adverbs, see: [Grammar Girl: How to Eliminate Adverbs](https://www.quickanddirtytips.com/education/grammar/how-to-eliminate-adverbs).

### Contractions

Avoid contractions, such as: _can't_, _don't_, _they're_, and _could've_.

For information on contractions, see: [Content Design London: Readability Guidelines - Contractions](https://readabilityguidelines.co.uk/grammar-points/contractions/).

### Hyphens

Limit use of hyphens. Some general pointers:

- Only use a hyphen if the word or phrase is confusing without it.
- Make sure your hyphen usage is up to date.
- Be consistent with hyphen usage.

For guidelines on using hyphens, see: [Content Design London: Readability Guidelines - Hyphens and dashes](https://readabilityguidelines.co.uk/grammar-points/hyphens-and-dashes/).

### Pronouns

Avoid pronouns, such as: _we_, _you_, _their_, and _I_.

For examples and a definition of an pronoun, see: [Cambridge Dictionary: Grammar - Pronouns](https://dictionary.cambridge.org/grammar/british-grammar/pronouns_1).

For reasons to avoid pronouns, see: [Content Design London: Readability Guidelines - We, you, our, your, my](https://readabilityguidelines.co.uk/audiences-devices-channels/we-you-our-your-my/).

### First, Second, or Third Person Perspective

Write in a second person perspective, such as: _You_, and _your_. Remember to avoid using pronouns, including _you_ and _your_.

For information on writing in a second person perspective, see: [Grammar Girl: First, Second, and Third Person](https://www.quickanddirtytips.com/education/grammar/first-second-and-third-person?page=1).

### Links and cross-references

When adding links or cross-references:

- Make link text meaningful.
- Avoid mid-sentence links.
- Match the destination content.
- Use sentence case.

For guidelines on adding links to the documentation, see: [Content Design London: Readability Guidelines - Links](https://readabilityguidelines.co.uk/content-design/links/).

### Images and icons

Avoid adding images to the documentation. They can quickly become outdated. Use a description or a "demo" instead.

When images are used, reuse existing images if possible. This includes icons.

Ensure a brief description of the image is provided in the alternative text attribute.

For information on providing useful alternative text for images, see: [WCAG 2.1 specification: G95 - Providing short text alternatives that provide a brief description of the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G95.html).

### Talking about the user interface

Tiny uses the Microsoft Style Guide for describing the user interface and interacting with the user interface. Some exceptions may exist in the glossary at the end of this page.

For guidelines on:

- Describing _interactions_ with the user interface for a procedure or task, see: [Microsoft Style Guide: Describing interactions with UI](https://docs.microsoft.com/en-us/style-guide/procedures-instructions/describing-interactions-with-ui).
- Describing _interactions_ with the user interface for a procedure or task with multiple input methods; for example, procedures that can be performed with a keyboard or a mouse; see: [Microsoft Style Guide: Describing alternative input methods - Multiple input methods and branching within procedures](https://docs.microsoft.com/en-us/style-guide/procedures-instructions/describing-alternative-input-methods#multiple-input-methods-and-branching-within-procedures).
- Referring to user interface elements in instructions or procedures, see: [Microsoft Style Guide: Formatting text in instructions](https://docs.microsoft.com/en-us/style-guide/procedures-instructions/formatting-text-in-instructions).
- Referring to the mouse and mouse-based interactions, such as "click" and "right mouse button"; see: [Microsoft Style Guide: Mouse and mouse interaction terms](https://docs.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/term-collections/mouse-mouse-interaction-terms).
- Referring to keyboard keys and keyboard shortcuts, see: [Microsoft Style Guide: Keys and keyboard shortcuts](https://docs.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/term-collections/keys-keyboard-shortcuts).
- Referring to touch interactions, such as "tap" and "swipe"; see: [Microsoft Style Guide: Describing alternative input methods - Pen-computing and touch procedures](https://docs.microsoft.com/en-us/style-guide/procedures-instructions/describing-alternative-input-methods#pen-computing-and-touch-procedures).

### Adding admonitions or notes

Avoid adding admonitions (also known as: _notices_, _notes_, _warnings_, or _callouts_) where possible. Over-use of admonitions may lead to what is sometimes referred to as "Admonition Fatigue". For an article on reason for limiting the use of admonitions, see: [Harvard Business Review: Consumer Warning Labels Aren’t Working](https://hbr.org/2016/11/consumer-warning-labels-arent-working).

Admontions typically start with: _Tip_, _Note_, _Important_, _Caution_, or _Warning_.

For example:

> **Note**: This is a note; used for additional, indirectly related information.

> **Important**: This is a note that is important for users to read.

Tiny documentation uses four levels of admonition:

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

- For a brief overview of how users read (or don't read) content, see: [Content Design London: Readability Guidelines - How people read](https://readabilityguidelines.co.uk/content-design/how-people-read/).
- For points on how to structure content, see: [Content Design London: Readability Guidelines - Page design](https://readabilityguidelines.co.uk/content-design/page-design/).
- For general information on writing, covering a variety of subjects, see: [plainlanguage.gov: Mary Dash’s Writing Tips](https://plainlanguage.gov/resources/articles/dash-writing-tips/).

## Glossary

Accessible Rich Internet Applications (ARIA)
: Acronym for _Accessible Rich Internet Applications_ Spell out and describe on first mention within a section.

    See: [MDN Web Docs - ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA).

add-on
: Do not use _add-on_. Use _“plugin”_ instead.

anchor
: Use when describing the Anchor plugin or the technical insertion of an anchor tag into HTML. When talking with a business audience, use _bookmark_ or add _bookmark_ as a clarifier.

Application Programming Interface (API)
: Use _API_ in most circumstances. Spell it out on first mention only if the document is for a non-technical audience.

asynchronous, async
: Use _asynchronous_ Do not use _async_.

back end, back-end, backend
: Do not use backend. Use _back end_ as a noun. Use back-end as a compound adjective.

bookmark
: A common term for an HTML anchor element. Use _bookmark_ instead of anchor in content for a general audience. Do not use when referring to the anchor plugin.

control, such as control identifier
: Do not use. Use the type of control, such as _Toolbar button_ or _Menu item_

Cascading Style Sheets (CSS)
: Capitalize references to the technique for adding formatting and styles to web content. Do not use _CSS_ to refer to a specific cascading style sheet. Instead, use _CSS file_ or _style sheet_.

channel
: Use _channel_ to describe the various CDN URLs that developers can use to source the TinyMCE JavaScript files.

    For example: Load TinyMCE from the stable channel on Tiny Cloud by including the following script tag.

cloud
: Use _cloud_ as an adjective. Do not use as a noun (the cloud). Do not use cloud interchangeably with _internet_

configuration option, configuration setting, configuration parameter
: Use _configuration option_. For example: _the `selector` configuration option_. This can be abbreviated to _option_ in sequential mentions, such as: _the `selector` option_.

configuration, config
: Use configuration. Do not abbreviate to _config_.

content delivery network (CDN)
: Spell out and describe on first mention within a section.

content management system (CMS)
: Spell out and describe on first mention within a section.

content security policy (CSP)
: Spell out and describe on first mention within a section. See: [MDN Web Docs - Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP).

context menu
: Use _context menu_ in content for developers. Make it clear it refers to the shortcut menu activated using a mouse right-click.

cross-site scripting (XSS)
: Spell out and describe on first mention within a section. See: [OWASP (Open Web Application Security Project) - Cross Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/).

digital asset management (DAM)
: Spell out and describe on first mention within a section.

documentation, docs
: Use _documentation_.

editable area, editor canvas, content area, editor content
: Use _editor content_ to refer to the content editing canvas.

emoji, emoticons
: Do not use emoji (😄) or emoticons (`:-(`) in the documentation.

    There may be exceptions on pages talking about emoji or emoticons.

    Use the terms _emoji_ and _emoticon_ as required.

Ephox
: Old business name phased out in 2018. Use _Tiny_ or _Tiny Technologies Inc._.

example, examples
: Do not use as a heading, provide a detailed heading.

    In text, use _The following example uses..._ or _The following example shows..._.

exclamation points ("!")
: Do not use in text, only use in code where required.

extension
: Do not use. Use _plugin_ instead.

execute/executed
: Do not use. Use _run_ (or _ran_ for past-tense) instead.

front end, front-end, frontend
: Do not use frontend. Use _front end_ as a noun. Use front-end as a compound adjective.

HTML
: Do not spell out. Do not use _html_ (except in codeblocks).

JavaScript, JS
: The correct capitalization is _JavaScript_ Do not use _Javascript_ or _javascript_ Do not use _JS_ unless it is referring to a specific library such as _PrismJS_

    For example: Another popular JavaScript minification tool, UglifyJS2, will corrupt TinyMCE unless ASCII-only is set.

menu bar, menubar
: Use _menu bar_ as two words. Do not use _menubar_ or _menu-bar_ as a compound word.

plugin
: The preferred way of referring to an add-on or extension for TinyMCE. Do not use _add-on_, _extension_, _app_, or _plug-in_.

premium features
: _premium features_ and not _Premium features_.

programmer
: Do not use. Use _developer_.

question marks ("?")
: Use questions sparingly. In general, user want us to give them answers. When a customer needs to make a decision, a question _may be_ appropriate.

    _Bad example:_

    Why make TinyMCE mobile friendly?

    _Good examples:_

    * If you forgot your password, provide your secret answer.
    * More nature themes are available online.
    * Do you want to save your changes?

quickstart, quick start
: Content to help developers get our products up and running quickly. Use _quickstart_.

rich text editor, rich-text editor, RTE
: Most common way to refer to TinyMCE's product category.

    Use rich text editor rather than rich-text editor (even if the later may be more technically correct). Do not use RTE.

screen size, screensize
: Use _screen size_.

SDK
: Do not use. Use _Self-hosted installation_.

See or Refer to...
: Use _see_ for internal links, use _visit_ for external links.

    Such as: For information on creating links, see: &#60;link&#62;.

self-hosted
: The preferred way to refer to an on-premises deployment of our technology.

self-hosted premium plugins
: Preferred. Do not use _premium plugin SDKs_.

should or must
: Avoid using _must_ or _should_ Only use where it is unavoidable.

submenu
: Use _submenu_ Do not use _sub-menu_ or _sub menu_.

Software as a Service (SaaS)
: Spell out on the first mention in a section for general audience. For a technical audience, it is always OK to use SaaS.

    Do not capitalize as SAAS.

    Do not hyphenate as a modifier, but include the abbreviated form in parentheses.

spell checking, spell checker, spell check
: Do not use the compound words _spellcheck_ or _spellchecker_

    Do not hyphenate.

textarea, text box, textbox
: Use _textarea_ to refer to a multi-line text box in a form.

Tiny
: Use to refer to the company or our entire solution/platform.

    Do not use _Tiny_ to refer to the core editor, which is _TinyMCE_.

Tiny 4.x, Tiny 5.0
: _Tiny_ is not a product. Do not give it a version. Use the product name, such as TinyMCE 5.0 or TinyMCE 4.9.

Tiny Cloud
: Correct way to refer to the Tiny Cloud service. Spell it out on all occasions.

    For example: _Tiny Cloud_ includes a fast content delivery network.

Tiny Technologies Inc.
: _Tiny Technologies Inc._ is full and correct business name for _Tiny_

    Do not use _Ephox Corporation_.

TinyMCE
: This is the JavaScript library for rich text editing.

    Capitalize the _MCE_ Do not use _Tinymce_ _tinymce_ is allowed in code and codeblocks where required.

TinyMCE 4
: Correct way to refer to the 4.x releases of TinyMCE unless a specific version number (major.minor.patch) is _required_.

TinyMCE 4.x
: Do not use. Use _TinyMCE 4_ or _version 4_ If necessary to specify the availability of a new feature or change in behavior, specify the minor version number such as TinyMCE 4.7.

TinyMCE 5
: Correct way to refer to the 5.x releases of TinyMCE unless a specific version number (major.minor.patch) is _required_.

TinyMCE Cloud
: Do not use. Use _Tiny Cloud_.

UI component
: Collective term for TinyMCE user interface elements, such as: _dialogs_, _toolbars_, and _toolbar buttons_.

UI element
: Avoid using _UI element_.

URL, url, Url
: Use _URL_ Do not spell out the acronym. Do not use _url_ or _Url_.

user
: Typically refers to the end user of TinyMCE (such as the content author).

    Use _end user_ when it is necessary to delineate between the developer as a user and the end user of TinyMCE.

    Use _Integrator_ or _developer_ where appropriate.

user experience (UX), experience
: Be careful to use _UX_ and _UI_ correctly as they are different. Spell out _user experience_ to give it context.

    Avoid using _experience_

    Do not use _UI experience_

    For example:

    To give feedback on the TinyMCE user experience on mobile devices, complete this survey.

user interface (UI)
: Acceptable to use _UI_ in most communication. For content destined for non-technical users, spell out user interface (UI) the first time it used in the document.

    Do not use _Ui_ or _ui_

    Do not use _UI experience_ It is either _user experience (UX)_ OR _user interface (UI)_, but never both.

web
: Do not use _web_ Use _Internet_ for clarity. Can be used for terms such as _web server_.

Web Content Accessibility Guidelines (WCAG)
: Acronym for _Web Content Accessibility Guidelines_ Spell out and describe on first mention within a section.

WYSIWYG
: Avoid using _WYSIWYG_ Use _rich text editor_

    It stands for _what you see is what you get_ Make sure to use the acronym correctly, it is easy to misspell.

