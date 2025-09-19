tinymce.init({
  selector: 'textarea#anchor-demo',
  height: 500,
  plugins: [
    "advlist", "anchor", "autolink", "charmap", "code", "fullscreen",
    "help", "image", "insertdatetime", "link", "lists", "media",
    "preview", "searchreplace", "table", "visualblocks",
  ],
  toolbar: "anchor |undo redo | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
  menubar: "file edit view insert format tools table help",
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});
