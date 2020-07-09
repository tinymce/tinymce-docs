---
layout: default
title: Accessibility Checker plugin
title_nav: Accessibility Checker
description: Checks the contents of the editor for WCAG & Section 508 accessibility problems.
keywords: a11y accessibility WCAG
---

{{site.premiumplugin}}

The `a11ychecker` premium plugin enables you to check the HTML for various WCAG & Section 508 accessibility problems. It has an auto repair feature that lets a user fix identified problems.

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

<a class="anchor" id="D1"></a>
<h4><a class="anchorable" href="#D1">Usage of paragraphs as headings</a></h4>

**Rule info:** This rule checks that you aren't using `p` tags instead of `h1`-`h6` tags for heading content. Not using correct heading markup will make it more difficult for assistive technologies to visually represent and navigate through your content.

[Link to specification](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H42).

<a class="anchor" id="D2"></a>
<h4><a class="anchorable" href="#D2">Sequential headings</a></h4>

**Rule info:** This rule checks that headings are used sequentially, meaning that an `h1` heading should be followed by an `h2` heading, a `h4` heading should be followed by an `h5` heading and so on. You should never skip a level, like following an `h3` heading with an `h6` heading. Using sequential links will make it easier for assistive technology to parse your content.

<a class="anchor" id="D3"></a>
<h4><a class="anchorable" href="#D3">Adjacent links</a></h4>

**Rule info:** This rule checks that links next to other links do not have the same href. For example if you have an image link and a text link with the same href they should be contained within the same `a` element and not in two different `a` elements. If the image and the text link are put in two separate elements it can be confusing for users of screen readers and other assistive technologies.

[Link to specification](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H2).

<a class="anchor" id="D4O"></a>
<h4><a class="anchorable" href="#D4O">Ordered list structure</a></h4>

**Rule info:** This rule checks that an `ol` element is used for ordered lists. Do not use paragraphs beginning with numbers or roman numerals instead of an actual `ol` element containing `li` items. This is to simplify navigation and parsing of the content for users of assistive technologies.

<a class="anchor" id="D4U"></a>
<h4><a class="anchorable" href="#D4U">Unordered list structure</a></h4>

**Rule info:** This rule checks that a `ul` element is used for unordered lists. Do not use paragraphs beginning with `*` or `-` or some similar character instead of an actual `ol` element containing `li` items. This is to simplify navigation and parsing of the content for users of assistive technologies.

<a class="anchor" id="D5"></a>
<a class="anchor" id="D5A"></a>
<a class="anchor" id="D5B"></a>
<h4><a class="anchorable" href="#D5">Contrast ratio of the text</a></h4>

**Rule info:** This rule checks that the contrast ratio of the text is above the specified values (4.5:1 for normal text and 3:1 for large text). Text with a low contrast ratio is hard to read, especially for users with an impaired vision.

[Link to specification](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html).

<a class="anchor" id="I1"></a>
<h4><a class="anchorable" href="#I1">Image ALT text</a></h4>

**Rule info:** This rule checks that all images have an alt text so screen readers and other assistive technologies can correctly present the content to your users that can't see the images visually.

<a class="anchor" id="I2"></a>
<h4><a class="anchorable" href="#I2">Alt text filename</a></h4>

**Rule info:** This rule checks that the alt text of you image isn't just the same as the filename of the image.

<a class="anchor" id="T1"></a>
<h4><a class="anchorable" href="#T1">Table caption</a></h4>

**Rule info:** This rule checks that all `table` elements have a caption that describes the data inside of the table to simplify parsing and navigation of the content for users of assistive technologies.

[Link to specification](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H39).

<a class="anchor" id="T2"></a>
<h4><a class="anchorable" href="#T2">Complex table summary</a></h4>

**Rule info:** This rule checks that all complex tables must have a `summary` attribute explaining to users of assistive technologies how to navigate through the data inside of the table. See the specification linked below for examples.

[Link to specification](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H73).

<a class="anchor" id="T3"></a>
<h4><a class="anchorable" href="#T3">Table caption and summary</a></h4>

**Rule info:** This rule checks that the table caption and summary does not have the same text content. The caption should explain **what** the table is about while the summary should explain **how** to navigate the data inside of the table.

<a class="anchor" id="T4A"></a>
<h4><a class="anchorable" href="#T4A">Table markup</a></h4>

**Rule info:** This rule checks that all `tables` contain both `td` and `th` elements.

[Link to specification](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H51).

