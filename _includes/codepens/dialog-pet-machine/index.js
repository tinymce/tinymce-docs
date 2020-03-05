/*
** Adding some additional fonts to the TinyMCE fonts list
** to allow the editor content to match the surrounding content.
*/
const fontList = 'Andale Mono=andale mono,monospace;' +
  'Aileron=aileron,sans-serif;' +
  'Arial=arial,helvetica,sans-serif;' +
  'Arial Black=arial black,sans-serif;' +
  'Avenir=Avenir W01,sans-serif;' +
  'Book Antiqua=book antiqua,palatino,serif;' +
  'Comic Sans MS=comic sans ms,sans-serif;' +
  'Courier New=courier new,courier,monospace;' +
  'Georgia=georgia,palatino,serif;' +
  'Helvetica=helvetica,arial,sans-serif;' +
  'Impact=impact,sans-serif;' +
  'Symbol=symbol;' +
  'Tahoma=tahoma,arial,helvetica,sans-serif;' +
  'Terminal=terminal,monaco,monospace;' +
  'Times New Roman=times new roman,times,serif;' +
  'Trebuchet MS=trebuchet ms,geneva,sans-serif;' +
  'Verdana=verdana,geneva,sans-serif;' +
  'Webdings=webdings;' +
  'Wingdings=wingdings,zapf dingbats';
  
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

// Initialize the TinyMCE editor
tinymce.init({
  selector: 'textarea.petMachine',
  toolbar: 'dialog-example-btn',
  setup: function (editor) {
    editor.ui.registry.addButton('dialog-example-btn', {
      icon: 'code-sample',
      onAction: function () {
        editor.windowManager.open(dialogConfig)
      }
    })
  },
  font_formats: fontList,
  content_css: '//www.tiny.cloud/css/codepen.min.css',
});

