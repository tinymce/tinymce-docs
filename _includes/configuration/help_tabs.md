### `help_tabs`

This option allows you to specify which tabs the Help dialog should show, and in what order. The default {{site.productname}} tabs are called `shortcuts`, `keyboardnav`, `plugins` and `versions`. These tabs can be overwritten by providing a new [tab panel]({{site.baseurl}}/ui-components/dialogcomponents/#tabpanel) specification with the same `name`, and new tabs can be added by registering a tab panel with a new `name`. New tabs can be registered in the `help_tabs` configuration or at initialization or runtime using the [`addTab` API method](#api).

If `help_tabs` is configured, only tabs named in `help_tabs` will be displayed. Any tabs defined using `addTab` that are not named in `help_tabs` will be ignored.

If `help_tabs` is not configured, any tabs defined using `addTab` will be displayed after the default tabs.

**Type:** `Array`

**Default Value:** `['shortcuts', 'keyboardnav', 'plugins', 'versions']`

#### Example: Using `help_tabs`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'help link table code emoticons',
  toolbar: 'help addTab',
  help_tabs: [
    'shortcuts', // the default shortcuts tab
    'keyboardnav', // the default keyboard navigation tab
    'plugins', // the default plugins tab
    {
      name: 'custom1', // new tab called custom1
      title: 'Custom Tab 1',
      items: [
        {
          type: 'htmlpanel',
          html: '<p>This is a custom tab</p>',
        }
      ]
    },
    {
      name: 'versions', // override the default versions tab
      title: 'Custom Versions',
      items: [
        {
          type: 'htmlpanel',
          html: 'This is a custom versions panel.'
        }
      ]
    },
    'custom2', // new tab custom2 as defined on init in setup() below
    'custom3' // new tab custom3 as defined on button click in setup() below
  ],
  setup: function(editor) {
    // on editor init, add a tab called custom2
    editor.on('init', function() {
      editor.plugins.help.addTab({
        name: 'custom2',
        title: 'Custom Tab 2',
        items: [
          {
            type: 'htmlpanel',
            html: '<p>This is another custom tab</p>',
          }
        ]}
      );
    });

    // add a toolbar button that when clicked adds a tab called custom3
    editor.ui.registry.addButton('addTab', {
      text: 'Add tab',
      onAction: function() {
        editor.plugins.help.addTab({
          name: 'custom3',
          title: 'Custom Tab 3',
          items: [
            {
              type: 'htmlpanel',
              html: '<p>This is yet another custom tab</p>',
            }
          ]
        });
      }
    });
  }
});
```
