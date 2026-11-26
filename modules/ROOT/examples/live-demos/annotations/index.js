tinymce.init({
  selector: 'textarea#annotations',
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'annotate-alpha | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link table | removeformat | help',
  height: 750,
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  content_style: '.mce-annotation { background-color: darkgreen; color: white; }',
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