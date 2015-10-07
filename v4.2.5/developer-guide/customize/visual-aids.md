---
layout: default
title: Visual Aids
---

These settings apply to the content of the editor while it is being edited. An example of a visual aid that is available is the light grey, dotted border that is applied to tables when the border property is set to "0". These settings can change the classes that are applied to visual aids in addition to determining whether they appear at all.

## visual

This true/false option gives you the ability to turn on/off the visual aid for borderless tables. If the border of a table is set to "0", then TinyMCE adds a dotted line around the table by default.

Example of usage of the visual option:

```js
tinymce.init({
        ...
        visual: false
});
```

## visual_table_class

This option enables you to configure a custom class to be added to tables that have a border set to 0. This class is used to add dotted borders to tables that would otherwise be invisible for the user.

Example of usage of the visual_table_class option:

```js
tinymce.init({
        ...
        visual_table_class: "my-custom-class"
});
```

## visual_anchor_class

This option enables you to configure a custom class to be added to anchors with names since these are invisible by default.

Example of usage of the visual_anchor_class option:

```js
tinymce.init({
        ...
        visual_anchor_class: "my-custom-class"
});
```
