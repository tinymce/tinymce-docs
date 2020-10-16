---
layout: default
title: Code Sample plugin
title_nav: Code Sample
description: Insert and embed syntax highlighted code snippets.
keywords: syntax highlight codesample code contenteditable codesample_languages
controls: toolbar button
---

{% assign pluginname = "Code Sample" %}
{% assign plugincode = "codesample" %}

The Code Sample plugin (`codesample`) lets a user insert and embed syntax color highlighted code snippets into the editable area. It also adds a button to the toolbar which on click will open a dialog box to accept raw code input.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'codesample',
  toolbar: 'codesample'
});
```

By default, `codesample` uses `http://prismjs.com/` to embed the code samples within the editor and works out of the box. That is, when a user copies valid code syntax into the editable area the code will be automatically formatted according to Prism default CSS rules.

> **Note**: Prism.js and prism.css need to be added to a page for syntax highlighting to work. See the instructions below to learn how to do this.

## Using Prism.js on your web page

You need to add `prism.js` and `prism.css` to your page in order to get the syntax highlighted code samples on your webpage (as created by the Code Sample plugin). The Code Sample plugin uses the following languages: markup, javascript, css, php, ruby, python, java, c, csharp and cpp. You can generate the `prism.js` and `prism.css` files on the [download](http://prismjs.com/download.html) page at the Prism website.

### Example of using the Prism.js script

```html
<link rel="stylesheet" type="text/css" href="prism.css">
<script src="prism.js"></script>
<pre class="language-markup"><code>...</code></pre>
```

## Interactive example

{% include live-demo.html id="codesample" %}

## Options

### `codesample_global_prismjs`

{{ site.requires_5_2v }}

This configuration option allows a global Prism.js version to be used when highlighting code sample blocks, instead of using the Prism.js version bundled inside the `codesample` plugin. This allows for a custom version of Prism.js, including additional languages, to be used.

When using this option, ensure that Prism.js and any language add-ons are loaded on the site, alongside the TinyMCE script:

```html
<script src="prism.js" data-manual></script>
<script src="tinymce.js"></script>
```

**Type:** `Boolean`

**Default value:** `false`

**Possible values:** `true`, `false`

#### Example: Using `codesample_global_prismjs`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'codesample',
  toolbar: 'codesample',
  codesample_global_prismjs: true
});
```

### `codesample_languages`

This configuration option enables you to set a list of languages to be displayed in the languages drop down.

#### Example: Using `codesample_languages`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'codesample',
  codesample_languages: [
    { text: 'HTML/XML', value: 'markup' },
    { text: 'JavaScript', value: 'javascript' },
    { text: 'CSS', value: 'css' },
    { text: 'PHP', value: 'php' },
    { text: 'Ruby', value: 'ruby' },
    { text: 'Python', value: 'python' },
    { text: 'Java', value: 'java' },
    { text: 'C', value: 'c' },
    { text: 'C#', value: 'csharp' },
    { text: 'C++', value: 'cpp' }
  ],
  toolbar: 'codesample'
});
```

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Code Sample plugin provides the following JavaScript command.

{% include commands/codesample-cmds.md %}
