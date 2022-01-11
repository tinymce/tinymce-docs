# Bundling TinyMCE skins using module loading
:title_nav: Skins
:description_short: Information on bundling TinyMCE skins
:description: Information on bundling TinyMCE skins using module loading
{% assign editorcomponent = "skin" %}
{% include module-loading/bundling-ref-example.md %}
{% assign editorcomponent = nil %}

The following table shows examples of the syntax used to bundle the following skin:

Required files for the example skin:

```js
./skins/ui/example/content.css
./skins/ui/example/skin.css
```

Optional files for the example skin:

```js
/* Only required for inline editors */
./skins/ui/example/content.inline.css
/* Only required when using the deprecated mobile theme */
./skins/ui/example/skin.mobile.css
./skins/ui/example/content.mobile.css
./skins/ui/example/fonts/tinymce-mobile.woff
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
<div class="language-js highlighter-rouge"><div class="highlight"><pre class="prettyprint prettyprinted" style=""><code><span class="k"><span class="kwd">import</span></span><span class="pln"> </span><span class="nx"><span class="pln">contentUiCss</span></span><span class="pln"> </span><span class="k"><span class="kwd">from</span></span><span class="pln"> </span><span class="s1"><span class="str">'tinymce/skins/ui/example/content.css'</span></span><span class="p"><span class="pun">;</span></span><span class="pln">
</span><span class="k"><span class="kwd">import</span></span><span class="pln"> </span><span class="s1"><span class="str">'tinymce/skins/ui/example/skin.css'</span></span><span class="p"><span class="pun">;</span></span><span class="pln">
</span><span class="cm"><span class="com">/* Only required for inline editors */</span></span><span class="pln">
</span><span class="k"><span class="kwd">import</span></span><span class="pln"> </span><span class="nx"><span class="pln">contentUiInlineCss</span></span><span class="pln"> </span><span class="k"><span class="kwd">from</span></span><span class="pln"> </span><span class="s1"><span class="str">'tinymce/skins/ui/example/content.inline.css'</span></span><span class="p"><span class="pun">;</span></span>
</code></pre></div></div>
</td>
</tr>
<tr>
<td><code>.zip</code>&nbsp;</td>
<td>
<div class="language-js highlighter-rouge"><div class="highlight"><pre class="prettyprint prettyprinted" style=""><code><span class="k"><span class="kwd">import</span></span><span class="pln"> </span><span class="nx"><span class="pln">contentUiCss</span></span><span class="pln"> </span><span class="k"><span class="kwd">from</span></span><span class="pln"> </span><span class="s1"><span class="str">'../tinymce/skins/ui/example/content.css'</span></span><span class="p"><span class="pun">;</span></span><span class="pln">
</span><span class="k"><span class="kwd">import</span></span><span class="pln"> </span><span class="s1"><span class="str">'../tinymce/skins/ui/example/skin.css'</span></span><span class="p"><span class="pun">;</span></span><span class="pln">
</span><span class="cm"><span class="com">/* Only required for inline editors */</span></span><span class="pln">
</span><span class="k"><span class="kwd">import</span></span><span class="pln"> </span><span class="nx"><span class="pln">contentUiInlineCss</span></span><span class="pln"> </span><span class="k"><span class="kwd">from</span></span><span class="pln"> </span><span class="s1"><span class="str">'../tinymce/skins/ui/example/content.inline.css'</span></span>
</code></pre></div></div>
</td>
</tr>
<tr>
<td rowspan="2">Common JS</td>
<td>npm</td>
<td>
<div class="language-js highlighter-rouge"><div class="highlight"><pre class="prettyprint prettyprinted" style=""><code><span class="kd"><span class="kwd">var</span></span><span class="pln"> </span><span class="nx"><span class="pln">contentUiCss</span></span><span class="pln"> </span><span class="o"><span class="pun">=</span></span><span class="pln"> </span><span class="nx"><span class="kwd">require</span></span><span class="p"><span class="pun">(</span></span><span class="s1"><span class="str">'tinymce/skins/ui/example/content.css'</span></span><span class="p"><span class="pun">);</span></span><span class="pln">
</span><span class="nx"><span class="kwd">require</span></span><span class="p"><span class="pun">(</span></span><span class="s1"><span class="str">'tinymce/skins/ui/example/skin.css'</span></span><span class="p"><span class="pun">);</span></span><span class="pln">
</span><span class="cm"><span class="com">/* Only required for inline editors */</span></span><span class="pln">
</span><span class="kd"><span class="kwd">var</span></span><span class="pln"> </span><span class="nx"><span class="pln">contentUiInlineCss</span></span><span class="pln"> </span><span class="o"><span class="pun">=</span></span><span class="pln"> </span><span class="nx"><span class="kwd">require</span></span><span class="p"><span class="pun">(</span></span><span class="s1"><span class="str">'tinymce/skins/ui/example/content.inline.css'</span></span><span class="p"><span class="pun">);</span></span>
</code></pre></div></div>
</td>
</tr>
<tr>
<td><code>.zip</code>&nbsp;</td>
<td>
<div class="language-js highlighter-rouge"><div class="highlight"><pre class="prettyprint prettyprinted" style=""><code><span class="kd"><span class="kwd">var</span></span><span class="pln"> </span><span class="nx"><span class="pln">contentUiCss</span></span><span class="pln"> </span><span class="o"><span class="pun">=</span></span><span class="pln"> </span><span class="nx"><span class="kwd">require</span></span><span class="p"><span class="pun">(</span></span><span class="s1"><span class="str">'../tinymce/skins/ui/example/content.css'</span></span><span class="p"><span class="pun">);</span></span><span class="pln">
</span><span class="nx"><span class="kwd">require</span></span><span class="p"><span class="pun">(</span></span><span class="s1"><span class="str">'../tinymce/skins/ui/example/skin.css'</span></span><span class="p"><span class="pun">);</span></span><span class="pln">
</span><span class="cm"><span class="com">/* Only required for inline editors */</span></span><span class="pln">
</span><span class="kd"><span class="kwd">var</span></span><span class="pln"> </span><span class="nx"><span class="pln">contentUiInlineCss</span></span><span class="pln"> </span><span class="o"><span class="pun">=</span></span><span class="pln"> </span><span class="nx"><span class="kwd">require</span></span><span class="p"><span class="pun">(</span></span><span class="s1"><span class="str">'../tinymce/skins/ui/example/content.inline.css'</span></span><span class="p"><span class="pun">);</span></span>
</code></pre></div></div>
</td>
</tr>
</tbody>
</table>

> **Important**: The handling of content CSS files (such as `content.css` or `content.min.css`) varies between bundling tools. View the relevant guide for the required syntax at [Bundling {{site.productname}} with a module loader]({{site.baseurl}}/how-to-guides/usage-with-module-loaders/).

{% comment %}
```js
import contentUiCss from 'tinymce/skins/ui/example/content.css';
import 'tinymce/skins/ui/example/skin.css';
/* Only required for inline editors */
import contentUiInlineCss from 'tinymce/skins/ui/example/content.inline.css';
```
```js
import contentUiCss from '../tinymce/skins/ui/example/content.css';
import '../tinymce/skins/ui/example/skin.css';
/* Only required for inline editors */
import contentUiInlineCss from '../tinymce/skins/ui/example/content.inline.css'
```
```js
var contentUiCss = require('tinymce/skins/ui/example/content.css');
require('tinymce/skins/ui/example/skin.css');
/* Only required for inline editors */
var contentUiInlineCss = require('tinymce/skins/ui/example/content.inline.css');
```
```js
var contentUiCss = require('../tinymce/skins/ui/example/content.css');
require('../tinymce/skins/ui/example/skin.css');
/* Only required for inline editors */
var contentUiInlineCss = require('../tinymce/skins/ui/example/content.inline.css');
```
{% endcomment %}

{% include module-loading/bundling-skin-files.md %}