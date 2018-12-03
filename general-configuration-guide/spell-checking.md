---
layout: default
title: Check spelling in TinyMCE
title_nav: Spell checking
keywords: spell checker spelling browser_spellcheck gecko_spellcheck
---
TinyMCE provides several options to bring spell checking capabilities to your users.

## Browser-based spell checking

Assign the [`browser_spellcheck`]({{ site.baseurl }}/configure/spelling/#browser_spellcheck) configuration option the value of `true` to utilize the browser's native spell check functionality. Enabling the [`contextmenu`]({{ site.baseurl }}/plugins/contextmenu/) option _may_ be required depending on the right click / context useability requirement. 

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  browser_spellcheck: true,
  contextmenu: false
});
```

## PHP Spellchecker component

You can also use TinyMCE's PHP _Spellchecker_ component, that you can [download here](http://download.moxiecode.com/spellcheckers/tinymce_spellchecker_php_4.0.zip). To view the complete changelog history, view this [txt](http://archive.tinymce.com/develop/changelog/?type=phpspell) file. The TinyMCE's PHP Spellchecker component requires a little more work than the browser-based option, being a server-side script.

This plugin enables **Enchant** or **PSpell** on the server to spell check content within the TinyMCE editor.

##### Installation steps for the default Enchant engine

1. Enable **Enchant** in PHP.
2. Download the **TinyMCE Spellchecker** for PHP package. [(Direct download)](http://download.moxiecode.com/spellcheckers/tinymce_spellchecker_php_4.0.zip).
3. Unpack the package in the `/path/to/tinymce/plugins/spellchecker` directory.
4. Configure TinyMCE to use the spell checker by enabling the `spellchecker` plugin.
5. Configure the `spellchecker_rpc_url` to `'spellchecker.php'`.
6. Download word lists and place them in the `/dicts` directory for example "es_ES.dic, es_ES.aff".

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'spellchecker',
  toolbar: 'spellchecker',
  spellchecker_rpc_url: 'spellchecker.php'
});
```

Review the [Spell Checker Plugin]({{ site.baseurl }}/plugins/spellchecker/) for advanced configuration options.

## TinyMCE Spell Checker Pro plugin

Use the [Spell Checker Pro plugin]({{ site.baseurl }}/plugins/tinymcespellchecker/) for scalable enterprise-grade spell check as-you-type functionality. **Spell Checker Pro** requires both a client-side plugin to be configured and a server-side component to be installed and configured.

Review the TinyMCE Premium Features [documentation for Spelling]({{ site.baseurl }}/enterprise/check-spelling/). Learn more about [TinyMCE Premium Products here](https://www.tinymce.com/pricing/).

{% assign_page next_page = "/general-configuration-guide/filter-content/index.html" %}
{% include next-step.html next=next_page %}
