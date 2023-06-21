tinymce.init({
  selector: 'textarea#accordion',
  plugins: [
    "advlist", "anchor", "autolink", "charmap", "code", "fullscreen", 
    "help", "image", "insertdatetime", "link", "lists", "media", 
    "preview", "searchreplace", "table", "visualblocks", "accordion"
    ],
  height: 1200,
  toolbar: "undo redo |link image accordion | styles | bold italic underline strikethrough | align | bullist numlist",
});
