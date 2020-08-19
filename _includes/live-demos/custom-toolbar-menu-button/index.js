tinymce.init({
  selector: 'textarea#custom-toolbar-menu-button',
  height: 500,
  toolbar: 'mybutton',

  setup: function (editor) {

    /* example, adding a toolbar menu button */
    editor.ui.registry.addMenuButton('mybutton', {
      text: 'My button',
      fetch: function (callback) {
        var items = [
          {
            type: 'menuitem',
            text: 'Menu item 1',
            onAction: function () {
              editor.insertContent('&nbsp;<em>You clicked menu item 1!</em>');
            }
          },
          {
            type: 'nestedmenuitem',
            text: 'Menu item 2',
            icon: 'user',
            getSubmenuItems: function () {
              return [
                {
                  type: 'menuitem',
                  text: 'Sub menu item 1',
                  icon: 'unlock',
                  onAction: function () {
                    editor.insertContent('&nbsp;<em>You clicked Sub menu item 1!</em>');
                  }
                },
                {
                  type: 'menuitem',
                  text: 'Sub menu item 2',
                  icon: 'lock',
                  onAction: function () {
                    editor.insertContent('&nbsp;<em>You clicked Sub menu item 2!</em>');
                  }
                }
              ];
            }
          }
        ];
        callback(items);
      }
    });

  }
});