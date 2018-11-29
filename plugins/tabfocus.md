---
layout: default
title: Tab Focus plugin
title_nav: Tab Focus
description: Tab into and out of the TinyMCE control in your web form.
keywords: tabfocus tabfocus_elements prev next
---

This plugin adds the possibility to tab in/out of TinyMCE.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "tabfocus"
});
```

### Options

This setting affects the execution of the `tabfocus` plugin. This setting can be used to change the focus behavior of the editor when the tab key has been pressed inside the editable area.

### `tabfocus_elements`

This option enables you to specify an element `ID` to focus when the user presses the tab key inside the editor. You can also use the special `":prev"` and `":next"` values. It will then place the focus on either the previous or next input element placed before/after the TinyMCE instance in the DOM.

**Type:** `String`

##### Example

```js
// Move focus to specific element
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  tabfocus_elements: "somebutton"
});
```

```js
// Move focus to next element in DOM
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  tabfocus_elements: ":prev,:next"
});
```
