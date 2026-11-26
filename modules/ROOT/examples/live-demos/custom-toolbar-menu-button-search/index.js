tinymce.init({
  selector: 'textarea#custom-toolbar-menu-button-search',
  height: 640,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'mybutton | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',

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
          ]);
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
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});
