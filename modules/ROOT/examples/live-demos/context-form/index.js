tinymce.init({
  selector: 'textarea#context-form',
  height: 300,
  setup: (editor) => {
    const isAnchorElement = (node) => {
      return node.nodeName.toLowerCase() === 'a' && node.href;
    }

    const getAnchorElement = () => {
      const node = editor.selection.getNode();
      return isAnchorElement(node) ? node : null;
    };

    editor.ui.registry.addContextForm('link-form', {
      launch: {
        type: 'contextformtogglebutton',
        icon: 'link'
      },
      label: 'Link',
      predicate: isAnchorElement,
      placeholder: 'https://www.example.com',
      initValue: () => {
        const elm = getAnchorElement();
        return !!elm ? elm.href : '';
      },
      commands: [
        {
          type: 'contextformtogglebutton',
          icon: 'link',
          tooltip: 'Link',
          primary: true,
          onSetup: (buttonApi) => {
            buttonApi.setActive(!!getAnchorElement());
            const nodeChangeHandler = () => {
              buttonApi.setActive(!editor.readonly && !!getAnchorElement());
            };
            editor.on('nodechange', nodeChangeHandler);
            return () => editor.off('nodechange', nodeChangeHandler)
          },
          onAction: (formApi) => {
            const value = formApi.getValue();
            console.log('Save link clicked with value: ' + value);
            formApi.hide();
          }
        },
        {
          type: 'contextformtogglebutton',
          icon: 'unlink',
          tooltip: 'Remove link',
          active: false,
          onAction: (formApi) => {
            console.log('Remove link clicked');
            formApi.hide();
          }
        }
      ]
    });
  },
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});