<a class="anchor" id="T4B"></a>
<h4><a class="anchorable" href="#T4B">Table headers</a></h4>

**Rule info:** This rule checks that all `table` elements contain at lease one table header - `th` - element.

[Link to specification](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F91).

<a class="anchor" id="T4C"></a>
<h4><a class="anchorable" href="#T4C">Table heading scope</a></h4>

**Rule info:** This rule checks that all table heading - `th` - elements has a `scope` attribute clarifying what scope the heading has inside of the `table`. The allowed values are `row`, `col`, `rowgroup`, and `colgroup`. This is important for users of assistive technologies to be able to parse your table data.

[Link to specification](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H63).

<a class="anchor" id="H93"></a>
<h4><a class="anchorable" href="#H93">IDs must be unique</a></h4>

**Rule info:** This rule checks that all `id` attributes are unique in the editor. Duplicate `id` attributes are known to cause problems for assistive technologies when they are trying to parse content.

[Link to specification](https://www.w3.org/TR/WCAG20-TECHS/H93.html).

### Options

{% assign includedSection = 'a11yPlugin' %}
#{% include configuration/a11y_advanced_options.md %}
{% assign includedSection = false %}

### `a11ychecker_allow_decorative_images`

This option sets whether the Accessibility Checker should allow decorative images. When this option is set to `true`, a decorative image must have **both**:

- An empty alternative text attribute.
- The `role="presentation"` attribute.

For example:

```html
<img src="my-image.png" role="presentation" alt="" />
```

If `a11ychecker_allow_decorative_images` is set to `true`, the Accessibility Checker will present an error when:

- An image does not have the alternative text attribute (`alt`).
- An image has an empty alternative text attribute, but is missing the `role="presentation"` attribute.
- An image has alternative text and a conflicting `role="presentation"` attribute.

If `a11ychecker_allow_decorative_images` is set to `false`, the Accessibility Checker will present an error when:

- An image does not have the alternative text attribute (`alt`).
- An image has an empty alternative text attribute.
- An image has the `role="presentation"` attribute.

> **Note**: If [`a11y_advanced_options`](#a11y_advanced_options) is set to `true`, `a11ychecker_allow_decorative_images` will default to `true`.

**Type:** `boolean`

**Default value:** `false`

**Possible Values:** `true`, `false`

#### Example: a11ychecker_allow_decorative_images

```js
tinymce.init({
    selector: "textarea",
    plugins: "a11ychecker",
    toolbar: "a11ycheck",
    a11ychecker_allow_decorative_images: true
});
```

### `a11ychecker_html_version`

This configuration option sets the HTML version to use when checking issues.

For example, setting the version to HTML 4 will trigger the rule "Complex tables should have summaries" as summary is a valid attribute and is required for tables, however in HTML 5 the attribute is deprecated, so the rule won't be triggered.

**Type:** `String`

**Default value:** `html4`

**Possible Values:** `html4`, `html5`

#### Example: a11ychecker_html_version

```js
tinymce.init({
    selector: "textarea",
    plugins: "a11ychecker",
    toolbar: "a11ycheck",
    a11ychecker_html_version: 'html5'
});
```

### `a11ychecker_level`

This configuration option sets the [WCAG level](https://www.w3.org/TR/WCAG20/#conformance) to use when checking issues.

For example, the "Text must have a contrast ratio of at least ..." rule when using **AA** will trigger when the contrast ratio is less than 4.5:1, however when using **AAA** the rule will trigger when the ratio is less than 7.0:1.

**Type:** `String`

**Default value:** `aa`

**Possible Values:** `a`, `aa`, `aaa`

#### Example: a11ychecker_level

```js
tinymce.init({
    selector: "textarea",
    plugins: "a11ychecker",
    toolbar: "a11ycheck",
    a11ychecker_level: 'aaa'
});
```

### API

Accessibility Checker exposes couple of methods that can be called directly.

### `toggleaudit()`

Triggers accessibility dialog with the results of the audit and options to correct the problems, if any.

#### Example: toggleaudit()
```js
editor.plugins.a11ychecker.toggleaudit();
```

### `getReport()`

Conducts accessibility audit and reports about the results without triggering the dialog. The report represents an array of issues, each of which has details about:

* **severity** - *severity of the issue, might be either - info, warning or error*
* **description** - *brief description of the issue*
* **url** - *URL of the details page at W3 dedicated specifically to the given issue*
* **element** - *DOM element having the issue*

##### Example: getReport()

```js
var issues = editor.plugins.a11ychecker.getReport();
```