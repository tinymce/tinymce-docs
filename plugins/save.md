---
layout: default
title: Save plugin
title_nav: Save
description: Adds a save button to the TinyMCE toolbar.
keywords: submit save_enablewhendirty save_oncancelcallback save_onsavecallback
controls: toolbar button
---

This plugin adds a save button to the TinyMCE toolbar, which will submit the form that the editor is within.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "save",
  toolbar: "save"
});
```

**Error messages**

The `"Error: Form submit field collision."` error message will appear if you call the submit button of your form "submit", which causes a collision with the JS form `submit` function and makes it impossible to submit the form using code. This can easily be avoided by naming the submit button `"submitbtn"` or similar.

So replace this:

```html
<form><button name="submit"></button></form>
```

With this:

```html
<form><button name="submitbtn"></button></form>
```

### Options

These settings affect the execution of the `save` plugin. Callbacks that will execute after saving the content or canceling saving the content are included in this section. In addition, a setting that will disable the save button when no modifications have been made to the content is available here.

### `save_enablewhendirty`

This option allows you to disable the save button until modifications have been made to the content of the editor. This option is enabled by default.

**Type:** `Boolean`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "save",
  toolbar: "save",
  save_enablewhendirty: true
});
```

### `save_oncancelcallback`

This option allows you to specify the function that will be executed when the cancel button/command is invoked.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "save",
  toolbar: "save",
  save_oncancelcallback: function () { console.log('Save canceled'); }
});
```

### `save_onsavecallback`

This option allows you to specify the function that will be executed when the save button/command is invoked.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "save",
  toolbar: "save",
  save_onsavecallback: function () { console.log('Saved'); }
});
```
