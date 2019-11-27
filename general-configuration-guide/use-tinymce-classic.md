---
layout: default
title: TinyMCE classic editing mode
title_nav: Classic editing mode
description: The Theme that renders iframe or inline modes using the TinyMCE core UI framework.
keywords: theme classic
---

{{site.productname}} has three main integration modes:

* "classic" form-based
* inline editing
* distraction-free

**Classic** mode is the most common {{site.productname}} integration. **Classic** mode's popularity is due to its familiarity to users and how quickly they identify it as a text editor.

The current default theme `silver` renders the editor in classic mode.

{% include codepen.html id="default" %}

##### Example: Classic Mode

A basic TinyMCE editor can be added to a `textarea` element with the id `mytextarea` using:

```js
tinymce.init({
    selector: 'textarea#mytextarea',
});
```

### Related configuration options

* For information on using editor customization options, see: [Customizing the editor UI]({{site.baseurl}}/general-configuration-guide/customize-ui/).
* For information on localizing {{site.productname}}, see: [Localize TinyMCE]({{site.baseurl}}/general-configuration-guide/localize-your-language/).
* For information on all {{site.productname}} configuration settings, see: [Configuration options reference]({{site.baseurl}}/configure/).

{% assign_page next_page = "/general-configuration-guide/use-tinymce-inline/index.html" %}
{% include next-step.html next=next_page %}
