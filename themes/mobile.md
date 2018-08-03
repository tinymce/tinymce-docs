---
layout: default
title: Mobile theme
title_nav: Mobile
description: Theme that renders a mobile-ready user interface.
keywords: theme mobile
---

The `mobile` theme is responsible for rendering the editor on mobile devices and gives you a [mobile first experience]({{ site.baseurl }}/mobile).

##### Example:

We recommend that you use a [mobile section]({{ site.baseurl }}/configure/editor-appearance/#mobile) in the config to load this mobile specific theme but it can be used directly as well.

```js
tinymce.init({
  selector: 'textarea',
  theme: 'modern',
  mobile: {
    theme: 'mobile',
    plugins: [ 'autosave', 'lists', 'autolink' ]
  }
});
```

### Related configuration options

* [mobile]({{ site.baseurl }}/configure/editor-appearance/#mobile)
* [toolbar]({{ site.baseurl }}/configure/editor-appearance/#toolbar)
