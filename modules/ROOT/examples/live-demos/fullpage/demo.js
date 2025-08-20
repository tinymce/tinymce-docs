tinymce.init({
  selector: 'textarea#fullpage',
  height: '800px',
  plugins: [
    "fullpage", "advlist", "anchor", "autolink", "charmap", "code", "fullscreen",
    "help", "image", "insertdatetime", "link", "lists", "media",
    "preview", "searchreplace", "table", "visualblocks",
  ],
  menubar: 'file',
  toolbar: "undo redo | fullpage | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
  // Full Page Plugin Configuration Options
  fullpage_default_doctype: '<!DOCTYPE html>',  // Has default in source code
  fullpage_default_title: 'Full Page Plugin Demo Document',  // No default in source code
  fullpage_default_encoding: 'UTF-8',  // No default in source code
  fullpage_default_body_style: 'margin: 20px; padding: 15px; font-family: Georgia, Times, serif; font-size: 16px; color: #2c3e50;'  // No default in source code
});