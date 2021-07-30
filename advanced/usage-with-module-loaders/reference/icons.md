---
layout: default
title: Bundling TinyMCE icon packs using module loading
title_nav: Icons
description_short: Information on bundling icon packs
description: Information on bundling TinyMCE icon packs using module loading
---

{% assign editorcomponent = "icon pack" %}
{% include module-loading/bundling-ref-example.md %}
{% assign editorcomponent = nil %}

The following table shows examples of the syntax used to bundle the following icon pack:

```
./icons/example/icons.js
```

Example syntax for including the example icon pack in a bundle:

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
<div class="language-js highlighter-rouge"><div class="highlight"><pre class="prettyprint prettyprinted" style=""><code><span class="k"><span class="kwd">import</span></span><span class="pln"> </span><span class="s1"><span class="str">'tinymce/icons/example'</span></span><span class="p"><span class="pun">;</span></span>
</code><button class="copy-to-clipboard-button">COPY CODE</button></pre></div></div>
</td>
</tr>
<tr>
<td><code>.zip</code>&nbsp;</td>
<td>
<div class="language-js highlighter-rouge"><div class="highlight"><pre class="prettyprint prettyprinted" style=""><code><span class="k"><span class="kwd">import</span></span><span class="pln"> </span><span class="s1"><span class="str">'../tinymce/icons/example/icons'</span></span><span class="p"><span class="pun">;</span></span>
</code><button class="copy-to-clipboard-button">COPY CODE</button></pre></div></div>
</td>
</tr>
<tr>
<td rowspan="2">Common JS</td>
<td>npm</td>
<td>
<div class="language-js highlighter-rouge"><div class="highlight"><pre class="prettyprint prettyprinted" style=""><code><span class="nx"><span class="kwd">require</span></span><span class="p"><span class="pun">(</span></span><span class="s1"><span class="str">'tinymce/icons/example'</span></span><span class="p"><span class="pun">);</span></span>
</code><button class="copy-to-clipboard-button">COPY CODE</button></pre></div></div>
</td>
</tr>
<tr>
<td><code>.zip</code>&nbsp;</td>
<td>
<div class="language-js highlighter-rouge"><div class="highlight"><pre class="prettyprint prettyprinted" style=""><code><span class="nx"><span class="kwd">require</span></span><span class="p"><span class="pun">(</span></span><span class="s1"><span class="str">'../tinymce/icons/example/icons.js'</span></span><span class="p"><span class="pun">);</span></span>
</code><button class="copy-to-clipboard-button">COPY CODE</button></pre></div></div>
</td>
</tr>
</tbody>
</table>

{% comment %}
```js
import 'tinymce/icons/example';
```
```js
import '../tinymce/icons/example/icons';
```
```js
require('tinymce/icons/example');
```
```js
require('../tinymce/icons/example/icons.js');
```
{% endcomment %}

{% include module-loading/bundling-icon-files.md %}