tinymce.init({
  selector: 'textarea',
  toolbar: 'customInsertButton customDateButton',
  setup: (editor) => {

    editor.ui.registry.addButton('customInsertButton', {
      text: 'My Button',
      onAction: (_) => editor.insertContent('&nbsp;<strong>It\'s my button!</strong>&nbsp;')
    });

    const toTimeHtml = (date) => `<time datetime="${date.toString()}">${date.toDateString()}</time>`;

    editor.ui.registry.addButton('customDateButton', {
      icon: 'insert-time',
      tooltip: 'Insert Current Date',
      disabled: true,
      onAction: (_) => editor.insertContent(toTimeHtml(new Date())),
      onSetup: (buttonApi) => {
        const editorEventCallback = (eventApi) => buttonApi.setDisabled(eventApi.element.nodeName.toLowerCase() === 'time');
        editor.on('NodeChange', editorEventCallback);
        
        /* onSetup should always return the unbind handlers */
        return (buttonApi) => editor.off('NodeChange', editorEventCallback);
      }
    });
  }
});