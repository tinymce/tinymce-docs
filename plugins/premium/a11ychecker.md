---
layout: default
title: Accessibility Checker plugin
title_nav: Accessibility Checker
description: Checks the contents of the editor for WCAG & Section 508 accessibility problems.
keywords: a11y accessibility WCAG
---

{% assign pluginname = 'Accessibility Checker' %}
{% assign plugincode = "a11ychecker" %}

{{site.premiumplugin}}

The `a11ychecker` premium plugin allows you to check the HTML in the editor for various WCAG & Section 508 accessibility problems. It has an auto-repair feature that lets the user fix identified problems.

## Interactive example

{% include live-demo.html id="a11ychecker" %}

{% assign pluginminimumplan = 'tierthree' %}
{% assign plugindocspage = 'a11ychecker' %}
{% include misc/purchase-premium-plugins.md %}

## Basic setup

To add the {{pluginname}} plugin to the editor, add `{{plugincode}}` to the `plugins` option in the editor configuration.

For example:

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'a11ychecker',
  toolbar: 'a11ycheck'
});
```

## Accessibility Rules

The following checks are available for the {{pluginname}} plugin. The rules checked depends on:

- The level of compliance (A, AA, or AAA), set using the `a11ychecker_level` option.
- The HTML version of the content, set using the `a11ychecker_html_version` option.

Each rule has a severity level, which will be one of the following, listed in order of increasing severity:

- Information
- Warning
- Error

<a class="anchor" id="D1"></a>

### D1 - Usage of paragraphs as headings

**Rule description:** This rule checks that `h1`-`h6` tags are used for heading content, not `p` tags. Not using correct heading markup will make it difficult for assistive technologies to represent and navigate through your content.

#### {{pluginname}} rule details - D1

* **Notification level (severity)**: Warning
* **[WCAG level](https://www.w3.org/TR/WCAG21/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.1 specifications**:

  * [H42 - Using h1-h6 to identify headings](https://www.w3.org/WAI/WCAG21/Techniques/html/H42.html).
  * [H69 - Providing heading elements at the beginning of each section of content](https://www.w3.org/WAI/WCAG21/Techniques/html/H69.html).

<a class="anchor" id="D2"></a>

### D2 - Sequential headings

**Rule description:** This rule checks that headings tags are used sequentially.

For example: A `h1` heading should be followed by a `h2` heading, not a `h3` heading. Using sequential headings will make it easier for assistive technology to parse your content.

#### {{pluginname}} rule details - D2

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG21/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.1 specification**: [G141 - Organizing a page using headings](https://www.w3.org/WAI/WCAG21/Techniques/general/G141.html).

<a class="anchor" id="D3"></a>

### D3 - Adjacent links

**Rule description:** This rule checks that links next to other links do not have the same `href` attribute.

For example: If an image link and a text link have the same `href` attribute, both elements should be in the same `a` element. If an image link and a text link point to the same URL but are two separate elements, it can be confusing for users of screen readers and other assistive technologies.

#### {{pluginname}} rule details - D3

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG21/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.1 specification**: [H2 - Combining adjacent image and text links for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/html/H2.html).

<a class="anchor" id="D4O"></a>

### D4O - Ordered list structure

**Rule description:** This rule checks that an `ol` element is used for ordered lists. Do not use paragraphs beginning with numbers or roman numerals instead of an `ol` element containing `li` items. This is to simplify navigation and parsing of the content for users of assistive technologies.

#### {{pluginname}} rule details - D4O

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG21/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.1 specification**: [H48 - Using ol, ul and dl for lists or groups of links](https://www.w3.org/WAI/WCAG21/Techniques/html/H48.html).

<a class="anchor" id="D4U"></a>

### D4U - Unordered list structure

**Rule description:** This rule checks that a `ul` element is used for unordered lists. Do not use paragraphs beginning with `*` or `-` or some similar character instead of an `ol` element containing `li` items. This is to simplify navigation and parsing of the content for users of assistive technologies.

#### {{pluginname}} rule details - D4U

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG21/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.1 specification**: [H48 - Using ol, ul and dl for lists or groups of links](https://www.w3.org/WAI/WCAG21/Techniques/html/H48.html).

<a class="anchor" id="D5"></a>
<a class="anchor" id="D5A"></a>
<a class="anchor" id="D5B"></a>
<a class="anchor" id="D5C"></a>

### D5 - Contrast ratio of the text (D5A, D5B, and D5C)

**Rule description:** This rule checks that the contrast ratio of the text is above the following values:

- When the compliance level is set to AA,
  - 4.5:1 for normal text
  - 3:1 for large text
- When the compliance level is set to AAA,
  - 7:1 for any text

Text with a low contrast ratio is hard to read for users with impaired vision.

#### {{pluginname}} rule details - D5A

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG21/#conformance)**: Level AA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.1 specification**: [G145 - Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G145.html).

#### {{pluginname}} rule details - D5B

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG21/#conformance)**: Level AA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.1 specification**: [G18 - Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G18.html).

#### {{pluginname}} rule details - D5C

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG21/#conformance)**: Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.1 specification**: [G17 - Ensuring that a contrast ratio of at least 7:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G17.html).

<a class="anchor" id="H93"></a>

### H93 - IDs must be unique

**Rule description:** This rule checks that all `id` attributes are unique in the editor. Duplicate `id` attributes are known to cause problems for assistive technologies when parsing the content.

#### {{pluginname}} rule details - H93

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG21/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.1 specification**: [H93 - Ensuring that id attributes are unique on a Web page](https://www.w3.org/WAI/WCAG21/Techniques/html/H93.html).

<a class="anchor" id="I1"></a>

### I1 - Image `alt` text

**Rule description:** This rule checks that all images have alternative (`alt`) text for screen readers and other assistive technologies.

#### {{pluginname}} rule details - I1

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG21/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.1 specification**: [G95 - Providing short text alternatives that provide a brief description of the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G95.html).

<a class="anchor" id="I2"></a>

### I2 - Image `alt` text is not the image filename

**Rule description:** This rule checks that the `alt` attribute text of the image is not the same as the filename of the image.

#### {{pluginname}} rule details - I2

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG21/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.1 specification**: [G95 - Providing short text alternatives that provide a brief description of the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G95.html).

<a class="anchor" id="T1"></a>

### T1 - Table caption

**Rule description:** This rule checks that all `table` elements have a `caption` element describing the data inside the table to simplify parsing and navigation of the content for users of assistive technologies.

#### {{pluginname}} rule details - T1

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG21/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.1 specification**: [H39 - Using caption elements to associate data table captions with data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H39.html).

<a class="anchor" id="T2"></a>

### T2 - Complex table summary

**Rule description:** This rule checks that all complex tables must have a `summary` attribute explaining to users of assistive technologies how to navigate through the data inside of the table.

> **Note**: This rule only applies to HTML 4 content and is not checked when `a11ychecker_html_version` is set to `html5`.

#### {{pluginname}} rule details - T2

* **Notification level (severity)**: Warning
* **[WCAG level](https://www.w3.org/TR/WCAG21/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4
* **WCAG 2.1 specification**: [H73 - Using the summary attribute of the table element to give an overview of data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H73.html).

<a class="anchor" id="T3"></a>

### T3 - Table caption and summary

**Rule description:** This rule checks that the table caption and summary does not have the same text content. The caption should explain **what** the table is about while the summary should explain **how** to navigate the data inside of the table.

> **Note**: The table `summary` attribute was deprecated in HTML 5, both the **what** and **how** information should be moved to the table caption.

#### {{pluginname}} rule details - T3

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG21/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.1 specification**: [H73 - Using the summary attribute of the table element to give an overview of data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H73.html).

<a class="anchor" id="T4A"></a>

### T4A - Table markup

**Rule description:** This rule checks that all `tables` contain both `td` and `th` elements.

#### {{pluginname}} rule details - T4A

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG21/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.1 specification**: [H51 - Using table markup to present tabular information](https://www.w3.org/WAI/WCAG21/Techniques/html/H51.html).

<a class="anchor" id="T4B"></a>

### T4B - Table headers

**Rule description:** This rule checks that all `table` elements contain at least one table header (`th`) element.

#### {{pluginname}} rule details - T4B

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG21/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.1 specification**: [H51 - Using table markup to present tabular information](https://www.w3.org/WAI/WCAG21/Techniques/html/H51.html).

<a class="anchor" id="T4C"></a>

### T4C - Table heading scope

**Rule description:** This rule checks that all table header (`th`) elements have a `scope` attribute clarifying what scope the heading has inside of the `table`. The allowed values are `row`, `col`, `rowgroup`, and `colgroup`. This is important for users of assistive technologies to be able to parse table data.

#### {{pluginname}} rule details - T4C

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG21/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.1 specification**: [H63 - Using the scope attribute to associate header cells and data cells in data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H63.html).

## Configuration Options

The following configuration options affect the behavior of the {{pluginname}} plugin.

{% assign includedSection = 'a11yPlugin' %}
#{% include configuration/a11y_advanced_options.md %}
{% assign includedSection = false %}

{% include configuration/a11ychecker_allow_decorative_images.md %}

{% include configuration/a11ychecker_filter_issue.md %}

{% include configuration/a11ychecker_html_version.md %}

{% include configuration/a11ychecker_ignored_rules.md %}

{% include configuration/a11ychecker_issue_url_callback.md %}

{% include configuration/a11ychecker_level.md %}

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## APIs

The {{pluginname}} plugin provides the following APIs.

### `toggleaudit()`

Opens and closes the accessibility checker dialog with the results of the audit and options to correct the problems, if any.

#### Example: Using `toggleaudit()`

```js
editor.plugins.a11ychecker.toggleaudit();
```

### `getReport()`

Conducts an accessibility audit and reports the results without opening the dialog. The report produced is an array of objects, where each object represents an issue and contains the following details:

* **id** - The issue identifier used by {{site.productname}}, such as D1, T4A. For a description and other details about the issue, see [Accessibility Rules](#accessiblityrules).
* **description** - A description of the issue.
* **severity** - The severity of the issue, either: `info`, `warning`, or `error`.
* **element** - The DOM element where the issue was found.
* **url** - A URL to the W3 WCAG technique that needs to be addressed to clear the issue.

#### Example: Using `getReport()`

```js
var issues = editor.plugins.a11ychecker.getReport();

console.log(issues);

// example result
[
  {
    "id": "D2",
    "severity": "error",
    "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html",
    "description": "Headings must be applied in sequential order. For example: Heading 1 should be followed by Heading 2, not Heading 3.",
    "element": {}  // The element value contains the DOM element (such as <h4>).
  },
  {
    "id": "T1",
    "severity": "error",
    "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html",
    "description": "Tables must have captions",
    "element": {}  // The element value contains the DOM element (such as <table>).
  }
]
```
