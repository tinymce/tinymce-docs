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

The `a11ychecker` premium plugin enables you to check the HTML for various WCAG & Section 508 accessibility problems. It has an auto repair feature that lets a user fix identified problems.

##### Example:

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'a11ychecker',
  toolbar: 'a11ycheck'
});
```

## Rules

The following checks are performed by the {{pluginname}} plugin.

<a class="anchor" id="D1"></a>

### D1 - Usage of paragraphs as headings

**Rule description:** This rule checks that you aren't using `p` tags instead of `h1`-`h6` tags for heading content. Not using correct heading markup will make it more difficult for assistive technologies to visually represent and navigate through your content.

#### {{pluginname}} rule details - D1

* **Notification level (severity)**: Warning
* **[WCAG level](https://www.w3.org/TR/WCAG20/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.0 specifications**:

  * [H42: Using h1-h6 to identify headings](https://www.w3.org/WAI/WCAG21/Techniques/html/H42.html).
  * [H69: Providing heading elements at the beginning of each section of content](https://www.w3.org/WAI/WCAG21/Techniques/html/H69.html).

<a class="anchor" id="D2"></a>

### D2 - Sequential headings

**Rule description:** This rule checks that headings are used sequentially, meaning that an `h1` heading should be followed by an `h2` heading, a `h4` heading should be followed by an `h5` heading and so on. You should never skip a level, like following an `h3` heading with an `h6` heading. Using sequential links will make it easier for assistive technology to parse your content.

#### {{pluginname}} rule details - D2

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG20/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.0 specification**: [G141: Organizing a page using headings](https://www.w3.org/WAI/WCAG21/Techniques/general/G141.html).

<a class="anchor" id="D3"></a>

### D3 - Adjacent links

**Rule description:** This rule checks that links next to other links do not have the same href. For example if you have an image link and a text link with the same href they should be contained within the same `a` element and not in two different `a` elements. If the image and the text link are put in two separate elements it can be confusing for users of screen readers and other assistive technologies.

#### {{pluginname}} rule details - D3

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG20/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.0 specification**: [H2: Combining adjacent image and text links for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/html/H2.html).

<a class="anchor" id="D4O"></a>

### D4O - Ordered list structure

**Rule description:** This rule checks that an `ol` element is used for ordered lists. Do not use paragraphs beginning with numbers or roman numerals instead of an actual `ol` element containing `li` items. This is to simplify navigation and parsing of the content for users of assistive technologies.

#### {{pluginname}} rule details - D4O

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG20/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.0 specification**: [H48 - Using ol, ul and dl for lists or groups of links](https://www.w3.org/WAI/WCAG21/Techniques/html/H48.html).

<a class="anchor" id="D4U"></a>

### D4U - Unordered list structure

**Rule description:** This rule checks that a `ul` element is used for unordered lists. Do not use paragraphs beginning with `*` or `-` or some similar character instead of an actual `ol` element containing `li` items. This is to simplify navigation and parsing of the content for users of assistive technologies.

#### {{pluginname}} rule details - D4U

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG20/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.0 specification**: [H48 - Using ol, ul and dl for lists or groups of links](https://www.w3.org/WAI/WCAG21/Techniques/html/H48.html).

<a class="anchor" id="D5"></a>
<a class="anchor" id="D5A"></a>
<a class="anchor" id="D5B"></a>
<a class="anchor" id="D5C"></a>

### D5 - Contrast ratio of the text (D5A, D5B, and D5C)

**Rule description:** This rule checks that the contrast ratio of the text is above the specified values (4.5:1 for normal text and 3:1 for large text). Text with a low contrast ratio is hard to read, especially for users with an impaired vision.

#### {{pluginname}} rule details - D5A

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG20/#conformance)**: Level AA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.0 specification**: [Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G145.html).

#### {{pluginname}} rule details - D5B

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG20/#conformance)**: Level AA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.0 specification**: [Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G18.html).

#### {{pluginname}} rule details - D5C

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG20/#conformance)**: Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.0 specification**: [Ensuring that a contrast ratio of at least 7:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G17.html).

<a class="anchor" id="H93"></a>

### H93 - IDs must be unique

**Rule description:** This rule checks that all `id` attributes are unique in the editor. Duplicate `id` attributes are known to cause problems for assistive technologies when they are trying to parse content.

#### {{pluginname}} rule details - H93

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG20/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.0 specification**: [Ensuring that id attributes are unique on a Web page](https://www.w3.org/WAI/WCAG21/Techniques/html/H93.html).

<a class="anchor" id="I1"></a>

### I1 - Image ALT text

**Rule description:** This rule checks that all images have an alt text so screen readers and other assistive technologies can correctly present the content to your users that can't see the images visually.

#### {{pluginname}} rule details - I1

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG20/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.0 specification**: [Providing short text alternatives that provide a brief description of the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G95.html).

<a class="anchor" id="I2"></a>

### I2 - Alt text filename

**Rule description:** This rule checks that the alt text of you image isn't just the same as the filename of the image.

#### {{pluginname}} rule details - I2

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG20/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.0 specification**: [Providing short text alternatives that provide a brief description of the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G95.html).

<a class="anchor" id="T1"></a>

### T1 - Table caption

**Rule description:** This rule checks that all `table` elements have a caption that describes the data inside of the table to simplify parsing and navigation of the content for users of assistive technologies.

#### {{pluginname}} rule details - T1

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG20/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.0 specification**: [Using caption elements to associate data table captions with data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H39.html).

<a class="anchor" id="T2"></a>

### T2 - Complex table summary

**Rule description:** This rule checks that all complex tables must have a `summary` attribute explaining to users of assistive technologies how to navigate through the data inside of the table. See the specification linked below for examples.

#### {{pluginname}} rule details - T2

* **Notification level (severity)**: Warning
* **[WCAG level](https://www.w3.org/TR/WCAG20/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4
* **WCAG 2.0 specification**: [Using the summary attribute of the table element to give an overview of data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H73.html).

<a class="anchor" id="T3"></a>

### T3 - Table caption and summary

**Rule description:** This rule checks that the table caption and summary does not have the same text content. The caption should explain **what** the table is about while the summary should explain **how** to navigate the data inside of the table.

#### {{pluginname}} rule details - T3

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG20/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.0 specification**: [Using the summary attribute of the table element to give an overview of data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H73.html).

<a class="anchor" id="T4A"></a>

### T4A - Table markup

**Rule description:** This rule checks that all `tables` contain both `td` and `th` elements.

#### {{pluginname}} rule details - T4A

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG20/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.0 specification**: [Using table markup to present tabular information](https://www.w3.org/WAI/WCAG21/Techniques/html/H51.html).

<a class="anchor" id="T4B"></a>

### T4B - Table headers

**Rule description:** This rule checks that all `table` elements contain at least one table header - `th` - element.

#### {{pluginname}} rule details - T4B

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG20/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.0 specification**: [Using table markup to present tabular information](https://www.w3.org/WAI/WCAG21/Techniques/html/H51.html).

<a class="anchor" id="T4C"></a>

### T4C - Table heading scope

**Rule description:** This rule checks that all table heading - `th` - elements has a `scope` attribute clarifying what scope the heading has inside of the `table`. The allowed values are `row`, `col`, `rowgroup`, and `colgroup`. This is important for users of assistive technologies to be able to parse your table data.

#### {{pluginname}} rule details - T4C

* **Notification level (severity)**: Error
* **[WCAG level](https://www.w3.org/TR/WCAG20/#conformance)**: Level A ; Level AA ; Level AAA
* **[HTML version](#a11ychecker_html_version)**: HTML4 and HTML5
* **WCAG 2.0 specification**: [Using the scope attribute to associate header cells and data cells in data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H63.html).

## Options

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
  selector: 'textarea',
  plugins: 'a11ychecker',
  toolbar: 'a11ycheck',
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
  selector: 'textarea',
  plugins: 'a11ychecker',
  toolbar: 'a11ycheck',
  a11ychecker_html_version: 'html5'
});
```

