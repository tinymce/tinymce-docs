tinymce.init({
  selector: 'textarea#custom-toolbar-split-button',
  toolbar: 'myButton',
  menubar: false,
  setup: (editor) => {
    editor.ui.registry.addSplitButton('myButton', {
      text: 'My Button',
      icon: 'info',
      tooltip: 'This is an example split-button',
      onAction: () => editor.insertContent('<p>You clicked the main button</p>'),
      onItemAction: (api, value) => editor.insertContent(value),
      fetch: (callback) => {
        const items = [
          {
            type: 'choiceitem',
            icon: 'notice',
            text: 'Menu item 1',
            value: '&nbsp;<em>You clicked menu item 1!</em>'
          },
          {
            type: 'choiceitem',
            icon: 'warning',
            text: 'Menu item 2',
            value: '&nbsp;<em>You clicked menu item 2!</em>'
          }
        ];
        callback(items);
      }
    });
  },
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});