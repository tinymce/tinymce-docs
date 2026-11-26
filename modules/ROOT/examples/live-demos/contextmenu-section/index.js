tinymce.PluginManager.add('my-example-plugin', (editor) => {
  editor.ui.registry.addMenuItem('image', {
    icon: 'image',
    text: 'Image',
    onAction: () => {
      console.log('context menu clicked');
      alert('context menu clicked');
    }
  });

  editor.ui.registry.addContextMenu('image', {
    update: (element) => !element.src ? '' : 'image'
  });
});

tinymce.init({
  selector: 'textarea#contextmenu-section',
  height: 760,
  contextmenu: 'image',
  plugins: [
    'my-example-plugin',
    'advlist', 'autolink', 'lists', 'link', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});
