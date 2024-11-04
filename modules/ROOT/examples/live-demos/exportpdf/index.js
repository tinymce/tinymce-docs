tinymce.init({
  selector: 'textarea#exportpdf',
  height: '800px',
  plugins: [
    "exportpdf", "advlist", "anchor", "autolink", "charmap", "code", "codesample", "fullscreen",
    "help", "image", "insertdatetime", "link", "lists", "media",
    "preview", "searchreplace", "table", "visualblocks",
  ],
  toolbar: "undo redo | exportpdf | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
  image_caption: true,
  exportpdf_converter_options: {
    format: 'A4',
    margin_top: '1in',
    margin_right: '1in',
    margin_bottom: '1in',
    margin_left: '1in'
  }
});
