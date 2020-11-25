---
layout: default
title: Spell Checker plugin
title_nav: Spell Checker
description: Enables TinyMCE's spellcheck functionality.
keywords: spellchecker spellchecker_callback spellchecker_language spellchecker_languages spellchecker_rpc_url spellchecker_wordchar_pattern
controls: toolbar button, menu item
---

{% assign pluginname = "Spell Checker" %}
{% assign plugincode = "spellchecker" %}

{{site.deprecate_spellchecker}}

> **Note**: The Spell Checker plugin is self-hosted _only_. The Spell Checker Pro plugin is provided for some {{site.cloudname}} plans. For information on the Spell Checker Pro plugin, see: [Spell Checker Pro plugin]({{site.baseurl}}/plugins/premium/tinymcespellchecker/).

This plugin enables {{site.productname}}'s spellcheck functionality. It also adds a toolbar button and the menu item `Spellcheck` under the `Tools` menu dropdown.

**Type:** `String`

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'spellchecker',
  menubar: 'tools',
  toolbar: 'spellchecker',
  spellchecker_rpc_url: 'spellchecker.php'
});
```

## Options

These settings affect the execution of the `spellchecker` plugin by modifying how spellchecking is handled. If you need an introduction to setting up server-side spell checking with {{site.productname}} please [refer to this section]({{ site.baseurl }}/general-configuration-guide/spell-checking/) in the General Configuration Guide.

### `spellchecker_callback`

This option lets you override the default server side request/communication logic for the spellchecker.

#### Example of a basic override without using a server

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'spellchecker',
  menubar: 'tools',
  toolbar: 'spellchecker',
  spellchecker_callback: function (method, text, success, failure) {
    var words = text.match(this.getWordCharPattern());
    if (method === "spellcheck") {
      var suggestions = {};
      for (var i = 0; i < words.length; i++) {
        suggestions[words[i]] = ["First", "Second"];
      }
      success({ words: suggestions, dictionary: [ ] });
    } else if (method === "addToDictionary") {
      // Add word to dictionary here
      success();
    }
  }
});
```

#### Example of fallback for the older JSON-RPC based format

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'spellchecker',
  menubar: 'tools',
  toolbar: 'spellchecker',
  spellchecker_callback: function (method, text, success, failure) {
    if (method === 'spellcheck') {
      tinymce.util.JSONRequest.sendRPC({
        url: '/tinymce/spellchecker.php',
        method: 'spellcheck',
        params: {
          lang: this.getLanguage(),
          words: text.match(this.getWordCharPattern())
        },
        success: function (result) {
          success(result);
        },
        error: function (error, xhr) {
          failure("Spellcheck error:" + xhr.status);
        }
      });
    } else {
      failure('Unsupported spellcheck method');
    }
  }
});
```

### `spellchecker_language`

This configuration option lets you set the default language code for the spellchecker. This defaults to "en".

**Type:** `String`

**Default Value:**  `en`

#### Example: Using `spellchecker_language`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'spellchecker',
  menubar: 'tools',
  toolbar: 'spellchecker',
  spellchecker_language: 'sv_SE'
});
```

### `spellchecker_languages`

This option lets you specify a list of languages for the user to select from. The list is added to the spellcheck toolbar icon. The format is based on the 3.x `spellchecker` format.

**Type:** `String`

**Default Value:**

```js
'English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr_FR,' +
'German=de,Italian=it,Polish=pl,Portuguese=pt_BR,Spanish=es,Swedish=sv'
```

#### Example: Using `spellchecker_languages`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  plugins: 'spellchecker',
  menubar: 'tools',
  toolbar: 'spellchecker',
  spellchecker_languages: 'English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr_FR,' +
    'German=de,Italian=it,Polish=pl,Portuguese=pt_BR,Spanish=es,Swedish=sv'
});
```

### `spellchecker_rpc_url`

This options enables you to specify a custom URL to be used for the spellchecker. This can be the `spellchecker` URL provided by the {{site.productname}} `spellchecker` packages or a URL to a page that you have in your system. The URL is **relative** to the `spellchecker` plugin.

**Type:** `String`

#### Example: Using `spellchecker_rpc_url`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'spellchecker',
  menubar: 'tools',
  toolbar: 'spellchecker',
  spellchecker_rpc_url: 'spellchecker.php'
});
```

#### Spellchecker request format

The request is a HTTP POST with URL encoded parameters described below.

| Parameter | Description |
|-----------|-------------|
| method    | Default to "spellcheck" might be other things in the future for storing custom dictionaries etc. |
| text      | Text to spellcheck this will contain a plain text version of the current editor contents. |
| lang      | The currently selected language code for example "en" or "sv_SE". |

#### Spellchecker response format

The response of a successful spellcheck request should like this:

```json
{
  "words": {
     "misspelled1": ["suggestion1", "suggestion2"],
     "misspelled2": ["suggestion1", "suggestion2"]
  }
}
```

And if there was an error:

```json
{
  "error": "Error message"
}
```

### `spellchecker_wordchar_pattern`

This option enables you to override the matching of characters that are parts of words. By default it will treat anything that isn't a space, comma, dot, dash, quote, etc, as parts of a word. For some languages or environments it might be useful to override this behavior.

**Type:** `String`

#### Example: Using `spellchecker_wordchar_pattern`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'spellchecker',
  menubar: 'tools',
  toolbar: 'spellchecker',
  spellchecker_wordchar_pattern: /[^\s,\.]+/g
});
```

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Spell Checker plugin provides the following JavaScript command.

{% include commands/spellchecker-cmds.md %}
