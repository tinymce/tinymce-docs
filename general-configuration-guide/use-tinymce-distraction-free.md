---
layout: default
title: TinyMCE distraction-free editing mode
title_nav: Distraction-free editing mode
description: Mode that renders a lightweight UI for inline editing.
keywords: Mode inlite distraction-free
---

The **Distraction-free** mode renders the editor in inline mode without the menu bar or toolbar. Most of the editor functionality is accessed using: keyboard shortcuts, contextual menus, contextual toolbars, and toolbar functions provided by the `quickbars` plugin.

{{site.notonmobile}}

## Enabling distraction-free mode

To enable a basic distraction-free editor, use the following configuration.

```js
tinymce.init({
    selector: 'div.tinymce',
    plugins: [ 'quickbars' ],
    toolbar: false,
    menubar: false,
    inline: true
});
```

The demonstration editor below is a distraction-free editor with some customizations.

{% include live-demo.html id="editor-dfree" %}

## Related configuration options

For information on:

* Configuring a Quick Toolbar; including `quicklink`, `quickimage`, and `quicktable`; see: [Quick Toolbar plugin]({{site.baseurl}}/plugins/quickbars/).
* Configuring a contextual toolbar, see: [Context Toolbar]({{site.baseurl}}/ui-components/contexttoolbar/).
* Configuring a contextual menu, see: [Context Menu]({{site.baseurl}}/ui-components/contextmenu/).
* Disabling the {{site.productname}} menubar, see: [Menubar]({{site.baseurl}}/configure/editor-appearance/#menubar).
* The `inline` setting, see: [inline]({{ site.baseurl }}/configure/editor-appearance/#inline).

{% assign_page next_page = "/general-configuration-guide/multiple-editors/index.html" %}
{% include next-step.html next=next_page %}
