# Save plugin
:title_nav: Save
:description: Adds a save button to the TinyMCE toolbar.
:keywords: submit save_enablewhendirty save_oncancelcallback save_onsavecallback
:controls: toolbar button

{% assign pluginname = "Save" %}
{% assign plugincode = "save" %}

This plugin adds a save button to the {{site.productname}} toolbar, which will submit the form that the editor is within.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'save',
  toolbar: 'save'
});
```

## Save error messages

The `"Error: Form submit field collision."` error message will appear if you call the submit button of your form "submit", which causes a collision with the JS form `submit` function and makes it impossible to submit the form using code. This can easily be avoided by naming the submit button `"submitbtn"` or similar.

So replace this:

```html
<form><button name="submit"></button></form>
```

With this:

```html
<form><button name="submitbtn"></button></form>
```

## Options

These settings affect the execution of the `save` plugin. Callbacks that will execute after saving the content or canceling saving the content are included in this section. In addition, a setting that will disable the save button when no modifications have been made to the content is available here.

{% include configuration/save_enablewhendirty.md %}

{% include configuration/save_oncancelcallback.md %}

{% include configuration/save_onsavecallback.md %}

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

## Commands

The Save plugin provides the following {{site.productname}} commands.

{% include commands/save-cmds.md %}
