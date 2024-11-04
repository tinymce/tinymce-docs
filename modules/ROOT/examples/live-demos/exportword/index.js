tinymce.init({
  selector: 'textarea#exportword',
  height: '800px',
  plugins: [
    "exportword", "advlist", "anchor", "autolink", "charmap", "code", "fullscreen",
    "help", "image", "insertdatetime", "link", "lists", "media",
    "preview", "searchreplace", "table", "visualblocks",
  ],
  toolbar: "undo redo | exportword | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
  exportword_converter_options: {
    document: {
      size: 'A4',
      margins: {
        top: "1in",
        bottom: "1in",
        left: "1in",
        right: "1in"
      }
    }
  }
});
