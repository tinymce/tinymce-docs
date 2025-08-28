tinymce.init({
  selector: 'textarea#fullpagehtml',
  height: '800px',
  plugins: [
    "fullpagehtml", "advlist", "anchor", "autolink", "charmap", "code", "fullscreen",
    "help", "image", "insertdatetime", "link", "lists", "media",
    "preview", "searchreplace", "table", "visualblocks",
  ],
  menubar: 'file',
  toolbar: "undo redo | fullpagehtml | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
  // Full Page HTML Plugin Configuration Options
  fullpagehtml_default_doctype: '<!DOCTYPE html>',
  fullpagehtml_default_title: 'Full Page HTML Plugin Demo Document',
  fullpagehtml_default_encoding: 'UTF-8',
  fullpagehtml_default_body_style: 'margin: 20px; padding: 15px; font-family: Georgia, Times, serif; font-size: 16px; color: #2c3e50;',
  fullpagehtml_hide_in_source_view: false  // Show full page HTML in source view
});