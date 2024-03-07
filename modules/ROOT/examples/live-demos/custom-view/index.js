tinymce.init({
  selector: "textarea#custom-view",
  toolbar: "showCodeView",
  height: 600,
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
            const codeContent = document.querySelector('.tox-view__pane_panel').value;
            ed.setContent(codeContent);
            ed.execCommand('ToggleView', false, 'code');
            console.log('save');
          }
        },
      ],
      onShow: (api) => {
        const editorContent = ed.getContent();
        api.getContainer().innerHTML = `
          <div style="height: 100%">
            <textarea class="tox-view__pane_panel" style="width: 100%; height: 100%; resize: none; padding: 0.5em">
              ${editorContent}
            </textarea>
          </div>`.replace(/\s+/g, '');
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
  },
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});