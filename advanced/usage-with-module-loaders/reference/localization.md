---
layout: default
title: Bundling the User Interface localizations for TinyMCE
title_nav: UI localizations
description_short: Information on bundling User Interface localizations
description: Information on bundling User Interface localizations
---

## Overview

- [Using community localizations](#usingcommunitylocalizations)
- [Using premium self-hosted localizations](#usingpremiumself-hostedlocalizations)

## Using community localizations

{% assign forModuleLoaders = true %}
{% include misc/using-community-lang-packs.md %}
{% assign forModuleLoaders = false %}

## Using premium self-hosted localizations

{% assign editorcomponent = "localization" %}
{% include module-loading/bundling-ref-example.md %}
{% assign editorcomponent = nil %}

The following table shows examples of the syntax used to bundle the following example localization file:

```
./langs/sv_SE.js
```

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
<div class="language-js highlighter-rouge"><div class="highlight"><pre class="prettyprint prettyprinted" style=""><code><span class="k"><span class="kwd">import</span></span><span class="pln"> </span><span class="s1"><span class="str">'tinymce/langs/sv_SE'</span></span><span class="p"><span class="pun">;</span></span>
</code></pre></div></div>
</td>
</tr>
<tr>
<td><code>.zip</code>&nbsp;</td>
<td>
<div class="language-js highlighter-rouge"><div class="highlight"><pre class="prettyprint prettyprinted" style=""><code><span class="k"><span class="kwd">import</span></span><span class="pln"> </span><span class="s1"><span class="str">'../tinymce/langs/sv_SE'</span></span><span class="p"><span class="pun">;</span></span>
</code></pre></div></div>
</td>
</tr>
<tr>
<td rowspan="2">Common JS</td>
<td>npm</td>
<td>
<div class="language-js highlighter-rouge"><div class="highlight"><pre class="prettyprint prettyprinted" style=""><code><span class="nx"><span class="kwd">require</span></span><span class="p"><span class="pun">(</span></span><span class="s1"><span class="str">'tinymce/langs/sv_SE'</span></span><span class="p"><span class="pun">);</span></span>
</code></pre></div></div>
</td>
</tr>
<tr>
<td><code>.zip</code>&nbsp;</td>
<td>
<div class="language-js highlighter-rouge"><div class="highlight"><pre class="prettyprint prettyprinted" style=""><code><span class="nx"><span class="kwd">require</span></span><span class="p"><span class="pun">(</span></span><span class="s1"><span class="str">'../tinymce/langs/sv_SE.js'</span></span><span class="p"><span class="pun">);</span></span>
</code></pre></div></div>
</td>
</tr>
</tbody>
</table>

{% comment %}
```js
import 'tinymce/langs/sv_SE';
```
```js
import '../tinymce/langs/sv_SE';
```
```js
require('tinymce/langs/sv_SE');
```
```js
require('../tinymce/langs/sv_SE.js');
```
{% endcomment %}

{% assign forModuleLoaders = true %}
{% include misc/ui-languages.md %}
{% assign forModuleLoaders = false %}