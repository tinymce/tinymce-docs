---
layout: default
title: Case Change
title_nav: Case Change
description: Change the case of text.
keywords: case capitalization capitalize lowercase uppercase
controls: toolbar button, menu item
---

The Case Change plugin allows a user to change the case or capitalization of text with a few simple clicks. Three types of formats are available:
* lowercase
* UPPERCASE
* Title Case

### Configuring the Case Change split toolbar button

Use the following script to configure the Case Change split toolbar button:

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "casechange",
  toolbar: "casechange"
});
```

### Configuring the Case Change menu item

Use the following script to configure the Case Change menu item:

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "casechange",
  menu: {
    format: { title: 'Format', items: 'casechange' }
  }
});
```

### Usage

1. Select the text you wish to change the case of.

2. Select the type of case you wish to apply thorugh the toolbar dropdown or the menu item.

The toolbar button will retain the last applied type of case making it simple to apply it multiple times.

## Options

### `casechange_title_case_minors`

When using Title Case this option makes it possible to configure what words not to capitalize. All words not specified by this ruleset will be capitalized.

**Type:** `Array`

**Default:** *A ruleset based on [Wikipedia Title Case](https://titlecaseconverter.com/rules/#WP)*

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "casechange",
  toolbar: "casechange",
  casechange_title_case_minors: [
    'at', 'by', 'in', 'of', 'on', 'up', 'to', 'en', 're', 'vs',
    'but', 'off', 'out', 'via', 'bar', 'mid', 'per', 'pro', 'qua', 'til',
    'from', 'into', 'unto', 'with', 'amid', 'anit', 'atop', 'down', 'less', 'like', 'near', 'over', 'past', 'plus', 'sans', 'save', 'than', 'thru', 'till', 'upon',
    'for', 'and', 'nor', 'but', 'or', 'yet', 'so'
  ]
});
```