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

### Configuring the Checklist toolbar button

Use the following script to add the **Checklist** [toolbar button]({{site.baseurl}}/ui-components/toolbarbuttons/):

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "lists checklist",
  toolbar: "checklist"
});
```

> Note: The **Checklist** plugin has to be used together with the [Lists]({{site.baseurl}}/plugins/lists/) plugin to work.

### CSS

To make the checklists look correct make sure to include this css on your page:

```css
.tox-checklist > li:not(.tox-checklist--hidden) {
  list-style: none;
  margin: 0.25em 0;
  position: relative;
}
.tox-checklist > li:not(.tox-checklist--hidden)::before {
  content: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cg%20id%3D%22checklist-unchecked%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Crect%20id%3D%22Rectangle%22%20width%3D%2215%22%20height%3D%2215%22%20x%3D%22.5%22%20y%3D%22.5%22%20fill-rule%3D%22nonzero%22%20stroke%3D%22%234C4C4C%22%20rx%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E%0A");
  cursor: pointer;
  height: 1em;
  margin-left: -1.5em;
  margin-top: 0.125em;
  position: absolute;
  width: 1em;
}
.tox-checklist li:not(.tox-checklist--hidden).tox-checklist--checked::before {
  content: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cg%20id%3D%22checklist-checked%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Crect%20id%3D%22Rectangle%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%234099FF%22%20fill-rule%3D%22nonzero%22%20rx%3D%222%22%2F%3E%3Cpath%20id%3D%22Path%22%20fill%3D%22%23FFF%22%20fill-rule%3D%22nonzero%22%20d%3D%22M11.5703186%2C3.14417309%20C11.8516238%2C2.73724603%2012.4164781%2C2.62829933%2012.83558%2C2.89774797%20C13.260121%2C3.17069355%2013.3759736%2C3.72932262%2013.0909105%2C4.14168582%20L7.7580587%2C11.8560195%20C7.43776896%2C12.3193404%206.76483983%2C12.3852142%206.35607322%2C11.9948725%20L3.02491697%2C8.8138662%20C2.66090143%2C8.46625845%202.65798871%2C7.89594698%203.01850234%2C7.54483354%20C3.373942%2C7.19866177%203.94940006%2C7.19592841%204.30829608%2C7.5386474%20L6.85276923%2C9.9684299%20L11.5703186%2C3.14417309%20Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E%0A");
}
```

### Creating a Checklist

Perform the following steps to create a checklist:

1. Place the cursor in the desired location within the {{site.productname}} editor.
1. Click the ![**Checklist icon**]({{site.baseurl}}/images/icons/checklist.svg)(**Checklist icon**) on the toolbar or the checklist menu item. A checkbox will be added in the desired location.
1. Type in the first item and press `Enter` to add another item in the list.
1. To check items by adding a check mark to them, click on the checkbox next to the desired item from this list.

#### Result

A checklist will be created. If some items were selected, a check mark will appear in the adjacent checkbox.

### Toggling checklist items

The state of the check marks of checklist items can be toggled to be empty or checked. This is done by clicking the checkbox. If using the keyboard, the check marks can be toggled by placing the cursor on the desired Checklist item and pressing the `Ctrl+Enter` (`Command+Enter` if you are a Mac user) key combination.

