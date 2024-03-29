tinymce.init({
  selector: 'textarea#toolbar-button',
  toolbar: 'basicDateButton selectiveDateButton toggleDateButton splitDateButton menuDateButton',
  setup: (editor) => {

    /* Helper functions */
    const toDateHtml = (date) => `<time datetime="${date.toString()}">${date.toDateString()}</time>`;
    const toGmtHtml = (date) => `<time datetime="${date.toString()}">${date.toGMTString()}</time>`;
    const toIsoHtml = (date) => `<time datetime="${date.toString()}">${date.toISOString()}</time>`;

    /* Basic button that just inserts the date */
    editor.ui.registry.addButton('basicDateButton', {
      text: 'Insert Date',
      tooltip: 'Insert Current Date',
      onAction: (_) => editor.insertContent(toDateHtml(new Date()))
    });

    /* Basic button that inserts the date, but only if the cursor isn't currently in a "time" element */
    editor.ui.registry.addButton('selectiveDateButton', {
      icon: 'insert-time',
      tooltip: 'Insert Current Date',
      enabled: false,
      onAction: (_) => editor.insertContent(toDateHtml(new Date())),
      onSetup: (buttonApi) => {
        const editorEventCallback = (eventApi) => {
          buttonApi.setEnabled(eventApi.element.nodeName.toLowerCase() !== 'time');
        };
        editor.on('NodeChange', editorEventCallback);
        return () => editor.off('NodeChange', editorEventCallback);
      }
    });

    /* Toggle button that inserts the date, but becomes inactive when the cursor is in a "time" element */
    /* so you can't insert a "time" element inside another one. Also gives visual feedback. */
    editor.ui.registry.addToggleButton('toggleDateButton', {
      icon: 'insert-time',
      tooltip: 'Insert Current Date',
      onAction: (_) => editor.insertContent(toDateHtml(new Date())),
      onSetup: (buttonApi) => {
        const editorEventCallback = (eventApi) => {
          buttonApi.setActive(eventApi.element.nodeName.toLowerCase() === 'time');
        };
        editor.on('NodeChange', editorEventCallback);
        return () => editor.off('NodeChange', editorEventCallback);
      }
    });

    /* Split button that lists 3 formats, and inserts the date in the selected format when clicked */
    editor.ui.registry.addSplitButton('splitDateButton', {
      text: 'Insert Date',
      onAction: (_) => editor.insertContent('<p>Its Friday!</p>'),
      onItemAction: (buttonApi, value) => editor.insertContent(value),
      fetch: (callback) => {
        const items = [
          {
            type: 'choiceitem',
            text: 'Insert Date',
            value: toDateHtml(new Date())
          },
          {
            type: 'choiceitem',
            text: 'Insert GMT Date',
            value: toGmtHtml(new Date())
          },
          {
            type: 'choiceitem',
            text: 'Insert ISO Date',
            value: toIsoHtml(new Date())
          }
        ];
        callback(items);
      }
    });

    /* Menu button that has a simple "insert date" menu item, and a submenu containing other formats. */
    /* Clicking the first menu item or one of the submenu items inserts the date in the selected format. */
    editor.ui.registry.addMenuButton('menuDateButton', {
      text: 'Date',
      fetch: (callback) => {
        const items = [
          {
            type: 'menuitem',
            text: 'Insert Date',
            onAction: (_) => editor.insertContent(toDateHtml(new Date()))
          },
          {
            type: 'nestedmenuitem',
            text: 'Other formats',
            getSubmenuItems: () => [
              {
                type: 'menuitem',
                text: 'GMT',
                onAction: (_) => editor.insertContent(toGmtHtml(new Date()))
              },
              {
                type: 'menuitem',
                text: 'ISO',
                onAction: (_) => editor.insertContent(toIsoHtml(new Date()))
              }
            ]
          }
        ];
        callback(items);
      }
    });
  },
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});
