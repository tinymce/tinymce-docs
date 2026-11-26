tinymce.init({
  selector: 'textarea#context-toolbar-labels',
  height: 700,
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
      position: 'node',
      scope: 'node',
      items: [
        {
          name: 'Formatting',
          items: ['alignleft', 'aligncenter', 'alignright']
        },
        {
          label: 'Copy',
          items: ['copy', 'paste']
        }
      ],
    });

    editor.ui.registry.addContextToolbar('textselection', {
      predicate: (node) => !editor.selection.isCollapsed(),
      position: 'selection',
      scope: 'node',
      items: [
        {
          name: 'Format',
          items: ['bold', 'italic', 'underline']
        },
      ],
    });
  }
});

