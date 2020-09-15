tinymce.init({
  selector: 'textarea#custom-toolbar-menu-button',
  height: 500,
  toolbar: 'mybutton',

  setup: function (editor) {
    /* Menu items are recreated when the menu is closed and opened, so we need
       a variable to store the toggle menu item state. */
    var toggleState = false;

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
          },
          {
            type: 'togglemenuitem',
            text: 'Toggle menu item',
            onAction: function () {
              toggleState = !toggleState;
              editor.insertContent('&nbsp;<em>You toggled a menuitem ' + (toggleState ? 'on' : 'off') + '</em>');
            },
            onSetup: function (api) {
              api.setActive(toggleState);
              return function() {};
            }
          }
        ];
        callback(items);
      }
    });

  },
  content_style: {{site.liveDemoIframeCSSStyles}}
});