---
layout: default
title: Checklist plugin
title_nav: Checklist
description: Add checklists to your content.
keywords: lists todo checklist
controls: toolbar button
---

The **Checklist** plugin adds interactive checklists to your content. 

> Note: The Checklist Plugin has to be used together with the Lists plugin to work.

### Adding the Checklist toolbar button

Use the following script to add the Checklist toolbar button:

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "lists checklist",
  toolbar: "checklist"
});
```