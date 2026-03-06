tinymce.init({
  selector: 'textarea#exportpdf-v2',
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
