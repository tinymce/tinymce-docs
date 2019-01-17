---
layout: default
title: Advanced List plugin
title_nav: Advanced List
description: Create styled number and bulleted lists.
keywords: advlist advlist_bullet_styles advlist_number_styles
---

The `advlist` plugin extends the core `bullist` and `numlist` toolbar controls by adding CSS `list-style-type` styled number formats and bullet types to the controls.

> **Important note:** The [Lists](../lists) (`lists`) plugin must be activated for the `advlist` plugin to work. 

**Type:** `String`

##### Advanced List plugin example

```js
tinymce.init({
  selector: "textarea", // change this value according to your HTML
  plugins: "advlist"
});
```

## Options

These settings affect the execution of the `advlist` plugin by providing more granular control of list styles.

### `advlist_bullet_styles`

This option allows you to include specific unordered list item markers in the default `bullist` toolbar control.

**Type:** `String`

**Default Value:** `"default,circle,disc,square"`

**Possible Values:**

  * `default`: your browser's default style
  * `circle`: a hollow circle
  * `disc`: a filled circle
  * `square`: a filled square

#### Example:

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "advlist",
    advlist_bullet_styles: "square"  // only include square bullets in list
});
```

### `advlist_number_styles`

This option allows you to include specific ordered list item markers in the default `numlist` toolbar control.

**Type:** `String`

**Default Value:** `"default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman"`

**Possible Values:**

  * `default`: your browser's default style
  * `lower-alpha`: lowercase ASCII letters, e.g. a, b, c, ... z
  * `lower-greek`: lowercase classical Greek (alpha, beta, gamma), e.g. α, β, γ ...
  * `lower-roman`: lowercase roman numerals, e.g. i, ii, iii, iv, v ...
  * `upper-alpha`: uppercase ASCII letters, e.g. A, B, C, ... Z
  * `upper-roman`: uppercase roman numerals, e.g. I, II, III, IV, V ...

#### Example:

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "advlist",
  advlist_number_styles: "lower-alpha"  // only include lower alpha in list
});
```
