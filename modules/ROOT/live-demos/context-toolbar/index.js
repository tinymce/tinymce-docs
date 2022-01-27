tinymce.init({
  selector: 'textarea#context-toolbar',
  height: 350,
  setup: function (editor) {
    editor.ui.registry.addContextToolbar('imagealignment', {
      predicate: function (node) {
        return node.nodeName.toLowerCase() === 'img'
      },
      items: 'alignleft aligncenter alignright',
      position: 'node',
      scope: 'node'
    });

    editor.ui.registry.addContextToolbar('textselection', {
      predicate: function (node) {
        return !editor.selection.isCollapsed();
      },
      items: 'bold italic | blockquote',
      position: 'selection',
      scope: 'node'
    });
  },
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});