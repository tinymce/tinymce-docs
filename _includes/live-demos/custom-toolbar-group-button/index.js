tinymce.init({
  selector: 'textarea#custom-toolbar-group-button',
  height: 500,
  toolbar_mode: 'floating',
  toolbar: 'alignment',

  setup: function (editor) {

    /* example, adding a group toolbar button */
    editor.ui.registry.addGroupToolbarButton('alignment', {
      icon: 'align-left',
      tooltip: 'Alignment',
      items: 'alignleft aligncenter alignright | alignjustify'
    });

  }
});