// a generic TinyMCE configuration with ai plugin and toolbar added.

tinymce.init({
  selector: 'textarea#ai',
  plugins: [
    "advlist", "anchor", "autolink", "charmap", "code", "fullscreen", 
    "help", "image", "insertdatetime", "link", "lists", "media", 
    "preview", "searchreplace", "table", "visualblocks", "ai",
    ],
  height: 1200,
  toolbar: "aidialog | undo redo |link image accordion | styles | bold italic underline strikethrough | align | bullist numlist"
});

