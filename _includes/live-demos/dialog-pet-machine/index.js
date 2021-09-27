/* example dialog that inserts the name of a Pet into the editor content */
var dialogConfig =  {
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
      primary: true
    }
  ],
  initialData: {
    catdata: 'initial Cat',
    isdog: false
  },
  onSubmit: function (api) {
    var data = api.getData();
    var pet = data.isdog ? 'dog' : 'cat';

    tinymce.activeEditor.execCommand('mceInsertContent', false, '<p>My ' + pet +'\'s name is: <strong>' + data.catdata + '</strong></p>');
    api.close();
  }
};

tinymce.init({
  selector: 'textarea#dialog-pet-machine',
  toolbar: 'dialog-example-btn',
  setup: function (editor) {
    editor.ui.registry.addButton('dialog-example-btn', {
      icon: 'code-sample',
      onAction: function () {
        editor.windowManager.open(dialogConfig)
      }
    })
  },
  content_style: {{site.liveDemoIframeCSSStyles}}
});

