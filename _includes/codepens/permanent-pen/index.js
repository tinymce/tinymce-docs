tinymce.init({
  selector: 'textarea',
  plugins: 'permanentpen code',
  contextmenu: 'configurepermanentpen',
  toolbar: 'permanentpen code',
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
  content_css: [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    '//www.tiny.cloud/css/codepen.min.css'
  ]
});