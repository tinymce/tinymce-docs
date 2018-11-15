/* example dialog that inserts the name of a Pet into the editor content */
const dialogConfig =  {
  title: 'Pet Name Machine',
  body: {
    type: 'panel',
    items: [
      {
        type: 'input',
        name: 'catdata',
        label: 'enter the name of a cat'
      },
      {
        type: 'checkbox',
        name: 'isdog',
        label: 'tick if cat is actually a dog'
      }
    ]
  },
  buttons: [
    {
      type: 'cancel',
      name: 'closeButton',
      text: 'Cancel'
    },
    {
      type: 'submit',
      name: 'submitButton',
      text: 'Do Cat Thing',
      primary: true,
    }
  ],
  initialData: {
    catdata: 'initial Cat',
    isdog: 'unchecked'
  },
  onSubmit: (api) => {
    const data = api.getData();
    const pet = data.isdog === 'checked' ? 'dog' : 'cat';

    tinymce.activeEditor.execCommand('mceInsertContent', false, '<p>My ' + pet +'\'s name is: <strong>' + data.catdata + '</strong></p>');
    api.close();
  }
};

tinymce.init({
  selector: 'textarea',
  toolbar: 'dialog-example-btn',
  setup: (editor) => {
    editor.ui.registry.addButton('dialog-example-btn', {
      icon: 'code-sample',
      onAction: () => {
        editor.windowManager.open(dialogConfig)
      }
    })
  }
});

