This page outlines how you can provide feedback and contribute to TinyMCE documentation.

# Contributor Code of Conduct

For our Contributor Code of Conduct, visit our [Contributor Covenant Code of Conduct on GitHub](https://github.com/tinymce/tinymce-docs/blob/develop/CODE_OF_CONDUCT.md#contributor-covenant-code-of-conduct).

# How to contribute to TinyMCE’s documentation

We welcome people with technical writing experience to help make TinyMCE’s docs as useful to our community as possible. Although you don’t need to be an expert developer to contribute, a basic understanding of software development is helpful.

What is more important is your ability to articulate complex ideas. Our goal is to help developers understand TinyMCE’s functionality as quickly as possible.

Simply branch the [docs GitHub repository](https://github.com/tinymce/tinymce-docs) and submit a PR, or reach out to the [TinyMCE docs team](https://github.com/tinymce/tinymce-docs/issues/new?assignees=&labels=question&template=question.md) if you have a specific question.

# TinyMCE documentation tech stack

The documentation is built with [Antora](https://antora.org/) and text files are written in [AsciiDoc](https://asciidoc.org/). You will find the [repo here](https://github.com/tinymce/tinymce-docs).

## Highlighting

Code language syntax and associated elements are highlighted using an open and closing backtick. For example, this `object` is actually enclosed with backticks like this: `object`.

Highlight words relating specifically to executable parts of software languages. Keys and their values when pertaining to objects and methods (particularly the case with TinyMCE) should have backticks. We cannot cover every use case here and contributors need to use their best judgment.

## Code snippets

Code snippets should be complete, executable code blocks starting with the `tinymce` object. We write code snippets using [source blocks](https://docs.asciidoctor.org/asciidoc/latest/verbatim/source-blocks/). These start by specifying the `source` style and the code snippet language in square brackets to enable syntax highlighting. The language is typically html, css, js, or ts.

Include any key values pairs and method options that are required to enable a user to test the snippet in a local HTML file. You do not need to include the `html` surrounding the `tinymce` object that would be required to make the snippet work.

For example, this is good:
```js
  [source, js]
  ----
  tinymce.init({
    selector: 'textarea', // change this value according to your HTML
    plugins: 'codesample',
    toolbar: 'codesample',
  });
  ----
```

This is not:
```js
  [source, js]
  ----
  tinymce.init({
    ...
    plugins: 'codesample',
    toolbar: 'codesample'
    ...
  });
  ---
```

## URLs and links

Resources to be linked take the form of a URL following by the linked text between two brackets. Linking an external resource looks like this:

```
  hello, http://www.example.com[text to link] to the URL example.com.
```

## Live demos

New live demos can be added to the [modules/ROOT/examples/live-demos directory](modules/ROOT/examples/live-demos). It then can be referenced in your doc with the following code:

```
  liveDemo::{sub-directory-name}[]
```


## Adding metadata to a page

Every page should have a meta section immediately after the heading containing information that is both informative and system critical. If you are creating a page or editing one that currently has inadequate meta information, please read the comments next to the default meta fields below.

```
  :navtitle:          // Descriptive title for the navigation bar, if omitted nav defaults to title field.
  :description:       // Detailed description at page level for the header section under the title.
  :keywords:          // Comma-separated list of keywords in the content.
```

# Recommended tools

The following tools are recommended for significant edits to the documentation. The warnings and notifications from these tools should only be used as *guides*, not as *rules*.

- A Spelling Checker (US English). Note: Some IDE/text editor spelling
    checkers work well with Pascal-case, Camel-case, and Snake-case.

- Alex - [Alex.js integrations](https://alexjs.com/#integrations).

- Write Good - [Write good based
    plugins](https://github.com/btford/write-good#other-projects-using-write-good).

# Style guide

You are not required to know the style guide, **but** changes may be requested on GitHub pull requests to Tiny documentation where these guidelines are not met.

The Tiny documentation style guide is based on the [Readability Guidelines](https://readabilityguidelines.co.uk) provided by [Content Design London](https://contentdesign.london/usability/readability-guidelines/). We have chosen this guide because it’s:

- open to the community

- focused on readability.

The information in the following subsections gives an overview of key points and lists both exceptions and additions. Please follow the guidelines on this page when they differ from the linked information.

## Keep it simple

Use short, simple words where possible. Use formal language.

Do not use:

- Long sentences.

- Slang; such as *there you go*.

- Jargon; such as *leverage* and *streamline*.

- Ambiguous contractions; such as *there’d*, and *it’ll*.

- Latin terms; such as *i.e.*, *e.g.*, *etc.*, *vs.*, and *via*.

- Metaphors; such as *cherry picking* and *nutshell*.

- Complex or specialist terms; such as *chrome* (the toolbar, menu
    bar, status bar) and *upstream*.

For guidelines on using specialist terms, see: [Content Design London: Readability Guidelines - Specialist terms](https://readabilityguidelines.co.uk/clear-language/specialist-terms/).

For information on:

- Using simple words, see: [Content Design London: Readability Guidelines - Plain English](https://readabilityguidelines.co.uk/clear-language/plain-english/).

- Short, simple sentences, see: [Content Design London: Readability Guidelines - Simple sentences](https://readabilityguidelines.co.uk/clear-language/simple-sentences/).

- Words to avoid, such as jargon, metaphores, and Latin terms; see: [Content Design London: Readability Guidelines - Words to avoid](https://readabilityguidelines.co.uk/clear-language/words-to-avoid/).

For a short list of some commonly used Latin terms, see: [Australian Government Style Manual - Latin shortened forms](https://www.stylemanual.gov.au/format-writing-and-structure/clear-language-and-writing-style/plain-english-and-word-choice/latin-shortened-forms).

## Use US English (en\_US) spelling

Use United States English. For example:

- "behavior" rather than "behaviour".

- "canceled" rather than "cancelled".

## Use proper names for programs and languages

When referring to the name of a development language, use the proper name or the industry convention.

For example:

- "CSS" not "css"

- "jQuery" not "Jquery"

- "React" not "React-js"

When using these terms in code elements (\`) or pre blocks (\`\`\`), use standard syntax. Such as:

- `tinymce`

- `<html>`

- `var React = require('react');`

When referring to a program, use the proper name.

For example:

- "Google Chrome" not "Chrome"

- "Apache Tomcat" not "Tomcat"

- "TinyMCE" not "Tiny"

## TinyMCE or tinymce

Use the capitalized version of TinyMCE when referring to the open source project or the editor. "TinyMCE" is an abbreviation of "Tiny MoxieCode Editor", but is better known as TinyMCE.

Use lowercase when referring to the `tinymce` JavaScript object.

## Use Active voice not Passive voice

Use active voice. Passive voice decreases readability and comprehension.

For information on the difference between active and passive voice, see: [Grammar Girl: Active Voice Versus Passive Voice](https://www.quickanddirtytips.com/education/grammar/active-voice-versus-passive-voice).

## Titles and headings

Titles and headings should be:

- Descriptive but concise

- Written using Sentence-case capitalization.

Sentence case capitalization is more comfortable to read in technical documentation.

For guidelines on headings and titles, see: [Content Design London: Readability Guidelines - Headings and titles](https://readabilityguidelines.co.uk/content-design/headings-titles/).

## Using abbreviations, acronyms, and intialisms

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

## Adverbs

Avoid adverbs, such as: *very* and *usually*.

For examples and a definition of an adverb, see: [Cambridge Dictionary: Grammar - Adverbs](https://dictionary.cambridge.org/grammar/british-grammar/adverbs_2).

For (casual) information on removing adverbs, see: [Grammar Girl: How to Eliminate Adverbs](https://www.quickanddirtytips.com/education/grammar/how-to-eliminate-adverbs).

## Contractions

Avoid contractions, such as: *can’t*, *don’t*, *they’re*, and *could’ve*.

For information on contractions, see: [Content Design London: Readability Guidelines - Contractions](https://readabilityguidelines.co.uk/grammar-points/contractions/).

## Hyphens

Limit use of hyphens. Some general pointers:

- Only use a hyphen if the word or phrase is confusing without it.

- Make sure your hyphen usage is up to date.

- Be consistent with hyphen usage.

For guidelines on using hyphens, see: [Content Design London: Readability Guidelines - Hyphens and dashes](https://readabilityguidelines.co.uk/grammar-points/hyphens-and-dashes/).

## Pronouns

Avoid pronouns, such as: *we*, *you*, *their*, and *I*.

For examples and a definition of an pronoun, see: [Cambridge Dictionary: Grammar - Pronouns](https://dictionary.cambridge.org/grammar/british-grammar/pronouns_1).

For reasons to avoid pronouns, see: [Content Design London: Readability Guidelines - We, you, our, your, my](https://readabilityguidelines.co.uk/audiences-devices-channels/we-you-our-your-my/).

## First, Second, or Third Person Perspective

Write in a second person perspective, such as: *You*, and *your*. Remember to avoid using pronouns, including *you* and *your*.

For information on writing in a second person perspective, see: [Grammar Girl: First, Second, and Third Person](https://www.quickanddirtytips.com/education/grammar/first-second-and-third-person?page=1).

## Links and cross-references

When adding links or cross-references:

- Make link text meaningful.

- Avoid mid-sentence links.

- Match the destination content.

- Use sentence case.

For guidelines on adding links to the documentation, see: [Content Design London: Readability Guidelines - Links](https://readabilityguidelines.co.uk/content-design/links/).

## Images and icons

Avoid adding images to the documentation. They can quickly become outdated. Use a description or a "demo" instead.

When images are used, reuse existing images if possible. This includes icons.

Ensure a brief description of the image is provided in the alternative text attribute.

For information on providing useful alternative text for images, see: [WCAG 2.1 specification: G95 - Providing short text alternatives that provide a brief description of the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G95.html).

## Talking about the user interface

Tiny uses the Microsoft Style Guide for describing the user interface and interacting with the user interface. Some exceptions may exist in the glossary at the end of this page.

For guidelines on:

- Describing *interactions* with the user interface for a procedure or task, see: [Microsoft Style Guide: Describing interactions with UI](https://docs.microsoft.com/en-us/style-guide/procedures-instructions/describing-interactions-with-ui).

- Describing *interactions* with the user interface for a procedure or task with multiple input methods; for example, procedures that can be performed with a keyboard or a mouse; see: [Microsoft Style Guide: Describing alternative input methods - Multiple input methods and branching within procedures](https://docs.microsoft.com/en-us/style-guide/procedures-instructions/describing-alternative-input-methods#multiple-input-methods-and-branching-within-procedures).

- Referring to user interface elements in instructions or procedures, see: [Microsoft Style Guide: Formatting text in instructions](https://docs.microsoft.com/en-us/style-guide/procedures-instructions/formatting-text-in-instructions).

- Referring to the mouse and mouse-based interactions, such as "click" and "right mouse button"; see: [Microsoft Style Guide: Mouse and mouse interaction terms](https://docs.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/term-collections/mouse-mouse-interaction-terms).

- Referring to keyboard keys and keyboard shortcuts, see: [Microsoft Style Guide: Keys and keyboard shortcuts](https://docs.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/term-collections/keys-keyboard-shortcuts).

- Referring to touch interactions, such as "tap" and "swipe"; see: [Microsoft Style Guide: Describing alternative input methods - Pen-computing and touch procedures](https://docs.microsoft.com/en-us/style-guide/procedures-instructions/describing-alternative-input-methods#pen-computing-and-touch-procedures).

## Adding admonitions or notes

Avoid adding admonitions (also known as: *notices*, *notes*, *warnings*, or *callouts*) where possible. Over-use of admonitions may lead to what is sometimes referred to as "Admonition Fatigue". For an article on reason for limiting the use of admonitions, see: [Harvard Business Review: Consumer Warning Labels Aren’t Working](https://hbr.org/2016/11/consumer-warning-labels-arent-working).

Admontions typically start with: *Tip*, *Note*, *Important*, *Caution*, or *Warning*.

For example:

This is a note; used for additional, indirectly related information.

This is a note that is important for users to read.

Tiny documentation uses four levels of admonition:

1.  NOTE: Use for additional, indirectly related information. Do not use where it is possible to reword or rewrite the content to incorporate the information.

2.  IMPORTANT: Use when ignoring the notice *may* or *will* lead to unexpected behavior.

3.  CAUTION: Use when ignoring the notice *may* lead to one or more of the following:

    - A significant increase in the risk of a security breach.

    - A security vulnerability.

    - Information loss.

    - System failure.

    - Worse outcomes than those listed here.

4.  WARNING: Use when ignoring the notice *will* lead to one or more of the following:

    - A significant increase in the risk of a security breach.

    - A security vulnerability.

    - Information loss.

    - System failure.

    - Worse outcomes than those listed here.

## Useful general writing advice

The following pages provide advice on writing, including technical
writing.

- For a brief overview of how users read (or don’t read) content, see: [Content Design London: Readability Guidelines - How people read](https://readabilityguidelines.co.uk/content-design/how-people-read/).

- For points on how to structure content, see: [Content Design London: Readability Guidelines - Page design](https://readabilityguidelines.co.uk/content-design/page-design/).

- For general information on writing, covering a variety of subjects, see: [plainlanguage.gov: Mary Dash’s Writing Tips](https://plainlanguage.gov/resources/articles/dash-writing-tips/).

# Glossary

Accessible Rich Internet Applications (ARIA)
: Acronym for *Accessible Rich Internet Applications*. Spell out and describe on first mention within a section.

See: [MDN Web Docs - ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA).

add-on
: Do not use *add-on*. Use *"`plugin`"* instead.

anchor
: Use when describing the Anchor plugin or the technical insertion of an anchor tag into HTML. When talking with a business audience, use *bookmark* or add *bookmark* as a clarifier.

Application Programming Interface (API)  
: Use *API* in most circumstances. Spell it out on first mention only if the document is for a non-technical audience.

asynchronous, async  
: Use *asynchronous* Do not use *async*.

back end, back-end, backend  
: Do not use backend. Use *back end* as a noun. Use back-end as a compound adjective.

bookmark  
: A common term for an HTML anchor element. Use *bookmark* instead of anchor in content for a general audience. Do not use when referring to the anchor plugin.

control, such as control identifier  
: Do not use. Use the type of control, such as *Toolbar button* or *Menu item*

Cascading Style Sheets (CSS)  
: Capitalize references to the technique for adding formatting and styles to web content. Do not use *CSS* to refer to a specific cascading style sheet. Instead, use *CSS file* or *style sheet*.

channel  
: Use *channel* to describe the various CDN URLs that developers can use to source the TinyMCE JavaScript files.

For example: Load TinyMCE from the stable channel on Tiny Cloud by including the following script tag.

cloud  
: Use *cloud* as an adjective. Do not use as a noun (the cloud). Do not use cloud interchangeably with *internet*

configuration option, configuration setting, configuration parameter  
: Use *configuration option*. For example: *the `selector` configuration option*. This can be abbreviated to *option* in sequential mentions, such as: *the `selector` option*.

configuration, config  
: Use configuration. Do not abbreviate to *config*.

content delivery network (CDN)  
: Spell out and describe on first mention within a section.

content management system (CMS)  
: Spell out and describe on first mention within a section.

content security policy (CSP)  
: Spell out and describe on first mention within a section. See: [MDN Web Docs - Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP).

context menu  
: Use *context menu* in content for developers. Make it clear it refers to the shortcut menu activated using a mouse right-click.

cross-site scripting (XSS)  
: Spell out and describe on first mention within a section. See: [OWASP (Open Web Application Security Project) - Cross Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/).

digital asset management (DAM)  
: Spell out and describe on first mention within a section.

documentation, docs  
: Use *documentation*.

editable area, editor canvas, content area, editor content  
: Use *editor content* to refer to the content editing canvas.

emoji, emoticons  
: Do not use emoji (😄) or emoticons (`:-(`) in the documentation.

There may be exceptions on pages talking about emoji or emoticons.

Use the terms *emoji* and *emoticon* as required.

Ephox  
: Old business name phased out in 2018. Use *Tiny* or *Tiny Technologies Inc.*.

example, examples  
: Do not use as a heading, provide a detailed heading.

In text, use *The following example uses…* or *The following example shows…*.

exclamation points ("!")  
: Do not use in text, only use in code where required.

extension  
: Do not use. Use *plugin* instead.

execute/executed  
: Do not use. Use *run* (or *ran* for past-tense) instead.

front end, front-end, frontend  
: Do not use frontend. Use *front end* as a noun. Use front-end as a compound adjective.

HTML  
: Do not spell out. Do not use *html* (except in codeblocks).

JavaScript, JS  
: The correct capitalization is *JavaScript*. Do not use *Javascript* or *javascript*. Do not use *JS* unless it is referring to a specific library such as *PrismJS*

For example: Another popular JavaScript minification tool, UglifyJS2, will corrupt TinyMCE unless ASCII-only is set.

menu bar, menubar  
: Use *menu bar* as two words. Do not use *menubar* or *menu-bar* as a compound word.

plugin  
: The preferred way of referring to an add-on or extension for TinyMCE. Do not use *add-on*, *extension*, *app*, or *plug-in*.

premium features  
: *premium features* and not *Premium features*.

programmer  
: Do not use. Use *developer*.

question marks ("?")  
: Use questions sparingly. In general, user want us to give them answers. When a customer needs to make a decision, a question *may be* appropriate.

*Bad example:*

Why make TinyMCE mobile friendly?

*Good examples:*

- If you forgot your password, provide your secret answer.

- More nature themes are available online.

- Do you want to save your changes?

quickstart, quick start  
: Content to help developers get our products up and running quickly. Use *quickstart*.

rich text editor, rich-text editor, RTE  
: Most common way to refer to TinyMCE’s product category.

Use rich text editor rather than rich-text editor (even if the later may be more technically correct). Do not use RTE.

screen size, screensize  
: Use *screen size*.

SDK  
: Do not use. Use *Self-hosted installation*.

See or Refer to…  
: Use *see* for internal links, use *visit* for external links.

Such as: For information on creating links, see: &lt;link&gt;.

self-hosted  
: The preferred way to refer to an on-premises deployment of our technology.

self-hosted premium plugins  
: Preferred. Do not use *premium plugin SDKs*.

should or must  
: Avoid using *must* or *should*. Only use where it is unavoidable.

submenu  
: Use *submenu*. Do not use *sub-menu* or *sub menu*.

Software as a Service (SaaS)  
: Spell out on the first mention in a section for general audience. For a technical audience, it is always OK to use SaaS.

Do not capitalize as SAAS.

Do not hyphenate as a modifier, but include the abbreviated form in parentheses.

spell checking, spell checker, spell check  
: Do not use the compound words *spellcheck* or *spellchecker*

Do not hyphenate.

textarea, text box, textbox  
: Use *textarea* to refer to a multi-line text box in a form.

Tiny  
: Use to refer to the company or our entire solution/platform.

Do not use *Tiny* to refer to the core editor, which is *TinyMCE*.

Tiny 5.x, Tiny 6.0
: *Tiny* is not a product. Do not give it a version. Use the product name, such as TinyMCE 6.0 or TinyMCE 5.9.

Tiny Cloud  
: Correct way to refer to the Tiny Cloud service. Spell it out on all occasions.

For example: *Tiny Cloud* includes a fast content delivery network.

Tiny Technologies Inc.  
: *Tiny Technologies Inc.* is the full and correct business name for *Tiny*

Do not use *Ephox Corporation*.

TinyMCE  
: This is the JavaScript library for rich text editing.

Capitalize the *MCE* Do not use *Tinymce*. *tinymce* is allowed in code and codeblocks where required.

TinyMCE 5
: Correct way to refer to the 5.x releases of TinyMCE unless a specific version number (major.minor.patch) is *required*.

TinyMCE 5.x
: Do not use. Use *TinyMCE 5* or *version 5*. If necessary to specify the availability of a new feature or change in behavior, specify the minor version number such as TinyMCE 5.7.

TinyMCE 6
: Correct way to refer to the 6.x releases of TinyMCE unless a specific version number (major.minor.patch) is *required*.

TinyMCE Cloud  
: Do not use. Use *Tiny Cloud*.

UI component  
: Collective term for TinyMCE user interface elements, such as: *dialogs*, *toolbars*, and *toolbar buttons*.

UI element  
: Avoid using *UI element*.

URL, url, Url  
: Use *URL*. Do not spell out the acronym. Do not use *url* or *Url*.

user  
: Typically refers to the end user of TinyMCE (such as the content author).

Use *end user* when it is necessary to delineate between the developer as a user and the end user of TinyMCE.

Use *Integrator* or *developer* where appropriate.

user experience (UX), experience  
: Be careful to use *UX* and *UI* correctly as they are different. Spell out *user experience* to give it context.

Avoid using *experience*

Do not use *UI experience*

For example:

To give feedback on the TinyMCE user experience on mobile devices, complete this survey.

user interface (UI)  
: Acceptable to use *UI* in most communication. For content destined for non-technical users, spell out user interface (UI) the first time it used in the document.

Do not use *Ui* or *ui*

Do not use *UI experience*. It is either *user experience (UX)* OR *user interface (UI)*, but never both.

web  
: Do not use *web*. Use *Internet* for clarity. Can be used for terms such as *web server*.

Web Content Accessibility Guidelines (WCAG)  
: Acronym for *Web Content Accessibility Guidelines*. Spell out and describe on first mention within a section.

WYSIWYG  
: Avoid using *WYSIWYG*. Use *rich text editor*.

It stands for *what you see is what you get*. Make sure to use the acronym correctly, it is easy to misspell.
