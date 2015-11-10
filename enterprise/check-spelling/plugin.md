---
layout: default
title: Install Spelling Plugin
description: Spell Checker Pro is a premium plugin and server to check spelling as-you-type.
keywords: tinymcespellchecker
---


## Client-Side Plugin Installation

To enable Spell Checker Pro:

1. If you are currently using the `spellchecker` plugin provided with TinyMCE Community Edition, disable it by removing it from the `plugins` list.
2. Add `tinymcespellchecker` to the `plugins` list.

Example TinyMCE Configuration:

````
tinymce.init({
	selector: 'textarea',
	plugins: 'tinymcespellchecker',
	spellchecker_rpc_url: 'localhost/ephox-spelling',
	spellchecker_language: 'en',
});
````

### Usage

The TinyMCE Spell Checker Pro plugin activates automatically when users type content into the editor. To see and select a spelling suggestion after a word has been misspelled, please right click the misspelled red underlined word.

### Client-Side Configuration Options

#### spellchecker_rpc_url
This setting enables you to specify the URL to be used for the server side ephox-spelling service.

#### spellchecker_languages
This optional setting allows you to specify the languages that are available to the user, provided as a comma delimited string. The default value for this setting is: 'US English=en,UK English=en_GB,Danish=da,Dutch=nl,Finnish=fi,French=fr,German=de,Italian=it,Norwegian=nb,Brazilian Portuguese=pt_BR,Iberian Portuguese=pt_PT,Spanish=es,Swedish=sv'

#### spellchecker_language
This optional setting allows you to specify the language code that will be used by default. This defaults to "en".

### Toolbar Buttons

#### spellchecker
This button allows the user to perform a spellcheck on the entire document.  In addition, the drop down menu attached to this button allows you to specify the language that is currently used when spellchecking.

