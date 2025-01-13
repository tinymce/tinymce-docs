tinymce.init({
  selector: 'textarea#custom-toolbar-menu-button-search',
  height: 500,
  toolbar: 'searchMenuButton',
  setup: (editor) => {
    let toggleState = false;
    editor.ui.registry.addMenuButton('searchMenuButton', {
      text: 'Searchable Menu',
      search: { placeholder: 'Search items...' },
      fetch: (callback, fetchContext) => {
        // Define a list of all menu items
        const allItems = [
          { type: 'menuitem', text: 'Apple', onAction: () => editor.insertContent('Apple') },
          { type: 'menuitem', text: 'Banana', onAction: () => editor.insertContent('Banana') },
          { type: 'togglemenuitem', text: 'Toggleable Menu', onAction: () => { 
            toggleState = !toggleState;
            editor.insertContent('Toggleable Menu'); 
            },
            onSetup: (api) => {
              api.setActive(toggleState);
              return () => {};
            },
          },
        ];

        // Use the `pattern` to filter items
        const filteredItems = allItems.filter(item =>
          item.text.toLowerCase().includes(fetchContext.pattern.toLowerCase())
        );

        // Pass the filtered list to the callback
        callback(filteredItems);
      }
    });
  },

  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});