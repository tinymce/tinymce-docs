tinymce.init({
  selector: 'textarea.advcodedemo',
  plugins: 'advcode',
  plugins: [
    "advcode", "advlist", "anchor", "autolink", "charmap", "fullscreen",
    "help", "image", "insertdatetime", "link", "lists", "media",
    "preview", "searchreplace", "table", "visualblocks",
  ],
  toolbar: "code | undo redo | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
  height: 600,
  width: '100%',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});

tinymce.init({
  selector: 'textarea.codedemo',
  plugins: [
    "code", "advlist", "anchor", "autolink", "charmap", "fullscreen",
    "help", "image", "insertdatetime", "link", "lists", "media",
    "preview", "searchreplace", "table", "visualblocks",
  ],
  toolbar: "code | undo redo | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
  height: 600,
  width: '100%',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});
