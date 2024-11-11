tinymce.init({
  selector: "textarea#comments-ui-mode",
  plugins: [
    "tinycomments", "advlist", "anchor", "autolink", "charmap", "code", "fullscreen",
    "help", "image", "insertdatetime", "link", "lists", "media",
    "preview", "searchreplace", "table", "visualblocks", "quickbars", 'quickbars', 'image',
  ],
  toolbar: "addcomment showcomments | undo redo | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
  quickbars_selection_toolbar: 'alignleft aligncenter alignright | addcomment showcomments',
  quickbars_image_toolbar: 'alignleft aligncenter alignright | rotateleft rotateright | imageoptions',
  tinycomments_mode: 'embedded',
  tinycomments_access: 'comment',
  sidebar_show: 'showcomments'
});