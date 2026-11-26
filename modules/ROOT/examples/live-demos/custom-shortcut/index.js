tinymce.init({
  selector: 'textarea#custom-shortcut',
  height: 640,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  setup: (editor) => {
    editor.addShortcut('meta+alt+y', 'Add yellow highlight to selected text.', () => {
      editor.execCommand('hilitecolor', false , '#FFFF00');
    });
  },
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});
