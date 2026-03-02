tinymce.init({
  selector: 'textarea#custom-table-picker-menu-button',
  height: 600,
  plugins: 'table',
  toolbar: 'inserttable',
  menubar: false,

  setup: (editor) => {
    editor.ui.registry.addMenuButton('inserttable', {
      icon: 'table',
      tooltip: 'Insert table',
      fetch: (callback) => {
        callback([
          {
            type: 'fancymenuitem',
            fancytype: 'inserttable',
            onAction: (data) => {
              editor.execCommand('mceInsertTable', false, {
                rows: data.numRows,
                columns: data.numColumns,
                options: { headerRows: 1 }
              });
            }
          }
        ]);
      }
    });
  }
});
