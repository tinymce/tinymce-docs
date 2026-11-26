tinymce.init({
  selector: '#custom-shortcut-2',
  height: 640,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'insertUsername | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  setup: (editor) => {
    const insertUsername = () => {
      editor.insertContent(`@jordan.ellis`);
    };

    editor.addShortcut('meta+alt+U', 'Insert username', () => {
      insertUsername();
    });

    editor.ui.registry.addMenuButton('insertUsername', {
      icon: 'plus',
      fetch: (callback) => {
        const items = [
          {
            type: 'menuitem',
            text: 'Insert username',
            shortcut: 'meta+alt+U',
            onAction: () => insertUsername()
          }
        ];
        callback(items);
      }
    });
  },
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});
