var page1Config = {
  title: 'Redial Demo',
  body: {
    type: 'panel',
    items: [{
      type: 'htmlpanel',
      html: '<p>Redial allows the creation of multi-page forms.</p><p>The Next button has been configured to be disabled. When the <strong>checkbox</strong> is checked, the next button should be enabled</p>'
    }, {
      type: 'checkbox',
      name: 'anyterms',
      label: 'I agree to disagree'
    }, {
      type: 'htmlpanel',
      html: '<p>The next button calls the redial method which reloads a new dialog in place</p><p>Press next to continue</p>'
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
    var data = dialogApi.getData();
    /* Example of enabling and disabling a button, based on the checkbox state. */
    var toggle = data.anyterms ? dialogApi.enable : dialogApi.disable;
    toggle('uniquename');
  },
  onAction: (dialogApi, details) => {
    if (details.name === 'uniquename') {
      dialogApi.redial(page2Config);
    } else if (details.name === 'doesnothing') {
      /* this case should never be met as the button is never enabled. */
    }
  }
};

var page2Config = {
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
        html: '<p>Click done, your pet choice will be printed in the console.log and the dialog should close</p>'
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
    var data = dialogApi.getData();

    var result = 'you chose wisely: ' + data.choosydata;
    console.log(result);
    tinymce.activeEditor.execCommand('mceInsertContent', false, '<p>' + result + '</p>');

    dialogApi.close();
  }
};

tinymce.init({
  selector: 'textarea.wizard',
  toolbar: 'wizardExample',
  height: '900px',
  setup: (editor) => {
    editor.ui.registry.addButton('wizardExample', {
      icon: 'code-sample',
      onAction: () => {
        editor.windowManager.open(page1Config)
      }
    })
  }
});
