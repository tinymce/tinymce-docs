---
layout: default
title: Accessibility Checker
title_nav: Accessibility Checker
description: Checks the contents for Accessibility problems.
keywords: a11y accessibility
---

The `a11ychecker` plugin enables you to check the HTML for various accessibility problems. It has an auto repair feature that lets you fix the found problems.

#### Example:

```js
tinymce.init({
    selector: "textarea",
    plugins: "a11ychecker",
    toolbar: "a11ycheck"
});
```

#### Rules

These are the various rules that are being checked:

* Usage of paragraphs as headings
* Sequential headings
* Adjacent links
* Ordered list structure
* Unordered list structure
* Contrast ratio of the text.
* Image alt text
* Alt text filename
* Table caption
* Complex table summary
* Table Caption and summary
* Table heading scope
* Table markup
* Table Headers

## Downloading Accessibility Checker

A [TinyMCE Enterprise](http://www.tinymce.com/pricing/) subscription includes the ability to download and install the accessibility checker feature for the editor.
