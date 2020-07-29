---
layout: default
title: Checklist plugin
title_nav: Checklist
description: Add checklists to your content.
keywords: lists todo checklist
controls: toolbar button
---

{{site.premiumplugin}}

The **Checklist** plugin helps the user keep track of all required actions by creating a simple, clean, and easy to use TODO list.

## Format

{% include codepen.html id="checklist" %}

In the {{site.productname}} editor, checklists are presented as lists with small checkboxes on the left hand side of the list items. After the item has been completed, a small tick or check mark is drawn in the box by clicking on it.

**Checklist** is a premium plugin from {{site.companyname}}. Please see the [Premium features]({{site.baseurl}}/enterprise/tiny-comments/) section for all the buying options.

Once you have obtained the **Checklist** plugin, refer to the following instructions for using it.

## Configuring the Checklist toolbar button

Use the following script to add the **Checklist** [toolbar button]({{site.baseurl}}/ui-components/toolbarbuttons/):

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "lists checklist",
  toolbar: "checklist"
});
```

> Note: The **Checklist** plugin has to be used together with the [Lists]({{site.baseurl}}/plugins/lists/) plugin to work.

## CSS

To make the checklists look correct make sure to include this css on your page:

```css
{% include css-codeblock/checklist-plugin-css.md %}
```

## Creating a Checklist

Perform the following steps to create a checklist:

1. Place the cursor in the desired location within the {{site.productname}} editor.
1. Click the ![Checklist icon]({{site.baseurl}}/images/icons/checklist.svg)(**Checklist icon**) on the toolbar or the checklist menu item. A checkbox will be added in the desired location.
1. Type in the first item and press `Enter` to add another item in the list.
1. To check items by adding a check mark to them, click on the checkbox next to the desired item from this list.

#### Result

A checklist will be created. If some items were selected, a check mark will appear in the adjacent checkbox.

## Toggling checklist items

The state of the check marks of checklist items can be toggled to be empty or checked. This is done by clicking the checkbox. If using the keyboard, the check marks can be toggled by placing the cursor on the desired Checklist item and pressing the `Ctrl+Enter` (`Command+Enter` if you are a Mac user) key combination.

