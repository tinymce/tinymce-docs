tinymce.init({
  selector: 'textarea#context-toolbar',
  height: 720,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'image table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  setup: (editor) => {
    editor.ui.registry.addContextToolbar('imagealignment', {
      predicate: (node) => node.nodeName.toLowerCase() === 'img',
      items: 'alignleft aligncenter alignright',
      position: 'node',
      scope: 'node'
    });

    editor.ui.registry.addContextToolbar('textselection', {
      predicate: (node) => !editor.selection.isCollapsed(),
      items: 'bold italic | blockquote',
      position: 'selection',
      scope: 'node'
    });
  }
});
