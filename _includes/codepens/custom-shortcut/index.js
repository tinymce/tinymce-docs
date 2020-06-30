tinymce.init({
  selector: "textarea#custom-shortcut",
  content_css: '//www.tiny.cloud/css/codepen.min.css',
  height: 300,
  setup: function (editor) {
    editor.addShortcut(
      'meta+alt+y', 'Add yellow highlight to selected text.', function () {
      editor.execCommand('hilitecolor', false , '#FFFF00');
    });
  }
});