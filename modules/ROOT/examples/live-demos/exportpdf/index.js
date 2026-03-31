tinymce.init({
  selector: 'textarea.exportpdf-flat',
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

tinymce.init({
  selector: 'textarea.exportpdf-nested',
  height: '800px',
  plugins: [
    "exportpdf", "advlist", "anchor", "autolink", "charmap", "code", "codesample", "fullscreen",
    "help", "image", "insertdatetime", "link", "lists", "media",
    "preview", "searchreplace", "table", "visualblocks",
  ],
  toolbar: "undo redo | exportpdf | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
  image_caption: true,
  exportpdf_converter_options: {
    version: '2',
    document: {
      size: 'A4',
      orientation: 'portrait',
      margins: {
        top: '1in',
        right: '1in',
        bottom: '1in',
        left: '1in',
        enable_mirror_margins: true
      }
    },
    metadata: {
      title: 'Streamline LMS Overview',
      author: 'TinyMCE',
      subject: 'Learning Management System',
      keywords: [ 'LMS', 'education', 'Streamline' ]
    }
  }
});
