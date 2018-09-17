---
layout: draft
title: Example
title_nav: Example
description: Interactive Example using redial(config).
keywords: dialog dialogapi api redial example
---

## Interactive Example using `redial(config): void’

```js
// example Redial dialog that demonstrates custom buttons

const dialogConfig = {
  title: 'Redial Demo',
  body: {
    type: 'panel',
    items: [{
      type: 'htmlpanel',
      html: '<p>Redial allows the creation of multi-page forms.</p><p>The Next button has been configured to be disabled. When the <b>checkbox</b> is checked, the next button should be enabled</p>'
    }, {
      type: 'checkbox',
      name: 'anyterms',
      label: 'I agree to disagree'
    }, {
      type: 'htmlpanel',
      html: '<p>The next button, calls the redial method which reloads a new dialog in place</p><p>Press next to continue</p>'
    }]
  },
  initialData: {
    anyterms: 'unchecked'
  },
  buttons: [
    {
      type: 'custom',
      name: 'doesnothing',
      text: 'Previous',
      disabled: true
    },
    {
      type: 'custom',
      name: 'uniquename',
      text: 'Next',
      disabled: true
    }
  ],
  onChange: (dialogApi, changeData) => {
    const data = dialogApi.getData();

    // Example of enabling and disabling a button, based on the checkbox state.
    const toggle = data.anyterms === 'checked' ? dialogApi.enable : dialogApi.disable;
    toggle('uniquename');
  },
  onAction: (dialogApi, actionData) => {
    if (actionData.name === 'uniquename') {
      dialogApi.redial({
        title: 'Redial Demo - Page 2',
        body: {
          type: 'panel',
          items: [
            {
              type: 'selectbox',
              name: 'choosydata',
              label: 'Choose a pet',
              items: [
                { value: 'meow', text: 'Cat' },
                { value: 'woof', text: 'Dog' },
                { value: 'thunk', text: 'Rock' }
              ]
            },
            {
              type: 'htmlpanel',
              html: '<p>Click done, your pet choice will be printed in the console.log and the dialog should close</p>'
            }
          ]
        },
        buttons: [
          {
            type: 'custom',
            name: 'lastpage',
            text: 'Done',
            disabled: false
          }
        ],
        initialData: {
          choosydata: ''
        },
        onAction: (dialogApi, actionData) => {
          const data = dialogApi.getData();
          console.log('you chose wisely: ' + data.choosydata);
          dialogApi.close();
        }
      });
    } else if (actionData.name === 'doesnothing') {
      // this case should never be met as the button is never enabled.
    }
  }
}
```

In this redial example, we have 2 separate dialogs that we cycle through by pressing the Next button.  Looking at the configuration structure, the first level is like any other dialog.
The difference is the onAction call, loads a new configuration for the dialog using redial.  The configuration we use in the redial(dialogConf) call can be any supported dialog structure.  We could even replace the 'Redial Demo - Page 2' configuration, with the 'Pet Name Machine' dialog.

This demo also includes the use of dialogApi.enable and dialogApi.disable to disable the 'Next' button when a user input is required.  For checkboxes we use the onChange callback to handle the changes for the checkbox data.  The checkbox data is mapped to its defined name: 'anyterms'.  When a user clicks or presses enter on the checkbox, the new value of the checkbox is returned by the getData() call stored in the 'anyterms' property.  Given the state of the checkbox, we either disable or enable the Next button.

The onAction callback at the root level, is the handler for the 'Previous' and 'Next' buttons.  The onAction handler is shared across multiple buttons and we use the name property to identify the clicked button.  The Previous button named 'doesnothing' is used to highlight branching.  A switch statement could be used to handle many buttons.

The onAction callback inside the redial() call, is a separate handler for the redialed dialog.  Since there is only one button we don't check which named button triggered the click.
This handler demonstrates the dialogApi.close() api.

> Note: Please see [this]({{site.baseurl}}/api-reference-guide/dialog/dialogcomponent) page for a comprehensive list of components.
