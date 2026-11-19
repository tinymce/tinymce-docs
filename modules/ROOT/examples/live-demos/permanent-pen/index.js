tinymce.init({
  selector: 'textarea#permanent-pen',
  height: 620,
  plugins: 'permanentpen lists advlist autolink link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
  toolbar: 'permanentpen | undo redo | blocks | bold italic | bullist numlist | ' +
    'backcolor | alignleft aligncenter alignright alignjustify | ' +
    'outdent indent | removeformat | help',
  menu: {
    format: {
      title: 'Format',
      items: 'configurepermanentpen permanentpen | bold italic underline strikethrough | forecolor backcolor | removeformat'
    }
  },
  contextmenu: 'configurepermanentpen',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  permanentpen_properties: {
    fontname: 'arial,helvetica,sans-serif',
    fontsize: '12pt',
    forecolor: '#1A56DB',
    hilitecolor: '#E8F0FE',
    bold: true,
    italic: false,
    underline: false,
    strikethrough: false
  }
});
