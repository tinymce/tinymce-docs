tinymce.init({
  selector: 'textarea#checklist',
  plugins: 'lists checklist',
  toolbar: 'checklist',
  height: 250,
  menu: {
    format: {
      title: 'Format',
      items: 'checklist | bold italic underline strikethrough superscript subscript codeformat | formats blocks fontfamily fontsize align | forecolor backcolor | removeformat'
    }
  },
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});
