---
layout: default
title: Case Change
title_nav: Case Change
description: Change the case of text.
keywords: case capitalization capitalize lowercase uppercase
controls: toolbar button, menu item
---

{% assign pluginname = "Case Change" %}
{% assign plugincode = "casechange" %}

{{site.premiumplugin}}

The **Case Change** plugin is a time saving and handy extension that allows changing the case of text in block selection to uppercase, lowercase, or title case.

## Try our Case Change demo

{% include live-demo.html id="casechange" %}

## Changing the case of selected text

Perform the following steps to change the case of selected text in a document to lowercase, UPPERCASE, or Title Case:

1. Select the desired text to change the case.
2. Click on the ![Case Change]({{site.baseurl}}/images/casechangeicon.png) icon in the toolbar.
3. From the drop-down menu, choose the desired format by clicking on either **lowercase**, **UPPERCASE**, or **Title Case**.

> **Note**: The toolbar button will retain the last applied type of case making it simple to apply the same formatting multiple times.

## Types of Formats

Currently, there are three types of formats available:

### lowercase

The **lowercase** option changes all the selected characters to lowercase. This is a handy option in situations when the Caps Lock key was accidentally left on while typing. Instead of starting over and retyping everything, the user can simply select this text and change words to lowercase if they have been erroneously capitalized in the input.

### UPPERCASE

The **UPPERCASE** option changes all the selected characters to uppercase. This formatting option is useful in documentation, where "initial caps" are to be used ("headline style") as opposed to sentence style (first word of sentence or phrase capitalized only), regardless of the specific type of title, heading, header, or interface text.

### Title Case

The **Title Case** option changes anything other than articles, coordinating conjunctions, or short prepositions to capital letters. The default rule set for **Title Case** is based on [Wikipedia Title Case](https://titlecaseconverter.com/rules/#WP).

#### Title Case options

**Title Case** can be customized to create user defined rule sets by using the following options:

{% include configuration/casechange_title_case_minors.md %}

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Case Change plugin provides the following JavaScript commands.

{% include commands/casechange-cmds.md %}
