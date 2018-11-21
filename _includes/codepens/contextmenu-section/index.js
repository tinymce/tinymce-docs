tinymce.PluginManager.add('my-example-plugin', function (editor) {
  editor.ui.registry.addMenuItem('image', {
    icon: 'image',
    text: 'Image',
    onAction: () => {
      console.log('image context menu clicked');
      alert('image context menu clicked');
    }
  });

  editor.ui.registry.addMenuItem('link', {
    icon: 'link',
    text: 'Link',
    onAction: () => {
      console.log('link context menu clicked');
      alert('link context menu clicked');
    }
  });

  editor.ui.registry.addMenuItem('unlink', {
    icon: 'unlink',
    text: 'Remove link',
    onAction: () => {
      console.log('remmove link context menu clicked');
      alert('remmove link context menu clicked');
    }
  });

  editor.ui.registry.addContextMenu('image', {
    update: (element) => {
      return !element.src ? [] : ['image'];
    }
  });

  editor.ui.registry.addContextMenu('link', {
    update: (element) => {
      return !element.href ? '' : 'link unlink';
    }
  });
});

tinymce.init({
  selector: "textarea",
  contextmenu: "link image",
  plugins: 'my-example-plugin'
});
