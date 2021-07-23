---
layout: default
title: Import CSS plugin
title_nav: Import CSS
description: Automatically populate CSS class names into the Format dropdown.
keywords: importcss content_css importcss_append importcss_file_filter importcss_selector_filter importcss_groups importcss_merge_classes importcss_selector_converter importcss_exclusive
---

The `importcss` plugin adds the ability to automatically import CSS classes from the CSS file specified in the [`content_css`]({{ site.baseurl }}/configure/content-appearance/#content_css) configuration setting.

By default selectors like `".my-class"`, `".my-class1.my-class2"` and `"p.my-class"` get imported as format rules.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'importcss',
  menubar: 'format',
  content_css: '/my-styles.css'
});
```

## Options

These settings affect the execution of the `importcss` plugin, specifically the way that these operations are handled.

{% include configuration/importcss_append.md %}

{% include configuration/importcss_exclusive.md %}

{% include configuration/importcss_file_filter.md %}

{% include configuration/importcss_groups.md %}

{% include configuration/importcss_merge_classes.md %}

{% include configuration/importcss_selector_converter.md %}

{% include configuration/importcss_selector_filter.md %}
