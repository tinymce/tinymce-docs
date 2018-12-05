tinymce.init({
  selector: 'textarea',
  toolbar: 'myButton',
  menubar: false,
  setup: function (editor) {
    editor.ui.registry.addSplitButton('myButton', {
      text: 'My Button',
      onAction: function () {
        editor.insertContent('<p>You clicked the main button</p>');
      },
      onItemAction: function (api, value) {
        editor.insertContent(value);
      },
      fetch: function (callback) {
        var items = [
          {
            type: 'choiceitem',
            text: 'Menu item 1',
            value: '&nbsp;<em>You clicked menu item 1!</em>'
          },
          {
            type: 'choiceitem',
            text: 'Menu item 2',
            value: '&nbsp;<em>You clicked menu item 2!</em>'
          }
        ];
        callback(items);
      }
    });
  }
});