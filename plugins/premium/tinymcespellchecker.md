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

### `spellchecker_active`

This option enables or disables the spell checker when the editor is loaded. When set to `false`, the spellchecker will not be active when the editor is initialized. The toolbar button or the menu item will have to be selected by the user to start the spell checker.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

#### Example: Using `spellchecker_active`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'tinymcespellchecker',
  spellchecker_active: true
});
```

### `spellchecker_dialog`

This option specifies the primary spell checking mode.

- When set to `true`, the [`spellcheck` toolbar button](#toolbarbuttons) will open a dialog that will step the user through each potential spelling error in the document.
- When set to `false`, the [`spellcheck` toolbar button](#toolbarbuttons) will enable or disable as-you-type spell checking and the [`spellcheckdialog` toolbar button](#toolbarbuttons) will open the spell checker dialog.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

#### Example: Using `spellchecker_dialog`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'tinymcespellchecker',
  toolbar: 'spellchecker',
  spellchecker_dialog: true
});
```

### `spellchecker_language`

This option specifies the default language used by Spell Checker Pro.

**Type:** `String`

**Default Value:** `'en_us'`

#### Example: Using `spellchecker_language`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'tinymcespellchecker',
  spellchecker_language: 'en_us'
});
```

{% include configuration/languages.md %}

### `spellchecker_languages`

This option specifies the spellchecker languages that are available to the user, provided as a comma delimited string. For a list of available languages, see: [Supported languages](#supportedlanguages).

**Type:** comma-separated `String`

**Default Value:**
```
'US English=en_us,UK English=en_gb,Danish=da,Dutch=nl,Finnish=fi,French=fr,German=de,Italian=it,Norwegian=nb,Brazilian Portuguese=pt,Iberian Portuguese=pt_PT,Spanish=es,Swedish=sv'
```

#### Example: Using `spellchecker_languages`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'tinymcespellchecker',
  spellchecker_languages: 'US English=en_us,UK English=en_gb,Danish=da,Dutch=nl,Finnish=fi,French=fr,German=de,Italian=it,Norwegian=nb,Brazilian Portuguese=pt,Iberian Portuguese=pt_PT,Spanish=es,Swedish=sv'
});
```

### `spellchecker_on_load`

> **Note**: Removed in Spell Checker Pro 2.0 (TinyMCE 5.2). Spell Checker Pro will now always run on editor initialization. To disable Spell Checker Pro on load, use [`spellchecker_active`](#spellchecker_active).

This option runs the spellchecker when the contents of the editor is loaded.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

#### Example: Using `spellchecker_on_load`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'tinymcespellchecker',
  spellchecker_on_load: true
});
```

### `spellchecker_rpc_url`

This option specifies the URL of the server-side `ephox-spelling` service. For instructions on how to set up a Spell Checker Pro server-side component, see: the [server-side component installation guide]({{site.baseurl}}/enterprise/server/).

> **Note:** `spellchecker_rpc_url` is **not** required when enabling this plugin via [{{site.cloudname}}]({{site.baseurl}}/cloud-deployment-guide/editor-and-features/)

**Type:** `String`

#### Example: Using `spellchecker_rpc_url`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'tinymcespellchecker',
  spellchecker_rpc_url: 'localhost/ephox-spelling'
});
```

### `spellchecker_select_languages`

This option specifies the languages that can be set for content when working with multi-language content. The specified languages will be available from the [`language` toolbar drop-down menu button](#toolbarbuttons).  For a list of available languages, see: [Supported languages](#supportedlanguages).

**Type:** comma-separated `String`

**Default Value:** `'en,es,fr,de,pt,zh'`

#### Example: Using `spellchecker_select_languages`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'tinymcespellchecker',
  toolbar: 'language',
  spellchecker_select_languages: 'en,es,fi,fr,da,de,nl,it,nb,pt,sv,zh'
});
```

<!-- Bookmark for deprecated option name -->
<a class="anchor" id="spellchecker_whitelist">

### `spellchecker_ignore_list`

This option specifies which words should be ignored by the spell checker. If an array of words is provided, the specified words will be ignored for all languages. If an object containing an array of words per language is provided, the specified words will be ignored for the specified languages.

> **Note:** Languages specified as keys in the `spellchecker_ignore_list` object must match the configured [Spellchecker Languages]({{site.baseurl}}/plugins/premium/tinymcespellchecker/#spellchecker_languages).

**Type:** `String[]` or `Object`

#### Example: Using `spellchecker_ignore_list` to ignore words in all languages

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'tinymcespellchecker',
  spellchecker_ignore_list: ['tinymce', 'TinyMCE']
});
```

#### Example: Using `spellchecker_ignore_list` for specific languages

{{site.requires_5_7v}}

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'tinymcespellchecker',
  spellchecker_ignore_list: {
    en_us: ['tinymce', 'TinyMCE'],
    es: ['tinymce']
  }
});
```

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

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

{{ site.requires_5_7v }}

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

## Commands

The Spell Checker Pro plugin provides the following commands.

{% include commands/tinymcespellchecker-cmds.md %}

## APIs

The {{pluginname}} plugin provides the following APIs.

{% include plugin-apis/{{plugincode}}-apis.md %}
