---
layout: default
title: Accessibility Checker
title_nav: Accessibility Checker
description: Checks the contents of the editor for WCAG & Section 508 accessibility problems.
keywords: a11y accessibility WCAG
---

The `a11ychecker` plugin enables you to check the HTML for various WCAG & Section 508 accessibility problems. It has an auto repair feature that lets a user fix identified problems.

##### Example:

```js
tinymce.init({
    selector: 'textarea',
    plugins: 'a11ychecker',
    toolbar: 'a11ycheck'
});
```

### Rules

These are the various rules that are checked:

* Usage of paragraphs as headings
* Sequential headings
* Adjacent links
* Ordered list structure
* Unordered list structure
* Contrast ratio of the text
* Image ALT text
* Alt text filename
* Table caption
* Complex table summary
* Table caption and summary
* Table heading scope
* Table markup
* Table headers

## Downloading Accessibility Checker

A [TinyMCE Enterprise](http://www.tinymce.com/pricing/) subscription includes the ability to download and install the accessibility checker feature for the editor.

Accessibility checker is part of the demo [on the main page of TinyMCE site](https://www.tinymce.com/). For more information about the accessibility checker [see this blog post](https://go.tinymce.com/blog/tinymce-enterprise-update-benefits-accessibility-users-brings-atmentions/).
