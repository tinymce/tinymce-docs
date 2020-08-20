tinymce.init({
  selector: 'textarea#checklist',
  plugins: 'lists checklist',
  toolbar: 'checklist',
  height: 200,
  width: 350,
  menu: {
    format: {
      title: 'Format',
      items: 'checklist | bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align | forecolor backcolor | removeformat'
    }
  },
  content_style: {{site.liveDemoIframeCSSStyles}}
});
