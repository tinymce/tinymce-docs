tinymce.init({
  selector: 'textarea#permanent-pen',
  plugins: 'permanentpen code',
  contextmenu: 'configurepermanentpen',
  toolbar: 'permanentpen code',
  menubar: 'file edit view format table tools help',
  menu: {
    format: {
      title: 'Format', 
      items: 'configurepermanentpen | bold italic underline strikethrough ' + 
        'superscript subscript codeformat | formats blockformats fontformats ' + 
        'fontsizes align | forecolor backcolor | removeformat'
    }
  },
  permanentpen_properties: {
    fontname: 'arial,helvetica,sans-serif',
    forecolor: '#E74C3C',
    fontsize: '12pt',
    hilitecolor: '',
    bold: true,
    italic: false,
    strikethrough: false,
    underline: false
  },
  height: 500,
  content_css: '//www.tiny.cloud/css/codepen.min.css'
});