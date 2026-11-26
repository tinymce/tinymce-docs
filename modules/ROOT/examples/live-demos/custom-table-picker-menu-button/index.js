tinymce.init({
  selector: 'textarea#custom-table-picker-menu-button',
  height: 700,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'inserttable | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',

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
  },
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});
