tinymce.init({
  selector: 'textarea#advtable',
  height: '800px',
  plugins: 'table code advtable lists fullscreen',
  toolbar: 'undo redo | formatselect | bold italic | ' +
    'alignleft aligncenter alignright alignjustify | indent outdent | ' +
    'table tableinsertdialog tablecellprops tableprops | fullscreen',
  content_style: {{site.liveDemoIframeCSSStyles}}
});