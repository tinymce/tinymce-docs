tinymce.init({
  selector: 'textarea#advtable',
  height: '800px',
  plugins: 'table code advtable lists fullscreen',
  toolbar: 'undo redo | formatselect | bold italic | ' +
    'alignleft aligncenter alignright alignjustify | indent outdent | ' +
    'table tableinsertdialog tablecellprops tableprops advtablerownumbering | fullscreen',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});
