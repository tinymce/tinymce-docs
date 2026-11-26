tinymce.init({
  selector: 'textarea#default-editor',
  plugins: [
      "advlist", "anchor", "autolink", "charmap", "code", "fullscreen",
      "help", "image", "insertdatetime", "link", "lists", "media",
      "preview", "searchreplace", "table", "visualblocks",
  ],
  toolbar: "undo redo | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
});