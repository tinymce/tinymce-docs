tinymce.init({
  selector: "textarea#checklist",
  content_css: '//www.tiny.cloud/css/codepen.min.css',
  plugins: "lists checklist",
  toolbar: "checklist",
  height: 200,
  width: 350,
  menu: { 
    format: { 
      title: 'Format',
      items: 'checklist | bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align | forecolor backcolor | removeformat' 
    }
  }
});
