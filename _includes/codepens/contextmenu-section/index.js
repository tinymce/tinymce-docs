tinymce.PluginManager.add('my-example-plugin', function (editor) {
  editor.ui.registry.addMenuItem('image', {
    icon: 'image',
    text: 'Image',
    onAction: () => {
      console.log('context menu clicked');
      alert('context menu clicked');
    }
  });

  editor.ui.registry.addContextMenu('image', {
    update: (element) => {
      return !element.src ? [] : ['image'];
    }
  });

  editor.ui.registry.addContextMenu('link', {
    update: (element) => {
      return !element.href ? 'link' : 'link unlink openlink';
    }
  });
});

tinymce.init({
  selector: "textarea",
  contextmenu: "link image",
  plugins: 'my-example-plugin'
});
