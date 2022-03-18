const page1Config = {
  title: 'Redial Demo',
  body: {
    type: 'panel',
    items: [{
      type: 'htmlpanel',
      html: '<p>Redial allows for the contents of a dialog to be replaced with new contents. This can be used to create multipage form dialogs.</p><br/><p>The Next button is initially disabled. When the <strong>checkbox</strong> is checked, the Next button should be enabled.</p>'
    }, {
      type: 'checkbox',
      name: 'anyterms',
      label: 'I agree to disagree'
    }, {
      type: 'htmlpanel',
      html: '<p>Pressing the Next button will call redial() to reload the dialog with the next page of the form.</p><br /><p>Press Next to continue.</p>'
    }]
  },
  initialData: {
    anyterms: false
  },
  buttons: [
    {
      type: 'custom',
      name: 'doesnothing',
      text: 'Previous',
      disabled: true
    },
    {
      type: 'custom',
      name: 'uniquename',
      text: 'Next',
      disabled: true
    }
  ],
  onChange: (dialogApi, details) => {
    const data = dialogApi.getData();
    /* Example of enabling and disabling a button, based on the checkbox state. */
    dialogApi.setEnabled('uniquename', data.anyterms);
  },
  onAction: (dialogApi, details) => {
    if (details.name === 'uniquename') {
      dialogApi.redial(page2Config);
    } else if (details.name === 'doesnothing') {
      /* this case should never be met as the button is never enabled. */
    }
  }
};

const page2Config = {
  title: 'Redial Demo - Page 2',
  body: {
    type: 'panel',
    items: [
      {
        type: 'selectbox',
        name: 'choosydata',
        label: 'Choose a pet',
        items: [
          { value: 'meow', text: 'Cat' },
          { value: 'woof', text: 'Dog' },
          { value: 'thunk', text: 'Rock' }
        ]
      },
      {
        type: 'htmlpanel',
        html: '<p>Click done and the dialog will log a message to the console, insert a sentence into the editor and close.</p>'
      }
    ]
  },
  buttons: [
    {
      type: 'custom',
      name: 'lastpage',
      text: 'Done',
      disabled: false
    }
  ],
  initialData: {
    choosydata: ''
  },
  onAction: (dialogApi, details) => {
    const data = dialogApi.getData();

    const result = 'You chose wisely: ' + data.choosydata;
    console.log(result);
    tinymce.activeEditor.execCommand('mceInsertContent', false, `<p>${result}</p>`);

    dialogApi.close();
  }
};

tinymce.init({
  selector: 'textarea#redial-demo',
  toolbar: 'wizardExample',
  height: '900px',
  setup: (editor) => {
    editor.ui.registry.addButton('wizardExample', {
      icon: 'code-sample',
      onAction: () => editor.windowManager.open(page1Config)
    })
  },
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});
