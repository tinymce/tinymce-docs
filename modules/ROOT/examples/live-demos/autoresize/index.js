tinymce.init({
  selector: 'textarea#autoresize',
  plugins: 'autoresize lists link advlist autolink image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
  toolbar: 'undo redo | blocks | bold italic | bullist numlist | link | backcolor | ' +
    'alignleft aligncenter alignright alignjustify | outdent indent | ' +
    'removeformat | help',
  min_height: 300,
  max_height: 700,
  autoresize_bottom_margin: 20,
  // Matches the side padding of the demo content stylesheet.
  autoresize_overflow_padding: 40,
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});
