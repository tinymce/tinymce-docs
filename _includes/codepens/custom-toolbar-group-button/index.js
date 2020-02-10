tinymce.init({
  selector: 'textarea#custom-toolbar-group-button',
  height: 500,
  toolbar_mode: 'floating',
  toolbar: 'alignment',

  content_css: [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    '//www.tiny.cloud/css/codepen.min.css'
  ],

  setup: function (editor) {

    /* example, adding a group toolbar button */
    editor.ui.registry.addGroupButton('alignment', {
      icon: 'align-left',
      tooltip: 'Alignment',
      items: 'alignleft aligncenter alignright | alignjustify'
    });

  }
});