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
  contextmenu: 'image',
  plugins: 'my-example-plugin',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});
