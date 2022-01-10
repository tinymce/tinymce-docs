tinymce.init({
  selector: 'textarea#custom-shortcut',
  height: 300,
  setup: function (editor) {
    editor.addShortcut(
      'meta+alt+y', 'Add yellow highlight to selected text.', function () {
      editor.execCommand('hilitecolor', false , '#FFFF00');
    });
  },
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
});