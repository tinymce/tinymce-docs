---
layout: default
title: Code Sample plugin
title_nav: Code Sample
description: Insert and embed syntax highlighted code snippets.
keywords: syntax highlight codesample code contenteditable codesample_languages
controls: toolbar button
---

The Code Sample plugin (`codesample`) lets a user insert and embed syntax color highlighted code snippets into the editable area. It also adds a button to the toolbar which on click will open a dialog box to accept raw code input.

This plugin demonstrates the support for the new block based `contenteditable=false` elements available in version TinyMCE 4.3.

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "codesample",
  toolbar: "codesample"
});
```

By default `codesample` uses http://prismjs.com/ to embed the code samples within the editor and works out of the box. That is, when a user copies valid code syntax into the editable area the code will be automatically formatted according to Prism default CSS rules.

> Prism.js and prism.css need to be added to a page for syntax highlighting to work. See the instructions below to learn how to do this.

### Options

### `codesample_languages`

This configuration option enables you to set a list of languages to be displayed in the languages drop down.

### `codesample_content_css`

This option enables you to specify a custom css file to be loaded when codesamples are inserted into the editor.

##### Example

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'codesample',
  codesample_languages: [
		{text: 'HTML/XML', value: 'markup'},
		{text: 'JavaScript', value: 'javascript'},
		{text: 'CSS', value: 'css'},
		{text: 'PHP', value: 'php'},
		{text: 'Ruby', value: 'ruby'},
		{text: 'Python', value: 'python'},
		{text: 'Java', value: 'java'},
		{text: 'C', value: 'c'},
		{text: 'C#', value: 'csharp'},
		{text: 'C++', value: 'cpp'}
	],
  toolbar: 'codesample'
});
```

##### Using Prism.js on your web page

You need to add `prism.js` and `prism.css` to your page in order to get the syntax highlighted code samples on your webpage (as created by the Code Sample plugin). The Code Sample plugin uses the following languages: markup, javascript, css, php, ruby, python, java, c, csharp and cpp. You can generate the `prism.js` and `prism.css` files on the [download](http://prismjs.com/download.html) page at the Prism website.

##### Example of using the Prism.js script

```html
<link rel="stylesheet" type="text/css" href="prism.css">
<script src="prism.js"></script>
<pre class="language-markup"><code>...</code></pre>
```

## Live example

{% include codepen.html id="codesample" %}
