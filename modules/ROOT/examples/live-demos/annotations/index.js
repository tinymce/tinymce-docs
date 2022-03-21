tinymce.init({
  selector: 'textarea#annotations',
  toolbar: [ 'annotate-alpha' ],
  menubar: false,
  height: '750px',
  content_style: '.mce-annotation { background-color: darkgreen; color: white; } ' +
    'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
  setup: (editor) => {
    editor.ui.registry.addButton('annotate-alpha', {
      text: 'Annotate',
      onAction: () => {
        const comment = prompt('Comment with?');
        editor.annotator.annotate('alpha', {
          uid: 'custom-generated-id',
          comment: comment
        });
        editor.focus();
      },
      onSetup: (btnApi) => {
        editor.annotator.annotationChanged('alpha', (state, name, obj) => {
          console.log('Current selection has an annotation: ', state);
          btnApi.setEnabled(!state);
        });
      }
    });

    editor.on('init', () => {
      editor.annotator.register('alpha', {
        persistent: true,
        decorate: (uid, data) => ({
          attributes: {
            'data-mce-comment': data.comment ? data.comment : '',
            'data-mce-author': data.author ? data.author : 'anonymous'
          }
        })
      });
    });
  }
});