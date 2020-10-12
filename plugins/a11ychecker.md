---
layout: default
title: Accessibility Checker plugin
title_nav: Accessibility Checker
description: Checks the contents of the editor for WCAG & Section 508 accessibility problems.
keywords: a11y accessibility WCAG
---

{% assign pluginname = "A11yChecker" %}
{% assign plugincode = "a11ychecker" %}

{{site.premiumplugin}}

The `a11ychecker` premium plugin allows you to check the HTML in the editor for various WCAG & Section 508 accessibility problems. It has an auto-repair feature that lets the user fix identified problems.

## Interactive example

{% include live-demo.html id="a11ychecker" %}

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

The following checks are performed by the {{pluginname}} plugin.

<a class="anchor" id="D1"></a>

### D1 - Usage of paragraphs as headings

**Rule description:** This rule checks that `h1`-`h6` tags are used for heading content, not `p` tags. Not using correct heading markup will make it difficult for assistive technologies to visually represent and navigate through your content.

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

**Rule description:** This rule checks that the contrast ratio of the text is above the specified values (4.5:1 for normal text and 3:1 for large text). Text with a low contrast ratio is hard to read for users with an impaired vision.

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

### I1 - Image ALT text

**Rule description:** This rule checks that all images have alternative (`alt`) text for screen readers and other assistive technologies.

#### {{pluginname}} rule details - I1

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG21/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.1 specification**: [G95 - Providing short text alternatives that provide a brief description of the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G95.html).

<a class="anchor" id="I2"></a>

### I2 - Alt text filename

**Rule description:** This rule checks that the `alt` attribute text of the image is not the filename of the image.

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

#### {{pluginname}} rule details - T2

* **Notification level (severity)**: Warning
* **[WCAG level](https://www.w3.org/TR/WCAG21/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4
* **WCAG 2.1 specification**: [H73 - Using the summary attribute of the table element to give an overview of data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H73.html).

<a class="anchor" id="T3"></a>

### T3 - Table caption and summary

**Rule description:** This rule checks that the table caption and summary does not have the same text content. The caption should explain **what** the table is about while the summary should explain **how** to navigate the data inside of the table.

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

#### Example: Using `a11ychecker_allow_decorative_images`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'a11ychecker',
  toolbar: 'a11ycheck',
  a11ychecker_allow_decorative_images: true
});
```

### `a11ychecker_filter_issue`

The `a11ychecker_filter_issue` option allows Accessibility Checker rules to be removed from the Accessibility Checker report using a callback function. This option is a flexible alternative to the `a11ychecker_ignored_rules` option.

The function will be passed the result object of the [`getReport()` API](#getreport). To filter issues from the Accessibility Checker report, the callback needs to return `false` for the issue.

**Type:** `Function`

**Default Value:**

```js
function(issue) {
  return true;
}
```

#### Example: Using `a11ychecker_filter_issue` to filter out the Accessibility Checker T1 rule

The callback function in the following example will return `false` if the issue `id` value is `'T1'`, filtering `'T1'` issues from the Accessibility Checker report.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  plugins: 'a11ychecker',
  toolbar: 'a11ycheck',
  a11ychecker_filter_issue: function(issue) {
    return issue.id !== 'T1';
  }
});
```

#### Example: Using `a11ychecker_filter_issue` to filter out all Accessibility Checker table rules

The callback function in the following example will return `false` if the issue `element` value is `'table'`, filtering all table-related issues from the Accessibility Checker report.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  plugins: 'a11ychecker',
  toolbar: 'a11ycheck',
  a11ychecker_filter_issue: function(issue) {
    return issue.element.nodeName.toLowerCase() !== 'table';
  }
});
```

### `a11ychecker_html_version`

This configuration option sets the HTML version to use when checking issues.

For example: Setting the version to HTML 4 will enable the rule "Complex tables should have summaries", where `summary` is a valid attribute in HTML 4 but not HTML 5.

**Type:** `String`

**Default value:** `html4`

**Possible Values:** `html4`, `html5`

#### Example: Using `a11ychecker_html_version`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'a11ychecker',
  toolbar: 'a11ycheck',
  a11ychecker_html_version: 'html5'
});
```

### `a11ychecker_ignored_rules`

The `a11ychecker_ignored_rules` option prevents specific Accessibility Checker rules being checked. This feature allows developers to skip rules that flag known issues in content until the issue is fixed.

**Type:** A comma-separated string.

**Default Value:** `''`

**Possible values:** `'D1'`, `'D2'`, `'D3'`, `'D4O'`, `'D4U'`, `'D5A'`, `'D5B'`, `'D5C'`, `'H93'`, `'I1'`, `'I2'`, `'T1'`, `'T2'`, `'T3'`, `'T4A'`, `'T4B'`, `'T4C'`

#### Example: Using `a11ychecker_ignored_rules`

This examples shows how to ignore the following checks (rules):

* D2 - Sequential headings
* I2 - Alt text filename
* T4B - Table headers

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  plugins: 'a11ychecker',
  toolbar: 'a11ycheck',
  a11ychecker_ignored_rules: 'D2, I2, T4B'
});
```

### `a11ychecker_issue_url_callback`

The `a11ychecker_issue_url_callback` option is used to change the target URL for the "Click for more info" button (![help icon - a question mark inside a circle]({{site.baseurl}}/images/icons/help.svg)) in the Accessibility Checker dialog. By default, the "more info" links will point to `{{site.url}}/docs/plugins/a11ychecker/#<ruleId>`, such as `{{site.url}}/docs/plugins/a11ychecker/#D1`. This option can be used to set the target URL to a page or pages outside {{site.url}}/docs/.

**Type:** `Function`

**Default Value:** `undefined`

#### Example: Using `a11ychecker_issue_url_callback`

This example shows how to change the link for the "Click for more info" button (![help icon - a question mark inside a circle]({{site.baseurl}}/images/icons/help.svg)) on the Accessibility Checker dialog to point to anchors at `www.example.com/tinymce/a11ychecker/more_info`.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  plugins: 'a11ychecker',
  toolbar: 'a11ycheck',
  a11ychecker_issue_url_callback: function (ruleId) {
    return `https://www.example.com/tinymce/a11ychecker/more_info#${ruleId}`
  };
});
```

### `a11ychecker_level`

This configuration option sets the [WCAG level](https://www.w3.org/TR/WCAG20/#conformance) to use when checking issues.

For example, the "Text must have a contrast ratio of at least ..." rule:

* When using **AA**, Accessibility Checker will check that the contrast ratio is not less than 4.5:1.
* When using **AAA**, Accessibility Checker will check that the contrast ratio is not less than 7.0:1.

**Type:** `String`

**Default value:** `aa`

**Possible Values:** `a`, `aa`, `aaa`

#### Example: Using `a11ychecker_level`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'a11ychecker',
  toolbar: 'a11ycheck',
  a11ychecker_level: 'aaa'
});
```

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## APIs

The {{pluginname}} plugin provides the following APIs.

### `toggleaudit()`

Opens the accessibility checker dialog with the results of the audit and options to correct the problems, if any.

#### Example: Using `toggleaudit()`

```js
editor.plugins.a11ychecker.toggleaudit();
```

### `getReport()`

Conducts accessibility audit and reports the results without triggering the dialog. The report produced is an array of objects, with each object representing an issue and contains the following details:

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
    "element": {}  // The element value contains the DOM element (<table>).
  }
]
```
