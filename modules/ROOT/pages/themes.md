---
layout: default
title: Bundling TinyMCE themes using module loading
title_nav: Themes
description_short: Information on bundling themes
description: Information on bundling TinyMCE themes using module loading
---
{% assign editorcomponent = "theme" %}
{% include module-loading/bundling-ref-example.md %}
{% assign editorcomponent = nil %}

The following table shows examples of the syntax used to bundle the silver theme:

```
./themes/silver/theme.js
```

Example syntax for including the silver theme in a bundle:

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
<div class="language-js highlighter-rouge"><div class="highlight"><pre class="prettyprint prettyprinted" style=""><code><span class="k"><span class="kwd">import</span></span><span class="pln"> </span><span class="s1"><span class="str">'tinymce/themes/silver'</span></span><span class="p"><span class="pun">;</span></span>
</code></pre></div></div>
</td>
</tr>
<tr>
<td><code>.zip</code>&nbsp;</td>
<td>
<div class="language-js highlighter-rouge"><div class="highlight"><pre class="prettyprint prettyprinted" style=""><code><span class="k"><span class="kwd">import</span></span><span class="pln"> </span><span class="s1"><span class="str">'../tinymce/themes/silver/theme'</span></span><span class="p"><span class="pun">;</span></span>
</code></pre></div></div>
</td>
</tr>
<tr>
<td rowspan="2">Common JS</td>
<td>npm</td>
<td>
<div class="language-js highlighter-rouge"><div class="highlight"><pre class="prettyprint prettyprinted" style=""><code><span class="nx"><span class="kwd">require</span></span><span class="p"><span class="pun">(</span></span><span class="s1"><span class="str">'tinymce/themes/silver'</span></span><span class="p"><span class="pun">);</span></span>
</code></pre></div></div>
</td>
</tr>
<tr>
<td><code>.zip</code>&nbsp;</td>
<td>
<div class="language-js highlighter-rouge"><div class="highlight"><pre class="prettyprint prettyprinted" style=""><code><span class="nx"><span class="kwd">require</span></span><span class="p"><span class="pun">(</span></span><span class="s1"><span class="str">'../tinymce/themes/silver/theme.js'</span></span><span class="p"><span class="pun">);</span></span>
</code></pre></div></div>
</td>
</tr>
</tbody>
</table>

{% comment %}
```js
import 'tinymce/themes/silver';
```
```js
import '../tinymce/themes/silver/theme';
```
```js
require('tinymce/themes/silver');
```
```js
require('../tinymce/themes/silver/theme.js');
```

{% endcomment %}

{% include module-loading/bundling-theme-files.md %}