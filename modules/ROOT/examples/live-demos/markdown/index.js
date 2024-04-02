tinymce.init({
  selector: 'textarea.markdown',
  plugins: [
    "markdown", "advlist", "anchor", "autolink", "charmap", "code", "fullscreen",
    "help", "image", "insertdatetime", "link", "lists", "media",
    "preview", "searchreplace", "table", "visualblocks",
  ],
  toolbar: "undo redo | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
  height: 600,
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});