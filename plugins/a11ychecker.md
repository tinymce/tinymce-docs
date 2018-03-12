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
    selector: "textarea",
    plugins: "a11ychecker",
    toolbar: "a11ycheck"
});
```

### Rules

These are the various rules that are checked:

#### Usage of paragraphs as headings

**Rule info:** This rule checks that you aren't using `p` tags instead of `h1`-`h6` tags for heading content. Not using correct heading markup will make it more difficult for assistive technologies to visually represent and navigate through your content.

[Link to specification](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H42).

#### Sequential headings

**Rule info:** This rule checks that headings are used sequentially, meaning that an `h1` heading should be followed by an `h2` heading, a `h4` heading should be followed by an `h5` heading and so on. You should never skip a level, like following an `h3` heading with an `h6` heading. Using sequential links will make it easier for assistive technology to parse your content.

#### Adjacent links

**Rule info:** This rule checks that links next to other links do not have the same href. For example if you have an image link and a text link with the same href they should be contained within the same `a` element and not in two different `a` elements. If the image and the text link are put in two separate elements it can be confusing for users of screen readers and other assistive technologies.

[Link to specification](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H2).

#### Ordered list structure

**Rule info:** This rule checks that an `ol` element is used for ordered lists. Do not use paragraphs beginning with numbers or roman numverals instead of an actual `ol` element containing `li` items. This is to simplify navigation and parsing of the content for users of assistive technologies.

#### Unordered list structure

**Rule info:** This rule checks that a `ul` element is used for unordered lists. Do not use paragraphs beginning with `*` or `-` or some similar character instead of an actual `ol` element containing `li` items. This is to simplify navigation and parsing of the content for users of assistive technologies.

#### Contrast ratio of the text

**Rule info:** This rule checks that the contrast ratio of the text is above the specified values (4.5:1 for normal text and 3:1 for large text). Text with a low contrast ratio is hard to read, especially for users with an impaired vision.

[Link to specification](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html).

#### Image ALT text

**Rule info:** This rule checks that all images have an alt text so screen readers and other assistive technologies can correctly present the content to your users that can't see the images visually. 

#### Alt text filename

**Rule info:** This rule checks that the alt text of you image isn't just the same as the filename of the image. 

#### Table caption

**Rule info:** This rule checks that all `table` elements have a caption that describes the data inside of the table to simplify parsing and navigation of the content for users of assistive technologies. 

[Link to specification](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H39).

#### Complex table summary

**Rule info:** This rule checks that all complex tables must have a `summary` attribute explaining to users of assistive technologies how to navigate through the data inside of the table. See the specification linked below for examples.

[Link to specification](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H73).

#### Table caption and summary

**Rule info:** This rule checks that the table caption and summary does not have the same text content. The caption should explain **what** the table is about while the summary should explain **how** to navigate the data inside of the table.

#### Table heading scope

**Rule info:** This rule checks that all table heading - `th` - elements has a `scope` attribute clarifying what scope the heading has inside of the `table`. The allowed values are `row`, `col`, `rowgroup`, and `colgroup`. This is important for users of assistive technologies to be able to parse your table data.

[Link to specification](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H63).

#### Table markup

**Rule info:** This rule checks that all `tables` contain both `td` and `th` elements.

[Link to specification](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H51).

#### Table headers

**Rule info:** This rule checks that all `table` elements contain at lease one table header - `th` - element.

[Link to specification](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F91).

### Options

### `a11ychecker_allow_decorative_images`

This configuration option sets whether the checker should allow decorative images (images with `alt=""` or `role="presentation"`).

**Type:** `boolean`

**Default value:** `false`

#### Example:

```js
tinymce.init({
    selector: "textarea",
    plugins: "a11ychecker",
    toolbar: "a11ycheck",
    a11ychecker_allow_decorative_images: true
});
```

### API

Accessibility Checker exposes couple of methods that can be called directly.

### `toggleaudit()`

Triggers accessibility dialog with the results of the audit and options to correct the problems, if any.

### `getReport()`

Conducts accessibility audit and reports about the results without triggering the dialog. The report represents an array of issues, each of which has details about:

* **severity** - *severity of the issue, might be either - info, warning or error*
* **description** - *brief description of the issue*
* **url** - *URL of the details page at W3 dedicated specifically to the given issue*
* **element** - *DOM element having the issue*

##### Example

```js
var issues = editor.plugins.a11ychecker.getReport();
```

## Downloading Accessibility Checker

A [TinyMCE Enterprise](https://www.tinymce.com/pricing/) subscription includes the ability to download and install the accessibility checker feature for the editor.

Accessibility checker is part of the demo [on the main page of TinyMCE site](https://www.tinymce.com/). For more information about the accessibility checker [see this blog post](https://go.tinymce.com/blog/tinymce-enterprise-update-benefits-accessibility-users-brings-atmentions/).
