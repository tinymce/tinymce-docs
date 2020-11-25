### Advanced Code Editor

The {{site.productname}} 5.1 release includes **Advanced Code Editor** 2.0.2.

**Advanced Code Editor** 2.0.2 has been updated to improve performance on mobile devices.

### Advanced Tables

A new **Advanced Tables** premium plugin has been released with {{site.productname}} 5.1. The **Advanced Tables** plugin extends the core [`table` plugin]({{site.baseurl}}/plugins/opensource/table/) by adding sort options for rows and columns.

The plugin is capable of sorting:
* Numerical data
* Text data

> **Note**: Currently, the sort function will treat cells with Alphanumeric data as Text data. This includes currency symbols which are text characters.

For information on this plugin, see:

* [The Advanced Tables product page](https://apps.tiny.cloud/products/advanced-tables/).
* [The Advanced Tables Premium features page (including demo)]({{site.baseurl}}/enterprise/advanced-tables/).
* [The Advanced Tables plugin documentation page]({{site.baseurl}}/plugins/premium/advtable/).

### Checklist
The {{site.productname}} 5.1 release includes **Checklist** 1.0.1.

**Checklist** 1.0.1 includes:
* A fix to allow checklist items to be toggled on an iPad.
* A fix to ensure the checklist toolbar button is toggled when checklist content is selected.

### Enhanced Media Embed

The {{site.productname}} 5.1 release includes **Enhanced Media Embed** 2.2.4.

**Enhanced Media Embed** 2.2.4 has been updated to include a touch event listener to allow embedded media to execute on mobile platforms.

### Format Painter
The {{site.productname}} 5.1 release includes **Format Painter** 1.2.0.

**Format Painter** 1.2.0 has been updated to support mobile platforms. The **Format Painter** will now function as expected for mobile users.

This version of **Format Painter** includes a fix to work with the [_Legacy Output_ plugin]({{site.baseurl}}/plugins/opensource/legacyoutput/)).

### Mentions
The {{site.productname}} 5.1 release includes **Mentions** 2.1.0.

**Mentions** 2.1.0 has been updated to allow for the inclusion of "extra" menu items, such as additional results or search items. For details, see: [Mentions - `mentions_fetch`]({{site.baseurl}}/plugins/premium/mentions/#mentions_fetch).

### Page Embed
The {{site.productname}} 5.1 release includes **Page Embed** 1.0.1.

**Page Embed** 1.0.1 has been updated to include a touch event listener to allow embedded media to execute on mobile platforms.

### PowerPaste
The {{site.productname}} 5.1 release includes **PowerPaste** 5.2.0.

#### Changes to `clean` paste and `Remove Formatting` paste

**PowerPaste** _5.0_ included a change to the `Remove Formatting` functionality to filter out inline style elements (such as `strong`, `b`, `em`, `i`, and `sub`), in-line with other editor functionality.

**PowerPaste** _5.2_ **reverses the _5.0_ change** and includes a new `powerpaste_clean_filtered_inline_elements` setting. This setting accepts a list of inline style elements to be filtered. These inline elements will be filtered on `clean` or `Remove Formatting` paste.

To retain the _5.0_ default inline style element filter, add the following setting to `tinymce.init`:
```js
powerpaste_clean_filtered_inline_elements: 'strong,em,b,i,u,strike,sup,sub,font'
```

For information on `powerpaste_clean_filtered_inline_elements`, see: [PowerPaste - `powerpaste_clean_filtered_inline_elements`]({{site.baseurl}}/plugins/premium/powerpaste/#powerpaste_clean_filtered_inline_elements).

#### Pre-filtering and post-filtering callbacks

**PowerPaste** 5.2 modifies the _pre-filtering_ and _post-filtering_ callbacks. The callbacks now contain additional data regarding the paste `mode` and the `source` of the content.

For information on using the Pre-filtering and Post-filtering callbacks, see: [PowerPaste Plugin - Pre-filtering and post-filtering callbacks]({{site.baseurl}}/plugins/premium/powerpaste/#pre-filtering-and-post-filtering-callbacks)
