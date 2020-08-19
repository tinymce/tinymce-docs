tinymce.init({
  selector: 'textarea#advtable',
  content_css: '//www.tiny.cloud/css/codepen.min.css',
  height: '800px',
  plugins: 'table code advtable lists fullscreen',
  toolbar: 'undo redo | formatselect | bold italic | ' +
    'alignleft aligncenter alignright alignjustify | indent outdent | ' +
    'table tableinsertdialog tablecellprops tableprops | fullscreen'
});