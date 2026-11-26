tinymce.init({
  selector: 'textarea#custom-toolbar-group-button',
  height: 640,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar_mode: 'floating',
  toolbar: 'alignment | undo redo | blocks | bold italic backcolor | ' +
    'bullist numlist outdent indent | removeformat | help',
  setup: (editor) => {

    /* example, adding a group toolbar button */
    editor.ui.registry.addGroupToolbarButton('alignment', {
      icon: 'align-left',
      tooltip: 'Alignment',
      items: 'alignleft aligncenter alignright | alignjustify'
    });

  },
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});
