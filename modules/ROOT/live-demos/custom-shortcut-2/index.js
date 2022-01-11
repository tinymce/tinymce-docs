tinymce.init({
  selector: '#custom-shortcut-2',
  height: 300,
  plugins: 'autolink lists link',
  toolbar: 'undo redo | bold italic link bullist | insertUsername',
  setup: function (editor) {
    var insertUsername = function () {
      editor.insertContent(`@username`);
    };

    editor.addShortcut('meta+alt+U', 'Insert username', function () {
      insertUsername();
    });

    editor.ui.registry.addMenuButton('insertUsername', {
      icon: 'plus',
      fetch: function (callback) {
        var items = [
          {
            type: 'menuitem',
            text: 'Insert username',
            shortcut: 'meta+alt+U',
            onAction: function () {
              insertUsername();
            }
          }
        ];
        callback(items);
      }
    });
  },
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});