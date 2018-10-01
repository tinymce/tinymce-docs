---
layout: default
title: Example
title_nav: Example
description: Interactive Example using redial(config).
keywords: dialog dialogapi api redial example
---

## Interactive Example using `redial(config): void’

The following example demonstrates custom buttons using the redial dialog for creating two separate dialogs that we cycle through by pressing the `Next` button.  

To see the output of the code, click on the TinyMCE tab on the fiddle below.

{% include codepen.html id="redial" height="900" tab="js" %}

In this redial example, we have two separate dialogs that we cycle through by pressing the `Next` button.  Looking at the configuration structure, the first level is like any other dialog.
The difference is the `onAction` call, loads a new configuration for the dialog using redial.  The configuration we use in the redial(dialogConf) call can be any supported dialog structure.  We could even replace the 'Redial Demo - Page 2' configuration, with the 'Pet Name Machine' dialog.

This demo also includes the use of `dialogApi.enable` and `dialogApi.disable` to disable the `Next` button when a user input is required.  For checkboxes we use the `onChange` callback to handle the changes for the checkbox data.  The checkbox data is mapped to its defined name: `anyterms`.  When a user clicks or presses enter on the checkbox, the new value of the checkbox is returned by the `getData()` call stored in the `anyterms` property.  Given the state of the checkbox, we either `disable` or `enable` the `Next` button.

The `onAction` callback at the root level, is the handler for the `Previous` and `Next` buttons. The `onAction` handler is shared across multiple buttons and we use the name property to identify the clicked button.  The `Previous` button named 'doesnothing' is used to highlight branching.  A **Switch** statement could be used to handle many buttons.

The `onAction` callback inside the `redial()` call, is a separate handler for the redialed dialog.  Since there is only one button we don't check which named button triggered the click.
This handler demonstrates the `dialogApi.close()` API.

> Note: Please see [this]({{site.baseurl}}/api-reference-guide/dialog/dialogcomponent) page for a comprehensive list of components.
