This page provides guidance on submitting feedback and contributing to TinyMCE documentation.

# Contributor Code of Conduct

To review the Contributor Code of Conduct, visit the [Contributor Covenant Code of Conduct on GitHub](https://github.com/tinymce/tinymce-docs/blob/develop/CODE_OF_CONDUCT.md#contributor-covenant-code-of-conduct).

# Contributing to TinyMCE documentation

Contributions from individuals with technical writing experience are encouraged to support the clarity and usefulness of the TinyMCE documentation. While expertise in software development is not required, a basic understanding is beneficial.

The primary requirement is the ability to communicate complex concepts clearly. The goal is to help developers understand and apply TinyMCE functionality efficiently.

To contribute, create a branch from the [docs GitHub repository](https://github.com/tinymce/tinymce-docs) and submit a pull request (PR). For documentation-specific questions, open an issue using the [TinyMCE docs team contact form](https://github.com/tinymce/tinymce-docs/issues/new?assignees=&labels=question&template=question.md).

# TinyMCE documentation tech stack

The documentation is built with [Antora](https://antora.org/), and text content is authored in [AsciiDoc](https://asciidoc.org/). The source repository is available on GitHub: [tinymce-docs](https://github.com/tinymce/tinymce-docs).

## Syntax highlighting

Inline code elements must be enclosed in backticks. For example, to highlight `object`, use the following syntax:

Highlight keywords that refer to executable parts of a language. Keys and values used in objects and method options (common in TinyMCE) should also be enclosed in backticks. Exercise judgment for other cases not explicitly covered here.

## Code snippets

Code snippets must be complete, executable blocks that begin with the `tinymce` object. Snippets are formatted using [AsciiDoc source blocks](https://docs.asciidoctor.org/asciidoc/latest/verbatim/source-blocks/), which start with a `[source,<language>]` declaration. Supported languages include `html`, `css`, `js`, and `ts`.

Each snippet must include the key-value pairs and method options necessary to run the example in a local HTML file. It is not necessary to include the full HTML structure around the `tinymce` object.

**Valid example:**
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

**Invalid example:**
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

Resources must be linked using a URL followed by the linked text in square brackets. External links are formatted as follows:

```
  hello, http://www.example.com[text to link] to the URL example.com.
```

## Live demos

New live demos can be added to the [`modules/ROOT/examples/live-demos`](modules/ROOT/examples/live-demos) directory. These demos can then be referenced in documentation using:

```
  liveDemo::{sub-directory-name}[]
```


## Adding metadata to a page

Each page must include a metadata section immediately following the top-level heading. This section contains essential system-level information. When creating or updating a page, ensure that the following meta fields are present and accurate:

```
  :navtitle:          // Descriptive title for the navigation bar. If omitted, defaults to the value of the `title` field.
  :description:       // Detailed description at page header section.
  :keywords:          // Comma-separated list of relevant keywords.
```

# Recommended tools

The following tools are recommended for significant documentation contributions. The feedback provided by these tools should serve as guidance rather than strict requirements:

- A US English spelling checker. Many IDEs and text editors support spell checking for PascalCase, camelCase, and snake_case.

- Alex - [Alex.js integrations](https://alexjs.com/#integrations).

- Write Good - [Write good based
    plugins](https://github.com/btford/write-good#other-projects-using-write-good).

# Style guide

Familiarity with the style guide is not required; however, edits may be requested on pull requests if content does not align with documentation standards.

The TinyMCE documentation style guide is based on the [Readability Guidelines](https://readabilityguidelines.co.uk) provided by [Content Design London](https://contentdesign.london/usability/readability-guidelines/). This guide was selected due to its community-driven approach and strong focus on readability.

The following subsections provide key highlights, exceptions, and additions to the source guidelines. When inconsistencies arise, defer to the guidelines listed on this page.

## Keep it simple

Favor short, simple words. Use formal language.

Avoid the following:

- Slang (e.g., *there you go*)

- Jargon (e.g., *leverage*, *streamline*)

- Ambiguous contractions (e.g., *there’d*, *it’ll*)

- Latin terms (e.g., *i.e.*, *e.g.*, *etc.*, *vs.*, *via*)

- Metaphors (e.g., *cherry picking*, *nutshell*)

- Complex or specialist terms (e.g., *chrome* as in UI elements, *upstream*)

For guidelines on using specialist terms, see: [Content Design London: Readability Guidelines - Specialist terms](https://readabilityguidelines.co.uk/clear-language/specialist-terms/).

For information on:

- Using simple words, see: [Content Design London: Readability Guidelines - Plain English](https://readabilityguidelines.co.uk/clear-language/plain-english/).

- Short, simple sentences, see: [Content Design London: Readability Guidelines - Simple sentences](https://readabilityguidelines.co.uk/clear-language/simple-sentences/).

- Words to avoid, such as jargon, metaphores, and Latin terms; see: [Content Design London: Readability Guidelines - Words to avoid](https://readabilityguidelines.co.uk/clear-language/words-to-avoid/).

For a short list of some commonly used Latin terms, see: [Australian Government Style Manual - Latin shortened forms](https://www.stylemanual.gov.au/format-writing-and-structure/clear-language-and-writing-style/plain-english-and-word-choice/latin-shortened-forms).

## Use US English (en_US) spelling

Use United States English spelling conventions. For example:

- "behavior" instead of "behaviour"

- "canceled" instead of "cancelled"

## Use proper names for programs and languages

Always refer to development languages and software using their proper names or recognized industry conventions.

Correct examples include:

- "CSS" not "css"

- "jQuery" not "Jquery"

- "React" not "React-js"

When referencing code elements (`` ` ``) or fenced code blocks (`` ``` ``), use standard syntax. For example:

- `tinymce`

- `<html>`

- `var React = require('react');`

When referring to software programs, use their full, proper names. For example:

For example:

- "Google Chrome" not "Chrome"

- "Apache Tomcat" not "Tomcat"

- "TinyMCE" not "Tiny"

## TinyMCE or tinymce

Use the capitalized form **TinyMCE** when referring to the open source project or the editor interface. TinyMCE is derived from "Tiny MoxieCode Editor," but is more commonly known by its abbreviation.

Use lowercase when referring to the **`tinymce`** JavaScript object.

## Use active voice, not passive voice

Use active voice to improve readability and comprehension. Passive constructions should be avoided unless grammatically necessary.

For a detailed explination, see: [Grammar Girl: Active Voice Versus Passive Voice](https://www.quickanddirtytips.com/education/grammar/active-voice-versus-passive-voice).

## Titles and headings

Titles and headings must be:

- Descriptive yet concise

- Written in sentence case capitalization.

Sentence case capitalization improves readability in technical documentation.

For additional guidence, see: [Content Design London: Readability Guidelines - Headings and titles](https://readabilityguidelines.co.uk/content-design/headings-titles/).

## Using abbreviations, acronyms, and intialisms

General guidelines:

- Do not use periods or spaces in abbreviations.

- Write out "for example" and "that is" in full (not "e.g." or "i.e.").

- When the acronym is more familiar than its expanded form, use the acronym.

- Use all capital letters for initialisms (e.g., HTML, CSS).

- Use an initial capital letter for acronyms (e.g., AsciiDoc, Antora).

- Capitalize single-letter expressions (e.g., X-axis, Y-coordinate).

- Provide the full form of any abbreviation or acronym on first use.

- When clarity is critical, consider repeating the full form with each usage.

For guidelines on using abbreviations, acronyms, and intialisms; see: [Content Design London: Readability Guidelines - Abbreviations and acronyms](https://readabilityguidelines.co.uk/grammar-points/abbreviations-and-acronyms/).

## Adverbs

Avoid adverbs such as *very*, *usually*, *quickly*, and *clearly*, unless necessary for precision.

For examples and a definition of an adverb, see: [Cambridge Dictionary: Grammar - Adverbs](https://dictionary.cambridge.org/grammar/british-grammar/adverbs_2).

For (casual) information on removing adverbs, see: [Grammar Girl: How to Eliminate Adverbs](https://www.quickanddirtytips.com/education/grammar/how-to-eliminate-adverbs).

## Contractions

Avoid contractions. Use full word forms to improve clarity and consistency in technical documentation.

- Examples to avoid include: *can’t*, *don’t*, *they’re*, *could’ve*.

For information on contractions, see: [Content Design London: Readability Guidelines - Contractions](https://readabilityguidelines.co.uk/grammar-points/contractions/).

## Hyphens

Use hyphens only when necessary to avoid confusion or ambiguity. Follow current usage standards and remain consistent throughout the content.

General principles:

- Use a hyphen if omitting it would cause confusion.

- Avoid outdated or unnecessary hyphenation.

- Maintain consistent usage patterns across similar terms.

For guidelines on using hyphens, see: [Content Design London: Readability Guidelines - Hyphens and dashes](https://readabilityguidelines.co.uk/grammar-points/hyphens-and-dashes/).

## Pronouns

Avoid pronouns, such as *we*, *you*, *their*, and *I*.

For examples and a definition of an pronoun, see: [Cambridge Dictionary: Grammar - Pronouns](https://dictionary.cambridge.org/grammar/british-grammar/pronouns_1).

For reasons to avoid pronouns, see: [Content Design London: Readability Guidelines - We, you, our, your, my](https://readabilityguidelines.co.uk/audiences-devices-channels/we-you-our-your-my/).

## First, second, or third person perspective

Documentation should avoid using any narrative perspective that requires pronouns. Although second person (*you*, *your*) is often used in general guidance, pronouns should still be excluded for clarity and consistency.

For an explanation of narrative perspectives, see: [Grammar Girl: First, Second, and Third Person](https://www.quickanddirtytips.com/education/grammar/first-second-and-third-person?page=1).

## Links and cross-references

When adding links or cross-references:

- Use meaningful and descriptive link text.

- Avoid placing links mid-sentence.

- Ensure link text accurately matches the destination content.

- Use sentence case for link text.

For guidelines on adding links to the documentation, see: [Content Design London: Readability Guidelines - Links](https://readabilityguidelines.co.uk/content-design/links/).

## Images and icons

Avoid adding images unless necessary. Images may become outdated quickly and often require maintenance. When applicable, replace images with text descriptions or live demos.

When images are required:

- Reuse existing images when possible (including icons).

- Always include descriptive alternative text using the `alt` attribute.

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
