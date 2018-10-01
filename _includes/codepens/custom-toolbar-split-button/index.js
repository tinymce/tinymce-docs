tinymce.init({
  selector: 'textarea',
  toolbar: 'myButton',
  menubar: false,
  setup: (editor) => {
    editor.ui.registry.addSplitButton('myButton', {
      text: 'My Button',
      onAction: () => {
        editor.insertContent('<p>You clicked the main button</p>')
      },
      onItemAction: (api, value) => {
        editor.insertContent(value);
      },
      fetch: (callback) => {
        const items = [
          {
            type: 'choiceitem',
            text: 'Menu item 1',
            value: '&nbsp;<em>You clicked menu item 1!</em>'
          },
          {
            type: 'choiceitem',
            text: 'Menu item 2',
            value: '&nbsp;<em>You clicked menu item 2!</em>'
          },
        ];
        callback(items);
      }
    });
  }
});