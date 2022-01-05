---
layout: default
title: Bundling TinyMCE plugins using module loading
title_nav: Plugins
description_short: Information on bundling plugins
description: Information on bundling TinyMCE plugins using module loading
---
{% assign editorcomponent = "plugin" %}
{% include module-loading/bundling-ref-example.md %}
{% assign editorcomponent = nil %}

The following table shows examples of the syntax used to bundle the following plugin.

Required files for an example plugin:

```
./plugins/example/content.css
./plugins/example/plugin.js
```

Example syntax for including the example "plugin" in a bundle:

<table>
<thead>
<tr>
<th>Module Syntax</th>
<th>Source</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="2">ES6+</td>
<td>npm</td>
<td>
<div class="language-js highlighter-rouge"><div class="highlight"><pre class="prettyprint prettyprinted" style=""><code><span class="k"><span class="kwd">import</span></span><span class="pln"> </span><span class="nx"><span class="pln">pluginCss</span></span><span class="pln"> </span><span class="k"><span class="kwd">from</span></span><span class="pln"> </span><span class="s1"><span class="str">'tinymce/plugins/example/content.css'</span></span><span class="p"><span class="pun">;</span></span><span class="pln">
</span><span class="k"><span class="kwd">import</span></span><span class="pln"> </span><span class="s1"><span class="str">'tinymce/plugins/example'</span></span><span class="p"><span class="pun">;</span></span>
</code></pre></div></div>
</td>
</tr>
<tr>
<td><code>.zip</code>&nbsp;</td>
<td>
<div class="language-js highlighter-rouge"><div class="highlight"><pre class="prettyprint prettyprinted" style=""><code><span class="k"><span class="kwd">import</span></span><span class="pln"> </span><span class="nx"><span class="pln">pluginCss</span></span><span class="pln"> </span><span class="k"><span class="kwd">from</span></span><span class="pln"> </span><span class="s1"><span class="str">'../tinymce/plugins/example/content.css'</span></span><span class="p"><span class="pun">;</span></span><span class="pln">
</span><span class="k"><span class="kwd">import</span></span><span class="pln"> </span><span class="s1"><span class="str">'../tinymce/plugins/example/plugin'</span></span><span class="p"><span class="pun">;</span></span>
</code></pre></div></div>
</td>
</tr>
<tr>
<td rowspan="2">Common JS</td>
<td>npm</td>
<td>
<div class="language-js highlighter-rouge"><div class="highlight"><pre class="prettyprint prettyprinted" style=""><code><span class="kd"><span class="kwd">var</span></span><span class="pln"> </span><span class="nx"><span class="pln">pluginCss</span></span><span class="pln"> </span><span class="o"><span class="pun">=</span></span><span class="pln"> </span><span class="nx"><span class="kwd">require</span></span><span class="p"><span class="pun">(</span></span><span class="s1"><span class="str">'tinymce/plugins/example/content.css'</span></span><span class="p"><span class="pun">);</span></span><span class="pln">
</span><span class="nx"><span class="kwd">require</span></span><span class="p"><span class="pun">(</span></span><span class="s1"><span class="str">'tinymce/plugins/example'</span></span><span class="p"><span class="pun">);</span></span>
</code></pre></div></div>
</td>
</tr>
<tr>
<td><code>.zip</code>&nbsp;</td>
<td>
<div class="language-js highlighter-rouge"><div class="highlight"><pre class="prettyprint prettyprinted" style=""><code><span class="kd"><span class="kwd">var</span></span><span class="pln"> </span><span class="nx"><span class="pln">pluginCss</span></span><span class="pln"> </span><span class="o"><span class="pun">=</span></span><span class="pln"> </span><span class="nx"><span class="kwd">require</span></span><span class="p"><span class="pun">(</span></span><span class="s1"><span class="str">'../tinymce/plugins/example/content.css'</span></span><span class="p"><span class="pun">);</span></span><span class="pln">
</span><span class="nx"><span class="kwd">require</span></span><span class="p"><span class="pun">(</span></span><span class="s1"><span class="str">'../tinymce/plugins/example/plugin.js'</span></span><span class="p"><span class="pun">);</span></span>
</code></pre></div></div>
</td>
</tr>
</tbody>
</table>

> **Important**: The handling of content CSS files (such as `content.css` or `content.min.css`) varies between bundling tools. View the relevant guide for the required syntax at [Bundling {{site.productname}} with a module loader]({{site.baseurl}}/how-to-guides/usage-with-module-loaders/).

{% comment %}
```js
import pluginCss from 'tinymce/plugins/example/content.css';
import 'tinymce/plugins/example';
```
```js
import pluginCss from '../tinymce/plugins/example/content.css';
import '../tinymce/plugins/example/plugin';
```
```js
var pluginCss = require('tinymce/plugins/example/content.css');
require('tinymce/plugins/example');
```
```js
var pluginCss = require('../tinymce/plugins/example/content.css');
require('../tinymce/plugins/example/plugin.js');
```
{% endcomment %}

{% include module-loading/bundling-plugin-files.md %}