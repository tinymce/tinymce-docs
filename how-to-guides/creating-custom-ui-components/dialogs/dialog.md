---
layout: default
title: Creating custom dialogs
title_nav: Creating custom dialogs
description: An overview of TinyMCE dialogs and how to create custom dialogs.
keywords: dialog dialogapi api
---

A dialog is a popup UI element that contains a header, body and footer, each containing specific types of sub-components. Dialogs also have an instance API and several configuration options, including configurable callback functions for certain dialog events.

> **Note**: {{site.productname}} also supports [URL dialogs]({{site.baseurl}}/how-to-guides/creating-custom-ui-components/dialogs/urldialog/). Configuring a URL dialog is different to configuring a standard {{site.productname}} dialog.

## Use cases

### Display basic information

The [`code`]({{site.baseurl}}/plugins-ref/opensource/code/) plugin's dialog is an example of a simple dialog. It contains only one body panel component that displays the HTML code from the content.

![Source Code]({{site.baseurl}}/images/sourcecode.png)

### Display complex information

More complex dialogs can use [tab panels]({{site.baseurl}}/how-to-guides/creating-custom-ui-components/dialogs/dialog-components/#tabpanel) and various [layouts]({{site.baseurl}}/how-to-guides/creating-custom-ui-components/dialogs/dialog-components/#layoutcomponents) to categorise and organise information displayed to the user. For example, the [`help`]({{site.baseurl}}/plugins-ref/opensource/help/) and [`character map`]({{site.baseurl}}/plugins-ref/opensource/charmap/) plugins use dialogs with tabbed panels to categorise and separate information.

![Special Characters]({{site.baseurl}}/images/specialchars.png)

### Interactive dialogs

{{site.productname}} dialogs can also contain [interactive components]({{site.baseurl}}/how-to-guides/creating-custom-ui-components/dialogs/dialog-components/#basiccomponents) such as buttons, checkboxes and input fields.

For example, the [`image`]({{site.baseurl}}/plugins-ref/opensource/image/) plugin's dialog allows for users to link to or upload an image, input a description, title, class, caption, height and width, then insert it into the editor.

![Insert/Edit images]({{site.baseurl}}/images/interactive.png)

## Body components

The body of a dialog must be either a [`panel`]({{site.baseurl}}/how-to-guides/creating-custom-ui-components/dialogs/dialog-components/#panel) (a single panel) or a [`tabpanel`]({{site.baseurl}}/how-to-guides/creating-custom-ui-components/dialogs/dialog-components/#tabpanel) (a collection of panels). Each panel can contain [panel components]({{site.baseurl}}/how-to-guides/creating-custom-ui-components/dialogs/dialog-components/#panelcomponents) such as inputs, buttons and text.

> **Note**: {{site.productname}} also supports [URL dialogs]({{site.baseurl}}/how-to-guides/creating-custom-ui-components/dialogs/urldialog/). Configuring a URL dialog is quite different to configuring a standard {{site.productname}} dialog.

### Panel

The basic dialog type is a **panel** dialog. A panel is a container for [panel components]({{site.baseurl}}/how-to-guides/creating-custom-ui-components/dialogs/dialog-components/#panelcomponents). A panel type dialog only has one panel.

```js
{
  type: 'panel',
  items: [ ... ] // array of panel components
}
```

### TabPanel

A **tabpanel** dialog contains multiple panels, and a tab navigation menu on the left-hand side of the dialog to allow for switching between panels. Each panel can contain different [panel components]({{site.baseurl}}/how-to-guides/creating-custom-ui-components/dialogs/dialog-components/#panelcomponents), allowing for complex dialogs.

See the [tab panel component reference]({{site.baseurl}}/how-to-guides/creating-custom-ui-components/dialogs/dialog-components/#tabpanel) for tab panel configuration options.

```js
{
  type: 'tabpanel',
  tabs: [ // array of tab panel specifications
    {
      name: 'mytab',
      title: 'My Tab',
      items: [ ... ] // array of panel components
    },
    ...
  ]
}
```

The `name` of the panel can be used with the [`dialogApi.showTab('tabName')`](#dialogapimethods) method to programmatically switch tabs. It is also passed to [`onTabChange`](#configurationoptions) as part of the `details` object.

#### Example tab panel

The Help plugin's dialog is an example of a tab panel dialog.

![Help Button]({{site.baseurl}}/images/help.png)
