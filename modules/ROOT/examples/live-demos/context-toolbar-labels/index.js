tinymce.init({
  selector: 'textarea#context-toolbar-labels',
  height: 350,
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
  },
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});
