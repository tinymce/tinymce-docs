tinymce.init({
  selector: 'textarea#exportpdf',
  height: '800px',
  plugins: [
    "exportpdf", "advlist", "anchor", "autolink", "charmap", "code", "fullscreen",
    "help", "image", "insertdatetime", "link", "lists", "media",
    "preview", "searchreplace", "table", "visualblocks",
],
toolbar: "undo redo | exportpdf | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
});
