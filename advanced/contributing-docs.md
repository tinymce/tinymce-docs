---
layout: default
title: Contribute to documentation
title_nav: Contribute to documentation
description_short: Contribute to TinyMCE's developer documentation.
description: Contribute to TinyMCE's developer documentation.
keywords: opensource oss contributors lgpl docs dox
---

This page outlines how you can provide feedback and contribute to TinyMCE documentation.

## How to contribute to TinyMCE's documentation

**TL;DR** A quick way to improve the docs is to click the "Was this article helpful?" and select "no". Then if you want to help more click the "opening an issue" link and submit a GitHub issue.

### So, how can you help?

We welcome people with technical writing experience to help make TinyMCE's docs as useful to our community as possible. Although you don't need to be an expert developer to contribute, a basic understanding of software development is helpful.

What is more important is your ability to articulate complex ideas. Our goal is to help developers understand TinyMCE's functionality as quickly as possible.

Simply branch the [docs GitHub repository](https://github.com/tinymce/tinymce-docs) and submit a PR, or reach out to the [TinyMCE docs team](mailto:marketing@tiny.cloud) if you have a specific question.

### TinyMCE documentation tech stack

The documentation is built with Jekyll. Text files are written in [Markdown](https://help.github.com/articles/markdown-basics/) and published on [GitHub](https://github.com/tinymce/tinymce-docs). You will find the [repo here](https://github.com/tinymce/tinymce-docs).

### Markdown & code syntax

The documentaiton is written in [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/). If you are not familiar with Markdown [read this](https://help.github.com/articles/markdown-basics/).

##### Highlighting

Code language syntax and associated elements are highlighted using an open and closing backtick. For example, this `object` is actually enclosed with backticks like this: \`object\`.

Highlight words relating specifically to executable parts of software languages. Keys and their values when pertaining to objects and methods (particularly the case with TinyMCE) should have backticks. We cannot cover every use case here and contributors need to use their best judgment. What is more important is your ability to articulate complex ideas. 

##### Code snippets

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

##### URLs and links

Resources to be linked take the form of placing the linked text between brackets and the URL between parenthesis. Linking an external resource looks like this:

```html
hello, [text to link](http://www.example.com) to the URL example.com.
```


##### Adding meta to a pages

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

### Style Guide

##### TinyMCE v. tinymce

Use the capitalized version of TinyMCE when referring to the open source project or the editor. Use lowercase when referring to the `tinymce` JavaScript object.

##### Title capitalization

For titles use "Sentence case capitalization". Sentence case capitalization is more comfortable to read in technical documentation.

##### Spelling

Use United States English. For example, behavior rather than behavior, and referring rather than referring.

##### Proper names

When referring to the name of a development language we use the proper name or, where appropriate, the industry convention. For example, HTML, CSS, JavaScript, jQuery, React, AngularJS (not HTML, css, Jquery or React-js.)

The exception to this rule is when we are talking about the code itself (see the note above about TinyMCE v. tinymce). For example, write "HTML is great" when talking about the HTML language, but write, "escape your `html`" when talking about action with or within a codebase.

## Contributor Code of Conduct

As contributors and maintainers of this project, and in the interest of fostering an open and welcoming community, we pledge to respect all people who contribute through reporting issues, to post feature requests, to update documentation, to submit pull requests or patches, and other activities.

We are committed to making participation in this project a harassment-free experience for everyone, regardless of the level of expertise, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, or nationality.

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery
* Personal attacks
* Trolling or insulting/derogatory comments
* Public or private harassment
* Publishing other's private information, such as physical or electronic addresses, without explicit permission
* Other unethical or unprofessional conduct

Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct. By adopting this Code of Conduct, project maintainers commit themselves to fairly and consistently applying these principles to every aspect of managing this project. Project maintainers who do not follow or enforce the Code of Conduct may be permanently removed from the project team.

This code of conduct applies both within project spaces and in public areas when an individual is representing the project or its community.

Instances of abuse, harassing, or otherwise-unacceptable behavior may be reported by opening an issue or contacting one or more of the project maintainers.

This Code of Conduct is adapted from the Contributor Covenant, version 1.2.0, available from http://contributor-covenant.org/version/1/2/0/
