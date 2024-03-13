tinymce.init({
  selector: '#custom-shortcut-3',
  height: 300,
  plugins: 'autolink lists link',
  toolbar: 'undo redo | bold italic link bullist | insertUsername',
  setup: (editor) => {
    const insertUsername = () => {
      editor.insertContent(`@username`);
    };

    editor.addShortcut('meta+alt+U', 'Insert username', () => {
      insertUsername();
    });

    editor.ui.registry.addButton('insertUsername', {
      icon: 'plus',
      tooltip: 'Insert Username',
      shortcut: 'meta+alt+U',
      onAction: insertUsername,
    });
  },
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});
