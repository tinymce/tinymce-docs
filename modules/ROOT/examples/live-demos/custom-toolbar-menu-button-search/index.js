tinymce.init({
  selector: 'textarea#custom-toolbar-menu-button-search',
  height: 500,
  toolbar: 'mybutton',

  setup: (editor) => {
    /* Menu items are recreated when the menu is closed and opened, so we need
       a variable to store the toggle menu item state. */
    let toggleState = false;

    /* example, adding a toolbar menu button */
    editor.ui.registry.addMenuButton('mybutton', {
      text: 'My searchable button',
      search: {
        placeholder: 'Type...'
      },
      fetch: (callback, fetchContext) => {
        if (fetchContext.pattern.length > 0) {
          callback([
            {
              type: 'menuitem',
              text: `You searched for: "${fetchContext.pattern}"`,
              onAction: () => editor.insertContent(`<strong>Inserted selected search result</strong>`)
            }
          ])
        } else {
          const items = [
            {
              type: 'menuitem',
              text: 'Menu item 1',
              onAction: () => editor.insertContent('&nbsp;<em>You clicked menu item 1!</em>')
            },
            {
              type: 'togglemenuitem',
              text: 'Toggle menu item',
              onAction: () => {
                toggleState = !toggleState;
                editor.insertContent('&nbsp;<em>You toggled a menuitem ' + (toggleState ? 'on' : 'off') + '</em>');
              },
              onSetup: (api) => {
                api.setActive(toggleState);
                return () => {};
              }
            }
          ];
          callback(items);
        }
      }
    });

  },
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});