---
layout: default
title: Creating custom Group toolbar buttons
title_nav: Group toolbar button
description: Creating custom Group toolbar buttons for TinyMCE
keywords: toolbar toolbarbuttons buttons toolbarbuttonsapi
---

A group toolbar button is a toolbar button that contains a collection of other toolbar buttons that are displayed in a pop-up when clicked. The style of toolbar shown is based on the current [toolbar mode]({{site.baseurl}}/configure/editor-appearance/#toolbarmode). For example, if `toolbar_mode` is set to `floating`, the toolbar group pop-up will appear in a floating shelf.

> **Note:** The group toolbar button is _only_ supported when using the `floating` toolbar mode. If the `toolbar_groups` option is used with other toolbar modes, the toolbar group button will not be displayed and a warning message will be printed in the console.

### Config options

| Name | Value | Requirement | Description |
|------| ------| ------------| ----------- |
| text | string | optional | Text to display if no icon is found. |
| icon | string | optional | {{site.predefinedIconsOnly}} |
| tooltip | string | optional | Text for button tooltip. |
| items | string or LabelledToolbar[] | required | A string of space separated toolbar button names, or an array of [labelled toolbar buttons]({{site.baseurl}}/configure/editor-appearance/#addingtoolbargrouplabels). |
| onSetup | (api) => (api) => void | optional | default: () => () => {} - Function that's invoked when the button is rendered. For details, see: [Using `onSetup`](#usingonsetup). |

### API

| Name | Value | Description |
|------| ------| ------------|
| isDisabled | ( ) => boolean | Checks if the button is disabled. |
| setDisabled | (state: boolean) => void | Sets the button's disabled state. |

### Group toolbar button example and explanation

The following is a simple group toolbar button example:

{% include live-demo.html id="custom-toolbar-group-button" tab="js" %}

The example above configures a custom **alignment** group toolbar button. When clicked the button will show a floating shelf containing the align left, center, right and justify toolbar buttons.

{% include misc/onSetup.md %}
