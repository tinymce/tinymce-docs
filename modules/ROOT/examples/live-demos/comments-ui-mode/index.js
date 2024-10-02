tinymce.init({
  selector: "textarea#comments-ui-mode",
  plugins: [
    "tinycomments", "advlist", "anchor", "autolink", "charmap", "code", "fullscreen",
    "help", "image", "insertdatetime", "link", "lists", "media",
    "preview", "searchreplace", "table", "visualblocks",
  ],
  toolbar: "addcomment showcomments | undo redo | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
  tinycomments_mode: 'embedded',
  tinycomments_access: 'comment'
});