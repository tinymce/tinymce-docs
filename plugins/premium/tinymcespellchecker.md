---
layout: default
title: Spell Checker Pro plugin
title_nav: Spell Checker Pro
description: Check spelling as-you-type in TinyMCE.
keywords: tinymcespellchecker spellchecker_language spellchecker_languages spellchecker_rpc_url spellchecker_dialog ephox English US UK Danish Dutch Finnish French German Italian Norwegian Portuguese Brazilian European Spanish Swedish
---

{% assign pluginname = "Spell Checker Pro" %}
{% assign plugincode = "tinymcespellchecker" %}

{{site.premiumplugin}}

**Spell Checker Pro** adds spell checking as-you-type capabilities to {{site.productname}}. For information on the supported languages, refer to [this]({{site.baseurl}}/plugins/premium/tinymcespellchecker/#spellchecker_language) section.

{% include live-demo.html id="spellcheckerpro" %}

## Cloud Installation

To enable the {{site.productname}} Enterprise Spellchecking plugin with [{{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/editor-and-features):

1. If configured, disable the `spellchecker` plugin provided with {{site.productname}}, by removing it from the `plugins` list.
2. Add `tinymcespellchecker` to the `plugins` list.

With {{site.cloudname}} the server-side spellchecking component is automatically configured, so the `spellchecker_rpc_url` parameter does not need to be set.

### Example: TinyMCE Cloud Installation

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'tinymcespellchecker',
  spellchecker_language: 'en'
});
```

## Self-hosted Installation

To enable the {{site.productname}} Enterprise Spellchecking plugin:

1. If configured, disable the `spellchecker` plugin provided with {{site.productname}}, by removing it from the `plugins` list.
2. Add `tinymcespellchecker` to the `plugins` list.

For information on installing the server-side component for spell checking, please see the [server-side component installation guide]({{site.baseurl}}/enterprise/server/).

### Example: TinyMCE Self-hosted Installation

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'tinymcespellchecker',
  spellchecker_rpc_url: 'localhost/ephox-spelling',
  spellchecker_language: 'en'
});
```

## Usage

The {{site.productname}} Enterprise Spellchecking plugin activates automatically when users type content into the editor. To select a spelling suggestion for a misspelled word, right-click the misspelled word to open the contextual menu.

## Configuration Options

{% include configuration/spellchecker_active.md %}

{% include configuration/spellchecker_dialog.md %}

{% include configuration/spellchecker_language.md %}

{% include misc/spellchecker-languages.md %}

{% include configuration/spellchecker_languages.md %}

{% include configuration/spellchecker_on_load.md %}

{% include configuration/spellchecker_rpc_url.md %}

{% include plugins/tinymcespellchecker-content-langs.md %}

{% include configuration/spellchecker_select_languages.md %}

<!-- Bookmark for deprecated option name -->
<a class="anchor" id="spellchecker_whitelist">

{% include configuration/spellchecker_ignore_list.md %}

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Spell Checker Pro plugin provides the following commands.

{% include commands/tinymcespellchecker-cmds.md %}

## Events

{% include events/tinymcespellchecker-events.md %}

### SpellcheckerIgnore event

This event triggers when the user selects **Ignore** on a misspelled word.

#### Example: The SpellcheckerIgnore event

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'tinymcespellchecker',
  toolbar: 'spellchecker',
  init_instance_callback: function (editor) {
    editor.on('SpellcheckerIgnore', function (e) {
      console.log('Ignore word', e.word);
    });
  }
});
```

### SpellcheckerIgnoreAll event

This event triggers when the user selects **Ignore All** on a misspelled word.

#### Example: The SpellcheckerIgnoreAll event

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'tinymcespellchecker',
  toolbar: 'spellchecker',
  init_instance_callback: function (editor) {
    editor.on('SpellcheckerIgnoreAll', function (e) {
      console.log('Ignore word (all)', e.word);
    });
  }
});
```

### SpellcheckStart event

This event triggers when the user __enables__ the `spellchecker`.

#### Example: The SpellcheckStart event

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'tinymcespellchecker',
  toolbar: 'spellchecker',
  init_instance_callback: function (editor) {
    editor.on('SpellcheckStart', function (e) {
      console.log('Started spellchecking');
    });
  }
});
```

### SpellcheckEnd event

This event triggers when the user __disables__ the `spellchecker`.

#### Example: The SpellcheckEnd event

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'tinymcespellchecker',
  toolbar: 'spellchecker',
  init_instance_callback: function (editor) {
    editor.on('SpellcheckEnd', function (e) {
      console.log('Stopped spellchecking');
    });
  }
});
```

### SpellcheckError event

This event triggers when a spellchecker error occurs, such as the Spell Checker Pro service can’t be reached.

#### Example: The SpellcheckError event

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'tinymcespellchecker',
  toolbar: 'spellchecker',
  init_instance_callback: function (editor) {
    editor.on('SpellcheckError', function (e) {
      console.log('Spelling service error: ' + e.message);
    });
  }
});
```

### SpellcheckerLanguageChanged event



This event fires when the spellchecking language is changed.

#### Example: The SpellcheckerLanguageChanged event

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'tinymcespellchecker',
  toolbar: 'spellchecker',
  init_instance_callback: function (editor) {
    editor.on('SpellcheckerLanguageChanged', function (e) {
      console.log('Spelling language changed: ' + e.language + '. Previous language: ' + e.prevLanguage);
    });
  }
});
```

## APIs

The {{pluginname}} plugin provides the following APIs.

{% include plugin-apis/{{plugincode}}-apis.md %}
