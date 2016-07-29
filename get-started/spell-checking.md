---
layout: default
title: 09. Check Spelling
description: Take spell checking to your users.
keywords: spell checker spelling browser_spellcheck gecko_spellcheck
---

No-one likes bad spelling and being able to help your users create error-free content is important to the entire TinyMCE team. Which is why we have several options to help you bring spell checking capabilities to your users.

## Browser-based spell checking

The first option (and easiest to implement) is to utilize the browser's native spell check functionality by assigning the [`browser_spellcheck`]({{ site.baseurl }}/configure/spelling/#browser_spellcheck) configuration option the value of `true`. Depending on the right click / context behavior you want, you *may* need to enable the [`contextmenu`]({{ site.baseurl }}/plugins/context-menu/) plugin.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  browser_spellcheck: true,
  contextmenu: false
});
```

## PHP Spellchecker component

You can also use TinyMCE's PHP Spellchecker component, which you can [download here](http://download.moxiecode.com/spellcheckers/tinymce_spellchecker_php_4.0.zip), changelog [here](http://archive.tinymce.com/develop/changelog/?type=phpspell). Being a server-side script this requires a little more work than the browser-based option.

This plugin enables you to use Enchant or PSpell on the backend of your server to spell check contents within the TinyMCE editor.

##### Installation steps for the default Enchant engine

1. Make sure you enable Enchant in your PHP.
2. Download the TinyMCE Spellchecker for PHP package [(direct download)](http://download.moxiecode.com/spellcheckers/tinymce_spellchecker_php_4.0.zip).
3. Unpack the package in the your/path/to/tinymce/plugins/spellchecker directory.
4. Configure TinyMCE to use the spell checker by enabling the `spellchecker` plugin.
5. Configure the `spellchecker_rpc_url` to `'spellchecker.php'`.
6. Download word lists and place them in the dicts directory for example "sv_SE.dic, sv_SE.aff".

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'spellchecker',
  toolbar: 'spellchecker',
  spellchecker_rpc_url: 'spellchecker.php'
});
```

Please see the [Spell Checker Plugin]({{ site.baseurl }}/plugins/spellchecker/) for advanced configuration options.

## TinyMCE Spellchecker Pro plugin

For developers requiring robust, enterprise-grade, spell check as-you-type functionality, you need the [Spell Checker Pro plugin]({{ site.baseurl }}/plugins/tinymcespellchecker/). Spell Checker Pro requires both a client-side plugin to be configured and a server-side component to be installed and configured.

Full documentation can be found in the TinyMCE Enterprise [documentation for Spelling](http://docs.ephox.com/display/TinyMCEEnterprise/Spell+Checking). Learn more about [TinyMCE Enterprise here](http://www.tinymce.com/pricing/).

{% assign_page next_page = "/get-started/filter-content/index.html" %}
{% include next-step.html next=next_page %}
