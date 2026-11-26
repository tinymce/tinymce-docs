tinymce.init({
  selector: "textarea#custom-view",
  height: 720,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'showCodeView | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  setup: (ed) => {
    ed.ui.registry.addView('code', {
      buttons: [
        {
          type: 'button',
          text: 'Cancel',
          buttonType: 'secondary',
          onAction: () => {
            ed.execCommand('ToggleView', false, 'code');
            console.log('close');
          }
        },
        {
          type: 'button',
          text: 'Save code',
          buttonType: 'primary',
          onAction: () => {
            const codeContent = document.querySelector('.my-textarea').value;
            ed.setContent(codeContent);
            ed.execCommand('ToggleView', false, 'code');
            console.log('save');
          }
        },
      ],
      onShow: (api) => {
        const editorContent = ed.getContent();
        const container = api.getContainer();
        container.innerHTML = `
          <div style="height: 100%">
            <textarea class="my-textarea" style="width: 100%; height: 100%; resize: none; padding: 0.5em"></textarea>
          </div>`;
        container.querySelector('.my-textarea').value = editorContent;
      },
      onHide: (api) => {
        console.log('Deactivate code', api.getContainer());
      }
    });

    ed.ui.registry.addButton('showCodeView', {
      icon: 'sourcecode',
      text: 'Show Code View',
      onAction: (_api) => {
        console.log('source code editor');
        ed.execCommand('ToggleView', false, 'code');
      }
    });
  }
});
