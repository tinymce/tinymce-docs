tinymce.init({
  selector: 'textarea#importword',
  height: '800px',
  plugins: [
    "importword", "advlist", "anchor", "autolink", "charmap", "code", "fullscreen",
    "help", "image", "insertdatetime", "link", "lists", "media",
    "preview", "searchreplace", "table", "visualblocks",
],
toolbar: "undo redo | importword | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
});
