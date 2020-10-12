---
layout: default
title: TinyMCE classic editing mode
title_nav: Classic editing mode
description: The Theme that renders iframe or inline modes using the TinyMCE core UI framework.
keywords: theme classic
---

{{site.productname}} has three main integration modes:

* "classic" full editor mode
* inline editing mode
* distraction-free mode

There are a few important differences between these modes:

- Classic mode embeds an iframe in the page, which sandboxes the content and styles used in the content area.
- Inline mode does not use an iframe; the editor is run on the selected HTML element.
- The lack of sandboxing for the inline editor allows page scripts and styles to be used in the editor.
- Distraction-free mode is an inline editor with additional configuration to provide greater functionality.

**Classic** mode refers to the standard {{site.productname}} integration. Such as:

{% include live-demo.html id="default" %}

## Example: Replacing a textarea with the default editor

A basic TinyMCE editor can be added to a `textarea` element with the id `mytextarea` using:

```js
tinymce.init({
    selector: 'textarea#mytextarea'
});
```

### Related configuration options

* For information on using editor customization options, see: [Customizing the editor UI]({{site.baseurl}}/general-configuration-guide/customize-ui/).
* For information on localizing {{site.productname}}, see: [Localize TinyMCE]({{site.baseurl}}/general-configuration-guide/localize-your-language/).
* For information on all {{site.productname}} configuration settings, see: [Configuration options reference]({{site.baseurl}}/configure/).

{% assign_page next_page = "/general-configuration-guide/use-tinymce-inline/index.html" %}
{% include next-step.html next=next_page %}
