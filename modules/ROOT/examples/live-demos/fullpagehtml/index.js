tinymce.init({
  selector: 'textarea#fullpagehtml',
  height: 620,
  plugins: 'fullpagehtml code lists link advlist autolink image charmap preview anchor searchreplace visualblocks fullscreen insertdatetime media table help wordcount',
  toolbar: 'fullpagehtml code | undo redo | blocks | bold italic | bullist numlist | ' +
    'link | backcolor | alignleft aligncenter alignright alignjustify | ' +
    'outdent indent | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  // Show the doctype, head and body element in the Source code dialog.
  // Set to true to show only the body content there.
  fullpagehtml_hide_in_source_view: false
});
