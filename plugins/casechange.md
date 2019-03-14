---
layout: default
title: Case Change
title_nav: Case Change
description: Change the case of text.
keywords: case capitalization capitalize lowercase uppercase
controls: toolbar button, menu item
---

## Overview

The **Case Change** plugin is a time saving and handy extension that allows changing the case of text in block selection to uppercase, lowercase, or title case.

**Case Change** is a premium plugin from Tiny. Please see the [Premium features]({{site.baseurl}}/enterprise/casechange/) section for all the buying options.

Once you have obtained the **Case Change** plugin, refer to the following instructions for using it.

### Configuring the Case Change split toolbar button

Use the following script to configure the **Case Change** [split toolbar button]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#splitbutton):

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "casechange",
  toolbar: "casechange"
});
```

### Configuring the Case Change menu item

Use the following script to configure the **Case Change** [menu item]({{site.baseurl}}/ui-components/menuitems/):

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


### Types of Formats

Currently, there are three types of formats available:

* lowercase
* UPPERCASE
* Title Case

![**Case Change**]({{site.baseurl}}/images/casechange.png)(**Case Change**)

### lowercase

The **lowercase** option changes all the selected characters to lowercase. This is a handy option in situations when the Caps Lock key was accidentally left on while typing. Instead of starting over and retyping everything, the user can simply select this text and change words to lowercase if they have been erroneously capitalized in the input.


#### To change the case of selected text in a document to lowercase, perform the following steps:

1. Select the desired text to change the case.
2. Click on the ![**Case Change**]({{site.baseurl}}/images/casechangeicon.png)(**Case Change**) icon in the toolbar.
3. From the drop-down menu, click on the **lowercase **option.


##### Result: The lowercase format will be applied to the selected text.

> Note: The toolbar button will retain the last applied type of case making it simple to apply the same formatting multiple times.

### UPPERCASE

The **UPPERCASE** option changes all the selected characters to uppercase. This formatting option is useful in documentation, where "initial caps" are to be used ("headline style") as opposed to sentence style (first word of sentence or phrase capitalized only), regardless of the specific type of title, heading, header, or interface text.

#### To change the case of selected text in a document to UPPERCASE, perform the following steps:

1. Select the desired text to change the case.
2. Click on the **Case Change (Aa)** icon in the toolbar.
3. From the drop-down menu, click on the **UPPERCASE **option.

##### Result: The UPPERCASE format will be applied to the selected text.

> Note: The toolbar button will retain the last applied type of case making it simple to apply the same formatting multiple times.

### Title Case

The **Title Case** option changes anything other than articles, coordinating conjunctions, or short prepositions to capital letters.

#### To change the case of selected text in a document to Title Case, perform the following steps:

1. Select the desired text to change the case.
2. Click on the **Case Change (Aa)** icon in the toolbar.
3. From the drop-down menu, click on the **Title Case** option.


##### Result: The Title Case format will be applied to the selected text.

> Note: The toolbar button will retain the last applied type of case making it simple to apply the same formatting multiple times.

#### **Options**

**Title Case** can be customized to create user defined rule sets by using the following options:

##### **casechange_title_case_minors**

The `casechange_title_case_minors` option is used to customize the rules while using **Title Case.** This option makes it possible to configure what words not to capitalize. All other words not specified by this rule set will be capitalized overriding the default **Title Case** rule set.

**Type:** Array

**Default:** _A rule set based on [Wikipedia Title Case](https://titlecaseconverter.com/rules/#WP)_

##### **Example**

```
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