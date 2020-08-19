var settings = {
  selector: 'textarea#annotations',
  toolbar: ['annotate-alpha'],
  menubar: false,
  height: '750px',
  content_style: '.mce-annotation { background-color: darkgreen; color: white; }',

  setup: function (editor) {
    editor.ui.registry.addButton('annotate-alpha', {
      text: 'Annotate',
      onAction: function() {
        var comment = prompt('Comment with?');
        editor.annotator.annotate('alpha', {
          uid: 'custom-generated-id',
          comment: comment
        });
        editor.focus();
      },
      onSetup: function (btnApi) {
        editor.annotator.annotationChanged('alpha', function (state, name, obj) {
          console.log('Current selection has an annotation: ', state);
          btnApi.setDisabled(state);
        });
      }
    });

    editor.on('init', function () {
      editor.annotator.register('alpha', {
        persistent: true,
        decorate: function (uid, data) {
          return {
            attributes: {
              'data-mce-comment': data.comment ? data.comment : '',
              'data-mce-author': data.author ? data.author : 'anonymous'
            }
          };
        }
      });
    });
  }
};

tinymce.init(settings);