## `a11ychecker_ignored_rules`

{{ site.requires_5_5v }}

{% if pluginname != a11ychecker %}
> **Note**: The a11ychecker_ignored_rules option requires the Accessibility Checker (A11ychecker) plugin.
{% endif %}

The `a11ychecker_ignored_rules` option prevents specific A11ychecker rules being checked. This feature allows developers to skip rules that flag known issues in content until the issue is fixed.

**Type:** `String`

**Default Value:** `''`

**Possible values:** `'D1'`, `'D2'`, `'D3'`, `'D4O'`, `'D4U'`, `'D5A'`, `'D5B'`, `'D5C'`, `'H93'`, `'I1'`, `'I2'`, `'T1'`, `'T2'`, `'T3'`, `'T4A'`, `'T4B'`, `'T4C'`

### Example: Using `a11ychecker_ignored_rules`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  plugins: 'a11ychecker',
  toolbar: 'a11ycheck',
  a11ychecker_ignored_rules: 'D2, I2, T4B'
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
  selector: 'textarea',
  plugins: 'a11ychecker',
  toolbar: 'a11ycheck',
  a11ychecker_level: 'aaa'
});
```

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## API

Accessibility Checker exposes couple of methods that can be called directly.

### `toggleaudit()`

Triggers accessibility dialog with the results of the audit and options to correct the problems, if any.

#### Example: toggleaudit()

```js
editor.plugins.a11ychecker.toggleaudit();
```

### `getReport()`

Conducts accessibility audit and reports about the results without triggering the dialog. The report represents an array of issues, each of which has details about:

* **id** - The issue identifier used by {{site.productname}}, such as D1, T4A. For a description and other details about the issue, see [Rules](#rules).
* **description** - A description of the issue.
* **severity** - The severity of the issue, either:
  * `info`
  * `warning`
  * `error`
* **element** - The DOM element where the issue was found.
* **url** - A URL to the W3 WCAG technique that needs to be addressed to clear the issue.

#### Example: getReport()

```js
var issues = editor.plugins.a11ychecker.getReport();
```