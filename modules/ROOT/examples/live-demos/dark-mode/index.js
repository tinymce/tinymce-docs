tinymce.init({
  selector: 'textarea#dark-mode',
  height: 500,
  menubar: false,
  skin: 'oxide-dark',
  content_css: 'dark',
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor',
    'searchreplace', 'visualblocks', 'code', 'fullscreen', 'insertdatetime',
    'media', 'table', 'code', 'help', 'wordcount'
  ],
  toolbar: 'undo redo | blocks | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help | fullscreen code',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});